import type { Metadata } from "next";
import {
  Mail,
  Workflow,
  ShieldCheck,
  LineChart,
} from "lucide-react";
import ServicePageTemplate, { ServicePageProps } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Email Marketing & Lead Nurture Systems — Convert Leads to Revenue",
  description:
    "Turn captured leads into closed consultations and repeat buyers. We engineer automated email nurture sequences, high-deliverability technical setup, and high-converting broadcast campaigns.",
  alternates: {
    canonical: "/services/email-marketing",
  },
  openGraph: {
    title: "Email Marketing & Lead Nurture Systems | GrowByMasters",
    description:
      "Turn captured leads into closed consultations and repeat buyers. We engineer automated email nurture sequences, high-deliverability technical setup, and high-converting broadcast campaigns.",
    url: "https://growbymasters.com/services/email-marketing",
    siteName: "GrowByMasters",
    images: [
      {
        url: "/images/hero-globe.jpg",
        width: 1200,
        height: 630,
        alt: "GrowByMasters Email Marketing & Lead Nurturing Services",
      },
    ],
  },
};

const emailMarketingData: ServicePageProps = {
  slug: "email-marketing",
  badge: "Retention & Lifecycle Conversion",
  title: "Email Marketing",
  subtitle:
    "Turn captured leads into closed revenue and lifelong clients. We engineer automated lifecycle nurture workflows, technical deliverability infrastructure, and editorial broadcasts that keep your pipeline active.",
  deliverablesSummary: [
    "Automated Welcome & Lead Magnet Nurture Workflow Sequences",
    "Technical Deliverability Hardening (SPF, DKIM, DMARC Alignment)",
    "Consultation Prep & Inactive Lead Re-Activation Campaigns",
    "Responsive Multi-Device Email Template Design & Typography",
    "Audience Segmentation, Behavioral Branching & Revenue Attribution",
  ],
  overview: {
    heading: "Email Architecture Engineered to Bridge Inbound Capture and Closed Sales.",
    description: [
      "Acquiring high-intent traffic through SEO and paid advertising is only half the battle. In B2B and high-ticket service industries, over 70% of qualified prospects who submit an inquiry or download a resource are not ready to make a purchasing decision on day one. Without a structured email nurture system, expensive customer acquisition dollars evaporate.",
      "GrowByMasters treats email marketing as an automated conversion engine. We design strategic lifecycle workflows that educate prospective buyers, address common objections, and position your service as the undeniable choice. We also configure the underlying DNS authentication records so your messages consistently reach the primary inbox rather than the spam folder.",
    ],
  },
  pillars: [
    {
      icon: Workflow,
      title: "Automated Lifecycle Sequences",
      description:
        "Building trigger-based email workflows that guide prospects through each stage of their buying consideration cycle.",
      bullets: [
        "High-converting 5-part lead magnet delivery and educational follow-up series",
        "Pre-consultation briefing workflows setting executive expectations before calls",
        "Dead-lead re-activation sequences reviving dormant opportunities every quarter",
        "Client post-onboarding check-ins and referral generation workflows",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Technical Deliverability & DNS Architecture",
      description:
        "Configuring email authentication protocols to protect sender reputation and maximize primary inbox placement.",
      bullets: [
        "SPF, DKIM, and DMARC record generation and strict DNS alignment",
        "Custom sending domain setup preventing shared IP contamination",
        "Automated list hygiene pruning invalid, bounced, and unengaged contacts",
        "Spam-trigger word scanning and HTML payload optimization across all templates",
      ],
    },
    {
      icon: Mail,
      title: "High-Conversion Copywriting & Design",
      description:
        "Writing crisp, persuasive email copy paired with clean, accessible layouts that render flawlessly across mobile and desktop clients.",
      bullets: [
        "Direct-response subject lines balancing curiosity, urgency, and relevance",
        "Plain-text hybrid email styling proven to boost reply and engagement rates",
        "Responsive HTML email template systems tested across Outlook, Apple Mail, and Gmail",
        "Single focused Call-to-Action (CTA) architecture in every broadcast email",
      ],
    },
    {
      icon: LineChart,
      title: "Audience Segmentation & Pipeline Analytics",
      description:
        "Organizing contacts by engagement tier, service interest, and lifecycle stage to ensure hyper-relevant messaging.",
      bullets: [
        "Dynamic behavioral tagging based on link clicks, form inputs, and page visits",
        "Suppression list governance protecting unsubscribes and compliance (CAN-SPAM/GDPR)",
        "Open, click-through, and consultation booking conversion tracking in GA4",
        "Monthly executive review analyzing email-assisted pipeline revenue",
      ],
    },
  ],
  process: [
    {
      step: "01",
      title: "Deliverability Audit",
      detail:
        "We audit your sender domain reputation, authentication DNS records (SPF/DKIM/DMARC), historical bounce rates, and current list hygiene.",
    },
    {
      step: "02",
      title: "Journey Architecture",
      detail:
        "We map out your prospect lifecycle journey, identifying key decision stages, content requirements, and automated workflow trigger logic.",
    },
    {
      step: "03",
      title: "Copywriting & Staging",
      detail:
        "Our copywriters write each email in the sequence, and our designers stage the templates inside your email platform for review.",
    },
    {
      step: "04",
      title: "Activation & Testing",
      detail:
        "We deploy the automated workflows, configure conversion tracking, monitor inbox placement, and continuously optimize subject lines.",
    },
  ],
  idealFor: [
    "B2B Consultancies & Advisory Firms",
    "High-Ticket Home Service Contractors",
    "Specialized Healthcare Clinics & Dentists",
    "E-commerce Brands Needing Customer Retention",
    "Companies with Active Lead Generation Campaigns",
  ],
  sampleConcepts: [
    {
      category: "Workflow Architecture",
      title: "5-Part Inbound Lead Nurture Sequence",
      description:
        "A representative 14-day automated email sequence designed to transition prospects from initial resource download to booked discovery call.",
      deliverables: [
        "Email 1: Immediate asset fulfillment and expectation setting",
        "Email 2: Core methodology breakdown and industry myth teardown",
        "Email 3: Detailed case study walkthrough illustrating concrete ROI",
        "Email 4: Common objection FAQ addressing timeline and investment",
        "Email 5: Low-friction direct consultation booking invite",
      ],
    },
    {
      category: "Infrastructure Security",
      title: "DNS Deliverability Hardening Blueprint",
      description:
        "A technical checklist establishing strict domain verification to comply with current Google and Yahoo bulk-sender inbox mandates.",
      deliverables: [
        "DKIM 2048-bit key generation and DNS record verification",
        "DMARC policy rollout schedule transitioning from none to quarantine",
        "List sunset policy blueprint archiving contacts unengaged for 90+ days",
      ],
    },
    {
      category: "Pipeline Retention",
      title: "Quarterly Dead-Lead Revival Campaign",
      description:
        "A 3-part non-intrusive re-engagement sequence engineered to reactivate prospective buyers whose projects went cold in previous quarters.",
      deliverables: [
        "Curiosity-led 9-word question email format",
        "Updated industry benchmark resource attachment",
        "Direct calendar link for priority project scheduling",
      ],
    },
  ],
  faqs: [
    {
      question: "Which Email Service Providers (ESPs) and CRMs do you support?",
      answer:
        "We work with leading commercial platforms including HubSpot, Klaviyo, ActiveCampaign, Mailchimp, ConvertKit, and standard marketing automation suites. If you do not currently have an ESP, we will recommend the best platform for your business model and assist with setup.",
    },
    {
      question: "Does this service include cold outbound email prospecting?",
      answer:
        "No. We focus exclusively on permission-based inbound email marketing: nurturing leads who have opted in through your website, downloaded a resource, or requested a consultation, as well as retaining existing customers. We do not scrape unsolicited contact lists or run spam cold campaigns.",
    },
    {
      question: "How do you protect our emails from landing in the spam folder?",
      answer:
        "We audit and configure your domain's SPF, DKIM, and DMARC DNS authentication records, implement list hygiene protocols to prune inactive addresses, and design clean, lightweight email templates that comply with strict Gmail and Yahoo delivery guidelines.",
    },
    {
      question: "How long should a typical lead nurture sequence be?",
      answer:
        "For most B2B and high-ticket service businesses, an effective initial nurture sequence consists of 5 to 7 emails delivered over a 2 to 3 week window. This provides enough cadence to build authority without overwhelming the recipient.",
    },
    {
      question: "How do you measure revenue generated from email marketing?",
      answer:
        "We configure UTM tracking links on every email button and link, allowing Google Analytics 4 and your CRM to attribute form submissions, booked phone consultations, and closed deals directly back to specific automated workflows and broadcast campaigns.",
    },
  ],
  relatedServices: [
    {
      title: "Lead Generation Systems",
      href: "/services/lead-generation",
      description:
        "Build full-funnel inbound forms, diagnostic calculators, and qualified capture funnels that feed your email workflows.",
    },
    {
      title: "Website Optimization",
      href: "/services/website-optimization",
      description:
        "Optimize landing page conversion rates and email capture mechanisms to grow your subscriber pipeline.",
    },
    {
      title: "Content Marketing",
      href: "/services/content-marketing",
      description:
        "Fuel your email newsletters with authoritative industry insights, case studies, and thought leadership articles.",
    },
  ],
};

export default function EmailMarketingPage() {
  return <ServicePageTemplate data={emailMarketingData} />;
}
