import Link from "next/link";
import { ArrowRight, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F7F5F0] py-20 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 sm:p-10 border border-[#EAE6DC] text-center shadow-lg space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#F8F3EA] border border-[#E8DFCF] flex items-center justify-center text-[#A48145] mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#A48145]">
            404 Error
          </div>
          <h1 className="font-serif-heading text-3xl font-normal text-[#1D2732]">
            Page Not Found
          </h1>
          <p className="text-sm text-[#626B73] leading-relaxed">
            The page you requested may have been relocated, renamed, or is currently unavailable.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#101A24] hover:bg-[#1A2938] text-white font-medium text-sm transition-colors"
          >
            <Home className="w-4 h-4 text-[#D8B477]" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#F7F5F0] hover:bg-[#EAE6DC] text-[#1D2732] font-medium text-sm transition-colors"
          >
            <span>Explore Growth Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
