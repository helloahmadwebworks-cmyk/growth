import type { Metadata } from "next";
import IndustryPageTemplate, { IndustryPageProps } from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Growth for Healthcare & Private Clinics — GrowByMasters",
  description:
    "Grow private patient bookings for dental clinics, physiotherapy centers, and medical practices with local SEO, patient-first UX, and automated review systems.",
  alternates: {
    canonical: "/industries/healthcare",
  },
  openGraph: {
    title: "Digital Growth for Healthcare & Private Clinics | GrowByMasters",
    description:
      "Grow private patient bookings for dental clinics, physiotherapy centers, and medical practices with local SEO, patient-first UX, and automated review systems.",
    url: "https://growbymasters.com/industries/healthcare",
    siteName: "GrowByMasters",
    images: [{ url: "/images/industries/healthcare.jpg", width: 1200, height: 630, alt: "Digital Growth for Healthcare and Clinics" }],
  },
};

const healthcareData: IndustryPageProps = {
  slug: "healthcare",
  badge: "Clinics & Medical Practices",
  title: "Healthcare",
  subtitle:
    "We help dental practices, medical clinics, and wellness providers attract high-value private patient inquiries, establish clinical trust, and maintain booked appointment schedules.",
  heroImage: "/images/industries/healthcare.jpg",
  painPoints: [
    {
      challenge: "High Patient Attrition & Empty Chairs",
      impact:
        "Clinics experience costly cancellations and idle practitioner hours without a steady stream of new patient inquiries.",
    },
    {
      challenge: "Strict Advertising Regulations & Ad Disapprovals",
      impact:
        "Medical and dental PPC ads frequently get flagged or disapproved by Google policies if not structured with strict clinical compliance.",
    },
    {
      challenge: "Lacking Verified Online Reputation & Review Proof",
      impact:
        "Patients choose doctors and clinics based almost entirely on recent Google review sentiment. Outdated or scarce reviews repel prospective patients.",
    },
  ],
  growthPlaybook: [
    {
      title: "Local Medical Map Pack & Proximity SEO",
      description:
        "Optimizing Google Business Profiles for high-ticket dental procedures, cosmetic dentistry, and specialty medical consultations.",
      actions: [
        "Structured MedicalBusiness and Physician schema implementation",
        "Targeting localized search queries (e.g. 'Invisalign dentist near me', 'private physio clinic')",
        "Accurate insurance and accepted payment method attributes on GBP",
      ],
    },
    {
      title: "Compliant High-Intent Search Ads",
      description:
        "Structuring policy-compliant Google Search campaigns focusing on urgent dental treatments, diagnostics, and elective procedures.",
      actions: [
        "Strict adherence to Google Healthcare advertising policies",
        "Mobile-optimized click-to-call buttons for same-day emergency appointments",
        "Transparent pricing and financing breakdown landing pages to reduce patient hesitation",
      ],
    },
    {
      title: "Automated Patient Review & Reputation System",
      description:
        "Sending gentle, HIPAA/privacy-compliant review requests via SMS right after a patient completes a successful appointment.",
      actions: [
        "Post-treatment SMS survey triggering Google review prompts for happy patients",
        "Private internal feedback channel for resolving any patient dissatisfaction instantly",
        "Embedding real patient video and photo testimonials across core treatment pages",
      ],
    },
  ],
  kpis: [
    {
      metric: "+195%",
      label: "Increase in New Patient Bookings",
      benchmark: "Across 6 months of local SEO & ads",
    },
    {
      metric: "4.9/5",
      label: "Average Google Review Score",
      benchmark: "Maintained with automated review requests",
    },
    {
      metric: "<$35",
      label: "Cost Per Booked Appointment",
      benchmark: "For routine and elective private consultations",
    },
  ],
  caseStudyHighlight: {
    title: "Unity Dental & Aesthetics Practice",
    result: "+195% Monthly Patient Inbound",
    summary:
      "Redesigned the clinic website with online booking, launched Local Services Ads, and automated post-treatment review collection to dominate local Google search.",
    href: "/case-studies#dental-clinic",
  },
  recommendedServices: [
    {
      title: "Local SEO & Google Maps",
      href: "/services/local-seo",
      role: "Ensure your clinic is the #1 recommendation when local patients search.",
    },
    {
      title: "Website Optimization",
      href: "/services/website-optimization",
      role: "Deliver a calm, reassuring mobile website experience with 1-click booking.",
    },
    {
      title: "Google Ads Management",
      href: "/services/google-ads",
      role: "Capture urgent emergency appointments and high-value elective procedures.",
    },
  ],
};

export default function HealthcarePage() {
  return <IndustryPageTemplate data={healthcareData} />;
}
