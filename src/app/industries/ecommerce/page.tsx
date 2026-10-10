import type { Metadata } from "next";
import IndustryPageTemplate, { IndustryPageProps } from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Growth for E-commerce & DTC Brands — GrowByMasters",
  description:
    "Scale profitable revenue for Shopify and DTC brands. Google Shopping optimization, category SEO, conversion rate optimization, and first-party attribution.",
  alternates: {
    canonical: "/industries/ecommerce",
  },
  openGraph: {
    title: "Digital Growth for E-commerce & DTC Brands | GrowByMasters",
    description:
      "Scale profitable revenue for Shopify and DTC brands. Google Shopping optimization, category SEO, conversion rate optimization, and first-party attribution.",
    url: "https://growbymasters.com/industries/ecommerce",
    siteName: "GrowByMasters",
    images: [{ url: "/images/industries/ecommerce.jpg", width: 1200, height: 630, alt: "Digital Growth for E-commerce Brands" }],
  },
};

const ecommerceData: IndustryPageProps = {
  slug: "ecommerce",
  badge: "Shopify & Direct-to-Consumer",
  title: "E-commerce & DTC Brands",
  subtitle:
    "We help high-growth Shopify and DTC brands build profitable, multi-channel acquisition engines that reduce dependence on paid social and scale customer lifetime value.",
  heroImage: "/images/industries/ecommerce.jpg",
  painPoints: [
    {
      challenge: "Crushed Margins from Rising Paid Ad Costs",
      impact:
        "Customer acquisition costs on Meta and TikTok have soared, turning previously profitable unit economics into negative margins.",
    },
    {
      challenge: "Under-Performing Collection & Category Pages",
      impact:
        "E-commerce stores rely almost entirely on single product ads, missing out on massive free organic search traffic across high-volume category queries.",
    },
    {
      challenge: "High Mobile Bounce Rates & Checkout Friction",
      impact:
        "Sluggish Shopify theme scripts and cluttered checkout processes cause prospective buyers to abandon carts in droves.",
    },
  ],
  growthPlaybook: [
    {
      title: "Commercial Category Page SEO Architecture",
      description:
        "Transforming flat collection pages into rich, authoritative category hubs that rank for lucrative product searches.",
      actions: [
        "Semantic schema markup for Product, Review, and BreadcrumbList",
        "Strategic internal linking passing authority from bestsellers to new collections",
        "Comprehensive collection page copy addressing buyer sizing, materials, and FAQs",
      ],
    },
    {
      title: "High-ROAS Google Shopping & Performance Max",
      description:
        "Restructuring Google Merchant Center feeds with optimized titles and tiered bidding to dominate high-margin product sales.",
      actions: [
        "Feed title optimization injecting high-volume buyer search terms",
        "Separating branded vs non-branded search queries to prevent wasted budget",
        "Asset group customization with custom imagery and value-proposition copy",
      ],
    },
    {
      title: "Mobile Product Page Conversion Optimization (CRO)",
      description:
        "Refining product detail page layouts to maximize Average Order Value (AOV) and reduce cart abandonment.",
      actions: [
        "1-click mobile checkout with Apple Pay, Google Pay, and Shop Pay integration",
        "Strategic bundling, tiered volume discounts, and upsell triggers",
        "Dynamic real customer social proof and verified photo review galleries",
      ],
    },
  ],
  kpis: [
    {
      metric: "3X",
      label: "Quarterly Revenue Expansion",
      benchmark: "Across combined paid and organic channels",
    },
    {
      metric: "4.5x+",
      label: "Target Blended ROAS",
      benchmark: "Maintaining profitable first-order unit economics",
    },
    {
      metric: "38%+",
      label: "Organic Search Revenue Share",
      benchmark: "Reducing over-reliance on paid social ads",
    },
  ],
  caseStudyHighlight: {
    title: "Modern Lifestyle Goods & Apparel Brand",
    result: "3X Quarterly Revenue Lift",
    summary:
      "Overhauled product feed optimization, launched tiered Performance Max campaigns, and increased mobile collection page speed to 98/100.",
    href: "/case-studies#ecommerce-scale",
  },
  recommendedServices: [
    {
      title: "Google Ads Management",
      href: "/services/google-ads",
      role: "Dominate Google Shopping and Performance Max with controlled ROAS.",
    },
    {
      title: "SEO & Organic Search",
      href: "/services/seo",
      role: "Build permanent organic traffic across high-volume product category terms.",
    },
    {
      title: "Website Optimization",
      href: "/services/website-optimization",
      role: "Accelerate mobile checkout speed and eliminate cart abandonment friction.",
    },
  ],
};

export default function EcommercePage() {
  return <IndustryPageTemplate data={ecommerceData} />;
}
