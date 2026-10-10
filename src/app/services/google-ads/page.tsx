import type { Metadata } from "next";
import { Target, DollarSign, Filter, BarChart2 } from "lucide-react";
import ServicePageTemplate, { ServicePageProps } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Google Ads Management — High-Intent PPC with Verified ROAS",
  description:
    "Drive qualified buyer inquiries and scale profitable ad spend with disciplined Google Search, Performance Max, and negative keyword sculpting.",
  alternates: {
    canonical: "/services/google-ads",
  },
  openGraph: {
    title: "Google Ads Management — High-Intent PPC with Verified ROAS | GrowByMasters",
    description:
      "Drive qualified buyer inquiries and scale profitable ad spend with disciplined Google Search, Performance Max, and negative keyword sculpting.",
    url: "https://growbymasters.com/services/google-ads",
    siteName: "GrowByMasters",
    images: [{ url: "/images/hero-globe.jpg", width: 1200, height: 630, alt: "Google Ads Management" }],
  },
};

const googleAdsData: ServicePageProps = {
  slug: "google-ads",
  badge: "PPC & High-Intent Paid Search",
  title: "Google Ads Management",
  subtitle:
    "Stop wasting advertising budget on useless clicks. We engineer hyper-targeted Google Search and Performance Max campaigns that deliver profitable inquiries with measurable ROAS.",
  deliverablesSummary: [
    "High-Intent Exact & Phrase Match Architecture",
    "Continuous Negative Keyword Pruning to Eliminate Waste",
    "Conversion-Engineered Dedicated Landing Page Alignment",
    "Server-Side Enhanced Conversions & GA4 Attribution",
    "A/B Tested Ad Creatives and Dynamic Keyword Insertion",
  ],
  overview: {
    heading: "Paid Advertising Designed to Protect Profit Margins, Not Maximize Click Volume.",
    description: [
      "Most digital ad accounts suffer from bid inflation, loose broad match targeting, and automated Google recommendations that spend your money on unqualified traffic. We take full control back.",
      "GrowByMasters builds disciplined PPC structures based on Single Theme Ad Groups (STAGs), strict negative keyword lists, and custom landing page pairings. Every single dollar of spend is scrutinized against actual closed revenue, not vanity impressions.",
    ],
  },
  pillars: [
    {
      icon: Target,
      title: "Commercial Intent Campaign Structure",
      description:
        "Segmenting search campaigns strictly by buyer readiness and margin potential to ensure optimal bid distribution.",
      bullets: [
        "Separation of high-intent search from discovery and display channels",
        "Granular geo-targeting and dayparting based on call answering hours",
        "Target CPA and Target ROAS algorithmic bidding calibration",
        "Device-level bid modifiers favoring high-converting mobile phone inquiries",
      ],
    },
    {
      icon: Filter,
      title: "Aggressive Waste Elimination",
      description:
        "Actively pruning search terms daily to prevent your budget from being drained by informational or competitor queries.",
      bullets: [
        "Account-wide master negative keyword lists updated continuously",
        "Pruning misleading broad match expansions and search partner junk",
        "Blocking non-commercial search intent (e.g. jobs, free, login, DIY)",
        "Competitor bidding defense strategies with strict budget caps",
      ],
    },
    {
      icon: DollarSign,
      title: "Message Match & Landing Page Alignment",
      description:
        "Ensuring the headline of the ad matches the exact headline of the destination page to maintain maximum Quality Scores.",
      bullets: [
        "10/10 Quality Score target for core commercial keyword themes",
        "Fast-loading dedicated landing pages with zero distraction navigation",
        "High-contrast call-to-actions and friction-free inquiry forms",
        "Dynamic text replacement reflecting user geographic location",
      ],
    },
    {
      icon: BarChart2,
      title: "Closed-Loop Attribution & Enhanced Tracking",
      description:
        "Connecting Google Ads directly to your CRM to teach Google's Smart Bidding algorithm which leads turn into high-value clients.",
      bullets: [
        "Google Ads Enhanced Conversions via server-side hashing",
        "CallRail and native dynamic number insertion for call attribution",
        "Offline Conversion Tracking (OCT) sync for deal closing milestones",
        "Weekly transparent reports highlighting actual Cost Per Qualified Lead",
      ],
    },
  ],
  process: [
    {
      step: "01",
      title: "Account Diagnostic",
      detail:
        "Comprehensive audit of historical search queries, wasted spend, quality score leaks, and conversion tracking integrity.",
    },
    {
      step: "02",
      title: "Campaign Restructure",
      detail:
        "Rebuilding campaigns into clean, modular intent tiers with dedicated ad copy and customized extensions.",
    },
    {
      step: "03",
      title: "Landing Page Launch",
      detail:
        "Deploying dedicated high-converting landing pages tailored to each specific ad group's commercial proposition.",
    },
    {
      step: "04",
      title: "Bid & ROAS Optimization",
      detail:
        "Scaling top-performing keyword clusters while cutting non-performing assets to lower cost-per-lead month over month.",
    },
  ],
  idealFor: [
    "Emergency Home Services (HVAC, Plumbing, Water Restoration)",
    "B2B SaaS & Enterprise Technology Companies",
    "Commercial Contractors & Builders",
    "Specialized Legal & Financial Advisors",
    "High-Ticket E-commerce Brands",
  ],
  relatedServices: [
    {
      title: "Website Optimization",
      href: "/services/website-optimization",
      description:
        "Double your Google Ads conversion rate with fast, modern landing pages.",
    },
    {
      title: "Analytics & Tracking",
      href: "/services/analytics-tracking",
      description:
        "Attribute Google Ads spend directly to revenue closed in your CRM.",
    },
    {
      title: "SEO & Organic Search",
      href: "/services/seo",
      description:
        "Complement high-cost PPC keywords with compounding organic rankings.",
    },
  ],
};

export default function GoogleAdsPage() {
  return <ServicePageTemplate data={googleAdsData} />;
}
