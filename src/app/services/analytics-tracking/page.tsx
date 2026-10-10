import type { Metadata } from "next";
import { BarChart3, LineChart, ShieldCheck, Database } from "lucide-react";
import ServicePageTemplate, { ServicePageProps } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Analytics & Conversion Tracking — Verified GA4 & Attribution",
  description:
    "End-to-end attribution, GA4 server-side tracking, GTM event modeling, and transparent executive dashboards to prove marketing ROI.",
  alternates: {
    canonical: "/services/analytics-tracking",
  },
  openGraph: {
    title: "Analytics & Conversion Tracking | GrowByMasters",
    description:
      "End-to-end attribution, GA4 server-side tracking, GTM event modeling, and transparent executive dashboards to prove marketing ROI.",
    url: "https://growbymasters.com/services/analytics-tracking",
    siteName: "GrowByMasters",
    images: [{ url: "/images/hero-globe.jpg", width: 1200, height: 630, alt: "Analytics and Conversion Tracking" }],
  },
};

const analyticsData: ServicePageProps = {
  slug: "analytics-tracking",
  badge: "Attribution & Data Integrity",
  title: "Analytics & Conversion Tracking",
  subtitle:
    "Eliminate marketing blind spots. We deploy robust GA4 server-side measurement, custom event tracking, and closed-loop CRM attribution so you know exactly which marketing channels generate revenue.",
  deliverablesSummary: [
    "Google Analytics 4 (GA4) Server-Side Container Configuration",
    "Google Tag Manager Custom Event Infrastructure & Trigger Schemas",
    "Dynamic Call Tracking & Native Form Attribution Modeling",
    "Offline Conversion Tracking (Syncing Closed CRM Revenue to Google Ads)",
    "Real-Time Executive Growth Dashboards (Looker Studio / Custom UI)",
  ],
  overview: {
    heading: "Without Accurate Tracking, You Are Flying Blind in the Fog.",
    description: [
      "Privacy regulations, iOS tracking updates, and ad-blockers have broken legacy Google Analytics. Standard client-side tracking now loses 30% to 50% of conversion data, causing Google Ads algorithms to make inaccurate bidding decisions and leaving founders uncertain of their true ROI.",
      "GrowByMasters builds enterprise-grade server-side measurement pipelines. By capturing first-party data securely on your server and transmitting verified conversions directly to Google Ads and GA4 via Measurement Protocols, we restore 100% data fidelity and provide executive clarity.",
    ],
  },
  pillars: [
    {
      icon: Database,
      title: "Server-Side Tracking Architecture",
      description:
        "Bypassing ad-blockers and browser cookie restrictions with first-party server containers deployed on secure cloud infrastructure.",
      bullets: [
        "Server-side Google Tag Manager (sGTM) on custom subdomains",
        "Extended cookie lifespans immune to Safari ITP restrictions",
        "Direct Google Ads Enhanced Conversions API integration",
        "GDPR, CCPA, and global privacy standard compliance",
      ],
    },
    {
      icon: LineChart,
      title: "Granular Event Modeling",
      description:
        "Tracking every micro and macro step in the prospective client journey with standardized naming conventions.",
      bullets: [
        "Dynamic phone number click and call duration tracking",
        "Form submission, field abandon, and multi-step progress events",
        "PDF download, video play, and scroll-depth milestone tracking",
        "Qualified pipeline stage events (e.g. Lead Qualified, Contract Sent)",
      ],
    },
    {
      icon: BarChart3,
      title: "Closed-Loop CRM Attribution",
      description:
        "Connecting your online marketing clicks directly to closed revenue inside your CRM or accounting platform.",
      bullets: [
        "GCLID and UTM parameter capture and storage in hidden form fields",
        "Passing deal amounts and close dates back to Google Ads for Smart Bidding",
        "First-click, Last-click, and Data-Driven multi-touch attribution analysis",
        "Accurate Customer Acquisition Cost (CAC) and Lifetime Value (LTV) calculation",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Executive Growth Dashboards",
      description:
        "Replacing confusing 50-page analytics reports with a clean, single-screen dashboard designed for business owners.",
      bullets: [
        "Real-time visibility into traffic sources, lead volume, and cost-per-lead",
        "Weekly automated snapshot emails summarizing marketing velocity",
        "Benchmark comparison against previous quarters and targets",
        "Zero vanity metrics: focused entirely on qualified leads and revenue",
      ],
    },
  ],
  process: [
    {
      step: "01",
      title: "Tracking Audit",
      detail:
        "Testing existing tags, identifying duplicate events, broken goals, and verifying GA4 property configuration.",
    },
    {
      step: "02",
      title: "Container Engineering",
      detail:
        "Deploying clean GTM tag containers, custom triggers, and server-side endpoints on your first-party domain.",
    },
    {
      step: "03",
      title: "CRM Integration",
      detail:
        "Configuring hidden UTM parameters in all forms and setting up offline conversion webhook triggers.",
    },
    {
      step: "04",
      title: "Dashboard Delivery",
      detail:
        "Constructing custom executive reporting dashboards with automated weekly data refreshes and alerts.",
    },
  ],
  idealFor: [
    "Companies Spending Over $3,000/mo on Paid Advertising",
    "B2B Firms with Multi-Week Sales Cycles",
    "Home Service Contractors Juggling Inbound Calls & Forms",
    "E-commerce Brands Wanting Accurate ROAS Attribution",
    "Founders Frustrated with Confusing GA4 Interfaces",
  ],
  relatedServices: [
    {
      title: "Google Ads Management",
      href: "/services/google-ads",
      description:
        "Feed server-side conversion data into Google Ads to optimize automated Smart Bidding algorithms.",
    },
    {
      title: "SEO & Organic Search",
      href: "/services/seo",
      description:
        "Measure the exact revenue and lead pipeline generated by organic search rankings.",
    },
    {
      title: "Website Optimization",
      href: "/services/website-optimization",
      description:
        "Identify drop-off bottlenecks and optimize conversion paths based on concrete data.",
    },
  ],
};

export default function AnalyticsTrackingPage() {
  return <ServicePageTemplate data={analyticsData} />;
}
