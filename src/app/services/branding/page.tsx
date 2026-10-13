import type { Metadata } from "next";
import {
  Sparkles,
  Layers,
  Compass,
  FileCheck,
} from "lucide-react";
import ServicePageTemplate, { ServicePageProps } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Branding & Visual Identity Systems — Commercial Positioning & Design",
  description:
    "Build an unmistakable market presence with comprehensive brand identity design: core positioning, logo architectures, typographic systems, color palettes, and brand guidelines.",
  alternates: {
    canonical: "/services/branding",
  },
  openGraph: {
    title: "Branding & Visual Identity Systems | GrowByMasters",
    description:
      "Build an unmistakable market presence with comprehensive brand identity design: core positioning, logo architectures, typographic systems, color palettes, and brand guidelines.",
    url: "https://growbymasters.com/services/branding",
    siteName: "GrowByMasters",
    images: [
      {
        url: "/images/hero-globe.jpg",
        width: 1200,
        height: 630,
        alt: "GrowByMasters Branding & Visual Identity Services",
      },
    ],
  },
};

const brandingData: ServicePageProps = {
  slug: "branding",
  badge: "Identity & Positioning",
  title: "Branding & Visual Identity",
  subtitle:
    "Command authority and justify premium pricing. We build cohesive brand identity systems that articulate your commercial differentiation across every customer touchpoint.",
  deliverablesSummary: [
    "Core Brand Positioning Architecture & Value Proposition Statements",
    "Primary Logo, Secondary Wordmarks & Responsive Iconography Systems",
    "Tailored Color Palette Systems (Digital Hex/RGB, Print CMYK, Accessible Contrast)",
    "Typographic Hierarchies & Commercial Font Licensing Guidelines",
    "Comprehensive Brand Identity Guidelines & Usage Governance Manual",
  ],
  overview: {
    heading: "Visual Identity Designed to Communicate Institutional Credibility.",
    description: [
      "Ambitious businesses often outgrow their original visual presentation. When a company's visual identity feels dated or disjointed, prospects instinctively discount their capabilities or push back on premium pricing. A disciplined brand identity communicates scale, reliability, and precision before a single sales conversation begins.",
      "GrowByMasters approaches branding as a commercial operating system rather than an abstract artistic exercise. We align your visual language with how enterprise buyers evaluate trust: consistent typographic discipline, balanced contrast, cohesive digital stationery, and strict usage guidelines that your internal team can actually enforce.",
    ],
  },
  pillars: [
    {
      icon: Compass,
      title: "Strategic Positioning & Brand Architecture",
      description:
        "Defining the foundational commercial pillars, competitive differentiation, and value proposition framing that guide the visual identity.",
      bullets: [
        "Competitive visual audit analyzing peer branding across target markets",
        "Target buyer persona alignment and premium market positioning",
        "Brand tone of voice principles and core messaging pillars",
        "Commercial naming architecture and service taxonomy structuring",
      ],
    },
    {
      icon: Sparkles,
      title: "Logo Systems & Scalable Iconography",
      description:
        "Developing scalable vector logo systems built to perform effortlessly across digital screens, signage, and print collateral.",
      bullets: [
        "Primary brand mark and secondary horizontal wordmark configurations",
        "Responsive icon variations engineered for mobile favicons and app icons",
        "Light mode, dark mode, and single-color monochrome vector exports",
        "Strict clear-space rules and minimum reproduction size specifications",
      ],
    },
    {
      icon: Layers,
      title: "Color Architecture & Typography Systems",
      description:
        "Engineered color palettes and typographic pairings that ensure WCAG accessibility compliance and unforgettable brand recognition.",
      bullets: [
        "Primary, secondary, and functional UI accent color palettes",
        "Digital (sRGB, Hex) and commercial print (CMYK, Pantone matching) color specs",
        "Curated font pairings (Display Serif/Modern Sans) with precise line-height rules",
        "Web font licensing recommendations and fallback font stacks",
      ],
    },
    {
      icon: FileCheck,
      title: "Brand Guidelines & Asset Governance",
      description:
        "A comprehensive brand manual giving your team, vendors, and partners unambiguous rules for presenting the brand correctly.",
      bullets: [
        "Comprehensive 30+ page digital Brand Style Guide (PDF and interactive Figma)",
        "Permitted vs. prohibited logo treatments and misuse warnings",
        "Digital stationery templates, email signature kits, and slide deck themes",
        "Standardized vector asset library organized in SVG, EPS, and high-res PNG",
      ],
    },
  ],
  process: [
    {
      step: "01",
      title: "Discovery & Audit",
      detail:
        "We dissect your target buyer expectations, current visual liabilities, and peer positioning to define your strategic creative brief.",
    },
    {
      step: "02",
      title: "Concept Directions",
      detail:
        "We develop distinct creative visual directions exploring logo marks, typographic treatments, color palettes, and real-world mockups.",
    },
    {
      step: "03",
      title: "System Expansion",
      detail:
        "Once the chosen concept is selected, we expand the visual language across collateral, slide decks, stationery, and digital interfaces.",
    },
    {
      step: "04",
      title: "Master Delivery",
      detail:
        "We package the complete brand identity manual, source Figma files, vector export libraries, and host a 60-minute handoff briefing for your team.",
    },
  ],
  idealFor: [
    "Established Firms Undergoing Corporate Rebranding",
    "Growing B2B Companies Repositioning for Enterprise Clients",
    "High-End Professional Service Practices",
    "Specialized Home Service Contractors Scaling Regional Operations",
    "New Ventures Seeking an Unmistakable Market Entry",
  ],
  sampleConcepts: [
    {
      category: "Brand Manual Standard",
      title: "Corporate Identity Standards Manual",
      description:
        "A representative 35-page brand governance manual detailing clear-space parameters, typographic scale, color formula conversions, and real-world touchpoint rules.",
      deliverables: [
        "Standardized logo placement grid and exclusion zone rules",
        "Accessible color contrast matrix meeting WCAG AA standards",
        "Digital stationery and corporate letterhead templates",
      ],
    },
    {
      category: "Responsive Logo Architecture",
      title: "Multi-Context Vector Logo Family",
      description:
        "A complete mark system engineered to scale from a 16px browser favicon up to large-scale building signage without loss of definition.",
      deliverables: [
        "Full horizontal wordmark and compact stacked lockup",
        "Simplified vector monogram icon for social avatars",
        "Negative dark-mode and monochrome print vector files",
      ],
    },
    {
      category: "Digital Stationery",
      title: "Corporate Communication Toolkit",
      description:
        "Standardized templates that ensure company emails, proposal documents, and sales invoices present a unified visual front.",
      deliverables: [
        "HTML email signature templates compatible with Outlook and Gmail",
        "Editable Google Docs / Word corporate letterhead template",
        "Digital business card format with integrated vCard QR code",
      ],
    },
  ],
  faqs: [
    {
      question: "What is the difference between Graphic Design and Branding?",
      answer:
        "Branding establishes your foundational visual identity rules: the logo mark, color formulas, typography pairings, brand voice, and master guidelines. Graphic Design applies those established branding rules to ongoing marketing assets like ad creatives, presentation decks, social graphics, and brochures.",
    },
    {
      question: "How long does a complete branding project take?",
      answer:
        "A comprehensive branding engagement typically takes 4 to 6 weeks from initial diagnostic discovery to final brand manual delivery. This allows sufficient time for thoughtful concept exploration, stakeholder feedback, and detailed collateral expansion.",
    },
    {
      question: "What file formats will we receive for our new brand assets?",
      answer:
        "You receive master vector source files (Figma, Adobe Illustrator EPS, SVG) as well as production-ready web and print formats (high-res transparent PNG, WebP, PDF). All assets are structured in an organized cloud archive for easy internal handoff.",
    },
    {
      question: "Do you help with corporate naming or trademark registration?",
      answer:
        "We assist with commercial name vetting and taglines from a positioning and domain-availability standpoint. However, formal legal trademark registration requires specialized intellectual property legal counsel, which we advise clients to engage directly.",
    },
    {
      question: "How does our new branding translate to our website and marketing campaigns?",
      answer:
        "Because GrowByMasters is an integrated growth agency, our web development and paid ads teams can directly implement your new brand system into high-performance Next.js websites and advertising campaigns without translation loss.",
    },
  ],
  relatedServices: [
    {
      title: "Graphic Design",
      href: "/services/graphic-design",
      description:
        "Produce day-to-day sales collateral, pitch presentations, and ad creatives strictly aligned with your new brand guidelines.",
    },
    {
      title: "Website Design & Development",
      href: "/services/web-design-development",
      description:
        "Bring your brand identity to life on a bespoke, sub-second Next.js web application built for commercial conversion.",
    },
    {
      title: "Social Media Marketing",
      href: "/services/social-media-marketing",
      description:
        "Establish an authoritative organic brand presence across social channels using your approved visual identity.",
    },
  ],
};

export default function BrandingPage() {
  return <ServicePageTemplate data={brandingData} />;
}
