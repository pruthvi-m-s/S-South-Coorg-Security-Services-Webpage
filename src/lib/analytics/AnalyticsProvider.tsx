// ============================================================
// SSCSS — AnalyticsProvider
//
// Mounted once in the app shell (Layout). Responsible for:
//   1. Initializing the analytics script loader (non-blocking).
//   2. Firing SPA page views on route change.
//   3. Tracking scroll depth milestones.
//   4. Delegated click tracking via data-attributes.
//
// Renders nothing. Safe to remove entirely — the website keeps
// working with zero analytics.
// ============================================================

import { useEffect } from "react";
import { initializeAnalytics } from "./core";
import {
  useInteractionTracking,
  usePageViewTracking,
  useScrollDepthTracking,
} from "./hooks";

export default function AnalyticsProvider(): null {
  // Initialize the loader after mount. This schedules the GA4/GTM
  // script load to happen after the browser is idle or on first
  // interaction — never blocking first paint or Core Web Vitals.
  useEffect(() => {
    initializeAnalytics();
  }, []);

  // Fire page_view on every route change (SPA-aware, deduplicated).
  usePageViewTracking();

  // Fire scroll_depth at 25/50/75/100% (once per milestone per route).
  useScrollDepthTracking();

  // Global delegated click tracking (CTA / phone / WhatsApp / outbound / downloads).
  useInteractionTracking();

  return null;
}

