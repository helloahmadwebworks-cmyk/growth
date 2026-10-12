import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Target,
  Globe,
  Code2,
  Users,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Compass,
  Activity,
  Layers,
  Shield,
} from "lucide-react";
import GrowthAuditForm from "@/components/GrowthAuditForm";
import TestimonialSlider from "@/components/TestimonialSlider";
import HeroGlobe from "@/components/HeroGlobe";

export const metadata: Metadata = {
  title: "Digital Marketing Agency for Business Growth | GrowByMasters",
  description:
    "GrowByMasters is a digital marketing agency helping ambitious businesses scale with high-impact SEO, Google Ads management, website optimization, and qualified lead generation systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Digital Marketing Agency for Business Growth | GrowByMasters",
    description:
      "GrowByMasters is a digital marketing agency helping ambitious businesses scale with high-impact SEO, Google Ads management, website optimization, and qualified lead generation systems.",
    url: "https://growbymasters.com",
    siteName: "GrowByMasters",
    images: [
      {
        url: "/images/hero-globe.jpg",
        width: 1200,
        height: 630,
        alt: "GrowByMasters Digital Marketing Agency for Business Growth",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency for Business Growth | GrowByMasters",
    description:
      "GrowByMasters is a digital marketing agency helping ambitious businesses scale with high-impact SEO, Google Ads management, website optimization, and qualified lead generation systems.",
    images: ["/images/hero-globe.jpg"],
  },
};

const coreServices = [
  {
    icon: Search,
    title: "SEO & Local SEO",
    description:
      "Rank higher on Google, dominate local map packs, and attract qualified prospective clients searching with high intent.",
    href: "/services/seo",
  },
  {
    icon: Target,
    title: "Google Ads Management",
    description:
      "Drive instant, high-quality traffic and phone enquiries with disciplined bidding, negative keyword pruning, and high ROAS.",
    href: "/services/google-ads",
  },
  {
    icon: Code2,
    title: "Website Design & Development",
    description:
      "Bespoke, high-performance Next.js websites engineered for sub-second speeds, commercial credibility, and lead generation.",
    href: "/services/web-design-development",
  },
  {
    icon: Globe,
    title: "Website Optimization & CRO",
    description:
      "Conversion architecture and page speed optimization engineered to turn existing visitors into booked consultations.",
    href: "/services/website-optimization",
  },
  {
    icon: Users,
    title: "Lead Generation Systems",
    description:
      "Tailored multi-channel funnels, qualification forms, and CRM automation built to keep your sales pipeline filled.",
    href: "/services/lead-generation",
  },
  {
    icon: BarChart3,
    title: "Analytics & Tracking",
    description:
      "Measure performance with GA4 server-side tracking, CRM attribution, and transparent growth dashboards that prove ROI.",
    href: "/services/analytics-tracking",
  },
];

const industries = [
  {
    title: "Home Services",
    subtitle: "HVAC, Roofing, Plumbing, Flooring & More",
    image: "/images/industries/home-services.jpg",
    href: "/industries/home-services",
  },
  {
    title: "Healthcare",
    subtitle: "Dental, Clinics, Physiotherapy and More",
    image: "/images/industries/healthcare.jpg",
    href: "/industries/healthcare",
  },
  {
    title: "E-commerce",
    subtitle: "Shopify & DTC Brands",
    image: "/images/industries/ecommerce.jpg",
    href: "/industries/ecommerce",
  },
  {
    title: "Professional Services",
    subtitle: "Law Firms, Accountants, Consultants",
    image: "/images/industries/professional-services.jpg",
    href: "/industries/professional-services",
  },
  {
    title: "Real Estate",
    subtitle: "Agents, Brokers, Property Management",
    image: "/images/industries/real-estate.jpg",
    href: "/industries/real-estate",
  },
  {
    title: "B2B & SaaS",
    subtitle: "Manufacturers, Tech Companies and More",
    image: "/images/industries/b2b-saas.jpg",
    href: "/industries/b2b-saas",
  },
];

const caseStudies = [
  {
    tag: "Local Business",
    metric: "+320%",
    metricLabel: "More Qualified Leads",
    client: "HVAC & Energy Contractor",
    market: "Texas, USA",
    chartType: "bars",
    href: "/case-studies#hvac-growth",
    bars: [25, 38, 45, 60, 85, 115, 140],
  },
  {
    tag: "E-commerce",
    metric: "3X",
    metricLabel: "Quarterly Revenue Growth",
    client: "Lifestyle Goods & Apparel",
    market: "Shopify DTC Brand",
    chartType: "curve",
    href: "/case-studies#ecommerce-scale",
    points: "0,80 30,70 60,65 90,40 120,30 150,15 180,5",
  },
  {
    tag: "Professional Services",
    metric: "+250%",
    metricLabel: "Organic Search Inbound",
    client: "Corporate & Estate Law Practice",
    market: "Ontario, Canada",
    chartType: "steps",
    href: "/case-studies#law-firm-seo",
    bars: [30, 42, 50, 70, 95, 120, 160],
  },
];

const insights = [
  {
    category: "SEO",
    title: "How Local SEO Helps Home Service Businesses Get More Leads",
    excerpt:
      "A strategic breakdown of Google Map Pack optimization, local citations, and high-conversion landing page architecture.",
    date: "Oct 10, 2026",
    readTime: "5 min read",
    image: "/images/insights/local-seo.jpg",
    href: "/insights/local-seo-home-services",
  },
  {
    category: "Google Ads",
    title: "Google Ads vs SEO: Which is Better for Your Business Growth?",
    excerpt:
      "When to invest in instant intent PPC campaigns versus long-term compounding organic search visibility for sustainable returns.",
    date: "Oct 8, 2026",
    readTime: "6 min read",
    image: "/images/insights/google-ads.jpg",
    href: "/insights/google-ads-vs-seo",
  },
  {
    category: "Website",
    title: "10 Website UX Mistakes That Are Silently Costing You Qualified Leads",
    excerpt:
      "Common friction points in mobile navigation, form fields, and value propositions that drive prospective buyers away.",
    date: "Oct 5, 2026",
    readTime: "5 min read",
    image: "/images/insights/website-mistakes.jpg",
    href: "/insights/website-conversion-mistakes",
  },
];

export default function HomePage() {
  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (Dark Navy with Globe Visual & Credibility Stats)
         ========================================================================= */}
      <section className="relative bg-[#101A24] text-white overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#1C2B3A]">
        {/* Subtle background ambient radial light */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D8B477]/5 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#237A72]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182736] border border-[#2A3E54] text-[#D8B477] text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#D8B477]" />
                <span>Global Digital Marketing & Growth Consulting Agency</span>
              </div>

              <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-[62px] leading-[1.08] font-normal tracking-tight text-white">
                Digital Marketing Agency <br className="hidden sm:block" />
                for Business Growth
              </h1>

              <p className="text-base sm:text-lg text-[#A6B2BD] max-w-xl leading-relaxed">
                We build predictable digital growth systems. Helping businesses improve
                search visibility, attract qualified prospects, convert visitors, and
                measure marketing performance.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/#growth-audit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#D8B477] hover:bg-[#C9A466] text-[#101A24] font-semibold text-sm sm:text-base transition-all duration-200 shadow-xl shadow-[#D8B477]/15 active:scale-[0.98]"
                >
                  <span>Get Your Free Growth Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-transparent hover:bg-[#182736] border border-[#2D3E50] hover:border-[#D8B477]/50 text-white font-medium text-sm sm:text-base transition-all duration-200"
                >
                  <span>View Our Work</span>
                </Link>
              </div>
            </div>

            {/* Right Visual: Glowing 3D Rotating Earth Globe with Network Arcs */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <HeroGlobe />
            </div>
          </div>

          {/* Credibility / Numbers Strip Below Hero */}
          <div className="mt-16 pt-10 border-t border-[#1F2F41] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-1">
              <div className="font-serif-heading text-3xl sm:text-4xl text-white font-normal">
                50+
              </div>
              <div className="text-xs uppercase tracking-wider text-[#8C959D] font-medium">
                Businesses Served
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-serif-heading text-3xl sm:text-4xl text-[#D8B477] font-normal">
                3X
              </div>
              <div className="text-xs uppercase tracking-wider text-[#8C959D] font-medium">
                Average Traffic Growth
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-serif-heading text-3xl sm:text-4xl text-[#237A72] font-normal">
                200%
              </div>
              <div className="text-xs uppercase tracking-wider text-[#8C959D] font-medium">
                More Leads (Avg)
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-sm sm:text-base font-semibold text-white">
                USA · Canada · Australia · UAE
              </div>
              <div className="text-xs uppercase tracking-wider text-[#8C959D] font-medium">
                Global Client Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TRUST STRIP (Approach & Disciplined Methodology)
         ========================================================================= */}
      <section className="bg-[#14202C] border-b border-[#223244] py-6 text-xs text-[#CBD3DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-2 text-[#D8B477] font-medium">
              <Shield className="w-4 h-4 shrink-0" />
              <span>Grounded Growth Consulting</span>
            </div>
            <p className="text-[#8C959D] max-w-3xl">
              We operate with rigorous analytical frameworks, zero vanity metrics,
              and verifiable end-to-end attribution. Every growth strategy is
              tailored to your unit economics and buyer acquisition lifecycle.
            </p>
            <div className="flex items-center gap-4 text-[#A6B2BD]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#237A72]" /> No Long-term Lock-in
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#237A72]" /> Weekly Transparent Dashboards
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CORE SERVICES OVERVIEW (Warm Ivory Background with 6 Polish Cards)
         ========================================================================= */}
      <section className="bg-[#F7F5F0] py-20 lg:py-24 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#1D2732] font-normal mb-3">
                Our Core Services
              </h2>
              <p className="text-base text-[#626B73] max-w-xl">
                Complete digital growth solutions to help your business get
                found, get leads, and grow.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D2732] hover:text-[#D8B477] transition-colors group shrink-0"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#D8B477]" />
            </Link>
          </div>

          {/* 6 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl p-7 border border-[#EAE6DC] hover:border-[#D8B477]/60 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Gold Rounded Icon Box */}
                    <div className="w-12 h-12 rounded-xl bg-[#F8F3EA] border border-[#E8DFCF] flex items-center justify-center mb-6 text-[#A48145] group-hover:scale-105 group-hover:bg-[#D8B477] group-hover:text-[#101A24] transition-all">
                      <Icon className="w-6 h-6 transition-colors" />
                    </div>

                    <h3 className="font-serif-heading text-xl text-[#1D2732] font-normal mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#626B73] leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D2732] group-hover:text-[#A48145] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY GROWBYMASTERS (Dark Split Section with Analyst Dashboard Visual)
         ========================================================================= */}
      <section className="bg-[#101A24] text-white py-20 lg:py-28 border-b border-[#1C2B3A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Strategist at Multimonitor Dashboard */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-[#223244] shadow-2xl shadow-black/80 aspect-[4/3] group">
                <Image
                  src="/images/strategist-dashboard.jpg"
                  alt="GrowByMasters Senior Growth Strategist inspecting multi-monitor analytics"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 550px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101A24]/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 bg-[#14202C]/90 backdrop-blur-md border border-[#223244] p-3 rounded-xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#237A72]" />
                    <span className="text-[#CBD3DC] font-medium">Real-Time Data Modeling</span>
                  </div>
                  <span className="text-[#D8B477] font-semibold">Zero Guesswork</span>
                </div>
              </div>
            </div>

            {/* Right Column: Why Us Copy & Bullet Points */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B477]">
                WHY GROWBYMASTERS
              </div>

              <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-[44px] leading-tight font-normal text-white">
                We Build Digital <br />
                Growth Systems.
              </h2>

              <p className="text-[#A6B2BD] text-base leading-relaxed">
                Not just marketing services. We combine strategy, execution, and
                data to help businesses achieve measurable and sustainable
                growth. We treat your client acquisition pipeline as a unified
                machine.
              </p>

              {/* 2x2 Feature Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#237A72]/20 border border-[#237A72] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#237A72]" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    Data-Driven Strategy
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#237A72]/20 border border-[#237A72] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#237A72]" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    Dedicated Support
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#237A72]/20 border border-[#237A72] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#237A72]" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    Transparent Reporting
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#237A72]/20 border border-[#237A72] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#237A72]" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    Global Client Experience
                  </span>
                </div>
              </div>

              <div>
                <Link
                  href="/#growth-audit"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#D8B477] hover:bg-[#C9A466] text-[#101A24] font-semibold text-sm transition-all duration-200 shadow-md shadow-[#D8B477]/15"
                >
                  <span>Get Your Free Growth Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOW WE WORK (4-Step Growth Methodology)
         ========================================================================= */}
      <section className="bg-[#F7F5F0] py-20 lg:py-24 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block text-xs font-semibold uppercase tracking-wider text-[#A48145] mb-2">
              Our Methodology
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#1D2732] font-normal mb-3">
              How We Work
            </h2>
            <p className="text-sm sm:text-base text-[#626B73]">
              A structured four-step engine designed to eliminate marketing waste
              and scale high-intent customer acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 border border-[#EAE6DC] relative group hover:border-[#D8B477] transition-all">
              <div className="text-xs font-bold text-[#D8B477] tracking-widest uppercase mb-4 flex items-center justify-between">
                <span>01</span>
                <Compass className="w-5 h-5 text-[#D8B477]" />
              </div>
              <h3 className="font-serif-heading text-xl text-[#1D2732] font-normal mb-2">
                Discover
              </h3>
              <p className="text-xs sm:text-sm text-[#626B73] leading-relaxed">
                Understand the business, audience economics, competitive landscape,
                and precise quarterly revenue targets.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 border border-[#EAE6DC] relative group hover:border-[#D8B477] transition-all">
              <div className="text-xs font-bold text-[#D8B477] tracking-widest uppercase mb-4 flex items-center justify-between">
                <span>02</span>
                <Activity className="w-5 h-5 text-[#237A72]" />
              </div>
              <h3 className="font-serif-heading text-xl text-[#1D2732] font-normal mb-2">
                Diagnose
              </h3>
              <p className="text-xs sm:text-sm text-[#626B73] leading-relaxed">
                Identify visibility gaps, search ranking leaks, paid traffic
                bottlenecks, and site conversion friction points.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 border border-[#EAE6DC] relative group hover:border-[#D8B477] transition-all">
              <div className="text-xs font-bold text-[#D8B477] tracking-widest uppercase mb-4 flex items-center justify-between">
                <span>03</span>
                <Layers className="w-5 h-5 text-[#D8B477]" />
              </div>
              <h3 className="font-serif-heading text-xl text-[#1D2732] font-normal mb-2">
                Execute
              </h3>
              <p className="text-xs sm:text-sm text-[#626B73] leading-relaxed">
                Deploy high-intent search campaigns, conversion-focused pages,
                local maps rank dominance, and tracking pipelines.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-6 border border-[#EAE6DC] relative group hover:border-[#D8B477] transition-all">
              <div className="text-xs font-bold text-[#D8B477] tracking-widest uppercase mb-4 flex items-center justify-between">
                <span>04</span>
                <TrendingUp className="w-5 h-5 text-[#237A72]" />
              </div>
              <h3 className="font-serif-heading text-xl text-[#1D2732] font-normal mb-2">
                Improve
              </h3>
              <p className="text-xs sm:text-sm text-[#626B73] leading-relaxed">
                Analyze GA4 closed-loop attribution, optimize CPA, prune wasted
                ad spend, and scale highest-converting channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INDUSTRIES WE WORK WITH (Visual 6-Card Photographic Grid)
         ========================================================================= */}
      <section className="bg-[#F7F5F0] py-20 lg:py-24 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#1D2732] font-normal mb-3">
                Industries We Work With
              </h2>
              <p className="text-base text-[#626B73] max-w-xl">
                We understand your industry, your challenges, and what it takes
                to grow.
              </p>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D2732] hover:text-[#D8B477] transition-colors group shrink-0"
            >
              <span>View All Industries</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#D8B477]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <Link
                key={ind.title}
                href={ind.href}
                className="group relative rounded-2xl overflow-hidden aspect-[16/11] border border-[#E0DCD2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end p-6"
              >
                <Image
                  src={ind.image}
                  alt={ind.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101A24]/90 via-[#101A24]/40 to-transparent transition-opacity group-hover:opacity-90" />

                <div className="relative z-10 text-white">
                  <h3 className="font-serif-heading text-2xl font-normal mb-1 group-hover:text-[#D8B477] transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-[#CBD3DC] flex items-center justify-between">
                    <span>{ind.subtitle}</span>
                    <ArrowRight className="w-4 h-4 text-[#D8B477] opacity-0 group-hover:opacity-100 transition-opacity ml-2" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CASE STUDIES (Dark Navy Section with Real Growth Visualizations)
         ========================================================================= */}
      <section className="bg-[#101A24] text-white py-20 lg:py-28 border-b border-[#1C2B3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B477] mb-2">
                MEASURABLE OUTCOMES
              </div>
              <h2 className="font-serif-heading text-3xl sm:text-4xl text-white font-normal mb-2">
                Case Studies
              </h2>
              <p className="text-sm sm:text-base text-[#9AA2A9]">
                Real results. Real businesses. Real growth.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D8B477] hover:underline shrink-0"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.client}
                className="bg-white rounded-2xl p-7 text-[#1D2732] flex flex-col justify-between shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#F5EEDF] text-[#8E6C2D] text-xs font-semibold mb-4">
                    {cs.tag}
                  </div>

                  <div className="font-serif-heading text-3xl sm:text-4xl text-[#1D2732] font-normal tracking-tight">
                    {cs.metric}
                  </div>
                  <div className="text-sm font-semibold text-[#237A72] mb-1">
                    {cs.metricLabel}
                  </div>
                  <div className="text-xs text-[#626B73] mb-6">
                    {cs.client} · {cs.market}
                  </div>

                  {/* Chart Visual Simulation */}
                  <div className="h-28 bg-[#F7F5F0] rounded-xl p-3 border border-[#EAE6DC] mb-6 flex items-end justify-center">
                    {cs.chartType === "bars" && (
                      <div className="w-full flex items-end justify-between gap-1.5 h-full pt-4">
                        {cs.bars?.map((val, idx) => (
                          <div
                            key={idx}
                            className="flex-1 bg-[#D8B477] rounded-t-sm transition-all hover:bg-[#A48145]"
                            style={{ height: `${(val / 140) * 100}%` }}
                          />
                        ))}
                      </div>
                    )}
                    {cs.chartType === "curve" && (
                      <svg
                        className="w-full h-full overflow-visible"
                        viewBox="0 0 180 80"
                      >
                        <defs>
                          <linearGradient
                            id="goldGrad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop offset="0%" stopColor="#D8B477" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#D8B477" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <polygon
                          points="0,80 0,75 30,68 60,60 90,40 120,25 150,15 180,5 180,80"
                          fill="url(#goldGrad)"
                        />
                        <polyline
                          fill="none"
                          stroke="#A48145"
                          strokeWidth="3"
                          points="0,75 30,68 60,60 90,40 120,25 150,15 180,5"
                        />
                      </svg>
                    )}
                    {cs.chartType === "steps" && (
                      <div className="w-full flex items-end justify-between gap-1.5 h-full pt-4">
                        {cs.bars?.map((val, idx) => (
                          <div
                            key={idx}
                            className="flex-1 bg-[#237A72] rounded-t-sm transition-all hover:bg-[#1A5C56]"
                            style={{ height: `${(val / 160) * 100}%` }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <Link
                  href={cs.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D2732] hover:text-[#A48145] transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHAT OUR CLIENTS SAY (Client Testimonials Slider)
         ========================================================================= */}
      <section className="bg-[#F7F5F0] py-20 lg:py-24 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialSlider />
        </div>
      </section>

      {/* =========================================================================
          LATEST INSIGHTS + READY TO GROW CTA BOX (Split Layout)
         ========================================================================= */}
      <section className="bg-[#F7F5F0] py-20 lg:py-24 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: 3 Articles */}
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#1D2732] font-normal mb-1">
                    Latest Insights
                  </h2>
                  <p className="text-sm text-[#626B73]">
                    Tips, strategies and ideas to grow your business.
                  </p>
                </div>
                <Link
                  href="/insights"
                  className="text-xs font-semibold text-[#1D2732] hover:text-[#A48145] flex items-center gap-1 group"
                >
                  <span>View All Posts</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {insights.map((post) => (
                  <article
                    key={post.title}
                    className="bg-white rounded-2xl overflow-hidden border border-[#EAE6DC] group hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E4DA]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 300px"
                        />
                        <div className="absolute top-2.5 left-2.5 bg-[#101A24]/90 text-[#D8B477] text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
                          {post.category}
                        </div>
                      </div>

                      <div className="p-4 sm:p-5">
                        <h3 className="font-serif-heading text-base text-[#1D2732] font-normal leading-snug mb-2 group-hover:text-[#A48145] transition-colors">
                          <Link href={post.href}>{post.title}</Link>
                        </h3>
                        <p className="text-xs text-[#626B73] line-clamp-2 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 pt-0 border-t border-[#F0ECE2] text-[11px] text-[#8C959D] flex items-center justify-between">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right Column: Editorial CTA Card */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-7 sm:p-8 border-2 border-[#D8B477]/40 shadow-lg shadow-[#D8B477]/5 space-y-6">
              <div className="w-10 h-10 rounded-full bg-[#F8F3EA] border border-[#D8B477]/30 flex items-center justify-center text-[#A48145]">
                <Sparkles className="w-5 h-5" />
              </div>

              <div>
                <h3 className="font-serif-heading text-2xl text-[#1D2732] font-normal mb-2">
                  Ready to Grow Your Business?
                </h3>
                <p className="text-xs sm:text-sm text-[#626B73] leading-relaxed">
                  Get a free website & marketing audit and personalized growth plan
                  tailored to your market and unit economics.
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-[#1D2732]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#237A72]" />
                  <span>No-obligation executive analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#237A72]" />
                  <span>Expert recommendations from senior strategists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#237A72]" />
                  <span>Tailored specifically to your business sector</span>
                </div>
              </div>

              <div>
                <Link
                  href="/#growth-audit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#D8B477] hover:bg-[#C9A466] text-[#101A24] font-semibold text-sm transition-all shadow-md shadow-[#D8B477]/20"
                >
                  <span>Get Free Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EMBEDDED GROWTH AUDIT FORM SECTION (Interactive Lead Gen Pipeline)
         ========================================================================= */}
      <section id="growth-audit" className="bg-[#101A24] py-20 lg:py-24 text-white scroll-mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GrowthAuditForm
            title="Find the Biggest Opportunities for Your Business"
            subtitle="Get a focused review of your website, search visibility, and digital growth opportunities. No fluff, no pressure."
          />
        </div>
      </section>
    </div>
  );
}
