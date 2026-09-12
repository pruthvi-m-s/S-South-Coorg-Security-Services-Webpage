import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import HeadlineReveal from "@/components/common/HeadlineReveal";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { ROUTES } from "@/lib/routes";
import { CONTACT } from "@/content";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";

interface IndustriesHeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function IndustriesHero({
  title,
  subtitle,
  className,
}: IndustriesHeroProps) {
  return (
    <section
      className={cn(
        "overflow-hidden bg-[#191918] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="industries-hero-title"
    >
      <div className="section-container py-20 sm:py-24 lg:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c45a52]"
            >
              Industries we support
            </motion.p>

            <div className="mt-4">
              <HeadlineReveal
                as="h1"
                delay={0.1}
                className="max-w-3xl font-heading text-5xl font-semibold leading-[0.99] tracking-[-0.045em] text-[#f5f1e8] sm:text-6xl lg:text-[4.25rem]"
              >
                {title}
              </HeadlineReveal>
            </div>
          </div>

          <div>
            <motion.p
              variants={fadeUp}
              className="max-w-2xl border-l-2 border-[#b52b22] pl-6 text-base leading-7 text-[#b4aea5] sm:text-lg"
            >
              {subtitle}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                to={`${ROUTES.contact}#contact-form`}
                data-analytics-cta="industries_hero_contact"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Discuss your requirement
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </Link>

              {CONTACT.phone && (
                <a
                  href={`tel:${CONTACT.phone}`}
                  data-analytics-cta="industries_hero_call"
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

              {CONTACT.whatsapp?.replace(/\D/g, "") && (
                <a
                  href={`https://wa.me/${CONTACT.whatsapp?.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-cta="industries_hero_whatsapp"
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
        </motion.div>
      </div>
    </section>
  );
}