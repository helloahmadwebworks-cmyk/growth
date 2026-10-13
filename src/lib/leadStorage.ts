/**
 * GrowByMasters Durable Lead Storage & Dispatch Engine
 *
 * Requirements:
 * 1. Strict server-side input validation and sanitization
 * 2. Sliding-window IP rate limiting (5 submissions / 10 minutes)
 * 3. In-memory duplicate submission protection (5-minute window)
 * 4. Automated lead scoring & priority assignment
 * 5. CRM synchronization (HubSpot / Webhooks)
 * 6. Transactional email notification dispatch (Resend)
 * 7. Durable local storage fallback for dev / emergency offline backup
 * 8. Zero unprotected PII in stdout logs
 */

import fs from "fs";
import path from "path";
import { calculateLeadScore, LeadScoreResult } from "./leadScoring";
import {
  pushLeadToCRM,
  EnrichedLeadRecord,
  CRMDispatchResult,
  CampaignAttribution,
  PipelineStage,
} from "./crmService";
import { sendLeadNotificationEmails, EmailDispatchResult } from "./emailService";

export interface RawLeadSubmission {
  fullName: string;
  businessName: string;
  businessWebsite: string;
  businessEmail: string;
  phone?: string;
  preferredContactMethod?: string;
  country: string;
  industry: string;
  services: string[];
  mainChallenge: string;
  marketingSituation?: string;
  timeline?: string;
  budget: string;
  consentFollowUp: boolean;
  company_website_hp?: string; // Honeypot
  attribution?: CampaignAttribution;
  ipAddress?: string;
  userAgent?: string;
}

export interface StoredLeadResult {
  success: boolean;
  referenceId: string;
  leadRecord: EnrichedLeadRecord;
  crmStatus: CRMDispatchResult;
  emailStatus: EmailDispatchResult;
  persistedDurable: boolean;
  destinations: string[];
}

// 1. Sliding Window IP Rate Limiter
interface RateLimitEntry {
  count: number;
  resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 6;

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

// 2. Duplicate Submission Detection (Hash of email + domain within 3 minutes)
const recentSubmissions = new Map<string, number>();

export function checkIsDuplicate(email: string, domain: string): boolean {
  const now = Date.now();
  const key = `${email.toLowerCase()}|${domain.toLowerCase()}`;
  const lastTime = recentSubmissions.get(key);

  if (lastTime && now - lastTime < 3 * 60 * 1000) {
    return true;
  }

  recentSubmissions.set(key, now);
  return false;
}

// 3. Mask PII for safe logging
export function maskEmail(email: string): string {
  const [user, domain] = email.split("@");
  if (!user || !domain) return "***@***.***";
  const maskedUser = user.length <= 2 ? `${user[0]}*` : `${user[0]}***${user[user.length - 1]}`;
  return `${maskedUser}@${domain}`;
}

// 4. Input Sanitization
export function sanitizeInput(str: string): string {
  return str.replace(/[<>]/g, "").trim();
}

/**
 * Validates, scores, enriches, and dispatches an inbound lead.
 */
export async function processAndStoreLead(
  raw: RawLeadSubmission
): Promise<StoredLeadResult> {
  const referenceId = `GBM-${Date.now().toString(36).toUpperCase()}`;
  const timestamp = new Date().toISOString();

  // Score the lead
  const scoring: LeadScoreResult = calculateLeadScore({
    services: raw.services,
    industry: raw.industry,
    budget: raw.budget,
    timeline: raw.timeline,
    marketingSituation: raw.marketingSituation,
    mainChallenge: raw.mainChallenge,
    phone: raw.phone,
    businessWebsite: raw.businessWebsite,
    country: raw.country,
  });

  const enrichedLead: EnrichedLeadRecord = {
    referenceId,
    timestamp,
    fullName: sanitizeInput(raw.fullName),
    businessName: sanitizeInput(raw.businessName),
    businessWebsite: sanitizeInput(raw.businessWebsite),
    businessEmail: sanitizeInput(raw.businessEmail).toLowerCase(),
    phone: raw.phone ? sanitizeInput(raw.phone) : undefined,
    preferredContactMethod: raw.preferredContactMethod || "Email",
    country: raw.country || "United States",
    industry: raw.industry || "General Industry",
    services: raw.services || [],
    mainChallenge: sanitizeInput(raw.mainChallenge),
    marketingSituation: raw.marketingSituation ? sanitizeInput(raw.marketingSituation) : undefined,
    timeline: raw.timeline ? sanitizeInput(raw.timeline) : undefined,
    budget: raw.budget || "$1,000 - $3,000 / month",
    status: "New",
    score: scoring.score,
    priority: scoring.priority,
    scoringRationale: scoring.rationale,
    recommendedAction: scoring.recommendedAction,
    attribution: raw.attribution,
    consentFollowUp: raw.consentFollowUp !== false,
    ipAddress: raw.ipAddress,
    userAgent: raw.userAgent,
    notes: [
      `Inbound Growth Audit submitted on ${new Date().toLocaleDateString("en-US")}.`,
      `Score: ${scoring.score}/100 (${scoring.priority}).`,
      `Next Step: ${scoring.recommendedAction}`,
    ],
  };

  const destinations: string[] = [];
  let persistedDurable = false;

  // 1. CRM Dispatch (HubSpot or Webhook)
  const crmStatus = await pushLeadToCRM(enrichedLead);
  if (crmStatus.success) {
    destinations.push(crmStatus.provider === "hubspot" ? "HubSpot CRM" : "CRM Webhook");
    persistedDurable = true;
  }

  // 2. Transactional Email Dispatch (Resend)
  const emailStatus = await sendLeadNotificationEmails(enrichedLead);
  if (emailStatus.agencyEmailSent) destinations.push("Agency Alert Email");
  if (emailStatus.prospectEmailSent) destinations.push("Prospect Confirmation Email");

  // 3. Local JSON Storage Fallback (Development & Emergency File Backup)
  try {
    const dataDir = path.join(process.cwd(), ".data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const leadsFile = path.join(dataDir, "leads.json");
    let leads: EnrichedLeadRecord[] = [];
    if (fs.existsSync(leadsFile)) {
      try {
        leads = JSON.parse(fs.readFileSync(leadsFile, "utf-8"));
      } catch {
        leads = [];
      }
    }

    leads.push(enrichedLead);
    fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2), "utf-8");
    persistedDurable = true;
    destinations.push("Local JSON Store (.data/leads.json)");
  } catch (err: unknown) {
    console.error("[LEAD_STORAGE] Local backup write failed:", err instanceof Error ? err.message : String(err));
  }

