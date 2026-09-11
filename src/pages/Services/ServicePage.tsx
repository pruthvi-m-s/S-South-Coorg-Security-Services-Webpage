import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  getServiceBySlug,
  getRelatedServices,
  getIndustriesForService,
  CONTACT,
} from "@/content";
import NotFoundPage from "@/pages/NotFound";
import ServiceDetailHero from "@/components/sections/ServiceDetailHero";
import ServiceOverview from "@/components/sections/ServiceOverview";
import KeyFeatures from "@/components/sections/KeyFeatures";
import IndustriesServedSection from "@/components/sections/IndustriesServedSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicePageWhySection from "@/components/sections/ServicePageWhySection";
import ServiceFaqSection from "@/components/sections/ServiceFaqSection";
import RelatedServices from "@/components/sections/RelatedServices";
import PricingDisclaimerNote from "@/components/sections/PricingDisclaimerNote";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import type { CtaContent } from "@/content/cta";
import { ROUTES } from "@/lib/routes";
import { trackServicePageView } from "@/lib/analytics";

function isSafeSlug(
  value: string | undefined,
): value is string {
  return Boolean(
    value && /^[a-z0-9-]{1,80}$/.test(value),
  );
}

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const safeSlug = isSafeSlug(slug) ? slug : undefined;

  const service = useMemo(
    () => (safeSlug ? getServiceBySlug(safeSlug) : undefined),
    [safeSlug],
  );

  const relatedServices = useMemo(
    () => (safeSlug ? getRelatedServices(safeSlug) : []),
    [safeSlug],
  );

  const industries = useMemo(
    () => (safeSlug ? getIndustriesForService(safeSlug) : []),
    [safeSlug],
  );

  useEffect(() => {
    if (service?.slug) {
      trackServicePageView({
        service_slug: service.slug,
      });
    }
  }, [service?.slug]);

  if (!service) {
    return <NotFoundPage />;
  }

  const whatsappNumber = CONTACT.whatsapp?.replace(/\D/g, "");

  const serviceFinalCta: CtaContent = {
    heading: service.serviceCta?.finalHeading ?? `Ready to discuss your ${service.name.toLowerCase()} requirement?`,
    supportingText:
      service.serviceCta?.finalSupporting ??
      `Tell us about your requirement and we'll help you identify the right next step.`,
    primaryCta: {
      label: service.serviceCta?.finalPrimaryLabel ?? `Discuss Your ${service.name} Requirement`,
      href: `${ROUTES.contact}#contact-form`,
    },
    ...(CONTACT.phone
      ? {
          secondaryCta: {
            label: "Call Us Now",
            href: `tel:${CONTACT.phone}`,
          },
        }
      : {}),
    ...(whatsappNumber
      ? {
          tertiaryCta: {
            label: "Message on WhatsApp",
            href: `https://wa.me/${whatsappNumber}`,
          },
        }
      : {}),
  };

  return (
    <main className="bg-[#10100f] text-[#f5f1e8]">
      {/* 1. HERO — service-aware CTA + Call + WhatsApp */}
      <ServiceDetailHero
        name={service.name}
        tagline={service.shortTagline}
        image={service.heroImage}
        ctaLabel={service.serviceCta?.heroCtaLabel}
      />

      {/* 2. OVERVIEW — "What this service solves" */}
      <ServiceOverview
        title="What this service solves"
        overview={service.overview}
      />

      {/* 3. BENEFITS — "What you get" */}
      <KeyFeatures
        title="What you get"
        subtitle="The practical outcomes and service standards built into the engagement."
        features={service.benefits}
      />

      {/* 4. INDUSTRIES SERVED — "Where this service fits" */}
      <IndustriesServedSection
        title="Where this service fits"
        subtitle="Industries and operating environments where this service can be relevant."
        industries={industries}
      />

      {/* 5. PROCESS — "How the engagement works" (cream) */}
      <ProcessSection
        title="How the engagement works"
        subtitle="A clear path from the initial requirement through deployment and ongoing support."
        steps={service.process}
      />

      {/* 6. WHY SSCSS — extracted component */}
      {service.whyChooseUs?.length > 0 && (
        <ServicePageWhySection items={service.whyChooseUs} />
      )}

      {/* 7. FAQs — service-specific questions */}
      <ServiceFaqSection
        title="Before you engage this service"
        faqs={service.faqs}
        cta={
          service.serviceCta?.sectionLabel
            ? {
                label: service.serviceCta.sectionLabel,
                href: `${ROUTES.contact}#contact-form`,
              }
            : undefined
        }
      />

      {/* 8. RELATED SERVICES */}
      <RelatedServices
        title="Services that can complement this"
        subtitle="Explore related SSCSS services that may form part of the wider requirement."
        services={relatedServices}
      />

      {/* 9. PRICING DISCLAIMER */}
      <div className="bg-[#10100f]">
        <div className="section-container py-8 sm:py-10">
          <PricingDisclaimerNote className="max-w-4xl text-[#8f8981]" />
        </div>
      </div>

      {/* 10. FINAL CTA — service-aware */}
      <FinalCtaSection content={serviceFinalCta} />
    </main>
  );
}
