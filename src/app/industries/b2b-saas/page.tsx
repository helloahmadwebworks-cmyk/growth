import type { Metadata } from "next";
import IndustryPageTemplate, { IndustryPageProps } from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Growth for B2B & SaaS Companies — GrowByMasters",
  description:
    "Accelerate qualified demo requests and enterprise pipeline. Technical search clusters, high-intent software PPC, and closed-loop CRM attribution.",
  alternates: {
    canonical: "/industries/b2b-saas",
  },
  openGraph: {
    title: "Digital Growth for B2B & SaaS Companies | GrowByMasters",
    description:
      "Accelerate qualified demo requests and enterprise pipeline. Technical search clusters, high-intent software PPC, and closed-loop CRM attribution.",
    url: "https://growbymasters.com/industries/b2b-saas",
    siteName: "GrowByMasters",
    images: [{ url: "/images/industries/b2b-saas.jpg", width: 1200, height: 630, alt: "Digital Growth for B2B and SaaS" }],
  },
};

const b2bSaasData: IndustryPageProps = {
  slug: "b2b-saas",
  badge: "Enterprise Tech & Software",
  title: "B2B & SaaS",
  subtitle:
    "We help software vendors, technical manufacturers, and B2B platforms generate qualified enterprise pipeline, shorten sales cycles, and scale Annual Recurring Revenue (ARR).",
  heroImage: "/images/industries/b2b-saas.jpg",
  painPoints: [
    {
      challenge: "High Customer Acquisition Cost (CAC) vs LTV",
      impact:
        "Bidding on competitive enterprise software keywords burns capital when clicks don't convert into qualified sales opportunities.",
    },
    {
      challenge: "Low Demo Attendance & Slow Sales Cycles",
      impact:
        "Standard demo request forms produce ghosted meetings and low attendance rates because prospects lack upfront clarity on solutions.",
    },
    {
      challenge: "Unattributed Marketing Touches",
      impact:
        "Long multi-stakeholder buyer journeys mean marketing teams cannot prove which channels actually influenced closed deals in Salesforce or HubSpot.",
    },
  ],
  growthPlaybook: [
    {
      title: "Commercial Bottom-of-Funnel Search Strategy",
      description:
        "Targeting buyers at the point of vendor selection rather than burning budget on generic, top-of-funnel informational queries.",
      actions: [
        "'Software vs Alternative' and 'Best [Category] Software for [Industry]' comparison hubs",
        "Deep technical product documentation that answers IT compliance questions upfront",
        "Schema markup for SoftwareApplication and FAQPage",
      ],
    },
    {
      title: "High-Intent Search Ads with Strict Exclusions",
      description:
        "Capturing enterprise decision-makers with exact-match paid campaigns structured strictly around commercial buyer keywords.",
      actions: [
        "Negative keyword libraries excluding student research, job seekers, and existing customer logins",
        "Targeting IT directors and VP titles with value-led landing page variations",
        "Single-day demo booking routing directly into account executive calendars",
      ],
    },
    {
      title: "Closed-Loop CRM Attribution & Pipeline Sync",
      description:
        "Connecting website analytics directly to HubSpot and Salesforce deal stages to optimize campaigns for closed revenue.",
      actions: [
        "Passing UTM parameters and Click IDs into hidden CRM deal properties",
        "Syncing Opportunity Created and Closed-Won milestones back to Google Ads",
        "Weekly pipeline velocity reviews with sales leadership",
      ],
    },
  ],
  kpis: [
    {
      metric: "-42%",
      label: "Reduction in Customer Acquisition Cost (CAC)",
      benchmark: "By eliminating non-commercial search waste",
    },
    {
      metric: "85%+",
      label: "Demo Show-Up Rate",
      benchmark: "Achieved via instant calendar booking & SMS reminders",
    },
    {
      metric: "4.2X",
      label: "Pipeline Value Generated",
      benchmark: "Attributed directly to qualified inbound channels",
    },
  ],
  caseStudyHighlight: {
    title: "Enterprise Fleet & Asset Management Software",
    result: "+180% Inbound Enterprise Demos",
    summary:
      "Redesigned the demo qualification funnel, deployed bottom-of-funnel comparison SEO silos, and synced HubSpot Closed-Won revenue directly to Google Ads Smart Bidding.",
    href: "/case-studies#saas-pipeline",
  },
  recommendedServices: [
    {
      title: "SEO & Organic Search",
      href: "/services/seo",
      role: "Dominate high-intent software category queries and competitor comparisons.",
    },
    {
      title: "Lead Generation Systems",
      href: "/services/lead-generation",
      role: "Build interactive demo qualification workflows that route enterprise accounts.",
    },
    {
      title: "Analytics & Tracking",
      href: "/services/analytics-tracking",
      role: "Connect marketing touches to CRM pipeline stages and closed ARR.",
    },
  ],
};

export default function B2bSaasPage() {
  return <IndustryPageTemplate data={b2bSaasData} />;
}
