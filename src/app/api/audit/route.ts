import { NextResponse } from "next/server";
import {
  checkRateLimit,
  checkIsDuplicate,
  processAndStoreLead,
  maskEmail,
  RawLeadSubmission,
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

    // 2. Silent Honeypot Spam Protection
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

    // 3. Required Fields & Sanitization Validation
    const {
      fullName,
      businessName,
      businessWebsite,
      businessEmail,
      country,
      industry,
      services,
      mainChallenge,
      marketingSituation,
      timeline,
      budget,
      phone,
      preferredContactMethod,
      consentFollowUp,
      attribution,
    } = data;

    if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
      return NextResponse.json(
        { error: "Please provide your full name." },
        { status: 422 }
      );
    }

    if (!businessName || typeof businessName !== "string" || !businessName.trim()) {
      return NextResponse.json(
        { error: "Please provide your company or business name." },
        { status: 422 }
      );
    }

    if (!businessWebsite || typeof businessWebsite !== "string" || !businessWebsite.trim()) {
      return NextResponse.json(
        { error: "Please provide your business website URL." },
        { status: 422 }
      );
    }

    // Website URL basic structure
    const cleanedUrl = businessWebsite.trim();
    if (!cleanedUrl.includes(".") || cleanedUrl.length < 4) {
      return NextResponse.json(
        { error: "Please enter a valid website URL or domain." },
        { status: 422 }
      );
    }

    if (!businessEmail || typeof businessEmail !== "string" || !businessEmail.trim()) {
      return NextResponse.json(
        { error: "Please provide your business email address." },
        { status: 422 }
      );
    }

    // RFC-standard email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(businessEmail.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid business email address." },
        { status: 422 }
      );
    }

    // Services validation
    const selectedServices = Array.isArray(services) && services.length > 0
      ? services
      : ["SEO & Local SEO"];

    // 4. Duplicate Submission Protection
    if (checkIsDuplicate(businessEmail.trim(), cleanedUrl)) {
      return NextResponse.json(
        {
          error: "An inquiry for this website and email was recently received. Our strategists are already reviewing your domain.",
        },
        { status: 429 }
      );
    }

    // 5. Build submission payload
    const submission: RawLeadSubmission = {
      fullName: fullName.trim(),
      businessName: businessName.trim(),
      businessWebsite: cleanedUrl,
      businessEmail: businessEmail.trim().toLowerCase(),
      phone: phone ? String(phone).trim() : undefined,
      preferredContactMethod: preferredContactMethod || "Email",
      country: country || "United States",
      industry: industry || "General Industry",
      services: selectedServices,
      mainChallenge: mainChallenge ? String(mainChallenge).trim() : "General growth diagnostic requested",
      marketingSituation: marketingSituation ? String(marketingSituation).trim() : undefined,
      timeline: timeline ? String(timeline).trim() : undefined,
      budget: budget || "$1,000 - $3,000 / month",
      consentFollowUp: consentFollowUp !== false,
      attribution,
      ipAddress: clientIp,
      userAgent: request.headers.get("user-agent") || undefined,
    };

    // 6. Durable Storage, Lead Scoring & Dispatch
    const storageResult = await processAndStoreLead(submission);

    if (!storageResult.persistedDurable && !storageResult.emailStatus.agencyEmailSent) {
      return NextResponse.json(
        {
          error:
            "Our automated lead ingestion is currently unavailable. Please reach out to our team directly at contact@growbymasters.com.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        referenceId: storageResult.referenceId,
        message:
          "Your Growth Audit request has been registered. Our senior growth strategist is inspecting your digital architecture and will deliver an executive diagnostic within 24 business hours.",
        leadSummary: {
          referenceId: storageResult.referenceId,
          businessName: storageResult.leadRecord.businessName,
          businessWebsite: storageResult.leadRecord.businessWebsite,
          contactEmail: maskEmail(storageResult.leadRecord.businessEmail),
          priorityTier: storageResult.leadRecord.priority,
          estimatedTurnaround: "1 Business Day",
          bookingLink: `/book-call?ref=${encodeURIComponent(storageResult.referenceId)}`,
        },
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[AUDIT_API_ERROR]", err instanceof Error ? err.message : String(err));
    return NextResponse.json(
      {
        error: "An unexpected error occurred while processing your request. Please try again or email contact@growbymasters.com directly.",
      },
      { status: 500 }
    );
  }
}
