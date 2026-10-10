import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Shield,
  Layers,
  Sparkles,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";
import GrowthAuditForm from "./GrowthAuditForm";

export interface ServicePageProps {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  deliverablesSummary: string[];
  overview: {
    heading: string;
    description: string[];
  };
  pillars: {
    title: string;
    description: string;
    icon: LucideIcon;
    bullets: string[];
  }[];
  process: {
    step: string;
    title: string;
    detail: string;
  }[];
  idealFor: string[];
  relatedServices: {
    title: string;
    href: string;
    description: string;
  }[];
}

export default function ServicePageTemplate({ data }: { data: ServicePageProps }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title,
    description: data.subtitle,
    provider: {
      "@type": "ProfessionalService",
      name: "GrowByMasters",
      url: "https://growbymasters.com",
    },
    serviceType: data.badge,
    areaServed: ["United States", "Canada", "Australia", "United Arab Emirates"],
  };

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Service Hero (Dark Navy) */}
      <section className="bg-[#101A24] text-white pt-12 pb-20 border-b border-[#1C2B3A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D8B477]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#8C959D] mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#D8B477] font-medium">{data.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182736] border border-[#2A3E54] text-[#D8B477] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{data.badge}</span>
              </div>

              <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white">
                {data.title}
              </h1>

              <p className="text-base sm:text-lg text-[#A6B2BD] max-w-2xl leading-relaxed">
                {data.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="#service-audit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#D8B477] hover:bg-[#C9A466] text-[#101A24] font-semibold text-sm transition-all shadow-xl shadow-[#D8B477]/15"
                >
                  <span>Request Specific Service Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-transparent hover:bg-[#182736] border border-[#2D3E50] text-white font-medium text-sm transition-all"
                >
                  <span>Review Past Results</span>
                </Link>
              </div>
            </div>

            {/* Deliverables Snapshot Card */}
            <div className="lg:col-span-4 bg-[#14202C] border border-[#223244] rounded-2xl p-6 sm:p-7 shadow-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#D8B477] mb-4 flex items-center justify-between">
                <span>Core Capabilities</span>
                <Shield className="w-4 h-4 text-[#237A72]" />
              </div>
              <ul className="space-y-3 text-sm text-[#CBD3DC]">
                {data.deliverablesSummary.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#237A72] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-[#223244] text-[11px] text-[#8C959D] flex items-center justify-between">
                <span>Accountability: 100% Verified</span>
                <span>No Lock-In Contract</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Overview (Ivory) */}
      <section className="bg-[#F7F5F0] py-20 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#A48145]">
                Strategic Foundation
              </div>
              <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#1D2732] font-normal leading-tight">
                {data.overview.heading}
              </h2>
              <div className="pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#1D2732] mb-3">
                  Recommended For:
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.idealFor.map((sector, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white border border-[#EAE6DC] rounded-lg text-xs font-medium text-[#1D2732]"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 text-base text-[#626B73] leading-relaxed">
              {data.overview.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operational Pillars (Ivory cards) */}
      <section className="bg-[#F7F5F0] py-20 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#A48145] mb-2">
              System Architecture
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#1D2732] font-normal">
              How We Engineer {data.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 border border-[#EAE6DC] hover:border-[#D8B477]/60 shadow-sm transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F8F3EA] border border-[#E8DFCF] flex items-center justify-center mb-6 text-[#A48145]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-heading text-2xl text-[#1D2732] font-normal mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#626B73] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <ul className="space-y-2.5 pt-4 border-t border-[#F0ECE2] text-xs sm:text-sm text-[#1D2732]">
                    {pillar.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#237A72] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Execution Roadmap (Dark Navy) */}
      <section className="bg-[#101A24] text-white py-20 border-b border-[#1C2B3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#D8B477] mb-2">
              Implementation Plan
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-white font-normal">
              From Diagnostic to Scaled Velocity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {data.process.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#14202C] border border-[#223244] rounded-2xl p-6 relative group"
              >
                <div className="text-xs font-bold text-[#D8B477] tracking-wider uppercase mb-3">
                  {step.step}
                </div>
                <h3 className="font-serif-heading text-xl text-white font-normal mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#9AA2A9] leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-[#F7F5F0] py-16 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif-heading text-2xl text-[#1D2732] font-normal">
              Complementary Growth Channels
            </h3>
            <Link
              href="/services"
              className="text-xs font-semibold text-[#1D2732] hover:text-[#A48145] flex items-center gap-1"
            >
              All Services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {data.relatedServices.map((rs, i) => (
              <Link
                key={i}
                href={rs.href}
                className="bg-white p-6 rounded-xl border border-[#EAE6DC] hover:border-[#D8B477] hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-sm text-[#1D2732] group-hover:text-[#A48145] transition-colors">
                    {rs.title}
                  </h4>
                  <ArrowUpRight className="w-4 h-4 text-[#8C959D] group-hover:text-[#A48145]" />
                </div>
                <p className="text-xs text-[#626B73] line-clamp-2">
                  {rs.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Audit Form Anchor */}
      <section id="service-audit" className="bg-[#101A24] py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GrowthAuditForm
            title={`Evaluate Your ${data.title} System`}
            subtitle="Get an unbiased, senior-level diagnostic of your current setup, benchmarked against top competitors."
            defaultService={data.title}
          />
        </div>
      </section>
    </div>
  );
}
