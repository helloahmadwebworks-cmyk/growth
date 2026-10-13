"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Loader2,
  ExternalLink,
  ShieldCheck,
  Lock,
} from "lucide-react";
import { TechnicalAuditReport } from "@/lib/auditAnalyzer";
import { trackEvent } from "@/lib/analytics";
import GrowthAuditForm from "@/components/GrowthAuditForm";

export default function FreeAuditPage() {
  const [urlInput, setUrlInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [report, setReport] = useState<TechnicalAuditReport | null>(null);

  const handleRunAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;

    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/audit/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: urlInput.trim() }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Analysis failed. Please verify the URL.");
      }

      setReport(data.report);
      trackEvent.auditAnalyzed(data.report.domain, data.report.overallGrade);
    } catch (err: unknown) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Unable to complete audit. Please verify the website is online and accessible."
      );
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: "pass" | "warning" | "fail") => {
    if (status === "pass") return <CheckCircle2 className="w-4 h-4 text-[#237A72] shrink-0 mt-0.5" />;
    if (status === "warning") return <AlertTriangle className="w-4 h-4 text-[#D8B477] shrink-0 mt-0.5" />;
    return <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />;
  };

  const getGradeColor = (grade: "A" | "B" | "C" | "D") => {
    if (grade === "A") return "bg-[#237A72] text-white border-[#2D968C]";
    if (grade === "B") return "bg-[#D8B477] text-[#101A24] border-[#C9A466]";
    if (grade === "C") return "bg-amber-600 text-white border-amber-500";
    return "bg-red-600 text-white border-red-500";
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-[#101A24] text-white pt-12 pb-20 border-b border-[#1C2B3A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D8B477]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#8C959D] mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#D8B477] font-medium">Free Technical Audit</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182736] border border-[#2A3E54] text-[#D8B477] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real-Time Diagnostic Engine</span>
            </div>

            <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white">
              Instant Website & Technical SEO Diagnostic
            </h1>

            <p className="text-base sm:text-lg text-[#A6B2BD] leading-relaxed">
              Test your website against essential commercial crawl signals: metadata alignment, canonical tags, heading structure, image accessibility, mobile viewports, and response speed.
            </p>

            {/* URL Input Bar */}
            <form onSubmit={handleRunAudit} className="pt-4 max-w-2xl">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#8C959D]">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Enter your website URL (e.g. yourcompany.com)"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    className="w-full bg-[#14202C] border border-[#223244] focus:border-[#D8B477] rounded-full pl-11 pr-4 py-3.5 text-sm text-white placeholder-[#626B73] focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#D8B477] hover:bg-[#C9A466] text-[#101A24] font-semibold text-sm transition-all shadow-lg shrink-0 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Crawling Target...</span>
                    </>
                  ) : (
                    <>
                      <span>Inspect Website</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {errorMsg && (
                <div className="mt-3 text-xs text-red-400 flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}
            </form>

            <div className="pt-2 text-xs text-[#8C959D] flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#237A72]" /> Non-Destructive Read-Only Scan
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#237A72]" /> Zero Fabricated Rankings or Metrics
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Results View */}
      {report && (
        <section className="bg-[#FAF9F6] py-16 border-b border-[#E8E4DA] animate-in fade-in duration-300">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {/* Overview Header Card */}
            <div className="bg-white rounded-2xl p-7 border border-[#EAE6DC] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#A48145]">
                  Technical Audit Report
                </div>
                <h2 className="font-serif-heading text-2xl text-[#1D2732] font-normal flex items-center gap-2">
                  <span>{report.domain}</span>
                  <a
                    href={report.targetUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#8C959D] hover:text-[#1D2732]"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </h2>
                <div className="text-xs text-[#626B73]">
                  Inspected on {new Date(report.inspectedAt).toLocaleTimeString()} · Server TTFB:{" "}
                  <strong>{report.responseTimeMs}ms</strong> · Status: <strong>{report.responseStatus}</strong>
                </div>
              </div>

              {/* Grade Badge */}
              <div className="flex items-center gap-4 shrink-0">
                <div className="text-right">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#1D2732]">
                    Technical Grade
                  </div>
                  <div className="text-xs text-[#626B73]">
                    {report.summary.passed} Passed / {report.summary.warnings} Warnings
                  </div>
                </div>
                <div
                  className={`w-14 h-14 rounded-2xl border flex items-center justify-center font-serif text-2xl font-bold shadow-md ${getGradeColor(
                    report.overallGrade
                  )}`}
                >
                  {report.overallGrade}
                </div>
              </div>
            </div>

            {/* Factual Checks Grid */}
            <div className="bg-white rounded-2xl p-7 border border-[#EAE6DC] shadow-sm">
              <h3 className="font-serif-heading text-xl text-[#1D2732] font-normal mb-5">
                Automated Measurable Crawl Findings ({report.checks.length} Checks)
              </h3>

              <div className="divide-y divide-[#F0ECE2]">
                {report.checks.map((check, idx) => (
                  <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-start gap-3.5">
                    {getStatusIcon(check.status)}
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <span className="font-semibold text-sm text-[#1D2732]">
                          {check.name}
                        </span>
                        <span className="text-[11px] font-medium uppercase tracking-wider text-[#8C959D]">
                          {check.category}
                        </span>
                      </div>
                      <p className="text-xs text-[#626B73] leading-relaxed mb-1">
                        {check.details}
                      </p>
                      {check.recommendation && (
                        <p className="text-xs text-[#A48145] font-medium bg-[#F8F5EE] p-2 rounded-lg mt-1.5">
                          <strong>Strategic Fix:</strong> {check.recommendation}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Manual Recommendations */}
            <div className="bg-[#101A24] text-white rounded-2xl p-7 border border-[#223244] shadow-md">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D8B477] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Level Strategic Optimization</span>
              </div>
              <h3 className="font-serif-heading text-xl text-white font-normal mb-3">
                Senior Strategist Recommendations Beyond Code Checks
              </h3>
              <p className="text-xs text-[#A6B2BD] mb-4 leading-relaxed">
                Automated tests cannot evaluate commercial positioning, value proposition clarity, or buyer intent. Our strategists review these qualitative factors manually:
              </p>

              <div className="space-y-2.5 text-xs text-[#CBD3DC]">
                {report.manualStrategicRecommendations.map((rec, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#237A72] shrink-0 mt-0.5" />
                    <span>{rec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Embedded Full Audit Form */}
      <section className="bg-[#F7F5F0] py-20 border-b border-[#E8E4DA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#1D2732] font-normal mb-3">
              Request Your Full Executive Growth Audit
            </h2>
            <p className="text-sm text-[#626B73]">
              Need a full competitive keyword gap analysis and multi-channel acquisition roadmap? Submit your requirements below for a manual review by our directors.
            </p>
          </div>

          <GrowthAuditForm
            title="Complete Growth Diagnostic & Action Plan"
            subtitle="Includes competitor keyword overlap, Google Map Pack analysis, and paid acquisition review."
          />
        </div>
      </section>
    </div>
  );
}
