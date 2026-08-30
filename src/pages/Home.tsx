import Hero from "@/components/sections/Hero";
import TrustStats from "@/components/sections/TrustStats";
import ServicesPreview from "@/components/sections/ServicesPreview";
import HomeProcessTimeline from "@/components/sections/HomeProcessTimeline";
import ImageWheel from "@/components/sections/ImageWheel";
import FounderSection from "@/components/sections/FounderSection";
import HomeContactCta from "@/components/sections/HomeContactCta";
import TrustRibbon from "@/components/sections/TrustRibbon";
import EmergencyHotlineCard from "@/components/sections/EmergencyHotlineCard";
import {
  HERO,
  CERTIFICATIONS,
  STATS,
  SERVICES,
  ABOUT,
  FOUNDER,
  COMPLIANCE_PAGE,
} from "@/content";

export default function HomePage() {
  return (
    <>
      {/* HERO — DARK */}
      <div className="bg-[#10100f] text-[#f5f1e8]">
        <Hero content={HERO} />
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

      {/* PROBLEM — DARK */}
      <section
        className="border-t border-[#2b2927] bg-[#191918] text-[#f5f1e8]"
        aria-labelledby="home-problem-title"
      >
        <div className="section-container section-padding">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div className="max-w-md">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]">
                The problem
              </p>

              <h2
                id="home-problem-title"
                className="mt-3 max-w-sm font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
              >
                Security should not become another problem to manage.
              </h2>
            </div>

            <div className="grid gap-0 border-t border-[#2b2927] sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Absent or unreliable guards",
                  text: "One missed shift should not leave your team scrambling to cover the gate.",
                },
                {
                  number: "02",
                  title: "Weak supervision",
                  text: "Deployment alone is not enough. Someone needs to remain accountable for standards and discipline.",
                },
                {
                  number: "03",
                  title: "Poor access control",
                  text: "Visitor, vendor and material movement need clear procedures that fit the site.",
                },
                {
                  number: "04",
                  title: "Too many vendors",
                  text: "Security, manpower and facility support become harder to manage when accountability is fragmented.",
                },
              ].map((item) => (
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
                The SSCSS approach
              </p>

              <h2
                id="home-solution-title"
                className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
              >
                One accountable partner for the people and processes behind
                your site.
              </h2>
            </div>

            <div className="grid gap-0 border-t border-[#2b2927]">
              {[
                {
                  title: "Understand the site",
                  text: "We start with your property, operating hours, access points, staffing requirements and practical constraints.",
                },
                {
                  title: "Build the right deployment",
                  text: "The service mix is shaped around the requirement rather than forcing every client into the same staffing model.",
                },
                {
                  title: "Maintain standards",
                  text: "Verification, training, supervision and reporting form part of the operational picture — not just the initial deployment.",
                },
                {
                  title: "Stay accountable",
                  text: "Your team should know who to contact, what happens next and how issues are handled.",
                },
              ].map((item) => (
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

      {/* TRUST / CREDENTIALS — DARK */}
      <div className="bg-[#10100f] text-[#f5f1e8]">
        <TrustStats
          certifications={CERTIFICATIONS}
          stats={STATS}
          pendingLabel={COMPLIANCE_PAGE.statusLabels.pending}
        />
      </div>

      {/* SERVICES — DARK */}
      <div className="bg-[#10100f] text-[#f5f1e8]">
        <ServicesPreview services={SERVICES} />
      </div>

      {/* REAL PEOPLE — DARK */}
      <ImageWheel />

      {/* PROCESS — ONLY CREAM HIGHLIGHT SECTION */}
      <HomeProcessTimeline steps={ABOUT.process.steps} />

      {/* PROOF / STATS — DARK */}
      <section
        className="bg-[#10100f] text-[#f5f1e8]"
        aria-labelledby="home-proof-title"
      >
        <div className="section-container section-padding">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]">
                Proof, not promises
              </p>

              <h2
                id="home-proof-title"
                className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
              >
                A security partner should be able to show how it works.
              </h2>
            </div>

            <div className="grid gap-0 border-t border-[#2b2927] sm:grid-cols-3">
              <div className="border-b border-[#2b2927] py-7 sm:border-b-0 sm:border-r sm:pr-8">
                <p className="font-heading text-4xl font-semibold text-[#f5f1e8] sm:text-5xl">
                  2008
                </p>

                <p className="mt-2 text-sm leading-6 text-[#b4aea5]">
                  SSCSS company operations began in Bengaluru.
                </p>
              </div>

              <div className="border-b border-[#2b2927] py-7 sm:border-b-0 sm:border-r sm:px-8">
                <p className="font-heading text-4xl font-semibold text-[#f5f1e8] sm:text-5xl">
                  100+
                </p>

                <p className="mt-2 text-sm leading-6 text-[#b4aea5]">
                  Trained personnel represented in the current business
                  information.
                </p>
              </div>

              <div className="py-7 sm:pl-8">
                <p className="font-heading text-4xl font-semibold text-[#f5f1e8] sm:text-5xl">
                  50+
                </p>

                <p className="mt-2 text-sm leading-6 text-[#b4aea5]">
                  Clients represented across the current company profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER — DARK */}
      <div className="bg-[#10100f] text-[#f5f1e8]">
        <FounderSection content={FOUNDER} />
      </div>

      {/* FINAL CONTACT — DARK */}
      <HomeContactCta />
    </>
  );
}