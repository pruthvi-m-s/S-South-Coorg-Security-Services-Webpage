import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { Industry } from "@/types";

interface IndustryPreviewProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  industries: Industry[];
  className?: string;
}

export default function IndustryPreview({
  eyebrow,
  title,
  subtitle,
  industries,
  className,
}: IndustryPreviewProps) {
  if (industries.length === 0) return null;

  return (
    <section
      className={cn(
        "bg-[#10100f] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="home-industries-title"
    >
      <div className="section-container section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid items-start gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]"
            >
              {eyebrow}
            </motion.p>

            <motion.h2
              variants={fadeUp}
              id="home-industries-title"
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

            <motion.div
              variants={fadeUp}
              className="mt-7"
            >
              <Link to={ROUTES.industries}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#3a3835] bg-transparent text-[#f5f1e8] hover:border-[#b52b22] hover:bg-[#b52b22]/10 hover:text-[#f5f1e8]"
                >
                  Explore industries
                  <ArrowUpRight
                    className="ml-1 size-4"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.ul
            variants={fadeUp}
            className="grid gap-px border border-[#2b2927] bg-[#2b2927] sm:grid-cols-2 lg:grid-cols-3"
          >
            {industries.map((industry) => (
              <li key={industry.slug}>
                <Link
                  to={ROUTES.industries}
                  className="group flex min-h-full flex-col justify-between gap-4 bg-[#191918] p-6 sm:p-7 transition-colors hover:bg-[#1d1d1c]"
                >
                  <span className="text-sm font-semibold leading-5 text-[#ded8cf] transition-colors group-hover:text-[#b52b22]">
                    {industry.name}
                  </span>

                  <ArrowUpRight
                    className="size-4 text-[#9a9590] transition-colors group-hover:text-[#b52b22]"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}