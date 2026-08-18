import ClientsHero from "@/components/sections/ClientsHero";
import ClientTrustExperience from "@/components/sections/ClientTrustExperience";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { CLIENTS_PAGE, TESTIMONIALS, FINAL_CTA, STATS } from "@/content";

export default function ClientsPage() {
  return <>
    <ClientsHero title={CLIENTS_PAGE.hero.title} subtitle={CLIENTS_PAGE.hero.subtitle} />
    <ClientTrustExperience categories={CLIENTS_PAGE.categories} stats={STATS} testimonials={TESTIMONIALS} />
    <FinalCtaSection content={FINAL_CTA} />
  </>;
}
