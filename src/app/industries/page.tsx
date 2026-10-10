import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve — Sector-Specific Digital Growth Frameworks",
  description:
    "Explore how GrowByMasters engineers customer acquisition and digital growth systems tailored to Home Services, Professional Services, E-commerce, B2B SaaS, Healthcare, and Real Estate.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industries We Serve — Sector-Specific Digital Growth Frameworks | GrowByMasters",
    description:
      "Explore how GrowByMasters engineers customer acquisition and digital growth systems tailored to Home Services, Professional Services, E-commerce, B2B SaaS, Healthcare, and Real Estate.",
    url: "https://growbymasters.com/industries",
    siteName: "GrowByMasters",
    images: [{ url: "/images/hero-globe.jpg", width: 1200, height: 630, alt: "Industries We Serve" }],
  },
};

const industries = [
  {
    title: "Home Services",
    subtitle: "HVAC, Roofing, Plumbing, Electricians & Remodelers",
    image: "/images/industries/home-services.jpg",
    href: "/industries/home-services",
    description:
      "Dominate local search map packs, capture urgent emergency repair searches, and build predictable seasonal booked service pipelines.",
    channels: ["Local Map Pack SEO", "Emergency Google Ads", "Review Velocity Automation"],
  },
  {
    title: "Professional Services",
    subtitle: "Law Firms, Accountants, Financial Advisors & Consultancies",
    image: "/images/industries/professional-services.jpg",
    href: "/industries/professional-services",
    description:
      "Establish deep authority, rank for high-value legal and financial commercial searches, and pre-qualify corporate decision-makers.",
    channels: ["Commercial Intent SEO", "Thought Leadership Content", "Multi-Step Lead Funnels"],
  },
  {
    title: "E-commerce",
    subtitle: "Shopify Stores, DTC Brands & Multi-Channel Retailers",
    image: "/images/industries/ecommerce.jpg",
    href: "/industries/ecommerce",
    description:
      "Scale profitable customer acquisition, optimize product detail page conversions, and reduce reliance on expensive ad spend.",
    channels: ["E-com Category SEO", "Google Shopping / P-Max", "CRO & Speed Optimization"],
  },
  {
    title: "B2B & SaaS",
    subtitle: "Software Providers, Manufacturers & Tech Agencies",
    image: "/images/industries/b2b-saas.jpg",
    href: "/industries/b2b-saas",
    description:
      "Generate qualified demo requests, shorten complex B2B sales cycles, and build topical authority around high-ticket software solutions.",
    channels: ["Technical SEO Clusters", "High-Intent Search Ads", "Closed-Loop CRM Attribution"],
  },
  {
    title: "Healthcare",
    subtitle: "Dental Clinics, Private Practices & Wellness Centers",
    image: "/images/industries/healthcare.jpg",
    href: "/industries/healthcare",
    description:
      "Attract high-value private patient inquiries, showcase clinical expertise with compliance, and fill appointment books reliably.",
    channels: ["Hyper-Local SEO", "High-Trust Patient UX", "Reputation & Review Systems"],
  },
  {
    title: "Real Estate",
    subtitle: "Commercial Brokerages, Developers & Asset Managers",
    image: "/images/industries/real-estate.jpg",
    href: "/industries/real-estate",
    description:
      "Capture high-net-worth property inquiries, showcase developments with fast responsive galleries, and track buyer leads seamlessly.",
    channels: ["High-Net-Worth Geotargeting", "Listing Speed Optimization", "Exclusive Buyer Funnels"],
  },
];

export default function IndustriesPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-[#101A24] text-white pt-16 pb-20 border-b border-[#1C2B3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182736] border border-[#2A3E54] text-[#D8B477] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialized Domain Frameworks</span>
          </div>
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white mb-6">
            Growth Systems Built Around Your Specific Unit Economics
          </h1>
          <p className="text-base sm:text-lg text-[#A6B2BD] leading-relaxed mb-8">
            A local HVAC company has vastly different customer journeys than a B2B SaaS platform or corporate law firm. We do not apply cookie-cutter templates.
          </p>
          <Link
            href="/#growth-audit"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#D8B477] hover:bg-[#C9A466] text-[#101A24] font-semibold text-sm transition-all shadow-xl shadow-[#D8B477]/15"
          >
            <span>Request an Industry Growth Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#F7F5F0] py-20 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className="bg-white rounded-2xl overflow-hidden border border-[#EAE6DC] hover:border-[#D8B477] transition-all shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#101A24]">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101A24]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-xs uppercase tracking-wider text-[#D8B477] font-semibold">
                        {ind.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <h2 className="font-serif-heading text-2xl text-[#1D2732] font-normal group-hover:text-[#A48145] transition-colors">
                      <Link href={ind.href}>{ind.title}</Link>
                    </h2>
                    <p className="text-xs sm:text-sm text-[#626B73] leading-relaxed">
                      {ind.description}
                    </p>

                    <div className="pt-2 border-t border-[#F0ECE2] space-y-1.5">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#1D2732]">
                        Tailored Growth Engine:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {ind.channels.map((ch, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 rounded bg-[#F7F5F0] text-[11px] font-medium text-[#626B73]"
                          >
                            {ch}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <Link
                    href={ind.href}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#F7F5F0] hover:bg-[#D8B477] hover:text-[#101A24] text-xs font-semibold text-[#1D2732] transition-colors"
                  >
                    <span>View {ind.title} Playbook</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
