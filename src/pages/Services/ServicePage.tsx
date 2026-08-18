// ============================================================
// SSCSS — Dynamic Service Detail Page
// Single reusable template for all 13 service detail routes.
// Content-driven: all data from the content layer.
// Renders 404 for invalid slugs.
// ============================================================

import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  getServiceBySlug,
  getRelatedServices,
  getIndustriesForService,
  FINAL_CTA,
} from "@/content";
import NotFoundPage from "@/pages/NotFound";
import ServiceDetailHero from "@/components/sections/ServiceDetailHero";
import ServiceOverview from "@/components/sections/ServiceOverview";
import KeyFeatures from "@/components/sections/KeyFeatures";
import IndustriesServedSection from "@/components/sections/IndustriesServedSection";
import ProcessSection from "@/components/sections/ProcessSection";
import RelatedServices from "@/components/sections/RelatedServices";
import PricingDisclaimerNote from "@/components/sections/PricingDisclaimerNote";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import {
  trackServicePageView,
} from "@/lib/analytics";

function isSafeSlug(value: string | undefined): value is string {
  return Boolean(value && /^[a-z0-9-]{1,80}$/.test(value));
}

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const safeSlug = isSafeSlug(slug) ? slug : undefined;

  // ─── Resolve service from the content layer ──────────────
  // Stable per slug — memoized to avoid re-scanning the static
  // SERVICES array on every render.
  const service = useMemo(
    () => (safeSlug ? getServiceBySlug(safeSlug) : undefined),
    [safeSlug],
  );

// ─── Resolve related services & industries ───────────────
  // Both are stable per slug — memoized to avoid repeated array
  // lookups (getServiceBySlug scans the static SERVICES list).
  // Computed unconditionally (before the early return) to keep
  // the hook order stable across renders.
  const relatedServices = useMemo(
    () => (safeSlug ? getRelatedServices(safeSlug) : []),
    [safeSlug],
  );
  const industries = useMemo(
    () => (safeSlug ? getIndustriesForService(safeSlug) : []),
    [safeSlug],
  );

  // ─── Analytics: Track service page view ─────────────────
  useEffect(() => {
    if (service?.slug) {
      trackServicePageView({
        service_slug: service.slug,
      });
    }
  }, [service?.slug]);

  // ─── Invalid slug → 404 ──────────────────────────────────
  if (!service) {
    return <NotFoundPage />;
  }

  return (
    <>
      {/* 1. Service Hero */}
      <ServiceDetailHero
        name={service.name}
        tagline={service.shortTagline}
        image={service.heroImage}
      />

      {/* 2. Service Overview */}
      <ServiceOverview
        title="Overview"
        overview={service.overview}
      />

      {/* 3. Key Features / Deliverables */}
      <KeyFeatures
        title="Key Features"
        subtitle="What you get with our service"
        features={service.benefits}
      />

      {/* 4. Industries Served */}
      <IndustriesServedSection
        title="Industries We Serve"
        subtitle="We provide this service across the following industries"
        industries={industries}
      />

      {/* 5. Service Process */}
      <ProcessSection
        title="Our Engagement Process"
        subtitle="How we deliver this service — from discussion to ongoing support"
        steps={service.process}
      />

      {/* 6. Related Services */}
      <RelatedServices
        title="Related Services"
        subtitle="Explore other services that complement this offering"
        services={relatedServices}
      />

{/* 7. Pricing Disclaimer */}
      <div className="section-container section-padding pt-0">
        <PricingDisclaimerNote className="mx-auto max-w-4xl" />
      </div>

      {/* 8. Final CTA */}
      <FinalCtaSection content={FINAL_CTA} />
    </>
  );
}

