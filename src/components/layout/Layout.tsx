// ============================================================
// SSCSS — Base Layout Shell
// Minimal structural wrapper used by every page.
// ============================================================
// Provides:
//   - Skip-to-content accessibility link
//   - Global Header (sticky, scroll-aware)
//   - Semantic <main> landmark with main-content id
//   - Global Footer with brand info, nav, contact, copyright
// ============================================================

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/navigation/Header";
import Footer from "@/components/layout/Footer";
import PSARABadge from "@/components/sections/PSARABadge";
import FloatingWhatsAppButton from "@/components/common/FloatingWhatsAppButton";
import StickyMobileCallButton from "@/components/common/StickyMobileCallButton";
import RouteContentSkeleton from "@/components/common/RouteContentSkeleton";
import RouteExperience from "@/components/common/RouteExperience";
import Seo from "@/components/common/Seo";
import AnalyticsProvider from "@/lib/analytics/AnalyticsProvider";
import { ROUTES } from "@/lib/routes";
import {
  SITE,
  CONTACT,
  SOCIAL,
  SERVICES,
  CERTIFICATIONS,
  COMPLIANCE_PAGE,
  FOOTER_COMPANY_LINKS,
} from "@/content";

// ─── Module-level static derived data ─────────────────────────
// These values only depend on the immutable content layer, so they
// are computed once at module load instead of on every Layout render.
// This keeps the always-mounted global shell's render path minimal.
const FOOTER_SERVICES = SERVICES.map((s) => ({ slug: s.slug, name: s.name }));

const FOOTER_DESCRIPTION = `${SITE.name} — ${SITE.tagline}. ${SITE.yearsInBusiness}+ years of trusted security and manpower solutions in ${SITE.primaryServiceArea}.`;

const PSARA_CERTIFICATION = CERTIFICATIONS.find(
  (certification) => certification.type === "PSARA",
);

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Seo />
      <AnalyticsProvider />
      {/* ─── Skip-to-Content Accessibility Link ──────────── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-toast focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* ─── Global Header ────────────────────────────────── */}
      <Header />

{/* ─── Main Content Area ─────────────────────────────── */}
      <main
        id="main-content"
        tabIndex={-1}
        role="main"
        className="flex-1 outline-none"
        style={{ paddingTop: "var(--header-height)" }}
      >
        <RouteExperience>
          <Suspense fallback={<RouteContentSkeleton />}>
            <Outlet />
          </Suspense>
        </RouteExperience>
      </main>

      {/* ─── Global Footer ─────────────────────────────────── */}
      <Footer
        siteName={SITE.shortName}
        description={FOOTER_DESCRIPTION}
        quickLinks={FOOTER_COMPANY_LINKS}
        services={FOOTER_SERVICES}
        contact={CONTACT}
        social={SOCIAL as Record<string, string>}
        trustSignal={
          <PSARABadge
            certification={PSARA_CERTIFICATION}
            labels={COMPLIANCE_PAGE.psaraBadge}
            href={ROUTES.compliance}
          />
        }
      />

      {/* ─── Global Floating Conversion Actions ─────────────── */}
      <FloatingWhatsAppButton />
      <StickyMobileCallButton />
    </div>
  );
}
