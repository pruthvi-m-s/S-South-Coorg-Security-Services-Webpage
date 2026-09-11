// ============================================================
// SSCSS — Analytics Core
//
// Low-level analytics engine. This is the ONLY module that ever
// touches window.dataLayer / window.gtag.
//
// Guarantees:
//   - Never throws. All errors are swallowed.
//   - Never blocks rendering. Scripts load after interaction/idle.
//   - Fully disabled (no-op) when no IDs are configured.
//   - Safe under ad-blockers — failures are silently ignored.
// ============================================================

import {
  ANALYTICS_CONFIG,
  isAnalyticsEnabled,
} from "./config";
import type { DataLayerEntry, EventName } from "./types";

// ─── Internal state ──────────────────────────────────────────
let loaderStarted = false;
let loaderReady = false;

// ─── Debug logging ───────────────────────────────────────────
function debug(...args: unknown[]): void {
  if (ANALYTICS_CONFIG.debug) {
    // eslint-disable-next-line no-console
    console.debug("[sscss-analytics]", ...args);
  }
}

// ─── Data layer helper ───────────────────────────────────────
function ensureDataLayer(): void {
  if (typeof window === "undefined") return;
  if (!Array.isArray(window.dataLayer)) {
    window.dataLayer = [];
  }
}

/**
 * Push an entry to the data layer (GTM) and forward to gtag (GA4)
 * when the GA4 script has been loaded.
 */
export function pushDataLayer(entry: DataLayerEntry): void {
  if (!isAnalyticsEnabled()) return;
  try {
    ensureDataLayer();
    window.dataLayer?.push(entry);

    if (entry.event && typeof window.gtag === "function") {
      // Standard GA4 event invocation: gtag('event', name, params)
      const { event, ...params } = entry;
      window.gtag("event", event, params);
    }
  } catch {
    // Analytics must never break the website.
  }
}

// ─── Loader implementation ───────────────────────────────────
function loadGa4(measurementId: string): void {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  try {
    ensureDataLayer();

    // gtag is a variadic function per Google's API. We type it as
    // accepting an unknown argument list and route through dataLayer.
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args as unknown as DataLayerEntry);
    };

    window.gtag?.("js", new Date());
    window.gtag?.("config", measurementId, {
      send_page_view: false, // SPA-aware: we fire page_view manually on route change
    });
    debug("GA4 configured:", measurementId);
  } catch {
    // GA4 blocked or unavailable — continue silently.
  }
}

function loadGtm(gtmId: string): void {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  try {
    ensureDataLayer();
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);
    debug("GTM configured:", gtmId);
  } catch {
    // GTM blocked or unavailable — continue silently.
  }
}

/**
 * Load analytics scripts after the browser is idle / after first
 * interaction. This keeps analytics off the critical rendering path
 * so Core Web Vitals are unaffected.
 */
export function initializeAnalytics(): void {
  if (typeof window === "undefined") return;
  if (loaderStarted) return; // idempotent
  loaderStarted = true;

  if (!isAnalyticsEnabled()) {
    debug("Analytics disabled — no GA4/GTM ID configured.");
    return;
  }

  const load = (): void => {
    if (loaderReady) return;
    loaderReady = true;

    // GTM takes priority as the container loader when configured.
    if (ANALYTICS_CONFIG.gtmId) {
      loadGtm(ANALYTICS_CONFIG.gtmId);
    }
    // GA4 loads directly only when GTM is not configured.
    // (When GTM is present, GA4 is managed inside the container.)
    else if (ANALYTICS_CONFIG.ga4MeasurementId) {
      loadGa4(ANALYTICS_CONFIG.ga4MeasurementId);
    }
  };

  try {
    if ("requestIdleCallback" in window) {
      // requestIdleCallback exists
      const idleCallback = window.requestIdleCallback as
        | ((cb: () => void) => number)
        | undefined;
      idleCallback?.(() => {
        load();
        // Fallback: also load after a short timeout in case idle never fires.
        setTimeout(load, 3000);
      });
    } else {
      // Fallback for browsers without requestIdleCallback.
      setTimeout(load, 2000);
    }
  } catch {
    // If scheduling fails, load after a safe delay.
    setTimeout(load, 3000);
  }

  // Load earlier on first user interaction (scroll, click, keydown, touch).
  const interactiveEvents = [
    "scroll",
    "click",
    "keydown",
    "touchstart",
    "mousemove",
  ] as const;
  const onFirstInteraction = (): void => {
    interactiveEvents.forEach((eventName) =>
      window.removeEventListener(eventName, onFirstInteraction, { passive: true } as AddEventListenerOptions),
    );
    load();
  };
  interactiveEvents.forEach((eventName) =>
    window.addEventListener(eventName, onFirstInteraction, { passive: true }),
  );
}

// ─── Public tracking API (used only by events.ts) ────────────
export function trackEvent(event: EventName, params?: Record<string, unknown>): void {
  if (!isAnalyticsEnabled()) return;
  try {
    pushDataLayer({ event, ...params });
    debug("track:", event, params ?? {});
  } catch {
    // Never propagate analytics errors.
  }
}

