// ============================================================
// SSCSS — About Page
// 7 sections in order:
//   1. About Hero
//   2. Company Story
//   3. Meet Our Founder (AboutFounderPortrait)
//   4. Process (reused component)
//   5. Certifications & Compliance (reused AboutEvidenceSection)
//   6. Company Statistics (reused StatsGrid)
//   7. Final CTA (reused component)
// Content-driven: all copy from content layer. No hardcoded text.
// ============================================================

import AboutHero from "@/components/sections/AboutHero";
import CompanyStory from "@/components/sections/CompanyStory";
import ProcessSection from "@/components/sections/ProcessSection";
import AboutFounderPortrait from "@/components/sections/AboutFounderPortrait";
import AboutEvidenceSection from "@/components/sections/AboutEvidenceSection";
import StatsGrid from "@/components/sections/StatsGrid";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import {
  ABOUT,
  CERTIFICATIONS,
  STATS,
  FINAL_CTA,
  FOUNDER,
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
        entries={ABOUT.history.entries}
        fallbackImage={ABOUT.heroImage}
        videoSrc={ABOUT.story.videoSrc}
      />

      <AboutFounderPortrait content={FOUNDER} />

      {/* Process */}
      <ProcessSection
        title={ABOUT.process.title}
        subtitle={ABOUT.process.subtitle}
        steps={ABOUT.process.steps}
      />

      <AboutEvidenceSection certifications={CERTIFICATIONS} href={ABOUT.certificationsSection.complianceCta.href} />

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

