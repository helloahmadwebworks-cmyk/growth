import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import Script from "next/script";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AttributionTracker from "@/components/AttributionTracker";

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
    "GrowByMasters is a digital marketing agency helping ambitious businesses scale with high-impact SEO, paid advertising, web engineering, graphic design, branding, and qualified lead generation systems.",
  keywords: [
    "Digital Marketing Agency",
    "Digital Growth Agency",
    "B2B Growth Consulting",
    "SEO Services",
    "Local SEO",
    "Google Ads Management",
    "Meta Ads Management",
    "Social Media Marketing",
    "Graphic Design Services",
    "Branding and Visual Identity",
    "Email Marketing",
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
      "GrowByMasters is a digital marketing agency helping ambitious businesses scale with high-impact SEO, paid advertising, web engineering, graphic design, branding, and qualified lead generation systems.",
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
      "GrowByMasters is a digital marketing agency helping ambitious businesses scale with high-impact SEO, paid advertising, web engineering, graphic design, branding, and qualified lead generation systems.",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GrowByMasters",
    description:
      "Digital marketing agency and growth consultancy helping businesses build predictable client acquisition systems, SEO, paid media, visual design, and analytics tracking.",
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
      "Meta Ads Management",
      "Social Media Marketing and Organic Brand Presence",
      "Commercial Graphic Design and Marketing Collateral",
      "Brand Identity Systems and Visual Guidelines",
      "Email Marketing and Lifecycle Lead Nurturing",
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
        {/* Google Analytics 4 (Only when NEXT_PUBLIC_GA_ID configured) */}
        {gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="google-analytics-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                    anonymize_ip: true,
                  });
                `,
              }}
            />
          </>
        )}
        {/* Google Tag Manager (Only when NEXT_PUBLIC_GTM_ID configured) */}
        {gtmId && (
          <Script
            id="google-tag-manager-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#1D2732] selection:bg-[#D8B477] selection:text-[#101A24]">
        {/* UTM Attribution Extraction */}
        <Suspense fallback={null}>
          <AttributionTracker />
        </Suspense>
        <Suspense fallback={<header className="h-20 bg-[#101A24]" />}>
          <Navbar />
        </Suspense>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
