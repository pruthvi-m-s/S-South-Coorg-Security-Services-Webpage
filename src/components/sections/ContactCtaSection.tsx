import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import { CONTACT } from "@/content";

interface ContactCtaContent {
  heading: string;
  supportingText: string;
  phoneLabel: string;
  emailLabel: string;
  buttonLabel: string;
  buttonHref: string;
}

interface ContactCtaSectionProps {
  content: ContactCtaContent;
  className?: string;
}

export default function ContactCtaSection({
  content,
  className,
}: ContactCtaSectionProps) {
  const {
    heading,
    supportingText,
    phoneLabel,
    emailLabel,
    buttonLabel,
    buttonHref,
  } = content;

  const hasPhone = Boolean(CONTACT.phone);
  const hasEmail = Boolean(CONTACT.email);

  return (
    <section
      className={cn(
        "bg-[#191918] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="faq-contact-cta-title"
    >
      <div className="section-container section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]"
            >
              Need more clarity?
            </motion.p>

            <motion.h2
              id="faq-contact-cta-title"
              variants={fadeUp}
              className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
            >
              {heading}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-lg text-sm leading-7 text-[#b4aea5] sm:text-base"
            >
              {supportingText}
            </motion.p>
          </div>

          <div>
            {(hasPhone || hasEmail) && (
              <motion.div
                variants={fadeUp}
                className="grid gap-px border border-[#2b2927] bg-[#2b2927] sm:grid-cols-2"
              >
                {hasPhone && (
                  <a
                    href={`tel:${CONTACT.phone}`}
                    data-analytics-component="faq_contact_phone"
                    className="bg-[#10100f] p-6 transition-colors hover:bg-[#151514] sm:p-7"
                  >
                    <Phone
                      className="size-5 text-[#c45a52]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.13em] text-[#77716a]">
                      {phoneLabel}
                    </p>

                    <p className="mt-2 text-sm font-semibold text-[#ded8cf]">
                      {CONTACT.phone}
                    </p>
                  </a>
                )}

                {hasEmail && (
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="bg-[#10100f] p-6 transition-colors hover:bg-[#151514] sm:p-7"
                  >
                    <Mail
                      className="size-5 text-[#c45a52]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.13em] text-[#77716a]">
                      {emailLabel}
                    </p>

                    <p className="mt-2 break-all text-sm font-semibold text-[#ded8cf]">
                      {CONTACT.email}
                    </p>
                  </a>
                )}
              </motion.div>
            )}

            <motion.div
              variants={fadeUp}
              className="mt-6"
            >
              <Link to={buttonHref}>
                <Button
                  variant="default"
                  size="lg"
                  className="group/cta"
                >
                  {buttonLabel}
                  <ArrowRight
                    size={16}
                    className="ml-1.5 transition-transform duration-300 group-hover/cta:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}