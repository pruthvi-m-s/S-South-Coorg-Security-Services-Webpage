// ============================================================
// SSCSS — Home Page
// Hero (Milestone 1.2) + Trust Indicators (Milestone 1.3)
// + Services Preview (Milestone 1.4)
// + Engagement Process (Milestone 1.7)
// + Real SSCSS people / visual storytelling (ImageWheel)
// + Testimonials (Milestone 1.8)
// + Founder (Meet Our Founder)
// + Final CTA (Milestone 1.9)
// + Footer (Milestone 1.10)
// ============================================================

import Hero from "@/components/sections/Hero";
import TrustStats from "@/components/sections/TrustStats";
import ServicesPreview from "@/components/sections/ServicesPreview";
import HomeProcessTimeline from "@/components/sections/HomeProcessTimeline";
import ImageWheel from "@/components/sections/ImageWheel";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import HomeContactCta from "@/components/sections/HomeContactCta";
import TrustRibbon from "@/components/sections/TrustRibbon";
import EmergencyHotlineCard from "@/components/sections/EmergencyHotlineCard";
import { HERO, CERTIFICATIONS, STATS, SERVICES, ABOUT, TESTIMONIALS, COMPLIANCE_PAGE } from "@/content";

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
      <HomeProcessTimeline steps={ABOUT.process.steps} />
      <ImageWheel />
      <TestimonialsSection testimonials={TESTIMONIALS} />
      <HomeContactCta />
    </>
  );
}
