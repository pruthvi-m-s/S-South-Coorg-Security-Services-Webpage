import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/content";
import { ROUTES } from "@/lib/routes";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
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
              We'll help you work out the appropriate service and next step.
            </p>

            {/* Three parallel conversion paths */}
            <div className="mt-10 grid gap-px border border-[#2b2927] bg-[#2b2927] sm:grid-cols-3">
              {/* Path 1: Form */}
              <Link
                to={`${ROUTES.contact}#contact-form`}
                className="group flex flex-col bg-[#191918] p-6 transition-colors hover:bg-[#1d1d1c] sm:p-7"
                data-analytics-cta="home_final_form"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.13em] text-[#77716a]">
                  Option 1
                </span>
                <span className="mt-3 font-heading text-lg font-semibold text-[#ded8cf] transition-colors group-hover:text-[#f5f1e8]">
                  Fill Out the Form
                </span>
                <span className="mt-2 text-sm leading-6 text-[#b4aea5]">
                  Quick enquiry form — we respond within one business day.
                </span>
                <span className="mt-auto pt-4">
                  <Button
                    variant="default"
                    size="default"
                    className="w-full"
                  >
                    Go to Form
                  </Button>
                </span>
              </Link>

              {/* Path 2: Call */}
              {CONTACT.phone && (
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="group flex flex-col bg-[#191918] p-6 transition-colors hover:bg-[#1d1d1c] sm:p-7"
                  data-analytics-cta="home_final_call"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.13em] text-[#77716a]">
                    Option 2
                  </span>
                  <span className="mt-3 font-heading text-lg font-semibold text-[#ded8cf] transition-colors group-hover:text-[#f5f1e8]">
                    Call Us Now
                  </span>
                  <span className="mt-2 text-sm leading-6 text-[#b4aea5]">
                    Speak directly with our team for immediate support.
                  </span>
                  <span className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#c45a52] transition-colors group-hover:text-[#b52b22]">
                    <Phone className="size-4" aria-hidden="true" />
                    {CONTACT.phone}
                  </span>
                </a>
              )}

              {/* Path 3: WhatsApp */}
              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-[#191918] p-6 transition-colors hover:bg-[#1d1d1c] sm:p-7"
                  data-analytics-cta="home_final_whatsapp"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.13em] text-[#77716a]">
                    Option 3
                  </span>
                  <span className="mt-3 font-heading text-lg font-semibold text-[#ded8cf] transition-colors group-hover:text-[#f5f1e8]">
                    Message on WhatsApp
                  </span>
                  <span className="mt-2 text-sm leading-6 text-[#b4aea5]">
                    Quick questions and deployment discussions.
                  </span>
                  <span className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#25D366] transition-colors group-hover:text-[#20ba5a]">
                    <WhatsAppIcon className="size-4" />
                    Chat on WhatsApp
                  </span>
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
