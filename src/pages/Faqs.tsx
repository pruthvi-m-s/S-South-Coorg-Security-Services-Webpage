// ============================================================
// SSCSS — FAQs Page
// 7 sections in order:
//   1. FAQ Hero (h1 title + subtitle)
//   2. Introduction (h2 heading + description)
//   3. Category Filter (FilterChips)
//   4. Search Bar
//   5. FAQ List (Accordion with filtering + empty state)
//   6. Contact CTA
//   7. Final CTA
//
// Features:
//   - Category filtering
//   - Keyword search (question, answer, category)
//   - Combined filters
//   - Accordion (single open, keyboard nav)
//   - Deep-link support via URL hash
//   - Empty state from content layer
// Content-driven: all copy from content layer. No hardcoded text.
// ============================================================

import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import ReusableAccordion from "@/components/ui/ReusableAccordion";
import type { AccordionItem } from "@/components/ui/ReusableAccordion";
import FilterChips from "@/components/sections/FilterChips";
import type { ChipItem } from "@/components/sections/FilterChips";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import {
  FAQS,
  getFaqCategories,
  FAQ_PAGE,
  FINAL_CTA,
} from "@/content";
import {
  trackFaqInteraction,
  getSourcePage,
} from "@/lib/analytics";

export default function FaqsPage() {
  const location = useLocation();

  // ─── State ────────────────────────────────────────────────
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  // Refs for scrolling to result after opening
  const accordionRef = useRef<HTMLDivElement>(null);

  // Track if hash has been processed to prevent re-runs
  const hashProcessedRef = useRef(false);

  // ─── Deep-link support on mount ──────────────────────────
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && !hashProcessedRef.current) {
      hashProcessedRef.current = true;

      const matchedFaq = FAQS.find(
        (faq) =>
          faq.id === hash ||
          faq.id.replace("faq-", "") === hash ||
          faq.question.toLowerCase().includes(hash.toLowerCase()),
      );
      if (matchedFaq) {
        // Use microtask to avoid cascading setState in effect
        Promise.resolve().then(() => {
          setOpenItemId(matchedFaq.id);

          accordionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
    }
  }, [location.hash]);

  // ─── Category chips ──────────────────────────────────────
  const categoryChips = useMemo<ChipItem<string>[]>(() => {
    const categories = getFaqCategories();
    return categories.map((cat) => ({
      value: cat,
      label: cat,
    }));
  }, []);

  // ─── Filtered FAQs ───────────────────────────────────────
  const filteredFaqs = useMemo(() => {
    let result = [...FAQS];

    if (selectedCategory) {
      result = result.filter((faq) => faq.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      result = result.filter(
        (faq) =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query) ||
          faq.category.toLowerCase().includes(query),
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  // ─── Map to Accordion items ──────────────────────────────
  const accordionItems = useMemo<AccordionItem[]>(() => {
    return filteredFaqs.map((faq) => ({
      id: faq.id,
      trigger: faq.question,
      content: <p>{faq.answer}</p>,
    }));
  }, [filteredFaqs]);

  // ─── Handle category change ──────────────────────────────
  const handleCategoryChange = useCallback((value: string | null) => {
    setSelectedCategory(value);
    setOpenItemId(null);
  }, []);

  // ─── Handle search change ────────────────────────────────
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
      setOpenItemId(null);
    },
    [],
  );

// ─── Handle accordion open change ────────────────────────
  const handleAccordionChange = useCallback((id: string | null) => {
    setOpenItemId(id);

    if (id) {
      const searchFaq = FAQS.find((faq) => faq.id === id);
      const hash = searchFaq?.id.replace("faq-", "") ?? "";
      window.history.replaceState(null, "", `/faqs#${hash}`);

trackFaqInteraction({
        source_page: getSourcePage(),
        faq_id: id,
        faq_category: searchFaq?.category ?? "",
        action: "expand",
      });
    } else {
      window.history.replaceState(null, "", "/faqs");
    }
  }, []);

  // ─── Has active filters ──────────────────────────────────
  const hasActiveFilters = selectedCategory !== null || searchQuery.trim() !== "";
  const noResults = filteredFaqs.length === 0 && hasActiveFilters;

  return (
    <>
      {/* 1. FAQ Hero */}
      <section
        className="relative bg-muted"
        aria-label="FAQ Hero"
      >
        <div className="section-container section-padding">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.h1
              variants={fadeUp}
              className={cn(
                "font-heading text-4xl font-semibold leading-tight tracking-tight",
                "sm:text-5xl",
                "text-ink",
              )}
            >
              {FAQ_PAGE.hero.title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className={cn(
                "mx-auto mt-4 max-w-2xl text-base leading-relaxed",
                "sm:text-lg",
                "text-muted-foreground",
              )}
            >
              {FAQ_PAGE.hero.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section
        className="relative bg-background"
        aria-label="FAQ Introduction"
      >
        <div className="section-container section-padding">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.h2
              variants={fadeUp}
              className={cn(
                "font-heading text-3xl font-semibold leading-tight tracking-tight",
                "sm:text-4xl",
                "text-ink",
              )}
            >
              {FAQ_PAGE.intro.title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className={cn(
                "mt-4 text-base leading-relaxed",
                "sm:text-lg",
                "text-muted-foreground",
              )}
            >
              {FAQ_PAGE.intro.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3. Category Filter + 4. Search Bar */}
      <section
        className="relative bg-muted"
        aria-label="FAQ Search and Filters"
      >
        <div className="section-container section-padding">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.div variants={fadeUp}>
              <FilterChips
                items={categoryChips}
                selected={selectedCategory}
                onChange={handleCategoryChange}
                className="mb-6"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mx-auto max-w-xl"
            >
              <div className="relative">
                <Search
                  size={18}
                  strokeWidth={2}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder={FAQ_PAGE.search.placeholder}
                  autoComplete="off"
                  inputMode="search"
                  className={cn(
                    "w-full min-h-[44px] rounded-xl border border-border bg-background py-3 pl-11 pr-4",
                    "text-base leading-relaxed text-ink",
                    "placeholder:text-muted-foreground",
                    "transition-colors duration-300 ease-premium-out",
                    "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                  )}
                  aria-label={FAQ_PAGE.search.placeholder}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. FAQ List (Accordion) */}
      <section
        className="relative bg-background"
        aria-label="Frequently Asked Questions List"
      >
        <div className="section-container section-padding" ref={accordionRef}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mx-auto max-w-4xl"
          >
            {noResults ? (
              <motion.div
                variants={fadeUp}
                role="status"
                aria-live="polite"
                className="text-center py-12"
              >
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-muted">
                  <Search
                    size={24}
                    strokeWidth={1.5}
                    className="text-muted-foreground"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold text-ink">
                  {FAQ_PAGE.search.emptyStateTitle}
                </h3>
                <p className="mt-2 mx-auto max-w-lg text-base leading-relaxed text-muted-foreground">
                  {FAQ_PAGE.search.emptyStateDescription}
                </p>
              </motion.div>
            ) : (
              <motion.div variants={fadeUp}>
                <ReusableAccordion
                  items={accordionItems}
                  openItem={openItemId}
                  onOpenChange={handleAccordionChange}
                />
              </motion.div>
            )}

            {!noResults && (
              <motion.p
                variants={fadeUp}
                role="status"
                aria-live="polite"
                className={cn(
                  "mt-6 text-center text-sm",
                  "text-muted-foreground",
                )}
              >
                Showing {filteredFaqs.length}{" "}
                {filteredFaqs.length === 1 ? "FAQ" : "FAQs"}
                {selectedCategory && ` in ${selectedCategory}`}
                {searchQuery.trim() && ` matching "${searchQuery.trim()}"`}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* 6. Contact CTA */}
      <ContactCtaSection content={FAQ_PAGE.contactCta} />

      {/* 7. Final CTA */}
      <FinalCtaSection content={FINAL_CTA} />
    </>
  );
}
