import { useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  getIndustryBySlug,
  getServiceBySlug,
  CONTACT,
  FAQS,
} from "@/content";
import NotFoundPage from "@/pages/NotFound";
import IndustryDetailHero from "@/components/sections/IndustryDetailHero";
import IndustryEnvironment from "@/components/sections/IndustryEnvironment";
import IndustryRisks from "@/components/sections/IndustryRisks";
import IndustryServiceBundle from "@/components/sections/IndustryServiceBundle";
import IndustryApproach from "@/components/sections/IndustryApproach";
import PricingDisclaimerNote from "@/components/sections/PricingDisclaimerNote";
import FaqPreview from "@/components/sections/FaqPreview";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import type { CtaContent } from "@/content/cta";
import { ROUTES } from "@/lib/routes";

function isSafeSlug(
  value: string | undefined,
): value is string {
  return Boolean(
    value && /^[a-z0-9-]{1,80}$/.test(value),
  );
}

export default function IndustryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const safeSlug = isSafeSlug(slug) ? slug : undefined;

  const industry = useMemo(
    () => (safeSlug ? getIndustryBySlug(safeSlug) : undefined),
    [safeSlug],
  );

  const industryServices = useMemo(() => {
    if (!industry) return [];
    return industry.relevantServiceSlugs
      .map((s) => getServiceBySlug(s))
      .filter(
        (s): s is NonNullable<ReturnType<typeof getServiceBySlug>> =>
          Boolean(s),
      );
  }, [industry]);

  const industryFaqs = useMemo(
    () =>
      FAQS.filter(
        (faq) =>
          faq.category === "Coverage" ||
          faq.id === "faq-general-1" ||
          faq.id === "faq-process-1" ||
          faq.id === "faq-process-2",
      ),
    [],
  );

  if (!industry) {
    return <NotFoundPage />;
  }

  const whatsappNumber = CONTACT.whatsapp?.replace(/\D/g, "");

  const industryFinalCta: CtaContent = {
    heading:
      industry.industryCta?.finalHeading ??
      `Ready to discuss your ${industry.name.toLowerCase()} requirement?`,
    supportingText:
      industry.industryCta?.finalSupporting ??
      "Tell us about your requirement and we will help you identify the right next step.",
    primaryCta: {
      label:
        industry.industryCta?.finalPrimaryLabel ??
        `Discuss Your ${industry.name} Requirement`,
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
      {/* 1. HERO — industry-specific CTA + Call + WhatsApp */}
      <IndustryDetailHero
        name={industry.name}
        icon={industry.icon}
        heroSubtitle={industry.heroSubtitle}
        ctaLabel={industry.industryCta?.heroCtaLabel}
      />

      {/* 2. ENVIRONMENT — operating characteristics */}
      {industry.environment && (
        <IndustryEnvironment
          title={industry.name}
          environment={industry.environment}
        />
      )}

      {/* 3. RISKS — typical challenges */}
      {industry.risks && industry.risks.length > 0 && (
        <IndustryRisks
          title="Challenges in this environment"
          subtitle="Security and manpower issues commonly faced in this sector."
          risks={industry.risks}
        />
      )}

      {/* 4. SERVICE BUNDLE — recommended services */}
      {industryServices.length > 0 && (
        <IndustryServiceBundle
          title="Services for this industry"
          subtitle="SSCSS services that are commonly relevant in this environment."
          services={industryServices.map((s) => ({
            slug: s.slug,
            name: s.name,
            shortTagline: s.shortTagline,
            icon: s.icon,
          }))}
        />
      )}

      {/* 5. APPROACH — how SSCSS handles this environment */}
      {industry.approach && (
        <IndustryApproach
          title={`How SSCSS approaches ${industry.name.toLowerCase()}`}
          approach={industry.approach}
        />
      )}

      {/* 6. FAQs — site-wide coverage/process questions */}
      <FaqPreview
        title="Common questions"
        subtitle="Questions we often hear from organisations evaluating security and manpower services."
        faqs={industryFaqs}
        count={5}
        viewAllHref={ROUTES.faqs}
        cta={{
          label: "Talk to our team",
          href: `${ROUTES.contact}#contact-form`,
        }}
      />

      {/* 7. PRICING DISCLAIMER */}
      <div className="bg-[#10100f]">
        <div className="section-container py-8 sm:py-10">
          <PricingDisclaimerNote className="max-w-4xl text-[#8f8981]" />
        </div>
      </div>

      {/* 8. FINAL CTA — industry-aware */}
      <FinalCtaSection content={industryFinalCta} />
    </main>
  );
}
