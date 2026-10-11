import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Growth Insights & Editorial Guides — GrowByMasters",
  description:
    "Actionable digital growth frameworks, SEO playbooks, Google Ads strategies, and website conversion analyses for ambitious business leaders.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Growth Insights & Editorial Guides | GrowByMasters",
    description:
      "Actionable digital growth frameworks, SEO playbooks, Google Ads strategies, and website conversion analyses for ambitious business leaders.",
    url: "https://growbymasters.com/insights",
    siteName: "GrowByMasters",
    images: [{ url: "/images/hero-globe.jpg", width: 1200, height: 630, alt: "GrowByMasters Growth Insights" }],
  },
};

const articles = [
  {
    slug: "local-seo-home-services",
    category: "SEO",
    title: "How Local SEO Helps Home Service Businesses Get More Leads",
    summary:
      "A strategic breakdown of Google Map Pack optimization, local citations, service area landing pages, and automated customer review generation.",
    date: "Oct 10, 2026",
    readTime: "5 min read",
    image: "/images/insights/local-seo.jpg",
    author: "Growth Strategy Team",
  },
  {
    slug: "google-ads-vs-seo",
    category: "Google Ads",
    title: "Google Ads vs SEO: Which is Better for Your Business Growth?",
    summary:
      "When to deploy immediate intent PPC campaigns versus compounding organic search visibility for optimal cash flow and customer acquisition costs.",
    date: "Oct 8, 2026",
    readTime: "6 min read",
    image: "/images/insights/google-ads.jpg",
    author: "Paid Search Architect",
  },
  {
    slug: "website-conversion-mistakes",
    category: "Website",
    title: "10 Website UX Mistakes That Are Silently Costing You Qualified Leads",
    summary:
      "Common friction points in mobile navigation, ambiguous value propositions, bloated form fields, and sluggish page speeds that drive buyers away.",
    date: "Oct 5, 2026",
    readTime: "5 min read",
    image: "/images/insights/website-mistakes.jpg",
    author: "Conversion Optimization Specialist",
  },
];

export default function InsightsPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-[#101A24] text-white pt-16 pb-20 border-b border-[#1C2B3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182736] border border-[#2A3E54] text-[#D8B477] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Executive Growth Briefs</span>
          </div>
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white mb-6">
            Latest Insights & Strategies
          </h1>
          <p className="text-base sm:text-lg text-[#A6B2BD] leading-relaxed mb-8">
            Tactical analysis, empirical benchmarks, and conversion frameworks
            written for founders and growth leaders.
          </p>
        </div>
      </section>

      {/* Articles Grid (Warm Ivory) */}
      <section className="bg-[#F7F5F0] py-20 border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art) => (
              <article
                key={art.slug}
                className="bg-white rounded-2xl overflow-hidden border border-[#EAE6DC] hover:border-[#D8B477] transition-all shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E4DA]">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute top-3 left-3 bg-[#101A24]/90 text-[#D8B477] text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                      {art.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-[#8C959D]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {art.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {art.readTime}
                      </span>
                    </div>

                    <h2 className="font-serif-heading text-xl sm:text-2xl text-[#1D2732] font-normal leading-snug group-hover:text-[#A48145] transition-colors">
                      <Link href={`/insights/${art.slug}`}>{art.title}</Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-[#626B73] leading-relaxed line-clamp-3">
                      {art.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 border-t border-[#F0ECE2]">
                  <Link
                    href={`/insights/${art.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D2732] group-hover:text-[#A48145] transition-colors pt-4"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Free Audit Box */}
      <section className="bg-[#101A24] py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif-heading text-3xl sm:text-4xl text-white font-normal">
            Need a Specific Analysis of Your Website?
          </h2>
          <p className="text-[#A6B2BD] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Our senior strategists perform objective technical audits identifying
            keyword gaps, ad waste, and conversion leaks.
          </p>
          <Link
            href="/#growth-audit"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D8B477] hover:bg-[#C9A466] text-[#101A24] font-semibold text-sm transition-all shadow-xl shadow-[#D8B477]/15"
          >
            <span>Request Free Growth Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
