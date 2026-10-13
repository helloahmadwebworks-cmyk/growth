/**
 * GrowByMasters Transactional Email Service
 *
 * Handles:
 * 1. Branded confirmation email to prospect (respecting consent)
 * 2. Internal agency alert email with lead score and priority badge
 * 3. Strategy call booking confirmation emails
 */

import { EnrichedLeadRecord } from "./crmService";

export interface EmailDispatchResult {
  prospectEmailSent: boolean;
  agencyEmailSent: boolean;
  error?: string;
}

export async function sendLeadNotificationEmails(
  lead: EnrichedLeadRecord
): Promise<EmailDispatchResult> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFICATION_EMAIL || "contact@growbymasters.com";

  if (!resendApiKey) {
    return {
      prospectEmailSent: false,
      agencyEmailSent: false,
      error: "RESEND_API_KEY is not configured.",
    };
  }

  let prospectEmailSent = false;
  let agencyEmailSent = false;

  // 1. Internal Agency Alert
  try {
    const priorityColor =
      lead.priority === "High priority"
        ? "#237A72"
        : lead.priority === "Medium priority"
        ? "#D8B477"
        : "#8C959D";

    const agencyHtml = `
      <!DOCTYPE html>
      <html>
      <body style="font-family: Arial, sans-serif; background-color: #F7F5F0; padding: 24px; color: #1D2732;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #EAE6DC; overflow: hidden;">
          <div style="background-color: #101A24; padding: 20px 24px; color: #ffffff;">
            <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #D8B477;">GrowByMasters Inbound Pipeline</div>
            <h2 style="margin: 8px 0 0 0; font-size: 20px; font-weight: normal;">New Growth Audit Inquiry: ${lead.businessName}</h2>
          </div>
          <div style="padding: 24px;">
            <div style="display: inline-block; padding: 4px 12px; border-radius: 16px; background-color: ${priorityColor}15; color: ${priorityColor}; font-weight: bold; font-size: 12px; margin-bottom: 16px;">
              ${lead.priority.toUpperCase()} (Score: ${lead.score}/100)
            </div>
            
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
              <tr><td style="padding: 8px 0; color: #626B73; width: 140px;">Reference ID:</td><td style="padding: 8px 0; font-weight: bold;">${lead.referenceId}</td></tr>
              <tr><td style="padding: 8px 0; color: #626B73;">Contact Name:</td><td style="padding: 8px 0;">${lead.fullName}</td></tr>
              <tr><td style="padding: 8px 0; color: #626B73;">Business Email:</td><td style="padding: 8px 0;"><a href="mailto:${lead.businessEmail}" style="color: #237A72;">${lead.businessEmail}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #626B73;">Website:</td><td style="padding: 8px 0;"><a href="${lead.businessWebsite}" target="_blank" style="color: #237A72;">${lead.businessWebsite}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #626B73;">Phone / WhatsApp:</td><td style="padding: 8px 0;">${lead.phone || "Not provided"} (${lead.preferredContactMethod || "Email"})</td></tr>
              <tr><td style="padding: 8px 0; color: #626B73;">Country & Industry:</td><td style="padding: 8px 0;">${lead.country} · ${lead.industry}</td></tr>
              <tr><td style="padding: 8px 0; color: #626B73;">Services:</td><td style="padding: 8px 0; font-weight: bold; color: #101A24;">${lead.services.join(", ")}</td></tr>
              <tr><td style="padding: 8px 0; color: #626B73;">Budget Tier:</td><td style="padding: 8px 0;">${lead.budget}</td></tr>
              <tr><td style="padding: 8px 0; color: #626B73;">Timeline:</td><td style="padding: 8px 0;">${lead.timeline || "Not specified"}</td></tr>
            </table>

            <div style="background-color: #FAF9F6; border: 1px solid #EAE6DC; border-radius: 8px; padding: 14px; margin-bottom: 20px;">
              <div style="font-size: 11px; text-transform: uppercase; font-weight: bold; color: #A48145; margin-bottom: 6px;">Primary Challenge & Situation</div>
              <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #1D2732;">${lead.mainChallenge}</p>
              ${lead.marketingSituation ? `<p style="margin: 8px 0 0 0; font-size: 12px; color: #626B73;"><strong>Situation:</strong> ${lead.marketingSituation}</p>` : ""}
            </div>

            <div style="background-color: #101A24; border-radius: 8px; padding: 14px; color: #CBD3DC; font-size: 12px;">
              <div style="color: #D8B477; font-weight: bold; margin-bottom: 4px;">Recommended Action:</div>
              <div>${lead.recommendedAction}</div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    const agencyRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "GrowByMasters Pipeline <leads@growbymasters.com>",
        to: [notifyEmail],
        subject: `[${lead.priority}] Growth Audit: ${lead.businessName} (${lead.country})`,
        html: agencyHtml,
      }),
      signal: AbortSignal.timeout(6000),
    });

    if (agencyRes.ok) {
      agencyEmailSent = true;
    }
  } catch (err: unknown) {
    console.error("[EMAIL_AGENCY_ALERT_ERROR]", err instanceof Error ? err.message : String(err));
  }

  // 2. Prospect Confirmation Email (if consent given)
  if (lead.consentFollowUp && lead.businessEmail) {
    try {
      const prospectHtml = `
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; background-color: #F7F5F0; padding: 24px; color: #1D2732;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #EAE6DC; overflow: hidden;">
            <div style="background-color: #101A24; padding: 28px 24px; color: #ffffff;">
              <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #D8B477;">GrowByMasters</div>
              <h1 style="margin: 8px 0 0 0; font-size: 22px; font-weight: normal;">Your Growth Audit Request Has Been Registered</h1>
            </div>
            <div style="padding: 28px 24px;">
              <p style="font-size: 15px; line-height: 1.6; margin-top: 0;">Dear ${lead.fullName},</p>
              <p style="font-size: 14px; line-height: 1.6; color: #626B73;">
                Thank you for requesting an audit for <strong>${lead.businessName}</strong>. Our senior growth strategist is inspecting your website architecture, commercial search visibility, and client acquisition funnel.
              </p>

              <div style="background-color: #FAF9F6; border: 1px solid #EAE6DC; border-radius: 8px; padding: 16px; margin: 20px 0;">
                <div style="font-size: 11px; text-transform: uppercase; font-weight: bold; color: #A48145; margin-bottom: 4px;">Inquiry Reference ID</div>
                <div style="font-size: 18px; font-weight: bold; color: #101A24; letter-spacing: 1px;">${lead.referenceId}</div>
                <div style="font-size: 12px; color: #8C959D; margin-top: 4px;">Requested Services: ${lead.services.join(", ")}</div>
              </div>

              <h3 style="font-size: 15px; margin: 24px 0 12px 0; color: #101A24;">What Happens Next:</h3>
              <ol style="font-size: 13px; line-height: 1.7; color: #626B73; padding-left: 20px; margin: 0 0 24px 0;">
                <li><strong>Technical Crawl:</strong> We inspect your domain's indexation, Core Web Vitals, and structural conversion hurdles.</li>
                <li><strong>Competitor Benchmark:</strong> We identify high-intent buyer queries captured by your primary competitors.</li>
                <li><strong>Executive Diagnostic:</strong> We deliver actionable recommendations directly to your inbox within 24 business hours.</li>
              </ol>

              <div style="text-align: center; margin: 30px 0 16px 0;">
                <a href="https://growbymasters.com/book-call?ref=${encodeURIComponent(lead.referenceId)}" style="display: inline-block; background-color: #D8B477; color: #101A24; font-weight: bold; font-size: 14px; text-decoration: none; padding: 12px 28px; border-radius: 24px;">
                  Book Your 30-Minute Strategy Call
                </a>
              </div>
              <p style="text-align: center; font-size: 12px; color: #8C959D; margin: 0;">Prefer to skip the queue? Reserve a live strategy session with our director.</p>

              <hr style="border: none; border-top: 1px solid #EAE6DC; margin: 28px 0;" />
              <p style="font-size: 11px; color: #8C959D; line-height: 1.5; margin: 0;">
                GrowByMasters · Digital Growth & Consulting<br />
                Strict confidentiality guaranteed. We never sell your contact information.
              </p>
            </div>
          </div>
        </body>
        </html>
      `;

      const prospectRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "GrowByMasters Advisory <contact@growbymasters.com>",
          to: [lead.businessEmail],
          subject: `Your Growth Audit for ${lead.businessName} (Ref: ${lead.referenceId})`,
          html: prospectHtml,
        }),
        signal: AbortSignal.timeout(6000),
      });

      if (prospectRes.ok) {
        prospectEmailSent = true;
      }
    } catch (err: unknown) {
      console.error("[EMAIL_PROSPECT_ERROR]", err instanceof Error ? err.message : String(err));
    }
  }

  return {
    prospectEmailSent,
    agencyEmailSent,
  };
}
