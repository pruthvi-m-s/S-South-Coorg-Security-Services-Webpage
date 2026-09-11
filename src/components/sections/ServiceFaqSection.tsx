import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { ServiceFaq } from "@/types";

interface ServiceFaqSectionProps {
  title?: string;
  subtitle?: string;
  faqs: ServiceFaq[];
  cta?: {
    label: string;
    href: string;
  };
  className?: string;
}

export default function ServiceFaqSection({
  title = "Common questions",
  subtitle = "Straight answers to practical questions buyers usually have before engaging this service.",
  faqs,
  cta,
  className,
}: ServiceFaqSectionProps) {
  if (faqs.length === 0) return null;

  return (
    <section
      className={cn(
        "bg-[#191918] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="service-faq-title"
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
                Common questions
              </motion.p>

              <motion.h2
                id="service-faq-title"
                variants={fadeUp}
                className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
              >
                {title}
              </motion.h2>

              {subtitle && (
                <motion.p
                  variants={fadeUp}
                  className="mt-5 max-w-lg text-sm leading-7 text-[#b4aea5] sm:text-base"
                >
                  {subtitle}
                </motion.p>
              )}
            </div>

            <motion.div
              variants={fadeUp}
              className="border-t border-[#2b2927]"
            >
              {faqs.map((faq, index) => (
                <article
                  key={index}
                  className="border-b border-[#2b2927] py-6 sm:py-7"
                >
                  <div className="flex gap-5">
                    <span className="pt-1 text-xs font-semibold tracking-[0.14em] text-[#c45a52]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="font-heading text-xl font-semibold tracking-tight text-[#f5f1e8] sm:text-2xl">
                        {faq.question}
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#b4aea5] sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              ))}

              {cta && (
                <div className="mt-8 border-t border-[#2b2927] pt-6">
                  <p className="text-sm text-[#b4aea5]">
                    Still have questions?{" "}
                    <Link
                      to={cta.href}
                      className="font-medium text-[#c45a52] transition-colors hover:text-[#b52b22]"
                      data-analytics-cta="service_faq_inline_cta"
                    >
                      {cta.label}
                      <ArrowRight className="ml-1 inline size-3.5" aria-hidden="true" />
                    </Link>
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
