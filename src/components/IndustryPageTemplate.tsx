import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  AlertCircle,
  HelpCircle,
  DollarSign,
  Clock,
} from "lucide-react";
import GrowthAuditForm from "./GrowthAuditForm";

export interface IndustryPageProps {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  heroImage: string;
  painPoints: {
    challenge: string;
    impact: string;
  }[];
  growthPlaybook: {
    title: string;
    description: string;
    actions: string[];
  }[];
  kpis: {
    metric: string;
    label: string;
    benchmark: string;
  }[];
  caseStudyHighlight: {
    title: string;
    result: string;
    summary: string;
    href: string;
  };
  recommendedServices: {
    title: string;
    href: string;
    role: string;
  }[];
  investmentGuidance?: {
    range: string;
    scope: string;
    typicalTimeline: string;
  };
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export default function IndustryPageTemplate({ data }: { data: IndustryPageProps }) {
  const industrySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Digital Growth for ${data.title}`,
    description: data.subtitle,
    publisher: {
      "@type": "ProfessionalService",
      name: "GrowByMasters",
      url: "https://growbymasters.com",
    },
  };

  const faqSchema =
    data.faqs && data.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industrySchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {/* Hero Section */}
      <section className="bg-[#101A24] text-white pt-12 pb-20 border-b border-[#1C2B3A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#8C959D] mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/industries" className="hover:text-white transition-colors">
              Industries
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#D8B477] font-medium">{data.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182736] border border-[#2A3E54] text-[#D8B477] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{data.badge}</span>
              </div>

              <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white">
                Digital Growth for {data.title}
              </h1>

              <p className="text-base sm:text-lg text-[#A6B2BD] max-w-xl leading-relaxed">
                {data.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="#industry-audit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#D8B477] hover:bg-[#C9A466] text-[#101A24] font-semibold text-sm transition-all shadow-xl shadow-[#D8B477]/15"
                >
                  <span>Request {data.title} Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-transparent hover:bg-[#182736] border border-[#2D3E50] text-white font-medium text-sm transition-all"
                >
                  <span>View Case Studies</span>
                </Link>
              </div>
            </div>

            {/* Photographic Card Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#223244] shadow-2xl aspect-[4/3] group">
                <Image
                  src={data.heroImage}
                  alt={data.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101A24]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#14202C]/90 backdrop-blur-md border border-[#223244] p-3 rounded-xl flex items-center justify-between text-xs text-white">
                  <span>Targeted Inbound Pipeline</span>
                  <span className="text-[#D8B477] font-semibold">100% Attributed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Bottlenecks Solved (Ivory) */}
      <section className="bg-[#F7F5F0] py-20 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#A48145] mb-2">
              Industry Challenges
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#1D2732] font-normal">
              Why Generic Marketing Fails in {data.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.painPoints.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-[#EAE6DC] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-5">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif-heading text-xl text-[#1D2732] font-normal mb-2">
                    {p.challenge}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#626B73] leading-relaxed">
                    {p.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tailored Growth Playbook */}
      <section className="bg-[#F7F5F0] py-20 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#A48145] mb-2">
              Our Specific Playbook
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#1D2732] font-normal">
              The Dedicated Acquisition Engine
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.growthPlaybook.map((play, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-[#EAE6DC] hover:border-[#D8B477] transition-all shadow-sm"
              >
                <div className="text-xs font-bold text-[#D8B477] uppercase tracking-wider mb-3">
                  System Layer 0{i + 1}
                </div>
                <h3 className="font-serif-heading text-2xl text-[#1D2732] font-normal mb-3">
                  {play.title}
                </h3>
                <p className="text-sm text-[#626B73] leading-relaxed mb-6">
                  {play.description}
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#1D2732] pt-4 border-t border-[#F0ECE2]">
                  {play.actions.map((act, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#237A72] shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector KPIs Strip (Dark Navy) */}
      <section className="bg-[#101A24] text-white py-16 border-b border-[#1C2B3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#D8B477] mb-8 text-center sm:text-left">
            Core Unit Metrics We Target
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {data.kpis.map((k, i) => (
              <div key={i} className="bg-[#14202C] border border-[#223244] p-6 rounded-2xl">
                <div className="font-serif-heading text-3xl sm:text-4xl text-[#D8B477] font-normal mb-1">
                  {k.metric}
                </div>
                <div className="text-sm font-medium text-white mb-1">
                  {k.label}
                </div>
                <div className="text-xs text-[#8C959D]">
                  Target Benchmark: {k.benchmark}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Services for this Industry */}
      <section className="bg-[#F7F5F0] py-16 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-serif-heading text-2xl text-[#1D2732] font-normal mb-6">
            Recommended Growth Services for {data.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {data.recommendedServices.map((rs, i) => (
              <Link
                key={i}
                href={rs.href}
                className="bg-white p-6 rounded-xl border border-[#EAE6DC] hover:border-[#D8B477] hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm text-[#1D2732] group-hover:text-[#A48145] transition-colors">
                    {rs.title}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#8C959D] group-hover:text-[#A48145]" />
                </div>
                <p className="text-xs text-[#626B73]">{rs.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Indicative Investment Guidance */}
      {data.investmentGuidance && (
        <section className="py-16 bg-[#F7F5F0] border-t border-[#EAE6DC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#EAE6DC] shadow-xs">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D8B477]/10 text-[#A48145] text-xs font-semibold uppercase tracking-wider mb-4">
                  <DollarSign className="w-3.5 h-3.5" />
                  <span>Transparent Investment Guidance</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#101A24] font-medium tracking-tight mb-4">
                  Indicative Budgets & Typical Timelines
                </h3>
                <p className="text-[#626B73] text-sm sm:text-base leading-relaxed mb-8">
                  Every engagement is scoped according to your commercial goals, technical foundation, and competitive market. We avoid arbitrary retainers and focus on measurable growth infrastructure.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#EAE6DC]">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#8C959D] font-semibold mb-1">
                    Typical Investment Range
                  </div>
                  <div className="text-2xl font-serif font-bold text-[#101A24]">
                    {data.investmentGuidance.range}
                  </div>
                  <p className="text-xs text-[#626B73] mt-1">Based on scope & team tier</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#8C959D] font-semibold mb-1">
                    Standard Scope
                  </div>
                  <div className="text-sm font-medium text-[#101A24] leading-relaxed">
                    {data.investmentGuidance.scope}
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#8C959D] font-semibold mb-1">
                    Typical Timeline
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#237A72]">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>{data.investmentGuidance.typicalTimeline}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Industry FAQs */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="py-20 bg-white border-t border-[#EAE6DC]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D8B477]/10 text-[#A48145] text-xs font-semibold uppercase tracking-wider mb-4">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#101A24] font-medium tracking-tight mb-4">
                Common Questions from {data.title} Leaders
              </h2>
              <p className="text-[#626B73] text-sm sm:text-base leading-relaxed">
                Clear answers regarding deliverables, attribution, communication, and expected milestones.
              </p>
            </div>

            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-[#F7F5F0] rounded-xl p-6 border border-[#EAE6DC] transition-all open:border-[#D8B477] open:bg-white"
                >
                  <summary className="flex items-center justify-between cursor-pointer font-serif text-lg font-medium text-[#101A24] group-hover:text-[#A48145] transition-colors list-none">
                    <span>{faq.question}</span>
                    <span className="ml-4 flex-shrink-0 text-[#8C959D] group-hover:text-[#A48145] transition-transform group-open:rotate-180">
                      ▾
                    </span>
                  </summary>
                  <p className="mt-4 text-sm text-[#626B73] leading-relaxed border-t border-[#EAE6DC] pt-4">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Embedded Audit Form */}
      <section id="industry-audit" className="bg-[#101A24] py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GrowthAuditForm
            title={`Get an Audit for Your ${data.title} Business`}
            subtitle={`We evaluate your current customer acquisition channels and deliver a step-by-step diagnostic roadmap.`}
            defaultIndustry={data.title}
          />
        </div>
      </section>
    </div>
  );
}
