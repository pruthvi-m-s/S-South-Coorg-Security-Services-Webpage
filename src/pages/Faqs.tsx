import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import HeadlineReveal from "@/components/common/HeadlineReveal";
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
import { ROUTES } from "@/lib/routes";

export default function FaqsPage() {
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] =
    useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState("");

  const [openItemId, setOpenItemId] = useState<
    string | null
  >(null);

  const accordionRef = useRef<HTMLDivElement>(null);
  const hashProcessedRef = useRef(false);

  useEffect(() => {
    const hash = location.hash.replace(/^#/, "");

    if (!hash || hashProcessedRef.current) return;

    hashProcessedRef.current = true;

    const matchedFaq = FAQS.find(
      (faq) =>
        faq.id === hash ||
        faq.id.replace(/^faq-/, "") === hash ||
        faq.question
          .toLowerCase()
          .includes(hash.toLowerCase()),
    );

    if (!matchedFaq) return;

    Promise.resolve().then(() => {
      setOpenItemId(matchedFaq.id);

      requestAnimationFrame(() => {
        accordionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  }, [location.hash]);

  const categoryChips = useMemo<ChipItem<string>[]>(
    () =>
      getFaqCategories().map((category) => ({
        value: category,
        label: category,
      })),
    [],
  );

  const filteredFaqs = useMemo(() => {
    let result = [...FAQS];

    if (selectedCategory) {
      result = result.filter(
        (faq) => faq.category === selectedCategory,
      );
    }

    const query = searchQuery.trim().toLowerCase();

    if (query) {
      result = result.filter(
        (faq) =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query) ||
          faq.category.toLowerCase().includes(query),
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  const accordionItems = useMemo<AccordionItem[]>(
    () =>
      filteredFaqs.map((faq) => ({
        id: faq.id,
        trigger: (
          <span className="block pr-4">
            {faq.question}
          </span>
        ),
        content: (
          <p className="max-w-3xl text-sm leading-7 text-[#8f8981] sm:text-base">
            {faq.answer}
          </p>
        ),
      })),
    [filteredFaqs],
  );

  const handleCategoryChange = useCallback(
    (value: string | null) => {
      setSelectedCategory(value);
      setOpenItemId(null);
    },
    [],
  );

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
      setOpenItemId(null);
    },
    [],
  );

  const clearSearch = useCallback(() => {
    setSearchQuery("");
    setOpenItemId(null);
  }, []);

  const handleAccordionChange = useCallback(
    (id: string | null) => {
      setOpenItemId(id);

      if (!id) {
        window.history.replaceState(
          null,
          "",
          ROUTES.faqs,
        );
        return;
      }

      const faq = FAQS.find(
        (item) => item.id === id,
      );

      const hash = faq?.id.replace(/^faq-/, "");

      if (hash) {
        window.history.replaceState(
          null,
          "",
          `${ROUTES.faqs}#${hash}`,
        );
      }

      trackFaqInteraction({
        source_page: getSourcePage(),
        faq_id: id,
        faq_category: faq?.category ?? "",
        action: "expand",
      });
    },
    [],
  );

  const hasActiveFilters =
    selectedCategory !== null ||
    searchQuery.trim() !== "";

  const noResults =
    filteredFaqs.length === 0 && hasActiveFilters;

  return (
    <div className="bg-[#10100f] text-[#f5f1e8]">
      {/* ============================================================
          HERO
          ============================================================ */}
      <section
        className="overflow-hidden bg-[#10100f]"
        aria-labelledby="faq-hero-title"
      >
        <div className="section-container py-20 sm:py-24 lg:py-28">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20"
          >
            <div>
              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c45a52]"
              >
                Frequently asked
              </motion.p>

              <div className="mt-4">
                <HeadlineReveal
                  as="h1"
                  delay={0.1}
                  className="max-w-3xl font-heading text-5xl font-semibold leading-[0.99] tracking-[-0.045em] text-[#f5f1e8] sm:text-6xl lg:text-[4.5rem]"
                >
                  {FAQ_PAGE.hero.title}
                </HeadlineReveal>
              </div>
            </div>

            <motion.p
              id="faq-hero-title"
              variants={fadeUp}
              className="max-w-2xl border-l-2 border-[#b52b22] pl-6 text-base leading-7 text-[#b4aea5] sm:text-lg"
            >
              {FAQ_PAGE.hero.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          INTRO — CREAM HIGHLIGHT
          ============================================================ */}
      <section
        className="bg-[#f3efe6] text-[#171615]"
        aria-labelledby="faq-intro-title"
      >
        <div className="section-container section-padding">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ad241c]">
                Need an answer?
              </p>

              <h2
                id="faq-intro-title"
                className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#171615] sm:text-5xl"
              >
                {FAQ_PAGE.intro.title}
              </h2>
            </div>

            <p className="max-w-2xl border-t border-[#d9d1c5] pt-6 text-base leading-7 text-[#6a655e] sm:text-lg">
              {FAQ_PAGE.intro.description}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SEARCH + FILTERS
          ============================================================ */}
      <section
        className="bg-[#191918] text-[#f5f1e8]"
        aria-label="FAQ Search and Filters"
      >
        <div className="section-container py-10 sm:py-12">
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
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-8 max-w-2xl"
            >
              <div className="relative">
                <Search
                  size={18}
                  strokeWidth={1.8}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#77716a]"
                  aria-hidden="true"
                />

                <input
                  type="search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder={FAQ_PAGE.search.placeholder}
                  autoComplete="off"
                  inputMode="search"
                  aria-label={
                    FAQ_PAGE.search.placeholder
                  }
                  className="min-h-[52px] w-full rounded-none border border-[#3a3835] bg-[#10100f] py-3 pl-11 pr-12 text-sm text-[#f5f1e8] outline-none transition-colors placeholder:text-[#77716a] focus:border-[#b52b22] focus:ring-1 focus:ring-[#b52b22]"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center text-[#77716a] transition-colors hover:text-[#f5f1e8]"
                    aria-label="Clear FAQ search"
                  >
                    <X
                      size={17}
                      aria-hidden="true"
                    />
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          FAQ LIST
          ============================================================ */}
      <section
        className="bg-[#10100f]"
        aria-label="Frequently Asked Questions List"
      >
        <div
          ref={accordionRef}
          className="section-container section-padding scroll-mt-[var(--header-height)]"
        >
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
                className="border border-[#2b2927] bg-[#191918] px-6 py-14 text-center sm:px-10"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-[#3a3835] bg-[#10100f] text-[#c45a52]">
                  <Search
                    size={21}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-5 font-heading text-2xl font-semibold tracking-tight text-[#f5f1e8]">
                  {FAQ_PAGE.search.emptyStateTitle}
                </h3>

                <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#8f8981] sm:text-base">
                  {
                    FAQ_PAGE.search
                      .emptyStateDescription
                  }
                </p>

                <div className="mt-6 flex justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory(null);
                      setSearchQuery("");
                      setOpenItemId(null);
                    }}
                    className="inline-flex min-h-11 items-center gap-2 border border-[#3a3835] px-4 text-sm font-semibold text-[#ded8cf] transition-colors hover:border-[#b52b22] hover:text-white"
                  >
                    Clear filters
                    <X
                      className="size-4"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                variants={fadeUp}
                className="border-t border-[#2b2927]"
              >
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
                className="mt-6 text-center text-xs uppercase tracking-[0.12em] text-[#77716a]"
              >
                Showing {filteredFaqs.length}{" "}
                {filteredFaqs.length === 1
                  ? "FAQ"
                  : "FAQs"}
                {selectedCategory &&
                  ` · ${selectedCategory}`}
                {searchQuery.trim() &&
                  ` · "${searchQuery.trim()}"`}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          CONTACT CTA
          ============================================================ */}
      <ContactCtaSection
        content={FAQ_PAGE.contactCta}
        className="bg-[#191918] text-[#f5f1e8]"
      />

      {/* ============================================================
          FINAL CTA
          ============================================================ */}
      <FinalCtaSection content={FINAL_CTA} />
    </div>
  );
}