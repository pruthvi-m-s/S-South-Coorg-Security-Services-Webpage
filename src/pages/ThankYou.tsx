// ============================================================
// SSCSS — Thank You Page
// Post-enquiry confirmation with next steps and helpful routes.
// ============================================================

import { createElement, useMemo } from "react";
import { motion } from "framer-motion";
import HeadlineReveal from "@/components/common/HeadlineReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import ProcessSection from "@/components/sections/ProcessSection";
import { CONTACT, THANK_YOU } from "@/content";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { fadeUp, scaleIn, staggerContainer, viewportOptions } from "@/lib/motion";

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
      label: THANK_YOU.contactReminder.businessHoursLabel,
      value: CONTACT.officeHours,
      icon: THANK_YOU.contactReminder.businessHoursIcon,
    });
  }

  return items;
}, []);
  const SuccessIcon = getIcon(THANK_YOU.hero.icon);

  return (
    <>
      <section className="relative bg-muted" aria-label="Enquiry confirmation">
        <div className="section-container section-padding">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="mx-auto max-w-3xl text-center">
            <motion.div variants={scaleIn} className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary-50 text-primary" aria-hidden="true">
              {createElement(SuccessIcon, { size: 32, strokeWidth: 1.5 })}
            </motion.div>
<HeadlineReveal as="h1" delay={0.1} className="mt-6 font-heading text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              {THANK_YOU.hero.title}
            </HeadlineReveal>
<motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {THANK_YOU.hero.description}
            </motion.p>
            {THANK_YOU.hero.responseTimeNote && (
              <motion.p variants={fadeUp} className="mt-6 text-sm font-medium text-primary">
                {THANK_YOU.hero.responseTimeNote}
              </motion.p>
            )}
            <motion.div variants={fadeUp} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to={THANK_YOU.hero.primaryCta.href}>
                <Button variant="default" size="lg" className="w-full sm:w-auto">
                  {THANK_YOU.hero.primaryCta.label}
                  <ArrowRight className="ml-1.5" size={18} aria-hidden="true" />
                </Button>
              </Link>
              <Link to={THANK_YOU.hero.secondaryCta.href}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">{THANK_YOU.hero.secondaryCta.label}</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ProcessSection title={THANK_YOU.nextSteps.title} subtitle={THANK_YOU.nextSteps.subtitle} steps={THANK_YOU.nextSteps.steps} className="bg-background" />

      <section className="relative bg-muted" aria-label="Helpful quick links">
        <div className="section-container section-padding">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}>
            <motion.h2 variants={fadeUp} className="text-center font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">{THANK_YOU.quickLinks.title}</motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">{THANK_YOU.quickLinks.subtitle}</motion.p>
            <motion.div variants={fadeUp} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {THANK_YOU.quickLinks.items.map((item) => {
                const Icon = getIcon(item.icon);
                return (
                  <Link key={item.href} to={item.href} className="group block h-full">
                    <Card className="flex h-full flex-col p-6 transition-all duration-300 ease-premium-out hover:border-primary/20 hover:shadow-md">
                      <div className="flex size-11 items-center justify-center rounded-full bg-primary-50 text-primary" aria-hidden="true">{createElement(Icon, { size: 21, strokeWidth: 1.5 })}</div>
                      <h3 className="mt-5 font-heading text-lg font-semibold tracking-tight text-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                      <span className="mt-5 inline-flex items-center text-sm font-medium text-primary"><ArrowRight size={16} className="transition-transform duration-300 ease-premium-out group-hover:translate-x-1" aria-hidden="true" /></span>
                    </Card>
                  </Link>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-background" aria-label="Contact reminder">
        <div className="section-container section-padding">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} className="mx-auto max-w-4xl">
            <motion.h2 variants={fadeUp} className="text-center font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">{THANK_YOU.contactReminder.title}</motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">{THANK_YOU.contactReminder.subtitle}</motion.p>
            <motion.div variants={fadeUp} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {contactItems.map((item) => {
                const Icon = getIcon(item.icon);
                const content = (
                  <Card className={cn("h-full p-5", item.href && "transition-all duration-300 ease-premium-out hover:border-primary/20 hover:shadow-md")}>
                    <div className="flex size-10 items-center justify-center rounded-full bg-primary-50 text-primary" aria-hidden="true">{createElement(Icon, { size: 19, strokeWidth: 1.5 })}</div>
                    <h3 className="mt-4 font-heading text-sm font-semibold tracking-tight text-muted-foreground">{item.label}</h3>
                    <p className="mt-1 break-words text-base leading-relaxed text-ink">{item.value}</p>
                  </Card>
                );
                return item.href ? <a key={item.label} href={item.href} className="block h-full" aria-label={`${item.label}: ${item.value}`}>{content}</a> : <div key={item.label} className="h-full">{content}</div>;
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FinalCtaSection content={THANK_YOU.finalCta} />
    </>
  );
}
