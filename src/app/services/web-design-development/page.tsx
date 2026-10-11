import type { Metadata } from "next";
import { Code2, Layout, Zap, ShieldCheck } from "lucide-react";
import ServicePageTemplate, { ServicePageProps } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Website Design & Development Services — GrowByMasters",
  description:
    "Custom website design and high-performance Next.js development engineered for B2B growth, sub-second speeds, technical SEO authority, and predictable lead generation.",
  alternates: {
    canonical: "/services/web-design-development",
  },
  openGraph: {
    title: "Website Design & Development Services | GrowByMasters",
    description:
      "Custom website design and high-performance Next.js development engineered for B2B growth, sub-second speeds, technical SEO authority, and predictable lead generation.",
    url: "https://growbymasters.com/services/web-design-development",
    siteName: "GrowByMasters",
    images: [{ url: "/images/hero-globe.jpg", width: 1200, height: 630, alt: "Website Design and Development Services" }],
  },
};

const webDevData: ServicePageProps = {
  slug: "web-design-development",
  badge: "High-Performance Web Engineering",
  title: "Website Design & Development",
  subtitle:
    "We design and build bespoke, lightning-fast digital assets engineered to dominate search rankings, project unquestioned market authority, and turn qualified visitors into paying clients.",
  deliverablesSummary: [
    "Custom Next.js & React Architecture with Zero Bloat",
    "Editorial UI/UX Design Tailored to High-Ticket Inbound Buyers",
    "Sub-Second Mobile Load Speeds & 100/100 Core Web Vitals",
    "Built-in Technical SEO, Semantic Heading Hierarchy & JSON-LD Schema",
    "Frictionless Qualification Forms, CRM Routing & Event Attribution",
  ],
  overview: {
    heading: "A Website is Not a Digital Brochure. It is Your 24/7 Primary Acquisition Engine.",
    description: [
      "Most web design agencies build visually ornate websites that collapse under search crawler inspection: sluggish load times, bloated page builders, messy div layouts, and zero consideration for buyer decision friction.",
      "At GrowByMasters, we approach web development as a revenue discipline. Every layout, typography decision, micro-interaction, and server route is engineered to establish immediate commercial credibility and guide qualified decision-makers straight toward booking an inquiry.",
    ],
  },
  pillars: [
    {
      icon: Code2,
      title: "Custom Next.js & Server-Rendered Engineering",
      description:
        "Lightweight, clean-code web architecture built without sluggish page builders or fragile plugin ecosystems.",
      bullets: [
        "Modern Next.js App Router for instant server-side page delivery",
        "Semantic, accessible HTML5 structure that search crawlers parse effortlessly",
        "Modular TypeScript component systems designed for rapid scalability",
        "Bank-grade API integrations and secure serverless backend functions",
      ],
    },
    {
      icon: Layout,
      title: "Conversion-Centric UI/UX Design",
      description:
        "Bespoke visual design systems that differentiate your brand from cookie-cutter competitors in competitive markets.",
      bullets: [
        "Curated typography and color palettes tailored to premium service buyers",
        "Clear cognitive hierarchy directing eye gaze directly to value propositions",
        "Mobile-first responsive engineering with zero horizontal layout shift",
        "Contextual multi-step qualification forms with interactive validation",
      ],
    },
    {
      icon: Zap,
      title: "Core Web Vitals & Sub-Second Speeds",
      description:
        "Speed is a direct Google ranking factor and conversion multiplier. We engineer websites that load instantaneously.",
      bullets: [
        "Sub-second Largest Contentful Paint (LCP) performance on 4G networks",
        "Next-gen WebP/AVIF image rendering with automatic responsive srcset",
        "Zero Cumulative Layout Shift (CLS) for stable, glitch-free browsing",
        "Edge caching and global CDN distribution for rapid international delivery",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Built-In Technical SEO & Schema Authority",
      description:
        "Search engine optimization baked directly into code from day one—not tacked on as an afterthought.",
      bullets: [
        "Automated XML sitemaps, clean robots.txt, and canonical URL structure",
        "Complete Schema.org JSON-LD graphs (Organization, Service, FAQ, WebPage)",
        "Semantic heading cascades (H1, H2, H3) aligned with topical clusters",
        "Open Graph and Twitter Card tags configured for authoritative social shares",
      ],
    },
  ],
  process: [
    {
      step: "01",
      title: "Strategic Blueprint & Information Architecture",
      detail:
        "We audit your target buyer personas, commercial offerings, and competitors to map high-intent site structure and page flow.",
    },
    {
      step: "02",
      title: "UI/UX Prototyping & Editorial Copywriting",
      detail:
        "We design bespoke layouts and craft authoritative value propositions that answer buyer objections before they arise.",
    },
    {
      step: "03",
      title: "Clean Next.js Development & Integration",
      detail:
        "We build clean, responsive components with TypeScript, integrate your CRM endpoints, and configure server-side tracking.",
    },
    {
      step: "04",
      title: "Rigorous QA, Speed Testing & Launch",
      detail:
        "We execute end-to-end device testing, Core Web Vitals audits, 301 redirect mapping, and submit verified sitemaps to Google Search Console.",
    },
  ],
  idealFor: [
    "B2B and professional services firms looking to upgrade from an outdated WordPress template",
    "Home service contractors (HVAC, roofing, plumbing) needing urgent mobile tap-to-call mechanics",
    "E-commerce brands seeking custom Shopify headless frontends or high-speed landing pages",
    "Growth-stage companies preparing to scale Google Ads or SEO and requiring a high-converting foundation",
  ],
  relatedServices: [
    {
      title: "Website Optimization & CRO",
      href: "/services/website-optimization",
      description:
        "Continuous conversion testing, heatmapping, and user friction elimination for live sites.",
    },
    {
      title: "SEO & Organic Search",
      href: "/services/seo",
      description:
        "Drive consistent, compounding organic search volume to your newly built web architecture.",
    },
    {
      title: "Analytics & Tracking",
      href: "/services/analytics-tracking",
      description:
        "GA4 server-side attribution and conversion tracking to measure pipeline return on investment.",
    },
  ],
};

export default function WebDesignDevelopmentPage() {
  return <ServicePageTemplate data={webDevData} />;
}
