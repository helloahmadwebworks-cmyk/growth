import type { Metadata } from "next";
import {
  Palette,
  Layout,
  FileText,
  Presentation,
} from "lucide-react";
import ServicePageTemplate, { ServicePageProps } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Graphic Design Services — Commercial Collateral, Creatives & Decks",
  description:
    "Elevate brand credibility and ad performance with bespoke commercial graphic design: paid ad creatives, social graphics, corporate brochures, and executive sales presentations.",
  alternates: {
    canonical: "/services/graphic-design",
  },
  openGraph: {
    title: "Graphic Design Services — Commercial Visual Design | GrowByMasters",
    description:
      "Elevate brand credibility and ad performance with bespoke commercial graphic design: paid ad creatives, social graphics, corporate brochures, and executive sales presentations.",
    url: "https://growbymasters.com/services/graphic-design",
    siteName: "GrowByMasters",
    images: [
      {
        url: "/images/hero-globe.jpg",
        width: 1200,
        height: 630,
        alt: "GrowByMasters Graphic Design Services",
      },
    ],
  },
};

const graphicDesignData: ServicePageProps = {
  slug: "graphic-design",
  badge: "Commercial Visual Design",
  title: "Graphic Design",
  subtitle:
    "High-impact visual communication engineered for conversion. We craft advertising creatives, corporate collateral, sales presentations, and marketing assets that reinforce commercial trust.",
  deliverablesSummary: [
    "High-CTR Paid Ad Creatives (Meta, Google Display, LinkedIn)",
    "Organic Social Media Posts, Infographics & Carousel Decks",
    "Corporate Collateral (Brochures, One-Sheets, Case Summaries)",
    "Executive Investor & Sales Pitch Presentations (Keynote/PowerPoint)",
    "Vector Brand Asset Kits with Standardized Production Exports",
  ],
  overview: {
    heading: "Design Grounded in Business Clarity, Not Superficial Decoration.",
    description: [
      "In commercial transactions, visual presentation communicates institutional maturity. Cluttered layouts, mismatched typography, and low-resolution templates signal risk to prospective buyers. Our graphic design services provide your sales and marketing teams with a cohesive visual toolkit that commands respect.",
      "We design across key commercial touchpoints: advertising creatives that stop the scroll, pitch decks that articulate complex proposals, and corporate brochures that sales reps can hand to enterprise decision-makers. All source files and production assets are fully organized and owned by your business.",
    ],
  },
  pillars: [
    {
      icon: Palette,
      title: "Paid Advertising Creatives",
      description:
        "High-contrast, benefit-led static and carousel ad visuals engineered to stop the feed and drive qualified click-through rates.",
      bullets: [
        "Tested visual hook frameworks (problem-solution callouts, side-by-side comparisons)",
        "Standardized multi-format adaptations (1:1 feed, 9:16 vertical stories, 1.91:1 display)",
        "Clear typographic hierarchies ensuring legibility on mobile screens",
        "Strict compliance with platform advertising design and text guidelines",
      ],
    },
    {
      icon: FileText,
      title: "Corporate Collateral & Print-Ready Assets",
      description:
        "Professional marketing literature structured to support commercial sales cycles, trade shows, and client onboarding.",
      bullets: [
        "Multi-page corporate brochures and annual service capability guides",
        "Executive one-sheeters, rate cards, and technical service spec sheets",
        "Print-ready PDFs with verified bleed, trim margins, and CMYK color profiles",
        "Digital PDF interactive versions with embedded clickable contact links",
      ],
    },
    {
      icon: Presentation,
      title: "Sales Enablement & Pitch Presentations",
      description:
        "Custom presentation decks tailored to persuade enterprise buyers, board members, and prospective investment partners.",
      bullets: [
        "Clean slide layouts in 16:9 widescreen format for PowerPoint, Keynote, or Google Slides",
        "Custom vector diagrams, process infographics, and structured data tables",
        "Consistent typographic hierarchy that prevents dense visual fatigue",
        "Master slide template systems your internal team can easily reuse",
      ],
    },
    {
      icon: Layout,
      title: "Digital Marketing & Brand Assets",
      description:
        "Ongoing visual assets supporting weekly organic publishing, website feature callouts, and marketing campaigns.",
      bullets: [
        "Multi-slide carousel templates and infographics for LinkedIn and Instagram",
        "Web banner graphics, hero imagery assets, and newsletter headers",
        "Vector iconography libraries tailored to your company's design tokens",
        "Exported in modern web-optimized formats (SVG, WebP, high-res PNG)",
      ],
    },
  ],
  process: [
    {
      step: "01",
      title: "Briefing & Assets",
      detail:
        "You submit the project brief, copy drafts, dimensions, and reference examples through our standardized project intake board.",
    },
    {
      step: "02",
      title: "Design Staging",
      detail:
        "Our designers produce the initial concepts in Figma, adhering strictly to your approved brand guidelines and typographic hierarchy.",
    },
    {
      step: "03",
      title: "Refinement",
      detail:
        "You review the proofs and leave pin-point feedback. We refine layouts, color balance, and typography until approved.",
    },
    {
      step: "04",
      title: "Final Package",
      detail:
        "We package print-ready files, web-optimized exports, and organized vector master files for your permanent internal archive.",
    },
  ],
  idealFor: [
    "Growth-Stage B2B Companies",
    "Professional Advisory & Law Firms",
    "E-commerce Brands Needing Ad Variety",
    "Specialty Trade & Home Services",
    "Tech & Software Providers",
  ],
  sampleConcepts: [
    {
      category: "Ad Creative Suite",
      title: "Multi-Angle Paid Ad Creative Matrix",
      description:
        "A representative 9-asset testing package featuring 3 distinct visual angles (Feature Focus, Testimonial Proof, Direct Comparison) rendered in 1:1 and 9:16 mobile formats.",
      deliverables: [
        "3 Primary headline and value hook layout directions",
        "Figma master components with swappable product imagery",
        "Optimized WebP exports with zero compression distortion",
      ],
    },
    {
      category: "Corporate Collateral",
      title: "Executive Capability Brochure",
      description:
        "An 8-page editorial corporate brochure illustrating company history, core service frameworks, delivery methodology, and leadership bios.",
      deliverables: [
        "Editorial grid layout based on 12-column typographical scale",
        "Interactive digital PDF with clickable email and phone links",
        "Print-ready 300 DPI CMYK file with 3mm bleed margins",
      ],
    },
    {
      category: "Sales Enablement",
      title: "15-Slide Enterprise Pitch Deck",
      description:
        "A modular presentation deck engineered to walk prospective clients through problem diagnosis, methodology, and scope options.",
      deliverables: [
        "Standardized master slide template in PowerPoint and Keynote",
        "12 bespoke vector diagrams explaining service processes",
        "Editable financial table and case study summary slides",
      ],
    },
  ],
  faqs: [
    {
      question: "What types of graphic design work are included in this service?",
      answer:
        "Our scope covers business design work: paid ad creatives (for Meta, Google, LinkedIn), organic social posts, educational carousels, corporate brochures, service one-pagers, presentation decks (PowerPoint/Keynote), website banners, and vector brand assets.",
    },
    {
      question: "Do you provide video production, 3D animation, or motion graphics?",
      answer:
        "No. We specialize exclusively in static 2D graphic design, vector illustration, presentation layout, and print collateral. We deliberately avoid claiming video production or complex 3D rendering so we can maintain exceptional quality across our core design disciplines.",
    },
    {
      question: "Do we receive the original source files for our designs?",
      answer:
        "Yes, absolutely. Upon completion, you receive organized Figma files, print-ready PDF files with fonts outlined, and web-ready vector SVGs and WebP exports. Your company owns 100% of the completed design assets.",
    },
    {
      question: "What is your typical turnaround time for graphic design requests?",
      answer:
        "Standard ad creative batches and social graphics typically turn around within 2 to 3 business days. More extensive projects such as multi-page corporate brochures or complete presentation decks generally take 5 to 7 business days depending on page count.",
    },
    {
      question: "How do you ensure designs stay consistent with our existing brand guidelines?",
      answer:
        "Before beginning any design work, we ingest your existing brand style guide, color hex codes, typographic rules, and approved logos into our Figma design system. Every asset undergoes senior creative review to ensure exact alignment.",
    },
  ],
  relatedServices: [
    {
      title: "Branding & Visual Identity",
      href: "/services/branding",
      description:
        "Establish comprehensive brand standards, logo architectures, typographic systems, and color palettes from the ground up.",
    },
    {
      title: "Meta Ads Management",
      href: "/services/meta-ads",
      description:
        "Deploy your bespoke ad creatives into systematically managed, ROAS-driven paid acquisition campaigns.",
    },
    {
      title: "Website Design & Development",
      href: "/services/web-design-development",
      description:
        "Translate your visual design system into lightning-fast, conversion-engineered Next.js web applications.",
    },
  ],
};

export default function GraphicDesignPage() {
  return <ServicePageTemplate data={graphicDesignData} />;
}
