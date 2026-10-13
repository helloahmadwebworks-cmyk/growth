"use client";

import { useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { extractAndPersistAttribution } from "@/lib/analytics";

/**
 * AttributionTracker
 * Extracts UTM parameters (source, medium, campaign, content, term),
 * landing page, and HTTP referrer on first arrival and stores them
 * in sessionStorage for seamless lead attribution.
 */
export default function AttributionTracker() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    extractAndPersistAttribution();
  }, [searchParams, pathname]);

  return null;
}
