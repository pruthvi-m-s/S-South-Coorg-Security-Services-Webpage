import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import HeroSkeleton from "@/components/common/HeroSkeleton";
import { CONTACT } from "@/content";
import { ROUTES } from "@/lib/routes";
import { gateSecurity } from "@/lib/site-images";

gsap.registerPlugin(ScrollTrigger);

const contactRows = [
  { label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
  { label: "WhatsApp", value: "Message us on WhatsApp", href: `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`, external: true },
  { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: "Office / Bengaluru", value: CONTACT.address },
];

export default function HomeContactCta() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = gsap.context(() => {
      gsap.from("[data-contact-reveal]", { opacity: 0, y: 20, duration: 0.66, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 78%", once: true } });
    }, section);
    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-muted/35" aria-labelledby="home-contact-title">
      <div className="section-container section-padding">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:gap-16">
          <div data-contact-reveal className="flex flex-col justify-between py-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Let&apos;s talk</p>
              <h2 id="home-contact-title" className="mt-3 max-w-lg font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Have a security or manpower requirement?</h2>
              <p className="mt-5 max-w-md text-lg leading-7 text-muted-foreground">Tell us what you need.<br />We&apos;ll take it from there.</p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to={`${ROUTES.contact}#contact-form`} className="group inline-flex min-h-12 items-center justify-center gap-2 bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">Get a quote <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" /></Link>
              <a href={`tel:${CONTACT.phone}`} className="group inline-flex min-h-12 items-center justify-center gap-2 border-b-2 border-primary px-4 text-sm font-semibold text-ink transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Call us <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" /></a>
            </div>
          </div>

          <figure data-contact-reveal className="relative min-h-72 overflow-hidden bg-card sm:min-h-96">
            <ImageWithSkeleton src={gateSecurity} alt="SSCSS guard managing access at a premises entrance" skeleton={<HeroSkeleton className="size-full rounded-none" />} containerClassName="absolute inset-0 size-full" className="size-full object-cover transition-transform duration-700 hover:scale-[1.015] motion-reduce:transition-none" loading="lazy" decoding="async" fetchPriority="low" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent px-6 pb-6 pt-16 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">Start with a conversation</figcaption>
          </figure>
        </div>

        <dl data-contact-reveal className="mt-12 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {contactRows.map((row) => <div key={row.label} className="border-b border-border py-5 sm:pr-6 lg:border-b-0 lg:pr-8"><dt className="text-xs font-semibold uppercase tracking-[0.13em] text-muted-foreground">{row.label}</dt><dd className="mt-2 text-sm leading-6 text-ink">{row.href ? <a href={row.href} target={row.external ? "_blank" : undefined} rel={row.external ? "noopener noreferrer" : undefined} className="transition-colors hover:text-primary">{row.value}</a> : row.value}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}
