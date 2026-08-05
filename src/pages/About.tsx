// ============================================================
// SSCSS — About Page
// 8 sections in order:
//   1. About Hero
//   2. Company Story
//   3. Company Timeline / History
//   4. Why Choose SSCSS (reused component)
//   5. Process (reused component)
//   6. Certifications & Compliance (reused TrustStrip)
//   7. Company Statistics (reused StatsGrid)
//   8. Final CTA (reused component)
// Content-driven: all copy from content layer. No hardcoded text.
// ============================================================

import AboutHero from "@/components/sections/AboutHero";
import CompanyStory from "@/components/sections/CompanyStory";
import Timeline from "@/components/sections/Timeline";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessSection from "@/components/sections/ProcessSection";
import TrustStrip from "@/components/sections/TrustStrip";
import StatsGrid from "@/components/sections/StatsGrid";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ABOUT,
  CERTIFICATIONS,
  COMPLIANCE_PAGE,
  STATS,
  FINAL_CTA,
} from "@/content";

export default function AboutPage() {
  return (
    <>
      {/* 1. About Hero */}
      <AboutHero
        title={ABOUT.heroTitle}
        subtitle={ABOUT.heroSubtitle}
        image={ABOUT.heroImage}
      />

      {/* 2. Company Story */}
      <CompanyStory
        title={ABOUT.story.title}
        paragraphs={ABOUT.story.paragraphs}
      />

      {/* 3. Company Timeline / History */}
      <Timeline
        title={ABOUT.history.title}
        entries={ABOUT.history.entries}
      />

      {/* 4. Why Choose SSCSS */}
      <WhyChooseUs
        title={ABOUT.whyChooseUs.title}
        subtitle={ABOUT.whyChooseUs.subtitle}
        items={ABOUT.whyChooseUs.items}
      />

      {/* 5. Process */}
      <ProcessSection
        title={ABOUT.process.title}
        subtitle={ABOUT.process.subtitle}
        steps={ABOUT.process.steps}
      />

      {/* 6. Certifications & Compliance */}
      <section
        className="relative bg-background"
        aria-label="Certifications and Compliance"
      >
        <div className="section-container section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              {ABOUT.certificationsSection.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {ABOUT.certificationsSection.subtitle}
            </p>
            <div className="mt-8 flex justify-center">
              <TrustStrip
                certifications={CERTIFICATIONS}
                pendingLabel={COMPLIANCE_PAGE.statusLabels.pending}
              />
            </div>
            <div className="mt-6">
              <Link to={ABOUT.certificationsSection.complianceCta.href}>
                <Button variant="outline">{ABOUT.certificationsSection.complianceCta.label}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Company Statistics */}
      <section
        className="relative bg-muted"
        aria-label="Company Statistics"
      >
        <div className="section-container section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              By the Numbers
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our track record speaks for itself. These numbers
              represent the trust our clients place in us every day.
            </p>
          </div>
          <div className="mt-12">
            <StatsGrid
              stats={STATS}
              columns={3}
            />
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <FinalCtaSection content={FINAL_CTA} />
    </>
  );
}

