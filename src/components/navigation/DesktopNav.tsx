// ============================================================
// SSCSS — Desktop Navigation
// Flat horizontal nav rendered from the content layer.
// Supports future dropdown expansion without component rewrite.
// ============================================================

import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MAIN_NAVIGATION, type NavItem } from "@/content";

// ─── Nav Link ────────────────────────────────────────────────
interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
}

function NavLink({ item, isActive }: NavLinkProps) {
  return (
    <Link
      to={item.href}
      className={cn(
        "relative inline-flex min-h-[44px] items-center px-3.5 py-2 text-sm font-medium transition-colors duration-200",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-md",
        "hover:text-primary",
        isActive
          ? "text-primary font-semibold"
          : "text-muted-foreground",
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {item.title}
    </Link>
  );
}

// ─── DesktopNav ──────────────────────────────────────────────
export default function DesktopNav() {
  const { pathname } = useLocation();

  const isActivePath = (href: string): boolean => {
    // Exact match for root, prefix match for other paths
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-1 md:flex"
    >
      {MAIN_NAVIGATION.map((item) => (
        <NavLink
          key={item.href}
          item={item}
          isActive={isActivePath(item.href)}
        />
      ))}
    </nav>
  );
}

