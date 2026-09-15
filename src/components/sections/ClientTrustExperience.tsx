import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { ClientCategory } from "@/content/clients-page";
import type { Stat, ProcessStep } from "@/types";
import ClientCategoryCard from "@/components/sections/ClientCategoryCard";
import ProcessSection from "@/components/sections/ProcessSection";
import { ROUTES } from "@/lib/routes";
import {
  staggerContainer,
  viewportOptions,
} from "@/lib/motion";

function AnimatedStat({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();

        if (
          window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
          stat.value <= 0
        ) {
          setValue(stat.value);
          return;
        }

        const start = performance.now();
        const duration = 800;

        let frame = 0;

        const update = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);

          setValue(Math.round(stat.value * eased));

          if (progress < 1) {
            frame = window.requestAnimationFrame(update);
          }
        };

        frame = window.requestAnimationFrame(update);

        return () => window.cancelAnimationFrame(frame);
      },
      { threshold: 0.7 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [stat.value]);

  const evidenceLabels: Record<string, string> = {
    "stat-years": "established 2008",
    "stat-guards": "active personnel",
    "stat-clients": "partner organizations",
  };

  return (
    <div>
      <span
        ref={ref}
        className="font-heading text-4xl font-semibold text-[#f5f1e8] sm:text-5xl"
      >
        {value}
        <span className="text-[#b52b22]">+</span>
      </span>

      <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[#c45a52]">
        {stat.label}
      </p>

      <p className="mt-1 text-xs text-[#9a9590]">
        {evidenceLabels[stat.id] ?? ""}
      </p>
    </div>
  );
}

export default function ClientTrustExperience({
  categories,
  stats,
  process,
}: {
  categories: ClientCategory[];
  stats: Stat[];
  process: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
}) {
  return (
    <>
      <section
        className="border-y border-[#2b2927] bg-[#191918] py-6"
        aria-label="Client sectors"
      >
        <div className="section-container flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {categories.map((category) => (
            <span
              key={category.title}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#9a9590]"
            >
              <span
                className="size-1.5 rounded-full bg-[#b52b22]"
                aria-hidden="true"
              />
              {category.title}
            </span>
          ))}
        </div>
      </section>

      <section
        className="bg-[#f3efe6] text-[#171615]"
        aria-labelledby="clients-category-title"
      >
        <div className="section-container section-padding">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ad241c]">
                Where we support
              </p>

              <h2
                id="clients-category-title"
                className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#171615] sm:text-5xl"
              >
                Different environments. Different requirements.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#6a655e] sm:text-base">
                SSCSS works across residential, corporate, healthcare,
                educational, hospitality, industrial and institutional
                environments.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="grid gap-px border border-[#d9d1c5] bg-[#d9d1c5] sm:grid-cols-2"
            >
              {categories.map((category) => (
                <ClientCategoryCard
                  key={category.title}
                  category={category}
                  className="border-0 bg-[#f3efe6] text-[#171615] hover:bg-[#ebe5da] hover:border-0"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="bg-[#10100f] text-[#f5f1e8]"
        aria-labelledby="clients-trust-title"
      >
        <div className="section-container section-padding">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]">
                Why organizations trust us
              </p>

              <h2
                id="clients-trust-title"
                className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
              >
                Built around reliable service, not just deployment.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#b4aea5] sm:text-base">
                Our operating approach is designed around the practical needs
                of the sites and teams we support.
              </p>

              <Link
                to={ROUTES.contact}
                className="mt-7 inline-flex min-h-[44px] items-center gap-2 py-2 text-sm font-semibold text-[#c45a52] transition-colors hover:text-white"
              >
                Start a conversation
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="border-t border-[#2b2927]">
              {[
                {
                  title: "Professional deployment",
                  text: "Personnel and service scope are shaped around the requirement and operating environment.",
                },
                {
                  title: "Ongoing supervision",
                  text: "Service quality is supported through supervision, reporting and continued coordination.",
                },
                {
                  title: "Flexible support",
                  text: "Security, manpower and facility support can be combined as requirements evolve.",
                },
                {
                  title: "Long-term relationships",
                  text: "The goal is dependable service and clear accountability over the life of the engagement.",
                },
              ].map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  className="grid gap-3 border-b border-[#2b2927] py-6 sm:grid-cols-[0.7fr_1.3fr] sm:gap-8"
                >
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-[#ded8cf]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-[#9a9590] sm:text-base">
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-6 border-y border-[#2b2927] py-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <AnimatedStat key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSection
        title={process.title}
        subtitle={process.subtitle}
        steps={process.steps}
      />
    </>
  );
}