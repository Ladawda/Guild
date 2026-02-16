"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

export function PHProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: "/ingest", // Reverse proxy through our domain (avoids ad blockers)
      ui_host: "https://us.posthog.com", // Used for toolbar/dashboard links
      person_profiles: "identified_only",
      capture_pageview: false, // We manually capture pageviews
      capture_pageleave: true,
    });
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
