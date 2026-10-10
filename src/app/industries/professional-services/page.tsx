import type { Metadata } from "next";
import IndustryPageTemplate, { IndustryPageProps } from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Growth for Professional Services — Law Firms, Accounting & Advisory",
  description:
    "Generate qualified corporate and private client consultations. Build undeniable authority, rank for commercial intent searches, and pre-qualify high-value retainers.",
  alternates: {
    canonical: "/industries/professional-services",
  },
  openGraph: {
    title: "Digital Growth for Professional Services | GrowByMasters",
    description:
      "Generate qualified corporate and private client consultations. Build undeniable authority, rank for commercial intent searches, and pre-qualify high-value retainers.",
    url: "https://growbymasters.com/industries/professional-services",
    siteName: "GrowByMasters",
    images: [{ url: "/images/industries/professional-services.jpg", width: 1200, height: 630, alt: "Digital Growth for Professional Services" }],
  },
};

const profServicesData: IndustryPageProps = {
  slug: "professional-services",
  badge: "Legal, Financial & Consulting",
  title: "Professional Services",
  subtitle:
    "We help law firms, CPA practices, wealth managers, and specialized B2B consultancies generate qualified, high-retainer prospective client inquiries through strategic positioning.",
  heroImage: "/images/industries/professional-services.jpg",
  painPoints: [
    {
      challenge: "Over-Reliance on Fragile Referral Networks",
      impact:
        "Relying exclusively on personal word-of-mouth creates unpredictable revenue swings and leaves growth capped by partner networks.",
    },
    {
      challenge: "Low-Caliber Inquiries Wasting Partner Billable Hours",
      impact:
        "Standard website forms attract price-sensitive clients who cannot afford your hourly rates or lack the qualifying criteria for your practice.",
    },
    {
      challenge: "Generic Corporate Messaging That Fails to Differentiate",
      impact:
        "Websites full of generic jargon ('trusted advisors delivering excellence') that look identical to every competing firm in your city.",
    },
  ],
  growthPlaybook: [
    {
      title: "Commercial Practice Area Search Silos",
      description:
        "Building deep, authoritative landing pages for each specific legal, tax, or advisory sub-specialty that rank when corporate decision-makers seek counsel.",
      actions: [
        "In-depth practice area pages structured with case examples and regulatory FAQs",
        "Targeting commercial intent keywords rather than broad theoretical terms",
        "Author profile optimization establishing individual partner credentials",
      ],
    },
    {
      title: "Executive Pre-Qualification Lead Funnels",
      description:
        "Replacing generic 'Contact Us' forms with structured intake questionnaires that evaluate matter type, company size, and budget before booking.",
      actions: [
        "Multi-step case evaluation diagnostics that screen out unqualified matters",
        "Automated calendar booking embedded exclusively for verified prospective clients",
        "Immediate conflict-check and NDA acknowledgement workflow integration",
      ],
    },
    {
      title: "Thought Leadership & Editorial Distribution",
      description:
        "Transforming partner insights into authoritative whitepapers and articles that educate corporate executives and earn natural media citations.",
      actions: [
        "Analysis of recent statutory shifts, case precedents, or tax code updates",
        "Repurposing complex legal/financial concepts into clear executive briefs",
        "Syndication across LinkedIn and corporate newsletter databases",
      ],
    },
  ],
  kpis: [
    {
      metric: "250%+",
      label: "Growth in Qualified Retainer Inquiries",
      benchmark: "Over a 12-month strategic SEO campaign",
    },
    {
      metric: "100%",
      label: "Lead Pre-Qualification Rate",
      benchmark: "Zero tire-kickers reaching senior partner calendars",
    },
    {
      metric: "Top 1",
      label: "Practice Area Search Visibility",
      benchmark: "For primary high-value corporate specialties",
    },
  ],
  caseStudyHighlight: {
    title: "Ontario Corporate & Estate Law Practice",
    result: "+250% Organic Retainer Pipeline",
    summary:
      "Engineered comprehensive practice area topic clusters, restructured lawyer bios for E-E-A-T, and launched a multi-step corporate inquiry intake funnel.",
    href: "/case-studies#law-firm-seo",
  },
  recommendedServices: [
    {
      title: "SEO & Organic Search",
      href: "/services/seo",
      role: "Capture prospective clients seeking specialized legal and financial counsel.",
    },
    {
      title: "Content Marketing",
      href: "/services/content-marketing",
      role: "Publish authoritative analysis that demonstrates undeniable subject mastery.",
    },
    {
      title: "Lead Generation Systems",
      href: "/services/lead-generation",
      role: "Screen inquiries to protect billable partner hours from low-value leads.",
    },
  ],
};

export default function ProfessionalServicesPage() {
  return <IndustryPageTemplate data={profServicesData} />;
}
