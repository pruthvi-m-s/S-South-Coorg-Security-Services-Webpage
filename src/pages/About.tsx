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
    <div className="bg-[#10100f] text-[#f5f1e8]">
      {/* HERO — DARK */}
      <AboutHero
        title={ABOUT.heroTitle}
        subtitle={ABOUT.heroSubtitle}
        image={ABOUT.heroImage}
      />

      {/* STORY — DARK */}
      <CompanyStory
        title={ABOUT.story.title}
        paragraphs={ABOUT.story.paragraphs}
        entries={ABOUT.history.entries}
        fallbackImage={ABOUT.heroImage}
        videoSrc={ABOUT.story.videoSrc}
      />

      {/* FOUNDER — DARK */}
      <AboutFounderPortrait content={FOUNDER} />

      {/* PROCESS — CREAM HIGHLIGHT */}
      <ProcessSection
        title={ABOUT.process.title}
        subtitle={ABOUT.process.subtitle}
        steps={ABOUT.process.steps}
      />

      {/* COMPLIANCE — DARK */}
      <AboutEvidenceSection
        certifications={CERTIFICATIONS}
        href={ABOUT.certificationsSection.complianceCta.href}
      />

      {/* STATS — DARK */}
      <section
        className="bg-[#10100f] text-[#f5f1e8]"
        aria-labelledby="about-stats-title"
      >
        <div className="section-container section-padding">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]">
                The numbers
              </p>

              <h2
                id="about-stats-title"
                className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
              >
                Built over time. Measured in people and relationships.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#b4aea5] sm:text-base">
              The current company profile reflects the scale of SSCSS across
              experience, personnel and client relationships.
            </p>
          </div>

          <div className="mt-12 border-y border-[#2b2927]">
            <StatsGrid stats={STATS} columns={3} />
          </div>
        </div>
      </section>

      {/* CTA — DARK */}
      <FinalCtaSection content={FINAL_CTA} />
    </div>
  );
}