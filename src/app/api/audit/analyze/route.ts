import { NextResponse } from "next/server";
import { analyzeUrl, isSafeAuditUrl } from "@/lib/auditAnalyzer";
import { checkRateLimit } from "@/lib/leadStorage";

export async function POST(request: Request) {
  try {
    // 1. IP Rate Limiting (max 6 audits / 10 minutes per IP)
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : realIp || "127.0.0.1";

    const rateLimit = checkRateLimit(`audit-scan-${clientIp}`);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: `Audit rate limit reached. Please wait ${rateLimit.retryAfterSeconds || 60} seconds before auditing another URL.`,
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { url } = body;

    if (!url || typeof url !== "string" || !url.trim()) {
      return NextResponse.json(
        { error: "Please enter a valid website URL to analyze." },
        { status: 422 }
      );
    }

    // 2. SSRF & URL Safety Validation
    const urlCheck = isSafeAuditUrl(url.trim());
    if (!urlCheck.safe) {
      return NextResponse.json(
        { error: urlCheck.error || "The submitted URL could not be verified." },
        { status: 422 }
      );
    }

    // 3. Execute Real Technical Analysis
    const report = await analyzeUrl(url.trim());

    return NextResponse.json(
      {
        success: true,
        report,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[AUDIT_ANALYZER_API_ERROR]", err instanceof Error ? err.message : String(err));
    return NextResponse.json(
      {
        error:
          err instanceof Error
            ? err.message
            : "Could not reach target website. Please check that the URL is public and online.",
      },
      { status: 500 }
    );
  }
}
