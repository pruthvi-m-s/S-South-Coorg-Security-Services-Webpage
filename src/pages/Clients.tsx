import ClientsHero from "@/components/sections/ClientsHero";
import ClientTrustExperience from "@/components/sections/ClientTrustExperience";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import {
  CLIENTS_PAGE,
  FINAL_CTA,
  STATS,
} from "@/content";

export default function ClientsPage() {
  return (
    <div className="bg-[#10100f] text-[#f5f1e8]">
      <ClientsHero
        title={CLIENTS_PAGE.hero.title}
        subtitle={CLIENTS_PAGE.hero.subtitle}
      />

      <ClientTrustExperience
        categories={CLIENTS_PAGE.categories}
        stats={STATS}
        process={CLIENTS_PAGE.process}
      />

      <FinalCtaSection content={FINAL_CTA} />
    </div>
  );
}