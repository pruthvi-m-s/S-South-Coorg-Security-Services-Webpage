import IndustriesHero from "@/components/sections/IndustriesHero";
import IndustryExplorer from "@/components/sections/IndustryExplorer";
import FaqPreview from "@/components/sections/FaqPreview";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { INDUSTRIES, INDUSTRIES_PAGE, FAQS, FINAL_CTA } from "@/content";
import { ROUTES } from "@/lib/routes";

export default function IndustriesPage() {
  const industryFaqs = FAQS.filter((faq) => faq.category === "Coverage" || faq.id === "faq-general-1" || faq.id === "faq-process-1" || faq.id === "faq-process-2");
  return <>
    <IndustriesHero title={INDUSTRIES_PAGE.hero.title} subtitle={INDUSTRIES_PAGE.hero.subtitle} />
    <IndustryExplorer industries={INDUSTRIES} />
    <FaqPreview title={INDUSTRIES_PAGE.faqPreview.title} subtitle={INDUSTRIES_PAGE.faqPreview.subtitle} faqs={industryFaqs} count={4} viewAllHref={ROUTES.faqs} />
    <FinalCtaSection content={FINAL_CTA} />
  </>;
}
