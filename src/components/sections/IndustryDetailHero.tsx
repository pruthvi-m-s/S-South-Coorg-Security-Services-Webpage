import { createElement } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import HeadlineReveal from "@/components/common/HeadlineReveal";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { getIcon } from "@/lib/icons";
import { ROUTES } from "@/lib/routes";
import { CONTACT } from "@/content";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";

interface IndustryDetailHeroProps {
  name: string;
  icon: string;
  heroSubtitle?: string;
  ctaLabel?: string;
  className?: string;
}

export default function IndustryDetailHero({
  name,
  icon,
  heroSubtitle,
  ctaLabel = "Discuss your requirement",
  className,
}: IndustryDetailHeroProps) {
  const whatsappNumber = CONTACT.whatsapp?.replace(/\D/g, "");

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#191918] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="industry-detail-title"
    >
      <div className="section-container py-20 sm:py-24 lg:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={viewportOptions}
          className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20"
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="mb-6 flex size-14 items-center justify-center rounded-full border border-[#b52b22]/25 bg-[#3a211f] text-[#c45a52]"
              aria-hidden="true"
            >
              {createElement(getIcon(icon), {
                size: 26,
                strokeWidth: 1.5,
              })}
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c45a52]"
            >
              Industry
            </motion.p>

            <div className="mt-4">
              <HeadlineReveal
                as="h1"
                delay={0.12}
                className="max-w-3xl font-heading text-5xl font-semibold leading-[0.99] tracking-[-0.045em] text-[#f5f1e8] sm:text-6xl lg:text-[4.5rem]"
              >
                {name}
              </HeadlineReveal>
            </div>

            {heroSubtitle && (
              <motion.p
                id="industry-detail-title"
                variants={fadeUp}
                className="mt-6 max-w-xl text-base leading-7 text-[#b4aea5] sm:text-lg"
              >
                {heroSubtitle}
              </motion.p>
            )}

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                to={`${ROUTES.contact}#contact-form`}
                data-analytics-cta="industry_detail_contact"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {ctaLabel}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </Link>

              {CONTACT.phone && (
                <a
                  href={`tel:${CONTACT.phone}`}
                  data-analytics-cta="industry_detail_call"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Phone size={16} aria-hidden="true" />
                    Call Us Now
                  </Button>
                </a>
              )}

              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-cta="industry_detail_whatsapp"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full gap-2 text-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366] sm:w-auto"
                  >
                    <WhatsAppIcon className="size-4" />
                    WhatsApp Us
                  </Button>
                </a>
              )}
            </motion.div>
          </div>

          <div className="hidden lg:block">
            <motion.div
              variants={fadeUp}
              className="border-l-2 border-[#b52b22] pl-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#77716a]">
                What we cover
              </p>
              <p className="mt-3 text-base leading-7 text-[#b4aea5]">
                Security, manpower, and facility solutions tailored to the{" "}
                <span className="font-semibold text-[#ded8cf]">
                  {name.toLowerCase()}
                </span>{" "}
                operating environment.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
