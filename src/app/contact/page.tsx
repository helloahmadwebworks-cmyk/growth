import type { Metadata } from "next";
import {
  Mail,
  MapPin,
  Clock,
  Globe2,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import GrowthAuditForm from "@/components/GrowthAuditForm";

export const metadata: Metadata = {
  title: "Contact GrowByMasters — Direct Strategic Consultation",
  description:
    "Get in touch with GrowByMasters digital growth strategists. Schedule a consultation or request an audit for your business.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact GrowByMasters — Direct Strategic Consultation",
    description:
      "Get in touch with GrowByMasters digital growth strategists. Schedule a consultation or request an audit for your business.",
    url: "https://growbymasters.com/contact",
    siteName: "GrowByMasters",
    images: [{ url: "/images/hero-globe.jpg", width: 1200, height: 630, alt: "Contact GrowByMasters" }],
  },
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-[#101A24] text-white pt-16 pb-20 border-b border-[#1C2B3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182736] border border-[#2A3E54] text-[#D8B477] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white mb-6">
            Let&apos;s Build Your Growth System
          </h1>
          <p className="text-base sm:text-lg text-[#A6B2BD] leading-relaxed">
            Whether you need a full audit of your search visibility, a second opinion
            on underperforming Google Ads, or a complete digital overhaul, our senior team is ready.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Info */}
      <section className="bg-[#F7F5F0] py-20 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <GrowthAuditForm
                title="Request a Strategic Growth Diagnostic"
                subtitle="Fill out the details below. A senior growth consultant will evaluate your domain and respond within 24 business hours."
              />
            </div>

            {/* Information Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Office Box */}
              <div className="bg-white rounded-2xl p-8 border border-[#EAE6DC] shadow-sm space-y-6">
                <h2 className="font-serif-heading text-2xl text-[#1D2732] font-normal">
                  Agency Details
                </h2>

                <div className="space-y-4 text-sm text-[#1D2732]">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#F8F3EA] border border-[#E8DFCF] flex items-center justify-center text-[#A48145] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#8C959D] font-semibold">
                        Direct Email
                      </div>
                      <a
                        href="mailto:contact@growbymasters.com"
                        className="text-sm font-medium hover:text-[#A48145] transition-colors"
                      >
                        contact@growbymasters.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#F8F3EA] border border-[#E8DFCF] flex items-center justify-center text-[#A48145] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#8C959D] font-semibold">
                        Headquarters
                      </div>
                      <div className="text-sm font-medium">
                        Aligarh, Uttar Pradesh, India
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#F8F3EA] border border-[#E8DFCF] flex items-center justify-center text-[#A48145] shrink-0">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#8C959D] font-semibold">
                        Active Client Markets
                      </div>
                      <div className="text-sm font-medium text-[#626B73]">
                        India · United States · Canada · Australia · United Arab Emirates
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#F8F3EA] border border-[#E8DFCF] flex items-center justify-center text-[#A48145] shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#8C959D] font-semibold">
                        Response Turnaround
                      </div>
                      <div className="text-sm font-medium">
                        Within 24 Business Hours (Monday – Friday)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Standards Box */}
              <div className="bg-[#FAF9F6] rounded-2xl p-8 border border-[#EAE6DC] space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#237A72] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Our Consultation Guarantee</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-[#1D2732]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#237A72] shrink-0 mt-0.5" />
                    <span>No aggressive sales calls or high-pressure pitches.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#237A72] shrink-0 mt-0.5" />
                    <span>Strict NDA protection for all domain and marketing data.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#237A72] shrink-0 mt-0.5" />
                    <span>Objective analysis: if we cannot help, we tell you directly.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
