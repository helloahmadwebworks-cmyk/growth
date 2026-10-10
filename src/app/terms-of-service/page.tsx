import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — GrowByMasters",
  description:
    "Terms and conditions governing the use of GrowByMasters website, audit services, and consulting agreements.",
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | GrowByMasters",
    description:
      "Terms and conditions governing the use of GrowByMasters website, audit services, and consulting agreements.",
    url: "https://growbymasters.com/terms-of-service",
    siteName: "GrowByMasters",
    images: [{ url: "/images/hero-globe.jpg", width: 1200, height: 630, alt: "GrowByMasters Terms of Service" }],
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="w-full">
      <section className="bg-[#101A24] text-white pt-12 pb-16 border-b border-[#1C2B3A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#8C959D] mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#D8B477]">Terms of Service</span>
          </nav>
          <h1 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-2">
            Terms of Service
          </h1>
          <p className="text-xs text-[#8C959D]">
            Last updated: October 2026 · GrowByMasters (Digital Growth & Consulting)
          </p>
        </div>
      </section>

      <section className="bg-[#F7F5F0] py-16 border-b border-[#E8E4DA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-2xl border border-[#EAE6DC] space-y-8 text-sm text-[#1D2732] leading-relaxed">
          <div className="flex items-center gap-3 p-4 bg-[#F8F3EA] border border-[#E8DFCF] rounded-xl text-xs text-[#8E6C2D]">
            <FileText className="w-5 h-5 shrink-0 text-[#A48145]" />
            <span>
              By accessing the GrowByMasters website or requesting a complimentary diagnostic audit, you acknowledge and agree to these terms.
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif-heading text-xl text-[#1D2732] font-normal">
              1. Scope of Complimentary Growth Audits
            </h2>
            <p className="text-[#626B73]">
              GrowByMasters provides complimentary website and search audits for qualified businesses at our discretion. An audit request does not constitute a legally binding service engagement or agency-client relationship until a formal Master Services Agreement (MSA) or Statement of Work (SOW) is mutually executed.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif-heading text-xl text-[#1D2732] font-normal">
              2. Intellectual Property & Confidentiality
            </h2>
            <p className="text-[#626B73]">
              All diagnostic frameworks, proprietary methodologies, content, and website code published by GrowByMasters are the intellectual property of GrowByMasters. Any proprietary business information shared by prospective clients during audit requests is held under strict commercial confidence.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif-heading text-xl text-[#1D2732] font-normal">
              3. No Performance Guarantees
            </h2>
            <p className="text-[#626B73]">
              GrowByMasters adheres to ethical, data-driven marketing practices. We do not make misleading, unsubstantiated, or guaranteed ranking claims. Search engine algorithms and digital advertising platform policies are external third-party systems outside any agency&apos;s direct control. All past performance figures cited represent historical client outcomes and do not guarantee identical results for every business.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif-heading text-xl text-[#1D2732] font-normal">
              4. Governing Law
            </h2>
            <p className="text-[#626B73]">
              These terms are governed by and construed in accordance with the laws of India, with primary corporate jurisdiction in Uttar Pradesh, without regard to conflict of law principles. International engagements are governed by individual client contracts specifying applicable venue.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif-heading text-xl text-[#1D2732] font-normal">
              5. Inquiries
            </h2>
            <p className="text-[#626B73]">
              For questions regarding our terms of service, please contact us at:{" "}
              <a
                href="mailto:contact@growbymasters.com"
                className="text-[#A48145] hover:underline"
              >
                contact@growbymasters.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
