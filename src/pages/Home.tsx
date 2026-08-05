// ============================================================
// SSCSS — Home Page
// Hero (Milestone 1.2) + Trust Indicators (Milestone 1.3)
// + Services Preview (Milestone 1.4)
// + Why Choose Us (Milestone 1.6)
// + Process (Milestone 1.7)
// + Testimonials (Milestone 1.8)
// + Founder (Meet Our Founder)
// + Final CTA (Milestone 1.9)
// + Footer (Milestone 1.10)
// ============================================================

import Hero from "@/components/sections/Hero";
import TrustStats from "@/components/sections/TrustStats";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FounderSection from "@/components/sections/FounderSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import TrustRibbon from "@/components/sections/TrustRibbon";
import EmergencyHotlineCard from "@/components/sections/EmergencyHotlineCard";
import { HERO, CERTIFICATIONS, STATS, SERVICES, ABOUT, TESTIMONIALS, FOUNDER, FINAL_CTA, COMPLIANCE_PAGE } from "@/content";

export default function HomePage() {
  return (
    <>
      <Hero content={HERO} />

      {/* Trust ribbon directly below Hero — visible without scrolling */}
      <section className="border-b border-border bg-background" aria-label="Trust highlights">
        <div className="section-container py-6">
          <TrustRibbon
            stats={STATS}
            certifications={CERTIFICATIONS}
            psaraLabels={COMPLIANCE_PAGE.psaraBadge}
          />
        </div>
      </section>

      {/* Urgent-requirement hotline for visitors with immediate needs */}
      <section className="bg-background" aria-label="Urgent security requirements">
        <div className="section-container pb-4">
          <EmergencyHotlineCard />
        </div>
      </section>

      <TrustStats
        certifications={CERTIFICATIONS}
        stats={STATS}
        pendingLabel={COMPLIANCE_PAGE.statusLabels.pending}
      />
      <ServicesPreview services={SERVICES} />
      <WhyChooseUs
        title={ABOUT.whyChooseUs.title}
        subtitle={ABOUT.whyChooseUs.subtitle}
        items={ABOUT.whyChooseUs.items}
      />
      <ProcessSection
        title={ABOUT.process.title}
        subtitle={ABOUT.process.subtitle}
        steps={ABOUT.process.steps}
      />
      <TestimonialsSection testimonials={TESTIMONIALS} />
      <FounderSection content={FOUNDER} />
      <FinalCtaSection content={FINAL_CTA} />
    </>
  );
}
