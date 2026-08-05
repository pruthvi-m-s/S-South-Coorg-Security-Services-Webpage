import ComplianceSection from "@/components/sections/ComplianceSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { CERTIFICATIONS, COMPLIANCE_PAGE, FINAL_CTA } from "@/content";

export default function CompliancePage() {
  return (
    <>
      <section className="relative bg-muted" aria-label="Compliance and documentation">
        <div className="section-container section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              {COMPLIANCE_PAGE.hero.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {COMPLIANCE_PAGE.hero.subtitle}
            </p>
          </div>
        </div>
      </section>
      <section className="relative bg-background" aria-label="Compliance introduction">
        <div className="section-container pt-16 pb-2 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              {COMPLIANCE_PAGE.introduction.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {COMPLIANCE_PAGE.introduction.description}
            </p>
          </div>
        </div>
      </section>
      <ComplianceSection certifications={CERTIFICATIONS} details={COMPLIANCE_PAGE.certificationDetails} statusLabels={COMPLIANCE_PAGE.statusLabels} />
      <FinalCtaSection content={FINAL_CTA} />
    </>
  );
}
