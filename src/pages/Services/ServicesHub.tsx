import ServicesHero from "@/components/sections/ServicesHero";
import ServiceShowcase from "@/components/sections/ServiceShowcase";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessSection from "@/components/sections/ProcessSection";
import FaqPreview from "@/components/sections/FaqPreview";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { SERVICES, SERVICES_HUB, ABOUT, FAQS, FINAL_CTA } from "@/content";
import { ROUTES } from "@/lib/routes";

export default function ServicesHubPage() {
  return (
    <>
      <ServicesHero title={SERVICES_HUB.hero.title} subtitle={SERVICES_HUB.hero.subtitle} />
      <ServiceShowcase services={SERVICES} title={SERVICES_HUB.intro.title} />
      <WhyChooseUs title={ABOUT.whyChooseUs.title} subtitle={ABOUT.whyChooseUs.subtitle} items={ABOUT.whyChooseUs.items} />
      <ProcessSection title={ABOUT.process.title} subtitle={ABOUT.process.subtitle} steps={ABOUT.process.steps} />
      <FaqPreview title={SERVICES_HUB.faqPreview.title} subtitle={SERVICES_HUB.faqPreview.subtitle} faqs={FAQS.slice(0, 5)} count={5} viewAllHref={ROUTES.faqs} />
      <FinalCtaSection content={FINAL_CTA} />
    </>
  );
}
