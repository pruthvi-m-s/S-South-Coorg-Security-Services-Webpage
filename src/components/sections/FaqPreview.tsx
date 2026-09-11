import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { Faq } from "@/types";

interface FaqPreviewProps {
  title: string;
  subtitle: string;
  faqs: Faq[];
  count?: number;
  viewAllHref: string;
  className?: string;
}

export default function FaqPreview({
  title,
  subtitle,
  faqs,
  count = 5,
  viewAllHref,
  className,
}: FaqPreviewProps) {
  if (faqs.length === 0) return null;

  const displayedFaqs = faqs.slice(0, count);

  return (
    <section
      className={cn(
        "bg-[#10100f] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="services-faq-title"
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
                id="services-faq-title"
                variants={fadeUp}
                className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
              >
                {title}
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-lg text-sm leading-7 text-[#b4aea5] sm:text-base"
              >
                {subtitle}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-7"
              >
                <Link to={viewAllHref}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#3a3835] bg-transparent text-[#f5f1e8] hover:border-[#b52b22] hover:bg-[#b52b22]/10 hover:text-[#f5f1e8]"
                  >
                    View all FAQs
                    <ArrowRight
                      className="ml-1 size-4"
                      aria-hidden="true"
                    />
                  </Button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              className="border-t border-[#2b2927]"
            >
              {displayedFaqs.map((faq, index) => (
                <article
                  key={faq.id}
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}