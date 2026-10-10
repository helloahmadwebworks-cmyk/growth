import fs from "fs";
import path from "path";

export interface AuditLeadRecord {
  referenceId: string;
  timestamp: string;
  fullName: string;
  businessName: string;
  businessWebsite: string;
  businessEmail: string;
  phone: string;
  country: string;
  industry: string;
  services: string[];
  mainChallenge: string;
  budget: string;
  status: string;
  ipAddress?: string;
  userAgent?: string;
}

// In-memory sliding window rate limiter
interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // Max 5 submissions per 10 minutes per IP

export function checkRateLimit(ip: string): { allowed: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  // Clean expired entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (value.resetAt < now) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!entry || entry.resetAt < now) {
    rateLimitMap.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return { allowed: true };
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    const retryAfterSeconds = Math.ceil((entry.resetAt - now) / 1000);
    return { allowed: false, retryAfterSeconds };
  }

  entry.count += 1;
  return { allowed: true };
}

// Mask sensitive PII for audit logging
export function maskEmail(email: string): string {
  const [user, domain] = email.split("@");
  if (!user || !domain) return "***@***.***";
  const maskedUser = user.length <= 2 ? `${user[0]}*` : `${user[0]}***${user[user.length - 1]}`;
  return `${maskedUser}@${domain}`;
}

// Persistent storage and notification dispatcher
export async function persistAndDispatchLead(lead: AuditLeadRecord): Promise<{
  persisted: boolean;
  webhookSent: boolean;
  destination: string[];
}> {
  const destinations: string[] = [];
  let persisted = false;
  let webhookSent = false;

  // 1. External Webhook Delivery (CRM, Slack, Zapier, Make, etc.)
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "GrowByMasters-LeadDispatcher/1.0",
        },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(5000),
      });

      if (response.ok) {
        webhookSent = true;
        destinations.push("External CRM/Webhook");
      } else {
        console.warn(`[LEAD_DISPATCHER] Webhook returned status: ${response.status}`);
      }
    } catch (err: unknown) {
      console.error("[LEAD_DISPATCHER] Webhook dispatch failed:", err instanceof Error ? err.message : String(err));
    }
  }

  // 2. Resend / Transactional Email Integration (if configured)
  const resendApiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFICATION_EMAIL || "contact@growbymasters.com";
  if (resendApiKey) {
    try {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "GrowByMasters Leads <leads@growbymasters.com>",
          to: [notifyEmail],
          subject: `[New Growth Audit Lead] ${lead.businessName} (${lead.country})`,
          text: `New Growth Audit Request:\n\nReference ID: ${lead.referenceId}\nName: ${lead.fullName}\nCompany: ${lead.businessName}\nWebsite: ${lead.businessWebsite}\nEmail: ${lead.businessEmail}\nPhone: ${lead.phone}\nCountry: ${lead.country}\nIndustry: ${lead.industry}\nServices: ${lead.services.join(", ")}\nBudget: ${lead.budget}\nChallenge: ${lead.mainChallenge}\nTimestamp: ${lead.timestamp}`,
        }),
        signal: AbortSignal.timeout(5000),
      });

      if (emailRes.ok) {
        destinations.push(`Email Notification (${notifyEmail})`);
      }
    } catch (err: unknown) {
      console.error("[LEAD_DISPATCHER] Email dispatch failed:", err instanceof Error ? err.message : String(err));
    }
  }

  // 3. Durable File Storage (Local fallback store to prevent data loss)
  try {
    const dataDir = path.join(process.cwd(), ".data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const leadsFilePath = path.join(dataDir, "leads.json");
    let existingLeads: AuditLeadRecord[] = [];

    if (fs.existsSync(leadsFilePath)) {
      try {
        const fileContent = fs.readFileSync(leadsFilePath, "utf-8");
        existingLeads = JSON.parse(fileContent);
      } catch {
        existingLeads = [];
      }
    }

    existingLeads.push(lead);
    fs.writeFileSync(leadsFilePath, JSON.stringify(existingLeads, null, 2), "utf-8");
    persisted = true;
    destinations.push("Durable File Store (.data/leads.json)");
  } catch (err: unknown) {
    console.error("[LEAD_DISPATCHER] File storage failed:", err instanceof Error ? err.message : String(err));
  }

  return {
    persisted,
    webhookSent,
    destination: destinations,
  };
}
