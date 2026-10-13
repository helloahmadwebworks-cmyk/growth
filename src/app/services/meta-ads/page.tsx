import type { Metadata } from "next";
import {
  Megaphone,
  Filter,
  BarChart2,
  Cpu,
} from "lucide-react";
import ServicePageTemplate, { ServicePageProps } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Meta Ads Management — Facebook & Instagram Ads with Verified ROAS",
  description:
    "Scale profitable client acquisition with disciplined Meta Ads management across Facebook and Instagram: Server-Side CAPI tracking, creative testing matrices, and ROAS-focused bidding.",
  alternates: {
    canonical: "/services/meta-ads",
  },
  openGraph: {
    title: "Meta Ads Management — Facebook & Instagram Ads | GrowByMasters",
    description:
      "Scale profitable client acquisition with disciplined Meta Ads management across Facebook and Instagram: Server-Side CAPI tracking, creative testing matrices, and ROAS-focused bidding.",
    url: "https://growbymasters.com/services/meta-ads",
    siteName: "GrowByMasters",
    images: [
      {
        url: "/images/hero-globe.jpg",
        width: 1200,
        height: 630,
        alt: "GrowByMasters Meta Ads Management Services",
      },
    ],
  },
};

const metaAdsData: ServicePageProps = {
  slug: "meta-ads",
  badge: "Paid Social & Direct ROAS",
  title: "Meta Ads Management",
  subtitle:
    "Turn paid social into a predictable customer acquisition machine. We engineer disciplined Facebook and Instagram ad campaigns with creative testing variety, server-side tracking, and strict ROAS accountability.",
  deliverablesSummary: [
    "Full-Funnel Campaign Architecture (Prospecting, Retargeting, Lookalikes)",
    "Creative Angle Testing Matrices (Static Hooks, Carousels, Value Framing)",
    "Server-Side Meta Conversions API (CAPI) & Gateway Tracking Setup",
    "First-Party Audience Segmentation & CRM Customer List Enrichment",
    "Weekly ROAS, Cost Per Acquisition (CPA) & Budget Allocation Reporting",
  ],
  overview: {
    heading: "Paid Social Built Around Unit Economics, Not Fluffy Impression Metrics.",
    description: [
      "In the modern post-iOS privacy landscape, generic Meta ad strategies fail. Broad interest targeting is obsolete, browser-based pixels miss up to 30% of conversions, and creative fatigue rapidly degrades campaign efficiency. Achieving consistent Return on Ad Spend (ROAS) requires creative volume, algorithmic synergy, and robust server-side attribution.",
      "GrowByMasters manages Meta ad spend with ruthless commercial discipline. We test distinct creative angles systematically, implement Meta Conversions API (CAPI) to bypass browser ad-blocking, and align campaign hooks with high-converting dedicated landing pages. Every dollar of ad spend is scrutinized against actual customer acquisition costs and pipeline margin.",
    ],
  },
  pillars: [
    {
      icon: Megaphone,
      title: "Full-Funnel Account Architecture",
      description:
        "Structuring ad accounts to isolate cold prospecting from warm retargeting and high-value customer retention.",
      bullets: [
        "Advantage+ Campaign Budgeting paired with disciplined manual testing ad sets",
        "Top-of-funnel broad and lookalike prospecting calibrated for commercial buyers",
        "Mid-funnel consideration flows addressing common buyer objections",
        "Dynamic product and service retargeting capturing high-intent abandoned visitors",
      ],
    },
    {
      icon: Filter,
      title: "Systematic Creative Testing Matrix",
      description:
        "Continuously testing diverse creative angles, visual formats, and copywriting hooks to beat ad fatigue and lower CPA.",
      bullets: [
        "Testing matrices isolating visual hooks, benefit headlines, and body copy variations",
        "High-contrast static creatives, problem-solution carousels, and stat callouts",
        "Mobile-first vertical (9:16) and square (1:1) formatting for Feeds, Stories, and Reels",
        "Creative iteration cycles retiring underperforming ads before budget is wasted",
      ],
    },
    {
      icon: Cpu,
      title: "Server-Side Conversions API (CAPI) Infrastructure",
      description:
        "Deploying resilient server-to-server tracking to ensure 100% data fidelity and accurate conversion signaling back to Meta's algorithm.",
      bullets: [
        "Meta Conversions API (CAPI) setup via Google Tag Manager Server container",
        "Event deduplication pairing client-side browser pixel with server events",
        "High Event Quality Match scores (8.0+ rating) using hashed first-party parameters",
        "Offline conversion sync feeding closed CRM sales back into campaign optimization",
      ],
    },
    {
      icon: BarChart2,
      title: "Budget Optimization & Margin Protection",
      description:
        "Managing bids and daily spend thresholds to protect profit margins and prevent algorithmic overspending.",
      bullets: [
        "Target Cost per Acquisition (CPA) and minimum ROAS guardrails",
        "Horizontal scaling into adjacent demographic and geographical clusters",
        "Elimination of overlapping audience cannibalization across active ad sets",
        "Weekly transparent reporting showing blended CAC, ad spend, and pipeline value",
      ],
    },
  ],
  process: [
    {
      step: "01",
      title: "Technical Audit",
      detail:
        "We inspect your Meta Business Manager, Pixel health, CAPI event quality, historical cost per lead, and creative asset performance.",
    },
    {
      step: "02",
      title: "Angle Mapping",
      detail:
        "We identify 3 to 4 distinct commercial buyer angles and design the initial creative testing matrix of visuals, copy hooks, and landing pages.",
    },
    {
      step: "03",
      title: "Controlled Launch",
      detail:
        "Campaigns are activated under strict budget guardrails to isolate winning creative and audience combinations within the first 14 days.",
    },
    {
      step: "04",
      title: "Scale & Protect",
      detail:
        "We systematically increase spend on verified winning ad sets, refresh creatives weekly, and provide clear attribution dashboards.",
    },
  ],
  idealFor: [
    "E-commerce Brands Seeking Scalable Product Acquisition",
    "B2B Firms Targeting Specific Professional Demographics",
    "High-Ticket Home Service Contractors Expanding Service Radius",
    "Private Healthcare Practices Attracting Direct Consultations",
    "Companies Paired with Complementary Google Ads Campaigns",
  ],
  sampleConcepts: [
    {
      category: "Creative Strategy",
      title: "12-Cell Paid Social Testing Matrix",
      description:
        "A representative testing matrix isolating 3 distinct visual formats against 4 unique value proposition copy hooks to pinpoint lowest CPA combinations.",
      deliverables: [
        "Visual angle taxonomy (Direct Offer vs. Social Proof vs. Process Teardown)",
        "Headline variations optimized for primary feed truncation rules",
        "Standardized UTM naming convention for multi-touch GA4 attribution",
      ],
    },
    {
      category: "Technical Tracking",
      title: "CAPI Server-Side Architecture Blueprint",
      description:
        "A resilient server-to-server tracking blueprint ensuring accurate purchase and lead transmission independent of client-side ad blockers.",
      deliverables: [
        "Server-side event payload documentation (Lead, InitiateCheckout, Purchase)",
        "SHA-256 client data hashing protocol for privacy compliance",
        "Automated event diagnostic alerts triggered by delivery dropoffs",
      ],
    },
    {
      category: "Account Governance",
      title: "Advantage+ Scaling Playbook",
      description:
        "Standard operating procedure governing budget allocation between testing sandbox campaigns and high-budget Advantage+ scaling ad sets.",
      deliverables: [
        "Daily spend allocation formulas based on rolling 7-day ROAS",
        "Frequency cap monitoring rules to prevent prospect creative exhaustion",
        "Bid cap calibration based on client customer lifetime value (LTV)",
      ],
    },
  ],
  faqs: [
    {
      question: "How is Meta Ads Management different from Social Media Marketing?",
      answer:
        "Social Media Marketing manages your organic company profile, posting schedule, and community followers without paying for ad reach. Meta Ads Management is paid media advertising on Facebook and Instagram where we buy targeted impressions to drive direct commercial inquiries, consultations, or e-commerce purchases with measurable ROAS.",
    },
    {
      question: "What minimum ad spend budget do you recommend for Meta Ads?",
      answer:
        "We generally recommend a minimum ad spend of $1,500 to $2,500 per month paid directly to Meta. This provides sufficient conversion data volume for Meta's machine-learning algorithm to exit the learning phase and optimize delivery effectively.",
    },
    {
      question: "Do you supply the video footage and images for the ads?",
      answer:
        "We design high-converting static graphic ads, carousel layouts, visual copy hooks, and typography overlays. If your campaigns require authentic photo or video assets of your team, clinic, or physical products, your team supplies the raw footage, which our creative team then formats and styles into high-performing ads.",
    },
    {
      question: "How do you handle iOS privacy updates and tracking loss?",
      answer:
        "We deploy Meta Conversions API (CAPI) through server-side containers. This sends conversion events directly from your server to Meta, bypassing browser-based ad blockers and iOS tracking restrictions to restore high event match quality.",
    },
    {
      question: "How do Meta Ads work alongside our Google Ads campaigns?",
      answer:
        "Google Ads captures active demand from users already searching for your services. Meta Ads generates demand by putting high-value offers in front of qualified buyers before they search. Used together, they create a full-funnel acquisition engine where Meta drives awareness and Google captures high-intent searches.",
    },
  ],
  relatedServices: [
    {
      title: "Google Ads Management",
      href: "/services/google-ads",
      description:
        "Capture buyers searching with immediate high-intent on Google Search, Maps, and Performance Max campaigns.",
    },
    {
      title: "Graphic Design",
      href: "/services/graphic-design",
      description:
        "Produce thumb-stopping static ad creatives, carousels, and visual hook variations tailored for Meta ad feeds.",
    },
    {
      title: "Analytics & Tracking",
      href: "/services/analytics-tracking",
      description:
        "Establish unified GA4 server-side measurement, cross-channel attribution, and executive ROI dashboards.",
    },
  ],
};

export default function MetaAdsPage() {
  return <ServicePageTemplate data={metaAdsData} />;
}
