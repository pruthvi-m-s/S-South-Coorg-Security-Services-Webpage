import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroScrollExpand from "@/components/sections/HeroScrollExpand";
import TrustStats from "@/components/sections/TrustStats";
import GroupedServicesPreview from "@/components/sections/GroupedServicesPreview";
import HomeProcessTimeline from "@/components/sections/HomeProcessTimeline";
import ImageWheel from "@/components/sections/ImageWheel";
import FounderSection from "@/components/sections/FounderSection";
import HomeContactCta from "@/components/sections/HomeContactCta";
import TrustRibbon from "@/components/sections/TrustRibbon";
import EmergencyHotlineCard from "@/components/sections/EmergencyHotlineCard";
import FaqPreview from "@/components/sections/FaqPreview";
import IndustryPreview from "@/components/sections/IndustryPreview";
import { Button } from "@/components/ui/button";
import {
  HERO,
  CERTIFICATIONS,
  STATS,
  SERVICES,
  ABOUT,
  FOUNDER,
  COMPLIANCE_PAGE,
  FAQS,
  HOME,
  INDUSTRIES,
  getServiceGroups,
} from "@/content";
import { ROUTES } from "@/lib/routes";

export default function HomePage() {
  const serviceGroups = getServiceGroups(SERVICES);

  return (
    <>
      {/* HERO — DARK */}
      <div className="bg-[#10100f] text-[#f5f1e8]">
        <HeroScrollExpand content={HERO} />
      </div>

      {/* TRUST RIBBON — DARK */}
      <section
        className="border-y border-[#2b2927] bg-[#10100f]"
        aria-label="Trust highlights"
      >
        <div className="section-container py-5 sm:py-6">
          <TrustRibbon
            stats={STATS}
            certifications={CERTIFICATIONS}
            psaraLabels={COMPLIANCE_PAGE.psaraBadge}
          />
        </div>
      </section>

      {/* IMMEDIATE REQUIREMENT — DARK */}
      <section
        className="bg-[#10100f]"
        aria-label="Immediate security requirements"
      >
        <div className="section-container py-4 sm:py-6">
          <EmergencyHotlineCard />
        </div>
      </section>

      {/* PAIN / PROBLEM — DARK */}
      <section
        className="border-t border-[#2b2927] bg-[#191918] text-[#f5f1e8]"
        aria-labelledby="home-problem-title"
      >
        <div className="section-container section-padding">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div className="max-w-md">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]">
                {HOME.pain.eyebrow}
              </p>

              <h2
                id="home-problem-title"
                className="mt-3 max-w-sm font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
              >
                {HOME.pain.title}
              </h2>

              {HOME.pain.cta && (
                <Link
                  to={HOME.pain.cta.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#b4aea5] transition-colors hover:text-[#f5f1e8]"
                  data-analytics-cta="home_pain_cta"
                >
                  {HOME.pain.cta.label}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              )}
            </div>

            <div className="grid gap-0 border-t border-[#2b2927] sm:grid-cols-2">
              {HOME.pain.items.map((item) => (
                <article
                  key={item.number}
                  className="border-b border-[#2b2927] py-6 sm:px-6 sm:first:pl-0 sm:even:border-l sm:last:border-b-0"
                >
                  <span className="text-xs font-semibold tracking-[0.14em] text-[#c45a52]">
                    {item.number}
                  </span>

                  <h3 className="mt-3 max-w-sm font-heading text-xl font-semibold tracking-tight text-[#f5f1e8]">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-[#b4aea5]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION — DARK */}
      <section
        className="bg-[#10100f] text-[#f5f1e8]"
        aria-labelledby="home-solution-title"
      >
        <div className="section-container section-padding">
          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]">
                {HOME.solution.eyebrow}
              </p>

              <h2
                id="home-solution-title"
                className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
              >
                {HOME.solution.title}
              </h2>

              {HOME.solution.cta && (
                <Link
                  to={HOME.solution.cta.href}
                  className="mt-8 inline-flex items-center gap-2"
                  data-analytics-cta="home_solution_cta"
                >
                  <Button
                    variant="default"
                    size="lg"
                  >
                    {HOME.solution.cta.label}
                    <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                  </Button>
                </Link>
              )}
            </div>

            <div className="grid gap-0 border-t border-[#2b2927]">
              {HOME.solution.items.map((item) => (
                <article
                  key={item.title}
                  className="grid gap-3 border-b border-[#2b2927] py-6 sm:grid-cols-[0.72fr_1.28fr] sm:gap-8"
                >
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-[#f5f1e8]">
                    {item.title}
                  </h3>

                  <p className="max-w-xl text-sm leading-6 text-[#b4aea5]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GROUPED SERVICES — DARK */}
      <GroupedServicesPreview
        eyebrow={HOME.services.eyebrow}
        title={HOME.services.title}
        subtitle={HOME.services.subtitle}
        groups={serviceGroups}
        viewAllHref={ROUTES.services}
      />

      {/* REAL PEOPLE — DARK */}
      <ImageWheel />

      {/* INDUSTRY FIT — DARK */}
      <IndustryPreview
        eyebrow={HOME.industries.eyebrow}
        title={HOME.industries.title}
        subtitle={HOME.industries.subtitle}
        industries={INDUSTRIES}
      />

      {/* PROCESS — ONLY CREAM HIGHLIGHT SECTION */}
      <HomeProcessTimeline steps={ABOUT.process.steps} />

      {/* FOUNDER — DARK */}
      <div className="bg-[#10100f] text-[#f5f1e8]">
        <FounderSection content={FOUNDER} />
      </div>

      {/* CERTIFICATIONS — DARK */}
      <div className="bg-[#191918] text-[#f5f1e8]">
        <TrustStats
          certifications={CERTIFICATIONS}
          stats={STATS}
          pendingLabel={COMPLIANCE_PAGE.statusLabels.pending}
        />
      </div>

      {/* FAQ — DARK */}
      <FaqPreview
        title={HOME.faq.title}
        subtitle={HOME.faq.subtitle}
        faqs={FAQS}
        count={5}
        viewAllHref={ROUTES.faqs}
        cta={HOME.faq.cta}
      />

      {/* FINAL CONTACT — DARK */}
      <HomeContactCta />
    </>
  );
}