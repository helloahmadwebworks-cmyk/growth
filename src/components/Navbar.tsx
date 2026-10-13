"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Search,
  Target,
  Globe,
  Users,
  PenTool,
  BarChart3,
  Building2,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  Home as HomeIcon,
  Cpu,
  Code2,
  MapPin,
  Megaphone,
  Share2,
  Palette,
  Layers,
  Mail,
} from "lucide-react";

const serviceLinks = [
  {
    name: "SEO & Organic Search",
    href: "/services/seo",
    desc: "Rank higher and capture high-intent commercial buyers.",
    icon: Search,
  },
  {
    name: "Local SEO & Google Maps",
    href: "/services/local-seo",
    desc: "Own the top 3 spots in Google Local Map Packs.",
    icon: MapPin,
  },
  {
    name: "Web Design & Development",
    href: "/services/web-design-development",
    desc: "Custom Next.js web systems built for inbound lead velocity.",
    icon: Code2,
  },
  {
    name: "Google Ads Management",
    href: "/services/google-ads",
    desc: "Drive instant high-intent traffic with controlled CPA.",
    icon: Target,
  },
  {
    name: "Meta Ads Management",
    href: "/services/meta-ads",
    desc: "Scale paid acquisition on Facebook & Instagram with proven ROAS.",
    icon: Megaphone,
  },
  {
    name: "Social Media Marketing",
    href: "/services/social-media-marketing",
    desc: "Build organic authority, executive presence, and audience trust.",
    icon: Share2,
  },
  {
    name: "Graphic Design",
    href: "/services/graphic-design",
    desc: "High-CTR ad creatives, brochures, pitch decks, and brand visuals.",
    icon: Palette,
  },
  {
    name: "Branding & Visual Identity",
    href: "/services/branding",
    desc: "Logo systems, positioning, color palettes, and brand guidelines.",
    icon: Layers,
  },
  {
    name: "Email Marketing & Nurturing",
    href: "/services/email-marketing",
    desc: "Automated lifecycle sequences, deliverability, and re-activation.",
    icon: Mail,
  },
  {
    name: "Website Optimization",
    href: "/services/website-optimization",
    desc: "Conversion-first architecture engineered for pipeline velocity.",
    icon: Globe,
  },
  {
    name: "Lead Generation Systems",
    href: "/services/lead-generation",
    desc: "Full-funnel inbound forms, routing, and qualified capture.",
    icon: Users,
  },
  {
    name: "Content Marketing",
    href: "/services/content-marketing",
    desc: "Authority-building editorial assets that convert readers.",
    icon: PenTool,
  },
  {
    name: "Analytics & Tracking",
    href: "/services/analytics-tracking",
    desc: "Verified GA4 attribution and conversion accountability.",
    icon: BarChart3,
  },
];

