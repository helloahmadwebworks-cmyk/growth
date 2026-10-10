import type { Metadata } from "next";
import { Globe, Zap, MousePointerClick, ShieldCheck } from "lucide-react";
import ServicePageTemplate, { ServicePageProps } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Website Optimization & Conversion Architecture — GrowByMasters",
  description:
    "Transform your website into an elite conversion engine. Sub-second load speeds, modern UI/UX design, CRO audits, and frictionless lead capture forms.",
  alternates: {
    canonical: "/services/website-optimization",
  },
  openGraph: {
    title: "Website Optimization & Conversion Architecture | GrowByMasters",
    description:
      "Transform your website into an elite conversion engine. Sub-second load speeds, modern UI/UX design, CRO audits, and frictionless lead capture forms.",
    url: "https://growbymasters.com/services/website-optimization",
    siteName: "GrowByMasters",
    images: [{ url: "/images/hero-globe.jpg", width: 1200, height: 630, alt: "Website Optimization and CRO" }],
  },
};

const websiteOptData: ServicePageProps = {
  slug: "website-optimization",
  badge: "Conversion Architecture & UX",
  title: "Website Optimization & CRO",
  subtitle:
    "Websites engineered to sell, not just look pretty. We transform sluggish, confusing sites into blazing-fast digital assets with high conversion rates.",
  deliverablesSummary: [
    "Sub-Second Page Load Speeds & 100/100 Core Web Vitals Compliance",
    "Conversion-Centric UX/UI Layouts with Editorial Typography",
    "Frictionless Multi-Step Lead Qualification Forms & Booking Calendars",
    "Heatmap Auditing, Click Tracking & User Drop-Off Analysis",
    "Mobile-First Responsive Layouts with Zero Horizontal Overflow",
  ],
  overview: {
    heading: "Traffic Without Conversion is Pure Capital Destruction.",
    description: [
      "Driving qualified visitors through SEO or Google Ads means nothing if your website loads in 5 seconds, confuses visitors on mobile devices, or buries your contact options behind clunky multi-page hurdles.",
      "GrowByMasters designs and optimizes modern websites with clean Next.js architectures, clear value propositions, deliberate visual hierarchy, and intuitive conversion paths. We eliminate friction so your visitors take immediate action.",
    ],
  },
  pillars: [
    {
      icon: Zap,
      title: "Core Web Vitals & Speed Engineering",
      description:
        "Every 1-second delay in page load drops conversion rate by 7%. We build lightweight web assets that load instantly across all devices.",
      bullets: [
        "Sub-second Largest Contentful Paint (LCP) performance",
        "Zero Cumulative Layout Shift (CLS) for stable reading experiences",
        "Optimized next-gen WebP/AVIF imagery and inline critical CSS",
        "Edge CDN distribution across global international networks",
      ],
    },
    {
      icon: MousePointerClick,
      title: "Conversion Rate Optimization (CRO)",
      description:
        "Systematic removal of cognitive overload, ambiguous headlines, and unnecessary form fields to guide visitors straight toward consultation.",
      bullets: [
        "Clear, prominent primary CTAs placed strategically after high-value proofs",
        "Trust badge positioning, verified customer reviews, and security stamps",
        "Visual hierarchy guiding eyes effortlessly from headline to action",
        "A/B split-testing of headline variations, button styles, and microcopy",
      ],
    },
    {
      icon: Globe,
      title: "Mobile-First User Experience",
      description:
        "Over 65% of your prospective buyers browse from smartphones. We engineer touch-friendly buttons, sticky headers, and easy tap-to-call mechanics.",
      bullets: [
        "Thumb-accessible navigation bars and instant sticky CTA triggers",
        "Optimized mobile form inputs with correct keyboard types (tel, email)",
        "Zero awkward horizontal scrolling or awkward layout shifts",
        "Readable, fluid typography scaled cleanly across screen sizes",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Technical SEO & Semantic Structure",
      description:
        "Structuring the website HTML with clean semantic tags, accessible ARIA attributes, and structured JSON-LD schemas.",
      bullets: [
        "Semantic H1-H4 heading hierarchy reflecting topic authority",
        "Automated XML sitemap, clean robots.txt, and canonical URLs",
        "WCAG AA accessible contrast ratios and keyboard navigability",
        "Fast Next.js server-side rendering for optimal indexability",
      ],
    },
  ],
  process: [
    {
      step: "01",
      title: "Friction Diagnostic",
      detail:
        "Recording session heatmaps and analyzing bounce rates across devices to pinpoint exact conversion drop-offs.",
    },
    {
      step: "02",
      title: "Information Architecture",
      detail:
        "Restructuring navigation, service taxonomies, and editorial proof points for effortless prospective buyer flow.",
    },
    {
      step: "03",
      title: "Frontend Build",
      detail:
        "Developing lightning-fast, responsive web interfaces with modern typography and refined brand aesthetics.",
    },
    {
      step: "04",
      title: "Tracking & CRO Loops",
      detail:
        "Deploying event listeners on every button, scroll depth, and form field to continually refine conversion rates.",
    },
  ],
  idealFor: [
    "Businesses with High Traffic but Low Conversion Rates",
    "B2B Consultancies Needing Credibility & Trust",
    "Local Service Companies Wanting Direct Phone Calls",
    "E-commerce Brands Seeking Checkout Optimization",
    "Companies Relaunching Outdated WordPress Websites",
  ],
  relatedServices: [
    {
      title: "Lead Generation Systems",
      href: "/services/lead-generation",
      description:
        "Integrate automated lead qualification funnels and CRM synchronization.",
    },
    {
      title: "SEO & Organic Search",
      href: "/services/seo",
      description:
        "Fuel your newly optimized website with qualified organic search visitors.",
    },
    {
      title: "Google Ads Management",
      href: "/services/google-ads",
      description:
        "Send high-intent paid traffic to tailored, high-converting landing pages.",
    },
  ],
};

export default function WebsiteOptimizationPage() {
  return <ServicePageTemplate data={websiteOptData} />;
}
