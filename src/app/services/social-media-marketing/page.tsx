import type { Metadata } from "next";
import {
  Share2,
  Calendar,
  MessageSquare,
  Users2,
} from "lucide-react";
import ServicePageTemplate, { ServicePageProps } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Social Media Marketing — Organic Brand Presence & Thought Leadership",
  description:
    "Build brand authority, deepen commercial trust, and nurture your audience with strategic organic social media management, editorial content calendars, and community engagement.",
  alternates: {
    canonical: "/services/social-media-marketing",
  },
  openGraph: {
    title: "Social Media Marketing — Organic Brand Presence | GrowByMasters",
    description:
      "Build brand authority, deepen commercial trust, and nurture your audience with strategic organic social media management, editorial content calendars, and community engagement.",
    url: "https://growbymasters.com/services/social-media-marketing",
    siteName: "GrowByMasters",
    images: [
      {
        url: "/images/hero-globe.jpg",
        width: 1200,
        height: 630,
        alt: "GrowByMasters Social Media Marketing Services",
      },
    ],
  },
};

const socialMediaData: ServicePageProps = {
  slug: "social-media-marketing",
  badge: "Organic Brand Authority",
  title: "Social Media Marketing",
  subtitle:
    "Transform company social channels into credible touchpoints that validate your business, articulate thought leadership, and cultivate genuine relationships with prospective buyers.",
  deliverablesSummary: [
    "Channel Architecture & Bio Optimization (LinkedIn, Instagram, X, Facebook)",
    "Monthly Editorial Content Calendar & Post Scheduling",
    "Executive Thought-Leadership & Educational Carousel Assets",
    "Active Community Moderation & Inbound Message Routing",
    "Monthly Channel Performance & Organic Engagement Reporting",
  ],
  overview: {
    heading: "Organic Social Presence Built to Validate Commercial Credibility.",
    description: [
      "When qualified prospects research your company after discovering you via search or referral, dormant or generic social profiles erode trust. Our organic social media marketing ensures every channel reflects an active, authoritative organization that leads its market.",
      "We deliberately separate organic social management from paid media: organic channels nurture relationships, communicate institutional expertise, and support employee advocacy. For direct-response paid advertising and ROAS scaling, explore our dedicated Meta Ads Management framework.",
    ],
  },
  pillars: [
    {
      icon: Users2,
      title: "Profile & Channel Optimization",
      description:
        "Standardizing visual identity, keyword-optimized bios, featured resource links, and verification across key corporate accounts.",
      bullets: [
        "Search-optimized profile bios and commercial positioning statements",
        "Custom banner graphics and unified visual asset branding",
        "Strategic featured links directing visitors to lead capture audits",
        "Clean multi-channel handle governance and directory linking",
      ],
    },
    {
      icon: Calendar,
      title: "Editorial Strategy & Content Calendars",
      description:
        "Building predictable monthly publishing schedules balancing industry insights, case spotlights, and educational frameworks.",
      bullets: [
        "Structured thematic pillars (Productivity, Case Lessons, Industry Trends)",
        "Advance content staging with transparent 7-day client approval windows",
        "High-density educational carousels and static visual infographics",
        "Platform-specific formatting calibrated for LinkedIn and Instagram algorithms",
      ],
    },
    {
      icon: Share2,
      title: "Executive Thought Leadership",
      description:
        "Positioning founders and practice leaders as trusted authorities through nuanced editorial commentary and strategic viewpoints.",
      bullets: [
        "Executive ghostwriting based on brief 30-minute monthly strategy interviews",
        "Nuanced commentary on regulatory, economic, and operational sector shifts",
        "Employee advocacy distribution kits to amplify team reach",
        "Zero generic motivational fluff—only actionable domain expertise",
      ],
    },
    {
      icon: MessageSquare,
      title: "Community Moderation & Response Routing",
      description:
        "Protecting brand reputation and capturing warm business inquiries through responsive comment moderation and DM routing.",
      bullets: [
        "Daily comment monitoring and brand sentiment oversight",
        "Prompt routing of prospect inquiries directly to internal sales teams",
        "Standardized response guidelines aligned with brand voice",
        "Spam, bot, and malicious link elimination within active comment threads",
      ],
    },
  ],
  process: [
    {
      step: "01",
      title: "Channel Audit",
      detail:
        "We review existing profiles, audience demographics, competitor benchmarks, and historical engagement to establish your baseline.",
    },
    {
      step: "02",
      title: "Content Playbook",
      detail:
        "We define brand voice rules, core educational themes, design layout templates, and a recurring monthly editorial cadence.",
    },
    {
      step: "03",
      title: "Staging & Approvals",
      detail:
        "Assets and captions are staged inside our shared scheduling portal where your stakeholders review and approve every post prior to broadcast.",
    },
    {
      step: "04",
      title: "Publishing & Review",
      detail:
        "We manage scheduled publishing, monitor incoming comments, and deliver monthly reports tracking engagement, reach, and profile clicks.",
    },
  ],
  idealFor: [
    "B2B & Professional Services",
    "Consulting & Advisory Firms",
    "Specialty Home Service Contractors",
    "Healthcare & Clinical Practices",
    "High-Ticket E-commerce Brands",
  ],
  sampleConcepts: [
    {
      category: "Executive Thought Leadership",
      title: "B2B Founder Authority Series",
      description:
        "A representative 4-week editorial framework featuring weekly teardowns of common industry misconceptions, designed for LinkedIn senior decision-makers.",
      deliverables: [
        "Weekly 400-word long-form perspective post",
        "Accompanying 8-slide educational PDF carousel",
        "Prospect inquiry qualification DM script",
      ],
    },
    {
      category: "Visual Information Design",
      title: "Educational Carousel Playbook",
      description:
        "A multi-slide visual template translating dense analytical data and operational processes into easily digestable, saveable social graphics.",
      deliverables: [
        "Consistent brand typographic layout system",
        "Optimized 4:5 mobile portrait aspect ratio",
        "Strong visual hook slide and actionable recap slide",
      ],
    },
    {
      category: "Operational Governance",
      title: "Corporate Channel Governance Kit",
      description:
        "Standard operating blueprint for brand consistency across distributed team members, profile banners, and outbound commenting.",
      deliverables: [
        "Comprehensive bio copy matrix across 4 platforms",
        "Standardized escalation workflow for customer feedback",
        "Monthly engagement scorecards and qualitative trend log",
      ],
    },
  ],
  faqs: [
    {
      question: "How is organic Social Media Marketing different from paid Meta Ads?",
      answer:
        "Organic Social Media Marketing manages your company's public profile presence, editorial calendar, and community interactions without purchasing ad spend. It builds long-term authority and validates your reputation when prospects research you. In contrast, Meta Ads (Facebook & Instagram) is a paid direct-response channel designed to generate immediate commercial inquiries and sales via algorithmic targeting and dedicated landing pages.",
    },
    {
      question: "Which social platforms do you manage?",
      answer:
        "We primarily focus on LinkedIn, Instagram, Facebook, and X (Twitter). We recommend focusing effort where your target commercial buyers actually spend time, rather than attempting to maintain an active presence everywhere without purpose.",
    },
    {
      question: "Do you provide on-site video production or custom videography?",
      answer:
        "No. We specialize in editorial copywriting, static graphic design, vector infographics, and multi-slide carousels. While we are happy to edit and repurpose video footage provided directly by your team, we do not provide on-location camera crews or physical video shoots.",
    },
    {
      question: "How do we approve posts before they go live?",
      answer:
        "Nothing goes live without your sign-off. We prepare monthly content batches 7 to 10 days in advance inside a collaborative preview portal where your designated reviewers can approve or request revisions with a single click.",
    },
    {
      question: "How do you measure success on organic social channels?",
      answer:
        "We track meaningful metrics rather than vanity numbers: qualified profile visits, referral traffic to your core website, engagement rate among industry peers, and inbound inquiries routed directly from direct messages.",
    },
  ],
  relatedServices: [
    {
      title: "Meta Ads Management",
      href: "/services/meta-ads",
      description:
        "Scale targeted paid advertising across Facebook and Instagram to drive immediate buyer inquiries and measurable ROAS.",
    },
    {
      title: "Graphic Design",
      href: "/services/graphic-design",
      description:
        "Get bespoke social creatives, presentation decks, and marketing collateral designed with cohesive brand discipline.",
    },
    {
      title: "Content Marketing",
      href: "/services/content-marketing",
      description:
        "Deepen domain authority with long-form editorial guides, SEO topic clusters, and authoritative industry articles.",
    },
  ],
};

export default function SocialMediaMarketingPage() {
  return <ServicePageTemplate data={socialMediaData} />;
}
