import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  CheckCircle2,
  Share2,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import GrowthAuditForm from "@/components/GrowthAuditForm";

const articlesData: Record<
  string,
  {
    category: string;
    title: string;
    date: string;
    readTime: string;
    image: string;
    author: string;
    intro: string;
    keyTakeaways: string[];
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
  }
> = {
  "local-seo-home-services": {
    category: "Local SEO",
    title: "How Local SEO Helps Home Service Businesses Get More Leads",
    date: "October 10, 2026",
    readTime: "5 min read",
    image: "/images/insights/local-seo.jpg",
    author: "Senior Growth Strategist",
    intro:
      "When a homeowner's air conditioner breaks in the middle of summer or a pipe bursts at midnight, they do not browse page three of Google. They search on their phone, look at the top 3 businesses on the Google Map Pack, inspect their star ratings, and call immediately. If your home service company is not positioned in that Local 3-Pack, your business is invisible to 70% of ready-to-buy local prospects.",
    keyTakeaways: [
      "The Google 3-Pack captures over 68% of local mobile search clicks.",
      "NAP consistency across 40+ primary local citations directly impacts proximity ranking.",
      "Review velocity and review keyword mentions are critical algorithmic ranking factors.",
      "Dedicated suburb landing pages outrank flat generic service pages in nearby cities.",
    ],
    sections: [
      {
        heading: "1. The Geometry of the Google Map 3-Pack",
        paragraphs: [
          "Google evaluates local search ranking based on three core pillars: Relevance, Distance, and Prominence. While you cannot physically change your business location, you can dramatically elevate your Prominence and Relevance signals.",
          "Ensuring your primary Google Business Profile category accurately matches what homeowners type (e.g. 'HVAC Contractor' vs 'Air Conditioning Repair Service') is often the single fastest lever for ranking lift.",
        ],
      },
      {
        heading: "2. The Compounding Power of Review Velocity",
        paragraphs: [
          "It is not merely your total number of reviews that counts—Google's Natural Language Processing algorithms favor businesses that receive consistent reviews with specific service terms mentioned (e.g. 'installed new furnace', 'fixed emergency leak').",
          "Automating an SMS follow-up sequence that triggers 2 hours after a technician completes a dispatch ticket increases review collection by over 300%.",
        ],
      },
      {
        heading: "3. Local Landing Pages That Convert Calls",
        paragraphs: [
          "Do not build thin doorway pages. Google penalizes low-value spam. Instead, build comprehensive localized service area hubs featuring real photos of your trucks in that community, local customer testimonials, driving directions, and localized LocalBusiness schema.",
          "Every mobile page must have a sticky click-to-call banner at the top so an urgent caller can tap and speak with your dispatcher in 2 seconds.",
        ],
      },
    ],
  },
  "google-ads-vs-seo": {
    category: "Paid Search & SEO",
    title: "Google Ads vs SEO: Which is Better for Your Business Growth?",
    date: "October 8, 2026",
    readTime: "6 min read",
    image: "/images/insights/google-ads.jpg",
    author: "Paid Search Architect",
    intro:
      "Business owners frequently pit Google Ads against SEO as an either/or dilemma. In reality, treating them as competing strategies is the most expensive mistake a growth-minded company can make. High-performing growth engines use Google Ads for immediate cash flow and intent validation, while building SEO for compounding, zero-marginal-cost customer acquisition over time.",
    keyTakeaways: [
      "Google Ads provides immediate traffic and tests which keywords actually convert to paying customers.",
      "SEO builds compounding enterprise equity and lowers blended Customer Acquisition Cost (CAC).",
      "Using search query data from Google Ads directly informs high-converting SEO content roadmaps.",
      "The strongest businesses maintain a 40/60 blended split between paid and organic pipeline.",
    ],
    sections: [
      {
        heading: "1. The Speed vs Compounding Trade-off",
        paragraphs: [
          "Google Ads is a faucet: turn it on today, and qualified prospective clients will land on your website this afternoon. However, the minute you stop paying Google, your traffic drops to zero.",
          "SEO is a flywheel: it requires upfront strategic investment and technical patience. But once your core commercial keywords rank in the top spots, you receive free qualified inquiries month after month.",
        ],
      },
      {
        heading: "2. Testing Conversion Before Investing in Heavy SEO",
        paragraphs: [
          "Before spending 6 months optimizing for a specific high-volume keyword cluster, smart businesses run exact-match Google Ads on those queries for 30 days. This proves whether visitors searching those terms actually buy your service.",
          "This data-driven feedback loop prevents companies from ranking #1 for vanity terms that never convert into revenue.",
        ],
      },
      {
        heading: "3. The Unified Growth Equation",
        paragraphs: [
          "When you dominate both the top sponsored search result and the #1 organic search listing on Google, your brand claims over 50% of page real estate. Prospective buyers perceive you as the undisputed market leader.",
          "At GrowByMasters, we engineer Google Ads and SEO to reinforce each other, sharing keyword intelligence, negative lists, and conversion event modeling.",
        ],
      },
    ],
  },
  "website-conversion-mistakes": {
    category: "Website CRO",
    title: "10 Website UX Mistakes That Are Silently Costing You Qualified Leads",
    date: "October 5, 2026",
    readTime: "5 min read",
    image: "/images/insights/website-mistakes.jpg",
    author: "Conversion Specialist",
    intro:
      "You can run the best Google Ads campaigns in your industry and rank #1 across Google for every major search query, but if your website repels prospective clients the moment they arrive, your marketing budget is evaporating. Most business websites lose qualified inquiries due to subtle psychological friction, slow mobile rendering, and ambiguous calls-to-action.",
    keyTakeaways: [
      "A 1-second delay in page load time reduces mobile conversion rates by 7%.",
      "Generic CTAs like 'Submit' perform 32% worse than benefit-driven action buttons.",
      "Cognitive overload: having more than two primary actions confuses buyers.",
      "Hiding direct contact options behind multiple navigation clicks causes instant bounce.",
    ],
    sections: [
      {
        heading: "1. Vague Hero Value Propositions",
        paragraphs: [
          "When a visitor lands on your homepage, they should understand within 5 seconds: What do you do? Who do you do it for? And how do they take the next step?",
          "Too many websites use poetic, abstract slogans ('Empowering Tomorrow's Synergy') rather than concrete clarity ('We Build Digital Growth Systems for Ambitious Businesses').",
        ],
      },
      {
        heading: "2. The Desktop-Only Blindspot",
        paragraphs: [
          "Founders and executives review their website drafts on 27-inch desktop monitors in their offices. Meanwhile, over 70% of actual prospective clients view the site from an iPhone or Android device on a cellular connection.",
          "If buttons are too small to tap, text wraps awkwardly, or sticky menus cover half the screen, your conversion rate collapses.",
        ],
      },
      {
        heading: "3. Intimidating Contact Forms",
        paragraphs: [
          "Asking for unnecessary information upfront—such as full physical addresses, fax numbers, or forced credit cards—creates friction.",
          "Switching from a 9-field static form to an interactive 3-step qualification funnel regularly increases lead completion rates by over 40%.",
        ],
      },
    ],
  },
};

