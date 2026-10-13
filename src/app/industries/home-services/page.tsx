import type { Metadata } from "next";
import IndustryPageTemplate, { IndustryPageProps } from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Growth for Home Services — HVAC, Roofing & Plumbing",
  description:
    "Scale residential and commercial contractor bookings with local map pack SEO, high-intent Google Ads, automated review pipelines, and click-to-call mobile speed.",
  alternates: {
    canonical: "/industries/home-services",
  },
  openGraph: {
    title: "Digital Growth for Home Services | GrowByMasters",
    description:
      "Scale residential and commercial contractor bookings with local map pack SEO, high-intent Google Ads, automated review pipelines, and click-to-call mobile speed.",
    url: "https://growbymasters.com/industries/home-services",
    siteName: "GrowByMasters",
    images: [{ url: "/images/industries/home-services.jpg", width: 1200, height: 630, alt: "Digital Growth for Home Services" }],
  },
};

const homeServicesData: IndustryPageProps = {
  slug: "home-services",
  badge: "Contractors & Trades",
  title: "Home Services",
  subtitle:
    "We help HVAC, roofing, plumbing, electrical, and remodeling businesses generate high-ticket local jobs and build predictable dispatch pipelines throughout the year.",
  heroImage: "/images/industries/home-services.jpg",
  painPoints: [
    {
      challenge: "Seasonal Booking Feast or Famine",
      impact:
        "Contractors experience massive demand during peak weather followed by severe revenue drop-offs in shoulder seasons when crews sit idle.",
    },
    {
      challenge: "Wasted Ad Spend on Low-Value Inquiries",
      impact:
        "Spending thousands on broad Google Ads clicks for minor DIY troubleshooting rather than full system replacements or lucrative installations.",
    },
    {
      challenge: "Losing Jobs to Competitors in the Map 3-Pack",
      impact:
        "Homeowners in urgent emergency situations call the top 3 businesses shown in Google Maps. Being rank #4 or lower means losing 70% of inbound calls.",
    },
  ],
  growthPlaybook: [
    {
      title: "Local Map Pack & Geo-Signal Dominance",
      description:
        "Systematically optimizing Google Business Profiles, localized service area pages, and verified local citations to own top positions across your territory.",
      actions: [
        "Geo-targeted suburb landing pages with unique localized copy",
        "Automated review requests sent via SMS immediately after job completion",
        "Weekly Google Business Profile photo uploads and verified service catalogs",
      ],
    },
    {
      title: "High-Intent Emergency PPC Campaigns",
      description:
        "Capturing desperate homeowners searching for immediate repairs with exact-match search ads and dedicated click-to-call mobile landers.",
      actions: [
        "Aggressive negative keyword lists blocking DIY and parts shopping queries",
        "Call-only campaign configurations during live office dispatch hours",
        "Dynamic landing pages highlighting licensed, insured, 24/7 availability",
      ],
    },
    {
      title: "Automated Lead Capture & Dispatch Routing",
      description:
        "Eliminating missed calls and slow follow-ups that cause homeowners to call the next contractor on the list.",
      actions: [
        "Instant SMS alerts sent to dispatchers the second an online form is submitted",
        "After-hours online appointment scheduling widget directly on the site",
        "Call recording and whisper messages to train front-desk booking agents",
      ],
    },
  ],
  kpis: [
    {
      metric: "$45 - $85",
      label: "Target Cost Per Qualified Inbound Call",
      benchmark: "Down from industry average of $150+",
    },
    {
      metric: "Top 3",
      label: "Google Map Pack Dominance",
      benchmark: "Across 100% of core service zip codes",
    },
    {
      metric: "320%+",
      label: "Average 6-Month Lead Volume Increase",
      benchmark: "Verified through CallRail call tracking",
    },
  ],
  caseStudyHighlight: {
    title: "Texas HVAC & Energy Contractor",
    result: "+320% Qualified Replacement Leads",
    summary:
      "Restructured their fragmented local SEO and launched exact-match Google Search campaigns paired with high-converting mobile click-to-call pages.",
    href: "/case-studies#hvac-growth",
  },
  recommendedServices: [
    {
      title: "Local SEO & Google Maps",
      href: "/services/local-seo",
      role: "Dominate Google 3-Pack across your entire metro service territory.",
    },
    {
      title: "Google Ads Management",
      href: "/services/google-ads",
      role: "Capture urgent high-ticket installation and replacement jobs immediately.",
    },
    {
      title: "Website Optimization",
      href: "/services/website-optimization",
      role: "Turn mobile smartphone visitors into booked service calls in one tap.",
    },
  ],
  investmentGuidance: {
    range: "$1,500 – $4,000 / mo",
    scope: "Local map-pack rank engineering, negative-keyword scrubbed Google Ads, high-intent landing pages, and CallRail tracking integration.",
    typicalTimeline: "Initial campaign launch in 14 days; map-pack momentum builds over 60–90 days.",
  },
  faqs: [
    {
      question: "How do you prevent wasting Google Ads budget on low-margin repair inquiries?",
      answer: "We structure campaign negative-keyword lists to eliminate DIY searches, part requests, and sub-$100 repair inquiries, targeting high-margin replacement, installation, and whole-home contract terms.",
    },
    {
      question: "Do you integrate with dispatch tools like ServiceTitan or Housecall Pro?",
      answer: "Yes. We configure lead capture webhooks and phone tracking to feed booked calls directly into your CRM or dispatch queue with original marketing campaign attribution.",
    },
    {
      question: "How long before we see improvements in Google 3-Pack rankings?",
      answer: "Citation consistency, geo-relevance silos, and Google Business Profile optimization typically show local rank expansion within 45 to 90 days depending on local territory competition.",
    },
  ],
};

export default function HomeServicesPage() {
  return <IndustryPageTemplate data={homeServicesData} />;
}