const industryLinks = [
  {
    name: "Home Services",
    href: "/industries/home-services",
    desc: "HVAC, roofing, plumbing, and specialty contractors.",
    icon: HomeIcon,
  },
  {
    name: "Healthcare",
    href: "/industries/healthcare",
    desc: "Dental practices, private clinics, and wellness providers.",
    icon: Stethoscope,
  },
  {
    name: "E-commerce",
    href: "/industries/ecommerce",
    desc: "Shopify stores, DTC brands, and multi-channel sellers.",
    icon: ShoppingBag,
  },
  {
    name: "Professional Services",
    href: "/industries/professional-services",
    desc: "Law firms, accounting practices, and B2B advisors.",
    icon: Briefcase,
  },
  {
    name: "Real Estate",
    href: "/industries/real-estate",
    desc: "Brokerages, developers, and property investment firms.",
    icon: Building2,
  },
  {
    name: "B2B & SaaS",
    href: "/industries/b2b-saas",
    desc: "Software providers, manufacturers, and tech agencies.",
    icon: Cpu,
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset menus on route change during render
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setIndustriesDropdown(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#101A24]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#223244]"
          : "bg-[#101A24] border-b border-[#1c2b3a]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Wordmark */}
          <Link
            href="/"
            className="flex flex-col group transition-transform duration-200"
            aria-label="GrowByMasters Home"
          >
            <span className="font-serif-heading text-2xl sm:text-[26px] tracking-tight text-white font-normal group-hover:text-[#D8B477] transition-colors">
              GrowByMasters
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C959D] -mt-1 font-medium">
              Digital Growth & Consulting
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "text-[#D8B477]"
                  : "text-[#E6EAF0] hover:text-[#D8B477]"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                href="/services"
                className={`px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors ${
                  pathname.startsWith("/services")
                    ? "text-[#D8B477]"
                    : "text-[#E6EAF0] hover:text-[#D8B477]"
                }`}
                aria-expanded={servicesDropdown}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdown ? "rotate-180 text-[#D8B477]" : "text-[#8C959D]"
                  }`}
                />
              </Link>

              {servicesDropdown && (
                <div className="absolute left-0 mt-1 w-[640px] xl:w-[680px] bg-[#14202C] border border-[#223244] rounded-xl shadow-2xl shadow-black/50 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#D8B477] px-3 py-1.5 border-b border-[#223244]/60 flex items-center justify-between">
                    <span>Full-Service Growth Capabilities (13 Solutions)</span>
                    <span className="text-[10px] text-[#8C959D] font-normal">Modular & Integrated</span>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-1">
                    {serviceLinks.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#1A2938] transition-colors group"
                        >
                          <div className="w-7 h-7 rounded-md bg-[#223244] group-hover:bg-[#D8B477]/20 flex items-center justify-center shrink-0 transition-colors mt-0.5">
                            <Icon className="w-3.5 h-3.5 text-[#D8B477]" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white group-hover:text-[#D8B477] transition-colors leading-tight">
                              {service.name}
                            </div>
                            <div className="text-[11px] text-[#8C959D] line-clamp-1 leading-normal">
                              {service.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="pt-2 mt-2 border-t border-[#223244]/60 px-3 pb-1">
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-[#D8B477] hover:underline flex items-center justify-between"
                    >
                      <span>Explore All 13 Core Growth Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesDropdown(true)}
              onMouseLeave={() => setIndustriesDropdown(false)}
            >
              <Link
                href="/industries"
                className={`px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors ${
                  pathname.startsWith("/industries")
                    ? "text-[#D8B477]"
                    : "text-[#E6EAF0] hover:text-[#D8B477]"
                }`}
                aria-expanded={industriesDropdown}
              >
                Industries
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    industriesDropdown ? "rotate-180 text-[#D8B477]" : "text-[#8C959D]"
                  }`}
                />
              </Link>

              {industriesDropdown && (
                <div className="absolute left-0 mt-1 w-80 bg-[#14202C] border border-[#223244] rounded-xl shadow-2xl shadow-black/50 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#D8B477] px-3 py-1.5 border-b border-[#223244]/60">
                    Sectors We Accelerate
                  </div>
                  <div className="mt-1 space-y-0.5">
                    {industryLinks.map((ind) => {
                      const Icon = ind.icon;
                      return (
                        <Link
                          key={ind.href}
                          href={ind.href}
                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#1A2938] transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-md bg-[#223244] group-hover:bg-[#D8B477]/20 flex items-center justify-center shrink-0 transition-colors">
                            <Icon className="w-4 h-4 text-[#D8B477]" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white group-hover:text-[#D8B477] transition-colors">
                              {ind.name}
                            </div>
                            <div className="text-xs text-[#8C959D] line-clamp-1">
                              {ind.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="pt-2 mt-1 border-t border-[#223244]/60 px-3 pb-1">
                    <Link
                      href="/industries"
                      className="text-xs font-semibold text-[#D8B477] hover:underline flex items-center justify-between"
                    >
                      Explore Industry Frameworks
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/case-studies"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname === "/case-studies"
                  ? "text-[#D8B477]"
                  : "text-[#E6EAF0] hover:text-[#D8B477]"
              }`}
            >
              Case Studies
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname === "/about"
                  ? "text-[#D8B477]"
                  : "text-[#E6EAF0] hover:text-[#D8B477]"
              }`}
            >
              About
            </Link>

            <Link
              href="/insights"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname.startsWith("/insights")
                  ? "text-[#D8B477]"
                  : "text-[#E6EAF0] hover:text-[#D8B477]"
              }`}
            >
              Insights
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname === "/contact"
                  ? "text-[#D8B477]"
                  : "text-[#E6EAF0] hover:text-[#D8B477]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Primary CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/book-call"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-[#2D3E50] hover:border-[#D8B477] text-[#CBD3DC] hover:text-[#D8B477] font-medium text-xs transition-colors"
            >
              <span>Book a Call</span>
            </Link>
            <Link
              href="/#growth-audit"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#D8B477] hover:bg-[#C9A466] text-[#101A24] font-medium text-sm transition-all duration-200 shadow-md shadow-[#D8B477]/10 hover:shadow-[#D8B477]/20 active:scale-[0.98]"
            >
              <span>Get Free Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#E6EAF0] hover:text-[#D8B477] hover:bg-[#1A2938] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#101A24] border-b border-[#223244] px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <Link
              href="/"
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-white hover:bg-[#1A2938] hover:text-[#D8B477]"
            >
              Home
            </Link>

            <div className="pt-2 pb-1 border-t border-[#223244]/60">
              <div className="px-3 py-1 text-xs font-semibold text-[#D8B477] uppercase tracking-wider">
                Services
              </div>
              <div className="grid grid-cols-1 gap-1 pl-2 mt-1">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-3 py-1.5 text-sm text-[#CBD3DC] hover:text-[#D8B477]"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 pb-1 border-t border-[#223244]/60">
              <div className="px-3 py-1 text-xs font-semibold text-[#D8B477] uppercase tracking-wider">
                Industries
              </div>
              <div className="grid grid-cols-1 gap-1 pl-2 mt-1">
                {industryLinks.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    className="block px-3 py-1.5 text-sm text-[#CBD3DC] hover:text-[#D8B477]"
                  >
                    {i.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-[#223244]/60 space-y-1">
              <Link
                href="/case-studies"
                className="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-[#1A2938] hover:text-[#D8B477]"
              >
                Case Studies
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-[#1A2938] hover:text-[#D8B477]"
              >
                About
              </Link>
              <Link
                href="/insights"
                className="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-[#1A2938] hover:text-[#D8B477]"
              >
                Insights
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-[#1A2938] hover:text-[#D8B477]"
              >
                Contact
              </Link>
            </div>

            <div className="pt-4 space-y-2">
              <Link
                href="/book-call"
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#2D3E50] text-white hover:text-[#D8B477] font-medium text-sm"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/#growth-audit"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#D8B477] text-[#101A24] font-semibold text-sm shadow-md"
              >
                <span>Get Free Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
