import type { Metadata } from "next";
import { PenTool, BookOpen, Share2, Award } from "lucide-react";
import ServicePageTemplate, { ServicePageProps } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Content Marketing & Editorial Strategy — GrowByMasters",
  description:
    "Build undeniable authority and capture qualified buyer search volume with strategic B2B content marketing and editorial systems.",
  alternates: {
    canonical: "/services/content-marketing",
  },
  openGraph: {
    title: "Content Marketing & Editorial Strategy | GrowByMasters",
    description:
      "Build undeniable authority and capture qualified buyer search volume with strategic B2B content marketing and editorial systems.",
    url: "https://growbymasters.com/services/content-marketing",
    siteName: "GrowByMasters",
    images: [{ url: "/images/hero-globe.jpg", width: 1200, height: 630, alt: "Content Marketing and Editorial Strategy" }],
  },
};

const contentMktgData: ServicePageProps = {
  slug: "content-marketing",
  badge: "Strategic Editorial & Thought Authority",
  title: "Content Marketing",
  subtitle:
    "Move beyond generic AI-generated blog posts. We build strategic editorial assets, industry guides, and commercial frameworks that educate prospective buyers and establish permanent market authority.",
  deliverablesSummary: [
    "Comprehensive B2B Buyer Persona & Pain Point Research",
    "Commercial Intent Topic Silos & Editorial Calendars",
    "Expert-Level Long-Form Guides, Comparisons & Case Studies",
    "Multi-Channel Content Atomization (LinkedIn, Newsletter, Search)",
    "Conversion Anchors Embedded to Drive Inbound Consultations",
  ],
  overview: {
    heading: "Content That Establishes Real Trust and Drives Commercial Inquiries.",
    description: [
      "The internet is flooded with shallow, generic content that answers no real questions and converts zero clients. Modern buyers are sophisticated: they want deep answers, transparent comparisons, and concrete frameworks before making a purchasing decision.",
      "GrowByMasters treats content marketing as a direct extension of your sales process. We interview subject matter experts, analyze the exact questions prospects ask on sales calls, and craft high-caliber editorial assets that build deep conviction.",
    ],
  },
  pillars: [
    {
      icon: BookOpen,
      title: "Commercial Topic Silos",
      description:
        "Developing clustered content architectures designed to capture buyers at every stage of their consideration cycle.",
      bullets: [
        "Problem-aware content answering urgent operational symptoms",
        "Solution-aware content evaluating competing approaches",
        "Product/Provider-aware content (Comparisons, Alternatives, Reviews)",
        "Internal contextual links channeling readers toward consultation",
      ],
    },
    {
      icon: PenTool,
      title: "Expert Editorial Production",
      description:
        "Crafting nuanced, authoritative prose written with industry vocabulary, concrete data, and practical diagrams.",
      bullets: [
        "In-depth research and original perspective development",
        "Clear, engaging formatting with pull-quotes, tables, and charts",
        "Zero fluff, buzzword-free, clear actionable advice",
        "E-E-A-T optimization matching Google's quality standards",
      ],
    },
    {
      icon: Share2,
      title: "Content Distribution & Repurposing",
      description:
        "Ensuring every piece of content reaches target decision-makers across multiple touchpoints without wasted effort.",
      bullets: [
        "Executive LinkedIn thought leadership post adaptation",
        "Email newsletter editorial highlights to nurture existing subscriber lists",
        "Slide deck summaries and downloadable PDF lead magnets",
        "Community and digital PR outreach to niche industry hubs",
      ],
    },
    {
      icon: Award,
      title: "Conversion Anchoring",
      description:
        "Strategically embedding relevant offers, calculators, and free audit calls-to-action within every article.",
      bullets: [
        "Contextual in-content callout boxes matching article topic",
        "Sticky sidebar audit request summaries",
        "Exit-intent resource downloads for departing readers",
        "Scroll-depth tracking measuring real reader engagement",
      ],
    },
  ],
  process: [
    {
      step: "01",
      title: "Audience Inquiry Audit",
      detail:
        "Reviewing your customer feedback, sales call transcripts, and support inquiries to uncover core buyer questions.",
    },
    {
      step: "02",
      title: "Content Roadmap",
      detail:
        "Structuring a 90-day editorial calendar prioritized by search volume, commercial intent, and competitor gaps.",
    },
    {
      step: "03",
      title: "Production & Polish",
      detail:
        "Drafting, editing, designing custom graphics, and publishing high-authority editorial pieces with structured schema.",
    },
    {
      step: "04",
      title: "Distribution & Refresh",
      detail:
        "Distributing across channels and periodically updating evergreen guides to maintain top search rankings over years.",
    },
  ],
  idealFor: [
    "B2B Consultancies & Advisory Firms",
    "Complex Technology & SaaS Vendors",
    "Specialized Contractors with High Average Deal Sizes",
    "Private Healthcare Practices Building Clinical Authority",
    "E-commerce Brands Wanting Organic Traffic Compounding",
  ],
  relatedServices: [
    {
      title: "SEO & Organic Search",
      href: "/services/seo",
      description:
        "Ensure your strategic content ranks prominently for high-volume commercial keywords.",
    },
    {
      title: "Lead Generation Systems",
      href: "/services/lead-generation",
      description:
        "Convert engaged article readers into pre-qualified sales calls.",
    },
    {
      title: "Website Optimization",
      href: "/services/website-optimization",
      description:
        "Provide a clean, fast editorial reading experience with elegant typography.",
    },
  ],
};

export default function ContentMarketingPage() {
  return <ServicePageTemplate data={contentMktgData} />;
}
