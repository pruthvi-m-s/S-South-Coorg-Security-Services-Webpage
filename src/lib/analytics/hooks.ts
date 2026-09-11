// ============================================================
// SSCSS — Analytics Hooks
//
// React hooks that wire analytics into the app without business
// components ever touching the data layer.
//
// Deduplication rules:
//   - Page views fire once per route (keyed by pathname).
//   - Scroll depth fires once per milestone per route.
//   - Deferred clicks are tracked once per click (capture-phase
//     listener with duplicate guard).
// ============================================================

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { isAnalyticsEnabled } from "./config";
import {
  getPageTitle,
  getSourcePage,
  trackCtaClick,
  trackFileDownloadClick,
  trackOutboundLinkClick,
  trackPageView,
  trackPhoneClick,
  trackScrollDepth,
  trackServicePageView,
  trackWhatsAppClick,
} from "./events";

// ─── Page view tracking (SPA-aware) ──────────────────────────
/** Fires page_view on every route change, with dedupe per path. */
export function usePageViewTracking(): void {
  const { pathname } = useLocation();
  const lastTrackedRef = useRef<string>("");

  useEffect(() => {
    if (!isAnalyticsEnabled()) return;
    // Deduplicate: only fire once per route change.
    if (lastTrackedRef.current === pathname) return;
    lastTrackedRef.current = pathname;

    const sourcePage = getSourcePage(pathname);
    trackPageView({
      page_path: sourcePage,
      page_title: getPageTitle(),
    });

    // Service page views feed the funnel analysis.
    const serviceMatch = pathname.match(/^\/services\/([^/]+)\/?$/);
    if (serviceMatch?.[1]) {
      trackServicePageView({ service_slug: serviceMatch[1] });
    }
  }, [pathname]);
}

// ─── Scroll depth tracking ───────────────────────────────────
const SCROLL_DEPTH_MILESTONES = [25, 50, 75, 100] as const;

/** Fires scroll_depth at 25/50/75/100% — once per milestone per route. */
export function useScrollDepthTracking(): void {
  const { pathname } = useLocation();
  const firedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    // Reset fired milestones on route change.
    firedRef.current = new Set();
  }, [pathname]);

  useEffect(() => {
    if (!isAnalyticsEnabled()) return;

    let ticking = false;
    const sourcePage = getSourcePage(pathname);

    const handleScroll = (): void => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        ticking = false;
        try {
          const docEl = document.documentElement;
          const scrollTop = window.scrollY || docEl.scrollTop || 0;
          const scrollHeight = docEl.scrollHeight - window.innerHeight;
          if (scrollHeight <= 0) return;

          const percent = Math.min(
            100,
            Math.round((scrollTop / scrollHeight) * 100),
          );

          SCROLL_DEPTH_MILESTONES.forEach((milestone) => {
            if (percent >= milestone && !firedRef.current.has(milestone)) {
              firedRef.current.add(milestone);
              trackScrollDepth({
                source_page: sourcePage,
                percent: milestone,
              });
            }
          });
        } catch {
          // Never break scrolling because of analytics.
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);
}

// ─── Delegated interaction tracking ──────────────────────────
const FILE_EXTENSION_PATTERN =
  /\.(pdf|docx?|xlsx?|pptx?|zip|rar|7z|txt|csv|jpg|jpeg|png|gif|webp|svg|mp4|webm)(\?.*)?$/i;

// Module-level timestamp for the click dedup guard (shared across hook instances).
let lastFiredAt = 0;

function getHref(target: Element | null): string {
  const anchor = target?.closest?.("a");
  return anchor?.getAttribute("href") ?? "";
}

function getDataAttribute(target: Element | null, name: string): string {
  const el = target?.closest?.<HTMLElement>(`[data-${name}]`);
  return el?.dataset?.[name] ?? "";
}

/**
 * Global delegated click listener that maps DOM data-attributes to
 * analytics events. Components add data attributes; this hook handles
 * the rest. Business components never call analytics directly.
 *
 * Supported attributes:
 *   data-analytics-cta="label"        → cta_quote_click
 *   data-analytics-component="name"   → context for phone/whatsapp
 *   href="tel:..."                    → phone_click
 *   href="https://wa.me/..."          → whatsapp_click
 *   outbound links (different origin) → outbound_link_click
 *   file download links               → file_download_click
 */
export function useInteractionTracking(): void {
  const { pathname } = useLocation();
  const lastEventRef = useRef<string>("");

  useEffect(() => {
    if (!isAnalyticsEnabled()) return;

    const sourcePage = getSourcePage(pathname);

    const handleClick = (event: MouseEvent): void => {
      try {
        const target = event.target as Element | null;
        const href = getHref(target);

        // Deduplication guard — prevent double-firing within 350ms
        // when multiple handlers observe the same click.
        const now = Date.now();
        const dedupeKey = `${href}|${getDataAttribute(target, "analytics-cta")}`;
        if (lastEventRef.current === dedupeKey && now - lastFiredAt < 350) {
          return;
        }
        lastEventRef.current = dedupeKey;
        lastFiredAt = now;

        // 1. CTA clicks (data-analytics-cta)
        const ctaLabel = getDataAttribute(target, "analytics-cta");
        if (ctaLabel) {
          trackCtaClick({
            source_page: sourcePage,
            cta_label: ctaLabel,
          });
        }

        // 2. Phone clicks (tel:)
        if (href.startsWith("tel:")) {
          trackPhoneClick({
            source_page: sourcePage,
            component: getDataAttribute(target, "analytics-component") || "link",
          });
          return;
        }

        // 3. WhatsApp clicks (wa.me)
        if (href.includes("wa.me") || href.startsWith("whatsapp:")) {
          trackWhatsAppClick({
            source_page: sourcePage,
            component: getDataAttribute(target, "analytics-component") || "link",
          });
          return;
        }

        // 4. File downloads
        if (FILE_EXTENSION_PATTERN.test(href)) {
          const fileName = href.split("/").pop()?.split("?")[0] ?? href;
          const extMatch = fileName.match(/\.([a-z0-9]+)$/i);
          trackFileDownloadClick({
            source_page: sourcePage,
            file_name: fileName,
            file_extension: extMatch?.[1]?.toLowerCase() ?? "",
          });
          return;
        }

        // 5. Outbound links (external origin, not wa.me / tel / mailto)
        if (/^https?:\/\//i.test(href) && !href.includes("wa.me")) {
          try {
            const url = new URL(href, window.location.origin);
            if (url.origin !== window.location.origin) {
              trackOutboundLinkClick({
                source_page: sourcePage,
                link_url: href,
                link_domain: url.hostname,
              });
            }
          } catch {
            // Invalid URL — skip.
          }
        }
      } catch {
        // Never break click handling because of analytics.
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, [pathname]);
}

