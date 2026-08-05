// ============================================================
// SSCSS — Contact CTA Section
// Lightweight contact help section displayed above Final CTA.
// Content-driven: heading, supporting text, phone, email,
// contact page button from content layer.
// ============================================================

import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import { CONTACT } from "@/content";

// ─── Types ──────────────────────────────────────────────────

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

// ─── ContactCtaSection ───────────────────────────────────────

export default function ContactCtaSection({
  content,
  className,
}: ContactCtaSectionProps) {
  const { heading, supportingText, phoneLabel, emailLabel, buttonLabel, buttonHref } = content;

  const hasPhone = Boolean(CONTACT.phone);
  const hasEmail = Boolean(CONTACT.email);

  return (
    <section
      className={cn(
        "relative bg-muted",
        className,
      )}
      aria-label="Contact Support"
    >
      <div className="section-container section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className={cn(
              "font-heading text-3xl font-semibold leading-tight tracking-tight",
              "sm:text-4xl",
              "text-ink",
            )}
          >
            {heading}
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            variants={fadeUp}
            className={cn(
              "mx-auto mt-4 max-w-2xl text-base leading-relaxed",
              "sm:text-lg",
              "text-muted-foreground",
            )}
          >
            {supportingText}
          </motion.p>

          {/* Contact Details */}
          {(hasPhone || hasEmail) && (
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8"
            >
              {/* Phone */}
              {hasPhone && (
                <a
                  href={`tel:${CONTACT.phone}`}
                  data-analytics-component="contact_cta_phone"
                  className={cn(
                    "group inline-flex items-center gap-2.5 text-base font-medium",
                    "text-ink transition-colors duration-300 ease-premium-out",
                    "hover:text-primary",
                    "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
                  )}
                  aria-label={`${phoneLabel}: ${CONTACT.phone}`}
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-normal text-muted-foreground">
                      {phoneLabel}
                    </span>
                    <span>{CONTACT.phone}</span>
                  </span>
                </a>
              )}

              {/* Email */}
              {hasEmail && (
                <a
                  href={`mailto:${CONTACT.email}`}
                  className={cn(
                    "group inline-flex items-center gap-2.5 text-base font-medium",
                    "text-ink transition-colors duration-300 ease-premium-out",
                    "hover:text-primary",
                    "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
                  )}
                  aria-label={`${emailLabel}: ${CONTACT.email}`}
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-normal text-muted-foreground">
                      {emailLabel}
                    </span>
                    <span>{CONTACT.email}</span>
                  </span>
                </a>
              )}
            </motion.div>
          )}

          {/* Contact Page CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex justify-center"
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
                  strokeWidth={2}
                  className="ml-1.5 transition-transform duration-300 ease-premium-out group-hover/cta:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

