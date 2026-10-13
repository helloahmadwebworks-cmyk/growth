import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  href?: string;
}

/**
 * GrowByMasters Modern Brand Mark & Wordmark
 * Sleek, high-precision B2B digital growth agency identity.
 * Replaces dated clunky serif text with a modern geometric growth icon and balanced typography.
 */
export default function BrandLogo({
  className = "",
  showTagline = true,
  size = "md",
  href = "/",
}: BrandLogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl sm:text-[22px]",
    lg: "text-2xl sm:text-3xl",
  };

  const taglineSizes = {
    sm: "text-[8px] tracking-[0.22em]",
    md: "text-[9px] tracking-[0.26em]",
    lg: "text-[10px] tracking-[0.28em]",
  };

  const logoContent = (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Geometric Growth Mark (Upward M Prism) */}
      <div
        className={`${iconSizes[size]} rounded-xl bg-gradient-to-br from-[#1C2C3D] to-[#101A24] border border-[#2A3E54] group-hover:border-[#D8B477]/70 p-2 flex items-center justify-center shrink-0 shadow-lg shadow-black/30 transition-all duration-300 group-hover:shadow-[#D8B477]/10 group-hover:scale-105`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background subtle geometric facet */}
          <path
            d="M6 24L16 6L26 24H20L16 16L12 24H6Z"
            fill="url(#gbm-facet-gradient)"
            opacity="0.25"
          />
          {/* Left Growth Pillar */}
          <path
            d="M6 24V14L12 24H6Z"
            fill="url(#gbm-teal-gradient)"
          />
          {/* Ascending Master Chevron / Apex */}
          <path
            d="M11 24L16 14L21 24H17L16 21.5L15 24H11Z"
            fill="url(#gbm-gold-gradient)"
          />
          {/* Top Growth Arrow Head */}
          <path
            d="M16 6L26 24H21L16 14L11 24H6L16 6Z"
            stroke="url(#gbm-gold-gradient)"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          {/* Dynamic Apex Spark Point */}
          <circle cx="16" cy="6" r="1.75" fill="#F8E5BD" />

          {/* Gradients */}
          <defs>
            <linearGradient id="gbm-gold-gradient" x1="6" y1="6" x2="26" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F9E8C7" />
              <stop offset="0.5" stopColor="#D8B477" />
              <stop offset="1" stopColor="#B38E4C" />
            </linearGradient>
            <linearGradient id="gbm-teal-gradient" x1="6" y1="14" x2="12" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2EB5A7" />
              <stop offset="1" stopColor="#1B635C" />
            </linearGradient>
            <linearGradient id="gbm-facet-gradient" x1="16" y1="6" x2="16" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D8B477" />
              <stop offset="1" stopColor="#101A24" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typographic Wordmark */}
      <div className="flex flex-col leading-none">
        <div className={`font-sans tracking-tight font-bold text-white flex items-baseline ${textSizes[size]}`}>
          <span className="font-semibold text-white tracking-tight">GrowBy</span>
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5E6CA] to-[#D8B477] ml-0.5">
            Masters
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D8B477] ml-1 mb-0.5 inline-block group-hover:scale-125 transition-transform duration-300" />
        </div>

        {showTagline && (
          <span
            className={`uppercase font-semibold text-[#8C959D] mt-1.5 transition-colors duration-200 group-hover:text-[#CBD3DC] ${taglineSizes[size]}`}
          >
            Digital Growth & Consulting
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="GrowByMasters Home" className="inline-block">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
