// ============================================================
// SSCSS — Global Site Header
// Sticky, scroll-aware header with content-layer-driven nav.
// ============================================================

import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/routes";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

// ─── Scroll threshold for elevated appearance ────────────────
const SCROLL_THRESHOLD = 20;

// ─── Header ──────────────────────────────────────────────────
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // ─── Scroll detection ────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    // Check initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const toggleMobile = useCallback(() => setMobileOpen((prev) => !prev), []);

  // ─── Header CTA — navigates to the contact form ──────────
  const ctaLabel = "Get a Free Quote";

  const ctaHref = `${ROUTES.contact}#contact-form`;

  return (
    <header
      role="banner"
      className={cn(
        "fixed inset-x-0 top-0 z-navbar",
        "bg-background transition-shadow duration-300 ease-premium-out",
        "border-b border-border",
        scrolled && "shadow-md",
      )}
      style={{ height: "var(--header-height)" }}
    >
      <div
        className={cn(
          "mx-auto flex h-full items-center px-4 sm:px-6 lg:px-8",
          "max-w-(--container-7xl)",
        )}
      >
        {/* ─── Logo ────────────────────────────────────────── */}
        <Logo />

        {/* ─── Spacer ──────────────────────────────────────── */}
        <div className="flex-1" />

        {/* ─── Desktop Navigation ──────────────────────────── */}
        <DesktopNav />

        {/* ─── Desktop CTA ─────────────────────────────────── */}
        <Link
          to={ctaHref}
          data-analytics-cta="header_cta"
          className={cn(
            "ml-6 hidden min-h-[44px] items-center justify-center rounded-lg",
            "bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-xs",
            "hover:bg-primary-700 transition-colors duration-200",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            "md:inline-flex",
          )}
        >
          {ctaLabel}
        </Link>

        {/* ─── Mobile Navigation ────────────────────────────── */}
        <MobileNav
          isOpen={mobileOpen}
          onToggle={toggleMobile}
          onClose={closeMobile}
        />
      </div>
    </header>
  );
}

