import { createElement } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
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
      <div className="section-container py-16 sm:py-20 lg:py-24">
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
              INDUSTRY
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
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#b52b22] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#8f1912]"
              >
                {ctaLabel}
                <ArrowRight
                  className="size-4"
                  aria-hidden="true"
                />
              </Link>

              {CONTACT.phone && (
                <a
                  href={`tel:${CONTACT.phone}`}
                  data-analytics-cta="industry_detail_call"
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#3a3835] px-5 text-sm font-semibold text-[#f5f1e8] transition-colors hover:border-[#b52b22] hover:bg-[#b52b22]/10"
                >
                  <Phone size={16} aria-hidden="true" />
                  Call Us Now
                </a>
              )}

              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-cta="industry_detail_whatsapp"
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#25D366]/30 px-5 text-sm font-semibold text-[#25D366] transition-colors hover:border-[#25D366] hover:bg-[#25D366]/10"
                >
                  <WhatsAppIcon className="size-4" />
                  WhatsApp Us
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
