// ============================================================
// SSCSS — 404 Not Found Page
// Shown by the existing wildcard route for unmatched paths.
// ============================================================

import { createElement, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { CONTACT, NOT_FOUND } from "@/content";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/motion";

interface ContactItem {
  label: string;
  value: string;
  href?: string;
  icon: string;
}

export default function NotFoundPage() {
  const contactItems = useMemo<ContactItem[]>(() => {
  const items: ContactItem[] = [];

if (CONTACT.phone) {
    items.push({
      label: NOT_FOUND.contactAssistance.phoneLabel,
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone}`,
      icon: NOT_FOUND.contactAssistance.phoneIcon,
    });
  }

  if (CONTACT.email) {
    items.push({
      label: NOT_FOUND.contactAssistance.emailLabel,
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      icon: NOT_FOUND.contactAssistance.emailIcon,
    });
  }

  if (CONTACT.officeHours) {
    items.push({
      label: NOT_FOUND.contactAssistance.businessHoursLabel,
      value: CONTACT.officeHours,
      icon: NOT_FOUND.contactAssistance.businessHoursIcon,
    });
  }

  return items;
}, []);
  return <>
    <section className="relative bg-muted" aria-label="Page not found">
      <div className="section-container section-padding">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="mx-auto max-w-3xl text-center">
          <motion.p variants={fadeUp} className="font-heading text-7xl font-semibold leading-none tracking-tight text-primary sm:text-8xl">{NOT_FOUND.hero.errorCode}</motion.p>
          <motion.h1 variants={fadeUp} className="mt-6 font-heading text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">{NOT_FOUND.hero.title}</motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{NOT_FOUND.hero.description}</motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to={NOT_FOUND.hero.primaryCta.href}><Button variant="default" size="lg" className="w-full sm:w-auto">{NOT_FOUND.hero.primaryCta.label}<ArrowRight className="ml-1.5" size={18} aria-hidden="true" /></Button></Link>
            <Link to={NOT_FOUND.hero.secondaryCta.href}><Button variant="outline" size="lg" className="w-full sm:w-auto">{NOT_FOUND.hero.secondaryCta.label}</Button></Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
    <NavigationSection content={NOT_FOUND.helpfulNavigation} ariaLabel="Helpful navigation" />
    <NavigationSection content={NOT_FOUND.popularDestinations} ariaLabel="Popular destinations" muted />
    <section className="relative bg-background" aria-label="Contact assistance">
      <div className="section-container section-padding">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} className="mx-auto max-w-4xl">
          <motion.h2 variants={fadeUp} className="text-center font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">{NOT_FOUND.contactAssistance.title}</motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">{NOT_FOUND.contactAssistance.subtitle}</motion.p>
          <motion.div variants={fadeUp} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {contactItems.map((item) => {
              const Icon = getIcon(item.icon);
              const card = <Card className={cn("h-full p-5", item.href && "transition-all duration-300 ease-premium-out hover:border-primary/20 hover:shadow-md")}><div className="flex size-10 items-center justify-center rounded-full bg-primary-50 text-primary" aria-hidden="true">{createElement(Icon, { size: 19, strokeWidth: 1.5 })}</div><h3 className="mt-4 font-heading text-sm font-semibold tracking-tight text-muted-foreground">{item.label}</h3><p className="mt-1 break-words text-base leading-relaxed text-ink">{item.value}</p></Card>;
              return item.href ? <a key={item.label} href={item.href} className="block h-full" aria-label={`${item.label}: ${item.value}`}>{card}</a> : <div key={item.label} className="h-full">{card}</div>;
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
    <FinalCtaSection content={NOT_FOUND.finalCta} />
  </>;
}

function NavigationSection({ content, ariaLabel, muted = false }: { content: typeof NOT_FOUND.helpfulNavigation; ariaLabel: string; muted?: boolean }) {
  return <section className={cn("relative", muted ? "bg-muted" : "bg-background")} aria-label={ariaLabel}>
    <div className="section-container section-padding">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}>
        <motion.h2 variants={fadeUp} className="text-center font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">{content.title}</motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">{content.subtitle}</motion.p>
        <motion.div variants={fadeUp} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item) => {
            const Icon = getIcon(item.icon);
            return <Link key={item.href} to={item.href} className="group block h-full"><Card className="flex h-full flex-col p-6 transition-all duration-300 ease-premium-out hover:border-primary/20 hover:shadow-md"><div className="flex size-11 items-center justify-center rounded-full bg-primary-50 text-primary" aria-hidden="true">{createElement(Icon, { size: 21, strokeWidth: 1.5 })}</div><h3 className="mt-5 font-heading text-lg font-semibold tracking-tight text-ink">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p><span className="mt-5 inline-flex items-center text-sm font-medium text-primary"><ArrowRight size={16} className="transition-transform duration-300 ease-premium-out group-hover:translate-x-1" aria-hidden="true" /></span></Card></Link>;
          })}
        </motion.div>
      </motion.div>
    </div>
  </section>;
}
