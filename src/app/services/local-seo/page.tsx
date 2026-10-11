import type { Metadata } from "next";
import { MapPin, Star, Building, PhoneCall } from "lucide-react";
import ServicePageTemplate, { ServicePageProps } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Local SEO & Google Maps Optimization — Own Your Local Service Area",
  description:
    "Dominate local Google Map 3-pack rankings, optimize Google Business Profile, and generate local inbound calls across regional and international target markets.",
  alternates: {
    canonical: "/services/local-seo",
  },
  openGraph: {
    title: "Local SEO & Google Maps Optimization | GrowByMasters",
    description:
      "Dominate local Google Map 3-pack rankings, optimize Google Business Profile, and generate local inbound calls across regional and international target markets.",
    url: "https://growbymasters.com/services/local-seo",
    siteName: "GrowByMasters",
    images: [{ url: "/images/hero-globe.jpg", width: 1200, height: 630, alt: "Local SEO and Google Maps Optimization" }],
  },
};

const localSeoData: ServicePageProps = {
  slug: "local-seo",
  badge: "Local Map Pack & Geotargeting",
  title: "Local SEO & Google Maps",
  subtitle:
    "Own the top 3 spots in Google Local Map Packs. We help service businesses and local enterprises dominate high-intent searches in their immediate cities and regional service zones.",
  deliverablesSummary: [
    "Google Business Profile (GBP) Primary & Secondary Category Optimization",
    "NAP (Name, Address, Phone) Consistency Across 60+ Top Tier Citations",
    "Geotargeted Service Area Landing Pages with Localized Schema Markup",
    "Automated Customer Review Generation & Reputation Defense Protocols",
    "Local Proximity Signal Engineering & Geo-Grid Rank Tracking",
  ],
  overview: {
    heading: "When Local Customers Need Your Service, You Must Be in the Top 3.",
    description: [
      "Over 76% of people who search on their smartphone for something nearby visit a business within 24 hours. If your company isn't appearing in Google's 3-Pack Maps section, your competitors are capturing all your high-value phone calls.",
      "GrowByMasters builds disciplined local SEO systems that strengthen your proximity signals, clean up inconsistent citations, and deploy verified LocalBusiness schemas—purpose-built for competitive metro territories across the United States, Canada, Australia, and the Gulf region.",
    ],
  },
  pillars: [
    {
      icon: MapPin,
      title: "Google Business Profile Engineering",
      description:
        "Full algorithmic tuning of your primary profile attributes, service menus, geo-coordinates, and media assets.",
      bullets: [
        "Strategic primary category and sub-category selection",
        "Geotagged high-resolution photos and verified product catalogs",
        "Weekly keyword-rich Google Posts and promotion broadcasts",
        "Direct Q&A seeding and conversion tracking integration",
      ],
    },
    {
      icon: Building,
      title: "Local Citation Authority & NAP Health",
      description:
        "Standardizing your Name, Address, and Phone number across high-authority directories, mapping engines, and local data aggregators.",
      bullets: [
        "Purging duplicate and conflicting historic listings",
        "Submission to tier-one business registries and Chamber portals",
        "Industry-specific citation building (contractor portals, medical registries, legal bars)",
        "Structured PostalAddress and GeoCoordinates metadata markup",
      ],
    },
    {
      icon: PhoneCall,
      title: "Service Area Landing Pages (SAPs)",
      description:
        "Building dedicated, non-doorway geo-landing pages that rank for high-intent queries across each surrounding suburb or market.",
      bullets: [
        "Unique localized content avoiding thin doorway penalties",
        "Embedded localized Google Maps and driving direction cues",
        "Customer testimonials and localized case study highlights",
        "Prominent mobile click-to-call buttons with instant routing",
      ],
    },
    {
      icon: Star,
      title: "Review Velocity & Reputation Systems",
      description:
        "Automated workflows that prompt satisfied customers to leave 5-star reviews containing crucial service keywords.",
      bullets: [
        "SMS and email post-service review request automation",
        "Review response protocols addressing negative feedback professionally",
        "Keyword-rich review sentiment optimization for Google's NLP parsers",
        "Live review display widgets embedded on high-converting site pages",
      ],
    },
  ],
  process: [
    {
      step: "01",
      title: "Local Map Audit",
      detail:
        "Running a 10-mile radius geo-grid rank scan to see exactly where your business drops out of the Map Pack.",
    },
    {
      step: "02",
      title: "Listing Optimization",
      detail:
        "Overhauling your Google Business Profile attributes, descriptions, categories, and citation accuracy.",
    },
    {
      step: "03",
      title: "Geo-Page Buildout",
      detail:
        "Publishing localized landing pages with verified LocalBusiness schemas for each target community or district.",
    },
    {
      step: "04",
      title: "Proximity Defense",
      detail:
        "Continuously driving review velocity, localized backlinks, and local press mentions to preserve #1 rankings.",
    },
  ],
  idealFor: [
    "HVAC & Plumbing Contractors",
    "Roofing & Remodeling Businesses",
    "Dental & Specialty Medical Clinics",
    "Attorneys & Accounting Practices",
    "Commercial Real Estate Brokerages",
    "Regional Multi-Location Brands",
  ],
  relatedServices: [
    {
      title: "Google Ads Management",
      href: "/services/google-ads",
      description:
        "Capture local searchers immediately using Google Local Services Ads (LSA) and Search campaigns.",
    },
    {
      title: "Website Optimization",
      href: "/services/website-optimization",
      description:
        "Ensure mobile searchers can call your team in one click without loading lags.",
    },
    {
      title: "Lead Generation Systems",
      href: "/services/lead-generation",
      description:
        "Route inbound phone calls and emergency inquiry forms straight to your on-call team.",
    },
  ],
};

export default function LocalSeoPage() {
  return <ServicePageTemplate data={localSeoData} />;
}
