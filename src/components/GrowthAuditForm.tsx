"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  FileSearch,
  Calendar,
  Send,
} from "lucide-react";
import { getStoredAttribution, trackEvent } from "@/lib/analytics";

const availableServices = [
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

const availableIndustries = [
  "Home Services (HVAC, Roofing, Plumbing)",
  "Healthcare & Clinical Practices",
  "E-commerce & DTC Brands",
  "Professional Services (Legal, Accounting, Consulting)",
  "B2B & SaaS Technologies",
  "Real Estate & Property Development",
  "Local Retail / Service Provider",
  "Other",
];

const targetCountries = [
  "United States",
  "Canada",
  "Australia",
  "United Kingdom",
  "United Arab Emirates & Gulf Region",
  "India",
  "Other",
];

const marketingSituations = [
  { id: "scratch", label: "Starting from scratch / launching new offer" },
  { id: "ceiling", label: "In-house team hitting a growth ceiling" },
  { id: "burned", label: "Past agency underperformed or wasted ad spend" },
  { id: "scale", label: "Profitable pipeline seeking aggressive scaling" },
];

const timelineOptions = [
  "Immediately (within 1-2 weeks)",
  "Within 30 days",
  "Next quarter (planning ahead)",
  "Just researching options",
];

const budgetRanges = [
  "$1,000 - $3,000 / month (Targeted Channel)",
  "$3,000 - $7,500 / month (Dual-Channel Growth)",
  "$7,500 - $15,000 / month (Full-Funnel Retainer)",
  "$15,000+ / month (Enterprise Scale)",
  "One-Time Project / Custom Audit ($2,500+)",
];

function resolveDefaultService(svc?: string): string[] {
  if (!svc) return ["SEO & Local SEO"];
  const lower = svc.toLowerCase();
  const matched = availableServices.find(
    (s) => s.toLowerCase().includes(lower) || lower.includes(s.toLowerCase().split(" ")[0])
  );
  return matched ? [matched] : ["SEO & Local SEO"];
}

function resolveDefaultIndustry(ind?: string): string {
  if (!ind) return "Home Services (HVAC, Roofing, Plumbing)";
  const lower = ind.toLowerCase();
  const matched = availableIndustries.find(
    (i) => i.toLowerCase().includes(lower) || lower.includes(i.toLowerCase().split(" ")[0])
  );
  return matched || "Home Services (HVAC, Roofing, Plumbing)";
}

export default function GrowthAuditForm({
  title = "Request Your Free Growth Audit",
  subtitle = "Receive an objective diagnostic of your search visibility, paid traffic efficiency, and conversion architecture.",
  compact = false,
  defaultService,
  defaultIndustry,
}: {
  title?: string;
  subtitle?: string;
  compact?: boolean;
  defaultService?: string;
  defaultIndustry?: string;
}) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    businessWebsite: "",
    businessEmail: "",
    country: "United States",
    industry: resolveDefaultIndustry(defaultIndustry),
    services: resolveDefaultService(defaultService),
    mainChallenge: "",
    marketingSituation: "In-house team hitting a growth ceiling",
    timeline: "Within 30 days",
    budget: "$3,000 - $7,500 / month (Dual-Channel Growth)",
    phone: "",
    preferredContactMethod: "Email",
    agreeTerms: true,
    company_website_hp: "", // Honeypot spam trap
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [hasStartedTracking, setHasStartedTracking] = useState(false);
  const [successData, setSuccessData] = useState<{
    referenceId: string;
    message: string;
    businessName: string;
    bookingLink?: string;
  } | null>(null);

  // Load saved draft from sessionStorage on client mount
  useEffect(() => {
    try {
      const saved = window.sessionStorage.getItem("gbm_audit_draft");
      if (saved) {
        const parsed = JSON.parse(saved);
        setTimeout(() => {
          setFormData((prev) => ({
            ...prev,
            ...parsed,
            services: prev.services.length > 0 ? prev.services : parsed.services,
          }));
        }, 0);
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Save draft whenever state changes
  useEffect(() => {
    try {
      window.sessionStorage.setItem("gbm_audit_draft", JSON.stringify(formData));
    } catch {
      // Ignore
    }
  }, [formData]);

  const toggleService = (svc: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(svc);
      if (exists) {
        if (prev.services.length === 1) return prev; // Keep at least one
        return {
          ...prev,
          services: prev.services.filter((s) => s !== svc),
        };
      } else {
        return {
          ...prev,
          services: [...prev.services, svc],
        };
      }
    });
  };

  // Step 1 Validation
  const validateStep1 = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = "Please enter your full name.";
    if (!formData.businessEmail.trim() || !formData.businessEmail.includes("@")) {
      errors.businessEmail = "Please enter a valid business email address.";
    }
    if (!formData.businessName.trim()) {
      errors.businessName = "Please enter your company or practice name.";
    }
    if (!formData.businessWebsite.trim() || !formData.businessWebsite.includes(".")) {
      errors.businessWebsite = "Please enter your website URL (e.g. yourcompany.com).";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Step 2 Validation
  const validateStep2 = () => {
    const errors: Record<string, string> = {};
    if (formData.services.length === 0) {
      errors.services = "Please select at least one core service.";
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    setErrorMsg(null);
    if (currentStep === 1) {
      if (validateStep1()) {
        trackEvent.formStepCompleted(1, "Business Details");
        setCurrentStep(2);
      }
    } else if (currentStep === 2) {
      if (validateStep2()) {
        trackEvent.formStepCompleted(2, "Project Requirements");
        setCurrentStep(3);
      }
    }
  };

  const handleBack = () => {
    setErrorMsg(null);
    setFieldErrors({});
    if (currentStep === 2) setCurrentStep(1);
    if (currentStep === 3) setCurrentStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!validateStep1() || !validateStep2()) {
      setErrorMsg("Please review required fields before submitting.");
      return;
    }

    setLoading(true);

    try {
      const attribution = getStoredAttribution();

      const res = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          consentFollowUp: formData.agreeTerms,
          attribution,
        }),
      });

      const resData = await res.json();

      if (!res.ok) {
        throw new Error(resData.error || "Submission failed. Please try again.");
      }

      // Track conversion event without PII
      trackEvent.leadFormSubmitted({
        services: formData.services,
        industry: formData.industry,
        budget: formData.budget,
        country: formData.country,
        referenceId: resData.referenceId,
      });

      if (resData.leadSummary?.priorityTier) {
        trackEvent.qualifiedLeadEvaluated(
          resData.leadSummary.priorityTier,
          0,
          resData.referenceId
        );
      }

      // Clear draft
      try {
        window.sessionStorage.removeItem("gbm_audit_draft");
      } catch {
        // Ignore
      }

      setSuccessData({
        referenceId: resData.referenceId,
        message: resData.message,
        businessName: formData.businessName,
        bookingLink: resData.leadSummary?.bookingLink,
      });
    } catch (err: unknown) {
      setErrorMsg(
        err instanceof Error ? err.message : "Failed to connect to the server."
      );
    } finally {
      setLoading(false);
    }
  };

  // --------------------------------------------------------------------------
  // SUCCESS CONFIRMATION STATE
  // --------------------------------------------------------------------------
  if (successData) {
    return (
      <div className="bg-[#14202C] border border-[#223244] rounded-2xl p-8 sm:p-10 text-white shadow-xl animate-in fade-in duration-300">
        <div className="w-14 h-14 rounded-full bg-[#237A72]/20 border border-[#237A72] flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-[#237A72]" />
        </div>
        <div className="inline-block px-3 py-1 bg-[#D8B477]/15 border border-[#D8B477]/30 text-[#D8B477] text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
          Reference ID: {successData.referenceId}
        </div>
        <h3 className="font-serif-heading text-2xl sm:text-3xl font-normal text-white mb-3">
          Growth Audit Request Confirmed
        </h3>
        <p className="text-[#9AA2A9] text-sm sm:text-base leading-relaxed mb-6">
          Thank you for requesting an audit for{" "}
          <strong className="text-white">{successData.businessName}</strong>. Our
          technical strategist is reviewing your digital architecture, domain
          authority, and client acquisition channels.
        </p>

        {/* Primary Call Booking CTA Card */}
        <div className="bg-gradient-to-r from-[#182736] to-[#14202C] border border-[#D8B477]/40 rounded-xl p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#D8B477] mb-1 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#D8B477]" />
                Fast-Track Your Discovery
              </div>
              <h4 className="text-base font-semibold text-white">
                Book Your 30-Minute Growth Strategy Call
              </h4>
              <p className="text-xs text-[#9AA2A9] mt-1 max-w-md">
                Skip the email wait. Reserve a 1-on-1 discovery consultation with our director to review live insights.
              </p>
            </div>
            <Link
              href={successData.bookingLink || `/book-call?ref=${encodeURIComponent(successData.referenceId)}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#D8B477] hover:bg-[#C9A466] text-[#101A24] font-semibold text-xs sm:text-sm transition-all shadow-lg shrink-0"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* What Happens Next Timeline */}
        <div className="bg-[#101A24] rounded-xl p-5 border border-[#223244] space-y-3 mb-6 text-sm">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#D8B477]">
            What Happens Next:
          </div>
          <div className="flex items-start gap-2.5 text-[#CBD3DC]">
            <CheckCircle2 className="w-4 h-4 text-[#237A72] shrink-0 mt-0.5" />
            <span>
              <strong>Phase 1: In-depth Technical Crawl:</strong> Analyzing Core Web Vitals,
              schema, metadata, and index coverage.
            </span>
          </div>
          <div className="flex items-start gap-2.5 text-[#CBD3DC]">
            <CheckCircle2 className="w-4 h-4 text-[#237A72] shrink-0 mt-0.5" />
            <span>
              <strong>Phase 2: Competitor & Keyword Gaps:</strong> Mapping missed buyer
              queries across your local or international market.
            </span>
          </div>
          <div className="flex items-start gap-2.5 text-[#CBD3DC]">
            <CheckCircle2 className="w-4 h-4 text-[#237A72] shrink-0 mt-0.5" />
            <span>
              <strong>Phase 3: Executive Growth Brief:</strong> Delivered directly to your
              inbox within 24 business hours.
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <button
            onClick={() => {
              setSuccessData(null);
              setCurrentStep(1);
            }}
            className="text-xs text-[#9AA2A9] hover:text-[#D8B477] underline"
          >
            Submit Another Request
          </button>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#D8B477] hover:underline"
          >
            <span>Explore Client Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // FORM RENDER STATE
  // --------------------------------------------------------------------------
  return (
    <div
      id="growth-audit"
      className={`bg-[#14202C] border border-[#223244] rounded-2xl shadow-2xl relative overflow-hidden ${
        compact ? "p-5 sm:p-7" : "p-6 sm:p-10"
      }`}
    >
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D8B477] via-[#237A72] to-[#D8B477]" />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D8B477]/10 border border-[#D8B477]/30 text-[#D8B477] text-xs font-semibold uppercase tracking-wider mb-3">
          <FileSearch className="w-3.5 h-3.5" />
          Complimentary Growth Evaluation
        </div>
        <h2 className="font-serif-heading text-2xl sm:text-3xl text-white font-normal mb-2">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-[#9AA2A9] leading-relaxed">
          {subtitle}
        </p>

        {/* Multi-Step Stepper Tabs */}
        <div className="mt-6 grid grid-cols-3 gap-2 border-b border-[#223244] pb-4 text-xs font-medium">
          <button
            type="button"
            onClick={() => setCurrentStep(1)}
            className={`flex items-center gap-2 pb-2 transition-colors ${
              currentStep === 1
                ? "text-[#D8B477] border-b-2 border-[#D8B477] font-semibold"
                : "text-[#8C959D] hover:text-white"
            }`}
          >
            <span className="w-5 h-5 rounded-full border flex items-center justify-center text-[10px] shrink-0 border-current">
              1
            </span>
            <span className="truncate">Business Details</span>
          </button>

          <button
            type="button"
            onClick={() => {
              if (validateStep1()) setCurrentStep(2);
            }}
            className={`flex items-center gap-2 pb-2 transition-colors ${
              currentStep === 2
                ? "text-[#D8B477] border-b-2 border-[#D8B477] font-semibold"
                : "text-[#8C959D] hover:text-white"
            }`}
          >
            <span className="w-5 h-5 rounded-full border flex items-center justify-center text-[10px] shrink-0 border-current">
              2
            </span>
            <span className="truncate">Project Requirements</span>
          </button>

          <button
            type="button"
            onClick={() => {
              if (validateStep1() && validateStep2()) setCurrentStep(3);
            }}
            className={`flex items-center gap-2 pb-2 transition-colors ${
              currentStep === 3
                ? "text-[#D8B477] border-b-2 border-[#D8B477] font-semibold"
                : "text-[#8C959D] hover:text-white"
            }`}
          >
            <span className="w-5 h-5 rounded-full border flex items-center justify-center text-[10px] shrink-0 border-current">
              3
            </span>
            <span className="truncate">Contact & Submission</span>
          </button>
        </div>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-800 text-red-200 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-400 mt-0.5" />
          <div>{errorMsg}</div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        onFocusCapture={() => {
          if (!hasStartedTracking) {
            setHasStartedTracking(true);
            trackEvent.formStarted("growth_audit_form");
          }
        }}
      >
        {/* Anti-spam honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company_website_hp">Do not fill this field</label>
          <input
            id="company_website_hp"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.company_website_hp}
            onChange={(e) =>
              setFormData({ ...formData, company_website_hp: e.target.value })
            }
          />
        </div>

        {/* ====================================================================
            STEP 1: BUSINESS DETAILS
           ==================================================================== */}
        {currentStep === 1 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD3DC] mb-2">
                  Full Name <span className="text-[#D8B477]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Michael Vance"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className={`w-full bg-[#101A24] border rounded-xl px-4 py-3 text-sm text-white placeholder-[#626B73] focus:outline-none focus:border-[#D8B477] transition-colors ${
                    fieldErrors.fullName ? "border-red-500" : "border-[#223244]"
                  }`}
                />
                {fieldErrors.fullName && (
                  <p className="text-red-400 text-xs mt-1">{fieldErrors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD3DC] mb-2">
                  Business Email <span className="text-[#D8B477]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. michael@company.com"
                  value={formData.businessEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, businessEmail: e.target.value })
                  }
                  className={`w-full bg-[#101A24] border rounded-xl px-4 py-3 text-sm text-white placeholder-[#626B73] focus:outline-none focus:border-[#D8B477] transition-colors ${
                    fieldErrors.businessEmail ? "border-red-500" : "border-[#223244]"
                  }`}
                />
                {fieldErrors.businessEmail && (
                  <p className="text-red-400 text-xs mt-1">{fieldErrors.businessEmail}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD3DC] mb-2">
                  Company / Practice Name <span className="text-[#D8B477]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vance Energy Solutions"
                  value={formData.businessName}
                  onChange={(e) =>
                    setFormData({ ...formData, businessName: e.target.value })
                  }
                  className={`w-full bg-[#101A24] border rounded-xl px-4 py-3 text-sm text-white placeholder-[#626B73] focus:outline-none focus:border-[#D8B477] transition-colors ${
                    fieldErrors.businessName ? "border-red-500" : "border-[#223244]"
                  }`}
                />
                {fieldErrors.businessName && (
                  <p className="text-red-400 text-xs mt-1">{fieldErrors.businessName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD3DC] mb-2">
                  Website URL <span className="text-[#D8B477]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. vanceenergy.com"
                  value={formData.businessWebsite}
                  onChange={(e) =>
                    setFormData({ ...formData, businessWebsite: e.target.value })
                  }
                  className={`w-full bg-[#101A24] border rounded-xl px-4 py-3 text-sm text-white placeholder-[#626B73] focus:outline-none focus:border-[#D8B477] transition-colors ${
                    fieldErrors.businessWebsite ? "border-red-500" : "border-[#223244]"
                  }`}
                />
                {fieldErrors.businessWebsite && (
                  <p className="text-red-400 text-xs mt-1">{fieldErrors.businessWebsite}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD3DC] mb-2">
                  Primary Country / Market
                </label>
                <select
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  className="w-full bg-[#101A24] border border-[#223244] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D8B477] transition-colors"
                >
                  {targetCountries.map((c) => (
                    <option key={c} value={c} className="bg-[#101A24]">
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD3DC] mb-2">
                  Industry Sector
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) =>
                    setFormData({ ...formData, industry: e.target.value })
                  }
                  className="w-full bg-[#101A24] border border-[#223244] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D8B477] transition-colors"
                >
                  {availableIndustries.map((ind) => (
                    <option key={ind} value={ind} className="bg-[#101A24]">
                      {ind}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D8B477] hover:bg-[#C9A466] text-[#101A24] font-semibold text-sm transition-all shadow-md"
              >
                <span>Continue to Project Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ====================================================================
            STEP 2: PROJECT REQUIREMENTS
           ==================================================================== */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD3DC] mb-2">
                Required Services (Select all that apply) <span className="text-[#D8B477]">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {availableServices.map((svc) => {
                  const isSelected = formData.services.includes(svc);
                  return (
                    <button
                      type="button"
                      key={svc}
                      onClick={() => toggleService(svc)}
                      className={`text-left p-3 rounded-xl border text-xs font-medium transition-all ${
                        isSelected
                          ? "bg-[#D8B477]/15 border-[#D8B477] text-white"
                          : "bg-[#101A24] border-[#223244] text-[#A6B2BD] hover:border-[#D8B477]/50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                            isSelected
                              ? "bg-[#D8B477] border-[#D8B477]"
                              : "border-[#3A4B5D]"
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#101A24]" />}
                        </div>
                        <span className="line-clamp-2">{svc}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
              {fieldErrors.services && (
                <p className="text-red-400 text-xs mt-2">{fieldErrors.services}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD3DC] mb-2">
                Primary Growth Challenge
              </label>
              <textarea
                rows={3}
                placeholder="e.g. Ranking below regional competitors on Google Maps; high cost per lead on paid search; outdated website failing to convert visitor inquiries."
                value={formData.mainChallenge}
                onChange={(e) =>
                  setFormData({ ...formData, mainChallenge: e.target.value })
                }
                className="w-full bg-[#101A24] border border-[#223244] rounded-xl px-4 py-3 text-sm text-white placeholder-[#626B73] focus:outline-none focus:border-[#D8B477] transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD3DC] mb-2">
                  Current Marketing Situation
                </label>
                <select
                  value={formData.marketingSituation}
                  onChange={(e) =>
                    setFormData({ ...formData, marketingSituation: e.target.value })
                  }
                  className="w-full bg-[#101A24] border border-[#223244] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D8B477] transition-colors"
                >
                  {marketingSituations.map((m) => (
                    <option key={m.id} value={m.label} className="bg-[#101A24]">
                      {m.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD3DC] mb-2">
                  Expected Project Start
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) =>
                    setFormData({ ...formData, timeline: e.target.value })
                  }
                  className="w-full bg-[#101A24] border border-[#223244] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D8B477] transition-colors"
                >
                  {timelineOptions.map((t) => (
                    <option key={t} value={t} className="bg-[#101A24]">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD3DC] mb-2">
                Indicative Budget Range
              </label>
              <select
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
                className="w-full bg-[#101A24] border border-[#223244] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D8B477] transition-colors"
              >
                {budgetRanges.map((b) => (
                  <option key={b} value={b} className="bg-[#101A24]">
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#223244] text-[#CBD3DC] hover:text-white text-xs font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D8B477] hover:bg-[#C9A466] text-[#101A24] font-semibold text-sm transition-all shadow-md"
              >
                <span>Continue to Contact</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ====================================================================
            STEP 3: CONTACT & SUBMISSION
           ==================================================================== */}
        {currentStep === 3 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD3DC] mb-1">
                  Phone or WhatsApp Number
                </label>
                <span className="block text-[11px] text-[#8C959D] mb-2">
                  Optional — only if you prefer direct mobile callback
                </span>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-[#101A24] border border-[#223244] rounded-xl px-4 py-3 text-sm text-white placeholder-[#626B73] focus:outline-none focus:border-[#D8B477] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD3DC] mb-1">
                  Preferred Contact Method
                </label>
                <span className="block text-[11px] text-[#8C959D] mb-2">
                  How should our strategist follow up?
                </span>
                <select
                  value={formData.preferredContactMethod}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredContactMethod: e.target.value })
                  }
                  className="w-full bg-[#101A24] border border-[#223244] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D8B477] transition-colors"
                >
                  <option value="Email" className="bg-[#101A24]">
                    Email (Detailed PDF Brief)
                  </option>
                  <option value="WhatsApp" className="bg-[#101A24]">
                    WhatsApp Message
                  </option>
                  <option value="Phone Call" className="bg-[#101A24]">
                    Direct Phone Callback
                  </option>
                  <option value="Video Consultation" className="bg-[#101A24]">
                    30-Minute Video Discovery Call
                  </option>
                </select>
              </div>
            </div>

            {/* Submission Summary Preview */}
            <div className="bg-[#101A24] border border-[#223244] rounded-xl p-4 text-xs text-[#CBD3DC] space-y-2">
              <div className="font-semibold text-[#D8B477] uppercase tracking-wider text-[11px]">
                Submission Summary
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div>
                  <span className="text-[#8C959D]">Company:</span> {formData.businessName}
                </div>
                <div>
                  <span className="text-[#8C959D]">Domain:</span> {formData.businessWebsite}
                </div>
                <div>
                  <span className="text-[#8C959D]">Services:</span> {formData.services.slice(0, 2).join(", ")}
                  {formData.services.length > 2 && ` +${formData.services.length - 2} more`}
                </div>
                <div>
                  <span className="text-[#8C959D]">Market:</span> {formData.country}
                </div>
              </div>
            </div>

            {/* Consent & Privacy Notice */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={(e) =>
                    setFormData({ ...formData, agreeTerms: e.target.checked })
                  }
                  className="mt-0.5 rounded border-[#223244] text-[#D8B477] focus:ring-[#D8B477]"
                />
                <span className="text-xs text-[#8C959D] leading-relaxed">
                  I consent to receive relevant technical audit findings and growth recommendations regarding this inquiry. We respect strict commercial confidentiality (NDA). Zero spam, zero third-party sharing.
                </span>
              </label>
            </div>

            {/* Actions */}
            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                disabled={loading}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#223244] text-[#CBD3DC] hover:text-white text-xs font-medium disabled:opacity-50"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#D8B477] hover:bg-[#C9A466] text-[#101A24] font-semibold text-sm transition-all duration-200 shadow-xl shadow-[#D8B477]/15 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analyzing & Registering...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Generate Growth Audit</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </form>

      {/* Trust Strip Below Form */}
      <div className="mt-8 pt-6 border-t border-[#223244] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#8C959D]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#237A72] shrink-0" />
          <span>Strict Non-Disclosure Guarantee</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#237A72] shrink-0" />
          <span>Objective Technical Diagnostics</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#237A72] shrink-0" />
          <span>24 Business Hour Turnaround</span>
        </div>
      </div>
    </div>
  );
}
