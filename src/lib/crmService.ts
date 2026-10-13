/**
 * GrowByMasters CRM & Lead Pipeline Adapter
 *
 * Provides a clean, production-grade interface for:
 * 1. Pushing qualified leads to HubSpot (Contacts & Deals)
 * 2. Forwarding to Webhooks (Zapier, Make, Slack, Customer.io, n8n)
 * 3. Maintaining standard pipeline stages:
 *    New -> Qualified -> Call Booked -> Proposal Sent -> Won / Lost
 * 4. Storing UTM attribution and campaign parameters
 */


export type PipelineStage =
  | "New"
  | "Qualified"
  | "Call Booked"
  | "Proposal Sent"
  | "Won"
  | "Lost";

export interface CampaignAttribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  referrer?: string;
  landing_page?: string;
}

export interface EnrichedLeadRecord {
  referenceId: string;
  timestamp: string;
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
  status: PipelineStage;
  score: number;
  priority: "High priority" | "Medium priority" | "Low priority";
  scoringRationale: string[];
  recommendedAction: string;
  attribution?: CampaignAttribution;
  notes?: string[];
  callBookedAt?: string;
  consentFollowUp: boolean;
  ipAddress?: string;
  userAgent?: string;
}

export interface CRMDispatchResult {
  provider: "hubspot" | "webhook" | "unconfigured";
  success: boolean;
  externalId?: string;
  message: string;
}

/**
 * Dispatches an enriched lead to the configured CRM provider.
 * Never fabricates success: returns unconfigured if credentials are absent.
 */
export async function pushLeadToCRM(
  lead: EnrichedLeadRecord
): Promise<CRMDispatchResult> {
  const hubspotToken = process.env.HUBSPOT_ACCESS_TOKEN;
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  // 1. HubSpot Contacts API Integration
  if (hubspotToken) {
    try {
      const names = lead.fullName.trim().split(" ");
      const firstName = names[0] || lead.fullName;
      const lastName = names.slice(1).join(" ") || "";

      const hubspotPayload = {
        properties: {
          email: lead.businessEmail,
          firstname: firstName,
          lastname: lastName,
          company: lead.businessName,
          website: lead.businessWebsite,
          phone: lead.phone || "",
          country: lead.country,
          industry: lead.industry,
          message: lead.mainChallenge,
          hs_lead_status: lead.status,
          growbymasters_reference_id: lead.referenceId,
          growbymasters_services: lead.services.join("; "),
          growbymasters_budget: lead.budget,
          growbymasters_timeline: lead.timeline || "Not specified",
          growbymasters_lead_score: String(lead.score),
          growbymasters_priority: lead.priority,
          utm_source: lead.attribution?.utm_source || "",
          utm_medium: lead.attribution?.utm_medium || "",
          utm_campaign: lead.attribution?.utm_campaign || "",
        },
      };

      const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${hubspotToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hubspotPayload),
        signal: AbortSignal.timeout(6000),
      });

      if (response.ok) {
        const data = await response.json();
        return {
          provider: "hubspot",
          success: true,
          externalId: data.id,
          message: "Lead contact registered in HubSpot CRM.",
        };
      } else {
        const errorText = await response.text();
        console.warn(`[CRM_HUBSPOT_WARNING] Status ${response.status}: ${errorText.substring(0, 200)}`);
        return {
          provider: "hubspot",
          success: false,
          message: `HubSpot API returned status ${response.status}.`,
        };
      }
    } catch (err: unknown) {
      console.error("[CRM_HUBSPOT_ERROR]", err instanceof Error ? err.message : String(err));
      return {
        provider: "hubspot",
        success: false,
        message: "HubSpot network dispatch failed.",
      };
    }
  }

  // 2. Webhook CRM Integration (Zapier / Make / Slack / Custom Endpoint)
  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "GrowByMasters-CRMDispatcher/2.0",
        },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(5000),
      });

      if (response.ok) {
        return {
          provider: "webhook",
          success: true,
          message: "Lead dispatched to external CRM webhook endpoint.",
        };
      } else {
        return {
          provider: "webhook",
          success: false,
          message: `CRM Webhook responded with status ${response.status}.`,
        };
      }
    } catch (err: unknown) {
      console.error("[CRM_WEBHOOK_ERROR]", err instanceof Error ? err.message : String(err));
      return {
        provider: "webhook",
        success: false,
        message: "CRM Webhook network dispatch failed.",
      };
    }
  }

  // 3. Unconfigured CRM state
  return {
    provider: "unconfigured",
    success: false,
    message: "No external CRM configured (set HUBSPOT_ACCESS_TOKEN or LEAD_WEBHOOK_URL).",
  };
}
