/**
 * GrowByMasters Lead Qualification & Scoring Engine
 * 
 * Provides a transparent, configurable scoring framework (0-100) based on:
 * 1. Agency Capability Fit (0-25 pts)
 * 2. Industry Relevance (0-20 pts)
 * 3. Budget Compatibility (0-20 pts)
 * 4. Project Timeline & Urgency (0-15 pts)
 * 5. Requirement Clarity & Scope Depth (0-10 pts)
 * 6. Contact Information Completeness (0-10 pts)
 * 
 * Non-discriminatory: Never automatically rejects prospects based on geography,
 * budget, or email domain. All submissions are preserved for manual strategist review.
 */

export interface LeadScoreInput {
  services: string[];
  industry: string;
  budget: string;
  timeline?: string;
  marketingSituation?: string;
  mainChallenge?: string;
  phone?: string;
  businessWebsite?: string;
  country?: string;
}

export interface LeadScoreResult {
  score: number;
  priority: "High priority" | "Medium priority" | "Low priority";
  rationale: string[];
  recommendedAction: string;
}

// Configurable scoring weights and agency capability mapping
export const CORE_DELIVERY_SERVICES = [
  "SEO & Local SEO",
  "Google Ads Management",
  "Meta Ads Management",
  "Website Design & Development",
  "Branding & Visual Identity",
  "Graphic Design",
  "Social Media Marketing",
  "Email Marketing",
  "Website Optimization",
  "Lead Generation Systems",
  "Content Marketing",
  "Analytics & Tracking",
];

export const PRIMARY_TARGET_INDUSTRIES = [
  "Home Services (HVAC, Roofing, Plumbing)",
  "Healthcare & Clinical Practices",
  "E-commerce & DTC Brands",
  "Professional Services (Legal, Accounting, Consulting)",
  "B2B & SaaS Technologies",
  "Real Estate & Property Development",
];

export function calculateLeadScore(input: LeadScoreInput): LeadScoreResult {
  let score = 0;
  const rationale: string[] = [];

  // 1. Agency Capability Fit (max 25 pts)
  const matchedServices = (input.services || []).filter((s) =>
    CORE_DELIVERY_SERVICES.some((core) => core.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(core.toLowerCase()))
  );
  if (matchedServices.length > 0) {
    const points = Math.min(25, 15 + matchedServices.length * 3);
    score += points;
    rationale.push(`Strong service capability match (${matchedServices.length} core service(s) requested).`);
  } else {
    score += 5;
    rationale.push("General growth inquiry requires custom scope alignment.");
  }

  // 2. Industry Relevance (max 20 pts)
  const isTargetIndustry = PRIMARY_TARGET_INDUSTRIES.some((ind) =>
    (input.industry || "").toLowerCase().includes(ind.toLowerCase().split(" ")[0])
  );
  if (isTargetIndustry) {
    score += 20;
    rationale.push(`Sector directly aligns with agency historical case studies (${input.industry}).`);
  } else if (input.industry && input.industry !== "Other") {
    score += 12;
    rationale.push(`Adjacent industry sector (${input.industry}); viable for cross-industry playbook.`);
  } else {
    score += 8;
    rationale.push("Unspecified or custom industry classification.");
  }

  // 3. Budget Compatibility (max 20 pts)
  const budget = (input.budget || "").toLowerCase();
  if (budget.includes("7,500") || budget.includes("10,000") || budget.includes("enterprise") || budget.includes("scaling")) {
    score += 20;
    rationale.push("High budget tier suitable for full-funnel integrated growth retainer.");
  } else if (budget.includes("3,000") || budget.includes("5,000")) {
    score += 16;
    rationale.push("Standard budget tier matching single-channel or dual-channel growth engagement.");
  } else if (budget.includes("1,000") || budget.includes("2,000")) {
    score += 12;
    rationale.push("Entry budget tier suited for focused SEO, localized Google Ads, or optimization sprint.");
  } else if (budget.includes("under") || budget.includes("<")) {
    score += 8;
    rationale.push("Constrained budget tier; suited for diagnostic audit or phased implementation.");
  } else {
    score += 10;
    rationale.push("Budget tier unspecified; requires investment calibration call.");
  }

  // 4. Project Timeline & Urgency (max 15 pts)
  const timeline = (input.timeline || "").toLowerCase();
  if (timeline.includes("immediate") || timeline.includes("2 weeks") || timeline.includes("urgent")) {
    score += 15;
    rationale.push("High project readiness: Immediate start requested (within 1-2 weeks).");
  } else if (timeline.includes("month") || timeline.includes("30 days")) {
    score += 12;
    rationale.push("Active evaluation cycle: Looking to begin within 30 days.");
  } else if (timeline.includes("quarter") || timeline.includes("planning")) {
    score += 8;
    rationale.push("Mid-term planning cycle: Target start next quarter.");
  } else {
    score += 6;
    rationale.push("Exploratory research timeline.");
  }

  // 5. Requirement Clarity & Scope Depth (max 10 pts)
  const challenge = (input.mainChallenge || "").trim();
  if (challenge.length >= 60) {
    score += 10;
    rationale.push("Detailed problem description submitted, indicating serious decision-maker intent.");
  } else if (challenge.length >= 20) {
    score += 7;
    rationale.push("Sufficient problem summary provided.");
  } else {
    score += 3;
    rationale.push("Brief initial challenge description.");
  }

  // 6. Contact Information Completeness (max 10 pts)
  let contactPoints = 0;
  if (input.phone && input.phone.trim().length >= 7) {
    contactPoints += 5;
    rationale.push("Direct phone/WhatsApp contact provided for rapid discovery dispatch.");
  }
  if (input.businessWebsite && input.businessWebsite.includes(".")) {
    contactPoints += 5;
  }
  score += contactPoints;

  // Final score clamping
  score = Math.min(100, Math.max(0, score));

  // Priority classification
  let priority: "High priority" | "Medium priority" | "Low priority";
  let recommendedAction: string;

  if (score >= 70) {
    priority = "High priority";
    recommendedAction = "Senior Growth Strategist follow-up within 4 business hours + priority calendar invitation.";
  } else if (score >= 45) {
    priority = "Medium priority";
    recommendedAction = "Deliver automated technical audit within 24 hours + invite to strategy discovery session.";
  } else {
    priority = "Low priority";
    recommendedAction = "Deliver standard preliminary audit report + automated educational nurture sequence.";
  }

  return {
    score,
    priority,
    rationale,
    recommendedAction,
  };
}
