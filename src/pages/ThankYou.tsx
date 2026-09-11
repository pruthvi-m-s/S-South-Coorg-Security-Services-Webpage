import { createElement, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import HeadlineReveal from "@/components/common/HeadlineReveal";
import { Button } from "@/components/ui/button";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import ProcessSection from "@/components/sections/ProcessSection";
import { CONTACT, THANK_YOU } from "@/content";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  viewportOptions,
} from "@/lib/motion";

interface ContactItem {
  label: string;
  value: string;
  href?: string;
  icon: string;
}

export default function ThankYouPage() {
  const contactItems = useMemo<ContactItem[]>(() => {
    const items: ContactItem[] = [];

    if (CONTACT.phone) {
      items.push({
        label: THANK_YOU.contactReminder.phoneLabel,
        value: CONTACT.phone,
        href: `tel:${CONTACT.phone}`,
        icon: THANK_YOU.contactReminder.phoneIcon,
      });
    }

    if (CONTACT.email) {
      items.push({
        label: THANK_YOU.contactReminder.emailLabel,
        value: CONTACT.email,
        href: `mailto:${CONTACT.email}`,
        icon: THANK_YOU.contactReminder.emailIcon,
      });
    }

    if (CONTACT.officeHours) {
      items.push({
        label:
          THANK_YOU.contactReminder.businessHoursLabel,
        value: CONTACT.officeHours,
        icon: THANK_YOU.contactReminder.businessHoursIcon,
      });
    }

    return items;
  }, []);

  return (
    <div className="bg-[#10100f] text-[#f5f1e8]">
      {/* ============================================================
          CONFIRMATION HERO — DARK
          ============================================================ */}
      <section
        className="overflow-hidden bg-[#10100f]"
        aria-labelledby="thank-you-title"
      >
        <div className="section-container py-20 sm:py-24 lg:py-28">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div
              variants={scaleIn}
              className="mx-auto flex size-16 items-center justify-center rounded-full border border-[#b52b22]/30 bg-[#3a211f] text-[#c45a52]"
              aria-hidden="true"
            >
              {createElement(
                getIcon(THANK_YOU.hero.icon),
                {
                  size: 30,
                  strokeWidth: 1.5,
                },
              )}
            </motion.div>

            <div className="mt-7">
              <HeadlineReveal
                as="h1"
                delay={0.1}
                className="font-heading text-5xl font-semibold leading-[1] tracking-[-0.04em] text-[#f5f1e8] sm:text-6xl"
              >
                {THANK_YOU.hero.title}
              </HeadlineReveal>
            </div>

            <motion.p
              id="thank-you-title"
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#b4aea5] sm:text-lg"
            >
              {THANK_YOU.hero.description}
            </motion.p>

            {THANK_YOU.hero.responseTimeNote && (
              <motion.div
                variants={fadeUp}
                className="mx-auto mt-6 inline-flex items-center gap-2 border border-[#2b2927] bg-[#191918] px-4 py-2.5 text-xs font-medium text-[#c8c1b9]"
              >
                <CheckCircle2
                  className="size-4 text-[#c45a52]"
                  aria-hidden="true"
                />
                <span>
                  {THANK_YOU.hero.responseTimeNote}
                </span>
              </motion.div>
            )}

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
            >
              <Link
                to={THANK_YOU.hero.primaryCta.href}
              >
                <Button
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {THANK_YOU.hero.primaryCta.label}
                  <ArrowRight
                    className="ml-1.5 size-4"
                    aria-hidden="true"
                  />
                </Button>
              </Link>

              <Link
                to={THANK_YOU.hero.secondaryCta.href}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-[#3a3835] bg-transparent text-[#f5f1e8] hover:border-[#b52b22] hover:bg-[#b52b22]/10 hover:text-[#f5f1e8] sm:w-auto"
                >
                  {THANK_YOU.hero.secondaryCta.label}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          NEXT STEPS — CREAM HIGHLIGHT
          ============================================================ */}
      <ProcessSection
        title={THANK_YOU.nextSteps.title}
        subtitle={THANK_YOU.nextSteps.subtitle}
        steps={THANK_YOU.nextSteps.steps}
      />

      {/* ============================================================
          QUICK LINKS — DARK
          ============================================================ */}
      <section
        className="bg-[#191918] text-[#f5f1e8]"
        aria-labelledby="thank-you-links-title"
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
                  Continue exploring
                </motion.p>

                <motion.h2
                  id="thank-you-links-title"
                  variants={fadeUp}
                  className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
                >
                  Useful information while you wait.
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="mt-5 max-w-md text-sm leading-7 text-[#b4aea5] sm:text-base"
                >
                  {THANK_YOU.quickLinks.subtitle}
                </motion.p>
              </div>

              <motion.div
                variants={fadeUp}
                className="grid gap-px border border-[#2b2927] bg-[#2b2927] sm:grid-cols-2"
              >
                {THANK_YOU.quickLinks.items.map(
                  (item) => {
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="group bg-[#10100f] p-6 transition-colors duration-300 hover:bg-[#151514] sm:p-7"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <span className="flex size-11 items-center justify-center rounded-full border border-[#b52b22]/25 bg-[#3a211f] text-[#c45a52]">
                            {createElement(
                              getIcon(item.icon),
                              {
                                size: 20,
                                strokeWidth: 1.5,
                                "aria-hidden": true,
                              },
                            )}
                          </span>

                          <ArrowRight
                            className="mt-1 size-4 text-[#77716a] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#c45a52]"
                            aria-hidden="true"
                          />
                        </div>

                        <h3 className="mt-6 font-heading text-xl font-semibold tracking-tight text-[#f5f1e8]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-[#8f8981]">
                          {item.description}
                        </p>
                      </Link>
                    );
                  },
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          CONTACT REMINDER — DARK
          ============================================================ */}
      {contactItems.length > 0 && (
        <section
          className="bg-[#10100f] text-[#f5f1e8]"
          aria-labelledby="thank-you-contact-title"
        >
          <div className="section-container section-padding">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="mx-auto max-w-4xl"
            >
              <motion.p
                variants={fadeUp}
                className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]"
              >
                Direct contact
              </motion.p>

              <motion.h2
                id="thank-you-contact-title"
                variants={fadeUp}
                className="mt-3 text-center font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
              >
                {THANK_YOU.contactReminder.title}
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-[#b4aea5] sm:text-base"
              >
                {THANK_YOU.contactReminder.subtitle}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-10 grid grid-cols-1 gap-px border border-[#2b2927] bg-[#2b2927] sm:grid-cols-3"
              >
                {contactItems.map((item) => {
                  const content = (
                    <div
                      className={cn(
                        "h-full bg-[#191918] p-6 sm:p-7",
                        item.href &&
                          "transition-colors duration-300 hover:bg-[#211f1d]",
                      )}
                    >
                      <span className="flex size-10 items-center justify-center rounded-full border border-[#b52b22]/25 bg-[#3a211f] text-[#c45a52]">
                        {createElement(
                          getIcon(item.icon),
                          {
                            size: 18,
                            strokeWidth: 1.5,
                            "aria-hidden": true,
                          },
                        )}
                      </span>

                      <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.13em] text-[#77716a]">
                        {item.label}
                      </h3>

                      <p className="mt-2 break-words text-sm leading-6 text-[#ded8cf]">
                        {item.value}
                      </p>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      data-analytics-component={
                        item.label.toLowerCase() ===
                        "phone"
                          ? "thank_you_phone"
                          : undefined
                      }
                      aria-label={`${item.label}: ${item.value}`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>
                      {content}
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ============================================================
          FINAL CTA — DARK
          ============================================================ */}
      <FinalCtaSection
        content={THANK_YOU.finalCta}
      />
    </div>
  );
}