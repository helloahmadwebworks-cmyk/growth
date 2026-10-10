import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — GrowByMasters",
  description:
    "Review GrowByMasters' Privacy Policy regarding client data protection, diagnostic audits, and digital consulting services.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | GrowByMasters",
    description:
      "Review GrowByMasters' Privacy Policy regarding client data protection, diagnostic audits, and digital consulting services.",
    url: "https://growbymasters.com/privacy-policy",
    siteName: "GrowByMasters",
    images: [{ url: "/images/hero-globe.jpg", width: 1200, height: 630, alt: "GrowByMasters Privacy Policy" }],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      <section className="bg-[#101A24] text-white pt-12 pb-16 border-b border-[#1C2B3A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#8C959D] mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#D8B477]">Privacy Policy</span>
          </nav>
          <h1 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#8C959D]">
            Last updated: October 2026 · GrowByMasters (Digital Growth & Consulting)
          </p>
        </div>
      </section>

      <section className="bg-[#F7F5F0] py-16 border-b border-[#E8E4DA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-2xl border border-[#EAE6DC] space-y-8 text-sm text-[#1D2732] leading-relaxed">
          <div className="flex items-center gap-3 p-4 bg-[#F8F3EA] border border-[#E8DFCF] rounded-xl text-xs text-[#8E6C2D]">
            <ShieldCheck className="w-5 h-5 shrink-0 text-[#A48145]" />
            <span>
              GrowByMasters treats all prospective client domain submissions and business data under strict commercial confidentiality. We never sell or rent your data.
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif-heading text-xl text-[#1D2732] font-normal">
              1. Information We Collect
            </h2>
            <p className="text-[#626B73]">
              When you request a Growth Audit or contact our agency, we collect information you voluntarily provide, including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#626B73]">
              <li>Your full name and professional title</li>
              <li>Your company name and verified business domain URL</li>
              <li>Your business email address and optional direct telephone number</li>
              <li>Your primary market country, industry category, and marketing challenges</li>
              <li>Information regarding your marketing budget ranges and technical goals</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif-heading text-xl text-[#1D2732] font-normal">
              2. How We Use Submitted Information
            </h2>
            <p className="text-[#626B73]">
              We use the submitted information strictly for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#626B73]">
              <li>Conducting objective technical diagnostics of your publicly accessible web domain</li>
              <li>Preparing your requested Growth Audit executive brief and recommendations</li>
              <li>Communicating directly regarding your audit findings and scheduled consultations</li>
              <li>Improving the diagnostic accuracy of our growth consulting tools</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif-heading text-xl text-[#1D2732] font-normal">
              3. Data Retention and Security
            </h2>
            <p className="text-[#626B73]">
              We implement industry-standard encryption protocols (SSL/TLS in transit) and restrict access to submitted audit requests to authorized senior strategists. We retain audit inquiry data only as long as necessary to fulfill diagnostic consultation or as required by commercial recordkeeping obligations.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif-heading text-xl text-[#1D2732] font-normal">
              4. Third-Party Disclosures
            </h2>
            <p className="text-[#626B73]">
              GrowByMasters does not sell, trade, or transfer your personally identifiable information to third parties. We may engage vetted infrastructure service providers (e.g., secure cloud hosting, CRM platforms) strictly bound by confidentiality agreements to assist in operational fulfillment.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif-heading text-xl text-[#1D2732] font-normal">
              5. Your Rights and Contact Information
            </h2>
            <p className="text-[#626B73]">
              You have the right to request a copy of the personal information we hold about you, or to request its correction or deletion at any time. For privacy inquiries, contact our Data Protection Officer at:
            </p>
            <div className="bg-[#FAF9F6] p-4 rounded-xl border border-[#EAE6DC] text-xs">
              <strong>GrowByMasters</strong>
              <br />
              Email: contact@growbymasters.com
              <br />
              Address: Aligarh, Uttar Pradesh, India
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
