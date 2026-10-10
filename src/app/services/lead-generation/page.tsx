import type { Metadata } from "next";
import { Users, Filter, Bell, Database } from "lucide-react";
import ServicePageTemplate, { ServicePageProps } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Lead Generation Systems & Inbound Pipelines — GrowByMasters",
  description:
    "Build predictable B2B inbound lead generation systems. Pre-qualify prospects, automate instant routing, and fill your sales pipeline with verified buyers.",
  alternates: {
    canonical: "/services/lead-generation",
  },
  openGraph: {
    title: "Lead Generation Systems & Inbound Pipelines | GrowByMasters",
    description:
      "Build predictable B2B inbound lead generation systems. Pre-qualify prospects, automate instant routing, and fill your sales pipeline with verified buyers.",
    url: "https://growbymasters.com/services/lead-generation",
    siteName: "GrowByMasters",
    images: [{ url: "/images/hero-globe.jpg", width: 1200, height: 630, alt: "Lead Generation Systems" }],
  },
};

const leadGenData: ServicePageProps = {
  slug: "lead-generation",
  badge: "Inbound Pipeline Systems",
  title: "Lead Generation Systems",
  subtitle:
    "Replace erratic word-of-mouth with a predictable, automated inbound pipeline. We engineer custom lead capture systems that filter low-intent tire-kickers and route qualified prospects straight to your team.",
  deliverablesSummary: [
    "Multi-Step Interactive Diagnostic & Qualification Funnels",
    "Instant Lead Notification Webhooks (Email, SMS, Slack)",
    "Direct CRM Integration (HubSpot, Salesforce, Pipedrive, Zoho)",
    "High-Value B2B Lead Magnets & Cost Estimators",
    "Automated Email & Calendar Booking Confirmation Sequences",
  ],
  overview: {
    heading: "Stop Chasing Unqualified Leads. Let Qualified Buyers Inquire With You.",
    description: [
      "Traditional lead generation is broken: vague contact forms that receive spam, unqualified inquiries that waste hours of sales time, and slow response times that lose prospects to faster competitors.",
      "GrowByMasters builds automated lead capture engines that pre-qualify prospects on budget, timeline, and need before they ever speak with your team. We connect your traffic sources directly to automated CRM workflows that trigger within seconds.",
    ],
  },
  pillars: [
    {
      icon: Filter,
      title: "Interactive Qualification Funnels",
      description:
        "Guiding prospective clients through an engaging multi-step diagnostic rather than an intimidating 10-field static form.",
      bullets: [
        "Dynamic question branching based on prospect answers",
        "Budget and decision-maker qualification upfront",
        "Reduced psychological friction with progress bar animations",
        "Spam honeypots and real-time email verification filters",
      ],
    },
    {
      icon: Bell,
      title: "Rapid Lead Routing & Speed-to-Lead",
      description:
        "Studies prove calling a lead within 5 minutes increases conversion by 391%. We ensure your team is alerted instantly.",
      bullets: [
        "Instant webhooks to Slack, Microsoft Teams, SMS, and WhatsApp",
        "Automated calendar booking embedding upon qualification",
        "Round-robin lead assignment for multi-rep sales teams",
        "After-hours auto-responders setting clear expectations",
      ],
    },
    {
      icon: Database,
      title: "CRM Synchronization & Data Enrichment",
      description:
        "No more manual copy-pasting of leads from email inboxes into spreadsheets.",
      bullets: [
        "Native API integration with HubSpot, Zoho, Pipedrive, and Salesforce",
        "Automatic contact tagging and lead scoring by revenue potential",
        "Custom field mapping for source attribution (Google Ads, Organic, Referral)",
        "Audit trail tracking each prospect's journey from click to customer",
      ],
    },
    {
      icon: Users,
      title: "High-Value Conversion Assets",
      description:
        "Creating genuine value-driven assets that compel decision-makers to exchange their contact details willingly.",
      bullets: [
        "Custom industry cost calculators and ROI estimate tools",
        "Comprehensive vendor selection frameworks and checklists",
        "Executive whitepapers and proprietary industry research briefs",
        "Free audit workflows tailored to prospect domain URL",
      ],
    },
  ],
  process: [
    {
      step: "01",
      title: "Buyer Journey Mapping",
      detail:
        "Defining your ideal customer profile (ICP), their primary pain points, and the qualification thresholds required for sales engagement.",
    },
    {
      step: "02",
      title: "Funnel Engineering",
      detail:
        "Building custom multi-step qualification interactive forms, lead magnet assets, and mobile-optimized landing pages.",
    },
    {
      step: "03",
      title: "Automation Pipeline",
      detail:
        "Connecting webhooks, CRM fields, email notifications, and automated calendar scheduling links.",
    },
    {
      step: "04",
      title: "Quality Review",
      detail:
        "Continually monitoring lead quality feedback with your sales team to refine questions and weed out non-buyers.",
    },
  ],
  idealFor: [
    "High-Ticket Home Improvement & Remodeling Contractors",
    "Commercial B2B Service Providers & Consultants",
    "Private Medical & Dental Clinics",
    "Legal and Wealth Management Practices",
    "Enterprise Software & Technology Firms",
  ],
  relatedServices: [
    {
      title: "Google Ads Management",
      href: "/services/google-ads",
      description:
        "Channel high-intent searchers directly into your lead generation funnels.",
    },
    {
      title: "Website Optimization",
      href: "/services/website-optimization",
      description:
        "Ensure your entire website is built to capture and qualify inbound traffic.",
    },
    {
      title: "Analytics & Tracking",
      href: "/services/analytics-tracking",
      description:
        "Track lead velocity, cost per lead, and pipeline value with closed-loop tracking.",
    },
  ],
};

export default function LeadGenerationPage() {
  return <ServicePageTemplate data={leadGenData} />;
}