export function generateStaticParams() {
  return [
    { slug: "local-seo-home-services" },
    { slug: "google-ads-vs-seo" },
    { slug: "website-conversion-mistakes" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData[slug];
  if (!article) return { title: "Article Not Found | GrowByMasters" };

  return {
    title: `${article.title} — GrowByMasters Insights`,
    description: article.intro.slice(0, 160),
    alternates: {
      canonical: `/insights/${slug}`,
    },
    openGraph: {
      title: `${article.title} | GrowByMasters`,
      description: article.intro.slice(0, 160),
      url: `https://growbymasters.com/insights/${slug}`,
      siteName: "GrowByMasters",
      type: "article",
      images: [{ url: article.image, width: 1200, height: 630, alt: article.title }],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articlesData[slug];

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.intro,
    image: `https://growbymasters.com${article.image}`,
    datePublished: "2026-10-10",
    author: {
      "@type": "Organization",
      name: "GrowByMasters",
      url: "https://growbymasters.com",
    },
    publisher: {
      "@type": "Organization",
      name: "GrowByMasters",
      url: "https://growbymasters.com",
      logo: {
        "@type": "ImageObject",
        url: "https://growbymasters.com/images/hero-globe.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://growbymasters.com/insights/${slug}`,
    },
  };

  return (
    <article className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Article Header (Dark Navy) */}
      <section className="bg-[#101A24] text-white pt-12 pb-20 border-b border-[#1C2B3A] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#8C959D] mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/insights" className="hover:text-white transition-colors">
              Insights
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#D8B477] font-medium">{article.category}</span>
          </nav>

          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-[#182736] border border-[#2A3E54] text-[#D8B477] text-xs font-semibold rounded-full uppercase tracking-wider">
              {article.category}
            </div>

            <h1 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-xs text-[#8C959D] pt-2">
              <span className="text-white font-medium">By {article.author}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content (Warm Ivory) */}
      <section className="bg-[#F7F5F0] py-16 border-b border-[#E8E4DA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#EAE6DC] shadow-md">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </div>

          {/* Key Takeaways Card */}
          <div className="bg-[#FAF9F6] border-2 border-[#D8B477]/40 rounded-2xl p-7 sm:p-8 space-y-4 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-[#A48145] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#A48145]" />
              <span>Key Executive Takeaways</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#1D2732]">
              {article.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#237A72] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Prose */}
          <div className="space-y-8 text-base text-[#1D2732] leading-relaxed">
            <p className="text-lg text-[#1D2732] font-medium leading-relaxed border-l-4 border-[#D8B477] pl-5">
              {article.intro}
            </p>

            {article.sections.map((section, idx) => (
              <div key={idx} className="space-y-4 pt-4">
                <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#1D2732] font-normal">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-[#626B73]">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Back link */}
          <div className="pt-8 border-t border-[#EAE6DC] flex items-center justify-between">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D2732] hover:text-[#A48145] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Insights</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Embedded Audit Form Anchor */}
      <section className="bg-[#101A24] py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GrowthAuditForm
            title="Put These Frameworks to Work on Your Business"
            subtitle="Get an objective audit of your website and digital visibility from our senior strategists."
          />
        </div>
      </section>
    </article>
  );
}
