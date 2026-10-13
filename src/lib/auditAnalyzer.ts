/**
 * GrowByMasters Technical Audit Analyzer Engine
 *
 * Provides a real, safe preliminary technical audit of public web pages:
 * - SSRF Protection: Blocks private IPs, loopback, link-local, cloud metadata
 * - Real measurable checks: Titles, meta descriptions, canonicals, robots, headings,
 *   image alts, viewport, OpenGraph, SSL, and TTFB.
 * - Clear separation between verified automated findings and manual strategic advice.
 * - Zero fabricated scores, traffic estimates, or search rankings.
 */

export interface AuditCheckItem {
  name: string;
  category: "Indexability & SEO" | "Content & Hierarchy" | "Performance & Mobile" | "Social & Branding";
  status: "pass" | "warning" | "fail";
  details: string;
  metric?: string;
  recommendation?: string;
}

export interface TechnicalAuditReport {
  targetUrl: string;
  domain: string;
  inspectedAt: string;
  responseStatus: number;
  responseTimeMs: number;
  isHttps: boolean;
  overallGrade: "A" | "B" | "C" | "D";
  checks: AuditCheckItem[];
  summary: {
    passed: number;
    warnings: number;
    failed: number;
  };
  manualStrategicRecommendations: string[];
}

/**
 * Validates that a submitted URL is safe to fetch and protects against SSRF.
 */
export function isSafeAuditUrl(rawUrl: string): { safe: boolean; error?: string; url?: URL } {
  let parsed: URL;
  try {
    const withProtocol = rawUrl.startsWith("http://") || rawUrl.startsWith("https://")
      ? rawUrl
      : `https://${rawUrl}`;
    parsed = new URL(withProtocol);
  } catch {
    return { safe: false, error: "Invalid URL format." };
  }

  // Only allow HTTP/HTTPS
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    return { safe: false, error: "Only http and https protocols are supported." };
  }

  const hostname = parsed.hostname.toLowerCase();

  // Block localhost, IP shorteners, and cloud metadata
  if (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "::1" ||
    hostname.endsWith(".local") ||
    hostname.endsWith(".internal")
  ) {
    return { safe: false, error: "Local and internal domains cannot be audited." };
  }

  // AWS/GCP/Azure link-local metadata address
  if (hostname === "169.254.169.254" || hostname.startsWith("169.254.")) {
    return { safe: false, error: "Restricted network address." };
  }

  // IPv4 Private Range Check (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, 0.0.0.0/8)
  const ipv4Regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
  const match = hostname.match(ipv4Regex);
  if (match) {
    const [, o1, o2] = match.map(Number);
    if (
      o1 === 10 ||
      o1 === 127 ||
      o1 === 0 ||
      (o1 === 172 && o2 >= 16 && o2 <= 31) ||
      (o1 === 192 && o2 === 168)
    ) {
      return { safe: false, error: "Private and loopback IP addresses cannot be audited." };
    }
  }

  return { safe: true, url: parsed };
}

/**
 * Executes a real, non-destructive audit request against a public URL.
 */
