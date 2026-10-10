import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  TrendingUp,
  Target,
  Sparkles,
  Layers,
  MapPin,
} from "lucide-react";
import GrowthAuditForm from "@/components/GrowthAuditForm";

export const metadata: Metadata = {
  title: "About GrowByMasters — We Build Digital Growth Systems",
  description:
    "Learn about GrowByMasters: our founding philosophy, data-driven methodology, team ethos, and vision for empowering ambitious businesses globally.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About GrowByMasters — We Build Digital Growth Systems",
    description:
      "Learn about GrowByMasters: our founding philosophy, data-driven methodology, team ethos, and vision for empowering ambitious businesses globally.",
    url: "https://growbymasters.com/about",
    siteName: "GrowByMasters",
    images: [{ url: "/images/hero-globe.jpg", width: 1200, height: 630, alt: "About GrowByMasters" }],
  },
};

const coreValues = [
  {
    title: "Strategy Before Spend",
    description:
      "We never run an ad or publish an article without first understanding your unit economics, customer lifetime value, and competitive territory.",
  },
  {
    title: "Uncompromising Transparency",
    description:
      "No smoke and mirrors. You get unfiltered access to your ad accounts, analytics data, and conversion numbers in real-time dashboards.",
  },
  {
    title: "Closed-Loop Accountability",
    description:
      "We do not celebrate vanity metrics like impressions or clicks. We judge our performance on qualified pipeline and closed revenue.",
  },
  {
    title: "Engineered Compounding Growth",
    description:
      "We combine immediate-intent PPC with long-term organic search and conversion architecture so your business builds permanent digital equity.",
  },
];

const milestones = [
  {
    year: "Phase 1: Local Foundation",
    title: "Regional Excellence in Aligarh & Northern India",
    desc: "Established proven local SEO and direct lead-generation engines for local trade contractors, healthcare practices, and regional enterprises.",
  },
  {
    year: "Phase 2: North American Expansion",
    title: "Scaling in the United States and Canada",
    desc: "Extended our data-driven growth architecture to competitive North American metros, serving high-ticket home services and professional firms.",
  },
  {
    year: "Phase 3: Global Footprint",
    title: "Australia & Gulf Region Partnerships",
    desc: "Deploying multi-channel digital growth systems for e-commerce, B2B technology, and commercial real estate clients worldwide.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#101A24] text-white pt-16 pb-20 border-b border-[#1C2B3A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182736] border border-[#2A3E54] text-[#D8B477] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Origin & Purpose</span>
          </div>

          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white mb-6">
            We Build Digital Growth Systems.
          </h1>

          <p className="text-base sm:text-lg text-[#A6B2BD] leading-relaxed mb-8">
            GrowByMasters is a digital growth and consulting agency. We help
            ambitious businesses improve online visibility, generate qualified
            buyer leads, and turn digital marketing into measurable, predictable
            business growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#growth-audit"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#D8B477] hover:bg-[#C9A466] text-[#101A24] font-semibold text-sm transition-all shadow-xl shadow-[#D8B477]/15"
            >
              <span>Get Your Free Growth Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-transparent hover:bg-[#182736] border border-[#2D3E50] text-white font-medium text-sm transition-all"
            >
              <span>Explore Verified Work</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Split Section */}
      <section className="bg-[#F7F5F0] py-20 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#A48145]">
                Why We Exist
              </div>
              <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#1D2732] font-normal leading-tight">
                Modern Businesses Do Not Need More Random Marketing Tactics.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#626B73] leading-relaxed">
                <p>
                  Most business owners have been burned by digital agencies that
                  promise the moon, bill hefty monthly retainers, and deliver
                  confusing PDF reports full of vanity impressions and meaningless
                  clicks.
                </p>
                <p>
                  We founded <strong>GrowByMasters</strong> on a different principle:
                  true digital growth is an integrated technical system. When
                  search engine visibility, paid intent targeting, high-conversion
                  landing pages, and server-side tracking function as a cohesive
                  unit, customer acquisition becomes predictable.
                </p>
                <p>
                  We operate as strategic growth consultants and dedicated
                  operators for ambitious companies across regional local
                  territories and international markets.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-6 text-xs text-[#1D2732] font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#237A72]" />
                  <span>Analytical Rigor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#237A72]" />
                  <span>Engineering Discipline</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#237A72]" />
                  <span>No Fluff Execution</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#223244] shadow-xl aspect-[4/3]">
                <Image
                  src="/images/strategist-dashboard.jpg"
                  alt="GrowByMasters strategic consultation and analytical data modeling"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 550px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach & Local Roots */}
      <section className="bg-[#101A24] text-white py-20 border-b border-[#1C2B3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#D8B477] mb-2">
              Geographic Scope
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-white font-normal mb-3">
              Rooted Locally, Scaled Globally
            </h2>
            <p className="text-sm text-[#A6B2BD]">
              We started by establishing deep credibility and results for local
              businesses, while expanding our digital systems across the United
              States, Canada, Australia, and the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="bg-[#14202C] border border-[#223244] rounded-2xl p-7 relative"
              >
                <div className="text-xs font-bold text-[#D8B477] tracking-wider uppercase mb-3">
                  {m.year}
                </div>
                <h3 className="font-serif-heading text-xl text-white font-normal mb-2">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9AA2A9] leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-[#14202C]/60 border border-[#223244] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#CBD3DC]">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#D8B477] shrink-0" />
              <span>
                <strong>Headquarters:</strong> Aligarh, Uttar Pradesh, India
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Globe2 className="w-5 h-5 text-[#237A72] shrink-0" />
              <span>
                <strong>Active Client Markets:</strong> USA · Canada · Australia · UAE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles (Ivory) */}
      <section className="bg-[#F7F5F0] py-20 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#A48145] mb-2">
              Our Operating Standards
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#1D2732] font-normal">
              What Ambitious Businesses Count On Us For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-[#EAE6DC] shadow-sm hover:border-[#D8B477] transition-all"
              >
                <div className="text-xs font-bold text-[#D8B477] uppercase tracking-wider mb-3">
                  Principle 0{i + 1}
                </div>
                <h3 className="font-serif-heading text-2xl text-[#1D2732] font-normal mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-[#626B73] leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-[#101A24] py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GrowthAuditForm
            title="Work With Strategic Growth Consultants"
            subtitle="Let's inspect your current digital positioning and discuss how we can build a predictable client acquisition system for your business."
          />
        </div>
      </section>
    </div>
  );
}
