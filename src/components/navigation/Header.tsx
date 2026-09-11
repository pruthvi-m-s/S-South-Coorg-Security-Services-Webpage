import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/routes";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sentinel = document.createElement("div");

    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.position = "absolute";
    sentinel.style.top = "0";
    sentinel.style.left = "0";
    sentinel.style.width = "1px";
    sentinel.style.height = "1px";
    sentinel.style.pointerEvents = "none";

    document.body.prepend(sentinel);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        threshold: 0,
      },
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const toggleMobile = useCallback(() => {
    setMobileOpen((previous) => !previous);
  }, []);

  const ctaHref = `${ROUTES.contact}#contact-form`;

  return (
    <header
      role="banner"
      className={cn(
        "fixed inset-x-0 top-0 z-navbar",
        "h-14 border-b border-[#2b2927] bg-[#10100f]/96 text-[#f5f1e8]",
        "transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-premium-out",
        "md:h-16",
        scrolled &&
          "border-[#3a3835] bg-[#10100f]/88 shadow-lg backdrop-blur-xl md:h-14",
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-full items-center px-4 sm:px-6 lg:px-8",
          "max-w-(--container-7xl)",
        )}
      >
        <Logo />

        <div className="flex-1" />

        <DesktopNav />

        <Link
          to={ctaHref}
          data-analytics-cta="header_cta"
          className={cn(
            "ml-5 hidden min-h-[44px] items-center justify-center",
            "border border-[#b52b22] bg-[#b52b22] px-5 py-2.5",
            "text-sm font-semibold text-white",
            "transition-all duration-200 ease-premium-out",
            "hover:bg-[#8f1912] hover:border-[#8f1912]",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45a52]",
            "lg:inline-flex",
          )}
        >
          Get a Free Quote
        </Link>

        <MobileNav
          isOpen={mobileOpen}
          onToggle={toggleMobile}
          onClose={closeMobile}
        />
      </div>
    </header>
  );
}