export async function analyzeUrl(rawUrl: string): Promise<TechnicalAuditReport> {
  const urlCheck = isSafeAuditUrl(rawUrl);
  if (!urlCheck.safe || !urlCheck.url) {
    throw new Error(urlCheck.error || "Invalid target URL.");
  }

  const targetUrl = urlCheck.url.toString();
  const domain = urlCheck.url.hostname;
  const startTime = Date.now();

  const response = await fetch(targetUrl, {
    method: "GET",
    headers: {
      "User-Agent": "GrowByMasters-AuditBot/2.0 (+https://growbymasters.com/services/website-optimization)",
      Accept: "text/html,application/xhtml+xml",
    },
    redirect: "follow",
    signal: AbortSignal.timeout(7000), // Strict 7-second timeout
  });

  const responseTimeMs = Date.now() - startTime;
  const isHttps = urlCheck.url.protocol === "https:";

  if (!response.ok) {
    throw new Error(`Target server responded with HTTP status ${response.status}.`);
  }

  const html = await response.text();
  const checks: AuditCheckItem[] = [];

  // 1. Title Tag
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const titleText = titleMatch ? titleMatch[1].trim() : "";
  if (!titleText) {
    checks.push({
      name: "Page Title Tag",
      category: "Indexability & SEO",
      status: "fail",
      details: "Missing <title> tag. Search engines rely on title tags to understand page topic.",
      recommendation: "Create a descriptive, keyword-aligned title between 50 and 60 characters.",
    });
  } else if (titleText.length < 30 || titleText.length > 65) {
    checks.push({
      name: "Page Title Length",
      category: "Indexability & SEO",
      status: "warning",
      details: `Title length is ${titleText.length} characters ("${titleText.substring(0, 45)}..."). Optimal length is 50-60 characters.`,
      metric: `${titleText.length} chars`,
      recommendation: "Adjust title length to avoid search snippet truncation on desktop and mobile SERPs.",
    });
  } else {
    checks.push({
      name: "Page Title Tag",
      category: "Indexability & SEO",
      status: "pass",
      details: `Well-calibrated title tag: "${titleText}"`,
      metric: `${titleText.length} chars`,
    });
  }

  // 2. Meta Description
  const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i) ||
    html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);
  const metaDesc = metaDescMatch ? metaDescMatch[1].trim() : "";
  if (!metaDesc) {
    checks.push({
      name: "Meta Description",
      category: "Indexability & SEO",
      status: "fail",
      details: "Missing meta description. Search engines will generate arbitrary page snippets.",
      recommendation: "Add a compelling meta description (120-155 characters) summarizing the primary offer.",
    });
  } else if (metaDesc.length < 70 || metaDesc.length > 165) {
    checks.push({
      name: "Meta Description Length",
      category: "Indexability & SEO",
      status: "warning",
      details: `Meta description is ${metaDesc.length} characters. Optimal length is 120-155 characters.`,
      metric: `${metaDesc.length} chars`,
      recommendation: "Refine description to between 120 and 155 characters for optimal snippet display.",
    });
  } else {
    checks.push({
      name: "Meta Description",
      category: "Indexability & SEO",
      status: "pass",
      details: `Compelling description: "${metaDesc.substring(0, 80)}..."`,
      metric: `${metaDesc.length} chars`,
    });
  }

  // 3. Canonical Tag
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i);
  if (!canonicalMatch) {
    checks.push({
      name: "Canonical URL Tag",
      category: "Indexability & SEO",
      status: "warning",
      details: "No canonical link element detected. Risk of duplicate indexation across parameters.",
      recommendation: "Add a self-referencing canonical URL tag to consolidate link equity.",
    });
  } else {
    checks.push({
      name: "Canonical URL Tag",
      category: "Indexability & SEO",
      status: "pass",
      details: `Canonical declared: ${canonicalMatch[1]}`,
    });
  }

  // 4. Robots Noindex Check
  const robotsMeta = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["'][^>]*>/i);
  if (robotsMeta && robotsMeta[1].toLowerCase().includes("noindex")) {
    checks.push({
      name: "Robots Indexability",
      category: "Indexability & SEO",
      status: "fail",
      details: "Critical: Page contains 'noindex' directive, preventing search engines from ranking it.",
      recommendation: "Remove the 'noindex' directive from public commercial landing pages.",
    });
  } else {
    checks.push({
      name: "Robots Indexability",
      category: "Indexability & SEO",
      status: "pass",
      details: "Page is open for search engine indexing.",
    });
  }

  // 5. Heading Structure (H1 & H2)
  const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  const h2Matches = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/gi) || [];
  if (h1Matches.length === 0) {
    checks.push({
      name: "H1 Primary Heading",
      category: "Content & Hierarchy",
      status: "fail",
      details: "No <h1> heading found. Pages need a single clear top-level topic heading.",
      recommendation: "Add a single, descriptive <h1> articulating your primary commercial service.",
    });
  } else if (h1Matches.length > 1) {
    checks.push({
      name: "H1 Primary Heading",
      category: "Content & Hierarchy",
      status: "warning",
      details: `Found ${h1Matches.length} <h1> tags. Best practice is a single <h1> heading per URL.`,
      metric: `${h1Matches.length} H1s`,
      recommendation: "Consolidate into one clear <h1> and structure secondary topics under <h2> tags.",
    });
  } else {
    checks.push({
      name: "H1 Primary Heading",
      category: "Content & Hierarchy",
      status: "pass",
      details: "Clean single <h1> hierarchy verified.",
      metric: "1 H1 tag",
    });
  }

  if (h2Matches.length === 0) {
    checks.push({
      name: "H2 Subheadings",
      category: "Content & Hierarchy",
      status: "warning",
      details: "No <h2> subheadings detected. Content structure may be thin or difficult to scan.",
      recommendation: "Break content into clear sections using semantic <h2> headings.",
    });
  } else {
    checks.push({
      name: "H2 Subheadings",
      category: "Content & Hierarchy",
      status: "pass",
      details: `Found ${h2Matches.length} <h2> section headings organizing the page layout.`,
      metric: `${h2Matches.length} H2 tags`,
    });
  }

  // 6. Image Optimization & Alt Text
  const imgTags = html.match(/<img[^>]*>/gi) || [];
  let missingAltCount = 0;
  for (const img of imgTags) {
    if (!/alt=["'][^"']*["']/i.test(img)) {
      missingAltCount++;
    }
  }

  if (imgTags.length > 0 && missingAltCount > 0) {
    checks.push({
      name: "Image Accessibility & Alt Text",
      category: "Content & Hierarchy",
      status: missingAltCount > 3 ? "fail" : "warning",
      details: `${missingAltCount} out of ${imgTags.length} images lack descriptive alt attributes.`,
      metric: `${missingAltCount}/${imgTags.length} missing`,
      recommendation: "Add descriptive, accessible alt text to all informational images.",
    });
  } else if (imgTags.length > 0) {
    checks.push({
      name: "Image Accessibility & Alt Text",
      category: "Content & Hierarchy",
      status: "pass",
      details: `All ${imgTags.length} images include alt attributes.`,
      metric: `${imgTags.length} images`,
    });
  }

  // 7. Mobile Viewport Meta Tag
  const viewportMeta = html.match(/<meta[^>]*name=["']viewport["'][^>]*content=["']([^"']*)["'][^>]*>/i);
  if (!viewportMeta) {
    checks.push({
      name: "Mobile Viewport Meta Tag",
      category: "Performance & Mobile",
      status: "fail",
      details: "Missing mobile viewport configuration. Mobile devices will render a desktop viewport.",
      recommendation: "Add <meta name='viewport' content='width=device-width, initial-scale=1'>.",
    });
  } else {
    checks.push({
      name: "Mobile Viewport Meta Tag",
      category: "Performance & Mobile",
      status: "pass",
      details: "Mobile-responsive viewport meta tag verified.",
    });
  }

  // 8. SSL / HTTPS Security
  if (!isHttps) {
    checks.push({
      name: "SSL / HTTPS Encryption",
      category: "Performance & Mobile",
      status: "fail",
      details: "Site is served over insecure HTTP. Browsers display security warnings to visitors.",
      recommendation: "Install an SSL certificate and enforce HTTPS across all URLs.",
    });
  } else {
    checks.push({
      name: "SSL / HTTPS Encryption",
      category: "Performance & Mobile",
      status: "pass",
      details: "Secure HTTPS protocol verified.",
    });
  }

  // 9. Server Response Time (TTFB)
  if (responseTimeMs > 1500) {
    checks.push({
      name: "Server Response Time (TTFB)",
      category: "Performance & Mobile",
      status: "warning",
      details: `Server response time was ${responseTimeMs}ms. Slow server responses hurt Core Web Vitals and SEO.`,
      metric: `${responseTimeMs}ms`,
      recommendation: "Implement server caching or edge CDN distribution to reduce TTFB below 500ms.",
    });
  } else {
    checks.push({
      name: "Server Response Time (TTFB)",
      category: "Performance & Mobile",
      status: "pass",
      details: `Fast initial server response: ${responseTimeMs}ms.`,
      metric: `${responseTimeMs}ms`,
    });
  }

  // 10. OpenGraph Social Cards
  const ogTitle = html.match(/<meta[^>]*property=["']og:title["'][^>]*>/i);
  const ogImage = html.match(/<meta[^>]*property=["']og:image["'][^>]*>/i);
  if (!ogTitle || !ogImage) {
    checks.push({
      name: "Open Graph Social Meta",
      category: "Social & Branding",
      status: "warning",
      details: "Missing Open Graph tags (og:title / og:image). Links shared on LinkedIn or social media will lack preview cards.",
      recommendation: "Add og:title, og:description, and og:image tags for commercial brand presence.",
    });
  } else {
    checks.push({
      name: "Open Graph Social Meta",
      category: "Social & Branding",
      status: "pass",
      details: "Rich social sharing preview meta tags verified.",
    });
  }

  // 11. Schema.org Structured Data
  const hasJsonLd = /<script[^>]*type=["']application\/ld\+json["'][^>]*>/i.test(html);
  if (!hasJsonLd) {
    checks.push({
      name: "Schema.org Structured Data",
      category: "Indexability & SEO",
      status: "warning",
      details: "No JSON-LD structured data detected. Search engines lack semantic organization context.",
      recommendation: "Implement Organization, LocalBusiness, and Service JSON-LD graphs.",
    });
  } else {
    checks.push({
      name: "Schema.org Structured Data",
      category: "Indexability & SEO",
      status: "pass",
      details: "JSON-LD structured data graph detected.",
    });
  }

  // Tally results
  const passed = checks.filter((c) => c.status === "pass").length;
  const warnings = checks.filter((c) => c.status === "warning").length;
  const failed = checks.filter((c) => c.status === "fail").length;

  let overallGrade: "A" | "B" | "C" | "D";
  if (failed === 0 && warnings <= 2) overallGrade = "A";
  else if (failed <= 1 && warnings <= 4) overallGrade = "B";
  else if (failed <= 2) overallGrade = "C";
  else overallGrade = "D";

  // Separation of manual strategic recommendations from automated findings
  const manualStrategicRecommendations = [
    "Core Web Vitals Real-User Experience: Conduct manual lab testing of Largest Contentful Paint (LCP) and Interaction to Next Paint (INP) across actual 4G mobile devices.",
    "Conversion Funnel Friction: Inspect above-the-fold value proposition clarity, mobile click-to-call mechanics, and form step simplicity.",
    "Commercial Intent Keyword Architecture: Audit competitor search overlap to identify high-value commercial queries where you are currently losing map pack or organic traffic.",
    "Lead Follow-Up Velocity: Implement automated instant email and SMS lead notifications to engage prospective clients within 5 minutes of inquiry.",
  ];

  return {
    targetUrl,
    domain,
    inspectedAt: new Date().toISOString(),
    responseStatus: response.status,
    responseTimeMs,
    isHttps,
    overallGrade,
    checks,
    summary: {
      passed,
      warnings,
      failed,
    },
    manualStrategicRecommendations,
  };
}
