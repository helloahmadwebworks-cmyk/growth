import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://growbymasters.com";
  const currentDate = new Date().toISOString().split("T")[0];

  interface RouteConfig {
    path: string;
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
    priority: number;
    lastModified?: string;
  }

  const routeConfigs: RouteConfig[] = [
    // Core Homepage
    { path: "", changeFrequency: "daily", priority: 1.0, lastModified: currentDate },

    // Services (High Commercial Priority)
    { path: "/services", changeFrequency: "weekly", priority: 0.9, lastModified: currentDate },
    { path: "/services/seo", changeFrequency: "weekly", priority: 0.9, lastModified: currentDate },
    { path: "/services/local-seo", changeFrequency: "weekly", priority: 0.9, lastModified: currentDate },
    { path: "/services/web-design-development", changeFrequency: "weekly", priority: 0.9, lastModified: currentDate },
    { path: "/services/google-ads", changeFrequency: "weekly", priority: 0.9, lastModified: currentDate },
    { path: "/services/meta-ads", changeFrequency: "weekly", priority: 0.9, lastModified: currentDate },
    { path: "/services/social-media-marketing", changeFrequency: "weekly", priority: 0.9, lastModified: currentDate },
    { path: "/services/graphic-design", changeFrequency: "weekly", priority: 0.9, lastModified: currentDate },
    { path: "/services/branding", changeFrequency: "weekly", priority: 0.9, lastModified: currentDate },
    { path: "/services/email-marketing", changeFrequency: "weekly", priority: 0.9, lastModified: currentDate },
    { path: "/services/website-optimization", changeFrequency: "weekly", priority: 0.9, lastModified: currentDate },
    { path: "/services/lead-generation", changeFrequency: "weekly", priority: 0.9, lastModified: currentDate },
    { path: "/services/content-marketing", changeFrequency: "weekly", priority: 0.9, lastModified: currentDate },
    { path: "/services/analytics-tracking", changeFrequency: "weekly", priority: 0.9, lastModified: currentDate },

    // Industries
    { path: "/industries", changeFrequency: "weekly", priority: 0.85, lastModified: currentDate },
    { path: "/industries/home-services", changeFrequency: "weekly", priority: 0.85, lastModified: currentDate },
    { path: "/industries/professional-services", changeFrequency: "weekly", priority: 0.85, lastModified: currentDate },
    { path: "/industries/ecommerce", changeFrequency: "weekly", priority: 0.85, lastModified: currentDate },
    { path: "/industries/b2b-saas", changeFrequency: "weekly", priority: 0.85, lastModified: currentDate },
    { path: "/industries/healthcare", changeFrequency: "weekly", priority: 0.85, lastModified: currentDate },
    { path: "/industries/real-estate", changeFrequency: "weekly", priority: 0.85, lastModified: currentDate },

    // Proof & Thought Leadership
    { path: "/case-studies", changeFrequency: "weekly", priority: 0.8, lastModified: currentDate },
    { path: "/insights", changeFrequency: "daily", priority: 0.8, lastModified: currentDate },
    { path: "/insights/local-seo-home-services", changeFrequency: "monthly", priority: 0.75, lastModified: "2026-10-10" },
    { path: "/insights/google-ads-vs-seo", changeFrequency: "monthly", priority: 0.75, lastModified: "2026-10-08" },
    { path: "/insights/website-conversion-mistakes", changeFrequency: "monthly", priority: 0.75, lastModified: "2026-10-05" },

    // Corporate & Consultation
    { path: "/about", changeFrequency: "monthly", priority: 0.7, lastModified: currentDate },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8, lastModified: currentDate },
    { path: "/book-call", changeFrequency: "weekly", priority: 0.9, lastModified: currentDate },
    { path: "/audit", changeFrequency: "weekly", priority: 0.85, lastModified: currentDate },

    // Compliance & Legal
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3, lastModified: "2026-10-01" },
    { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.3, lastModified: "2026-10-01" },
  ];

  return routeConfigs.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: route.lastModified || currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
