"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  ShieldCheck,
  FileSearch,
} from "lucide-react";

const availableServices = [
  "SEO & Local SEO",
  "Google Ads Management",
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
  "Real Estate & Property Development",
  "B2B & SaaS Technologies",
  "Local Retail / Service Provider",
  "Other",
];

const targetCountries = [
  "United States",
  "Canada",
  "Australia",
  "United Arab Emirates & Gulf Region",
  "India",
  "Other",
];

function resolveDefaultService(svc?: string): string[] {
  if (!svc) return ["SEO & Local SEO", "Website Optimization"];
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
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    businessWebsite: "",
    businessEmail: "",
    phone: "",
    country: "United States",
    industry: resolveDefaultIndustry(defaultIndustry),
    services: resolveDefaultService(defaultService),
    mainChallenge: "",
    budget: "$1,000 - $3,000 / month",
    company_website_hp: "", // Honeypot spam trap
    agreeTerms: true,
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    referenceId: string;
    message: string;
    businessName: string;
  } | null>(null);

  const toggleService = (svc: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(svc);
      if (exists) {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!formData.businessName.trim()) {
      setErrorMsg("Please enter your company or business name.");
      return;
    }
    if (!formData.businessWebsite.trim()) {
      setErrorMsg("Please enter your business website URL.");
      return;
    }
    if (!formData.businessEmail.trim() || !formData.businessEmail.includes("@")) {
      setErrorMsg("Please enter a valid business email address.");
      return;
    }
    if (formData.services.length === 0) {
      setErrorMsg("Please select at least one service you need evaluated.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const resData = await res.json();

      if (!res.ok) {
        throw new Error(resData.error || "Submission failed. Please try again.");
      }

      setSuccessData({
        referenceId: resData.referenceId,
        message: resData.message,
        businessName: formData.businessName,
      });
    } catch (err: unknown) {
      setErrorMsg(
        err instanceof Error ? err.message : "Failed to connect to the server."
      );
    } finally {
      setLoading(false);
    }
  };

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
          authority, and search positioning.
        </p>

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
              setFormData({
                fullName: "",
                businessName: "",
                businessWebsite: "",
                businessEmail: "",
                phone: "",
                country: "United States",
                industry: "Home Services (HVAC, Roofing, Plumbing)",
                services: ["SEO & Local SEO"],
                mainChallenge: "",
                budget: "$1,000 - $3,000 / month",
                company_website_hp: "",
                agreeTerms: true,
              });
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

  return (
    <div
      id="growth-audit"
      className="bg-[#14202C] border border-[#223244] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
    >
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D8B477] via-[#237A72] to-[#D8B477]" />

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
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-800 text-red-200 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-400 mt-0.5" />
          <div>{errorMsg}</div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Anti-spam honeypot (hidden from view) */}
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

        {/* Row 1: Full Name & Business Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-medium uppercase tracking-wider text-[#CBD3DC] mb-1.5"
            >
              Full Name <span className="text-[#D8B477]">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              required
              placeholder="e.g. Michael Vance"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[#101A24] border border-[#223244] text-white placeholder-[#5C6670] text-sm focus:border-[#D8B477] focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="businessName"
              className="block text-xs font-medium uppercase tracking-wider text-[#CBD3DC] mb-1.5"
            >
              Company / Business Name <span className="text-[#D8B477]">*</span>
            </label>
            <input
              id="businessName"
              type="text"
              required
              placeholder="e.g. Apex Mechanical LLC"
              value={formData.businessName}
              onChange={(e) =>
                setFormData({ ...formData, businessName: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[#101A24] border border-[#223244] text-white placeholder-[#5C6670] text-sm focus:border-[#D8B477] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Row 2: Website & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="businessWebsite"
              className="block text-xs font-medium uppercase tracking-wider text-[#CBD3DC] mb-1.5"
            >
              Business Website <span className="text-[#D8B477]">*</span>
            </label>
            <input
              id="businessWebsite"
              type="text"
              required
              placeholder="e.g. apexmechanical.com"
              value={formData.businessWebsite}
              onChange={(e) =>
                setFormData({ ...formData, businessWebsite: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[#101A24] border border-[#223244] text-white placeholder-[#5C6670] text-sm focus:border-[#D8B477] focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="businessEmail"
              className="block text-xs font-medium uppercase tracking-wider text-[#CBD3DC] mb-1.5"
            >
              Work Email <span className="text-[#D8B477]">*</span>
            </label>
            <input
              id="businessEmail"
              type="email"
              required
              placeholder="e.g. michael@apexmechanical.com"
              value={formData.businessEmail}
              onChange={(e) =>
                setFormData({ ...formData, businessEmail: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[#101A24] border border-[#223244] text-white placeholder-[#5C6670] text-sm focus:border-[#D8B477] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Row 3: Country & Industry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="country"
              className="block text-xs font-medium uppercase tracking-wider text-[#CBD3DC] mb-1.5"
            >
              Primary Market / Country
            </label>
            <select
              id="country"
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[#101A24] border border-[#223244] text-white text-sm focus:border-[#D8B477] focus:outline-none transition-colors"
            >
              {targetCountries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="industry"
              className="block text-xs font-medium uppercase tracking-wider text-[#CBD3DC] mb-1.5"
            >
              Industry Sector
            </label>
            <select
              id="industry"
              value={formData.industry}
              onChange={(e) =>
                setFormData({ ...formData, industry: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[#101A24] border border-[#223244] text-white text-sm focus:border-[#D8B477] focus:outline-none transition-colors"
            >
              {availableIndustries.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Needed Multi-select Pills */}
        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-[#CBD3DC] mb-2">
            Services You Need Evaluated (Select all that apply)
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {availableServices.map((svc) => {
              const selected = formData.services.includes(svc);
              return (
                <button
                  type="button"
                  key={svc}
                  onClick={() => toggleService(svc)}
                  className={`text-xs px-3 py-2 rounded-lg text-left transition-all border ${
                    selected
                      ? "bg-[#D8B477]/15 border-[#D8B477] text-white font-medium"
                      : "bg-[#101A24] border-[#223244] text-[#8C959D] hover:text-[#CBD3DC] hover:border-[#334557]"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <span
                      className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${
                        selected
                          ? "bg-[#D8B477] text-[#101A24] font-bold"
                          : "border border-[#445566]"
                      }`}
                    >
                      {selected ? "✓" : ""}
                    </span>
                    <span className="truncate">{svc}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Row 4: Phone (optional) & Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-medium uppercase tracking-wider text-[#CBD3DC] mb-1.5"
            >
              Direct Phone (Optional)
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+1 (555) 019-2834 or +91..."
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[#101A24] border border-[#223244] text-white placeholder-[#5C6670] text-sm focus:border-[#D8B477] focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="budget"
              className="block text-xs font-medium uppercase tracking-wider text-[#CBD3DC] mb-1.5"
            >
              Estimated Monthly Marketing Budget
            </label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[#101A24] border border-[#223244] text-white text-sm focus:border-[#D8B477] focus:outline-none transition-colors"
            >
              <option value="Under $1,000 / month">Under $1,000 / month</option>
              <option value="$1,000 - $3,000 / month">$1,000 - $3,000 / month</option>
              <option value="$3,000 - $7,000 / month">$3,000 - $7,000 / month</option>
              <option value="$7,000 - $15,000 / month">$7,000 - $15,000 / month</option>
              <option value="$15,000+ / month">$15,000+ / month</option>
            </select>
          </div>
        </div>

        {/* Main Challenge textarea */}
        {!compact && (
          <div>
            <label
              htmlFor="mainChallenge"
              className="block text-xs font-medium uppercase tracking-wider text-[#CBD3DC] mb-1.5"
            >
              Primary Growth Bottleneck or Goal
            </label>
            <textarea
              id="mainChallenge"
              rows={3}
              placeholder="e.g. We get clicks on Google Ads but lead cost is too high, and our organic search rankings dropped recently."
              value={formData.mainChallenge}
              onChange={(e) =>
                setFormData({ ...formData, mainChallenge: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[#101A24] border border-[#223244] text-white placeholder-[#5C6670] text-sm focus:border-[#D8B477] focus:outline-none transition-colors"
            />
          </div>
        )}

        {/* Consent and Submit button */}
        <div className="pt-2 space-y-4">
          <div className="flex items-start gap-2.5 text-xs text-[#8C959D]">
            <input
              id="agreeTerms"
              type="checkbox"
              required
              checked={formData.agreeTerms}
              onChange={(e) =>
                setFormData({ ...formData, agreeTerms: e.target.checked })
              }
              className="mt-0.5 rounded border-[#223244] text-[#D8B477] focus:ring-[#D8B477] accent-[#D8B477]"
            />
            <label htmlFor="agreeTerms">
              I agree to allow GrowByMasters to inspect public domain performance
              under strict confidentiality according to the{" "}
              <Link
                href="/privacy-policy"
                className="text-[#D8B477] hover:underline"
              >
                Privacy Policy
              </Link>
              . No spam, ever.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#D8B477] hover:bg-[#C9A466] text-[#101A24] font-semibold text-sm transition-all shadow-lg shadow-[#D8B477]/15 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Generating Diagnostic Request...</span>
              </>
            ) : (
              <>
                <span>Request My Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        <div className="pt-3 border-t border-[#223244]/60 flex items-center gap-4 text-[11px] text-[#6E7B8A]">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#237A72]" />
            100% Confidential
          </span>
          <span>•</span>
          <span>No Obligation or Sales Pressure</span>
          <span>•</span>
          <span>24-Hour Review Turnaround</span>
        </div>
      </form>
    </div>
  );
}
