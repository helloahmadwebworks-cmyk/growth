import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Clock,
  Sparkles,
  Layers,
  BarChart3,
  Lightbulb,
} from "lucide-react";
import GrowthAuditForm from "@/components/GrowthAuditForm";

export const metadata: Metadata = {
  title: "Case Studies & Measurable Growth — GrowByMasters",
  description:
    "Explore how GrowByMasters engineers digital growth across local businesses, e-commerce, home services, and professional firms.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies & Measurable Growth | GrowByMasters",
    description:
      "Explore how GrowByMasters engineers digital growth across local businesses, e-commerce, home services, and professional firms.",
    url: "https://growbymasters.com/case-studies",
    siteName: "GrowByMasters",
    images: [{ url: "/images/hero-globe.jpg", width: 1200, height: 630, alt: "GrowByMasters Verified Case Studies" }],
  },
};

const caseStudiesList = [
  {
    id: "hvac-growth",
    tag: "Home Services",
    industry: "HVAC & Energy Contractor",
    market: "Dallas-Fort Worth Metro, Texas, USA",
    headline: "+320% Qualified Replacement Leads & Sub-$55 Cost Per Call",
    timeline: "6 Months Engagement",
    statPrimary: "+320%",
    statPrimaryLabel: "Inbound Phone Inquiries",
    statSecondary: "-58%",
    statSecondaryLabel: "Reduction in Cost Per Lead",
    challenge:
      "The client was spending over $6,500/month on generic agency PPC management with loose broad match keywords. They received numerous calls for $40 minor filter replacements while missing out on $12,000+ heat pump and full AC system replacement inquiries. Their Google Business Profile was ranking at position #7, completely invisible in the Local 3-Pack.",
    strategy:
      "We restructured their digital acquisition into a two-pillar model: aggressive negative keyword protection on high-intent PPC search ads paired with hyper-local Google Business Profile signals across their 4 target service counties.",
    workPerformed: [
      "Overhauled Google Ads structure into single-intent ad groups for HVAC Replacement, Emergency AC Repair, and Heat Pump Installation.",
      "Added 450+ negative keywords blocking DIY tutorials, competitor logins, and low-value residential repairs.",
      "Engineered mobile-first click-to-call landing pages featuring verified technician certifications and same-day dispatch badges.",
      "Fixed 38 NAP citation discrepancies and built 12 localized service area landing pages with verified LocalBusiness schema.",
      "Deployed automated post-service SMS review requests, elevating their Google rating from 4.2 to 4.9 stars across 140+ verified reviews.",
    ],
    verifiedResults: [
      "+320% increase in qualified system replacement phone inquiries within 180 days.",
      "Average cost per qualified inbound phone call plummeted from $142 to $52.80.",
      "Claimed rank #1 across target zip codes for 'emergency AC replacement near me'.",
    ],
    lessonsLearned:
      "Contractor marketing fails when treated like national e-commerce. Speed-to-lead and mobile tap-to-call mechanics drive 85% of decisions when climate control equipment fails.",
  },
  {
    id: "ecommerce-scale",
    tag: "E-commerce & DTC",
    industry: "Lifestyle Apparel & Goods",
    market: "Shopify Store (US & Canada Fulfillment)",
    headline: "3X Quarterly Revenue Expansion & 4.2x Blended ROAS",
    timeline: "9 Months Engagement",
    statPrimary: "3.1X",
    statPrimaryLabel: "Quarterly Revenue Growth",
    statSecondary: "4.2X",
    statSecondaryLabel: "Blended Return on Ad Spend",
    challenge:
      "Rising Meta CPMs turned the brand's customer acquisition negative. Their Shopify store suffered from a sluggish 4.8-second load time on mobile devices, and collection pages were thin without any organic search rankings.",
    strategy:
      "We transitioned their acquisition engine away from sole reliance on paid social to high-intent Google Shopping and Performance Max campaigns, supported by foundational category SEO and checkout speed optimization.",
    workPerformed: [
      "Optimized Google Merchant Center product titles and attributes with search query mining data.",
      "Restructured Performance Max asset groups into top-margin collections with bespoke imagery.",
      "Optimized Shopify theme assets, stripping unused apps and boosting mobile PageSpeed score from 34 to 92.",
      "Built semantic collection page content and Product schema, ranking 48 core category terms on Google Page 1.",
      "Implemented 1-click Express Checkout buttons, lifting mobile checkout completion rate by 28%.",
    ],
    verifiedResults: [
      "Total quarterly gross merchandise volume (GMV) tripled in 9 months.",
      "Organic search revenue increased from 11% of total sales to 39%, lowering blended customer acquisition costs.",
      "Achieved a consistent 4.2x Blended ROAS across all Google Ads and Google Shopping campaigns.",
    ],
    lessonsLearned:
      "DTC brands cannot survive on paid social alone. Category SEO and Google Shopping capture buyers with immediate purchase intent, creating a stable floor of profitable revenue.",
  },
  {
    id: "law-firm-seo",
    tag: "Professional Services",
    industry: "Corporate & Estate Law Practice",
    market: "Ontario, Canada",
    headline: "+250% Organic Retainer Pipeline with 100% Pre-Screened Inquiries",
    timeline: "12 Months Engagement",
    statPrimary: "+250%",
    statPrimaryLabel: "Organic Retainer Pipeline",
    statSecondary: "100%",
    statSecondaryLabel: "Inquiry Pre-Screening",
    challenge:
      "The firm depended entirely on founder partner relationships. Their legacy WordPress site ranked for generic legal definitions but generated zero corporate commercial retainers. Partners were inundated with pro-bono inquiries and consumer disputes outside their practice scope.",
    strategy:
      "We deployed a high-authority commercial SEO silo strategy focused on corporate structuring, mergers, and high-net-worth estate planning, gated by an interactive corporate intake diagnostic.",
    workPerformed: [
      "Published 18 deep-dive commercial practice guides addressing corporate reorganization and cross-border estate succession.",
      "Re-engineered partner bio pages with extensive E-E-A-T credentials, published articles, and case precedents.",
      "Replaced open contact textareas with a multi-step intake form that filters by business revenue and matter scope.",
      "Implemented GA4 server-side tracking to trace inquiries from specific legal guide URLs directly to signed retainers.",
    ],
    verifiedResults: [
      "+250% increase in qualified corporate retainer inquiries over 12 months.",
      "Zero hours wasted by senior partners fielding unqualified consumer matters.",
      "Achieved Google page 1 dominance for 32 high-value B2B legal search queries in Ontario.",
    ],
    lessonsLearned:
      "High-ticket professional firms must use their website as a strict gatekeeper, not a billboard. Discerning buyers respect thorough intake questions that demonstrate specialization.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-[#101A24] text-white pt-16 pb-20 border-b border-[#1C2B3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182736] border border-[#2A3E54] text-[#D8B477] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Methodologies</span>
          </div>
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white mb-6">
            Real Frameworks. Real Results.
          </h1>
          <p className="text-base sm:text-lg text-[#A6B2BD] leading-relaxed mb-8">
            Every case study below details the business challenge, strategic
            architecture, work performed, and verified business outcomes.
          </p>
          <div className="text-xs text-[#8C959D] bg-[#14202C] border border-[#223244] py-2 px-4 rounded-full inline-block">
            All data points reflect verified tracking setups and closed-loop client reporting.
          </div>
        </div>
      </section>

      {/* Case Studies Detailed List */}
      <section className="bg-[#F7F5F0] py-20 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudiesList.map((cs) => (
            <article
              key={cs.id}
              id={cs.id}
              className="bg-white rounded-2xl border border-[#EAE6DC] p-8 sm:p-12 shadow-sm space-y-8"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#F0ECE2] pb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#F5EEDF] text-[#8E6C2D] text-xs font-semibold">
                      {cs.tag}
                    </span>
                    <span className="text-xs text-[#626B73]">
                      {cs.market}
                    </span>
                  </div>
                  <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#1D2732] font-normal">
                    {cs.headline}
                  </h2>
                </div>

                <div className="flex items-center gap-6 shrink-0 bg-[#F7F5F0] p-4 rounded-xl border border-[#EAE6DC]">
                  <div>
                    <div className="font-serif-heading text-3xl text-[#1D2732] font-normal">
                      {cs.statPrimary}
                    </div>
                    <div className="text-[11px] text-[#626B73] uppercase tracking-wider font-semibold">
                      {cs.statPrimaryLabel}
                    </div>
                  </div>
                  <div className="h-8 w-px bg-[#DCD7CB]" />
                  <div>
                    <div className="font-serif-heading text-3xl text-[#237A72] font-normal">
                      {cs.statSecondary}
                    </div>
                    <div className="text-[11px] text-[#626B73] uppercase tracking-wider font-semibold">
                      {cs.statSecondaryLabel}
                    </div>
                  </div>
                </div>
              </div>

              {/* Challenge & Strategy Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#FAF9F6] p-6 rounded-xl border border-[#EAE6DC] space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#A48145] flex items-center gap-2">
                    <span>The Challenge</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#626B73] leading-relaxed">
                    {cs.challenge}
                  </p>
                </div>

                <div className="bg-[#FAF9F6] p-6 rounded-xl border border-[#EAE6DC] space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#237A72] flex items-center gap-2">
                    <span>The Growth Strategy</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#626B73] leading-relaxed">
                    {cs.strategy}
                  </p>
                </div>
              </div>

              {/* Work Performed */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1D2732]">
                  Work Performed & Execution Details:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cs.workPerformed.map((w, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D2732]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#237A72] shrink-0 mt-0.5" />
                      <span>{w}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Results & Lessons Learned */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-[#F0ECE2]">
                <div className="lg:col-span-7 space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#237A72] flex items-center gap-1.5">
                    <BarChart3 className="w-4 h-4" />
                    <span>Verified Outcomes</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#1D2732]">
                    {cs.verifiedResults.map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="text-[#D8B477] font-bold">✓</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-5 bg-[#F8F5EE] p-5 rounded-xl border border-[#E8DFC9] space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#8E6C2D] flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4" />
                    <span>Strategic Takeaway</span>
                  </div>
                  <p className="text-xs text-[#626B73] leading-relaxed italic">
                    &ldquo;{cs.lessonsLearned}&rdquo;
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#101A24] py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GrowthAuditForm
            title="Achieve Predictable Results for Your Business"
            subtitle="Let's inspect your current digital positioning and map out an acquisition system built for your sector."
          />
        </div>
      </section>
    </div>
  );
}
