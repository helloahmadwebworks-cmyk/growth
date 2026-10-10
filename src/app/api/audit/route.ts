import { NextResponse } from "next/server";
import {
  checkRateLimit,
  maskEmail,
  persistAndDispatchLead,
  AuditLeadRecord,
} from "@/lib/leadStorage";

export async function POST(request: Request) {
  try {
    // 1. Client IP Extraction & Rate Limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : realIp || "127.0.0.1";

    const rateLimitResult = checkRateLimit(clientIp);
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          error: `Too many submissions from your network. Please wait ${rateLimitResult.retryAfterSeconds || 60} seconds before submitting again.`,
        },
        { status: 429 }
      );
    }

    const data = await request.json();

    // 2. Silent Honeypot Spam Check (Never reveal honeypot trap to automated bots)
    if (data.company_website_hp) {
      const silentReferenceId = `GBM-AUD-${Date.now().toString(36).toUpperCase()}`;
      return NextResponse.json(
        {
          success: true,
          referenceId: silentReferenceId,
          message:
            "Your Growth Audit request has been registered. Our strategists will inspect your domain within 24 business hours.",
        },
        { status: 200 }
      );
    }

    // 3. Required Fields Validation
    const {
      fullName,
      businessName,
      businessWebsite,
      businessEmail,
      country,
      industry,
      services,
      mainChallenge,
      budget,
      phone,
    } = data;

    if (!fullName || !businessName || !businessWebsite || !businessEmail) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 422 }
      );
    }

    // 4. Email Format Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(businessEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid business email address." },
        { status: 422 }
      );
    }

    // 5. Website URL Sanity Check
    if (!businessWebsite.includes(".") || businessWebsite.length < 4) {
      return NextResponse.json(
        { error: "Please enter a valid website URL or domain." },
        { status: 422 }
      );
    }

    const referenceId = `GBM-AUD-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    const auditLead: AuditLeadRecord = {
      referenceId,
      timestamp,
      fullName: fullName.trim(),
      businessName: businessName.trim(),
      businessWebsite: businessWebsite.trim(),
      businessEmail: businessEmail.trim().toLowerCase(),
      phone: phone?.trim() || "Not provided",
      country: country || "United States",
      industry: industry || "Not specified",
      services: Array.isArray(services) ? services : [services],
      mainChallenge: mainChallenge?.trim() || "General growth audit",
      budget: budget || "Not specified",
      status: "RECEIVED_PENDING_REVIEW",
      ipAddress: clientIp,
      userAgent: request.headers.get("user-agent") || undefined,
    };

    // 6. Persistent Storage & Webhook/Email Dispatch
    const dispatchResult = await persistAndDispatchLead(auditLead);

    // 7. Sanitized Logging (Zero unprotected PII in stdout logs)
    console.log(
      `[LEAD_PROCESSED] Ref: ${referenceId} | Company: "${auditLead.businessName}" | Domain: "${auditLead.businessWebsite}" | Email: ${maskEmail(auditLead.businessEmail)} | Country: ${auditLead.country} | Stored: ${dispatchResult.destination.join(", ")}`
    );

    return NextResponse.json(
      {
        success: true,
        referenceId,
        message:
          "Your Growth Audit request has been registered. Our strategists will inspect your domain within 24 business hours.",
        leadSummary: {
          referenceId,
          businessName: auditLead.businessName,
          businessWebsite: auditLead.businessWebsite,
          contactEmail: maskEmail(auditLead.businessEmail),
          status: "In Strategic Review",
          estimatedTurnaround: "1 Business Day",
        },
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[AUDIT_API_ERROR]", err instanceof Error ? err.message : String(err));
    return NextResponse.json(
      {
        error: "An unexpected error occurred while processing your request. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}