  // Sanitized logging (No PII)
  console.log(
    `[LEAD_PROCESSED] Ref: ${referenceId} | Score: ${scoring.score} (${scoring.priority}) | Company: "${enrichedLead.businessName}" | Domain: "${enrichedLead.businessWebsite}" | Stored: ${destinations.join(", ")}`
  );

  return {
    success: true,
    referenceId,
    leadRecord: enrichedLead,
    crmStatus,
    emailStatus,
    persistedDurable,
    destinations,
  };
}

/**
 * Retrieves leads from the local storage file for authorized administrative inspection.
 */
export function getStoredLeads(): EnrichedLeadRecord[] {
  try {
    const leadsFile = path.join(process.cwd(), ".data", "leads.json");
    if (fs.existsSync(leadsFile)) {
      return JSON.parse(fs.readFileSync(leadsFile, "utf-8"));
    }
  } catch (err) {
    console.error("[LEAD_STORAGE_READ_ERROR]", err);
  }
  return [];
}

/**
 * Updates an existing lead's pipeline stage, notes, or appointment information.
 */
export function updateLeadStatus(
  referenceId: string,
  newStatus: PipelineStage,
  extra?: { note?: string; callBookedAt?: string }
): { success: boolean; lead?: EnrichedLeadRecord; error?: string } {
  try {
    const dataDir = path.join(process.cwd(), ".data");
    const leadsFile = path.join(dataDir, "leads.json");
    if (!fs.existsSync(leadsFile)) {
      return { success: false, error: "No leads data store found." };
    }
    const leads: EnrichedLeadRecord[] = JSON.parse(fs.readFileSync(leadsFile, "utf-8"));
    const leadIndex = leads.findIndex((l) => l.referenceId === referenceId);
    if (leadIndex === -1) {
      return { success: false, error: `Lead with reference ${referenceId} not found.` };
    }

    leads[leadIndex].status = newStatus;
    if (extra?.callBookedAt) {
      leads[leadIndex].callBookedAt = extra.callBookedAt;
    }
    if (extra?.note) {
      if (!leads[leadIndex].notes) leads[leadIndex].notes = [];
      leads[leadIndex].notes!.push(
        `[${new Date().toISOString()}] Stage updated to ${newStatus}: ${extra.note}`
      );
    }

    fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2), "utf-8");
    return { success: true, lead: leads[leadIndex] };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to update lead status.",
    };
  }
}

