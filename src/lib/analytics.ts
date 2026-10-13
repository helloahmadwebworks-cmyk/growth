/**
 * GrowByMasters Client-Side Analytics & Attribution Utility
 *
 * Requirements:
 * - GA4 & Google Tag Manager compatibility
 * - UTM attribution extraction and session storage persistence
 * - Zero personal information (email, phone, name) transmitted to analytics
 * - Duplicate event protection
 */

import { CampaignAttribution } from "./crmService";

// Safe window accessor
interface WindowWithAnalytics extends Window {
  gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
  dataLayer?: Array<Record<string, unknown>>;
}

const STORAGE_KEY = "gbm_attribution_v1";

/**
 * Extracts and persists campaign attribution parameters from the current URL.
 * Preserves them across session navigation so form submissions capture the original source.
 */
export function extractAndPersistAttribution(): CampaignAttribution {
  if (typeof window === "undefined") return {};

  try {
    const params = new URLSearchParams(window.location.search);
    const hasUtms =
      params.has("utm_source") ||
      params.has("utm_medium") ||
      params.has("utm_campaign");

    let attribution: CampaignAttribution = {};

    // Check existing stored attribution first
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        attribution = JSON.parse(stored);
      } catch {
        attribution = {};
      }
    }

    // Overwrite if fresh UTMs are present in current URL
    if (hasUtms) {
      attribution = {
        utm_source: params.get("utm_source") || undefined,
        utm_medium: params.get("utm_medium") || undefined,
        utm_campaign: params.get("utm_campaign") || undefined,
        utm_term: params.get("utm_term") || undefined,
        utm_content: params.get("utm_content") || undefined,
        referrer: document.referrer || attribution.referrer,
        landing_page: window.location.pathname,
      };
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
    } else if (!attribution.landing_page) {
      // First touch without UTMs
      attribution.landing_page = window.location.pathname;
      attribution.referrer = document.referrer || undefined;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
    }

    return attribution;
  } catch {
    return {};
  }
}

/**
 * Retrieves stored attribution parameters without modifying them.
 */
export function getStoredAttribution(): CampaignAttribution {
  if (typeof window === "undefined") return {};
  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : extractAndPersistAttribution();
  } catch {
    return {};
  }
}

/**
 * Dispatches an analytics event without sensitive PII to GA4 and GTM.
 */
export function dispatchAnalyticsEvent(
  eventName: string,
  eventParams: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;

  const win = window as unknown as WindowWithAnalytics;

  // Sanitized payload (strip any accidental PII fields)
  const safeParams = { ...eventParams };
  delete safeParams.email;
  delete safeParams.phone;
  delete safeParams.fullName;
  delete safeParams.businessEmail;

  // 1. Google Analytics 4 (gtag)
  if (typeof win.gtag === "function") {
    try {
      win.gtag("event", eventName, safeParams);
    } catch (err) {
      console.debug("[ANALYTICS] gtag dispatch skipped:", err);
    }
  }

  // 2. Google Tag Manager (dataLayer)
  if (Array.isArray(win.dataLayer)) {
    try {
      win.dataLayer.push({
        event: eventName,
        ...safeParams,
        event_timestamp: Date.now(),
      });
    } catch (err) {
      console.debug("[ANALYTICS] dataLayer dispatch skipped:", err);
    }
  }
}

/**
 * Pre-built event tracking helpers
 */
export const trackEvent = {
  formStepCompleted: (stepNumber: number, stepName: string) => {
    dispatchAnalyticsEvent("lead_form_step_completed", {
      step_number: stepNumber,
      step_name: stepName,
    });
  },

  leadFormSubmitted: (data: {
    services: string[];
    industry: string;
    budget: string;
    country: string;
    referenceId: string;
  }) => {
    dispatchAnalyticsEvent("lead_form_submitted", {
      service_primary: data.services[0] || "Unknown",
      service_count: data.services.length,
      industry: data.industry,
      budget_tier: data.budget,
      country: data.country,
      reference_id: data.referenceId,
    });
  },

  strategyCallBooked: (referenceId?: string) => {
    dispatchAnalyticsEvent("strategy_call_booked", {
      reference_id: referenceId || "direct",
    });
  },

  auditAnalyzed: (domain: string, grade: string) => {
    dispatchAnalyticsEvent("audit_analyzer_completed", {
      domain_hash: domain.length,
      audit_grade: grade,
    });
  },

  formStarted: (formName: string = "growth_audit_form") => {
    dispatchAnalyticsEvent("lead_form_started", {
      form_name: formName,
    });
  },

  qualifiedLeadEvaluated: (priority: string, score: number, referenceId: string) => {
    dispatchAnalyticsEvent("qualified_lead_evaluated", {
      priority_tier: priority,
      lead_score: score,
      reference_id: referenceId,
    });
  },

  ctaClicked: (label: string, location: string) => {
    dispatchAnalyticsEvent("conversion_cta_clicked", {
      cta_label: label,
      cta_location: location,
    });
  },
};
