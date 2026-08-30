import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/content";
import { ROUTES } from "@/lib/routes";
import { gateSecurity } from "@/lib/site-images";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import HeroSkeleton from "@/components/common/HeroSkeleton";

export default function HomeContactCta() {
  const whatsappNumber = CONTACT.whatsapp?.replace(/\D/g, "");

  return (
    <section
      className="bg-[#10100f] text-[#f5f1e8]"
      aria-labelledby="home-contact-title"
    >
      <div className="section-container section-padding">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]">
              Start with the requirement
            </p>

            <h2
              id="home-contact-title"
              className="mt-3 max-w-2xl font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-6xl"
            >
              Tell us what needs to be secured, staffed or managed.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#b4aea5] sm:text-lg">
              Tell us about the property, requirement or operational problem.
              We’ll help you work out the appropriate service and next step.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to={`${ROUTES.contact}#contact-form`}>
                <Button
                  variant="default"
                  size="lg"
                  data-analytics-cta="home_final_contact"
                >
                  Discuss your requirement
                  <ArrowRight
                    className="ml-1 size-4"
                    aria-hidden="true"
                  />
                </Button>
              </Link>

              {CONTACT.phone && (
                <a
                  href={`tel:${CONTACT.phone}`}
                  data-analytics-component="home_final_phone"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#3b3936] bg-transparent text-[#f5f1e8] hover:border-[#b52b22] hover:bg-[#b52b22]/10 hover:text-[#f5f1e8]"
                  >
                    <Phone
                      className="mr-1 size-4"
                      aria-hidden="true"
                    />
                    Call SSCSS
                  </Button>
                </a>
              )}
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-[#2b2927] pt-6 sm:flex-row sm:items-center">
              {CONTACT.phone && (
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="inline-flex items-center gap-3 text-sm text-[#ded8cf] transition-colors hover:text-white"
                >
                  <Phone
                    className="size-4 text-[#c45a52]"
                    aria-hidden="true"
                  />
                  {CONTACT.phone}
                </a>
              )}

              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-component="home_final_whatsapp"
                  className="inline-flex items-center gap-3 text-sm text-[#ded8cf] transition-colors hover:text-white"
                >
                  <MessageCircle
                    className="size-4 text-[#c45a52]"
                    aria-hidden="true"
                  />
                  WhatsApp SSCSS
                </a>
              )}
            </div>
          </div>

          <figure className="overflow-hidden bg-[#191918]">
            <div className="aspect-[4/5]">
              <ImageWithSkeleton
                src={gateSecurity}
                alt="SSCSS security personnel managing access at a property entrance"
                skeleton={
                  <HeroSkeleton className="size-full rounded-none" />
                }
                containerClassName="size-full"
                className="size-full object-cover"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}