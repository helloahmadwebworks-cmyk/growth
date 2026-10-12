import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#101A24",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://growbymasters.com"),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "Digital Marketing Agency for Business Growth | GrowByMasters",
    template: "%s | GrowByMasters",
  },
  description:
    "GrowByMasters is a digital marketing agency helping ambitious businesses scale with high-impact SEO, Google Ads management, website optimization, and qualified lead generation systems.",
  keywords: [
    "Digital Marketing Agency",
    "Digital Growth Agency",
    "B2B Growth Consulting",
    "SEO Services",
    "Local SEO",
    "Google Ads Management",
    "Website Optimization",
    "Lead Generation Systems",
    "Analytics and Tracking",
  ],
  authors: [{ name: "GrowByMasters" }],
  creator: "GrowByMasters",
  publisher: "GrowByMasters",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://growbymasters.com",
    siteName: "GrowByMasters",
    title: "Digital Marketing Agency for Business Growth | GrowByMasters",
    description:
      "GrowByMasters is a digital marketing agency helping ambitious businesses scale with high-impact SEO, Google Ads management, website optimization, and qualified lead generation systems.",
    images: [
      {
        url: "/images/hero-globe.jpg",
        width: 1200,
        height: 630,
        alt: "GrowByMasters Digital Marketing Agency for Business Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency for Business Growth | GrowByMasters",
    description:
      "GrowByMasters is a digital marketing agency helping ambitious businesses scale with high-impact SEO, Google Ads management, website optimization, and qualified lead generation systems.",
    images: ["/images/hero-globe.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GrowByMasters",
    description:
      "Digital marketing agency and growth consultancy helping businesses build predictable client acquisition systems, SEO, Google Ads, and analytics tracking.",
    url: "https://growbymasters.com",
    logo: "https://growbymasters.com/images/hero-globe.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Aligarh",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    areaServed: [
      "United States",
      "Canada",
      "Australia",
      "United Arab Emirates",
      "Saudi Arabia",
      "Qatar",
      "India",
    ],
    priceRange: "$$",
    email: "contact@growbymasters.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Inquiries",
      email: "contact@growbymasters.com",
      availableLanguage: ["English"],
    },
    knowsAbout: [
      "Search Engine Optimization",
      "Local SEO",
      "Website Design and Custom Web Development",
      "Google Ads Management",
      "Website Conversion Rate Optimization",
      "Inbound Lead Generation Systems",
      "Marketing Analytics and Attribution",
    ],
    sameAs: [
      "https://www.linkedin.com/company/growbymasters",
      "https://twitter.com/growbymasters",
    ],
  };

  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#1D2732] selection:bg-[#D8B477] selection:text-[#101A24]">
        <Suspense fallback={<header className="h-20 bg-[#101A24]" />}>
          <Navbar />
        </Suspense>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
