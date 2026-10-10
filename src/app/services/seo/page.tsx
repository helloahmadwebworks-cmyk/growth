import type { Metadata } from "next";
import { Search, Globe, Code2, LineChart } from "lucide-react";
import ServicePageTemplate, { ServicePageProps } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "SEO & Organic Search Systems — Dominate Competitive Markets",
  description:
    "Grow organic search pipeline with technical SEO audits, semantic topical authority, content clusters, and high-impact digital PR.",
  alternates: {
    canonical: "/services/seo",
  },
  openGraph: {
    title: "SEO & Organic Search Systems | GrowByMasters",
    description:
      "Grow organic search pipeline with technical SEO audits, semantic topical authority, content clusters, and high-impact digital PR.",
    url: "https://growbymasters.com/services/seo",
    siteName: "GrowByMasters",
    images: [{ url: "/images/hero-globe.jpg", width: 1200, height: 630, alt: "SEO and Organic Search Systems" }],
  },
};

const seoData: ServicePageProps = {
  slug: "seo",
  badge: "Organic Search Dominance",
  title: "SEO & Organic Search",
  subtitle:
    "Turn Google into a predictable client acquisition channel. We build technical authority, semantic keyword frameworks, and editorial assets that capture high-intent buyers.",
  deliverablesSummary: [
    "Technical Core Web Vitals & Indexation Engineering",
    "Commercial Intent Keyword Architecture",
    "Topical Authority Clusters & Semantic Siloing",
    "High-Authority Backlink & Digital PR Outreach",
    "Continuous Algorithmic Immunity Monitoring",
  ],
  overview: {
    heading: "Search Engine Optimization Built on Revenue, Not Vanity Rankings.",
    description: [
      "Most SEO agencies report on impression spikes and irrelevant keywords that never convert into customer inquiries. At GrowByMasters, our approach starts at the bottom of the funnel: identifying the exact queries prospects search when they have buying intent.",
      "We reverse-engineer search engines using strict semantic entity architecture, structured JSON-LD schemas, and fast server responses that outclass legacy competitors in both local and international markets.",
    ],
  },
  pillars: [
    {
      icon: Code2,
      title: "Technical SEO & Speed Architecture",
      description:
        "Ensuring search engine crawlers understand and index your site without friction, crawl-budget waste, or speed bottlenecks.",
      bullets: [
        "100/100 Core Web Vitals (LCP, INP, CLS) optimization",
        "Custom Schema.org Organization and Product graphs",
        "Clean canonical tags and canonical redirect loops elimination",
        "Mobile-first rendering and hydration efficiency",
      ],
    },
    {
      icon: Search,
      title: "Semantic Keyword Mapping",
      description:
        "Mapping high-intent queries to purpose-built landing pages designed to rank and immediately convert.",
      bullets: [
        "Intent classification (Informational vs Commercial vs Transactional)",
        "Competitor gap and missed opportunity analysis",
        "Long-tail query capture with low difficulty and high buyer readiness",
        "Zero-click search defense and featured snippet optimization",
      ],
    },
    {
      icon: Globe,
      title: "Topical Authority Silos",
      description:
        "Structuring content hubs that demonstrate undeniable domain expertise to Google's helpful content algorithms.",
      bullets: [
        "Pillar and cluster content topology",
        "Internal contextual link equity passing",
        "E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) proofing",
        "Continuous content refreshing and decay mitigation",
      ],
    },
    {
      icon: LineChart,
      title: "Ethical Authority Acquisition",
      description:
        "Building genuine brand mentions, digital PR, and contextual backlinks from respected industry publications.",
      bullets: [
        "Editorial press pitches and expert commentary",
        "Resource page and statistical study link building",
        "Unlinked brand mention reclaiming",
        "Strict rejection of spammy PBNs and link networks",
      ],
    },
  ],
  process: [
    {
      step: "01",
      title: "Technical Audit",
      detail:
        "Deep crawl of your domain to uncover hidden indexation blockers, schema omissions, and mobile speed issues.",
    },
    {
      step: "02",
      title: "Entity Blueprint",
      detail:
        "Mapping your primary service offerings against high-value commercial keywords and competitor gaps.",
    },
    {
      step: "03",
      title: "On-Page Execution",
      detail:
        "Rewriting meta titles, heading structures, internal links, and content copy to maximize search relevance.",
    },
    {
      step: "04",
      title: "Authority & Compounding",
      detail:
        "Distributing high-value assets to earn verified citations, tracking rankings, and scaling monthly organic traffic.",
    },
  ],
  idealFor: [
    "B2B Companies",
    "Professional Service Firms",
    "E-commerce Brands",
    "Home Service Contractors",
    "Multi-location Businesses",
  ],
  relatedServices: [
    {
      title: "Local SEO & Google Maps",
      href: "/services/local-seo",
      description:
        "Dominate local map pack rankings for geographically targeted customer inquiries.",
    },
    {
      title: "Website Optimization",
      href: "/services/website-optimization",
      description:
        "Convert newly acquired organic search traffic into qualified phone calls and form submissions.",
    },
    {
      title: "Analytics & Tracking",
      href: "/services/analytics-tracking",
      description:
        "Attribute revenue directly to specific organic landing pages and search queries.",
    },
  ],
};

export default function SeoPage() {
  return <ServicePageTemplate data={seoData} />;
}
