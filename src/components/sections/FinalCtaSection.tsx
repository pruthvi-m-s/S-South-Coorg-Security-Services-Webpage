import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { CtaContent } from "@/content/cta";

interface FinalCtaSectionProps {
  content: CtaContent;
  className?: string;
}

function isExternalHref(href: string) {
  return (
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("http")
  );
}

export default function FinalCtaSection({
  content,
  className,
}: FinalCtaSectionProps) {
  const {
    heading,
    supportingText,
    primaryCta,
    secondaryCta,
    tertiaryCta,
  } = content;

  return (
    <section
      className={cn(
        "bg-[#191918] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="final-cta-title"
    >
      <div className="section-container section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]"
            >
              Start with the requirement
            </motion.p>

            <motion.h2
              id="final-cta-title"
              variants={fadeUp}
              className="mt-3 max-w-xl font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
            >
              {heading}
            </motion.h2>
          </div>

          <div>
            <motion.p
              variants={fadeUp}
              className="max-w-xl text-base leading-7 text-[#b4aea5] sm:text-lg"
            >
              {supportingText}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 grid gap-3 sm:grid-cols-3"
            >
              {isExternalHref(primaryCta.href) ? (
                <a href={primaryCta.href}>
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full"
                    data-analytics-cta="final_cta_primary"
                  >
                    {primaryCta.label}
                    <ArrowRight
                      className="ml-1 size-4"
                      aria-hidden="true"
                    />
                  </Button>
                </a>
              ) : (
                <Link to={primaryCta.href}>
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full"
                    data-analytics-cta="final_cta_primary"
                  >
                    {primaryCta.label}
                    <ArrowRight
                      className="ml-1 size-4"
                      aria-hidden="true"
                    />
                  </Button>
                </Link>
              )}

              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  target={
                    secondaryCta.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    secondaryCta.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-[#3a3835] bg-transparent text-[#f5f1e8] hover:border-[#b52b22] hover:bg-[#b52b22]/10 hover:text-[#f5f1e8]"
                    data-analytics-cta="final_cta_call"
                  >
                    <Phone className="mr-1 size-4" aria-hidden="true" />
                    {secondaryCta.label}
                  </Button>
                </a>
              )}

              {tertiaryCta && (
                <a
                  href={tertiaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-[#25D366]/30 bg-transparent text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366]"
                    data-analytics-cta="final_cta_whatsapp"
                  >
                    <WhatsAppIcon className="mr-1 size-4" />
                    {tertiaryCta.label}
                  </Button>
                </a>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}