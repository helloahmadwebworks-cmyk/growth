import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import {
  Globe2,
  Mail,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#101A24] text-white border-t border-[#1C2B3A] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#223244]">
          {/* Brand Column */}
          <div className="lg:col-span-2 pr-0 lg:pr-6">
            <div className="mb-5">
              <BrandLogo />
            </div>
            <p className="text-sm text-[#9AA2A9] leading-relaxed mb-6 max-w-md">
              We Build Digital Growth Systems. We help ambitious businesses improve
              online search visibility, attract qualified buyer enquiries, and turn
              digital marketing into measurable, predictable revenue growth.
            </p>

            <div className="space-y-2.5 text-xs text-[#CBD3DC]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D8B477] shrink-0" />
                <span>Headquarters: Aligarh, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#237A72] shrink-0" />
                <span>Serving Clients in India, USA, Canada, Australia & UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D8B477] shrink-0" />
                <a
                  href="mailto:contact@growbymasters.com"
                  className="hover:text-[#D8B477] transition-colors"
                >
                  contact@growbymasters.com
                </a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xs font-semibold text-[#D8B477] uppercase tracking-wider mb-4">
              Growth Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-[13px] text-[#9AA2A9]">
              <li>
                <Link
                  href="/services/seo"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>SEO & Organic Search</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8B477]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-design-development"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Web Design & Development</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8B477]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/google-ads"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Google Ads Management</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8B477]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/meta-ads"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Meta Ads Management</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8B477]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/social-media-marketing"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Social Media Marketing</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8B477]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/graphic-design"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Graphic Design</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8B477]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/branding"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Branding & Identity</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8B477]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/email-marketing"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Email Marketing & Nurture</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8B477]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/website-optimization"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Website Optimization</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8B477]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/lead-generation"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Lead Generation Systems</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8B477]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/analytics-tracking"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Analytics & Tracking</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8B477]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h3 className="text-xs font-semibold text-[#D8B477] uppercase tracking-wider mb-4">
              Industries
            </h3>
            <ul className="space-y-2.5 text-sm text-[#9AA2A9]">
              <li>
                <Link
                  href="/industries/home-services"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Home Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8B477]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/healthcare"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Healthcare & Clinics</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8B477]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/ecommerce"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>E-commerce Brands</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8B477]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/professional-services"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Professional Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8B477]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/real-estate"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Real Estate</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8B477]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/b2b-saas"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>B2B & SaaS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8B477]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="text-xs font-semibold text-[#D8B477] uppercase tracking-wider mb-4">
              Company & Legal
            </h3>
            <ul className="space-y-2.5 text-sm text-[#9AA2A9]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Agency
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-white transition-colors"
                >
                  Case Studies & Proof
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="hover:text-white transition-colors"
                >
                  Latest Insights & Guides
                </Link>
              </li>
              <li>
                <Link href="/book-call" className="hover:text-white transition-colors text-[#D8B477] font-medium flex items-center justify-between group">
                  <span>Book Strategy Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D8B477]" />
                </Link>
              </li>
              <li>
                <Link href="/audit" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Free Technical Audit Tool</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#D8B477]" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-[#223244]/60 space-y-2">
              <Link
                href="/book-call"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D8B477] hover:underline"
              >
                <span>Schedule a 30-Min Strategy Call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C959D]">
          <div>
            © 2026 GrowByMasters. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#237A72]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified Strategy First Execution
            </span>
            <span className="flex items-center gap-1.5 text-[#D8B477]">
              <ShieldCheck className="w-3.5 h-3.5" />
              Strict Confidentiality & NDA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
