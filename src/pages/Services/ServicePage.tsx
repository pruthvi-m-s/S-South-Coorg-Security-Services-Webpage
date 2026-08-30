import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  getServiceBySlug,
  getRelatedServices,
  getIndustriesForService,
  FINAL_CTA,
} from "@/content";
import NotFoundPage from "@/pages/NotFound";
import ServiceDetailHero from "@/components/sections/ServiceDetailHero";
import ServiceOverview from "@/components/sections/ServiceOverview";
import KeyFeatures from "@/components/sections/KeyFeatures";
import IndustriesServedSection from "@/components/sections/IndustriesServedSection";
import ProcessSection from "@/components/sections/ProcessSection";
import RelatedServices from "@/components/sections/RelatedServices";
import PricingDisclaimerNote from "@/components/sections/PricingDisclaimerNote";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import { motion } from "framer-motion";
import { trackServicePageView } from "@/lib/analytics";

function isSafeSlug(
  value: string | undefined,
): value is string {
  return Boolean(
    value && /^[a-z0-9-]{1,80}$/.test(value),
  );
}

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const safeSlug = isSafeSlug(slug) ? slug : undefined;

  const service = useMemo(
    () => (safeSlug ? getServiceBySlug(safeSlug) : undefined),
    [safeSlug],
  );

  const relatedServices = useMemo(
    () => (safeSlug ? getRelatedServices(safeSlug) : []),
    [safeSlug],
  );

  const industries = useMemo(
    () => (safeSlug ? getIndustriesForService(safeSlug) : []),
    [safeSlug],
  );

  useEffect(() => {
    if (service?.slug) {
      trackServicePageView({
        service_slug: service.slug,
      });
    }
  }, [service?.slug]);

  if (!service) {
    return <NotFoundPage />;
  }

  return (
    <main className="bg-[#10100f] text-[#f5f1e8]">
      {/* HERO */}
      <ServiceDetailHero
        name={service.name}
        tagline={service.shortTagline}
        image={service.heroImage}
      />

      {/* OVERVIEW — DARK */}
      <ServiceOverview
        title="What this service solves"
        overview={service.overview}
      />

      {/* BENEFITS — DARK */}
      <KeyFeatures
        title="What you get"
        subtitle="The practical outcomes and service standards built into the engagement."
        features={service.benefits}
      />

      {/* WHY SSCSS — DARK */}
      {service.whyChooseUs?.length > 0 && (
        <WhyServiceSection
          items={service.whyChooseUs}
        />
      )}

      {/* INDUSTRIES — DARK */}
      <IndustriesServedSection
        title="Where this service fits"
        subtitle="Industries and operating environments where this service can be relevant."
        industries={industries}
      />

      {/* PROCESS — CREAM */}
      <ProcessSection
        title="How the engagement works"
        subtitle="A clear path from the initial requirement through deployment and ongoing support."
        steps={service.process}
      />

      {/* RELATED SERVICES — DARK */}
      <RelatedServices
        title="Services that can complement this"
        subtitle="Explore related SSCSS services that may form part of the wider requirement."
        services={relatedServices}
      />

      {/* PRICING — DARK */}
      <div className="bg-[#10100f]">
        <div className="section-container py-8 sm:py-10">
          <PricingDisclaimerNote className="max-w-4xl text-[#8f8981]" />
        </div>
      </div>

      {/* CTA — DARK */}
      <FinalCtaSection content={FINAL_CTA} />
    </main>
  );
}

interface WhyServiceItem {
  title: string;
  description: string;
}

function WhyServiceSection({
  items,
}: {
  items: WhyServiceItem[];
}) {
  return (
    <section
      className="bg-[#191918] text-[#f5f1e8]"
      aria-labelledby="service-why-title"
    >
      <div className="section-container section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]"
              >
                Why SSCSS
              </motion.p>

              <motion.h2
                id="service-why-title"
                variants={fadeUp}
                className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
              >
                The service is only part of the job.
              </motion.h2>
            </div>

            <motion.div
              variants={fadeUp}
              className="grid gap-px border border-[#2b2927] bg-[#2b2927] sm:grid-cols-2"
            >
              {items.map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className="bg-[#191918] p-6 sm:p-7"
                >
                  <span className="text-xs font-semibold tracking-[0.14em] text-[#c45a52]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-4 font-heading text-xl font-semibold tracking-tight text-[#f5f1e8] sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#b4aea5]">
                    {item.description}
                  </p>
                </article>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}