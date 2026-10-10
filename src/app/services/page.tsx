import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Target,
  Globe,
  Users,
  PenTool,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Growth Services — Digital Systems for Modern Businesses",
  description:
    "Explore our full suite of digital growth services: SEO, Local SEO, Google Ads, Website Optimization, Lead Generation Systems, Content Marketing, and Analytics.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Growth Services — Digital Systems for Modern Businesses | GrowByMasters",
    description:
      "Explore our full suite of digital growth services: SEO, Local SEO, Google Ads, Website Optimization, Lead Generation Systems, Content Marketing, and Analytics.",
    url: "https://growbymasters.com/services",
    siteName: "GrowByMasters",
    images: [{ url: "/images/hero-globe.jpg", width: 1200, height: 630, alt: "GrowByMasters Growth Services" }],
  },
};

const services = [
  {
    icon: Search,
    title: "SEO & Organic Search",
    badge: "Compounding Growth",
    href: "/services/seo",
    summary:
      "Dominate high-intent search terms. We build technical authority, semantic entity clusters, and backlink architectures that turn search engines into your #1 customer acquisition channel.",
    deliverables: [
      "Technical Core Web Vitals Audit & Schema Graph",
      "Commercial Intent Keyword Architecture",
      "Semantic Topic Clusters & Editorial Strategy",
      "White-Hat Digital PR & Domain Authority Acquisition",
    ],
  },
  {
    icon: Search,
    title: "Local SEO & Google Maps",
    badge: "Local Dominance",
    href: "/services/local-seo",
    summary:
      "Own your local territory. We optimize Google Business Profiles, establish NAP consistency across high-authority local directories, and rank you in the top 3 Map Pack spots.",
    deliverables: [
      "Google Business Profile (GBP) Optimization",
      "Local Citation Audit & Hyper-Local Geo-Signals",
      "Automated Review Generation Protocols",
      "Localized Landing Pages with Radius Targeting",
    ],
  },
  {
    icon: Target,
    title: "Google Ads Management",
    badge: "Immediate Intent",
    href: "/services/google-ads",
    summary:
      "Turn paid clicks into profitable phone calls and consultations. We manage Google Search, Performance Max, and Remarketing campaigns with obsessive ROAS discipline.",
    deliverables: [
      "High-Intent Search Campaign Structuring",
      "Aggressive Negative Keyword Sculpting",
      "Ad Copy A/B Testing & Micro-Conversion Hooks",
      "Server-Side Enhanced Conversion Tracking",
    ],
  },
  {
    icon: Globe,
    title: "Website Design & Optimization",
    badge: "Conversion Architecture",
    href: "/services/website-optimization",
    summary:
      "Websites built to sell, not just to look pretty. Lightning-fast Next.js architecture, intuitive user flows, clear value propositions, and friction-free lead capture forms.",
    deliverables: [
      "Mobile-First Responsive UX/UI Design",
      "Sub-second Page Load & 100/100 Core Web Vitals",
      "Conversion Rate Optimization (CRO) Heatmap Auditing",
      "Frictionless Qualification Forms & Meeting Scheduling",
    ],
  },
  {
    icon: Users,
    title: "Lead Generation Systems",
    badge: "Pipeline Engine",
    href: "/services/lead-generation",
    summary:
      "Inbound funnels that filter tire-kickers and route pre-qualified decision makers straight to your calendar. Complete with automated lead notifications and CRM synchronization.",
    deliverables: [
      "Multi-Step Lead Qualification Funnels",
      "Automated Instant Lead Routing (Email & CRM)",
      "High-Value Lead Magnets & Diagnostic Calculators",
      "Follow-up Nurture Sequence Integrations",
    ],
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    badge: "Thought Authority",
    href: "/services/content-marketing",
    summary:
      "Editorial content designed to answer complex buyer questions, demonstrate undeniable expertise, and capture prospective clients during their evaluation phase.",
    deliverables: [
      "Comprehensive Industry Buyer Persona Research",
      "In-Depth Guides, Frameworks & Case Overviews",
      "Strategic Distribution Across Search & Social",
      "Conversion Anchors Embedded in Every Editorial Piece",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Conversion Tracking",
    badge: "Verified ROI",
    href: "/services/analytics-tracking",
    summary:
      "Never wonder where your revenue came from again. End-to-end Google Analytics 4, Google Tag Manager server containers, and real-time executive performance dashboards.",
    deliverables: [
      "GA4 Server-Side Measurement Protocol Setup",
      "Google Tag Manager Custom Event Modeling",
      "Offline Conversion Import (Closed Deals to Ads)",
      "Automated Executive Reporting Dashboards",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-[#101A24] text-white pt-16 pb-20 border-b border-[#1C2B3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182736] border border-[#2A3E54] text-[#D8B477] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Integrated Capabilities</span>
          </div>
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white mb-6">
            We Engineer Every Link in Your Growth Chain
          </h1>
          <p className="text-base sm:text-lg text-[#A6B2BD] leading-relaxed mb-8">
            Sustainable business growth requires traffic, conversion, and measurement working in harmony. Explore our modular growth systems below.
          </p>
          <Link
            href="/#growth-audit"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#D8B477] hover:bg-[#C9A466] text-[#101A24] font-semibold text-sm transition-all shadow-xl shadow-[#D8B477]/15"
          >
            <span>Request a Full Growth Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Services List (Warm Ivory) */}
      <section className="bg-[#F7F5F0] py-20 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {services.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-white rounded-2xl p-8 sm:p-10 border border-[#EAE6DC] hover:border-[#D8B477] transition-all shadow-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[#F8F3EA] border border-[#E8DFCF] flex items-center justify-center text-[#A48145]">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#A48145]">
                          {s.badge}
                        </span>
                      </div>

                      <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#1D2732] font-normal">
                        {s.title}
                      </h2>

                      <p className="text-sm text-[#626B73] leading-relaxed">
                        {s.summary}
                      </p>

                      <Link
                        href={s.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D2732] hover:text-[#A48145] transition-colors pt-2 group"
                      >
                        <span>Explore {s.title} Framework</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    <div className="lg:col-span-7 bg-[#FAF9F6] border border-[#EAE6DC] rounded-xl p-6">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#1D2732] mb-4">
                        What We Deliver:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {s.deliverables.map((d, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D2732]">
                            <CheckCircle2 className="w-4 h-4 text-[#237A72] shrink-0 mt-0.5" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
