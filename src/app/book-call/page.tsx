"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Clock,
  Video,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Send,
  Loader2,
  Globe,
  AlertCircle,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

function BookingContent() {
  const searchParams = useSearchParams();
  const refId = searchParams.get("ref") || "";

  const calEmbedUrl = process.env.NEXT_PUBLIC_CAL_EMBED_URL || process.env.NEXT_PUBLIC_CALENDLY_URL;

  // Fallback direct appointment request state
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    businessWebsite: "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
    preferredDay: "Tuesday",
    preferredTime: "Morning (9am - 12pm)",
    discussionFocus: "Full-Funnel Growth Strategy & Audit Review",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmitFallback = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          businessName: formData.fullName + " Organization",
          businessWebsite: formData.businessWebsite || "direct-call-booking.com",
          businessEmail: formData.businessEmail,
          country: "International",
          industry: "Strategy Call Requested",
          services: ["Growth Strategy Consultation"],
          mainChallenge: `Strategy call requested for ${formData.preferredDay} (${formData.preferredTime}, TZ: ${formData.timezone}). Focus: ${formData.discussionFocus}. Notes: ${formData.notes}`,
          timeline: "Immediately",
          budget: "Call Consultation",
          consentFollowUp: true,
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to register appointment request. Please email directly.");
      }

      trackEvent.strategyCallBooked(refId);
      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-[#101A24] text-white pt-12 pb-20 border-b border-[#1C2B3A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D8B477]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#8C959D] mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#D8B477] font-medium">Book Strategy Call</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182736] border border-[#2A3E54] text-[#D8B477] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Discovery Session</span>
            </div>

            <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white">
              Book a 30-Minute Growth Strategy Call
            </h1>

            <p className="text-base sm:text-lg text-[#A6B2BD] leading-relaxed">
              Speak 1-on-1 with a senior growth strategist. We review your current acquisition channels, benchmark your metrics against top competitors, and map out a high-impact roadmap.
            </p>

            {refId && (
              <div className="inline-block px-3 py-1 bg-[#237A72]/20 border border-[#237A72] text-[#237A72] text-xs font-semibold rounded-lg">
                Linked to Audit Reference: {refId}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Booking Container */}
      <section className="bg-[#F7F5F0] py-16 sm:py-20 border-b border-[#E8E4DA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: What to Expect */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-7 border border-[#EAE6DC] shadow-sm space-y-6">
                <h2 className="font-serif-heading text-2xl text-[#1D2732] font-normal">
                  What Happens on the Call
                </h2>

                <div className="space-y-4 text-sm text-[#626B73]">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF9F6] border border-[#EAE6DC] flex items-center justify-center shrink-0 text-[#237A72]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-[#1D2732] block">30 Minutes Focused on Your Pipeline</strong>
                      <span>Zero hard sales pitches. We evaluate your actual unit economics and conversion bottlenecks.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF9F6] border border-[#EAE6DC] flex items-center justify-center shrink-0 text-[#D8B477]">
                      <Video className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-[#1D2732] block">Live Screen-Share Diagnostic</strong>
                      <span>We examine live search queries, competitor map packs, and paid ad library creatives.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF9F6] border border-[#EAE6DC] flex items-center justify-center shrink-0 text-[#237A72]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-[#1D2732] block">Actionable Strategic Roadmap</strong>
                      <span>You leave with 3 concrete priorities you can implement with or without our agency.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0ECE2] space-y-2 text-xs text-[#8C959D]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#237A72]" />
                    <span>Protected by Commercial Non-Disclosure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#237A72]" />
                    <span>Serving clients in US, Canada, Australia, UAE & India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Booking Widget or Fallback */}
            <div className="lg:col-span-7">
              {calEmbedUrl ? (
                /* Live Cal.com / Calendly iFrame */
                <div className="bg-white rounded-2xl border border-[#EAE6DC] overflow-hidden shadow-md h-[680px]">
                  <iframe
                    src={calEmbedUrl}
                    title="GrowByMasters Discovery Schedule"
                    className="w-full h-full border-0"
                    allow="camera; microphone; autoplay; fullscreen"
                  />
                </div>
              ) : submitted ? (
                /* Confirmation Screen */
                <div className="bg-[#14202C] border border-[#223244] rounded-2xl p-8 sm:p-10 text-white shadow-xl animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#237A72]/20 border border-[#237A72] flex items-center justify-center mb-5 text-[#237A72]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-heading text-2xl font-normal text-white mb-2">
                    Strategy Call Request Received
                  </h3>
                  <p className="text-sm text-[#A6B2BD] leading-relaxed mb-6">
                    Thank you, {formData.fullName}. Our strategist is reviewing your preferred slot for{" "}
                    <strong>{formData.preferredDay} ({formData.preferredTime})</strong> in timezone{" "}
                    <strong>{formData.timezone}</strong>. A calendar invite will be sent to{" "}
                    <strong>{formData.businessEmail}</strong> within 4 business hours.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#D8B477] hover:underline"
                  >
                    <span>Return to GrowByMasters Home</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ) : (
                /* Production Booking Request Form */
                <div className="bg-white rounded-2xl p-8 border border-[#EAE6DC] shadow-sm space-y-6">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#A48145] mb-1">
                      Direct Calendar Request
                    </div>
                    <h3 className="font-serif-heading text-2xl text-[#1D2732] font-normal mb-2">
                      Select Your Preferred Time Window
                    </h3>
                    <p className="text-xs text-[#626B73]">
                      Choose your preferred day and time window. We will confirm your calendar slot promptly.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmitFallback} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#1D2732] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. David Ross"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-[#FAF9F6] border border-[#EAE6DC] rounded-xl px-3.5 py-2.5 text-xs text-[#1D2732] focus:outline-none focus:border-[#D8B477]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#1D2732] mb-1">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. david@rossclinic.com"
                          value={formData.businessEmail}
                          onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                          className="w-full bg-[#FAF9F6] border border-[#EAE6DC] rounded-xl px-3.5 py-2.5 text-xs text-[#1D2732] focus:outline-none focus:border-[#D8B477]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1D2732] mb-1">
                        Company Website URL
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. rossclinic.com"
                        value={formData.businessWebsite}
                        onChange={(e) => setFormData({ ...formData, businessWebsite: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-[#EAE6DC] rounded-xl px-3.5 py-2.5 text-xs text-[#1D2732] focus:outline-none focus:border-[#D8B477]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#1D2732] mb-1">
                          Preferred Day
                        </label>
                        <select
                          value={formData.preferredDay}
                          onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                          className="w-full bg-[#FAF9F6] border border-[#EAE6DC] rounded-xl px-3 py-2.5 text-xs text-[#1D2732] focus:outline-none focus:border-[#D8B477]"
                        >
                          <option value="Monday">Monday</option>
                          <option value="Tuesday">Tuesday</option>
                          <option value="Wednesday">Wednesday</option>
                          <option value="Thursday">Thursday</option>
                          <option value="Friday">Friday</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1D2732] mb-1">
                          Time Window
                        </label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full bg-[#FAF9F6] border border-[#EAE6DC] rounded-xl px-3 py-2.5 text-xs text-[#1D2732] focus:outline-none focus:border-[#D8B477]"
                        >
                          <option value="Morning (9am - 12pm)">Morning (9am - 12pm)</option>
                          <option value="Afternoon (1pm - 5pm)">Afternoon (1pm - 5pm)</option>
                          <option value="Evening (5pm - 8pm)">Evening (5pm - 8pm)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1D2732] mb-1">
                          Your Timezone
                        </label>
                        <input
                          type="text"
                          value={formData.timezone}
                          onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                          className="w-full bg-[#FAF9F6] border border-[#EAE6DC] rounded-xl px-3 py-2.5 text-xs text-[#1D2732] focus:outline-none focus:border-[#D8B477]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1D2732] mb-1">
                        Primary Topic for Discussion
                      </label>
                      <select
                        value={formData.discussionFocus}
                        onChange={(e) => setFormData({ ...formData, discussionFocus: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-[#EAE6DC] rounded-xl px-3 py-2.5 text-xs text-[#1D2732] focus:outline-none focus:border-[#D8B477]"
                      >
                        <option value="Full-Funnel Growth Strategy & Audit Review">Full-Funnel Growth Strategy & Audit Review</option>
                        <option value="Google Ads / Paid Acquisition Restructuring">Google Ads / Paid Acquisition Restructuring</option>
                        <option value="Organic SEO & Local Map Pack Dominance">Organic SEO & Local Map Pack Dominance</option>
                        <option value="Website Redesign & Conversion Engineering">Website Redesign & Conversion Engineering</option>
                        <option value="Branding & Corporate Identity Redesign">Branding & Corporate Identity Redesign</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#101A24] hover:bg-[#1A2938] text-white font-semibold text-xs sm:text-sm transition-all shadow-md disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#D8B477]" />
                          <span>Reserving Calendar Slot...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#D8B477]" />
                          <span>Confirm Discovery Call Request</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function BookCallPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#101A24]" />}>
      <BookingContent />
    </Suspense>
  );
}
