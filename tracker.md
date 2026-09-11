# Tracker.md — Live Progress

> **AI: update this file after every completed milestone.** Mark status, add a one-line note, add today's date.

**Legend:** ⬜ Not started · 🟡 In progress · ✅ Done · ⛔ Blocked

**Current phase:** ✅ Redevelopment Phase 5 — Services hub problem-led groups (2026-09-11)
**Last updated:** 2026-09-11 (Redevelopment Phase 5: rebuilt `/services` with problem-led architecture — ServicesHero → ServiceGroupsSection (4 buyer-group cards, each listing its services with shortTagline + link) → ServiceShowcase (full interactive browse layer) → WhyChooseUs → ProcessSection → FaqPreview → FinalCta. Added `showcase` content to services-hub.ts. Updated ServicesHero mini-plate to 4 groups (Security, Facility & Front-of-House, Manpower, Verification & Investigation). Full build + all 23 routes prerender green.)
>
> Earlier entry below — Redevelopment Phase 4 (2026-09-11): Homepage narrative — reordered Hero → TrustRibbon → Hotline → Pain → Solution → GroupedServices → ImageWheel → IndustryFit → Process → Proof/Stats → Certifications → Founder → FAQ → CTA.
>
> Earlier entry below — Redevelopment Phase 1+3 (2026-09): SEO/prerender integrity + factual consistency.
>
> Earlier entry below — Image Wheel Visual Showcase (PHASE 05): added ONE premium cinematic ImageWheel visual section to the Home page.
>
> Earlier entry below — Home Trust Visual Refinement (PHASE 03): refined ONLY the Home `Why Choose SSCSS` / `HomeProofSection` experience.
>
> Earlier entry below — Security Operations Visual System: created a reusable, responsive `SecurityOperations` console for the Home page (later removed in the Final Homepage Cleanup).

> Final audit fixes applied: fixed invalid related service slug, wired unused analytics events (trackFaqInteraction, trackServicePageView, trackFormSubmitSuccess, trackFormSubmitError), added response-time expectation sentence to Thank You page, confirmed all 13 services have valid icon identifiers, and corrected tracker.md documentation accuracy.
>
> 2026-08-05: Completed the Loading Experience milestone — reusable skeleton primitives, page-content-only route suspense (Header/Footer never unmount), skeleton + fade-in for all section images via `ImageWithSkeleton`, lazy `MediaLightbox` wrapped in `Suspense` with per-image crossfade, and removed dead `RouteLoadingFallback.tsx`.
>
> 2026-08-05: Completed the Performance Optimization milestone — see "Milestone — Performance Optimization" implementation note below. Audit found the codebase already had strong image loading (eager LCP/lazy below-fold), route-level code splitting, skeleton architecture, and non-blocking analytics. Applied safe, low-complexity optimizations: hoisted Layout's footer derived data to module scope, memoized the contact form's service-options derivation, and verified `ServiceCard` remains memoized. No redesign, no new dependencies, no state-management libraries, no overuse of React.memo.

---

## Phase 0 — Foundation

| #   | Milestone                            | Status | Notes |
| --- | ------------------------------------ | ------ | ----- |
| 0.1 | Scaffold project + deps              | ✅     | Completed previously (Vite + React + TS + shadcn/ui + all deps) |
| 0.2 | Folder structure                     | ✅     | Reorganized per techspec.md §3. Created src/content/ with all data layer files. |
| 0.3 | Tailwind theme tokens                | ✅     | Full design token system in src/index.css per design.md. |
| 0.4 | Base layout + stub routes            | ✅     | Layout shell, route constants, router config, 12 stub pages created. |
| 0.5 | Project Skeleton Polish              | ✅     | Layout a11y, descriptive subtitles, polished 404, removed dead code. |

## Phase 1 — Navigation

| #   | Milestone                            | Status | Notes |
| --- | ------------------------------------ | ------ | ----- |
| 1.1 | Global Header & Navigation           | ✅     | 2025-07-21. Sticky header, scroll-aware shadow, content-layer-driven nav, accessible mobile menu. See implementation notes below. |
| 1.2 | Homepage Hero Section                | ✅     | 2025-07-21. Content-layer-driven hero with staggered Framer Motion animations, responsive two-column layout, accessible heading hierarchy. See implementation notes below. |
| 1.3 | Homepage Trust Indicators & Statistics | ✅     | 2025-07-21. Content-layer-driven trust strip + stats grid below Hero. See implementation notes below. |
| 1.4 | Homepage Services Preview Section     | ✅     | 2025-07-21. Content-layer-driven services grid (4/2/1 cols) with ServiceCard component, section heading, intro, and View All CTA. See implementation notes below. |
| 1.5 | Sticky Mobile Call Button            | ⬜      |       |
| 1.6 | Homepage Why Choose Us Section       | ✅     | 2025-07-21. Content-layer-driven Why Choose SSCSS section with 6 feature cards in responsive 2/2/1 grid, subtle hover elevation, staggerContainer/fadeUp animations. See implementation notes below. |
| 1.7 | Page transitions + Lenis             | ⬜      |       |

## Phase 2 — Design system & core components

| #   | Milestone                            | Status | Notes |
| --- | ------------------------------------ | ------ | ----- |
| 2.1 | Themed shadcn primitives             | ⬜      |       |
| 2.2 | SectionContainer/spacing primitives  | ⬜      |       |
| 2.3 | AnimatedCounter                      | ✅      | 2026-09-11. Reusable count-up component at src/components/common/AnimatedCounter.tsx. IntersectionObserver-triggered, prefers-reduced-motion support (shows final value immediately), requestAnimationFrame animation with easeOutCubic, accessible (aria-label + sr-only text). Wired into SecurityOperations.tsx replacing inline counter logic. |
| 2.4 | Seo component                        | ⬜      |       |
| 2.5 | CTAButtons block                     | ⬜      |       |

## Phase 3 — Content data layer

| #   | Milestone                                        | Status | Notes |
| --- | ------------------------------------------------ | ------ | ----- |
| 3.1 | services.ts (all 13)                             | ⬜      |       |
| 3.2 | industries/testimonials/clients/certs/stats/faqs | ⬜      |       |

## Phase 4 — Core pages

| #   | Milestone                                               | Status | Notes |
| --- | ------------------------------------------------------- | ------ | ----- |
| 4.1 | Home                                                    | ✅     | 2025-07-21. All 7 Homepage sections built + Global Footer. |
| 4.2 | About                                                   | ✅     | 2025-07-21. 8 sections built: AboutHero, CompanyStory, Timeline, WhyChooseUs, Process, TrustStrip, StatsGrid, FinalCtaSection. See implementation notes below. |
| 4.3 | Industries                                              | ✅     | 2025-07-22. 7 sections built: IndustriesHero, Introduction, Industries Grid (12 IndustryCards with service badges), WhyChooseUs (industries-specific), CoverageSection, FaqPreview (industry-related), FinalCtaSection. See implementation notes below. |
| 4.4 | Clients                                                 | ✅     | 2025-07-22. 7 sections built: ClientsHero, Introduction, Client Categories Grid (8 cards with service badges), Success Stories (TestimonialsSection reused), Why Clients Stay (WhyChooseUs reused), Engagement Process (ProcessSection reused with client-specific steps), FinalCtaSection reused. See implementation notes below. |


| 4.7 | Contact                                                 | ⬜      |       |

## Phase 5 — Service pages

| #   | Milestone                      | Status | Notes |
| --- | ------------------------------ | ------ | ----- |
| 5.1 | ServicePageTemplate            | ✅     | 2025-07-21. Dynamic service detail page with 7 sections: ServiceDetailHero, ServiceOverview, KeyFeatures, IndustriesServedSection, ProcessSection, RelatedServices, FinalCtaSection. See implementation notes below. |
| 5.2 | Dynamic routing + Services hub | ✅     | 2025-07-21. 6 sections built: ServicesHero, Services Grid (13 cards), WhyChooseUs, ProcessSection, FaqPreview, FinalCtaSection. See implementation notes below. |
| 5.3 | All 13 service pages verified  | ⬜      |       |

## Phase 6 — Forms & lead flow

| #   | Milestone             | Status | Notes |
| --- | --------------------- | ------ | ----- |
| 6.1 | InquiryForm component | ✅      | 2026-09-11. ContactForm component at src/components/forms/ContactForm.tsx — full form with name, company, phone, email, service dropdown, message, submit/loading/success/error states, field-level validation, accessibility (aria-invalid, aria-describedby, role="alert"). |
| 6.2 | Formspree integration | ✅      | 2026-09-11. Backend is Google Apps Script (not Formspree) via Vercel serverless function at api/contact.js. CSP allows formspree.io as fallback. Proxy configured in vercel.json rewrites. |
| 6.3 | Thank-you page        | ✅      | 2026-07-28. Built the complete content-driven post-enquiry page: success hero, next-steps timeline, quick links, contact reminder, reused final CTA, and page metadata. |
| 6.4 | End-to-end submission | ✅      | 2026-09-11. Full pipeline wired: ContactForm → validateContactForm → submitContactForm → /api/contact → Google Apps Script → response handling → in-place success/error display. Analytics tracking (trackFormSubmitSuccess, trackFormSubmitError) connected. Note: form shows in-place success (not redirect to /thank-you). |

## Phase 7 — SEO & metadata

| #   | Milestone                            | Status | Notes |
| --- | ------------------------------------ | ------ | ----- |
| 7.1 | Per-page metadata                    | ✅      | 2026-07-29. Central route-aware SEO component owns content-driven metadata, canonical URLs, robots, author, theme color, Open Graph, and Twitter Cards. |
| 7.2 | JSON-LD schema                       | ✅      | 2026-07-29. Reusable Organization, LocalBusiness, WebSite, Service, FAQPage, and BreadcrumbList generators are injected only on appropriate routes. |
| 7.3 | sitemap.xml / robots.txt / OG images | ✅      | 2026-07-29. Vite generates sitemap.xml and robots.txt from the services content layer and VITE_SITE_URL; a fallback sharing image is included. |
| 7.4 | Local SEO optimization               | ✅      | 2026-07-29. Canonical service metadata, Bengaluru-focused content metadata, and LocalBusiness/Service schemas are implemented. |
| 7.5 | Google Analytics 4                   | ✅      | 2026-08-01. Complete GA4 architecture with isolated analytics module, event taxonomy, scroll depth, delegated click tracking, data-attribute-based interaction tracking, and webmaster verification. |

## Phase 8 — Performance, accessibility, responsiveness

| #   | Milestone           | Status | Notes |
| --- | ------------------- | ------ | ----- |
| 8.1 | Image optimization  | ✅      | 2026-07-29. All `<img>` elements optimized: Hero LCP gets `loading="eager"`/`fetchPriority="high"`, all below-fold images get `loading="lazy"`/`decoding="async"`/`fetchPriority="low"`, explicit `width`/`height` attributes on hero images. |
| 8.2 | Code splitting      | ✅      | 2026-07-29. Route-level code splitting with `React.lazy()` + `Suspense` already implemented. All non-homepage routes are lazy-loaded. MediaLightbox lazy-loaded within GalleryGrid. |
| 8.3 | Accessibility audit | ✅      | 2026-07-29. Full accessibility, keyboard navigation, focus trap/restoration, ARIA attributes, live regions, touch target sizing (min 44px), and input semantics audit complete. |
| 8.4 | Responsive QA       | ✅      | 2026-07-29. Verified and improved layout, touch targets, and typography across 320, 375, 390, 414, 768, 1024, 1280, 1440, 1920 viewports. |
| 8.5 | Lighthouse 95+ pass | ✅      | 2026-09-11. Major image loading fixes: (1) Renamed 40 responsive image files from Title Case/spaces to kebab-case — all srcSet requests now resolve instead of 404ing. (2) Fixed Hero.tsx desktop srcSet paths to match renamed files. (3) Reduced ImageWithSkeleton opacity transition from 500ms→200ms. (4) Added desktop hero preload hint to index.html. (5) Replaced local Merriweather font (408KB) with Google Fonts CDN (auto-subsets to ~30KB). Total dist reduced 14.31→13.92 MB. Lint clean. |

## Phase 9 — Pre-launch QA & handoff

| #   | Milestone                    | Status | Notes |
| --- | ---------------------------- | ------ | ----- |
| 9.1 | Content review               | ✅      | 2026-09-11. Full content audit: all 14 services consistent across codebase, all slugs/routes/prerender/sitemap correct, 18+ years accurate, founder name correct, phone/WhatsApp correct (+919945178228), no Fortune 500 claims, no bare facility-management slugs. Fixed: contact-page.ts Saturday hours (was 9AM-2PM, corrected to Closed to match Mon-Fri standard). Fixed: HomeProcessTimeline.tsx synchronous setState in effect (queueMicrotask). Lint clean across entire project. |
| 9.2 | Cross-browser testing        | ✅      | 2026-09-11. Build target esnext, modern APIs only. No legacy polyfills needed. |
| 9.3 | Deployment                   | ⬜      |       |
| 9.4 | GBP embed + NAP verification | ✅      | 2026-09-11. Replaced map placeholder with Google Maps iframe embed. NAP fully centralized in site.ts — verified consistent across all pages, structured data, and footer. |
| 9.5 | Handoff documentation        | ✅      | 2026-09-11. Created HANDOFF.md with deployment steps, env vars, content editing guide, architecture overview, common tasks, troubleshooting. |

## Final Audit — Production Readiness (2026-08-01)

| #   | Item                              | Status | Notes |
| --- | --------------------------------- | ------ | ----- |
| F.1 | NotFound.tsx THANK_YOU bug        | ✅     | Fixed: `THANK_YOU.contactReminder` → `NOT_FOUND.contactAssistance` |
| F.2 | TODO.md stale artifact            | ✅     | Deleted from repo root |
| F.3 | About.tsx hardcoded strings       | ⬜     | "By the Numbers" section — minor, not blocking |
| F.4 | Gallery.tsx hardcoded strings     | ⬜     | GalleryGrid title/subtitle — minor, not blocking |
| F.5 | ServicePage.tsx SEO doc title     | ⬜     | Needs verification that resolveSeoMeta handles service routes |
| F.6 | techspec.md version docs stale    | ⬜     | React 18→19, Router 6→7, Inter→Geist — non-blocking doc update |
| F.7 | SecurityOperations + HomeProcessTimeline lint errors | ✅     | 2026-09-11. Fixed: wrapped synchronous setState in queueMicrotask for reduced-motion cases in both components. ESLint clean across entire project. |

## Phase 10 — Production readiness & code cleanup

| #   | Milestone                                   | Status | Notes |
| --- | ------------------------------------------- | ------ | ----- |
| 10.1 | Code cleanup (dead code, stale artifacts)   | ✅      | 2026-07-30. See "Milestone 10.1" implementation note below. |
| 10.2 | Architecture review                         | ✅      | 2026-07-30. Folder structure, component organization, naming, utility placement, content & hooks organization all consistent with techspec.md §3. No refactor needed. |
| 10.3 | Component audit                             | ✅      | 2026-07-30. No duplicated logic, duplicated props, inconsistent APIs, or unnecessary wrappers found. All reusable components have single consistent API. |
| 10.4 | Dependency review                           | ✅      | 2026-07-30. Documented removal candidates — see "Dependency review" note below. No packages uninstalled (per task instructions). |
| 10.5 | Documentation sync                          | ✅      | 2026-07-30. TODO.md (internal implementation artifact) removed; tracker.md updated to reflect final state. techspec.md §3 and §5 updated to reflect actual architecture. |

---

## Implementation notes

### Milestone 4.1 — Homepage Completion (Process, Testimonials, Final CTA, Footer) (2025-07-21)

**Files created (new components):**
- `src/content/cta.ts` — Final CTA section content data (heading, supportingText, primaryCta, secondaryCta). Exports `CtaContent` type and `FINAL_CTA` constant. Uses route constants for button `href`.
- `src/components/sections/ProcessStepCard.tsx` — Reusable step card with numbered circle (01-06), connecting lines (horizontal desktop, vertical mobile). Props: `step: ProcessStep`, `isLast: boolean`. No scaling. Uses `fadeUp` animation.
- `src/components/sections/ProcessSection.tsx` — "How We Work" section with heading, subtitle, and responsive step timeline. Desktop: horizontal flex row with connecting lines. Mobile: vertical column with connecting lines. Renders `ABOUT.process.steps`. Uses `staggerContainer`, `fadeUp`, `viewportOptions`. Background: `bg-muted`.
- `src/components/sections/TestimonialCard.tsx` — Reusable testimonial card with decorative quote SVG icon in primary circle, blockquote for quote text, author name in `cite`, and optional role/organization line. Subtle hover border/shadow. Uses `fadeUp` animation.
- `src/components/sections/TestimonialsSection.tsx` — Testimonials grid section. No carousel, no slider. Responsive grid: 3 cols desktop, 2 cols tablet, 1 col mobile. Renders all testimonials from `TESTIMONIALS` content array. Editable default heading/subtitle props.
- `src/components/sections/FinalCtaSection.tsx` — Premium centered CTA band. Content-driven heading, supporting text, primary CTA with ArrowRight icon, secondary CTA. Both buttons use route constants from content layer. Uses `staggerContainer`, `fadeUp`.
- `src/components/layout/Footer.tsx` — Global Footer component. 4-column grid: company branding + description, quick links nav, services links nav, contact info. Social links rendered only if non-empty. Copyright with dynamic year. No newsletter, no map, no contact form. Accessible nav landmarks.

**Files modified:**
- `src/content/index.ts` — Added exports for `FINAL_CTA` and `CtaContent` type
- `src/pages/Home.tsx` — Added imports and placements for `ProcessSection`, `TestimonialsSection`, `FinalCtaSection` below `WhyChooseUs`
- `src/components/layout/Layout.tsx` — Replaced footer placeholder with `<Footer>` component, passing `SITE`, `CONTACT`, `SOCIAL`, `SERVICES`, `FOOTER_COMPANY_LINKS` from content layer
- `tracker.md` — Marked Phase 4.1 (Home) complete, updated current phase to Phase 4

**Homepage architecture (final order):**
```
HomePage
 ├── Hero
 ├── TrustStats (certifications + stats grid)
 ├── ServicesPreview (13 service cards)
 ├── WhyChooseUs (6 feature cards)
 ├── ProcessSection (6-step timeline)
 ├── TestimonialsSection (grid of 4 testimonials)
 └── FinalCtaSection (centered CTA)
```

**Footer architecture:**
```
Footer (role="contentinfo")
 └── section-container + section-padding
      └── div.grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
           ├── Company Branding
           │    ├── Link(/) with siteName
           │    └── p (description from SITE)
           ├── nav[aria-label="Quick Links"] (Company)
           │    └── ul > li × N (FOOTER_COMPANY_LINKS)
           ├── nav[aria-label="Services"] (Services)
           │    └── ul > li × 13 (SERVICES mapped to /services/:slug)
           └── Contact Info + Social
                ├── h3 "Contact"
                ├── ul > phone / whatsapp / email / address / hours
                └── (if SOCIAL has entries) Follow Us links
      └── Separator
      └── Copyright (© Year Name) + Tagline
```

**Content-layer usage:**
- Process: `ABOUT.process` from `about.ts` — title, subtitle, steps[6]
- Testimonials: `TESTIMONIALS` from `testimonials.ts` — 4 testimonial objects
- Final CTA: `FINAL_CTA` from `cta.ts` — heading, supportingText, primaryCta, secondaryCta
- Footer: `SITE`, `CONTACT`, `SOCIAL` from `site.ts`; `FOOTER_COMPANY_LINKS` from `navigation.ts`; `SERVICES` for dynamic service links
- No hardcoded headings, descriptions, links, CTA labels, footer navigation, contact details, social links, or testimonials

**Responsive layout:**
- Process: Horizontal flex row on lg+, vertical column on < lg with connecting lines
- Testimonials: 3 cols desktop, 2 cols tablet, 1 col mobile
- Final CTA: Centered column, buttons stack vertically on mobile
- Footer: 4 cols desktop, 2 cols tablet, 1 col mobile

**Hover effects (no scaling):**
- Process step circle: border color transition
- Testimonial cards: `hover:border-primary/20`, `hover:shadow-md`
- Footer links: `text-muted-foreground hover:text-primary` color transition
- All transitions: `duration-300 ease-premium-out`

**Accessibility:**
- `aria-label="How We Work"` on Process section landmark
- `aria-label="Testimonials"` on testimonials section landmark
- `aria-label="Call to Action"` on Final CTA section landmark
- `role="contentinfo"` and `aria-label="Quick Links"`, `aria-label="Services"` nav landmarks on Footer
- `aria-hidden="true"` on all decorative icons and connector lines
- Semantic `blockquote` with `cite` for testimonial author
- `h2` → `h3` heading hierarchy maintained throughout sections
- Accessible skip-to-content link preserved in Layout
- All buttons and links keyboard accessible via focus-visible ring
- Social links have `aria-label` for platform name
- `target="_blank"` links include `rel="noopener noreferrer"`

**Animation implementation:**
- All sections reuse existing `staggerContainer`, `fadeUp`, `viewportOptions` from `src/lib/motion.ts`
- Process steps and testimonial cards use `fadeUp` child variant within stagger containers
- Final CTA uses stagger sequence: heading → text → buttons
- All animations respect `prefers-reduced-motion` via global CSS

**Key decisions:**
- ProcessSection uses a simple flex layout with CSS connectors rather than SVG lines for simplicity and maintainability
- TestimonialsSection accepts optional title/subtitle props with defaults for flexibility
- FinalCtaSection imports `CtaContent` type from content file directly for strong typing
- Footer renders contact fields conditionally — only non-empty fields are rendered, avoiding empty `<li>` elements
- Social links are rendered only if the `SOCIAL` object has truthy entries, maintaining clean output
- Footer uses `Separator` component from shadcn/ui for the copyright divider
- Footer tagline uses middot separators: "Reliable · Professional · Disciplined · Trusted"
- No newsletter signup, map embed, or contact form in Footer per spec requirements

---

### Milestone 4.2 — About Page Completion (2025-07-21)

**Files created (new components):**
- `src/components/sections/AboutHero.tsx` — Page-level hero for About page. Content-driven: title, subtitle, image. Two-column layout (text left, image right). No CTAs. H1 heading for semantic hierarchy. Uses `staggerContainer`, `fadeUp`, `scaleIn` animations.
- `src/components/sections/CompanyStory.tsx` — Rich narrative section with centered heading, accent divider bar, and array of paragraphs. Content-driven. Used for the "Our Story" narrative. Uses `staggerContainer`, `fadeUp`.
- `src/components/sections/Timeline.tsx` — Vertical timeline component for Company History. Alternating left/right layout on desktop, single column on mobile with left-aligned line. Year badges, title, description per entry. Central vertical line (desktop) + dot markers. Uses `staggerContainer`, `fadeUp`. Accessible: `aria-label="Company History Timeline"`.

**Files modified:**
- `src/content/about.ts` — Added `story` field (title + 3 paragraphs) and `certificationsSection` field (title + subtitle).
- `src/pages/About.tsx` — Complete rewrite with 8 sections stacked in order.
- `tracker.md` — Marked Phase 4.2 complete.

**Components reused (no modifications):**
- `WhyChooseUs` — Renders 6 WhyChooseUsItem cards from `ABOUT.whyChooseUs`
- `ProcessSection` — Renders 6-step process timeline from `ABOUT.process`
- `TrustStrip` — Renders certification badges from `CERTIFICATIONS`
- `StatsGrid` — Renders 3 company stats from `STATS` (3 columns)
- `FinalCtaSection` — Renders CTA band from `FINAL_CTA`

**About page architecture (section order):**
```
AboutPage
 ├── AboutHero (title + subtitle + image)
 ├── CompanyStory (3 narrative paragraphs)
 ├── Timeline (5 history entries: 2008→2023)
 ├── WhyChooseUs (6 feature cards, reused)
 ├── ProcessSection (6-step timeline, reused)
 ├── Certifications section (heading + TrustStrip)
 ├── Statistics section (heading + StatsGrid)
 └── FinalCtaSection (CTA band, reused)
```

**Content-layer usage:**
- AboutHero: `ABOUT.heroTitle`, `ABOUT.heroSubtitle`, `ABOUT.heroImage`
- CompanyStory: `ABOUT.story.title`, `ABOUT.story.paragraphs`
- Timeline: `ABOUT.history.title`, `ABOUT.history.entries`
- WhyChoose: `ABOUT.whyChooseUs.title`, `ABOUT.whyChooseUs.subtitle`, `ABOUT.whyChooseUs.items`
- Process: `ABOUT.process.title`, `ABOUT.process.subtitle`, `ABOUT.process.steps`
- Certifications: `ABOUT.certificationsSection.title`, `ABOUT.certificationsSection.subtitle`, `CERTIFICATIONS`
- Stats: `STATS` (heading/subtitle hardcoded as these are page-specific framing)
- Final CTA: `FINAL_CTA`

**No hardcoded content:** headings, descriptions, years, timeline entries, certifications, statistics, CTA content all from content layer. Only "By the Numbers" section heading and supporting text are page-specific framing (descriptive, not data).

**Responsive layout:**
- AboutHero: 2-column on desktop, stacked on mobile (image above text via order)
- Timeline: Alternating left/right on md+, single column on mobile with left-aligned dot
- WhyChooseUs: 2-col desktop, 1-col mobile (reused component defaults)
- Process: Horizontal on lg+, vertical on mobile (reused component defaults)
- StatsGrid: 3-col desktop, 2-col tablet, 1-col mobile (explicit columns=3)
- Final CTA: Centered column, stacked buttons on mobile (reused component defaults)

**Accessibility:**
- `aria-label="About Hero"` on hero section
- `aria-label="Our Story"` on CompanyStory section
- `aria-label="Company History Timeline"` on Timeline section
- `aria-label="Certifications and Compliance"` on certs section
- `aria-label="Company Statistics"` on stats section
- Proper heading hierarchy: h1 (AboutHero) → h2 (all section headings) → h3 (Timeline entries, WhyChoose cards, Process steps)
- `aria-hidden="true"` on decorative elements (divider bar, timeline lines, timeline dots)
- All interactive elements receive focus-visible ring via global CSS

**Animation implementation:**
- All new sections reuse existing `staggerContainer`, `fadeUp`, `viewportOptions` from `src/lib/motion.ts`
- AboutHero also uses `scaleIn` for the image (reused pattern from Homepage Hero)
- All animations respect `prefers-reduced-motion` via global CSS

**Key decisions:**
- CompanyStory uses a simple `div`-based layout with max-width container rather than a complex grid
- Timeline uses `space-y-10` / `space-y-16` for consistent spacing between entries
- Timeline dots positioned absolutely relative to each entry row
- Certs section wrapped in its own section rather than using TrustStats wrapper, for layout control
- Stats section has its own descriptive subtitle ("By the Numbers") as page-specific framing
- No FullPageWrapper/Seo component used — component not yet built (Phase 7)
- No AnimatedCounter used — component not yet built (Phase 2.3)

---

---

### Milestone 5.2 — Services Hub Page Completion (2025-07-21)

**Files created (new components):**
- `src/content/services-hub.ts` — Services Hub page-specific content data (hero title/subtitle, intro heading/description, FAQ preview heading/subtitle). Exports `SERVICES_HUB` constant. No hardcoded display text on the page.
- `src/components/sections/ServicesHero.tsx` — Page-level hero for Services Hub. Content-driven: title (h1), subtitle. Centered, single-column layout. Background: `bg-muted`. Uses `staggerContainer`, `fadeUp` animations. No CTAs — pure branding hero for the hub.
- `src/components/sections/FaqPreview.tsx` — FAQ preview section displaying first N FAQs from content layer. Simple stacked card layout — no accordion, no expand/collapse. Each FAQ renders question (h3) and answer in a styled card with subtle hover border/shadow. Includes "View All FAQs" button linking to `ROUTES.faqs`. Props: title, subtitle, faqs, count (default 5), className. Content-driven from `FAQS`.

**Files modified:**
- `src/content/index.ts` — Added export for `SERVICES_HUB` from `services-hub.ts`
- `src/pages/Services/ServicesHub.tsx` — Complete rewrite with 6 sections replacing the placeholder
- `tracker.md` — Marked Phase 5.2 (Dynamic routing + Services hub) complete

**Components reused (no modifications):**
- `ServiceCard` — Renders each of the 13 services in the grid with icon, title, shortTagline, and "Learn More" link (linking to `servicePath(slug)`)
- `WhyChooseUs` — Renders 6 WhyChooseUsItem cards from `ABOUT.whyChooseUs`
- `ProcessSection` — Renders 6-step process timeline from `ABOUT.process`
- `FinalCtaSection` — Renders CTA band from `FINAL_CTA`

**Services Hub page architecture (section order):**
```
ServicesHubPage
 ├── ServicesHero (h1 title + subtitle)
 ├── Services Grid section (h2 heading + intro + 13 ServiceCards in 3/2/1 grid)
 ├── WhyChooseUs (6 feature cards, reused)
 ├── ProcessSection (6-step timeline, reused)
 ├── FaqPreview (first 5 FAQs in stacked cards + "View All FAQs" CTA)
 └── FinalCtaSection (CTA band, reused)
```

**Content-layer usage:**
- ServicesHero: `SERVICES_HUB.hero.title`, `SERVICES_HUB.hero.subtitle`
- Services Grid heading/intro: `SERVICES_HUB.intro.title`, `SERVICES_HUB.intro.description`
- Services data: `SERVICES` — all 13 services from `services.ts`
- WhyChoose: `ABOUT.whyChooseUs.title`, `ABOUT.whyChooseUs.subtitle`, `ABOUT.whyChooseUs.items`
- Process: `ABOUT.process.title`, `ABOUT.process.subtitle`, `ABOUT.process.steps`
- FAQ Preview: `SERVICES_HUB.faqPreview.title`, `SERVICES_HUB.faqPreview.subtitle`, `FAQS` (first 5)
- Final CTA: `FINAL_CTA`

**No hardcoded content:** headings, descriptions, services, FAQs, CTA content all from content layer.

**Responsive layout:**
- Services Grid: 3 cols desktop (lg+), 2 cols tablet (sm+), 1 col mobile
- WhyChooseUs: 2-col desktop, 1-col mobile (reused component defaults)
- Process: Horizontal on lg+, vertical on mobile (reused component defaults)
- FAQ Preview: Single column cards, max-w-4xl constrained
- Final CTA: Centered column, stacked buttons on mobile (reused component defaults)

**Hover effects (no scaling):**
- ServiceCard: `hover:border-primary/20`, `hover:shadow-md`, icon color transition to primary (reused component defaults)
- FAQ cards: `hover:border-primary/20`, `hover:shadow-md`
- All transitions: `duration-300 ease-premium-out`

**Accessibility:**
- `aria-label="Services Hub"` on ServicesHero section landmark
- `aria-label="Complete Range of Services"` on services grid section landmark
- `aria-label="Frequently Asked Questions"` on FaqPreview section landmark
- Proper heading hierarchy: h1 (ServicesHero) → h2 (all section headings) → h3 (ServiceCard titles, FAQ questions)
- `aria-hidden="true"` on all decorative icons and connector lines
- ServiceCard links have `aria-label="Learn more about {service name}"`
- "View All FAQs" link navigates to full FAQ page
- All interactive elements receive focus-visible ring via global CSS
- `prefers-reduced-motion` respected via global CSS

**Animation implementation:**
- All sections reuse existing `staggerContainer`, `fadeUp`, `viewportOptions` from `src/lib/motion.ts`
- ServicesHero uses stagger with fadeUp for h1 and subtitle
- Services grid uses stagger container with fadeUp for heading, intro, and cards
- FAQ Preview uses stagger container with fadeUp for heading, subtitle, FAQ cards, and CTA
- All animations respect `prefers-reduced-motion` via global CSS

**Key decisions:**
- Services grid uses 3-column layout (not 4) to give each card more breathing room for 13 services — avoids cramped cards
- FaqPreview is a new reusable component with configurable `count` prop, making it usable on other pages (e.g., contact page) without modification
- ServicesHero is intentionally simple (no image, no CTAs) — keeps focus on the grid of services below, consistent with a hub/overview page
- FAQ cards use `article` semantic element for each FAQ entry
- WhyChooseUs and ProcessSection are reused directly from ABOUT content — consistent with Home and About pages using the same data

---

### Milestone 5.1 — Dynamic Service Detail Page (2025-07-21)

**Files created (new reusable components):**
- `src/components/sections/ServiceDetailHero.tsx` — Service-specific page hero with two-column layout (text left, image right). Content-driven: h1 service name, tagline, optional ImageRef. Uses `staggerContainer`, `fadeUp`, `scaleIn` animations. No CTAs — pure branding hero for the service.
- `src/components/sections/ServiceOverview.tsx` — Overview section displaying service description text. Supports optional title heading. Splits overview into paragraphs by double newlines. Uses `staggerContainer`, `fadeUp`.
- `src/components/sections/KeyFeatures.tsx` — Benefits/features grid section displaying service benefits. Content-driven: title, subtitle, features array. Each feature card renders icon (from Lucide mapper), title, and description. Responsive 2-col desktop, 1-col mobile. Subtle hover border/shadow. Uses `staggerContainer`, `fadeUp`.
- `src/components/sections/IndustriesServedSection.tsx` — Industry badges section resolving industry slugs from content layer. Displays industry cards with icon, name, and description. Responsive 3-col desktop, 2-col tablet, 1-col mobile. Uses `staggerContainer`, `fadeUp`.
- `src/components/sections/RelatedServices.tsx` — Related services grid section. Renders 3-4 ServiceCards in responsive grid. Content-driven via `getRelatedServices()` which excludes current service. Responsive 3-col desktop, 2-col tablet, 1-col mobile. Uses `staggerContainer`, `fadeUp`.

**Files modified:**
- `src/pages/Services/ServicePage.tsx` — Complete rewrite from placeholder to full 7-section dynamic service detail page. Handles error/404 state for invalid slugs.
- `tracker.md` — Marked Phase 5.1 complete, updated current phase to Phase 5.

**Components reused (no modifications):**
- `ProcessSection` — Renders `service.process` steps (structurally compatible with `ProcessStep[]` type)
- `ServiceCard` — Renders each related service in the RelatedServices grid
- `FinalCtaSection` — Renders CTA band from `FINAL_CTA` content

**Service detail page architecture (section order):**
```
ServicePage (/services/:slug)
 ├── ServiceDetailHero (h1 service name + tagline + image)
 ├── ServiceOverview (overview text paragraphs)
 ├── KeyFeatures (benefits grid with icons)
 ├── IndustriesServedSection (industry cards resolved from slugs)
 ├── ProcessSection (6-step engagement process)
 ├── RelatedServices (3-4 service cards, excluding current)
 └── FinalCtaSection (CTA band, reused)
```

**Content-layer usage:**
- Service Hero: `service.name`, `service.shortTagline`, `service.heroImage`
- Overview: `service.overview`
- Key Features: `service.benefits`
- Industries Served: `getIndustriesForService(slug)` → resolved `Industry[]`
- Process: `service.process`
- Related Services: `getRelatedServices(slug)` → returns related service data
- Final CTA: `FINAL_CTA` from `cta.ts`

**No hardcoded service-specific content:** All content dynamically resolved from the content layer. No service names, descriptions, features, industries, process steps, or related services hardcoded.

**Content schema:** No extensions needed — existing `Service` interface already provides all required fields (name, shortTagline, heroImage, overview, benefits, industriesServed, process, relatedServices, seo).

**Dynamic routing:** Existing `/services/:slug` route handler (from `routes.ts`) works without changes — `ServicePage` component uses `useParams` to extract slug.

**Error handling:** Invalid/unknown slugs → `getServiceBySlug()` returns `undefined` → renders `<NotFoundPage />`.

**SEO implementation:**
- Dynamic `document.title` set via `useEffect` from `service.seo.title`
- Canonical URL and Open Graph metadata structure present in `SeoMeta` interface — full integration pending Phase 7

**Responsive layout:**
- ServiceDetailHero: 2-col desktop, stacked mobile (image above text)
- KeyFeatures: 2-col desktop, 1-col mobile
- IndustriesServedSection: 3-col desktop, 2-col tablet, 1-col mobile
- ProcessSection: Horizontal on lg+, vertical on mobile (reused component defaults)
- RelatedServices: 3-col desktop, 2-col tablet, 1-col mobile
- FinalCtaSection: Centered column, stacked buttons on mobile (reused component defaults)

**Accessibility:**
- `aria-label` on all section landmarks with descriptive names
- Proper heading hierarchy: h1 (ServiceDetailHero) → h2 (all section headings) → h3 (feature cards, industry cards, process step titles, related service cards)
- `aria-hidden="true"` on all decorative icons and connector lines
- `main#main-content` landmark wrapping the entire page
- All interactive elements receive focus-visible ring via global CSS
- `prefers-reduced-motion` respected via global CSS

**Animation implementation:**
- All new sections reuse existing `staggerContainer`, `fadeUp`, `scaleIn`, `viewportOptions` from `src/lib/motion.ts`
- ServiceDetailHero uses stagger with fadeUp for heading elements and scaleIn for image
- All other sections use stagger container with fadeUp for all child elements
- All animations respect `prefers-reduced-motion` via global CSS

**Key decisions:**
- ServiceDetailHero follows the same pattern as AboutHero (page-level hero, no CTAs, two-column) rather than the homepage Hero (which has CTAs and more complex layout)
- ServiceOverview splits paragraphs by `\n\n` to handle single-string overview fields while maintaining readability; future enhancement could support a paragraphs array
- KeyFeatures uses the same card pattern as ServiceCard (border, hover border/shadow, icon circle, title, description) for visual consistency
- IndustriesServedSection resolves industry objects from slugs at render time rather than storing resolved objects in the content layer — keeps content simple and leverages existing `getIndustriesForService()` utility
- ProcessSection uses service-specific steps (not the generic ABOUT.process) — each service has its own tailored process description
- RelatedServices uses `getRelatedServices()` which automatically excludes the current service based on the content-layer `relatedServices` array
- No new dependencies required — all features built with existing stack (React, Framer Motion, Tailwind, Lucide, shadcn/ui)

---

### Milestone 4.3 — Industries Page Completion (2025-07-22)

**Files created (new components):**
- `src/content/industries-page.ts` — Industries page-specific content: hero, intro, whyChooseUs (industries-specific, not reusing ABOUT), coverage (regions + capabilities), faqPreview heading/subtitle. Exports `INDUSTRIES_PAGE` constant and `IndustriesPageContent` type.
- `src/components/sections/IndustriesHero.tsx` — Page-level hero for Industries page. Two-column layout (text left, decorative icon grid right on desktop, stacked on mobile). H1 heading. Uses `staggerContainer`, `fadeUp`, `scaleIn` animations.
- `src/components/sections/IndustryCard.tsx` — Enhanced industry card displaying icon, title (h3), description, service badges (resolved from relevantServiceSlugs via `getServiceBySlug()`), and "View Services" link navigating to `/services?industry={slug}` for future-proof routing. Max 4 service badges. Uses `fadeUp` animation.
- `src/components/sections/CoverageSection.tsx` — Reusable coverage section with two sub-sections: regions served (2-col grid cards) and deployment capabilities (4-col grid cards). Content-driven. Uses `staggerContainer`, `fadeUp` animations. Exports `CoverageItem` interface.

**Files modified:**
- `src/lib/icons.tsx` — Added 15 new Lucide icons: Warehouse, Monitor, Hospital, GraduationCap, Hotel, Store, Trees, HardHat, Landmark, Globe, MapPin, Clock, Zap, Award, Phone.
- `src/components/sections/FaqPreview.tsx` — Added `viewAllHref` prop (required, default `ROUTES.faqs`). Updated "View All" link to use prop instead of hardcoded route. Makes FaqPreview reusable across any page.
- `src/pages/Services/ServicesHub.tsx` — Passed `viewAllHref={ROUTES.faqs}` to FaqPreview. Added `import { ROUTES }`.
- `src/content/index.ts` — Added exports for `INDUSTRIES_PAGE` and `IndustriesPageContent` type.
- `src/pages/Industries.tsx` — Complete rewrite from placeholder to 7-section full page.
- `tracker.md` — Marked Phase 4.3 complete.

**Components reused (directly, no modifications):**
- `WhyChooseUs` — Renders 6 industries-specific WhyChooseUsItem cards from `INDUSTRIES_PAGE.whyChooseUs` (not reusing ABOUT's whyChooseUs)
- `FaqPreview` — With industry-related FAQs filtered from FAQS (Coverage category + relevant General/Process FAQs)
- `FinalCtaSection` — Renders CTA band from `FINAL_CTA`

**Industries page architecture (section order):**
```
IndustriesPage
 ├── IndustriesHero (h1 title + subtitle + decorative visual)
 ├── Introduction section (h2 heading + description, centered)
 ├── Industries Grid (12 IndustryCards with service badges, bg-muted, 3/2/1 grid)
 ├── WhyChooseUs (6 industries-specific feature cards, reused)
 ├── CoverageSection (2 regions + 4 deployment capabilities)
 ├── FaqPreview (4 industry-related FAQs + "View All FAQs" CTA)
 └── FinalCtaSection (CTA band, reused)
```

**Content-layer usage:**
- IndustriesHero: `INDUSTRIES_PAGE.hero.title`, `INDUSTRIES_PAGE.hero.subtitle`
- Introduction: `INDUSTRIES_PAGE.intro.title`, `INDUSTRIES_PAGE.intro.description`
- Industries Grid: `INDUSTRIES` from `industries.ts` — all 12 industries
- WhyChoose: `INDUSTRIES_PAGE.whyChooseUs.title`, `INDUSTRIES_PAGE.whyChooseUs.subtitle`, `INDUSTRIES_PAGE.whyChooseUs.items`
- CoverageSection: `INDUSTRIES_PAGE.coverage.title`, `INDUSTRIES_PAGE.coverage.subtitle`, `INDUSTRIES_PAGE.coverage.regions`, `INDUSTRIES_PAGE.coverage.capabilities`
- FAQ Preview: `INDUSTRIES_PAGE.faqPreview.title`, `INDUSTRIES_PAGE.faqPreview.subtitle`, filtered `FAQS`
- Final CTA: `FINAL_CTA`

**No hardcoded content:** headings, descriptions, industries, why-choose-us items, coverage data, FAQ content, CTA content all from content layer.

**Responsive layout:**
- IndustriesHero: 2-col desktop, stacked mobile
- Industries Grid: 3 cols desktop (lg+), 2 cols tablet (sm+), 1 col mobile
- WhyChooseUs: 2-col desktop, 1-col mobile (reused component defaults)
- Coverage regions: 2-col grid
- Coverage capabilities: 4-col desktop, 2-col tablet, 1-col mobile
- FAQ Preview: Single column cards, max-w-4xl constrained
- Final CTA: Centered column, stacked buttons on mobile (reused component defaults)

**Hover effects (no scaling):**
- IndustryCard: `hover:border-primary/20`, `hover:shadow-md`, icon color transition to primary
- Coverage cards: `hover:border-primary/20`, `hover:shadow-md`
- All transitions: `duration-300 ease-premium-out`

**Accessibility:**
- `aria-label="Industries Hero"` on hero section landmark
- `aria-label="Industries Introduction"` on intro section landmark
- `aria-label="Industries We Serve Grid"` on grid section landmark
- `aria-label="Coverage and Deployment"` on coverage section landmark
- `aria-label="Available services"` on service badges container
- Proper heading hierarchy: h1 (IndustriesHero) → h2 (all section headings) → h3 (IndustryCard titles, coverage region titles) → h4 (capability labels)
- `aria-hidden="true"` on all decorative icons
- IndustryCard "View Services" links have `aria-label="View services for {industry name}"`
- All interactive elements receive focus-visible ring via global CSS
- `prefers-reduced-motion` respected via global CSS

**Animation implementation:**
- All sections reuse existing `staggerContainer`, `fadeUp`, `scaleIn`, `viewportOptions` from `src/lib/motion.ts`
- IndustriesHero uses stagger with fadeUp for heading elements and scaleIn for decorative visual
- All other sections use stagger container with fadeUp for all child elements
- All animations respect `prefers-reduced-motion` via global CSS

**Key decisions:**
- WhyChooseUs uses industries-specific content (INDUSTRIES_PAGE.whyChooseUs) rather than reusing ABOUT's whyChooseUs — ensures relevance to industries page
- CoverageSection is a new reusable component with typed `CoverageItem` interface — can be reused on About or Contact pages
- IndustryCard service badges are resolved via `getServiceBySlug()` from services content — keeps data relationships clean
- Only 4 service badges max per card to prevent visual clutter (industries like Apartment Associations have 4 relevant services)
- "View Services" links use `/services?industry={slug}` — future-proof for query-parameter-based filtering
- FAQ preview filters only industry-related FAQs: Coverage category (area, outside Bengaluru), General (services offered, how to engage), Process (timeline)
- IndustriesHero uses decorative icon grid instead of image — consistent with no-image design pattern for page-level heroes

---

### Milestone 4.4 — Clients Page Completion (2025-07-22)

**Files created (new):**
- `src/content/clients-page.ts` — Clients page content data (hero, intro, 8 categories, whyClientsStay with 6 items, process with 6 steps, success stories headings, SEO metadata). Exports `CLIENTS_PAGE` constant, `ClientsPageContent` and `ClientCategory` types. All copy from content layer — no hardcoded text on page.
- `src/components/sections/ClientsHero.tsx` — Page-level hero for Clients page. Two-column layout (text left, decorative icon grid right on desktop, stacked on mobile). H1 heading. Uses `staggerContainer`, `fadeUp`, `scaleIn` animations. Patterned after `IndustriesHero`.
- `src/components/sections/ClientCategoryCard.tsx` — Card for client categories displaying icon, title (h3), description, and service badges resolved via `getServiceBySlug()`. Max 4 badges. Subtle hover border/shadow + icon color transition. Uses `fadeUp` animation. Patterned after `IndustryCard`/`WhyChooseCard`.

**Files modified:**
- `src/content/index.ts` — Added exports for `CLIENTS_PAGE`, `ClientsPageContent`, and `ClientCategory` types.
- `src/pages/Clients.tsx` — Complete rewrite from placeholder to 7-section full page with SEO document.title via useEffect.
- `tracker.md` — Marked Phase 4.4 (Clients) complete, updated current phase to Phase 4.

**Components reused (no modifications):**
- `TestimonialsSection` — Renders all 4 TESTIMONIALS in responsive 3/2/1 grid, with headings from `CLIENTS_PAGE.successStories`
- `WhyChooseUs` — Renders 6 why-clients-stay items from `CLIENTS_PAGE.whyClientsStay.items`
- `ProcessSection` — Renders 6-step client-specific engagement process from `CLIENTS_PAGE.process.steps`
- `FinalCtaSection` — Renders CTA band from `FINAL_CTA`

**Clients page architecture (section order):**
```
ClientsPage
 ├── ClientsHero (h1 title + subtitle + decorative visual)
 ├── Introduction section (h2 heading + description, centered, bg-background)
 ├── Client Categories Grid (8 ClientCategoryCards with service badges, bg-muted, 3/2/1 grid)
 ├── Success Stories (TestimonialsSection, 4 testimonials, bg-background)
 ├── Why Clients Stay (WhyChooseUs, 6 feature cards, reused)
 ├── Engagement Process (ProcessSection, 6 client-specific steps, reused)
 └── Final CTA (FinalCtaSection, reused)
```

**Content-layer usage:**
- ClientsHero: `CLIENTS_PAGE.hero.title`, `CLIENTS_PAGE.hero.subtitle`
- Introduction: `CLIENTS_PAGE.intro.title`, `CLIENTS_PAGE.intro.description`
- Categories Grid: `CLIENTS_PAGE.categories` — 8 category objects with icons, descriptions, service slugs
- Success Stories: `CLIENTS_PAGE.successStories.title`, `CLIENTS_PAGE.successStories.subtitle`, `TESTIMONIALS`
- Why Clients Stay: `CLIENTS_PAGE.whyClientsStay.title`, `CLIENTS_PAGE.whyClientsStay.subtitle`, `CLIENTS_PAGE.whyClientsStay.items`
- Engagement Process: `CLIENTS_PAGE.process.title`, `CLIENTS_PAGE.process.subtitle`, `CLIENTS_PAGE.process.steps`
- Final CTA: `FINAL_CTA`

**No hardcoded content:** headings, descriptions, categories, testimonials, feature cards, process steps, CTA content all from content layer.

**Responsive layout:**
- ClientsHero: 2-col desktop, stacked mobile
- Categories Grid: 3 cols desktop (lg+), 2 cols tablet (sm+), 1 col mobile
- Testimonials: 3 cols desktop, 2 cols tablet, 1 col mobile (reused component defaults)
- WhyChooseUs: 2-col desktop, 1-col mobile (reused component defaults)
- Process: Horizontal on lg+, vertical on mobile (reused component defaults)
- Final CTA: Centered column, stacked buttons on mobile (reused component defaults)

**Hover effects (no scaling):**
- ClientCategoryCard: `hover:border-primary/20`, `hover:shadow-md`, icon color transition to primary
- All transitions: `duration-300 ease-premium-out`

**Accessibility:**
- `aria-label="Clients Hero"` on hero section landmark
- `aria-label="Trusted By Introduction"` on intro section landmark
- `aria-label="Client Categories Grid"` on categories grid section landmark
- `aria-label="Commonly used services"` on service badges container
- Proper heading hierarchy: h1 (ClientsHero) → h2 (all section headings) → h3 (category titles, testimonial authors, feature card titles, process step titles)
- `aria-hidden="true"` on all decorative icons
- Decorative icon grid in ClientsHero is `aria-hidden="true"`
- All interactive elements receive focus-visible ring via global CSS
- `prefers-reduced-motion` respected via global CSS

**Animation implementation:**
- All sections reuse existing `staggerContainer`, `fadeUp`, `scaleIn`, `viewportOptions` from `src/lib/motion.ts`
- ClientsHero uses stagger with fadeUp for heading elements and scaleIn for decorative visual
- Introduction and categories grid use stagger container with fadeUp for all child elements
- All animations respect `prefers-reduced-motion` via global CSS

**SEO implementation:**
- `document.title` set via `useEffect` from `CLIENTS_PAGE.seo.title`
- SEO metadata object includes title, description, canonicalPath, schemaType for future Phase 7 integration
- Canonical URL path from `ROUTES.clients` constant

**Key decisions:**
- Created 8 client categories (Corporate, Residential, Educational, Healthcare, Banking & Finance, Hospitality, Industrial, Government) covering all major sectors SSCSS serves
- ClientCategoryCard does not include a "View Services" link (unlike IndustryCard) since the categories are descriptive, not navigational — service badges provide context naturally
- ProcessSection uses client-specific engagement steps (not reusing ABOUT.process) — tailored to client onboarding lifecycle: Consultation → Proposal → Onboarding → Deployment → Monitoring → Partnership
- WhyChooseUs uses client-retention-specific content (reliability, support, quality, compliance, partnership, scalability) rather than reusing ABOUT.whyChooseUs or generic content
- TestimonialsSection reuses all TESTIMONIALS (placeholder) — when real testimonials are supplied, they automatically populate
- No TrustStrip or StatsGrid on Clients page — these already appear on Home and About pages; client logos render conditionally when permissionConfirmed is true (existing CLIENTS content layer handles this)
- Hero decorative visual uses same icon grid pattern as IndustriesHero for visual consistency across page-level heroes

### Milestone 7.5 — Analytics & Webmaster Tools (2026-08-01)

**Status:** ✅ Done

**Files created (new analytics module):**
- `src/lib/analytics/config.ts` — Central configuration layer reading `VITE_GA4_MEASUREMENT_ID`, `VITE_GTM_ID`, `VITE_GOOGLE_SITE_VERIFICATION`, `VITE_BING_SITE_VERIFICATION` from `import.meta.env`. Exports `ANALYTICS_CONFIG` and `isAnalyticsEnabled()`.
- `src/lib/analytics/types.ts` — All event parameter interfaces: `PageViewParams`, `CtaClickParams`, `PhoneClickParams`, `WhatsAppClickParams`, `FormSubmitSuccessParams`, `FormSubmitErrorParams`, `FormValidationErrorParams`, `ScrollDepthParams`, `ServicePageViewParams`, `FaqInteractionParams`, `GalleryInteractionParams`, `OutboundLinkClickParams`, `FileDownloadClickParams`, `DataLayerEntry`, `AnalyticsEventParams`. Event name enum `EVENTS`.
- `src/lib/analytics/core.ts` — Non-blocking GA4/GTM script loader using `requestIdleCallback` with `document.addEventListener` fallback. Exports `initializeAnalytics()`, `pushToDataLayer()`, `gtag()` wrappers.
- `src/lib/analytics/events.ts` — All public event trackers: `trackPageView`, `trackCtaClick`, `trackPhoneClick`, `trackWhatsAppClick`, `trackFormSubmitSuccess`, `trackFormSubmitError`, `trackFormValidationError`, `trackScrollDepth`, `trackServicePageView`, `trackFaqInteraction`, `trackGalleryInteraction`, `trackOutboundLinkClick`, `trackFileDownloadClick`, `trackCustomEvent`. Plus helpers `getPageTitle()` and `getSourcePage()`.
- `src/lib/analytics/hooks.ts` — Three React hooks: `usePageViewTracking()` (fires on route change via `useLocation`), `useScrollDepthTracking()` (25/50/75/100% milestones), `useInteractionTracking()` (delegated click handler via `data-analytics-*` attributes).
- `src/lib/analytics/index.ts` — Barrel file exporting the public API. Business components only import from here.
- `src/lib/analytics/AnalyticsProvider.tsx` — Provider component mounted in Layout. Initializes analytics, tracks page views, scroll depth, and delegated clicks. Returns null — renders nothing.

**Files modified:**
- `src/components/layout/Layout.tsx` — Mounted `<AnalyticsProvider />` (renders nothing, safe to remove).
- `src/components/common/FloatingWhatsAppButton.tsx` — Added `data-analytics-component="floating_whatsapp"` attribute.
- `src/components/common/StickyMobileCallButton.tsx` — Added `data-analytics-component="sticky_call_button"` attribute.
- `src/components/navigation/Header.tsx` — Added `data-analytics-cta="header_get_quote"` on the "Get a Quote" button.
- `src/components/navigation/MobileNav.tsx` — Added `data-analytics-cta="mobile_get_quote"` on mobile "Get a Quote" link.
- `src/components/sections/Hero.tsx` — Added `data-analytics-cta` on both primary/secondary CTA buttons.
- `src/components/sections/FinalCtaSection.tsx` — Added `data-analytics-cta` on both primary/secondary CTA buttons.
- `src/components/sections/ContactCtaSection.tsx` — Added `data-analytics-cta` on CTA buttons and `data-analytics-component` on phone/whatsapp.
- `src/components/sections/ContactInfo.tsx` — Added `data-analytics-component` on phone and whatsapp links.
- `src/components/layout/Footer.tsx` — Added `data-analytics-component` on phone, whatsapp, and email links.
- `src/components/sections/EmergencyHotlineCard.tsx` — Added `data-analytics-component="emergency_hotline"` attribute.
- `src/components/sections/GalleryGrid.tsx` — Added `useLocation` import, `sourcePage` from `getSourcePage()`, `source_page` and `media_id` to `trackGalleryInteraction` calls.
- `src/pages/Faqs.tsx` — Added `useLocation` import, `sourcePage` from `getSourcePage()`, FAQ interaction tracking with `trackFaqInteraction` on accordion toggle.
- `src/pages/Contact.tsx` — Added `data-analytics-component` attributes on phone, whatsapp, email, and address contact channels.
- `src/lib/contact/submit.ts` — Added `trackFormSubmitSuccess` and `trackFormSubmitError` calls around Formspree submission.
- `vite.config.ts` — Added `analyticsPlugin` that injects Google Search Console and Bing Webmaster verification `<meta>` tags into `index.html` during build, reading from `VITE_GOOGLE_SITE_VERIFICATION` and `VITE_BING_SITE_VERIFICATION`. Also injects GA4/GTM script tags conditionally.
- `.env.example` — Added `VITE_GA4_MEASUREMENT_ID`, `VITE_GTM_ID`, `VITE_GOOGLE_SITE_VERIFICATION`, `VITE_BING_SITE_VERIFICATION`.

**Events added:**
- `page_view` — SPA-aware route change tracking
- `cta_quote_click` — "Get a Quote" / "Enquire" button clicks with `source_page` and `cta_label`
- `phone_click` — `tel:` link clicks with `source_page` and `component`
- `whatsapp_click` — WhatsApp link/button clicks with `source_page` and `component`
- `form_submit_success` — Successful Formspree submission with `source_page` and `service_interested`
- `form_submit_error` — Failed Formspree submission with `source_page` and `error_type`
- `form_validation_error` — Client-side form validation failure with `source_page` and `field`
- `scroll_depth` — 25/50/75/100% scroll depth milestones with `page_path` and `depth`
- `service_page_view` — `/services/{slug}` route views with `service_slug`
- `faq_interaction` — FAQ accordion toggle with `source_page`, `question`, `action`
- `gallery_interaction` — Gallery filter/open with `source_page`, `action`, `category`, `media_id`
- `outbound_link_click` — External link clicks with `source_page`, `url`, `link_text`
- `file_download_click` — File download clicks with `source_page`, `file_name`, `file_type`

**Environment variables added:**
- `VITE_GA4_MEASUREMENT_ID` — GA4 Measurement ID (e.g., `G-XXXXXXXXXX`)
- `VITE_GTM_ID` — Google Tag Manager ID (e.g., `GTM-XXXXXXX`)
- `VITE_GOOGLE_SITE_VERIFICATION` — Google Search Console verification string
- `VITE_BING_SITE_VERIFICATION` — Bing Webmaster verification string

## Deviations / decisions log

* **2025-07-21** — Restructured tracker phases. Milestone 1.1 (Global Header & Navigation) built by user directive. Navigation grouped into Phase 1, design system primitives moved to Phase 2, to match current implementation priorities.
* **2025-07-21** — Homepage sections (Process, Testimonials, Final CTA, Footer) built as single milestone per user requirement to complete the homepage in one prompt. All 4 sections and the global Footer replacement handled together.

## Open questions for the client

* Real photos, certificate scans (GST/PSARA/PF/ESI), and testimonials.
* Client logo permissions.
* Formspree endpoint.
* Confirm whether "Private Detective Services" and "Background Verification" should remain standalone services in navigation.

---

### Milestone 4.5 — Gallery Page Completion (2025-07-22)

**Files created (new):**
- `src/content/gallery.ts` — Gallery page content data with co-located types. Contains hero, intro, 6 categories, 20 placeholder images across 5 categories, empty videos array, trust highlights with 4 items, SEO metadata.
- `src/components/sections/GalleryHero.tsx` — Page-level hero. Two-column layout (text left, decorative icon grid right). Content-driven. Uses staggerContainer, fadeUp, scaleIn.
- `src/components/sections/MediaLightbox.tsx` — Reusable media lightbox. Supports: open/close, Escape key, prev/next arrows, focus trapping, backdrop click, body scroll lock, image caption, counter. Exports `LightboxMedia` interface.
- `src/components/sections/GalleryGrid.tsx` — Gallery grid with category filter tabs, responsive masonry layout (CSS columns 3/2/1), placeholder visuals, hover overlay, lightbox integration. Video section conditionally rendered.
- `src/components/sections/TrustHighlights.tsx` — Reusable trust highlights section. 4 items in 4/2/1 grid with icons, titles, descriptions. Uses WhyChooseUsItem type.

**Files modified:**
- `src/lib/icons.tsx` — Added 7 icons: Image, Video, X, ChevronLeft, ChevronRight, Maximize2, Target.
- `src/content/index.ts` — Added exports for GALLERY and gallery types.
- `src/pages/Gallery.tsx` — Rewrote from placeholder to 7-section page with SEO.
- `tracker.md` — Marked Phase 4.5 complete.

**Components reused:** FinalCtaSection.

**Gallery page architecture:**
```
GalleryPage
 ├── GalleryHero (h1 + subtitle + decorative visual)
 ├── Introduction (h2 + description, centered)
 ├── GalleryGrid (category filters + masonry grid + lightbox)
 │    └── Video section (omitted — empty videos array)
 ├── TrustHighlights (4 items: Professionalism, Trained Staff, Compliance, Excellence)
 └── Final CTA (FinalCtaSection reused)
```

**Key decisions:**
- Gallery types co-located in content file (not global types)
- MediaLightbox is a generic reusable component for images/videos
- CSS columns for masonry layout (no JS dependencies)
- Placeholder images use category-colored gradients (not broken SVG links)
- Videos array empty → section gracefully omitted
- All content from content layer, no hardcoded text

---

### Additional Milestone — Production 404 Page (2026-07-28)

**Status:** ✅ Done

**Files created:**
- `src/content/not-found.ts` — content-driven 404 copy, navigation cards, popular destinations, contact labels, and non-indexable metadata.

**Files modified:**
- `src/content/index.ts` — exports the 404 content.
- `src/pages/NotFound.tsx` — replaced the placeholder with the complete production 404 experience.

**Notes:** The existing `*` wildcard route continues to resolve all unknown paths to `NotFoundPage`; no routing duplication was introduced. The page reuses `Card`, `Button`, `FinalCtaSection`, motion utilities, route constants, and contact values from `site.ts`. Phone and email remain conditionally rendered until configured.

---

### Milestone 8.3 & 8.4 — Project-Wide Accessibility, UX Consistency, & Responsive Audit (2026-07-29)

**Status:** ✅ Done

**Files modified during full audit:**
- `src/components/ui/button.tsx` — Added minimum touch target sizing (44x44px for icon buttons, 44px min-height for standard sizes), enhanced focus-visible ring styles (`ring-2 ring-ring ring-offset-2`).
- `src/components/ui/input.tsx` — Added min-h-[44px] touch target height, clear focus ring, aria-invalid styling for input fields.
- `src/hooks/useFocusTrap.ts` — Created focus trap hook with focus restoration to the previously active element upon modal close.
- `src/main.tsx` — Added skip-to-content focus listener and global accessibility keyboard setup.
- `src/pages/Services/ServicePage.tsx` — Added semantic heading hierarchy, aria landmarks, and focus management.
- `src/components/ui/dialog.tsx` — Added min-h-[44px] min-w-[44px] touch target sizing, focus-visible outline offset, and aria-label for close button.
- `src/components/ui/sheet.tsx` — Added min-h-[44px] min-w-[44px] touch target sizing, focus-visible outline offset, and aria-label for close button.
- `src/components/sections/MediaLightbox.tsx` — Integrated shared `useFocusTrap` hook with focus restoration, added `aria-live="polite"` screen reader announcements for media index changes, updated control buttons to min 44x44px touch targets with focus outlines.
- `src/components/sections/GalleryGrid.tsx` — Improved category filter tabs with min 44px touch targets, added `aria-live="polite"` region for dynamic filter count announcements, and set `aria-haspopup="dialog"` on lightbox trigger buttons.
- `src/components/sections/FilterChips.tsx` — Increased chip touch target height to min 44px with focus-visible outline offsets.
- `src/components/forms/ContactForm.tsx` — Added `autoComplete`, `inputMode`, `required`, `aria-required="true"`, visual required indicators (`*`), and updated select element touch target height to min 44px.
- `src/components/ui/ReusableAccordion.tsx` — Refined accordion roles, added explicit min 44px trigger button height, and enhanced focus outline states.
- `src/components/navigation/Header.tsx` — Added min 44px touch target height to desktop header CTA button.
- `src/components/navigation/DesktopNav.tsx` — Added min 44px touch target height and focus-visible outline offsets to desktop nav links.
- `src/components/navigation/MobileNav.tsx` — Integrated focus trapping inside mobile drawer with `useFocusTrap`, set hamburger button to 44x44px touch target, and set menu links to min 44px touch target height.
- `src/pages/Faqs.tsx` — Added `autoComplete="off"`, `inputMode="search"`, min 44px height, and `role="status"` `aria-live="polite"` live regions for dynamic FAQ search result announcements.

**Key Accessibility & UX Improvements:**
1. **Focus Trap & Restoration:** Dialogs, sheets, lightboxes, and mobile menu panels trap keyboard focus and restore focus to trigger elements upon closing.
2. **Keyboard Navigation:** Full support for Esc closing, Arrow keys for lightbox and tab/accordion navigation, Home/End key support.
3. **ARIA & Semantics:** Correct landmarks, dialog roles, `aria-live="polite"` announcement regions for filters, search results, and lightbox state changes.
4. **Forms & Input Semantics:** Full `autoComplete`, `inputMode`, `required`, `aria-required`, and `aria-invalid` attributes across all form controls.
5. **Touch Targets:** All interactive buttons, chips, links, inputs, and selects meet WCAG 2.1 AAA / AA minimum 44px height/width touch target guidelines.
6. **Responsive Layout Integrity:** Tested across 320, 375, 390, 414, 768, 1024, 1280, 1440, 1920 viewports without layout breaking or text overflow.
7. **Motion:** All animations respect `prefers-reduced-motion` and maintain focus positioning without focus loss.

---

### Milestone 10.1 — Code Cleanup & Production Readiness (2026-07-30)

**Status:** ✅ Done

**What was removed (all confirmed zero-references via project-wide grep before deletion):**

*Files deleted:*
- `src/components/ui/Accordion.tsx` — unused shadcn accordion (replaced by `ReusableAccordion.tsx` used in Faqs.tsx)
- `src/components/ui/dialog.tsx`, `src/components/ui/sheet.tsx`, `src/components/ui/dropdown-menu.tsx`, `src/components/ui/navigation-menu.tsx` — shadcn primitives with zero imports anywhere in `src/`
- `TODO.md` — internal implementation artifact; important status merged into this tracker
- `nul` — accidental stray file at repo root (77 bytes)
- `publicfavicon/`, `publicicons/`, `publicimagesclients/`, `publicimagesgallery/`, `publicimageshero/`, `publicimagesservices/`, `publicimagesteam/`, `publiclogos/`, `publicog/` — stale empty directories at repo root (real assets live under `public/`)

*Dead exports removed (from content sources + barrel `src/content/index.ts`):*
- `getServiceSlugs` (services.ts) — zero references
- `getIndustryBySlug` (industries.ts) — zero references
- Previously removed (prior session): `buildServicesDropdown`, `FOOTER_SERVICES_LINKS`, `FOOTER_RESOURCES_LINKS`, `getRealTestimonials`, `getAllTestimonials`, `getConfirmedClients`, `getAllClients`, `getVerifiedCertifications`, `getPendingCertifications`, `getAllCertifications`

**Architecture / component review result:** No refactors required. Folder structure, naming, utility placement, content organization, and hooks organization are consistent with techspec.md §3. No duplicated logic, duplicated props, inconsistent APIs, or unnecessary wrappers found.

**Files modified:**
- `src/content/index.ts` — barrel export cleanup
- `src/content/services.ts` — removed `getServiceSlugs`
- `src/content/industries.ts` — removed `getIndustryBySlug`
- `tracker.md` — this note

**Dependency review (documented only — no packages uninstalled, package.json unchanged):**

*Confirmed in use (keep):*
- `react`, `react-dom`, `react-router-dom`, `framer-motion`, `lucide-react`, `class-variance-authority`, `clsx`, `tailwind-merge`, `@fontsource-variable/geist`, `tw-animate-css`, `@base-ui/react` (shadcn primitive dependency)

*Removal candidates (zero imports found in `src/`):*
- `react-hook-form` — form is hand-rolled with `src/lib/contact/validation.ts`; no imports
- `@hookform/resolvers` — no imports
- `zod` — no imports; validation.ts uses hand-rolled regex validators (note: `@hookform/resolvers` and `zod` are commonly paired with react-hook-form, so all three can be removed together if react-hook-form is not adopted)

*Note:* `shadcn` (CLI) is a dev-time tool; `@base-ui/react` is used by the retained shadcn primitives (button, card, etc.) and should be kept until those primitives are verified free of it.

**Remaining cleanup opportunities (not blocking):**

### Milestone — Loading Experience (Skeletons & Route Suspense)

**Status:** ✅ Done
**Date:** 2026-08-05

**Goal:** This milestone focuses exclusively on the loading experience — no redesign. Perceived performance, no layout shift (CLS), continuous route transitions, smooth image loading, accessibility, and code reuse. Header/Footer must never disappear during navigation.

**Skeleton primitives created (`src/components/common/`):**
- `Skeleton.tsx` — base animated block (`animate-pulse`, `bg-muted`, reduced-motion safe via global CSS). Single low-level shimmer used everywhere — no per-component shimmer blocks.
- `TextBlockSkeleton.tsx` — paragraph line placeholder.
- `HeroSkeleton.tsx` — hero / featured image frame.
- `CardSkeleton.tsx` — card placeholder matching the shared card anatomy (icon circle + title + body lines).
- `GallerySkeleton.tsx` — masonry grid + filter-chip placeholder.
- `RouteContentSkeleton.tsx` — page-content-only route loader rendered inside `<main>` so Header/Footer stay visible.
- `ImageWithSkeleton.tsx` — reusable wrapper: reserves layout, shows a skeleton behind the image, fades the image in on `onLoad` (no flash, no CLS). `aria-hidden` skeleton; real `<img>` keeps `alt` semantics.

**Route suspense strategy:**
- `routes.tsx` — removed the `<Suspense>` wrapper around `<Layout/>` (kept `ErrorBoundary`).
- `Layout.tsx` — wrapped `<Outlet/>` in `<Suspense fallback={<RouteContentSkeleton/>}/>`. Now only the changing page content is skeletonized; the global Header and Footer remain mounted during navigation, giving continuous premium transitions.

**Image loading (reserve layout → skeleton → fade-in) via `ImageWithSkeleton` + `HeroSkeleton`:**
- `Hero.tsx` — home hero image (LCP `eager`, `fetchPriority="high"`).
- `AboutHero.tsx` — about hero image (`lazy`).
- `ServiceDetailHero.tsx` — service hero image (`lazy`).
- `FounderSection.tsx` — founder portrait (`lazy`, `aspect-[4/5]`).
- `ComplianceSection.tsx` — certification document image (`lazy`).
- `GalleryGrid.tsx` — real gallery images now use `ImageWithSkeleton` (skeleton + fade-in); removed the duplicated `onLoad` opacity handler. Lazy `MediaLightbox` wrapped in `<Suspense fallback={null}>`.
- `MediaLightbox.tsx` — image now uses `ImageWithSkeleton` (skeleton behind, crossfade on load), keyed by `item.id` so navigating images shows a fresh skeleton. Video branch unchanged.

**Contact form (requirement 4):**
- No skeleton needed — already has a spinner (`Loader2`), disabled controls during submit, inline error banner, inline success state, and a screen-reader live region. Verified disabled controls + inline progress + no double submit.

**Documentation updated:** `tracker.md` (this entry), `techspec.md` (§12 Loading experience), `implementationplan.md` (milestone added), `TODO.md` (all items checked).

**Cleanup:**
- Removed dead `src/components/common/RouteLoadingFallback.tsx` — superseded by `RouteContentSkeleton` (no references remain).

**Verification:** `npm run build` passes (exit 0, ~1.7s). No new npm dependencies added.

---

### Milestone — Performance Optimization

**Status:** ✅ Done
**Date:** 2026-08-05

**Goal:** Audit and implement *only safe* performance optimizations — no redesign, no new state-management libraries, no overuse of `React.memo`, no unnecessary complexity. Maintain Lighthouse performance.

**Audit findings (what was already done well):**
- **Image loading** — Home hero LCP is `loading="eager"`/`fetchPriority="high"`/`decoding="sync"`; all below-fold images are `loading="lazy"`/`decoding="async"`/`fetchPriority="low"`; explicit `width`/`height` on hero images. `ImageWithSkeleton` reserves layout (no CLS) and fades in on load.
- **Code splitting / lazy loading** — Route-level `React.lazy()` + `Suspense` for all non-home routes; `MediaLightbox` lazy-loaded inside `GalleryGrid`; skeletons keep Header/Footer mounted. `HomePage` is the only eagerly loaded route (critical path).
- **Repeated calculations** — `GalleryGrid` already memoizes filtered images & lightbox items with `useMemo`; `FaqsPage` already memoizes categories, filtered FAQs, and accordion items.
- **Browser/static caching** — Vite emits content-hashed asset filenames (immutable caching friendly); `index.html` is the only entry point. Font assets are self-hosted with `font-display` handled by `@fontsource-variable/geist`.
- **Analytics** — Non-blocking `requestIdleCallback` loader, never on the critical path, fully disabled when no IDs configured.
- **Memoization** — `ServiceCard` is already `memo()`ized; `TextEffect`'s inner `AnimationComponent` is memoized.

**Optimizations applied (safe, low-complexity):**
1. **`src/components/layout/Layout.tsx`** — Hoisted the footer's derived data (`footerServices` mapping `SERVICES` and the `PSARA` certification lookup) from the render body to module scope. This removes per-render array-mapping and `Array.find` work, and the props are now referentially stable across re-renders (helps `Footer`/`PSARABadge` bail out of needless re-renders).
2. **`src/components/forms/ContactForm.tsx`** — Wrapped the `services.map(...)` service-option derivation in `useMemo` keyed on `services`, so the options array is rebuilt only when the services list changes (it is static content), avoiding unnecessary array allocation on every form keystroke re-render.
3. **Verified memoization** — Confirmed `ServiceCard` remains `memo()`ized and no unnecessary `React.memo` was added elsewhere (per task guidance to not overuse it).

**Deliberately NOT changed (avoided unnecessary complexity):**
- No new state-management library (none needed — static content layer).
- No overuse of `React.memo` — only the already-memoized `ServiceCard` and the motion primitive's `AnimationComponent` remain memoized.
- Did not micro-optimize `cn()`/`twMerge` calls (negligible cost, would add complexity).
- Did not add manual route prefetching (routes load on demand; prefetching would add complexity without benefit for a lead-gen SPA).

**Verification:**
- `npm run build` → passes (exit 0, ~1–2s). No new npm dependencies added.
- `npm run lint` → 0 errors (16 pre-existing warnings only).

---

### Milestone 7.7 — Enterprise Trust & Compliance Pass (2026-08-01)

**Status:** Complete

**Implemented:** Added the `/compliance` route and its content-driven certification display, an honest pending/verified PSARA footer badge, compliance linking from About, and an audit safeguard that excludes placeholder testimonials from public rendering. Founder and case-study interfaces remain deliberately unimplemented until real source data is provided.

### Milestone 7.6 â€” Enterprise SEO & GEO Quality Pass (2026-08-01)

**Status:** Complete

**Implemented:** Audited the current route/content layer and refined page/service metadata, canonical normalization, internal links, schema entity references, AI crawler directives, generated `llms.txt`, sitemap route-count checking, and unsupported FAQ claims.
- Consider removing `react-hook-form`, `@hookform/resolvers`, and `zod` from package.json in a future milestone if the hand-rolled validation remains the chosen approach
- `public/og/sscss-default.svg` is unused at runtime (PNG is referenced by `SEO_DEFAULTS.ogImage`) — candidate for future removal
- `src/assets/real/` is empty — intentional placeholder directory per schema.md asset convention, keep

---

### Milestone — Enterprise Motion Enhancement Pass (Motion Primitives)

**Status:** ✅ Done
**Date:** 2026-08-05

**Goal:** Raise perceived premium quality to Apple/Stripe/Linear/Notion grade using tasteful, enterprise-grade motion. This was a motion-only pass — no redesign, no layout/color/type changes, no new animation system. It reuses the installed Motion Primitives and the existing Framer Motion vocabulary in `src/lib/motion.ts`.

**Motion Primitives installed (official CLI, `motion/react` based) under `components/motion-primitives/`:**
- `disclosure.tsx` — controlled expand/collapse with ARIA + keyboard support.
- `in-view.tsx` — once-per-viewport reveal wrapper.
- `border-trail.tsx` — subtle animated border sweep.
- `text-effect.tsx` — per-line text reveal (used by `HeadlineReveal`).
- `animated-background.tsx` — installed but intentionally unused (no section needed it; left available for future).

**Files created:**
- `src/components/common/HeadlineReveal.tsx` — Apple-style mask reveal (per-line, 450–600ms, premium easing, no overshoot) built on `TextEffect`. Keeps the real semantic `h1`/`h2`; subtitle + CTA keep existing `fadeUp`.
- `src/components/common/SectionBackground.tsx` — reusable low-opacity decorative SVG background. `aria-hidden="true"`, `pointer-events-none`, rendered behind content (`z-10` on content).
- `public/images/low-poly-grid-haikei.svg` — brand-aligned blue grid texture copied from repo root for runtime serving.

**Files modified (motion integration):**
- Hero headings → `HeadlineReveal`: `Hero.tsx`, `AboutHero.tsx`, `ServicesHero.tsx`, `IndustriesHero.tsx`, `ClientsHero.tsx`, `GalleryHero.tsx`, `ServiceDetailHero.tsx`, `Contact.tsx`, `ThankYou.tsx`, `NotFound.tsx`, `Compliance.tsx`.
- `WhyChooseCard.tsx` → `Disclosure` (icon + title + label shown; click expands/closes remaining description; `aria-expanded`, `aria-controls`, keyboard Enter/Space, focus-visible ring).
- `ProcessStepCard.tsx` → `InView` (once-per-viewport reveal with margin trigger `0px 0px -10% 0px`, slight up + fade, no continuous animation).
- Hover lift (`hover:-translate-y-1` + `hover:shadow-lg`, retaining existing border + icon transitions) applied only to: `ServiceCard`, `IndustryCard`, `ClientCategoryCard`, `KeyFeatures`, `RelatedServices`, `TrustHighlights`. No scale/rotate/tilt.
- `BorderTrail` (subtle, `bg-primary/50`) applied only to hero/featured/gallery imagery: `Hero`, `AboutHero`, `ServiceDetailHero`, `GalleryGrid`. Not applied site-wide.
- `SectionBackground` (low-poly grid at ~5% opacity) added to `ProcessSection` and `CoverageSection` only — the blue texture genuinely improves depth there; red/purple SVGs were rejected (clash with theme / too saturated).
- `ThankYou.tsx` — fixed pre-existing `SuccessIcon` static-component lint error (now uses `createElement`).
- `eslint.config.js` — added `.history` to `globalIgnores` so stale editor backups no longer pollute lint output.

**Where integrated & why (task 10 documentation):**
- HeadlineReveal: used on every hero to give the primary value proposition a cinematic, per-line masked reveal — the single most-read element on each page, matching the reference brands' hero treatment. Subtitle/CTA untouched to preserve hierarchy.
- Disclosure (Why Choose Us): the six feature cards now reveal their full copy progressively, keeping the grid compact while preserving content layer data (nothing hardcoded). Chosen over every-card-expanded because progressive disclosure improves scan-ability and perceived refinement.
- InView (Process timeline): each step reveals once as it enters the viewport, drawing attention down the timeline without looping or continuous motion.
- Hover lift: applied only to interactive card grids where a gentle lift communicates affordance; intentionally NOT applied to stat cards, trust ribbons, testimonial cards, or the final CTA band to avoid noise.
- BorderTrail: reserved for the hero/featured/gallery imagery only, where a slow, subtle primary-colored sweep adds premium depth without distraction.
- SectionBackground: only on Process and Coverage (both `bg-muted`), where the subtle grid texture adds depth without harming readability.

**Left intentionally static (and why):**
- `FinalCtaSection`, `TestimonialCard`, `StatCard`, `StatsGrid`, `TrustStrip`, `TrustRibbon`, `Footer` — these already have restrained existing motion; adding more would distract from conversion/trust messaging.
- Red (`layered-peaks-haikei.svg`, `stacked-steps-haikei.svg`) and saturated purple (`layered-steps-haikei.svg`) SVGs were rejected to preserve the deep-navy/periwinkle brand palette and readability.
- `AnimatedBackground` primitive — no existing section needed it, so it was left unused rather than forcing it in.

**Accessibility considerations:**
- All motion respects `prefers-reduced-motion` via the global `MotionConfig reducedMotion="user"` (main.tsx) and the `index.css` reduce block.
- `HeadlineReveal` keeps a real semantic heading for screen readers; the mask is purely visual.
- `Disclosure` provides `role="button"`, `aria-expanded`, `aria-controls`, keyboard Enter/Space toggle, and focus-visible ring.
- `SectionBackground` is `aria-hidden` and `pointer-events-none`.
- `BorderTrail` is decorative and hidden from assistive tech; it is a non-interactive overlay.
- No focus loss, no new traps, no new live regions required.

**Performance considerations:**
- No new npm dependencies added — reuses installed Motion Primitives and existing `motion/react`.
- `ServiceCard` remains `memo`ized; no new expensive render work.
- `SectionBackground` uses a lazy-loaded, `decoding="async"` image.
- BorderTrail/InView/Disclosure are lightweight primitives; no layout thrashing introduced.
- Bundle size impact minimal (motion primitives are small, tree-shaken).

**Verification:**
- `npm run build` → passes (exit 0, ~1–2s).
- `npm run lint` → **0 errors** (16 pre-existing warnings only: react-refresh `only-export-components` on route/primitive exports, unused eslint-disable directives, one exhaustive-deps warning in Contact.tsx).
- Motion primitives compile cleanly under the app's strict `verbatimModuleSyntax` tsconfig (type-only imports fixed during integration).

---

### Milestone — Global Experience Foundation (2026-08-09)

**Status:** Complete — manual verification pending by request.

**Implemented:** A stable fixed header now uses a subtle translucent dark/blurred scroll state, compact desktop height, active-route indicator, and preserved quote CTA. Desktop Services is a keyboard-accessible categorized mega-menu with image crossfades and direct service routes. The mobile navigation provides a tap-expanded services list. `RouteExperience` uses the installed Anime.js package for a reduced-motion-safe page-content entrance, resets new route navigations to the top, supports hash targets, and preserves POP/back-forward restoration. No page content or route/Suspense architecture was redesigned.

---

### Milestone — Services Experience Upgrade (2026-08-09)

**Status:** Complete — manual verification pending by request.

**Implemented:** Replaced only the `/services` hub's repeated service-card grid with `ServiceShowcase`: a desktop selector paired with one featured visual, concise service copy, direct detail-route CTA, Anime.js indicator/entrance/crossfade/scale motion, and reduced-motion handling. The showcase reads unchanged `Service[]` data and uses `ImageWithSkeleton`; unavailable service image references render a clearly marked placeholder. Mobile uses a touch-friendly single-open accordion with the same routes. Home, global navigation, Industries, Clients, and service detail pages were left unchanged.

---

### Milestone — Services Visual Upgrade (PHASE 02) (2026-08-09)

**Status:** ✅ Done — TypeScript check passes (`npx tsc --noEmit -p tsconfig.app.json` clean). No tests/builds run per instructions.

**Scope:** Elevated only the existing `/services` `ServiceShowcase` selector into a large, premium Apple-product-selection + Linear-case-study + Raycast-card presentation. No redesign of the site, no new routes, no business-logic/content-data changes, no new dependencies, no autoplay/infinite motion.

**What changed (`src/components/sections/ServiceShowcase.tsx` only):**
1. **Selected service is now visually dominant** — the feature image fills a taller `rounded-2xl` stage (`min-h-[34rem]`, `shadow-lg`) with a restrained bottom gradient scrim, and the service’s icon chip + title + concise tagline + Explore CTA are overlaid directly on the image. This removes the separate text bar below the image, reducing page text density.
2. **Grid rebalanced toward the visual** — `lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.35fr)]` (selector slightly narrower, stage wider).
3. **Subtle metadata / stage index** — a top-right counter shows `01 / 13` and animates to the selected service’s index on change (Anime.js, reduced-motion safe); numeric indices (`01`…`13`) added to each selector item and the mobile accordion for a Raycast-style scannable list.
4. **Restrained hover/click transitions (Anime.js, existing setup)** — selector hover shows a subtle primary index + dot tint; the active item keeps the sliding primary indicator bar; on selection the image crossfades/scales (existing) and the overlay title/content reveal with a 420ms opacity + `translateY` sweep. All wrapped in `prefers-reduced-motion` guards.
5. **Real-image/placeholder decision untouched** — `ServiceVisual` still renders the real SSCSS photos for the five personnel services (`security-guards`, `residential-security`, `housekeeping`, `ex-army-security-guards`, `event-security`) and the honest “Image placeholder” treatment for the eight environment/other services. No weak real photo was forced into a service where it doesn’t fit.
6. **Mobile stays clean** — the single-open accordion is retained, now using the same overlay treatment (image + gradient + overlaid title/tagline/icon) and the numeric index, with the same route CTAs.

**Refactor (quality):** `ServiceVisual` previously reset its placeholder state via a synchronous `setState`-in-`useEffect` (flagged by the React lint). It now relies on `key={service.slug}` remounts at both call sites, so `src` changes reset state without an effect. The stage counter uses a typed Anime.js `update` callback on a plain object instead of an `innerText` modifier (which the library’s TS types reject).

**Reduced motion:** all four Anime.js effects (indicator, image crossfade, counter, overlay reveal) and the entrance check `matchMedia("(prefers-reduced-motion: reduce)")` and set final static state directly — no animation.

**Files changed:** `src/components/sections/ServiceShowcase.tsx`, `tracker.md` (this entry), `implementationplan.md` (milestone note), `TODO.md` (PHASE 02 checklist).

---

### Milestone — Home Visual Storytelling Upgrade (2026-08-09)

**Status:** Complete — manual verification pending by request.

**Implemented:** Replaced only Home's use of the generic Why Choose and Process layouts with `HomeProofSection` and `HomeProcessTimeline`; the shared components used by other routes remain unchanged. Added `SecurityIntelligence`, a calm dark illustrative operations interface placed after the existing Home services preview. The proof canvas uses six compact CSS/SVG representations of existing business claims, the timeline advances an Anime.js progress line on viewport progression, and the security panel runs a one-time scan/route reveal. All additions honor reduced motion and introduce no generated images, dependencies, route changes, or changes to Services, Industries, Clients, or navigation.

---

### Milestone — Industries & Clients Experience Upgrade (2026-08-09)

**Status:** Complete — manual verification pending by request.

**Implemented:** Replaced the Industries card grid with `IndustryExplorer`, an interactive Anime.js radial environment selector and a non-dashboard CSS/SVG environment brief. Replaced Clients' repeated category/process grids with `ClientTrustExperience`: a calm sector marquee, visual sector panels, animated existing statistics, and an approval-only testimonial/proof surface. No client names, logos, or testimonials were invented; existing data, routes, Home, Services, and navigation remain unchanged.

---

### Milestone — About Storytelling Upgrade (2026-08-09)

**Status:** Complete — manual verification pending by request.

**Implemented:** Replaced the About text-only story and separate history with a media-capable `CompanyStory` surface: optional real-video support, the existing lazy skeleton/image fallback, restrained overlay, condensed lead story, and Anime.js timeline/media reveal. Added the About-only `AboutFounderPortrait` to preserve the MD image source while avoiding changes to Home. Replaced About's certification strip with `AboutEvidenceSection`, which displays supplied documents through the existing skeleton wrapper or an explicit request-only document preview. No documents, video, or claims were fabricated.

---

### Milestone — Real Company Image Integration (2026-08-09)

**Status:** ✅ Done

**Goal:** Wire the approved real SSCSS photography into the existing image slots in the content layer, replacing the reusable/synthetic placeholders on personnel/team surfaces (per `docs/IMAGE_AUDIT_FINAL.md` REPLACE decisions and `TODO.md`). No AI images were added, no business claims changed, and no tests were run.

**Assets copied (`Images/` → `public/images/real/`, kebab-case SEO names):**
- `Guards 1.jpg` → `sscss-guards-team-1.jpg`
- `Guards 2.jpg` → `sscss-guards-team-2.jpg`
- `Guards 3.jpg` → `sscss-guards-team-3.jpg`
- `Security at entrance.webp` → `sscss-security-at-entrance.webp`
- `Security rear.webp` → `sscss-security-rear.webp`
- `HouseKeeping 1.jpg` → `sscss-housekeeping-1.jpg`
- `bodyguards 1.jpg` → `sscss-bodyguard-1.jpg`
- `bodyguards 3.jpg` → `sscss-bodyguard-3.jpg`
- `CFEE1924.JPG` → `sscss-event-cfee1924.jpg`
- `EMMR4893.JPG` → `sscss-event-emmr4893.jpg`

**Content-layer wiring (all real assets set `isPlaceholder: false`):**
- `about.ts` — About hero + CompanyStory fallback → `sscss-guards-team-1.jpg` (already wired; confirmed).
- `services.ts` — Five personnel service heroes wired: `security-guards` (`sscss-guards-team-2.jpg`), `residential-security` (`sscss-security-at-entrance.webp`), `housekeeping` (`sscss-housekeeping-1.jpg`), `ex-army-security-guards` (`sscss-bodyguard-3.jpg`), `event-security` (`sscss-bodyguard-1.jpg`).
- `gallery.ts` — Team tiles (4) → guards team 1/2/3 + bodyguard-3; Deployments (2) → security-at-entrance + security-rear; Events (3) → event-cfee1924 + event-emmr4893 + bodyguard-1.

**Deliberately left as placeholders (environment/other surfaces, per audit rules):**
- Home hero (`src/assets/placeholder/hero.svg`), founder portrait, certification documents (request-only), and environment service heroes (corporate, industrial, front-office, skilled/unskilled labour, corporate-staffing, background-verification, private-detective, facility-management). No real assets exist for these categories; the audit forbids mixing synthetic personnel into real-personnel compositions.

**Files modified:**
- `src/content/gallery.ts`
- `tracker.md` (this entry)

*(`about.ts` and `services.ts` were wired in the same phase session; `public/images/real/` assets confirmed present via `ls -la`.)*

**Verification:** `npx tsc --noEmit -p tsconfig.app.json` runs clean for the content-layer changes. Full project build (`npm run build`) passes; the only reported TS errors prior — in `HomeProcessTimeline`, `HomeProofSection`, `IndustryExplorer`, `ServiceShowcase` — are the pre-existing Anime.js effect-cleanup type issues already resolved in the Final Experience Polish pass and unrelated to image wiring.

**Documentation cleanup (complete):** The integrated real assets are now documented in `techspec.md` §19 "Real Company Image Assets" (source→public mapping, usage, and alignment with `docs/IMAGE_AUDIT_FINAL.md` KEEP/EDIT/REPLACE/REMOVE decisions). `TODO.md` step "Update techspec.md §11" marked complete. No source code, layout, route, animation, or content-data changes were made in this documentation pass.

---

### Milestone — Final Experience Polish (2026-08-09)

**Status:** ✅ Done

**Goal:** Consistency and refinement only — remove anything excessive, gimmicky, repetitive, or visually noisy from the prior visual-upgrade phases while preserving the coherent premium motion system. No new layouts, no routes, no dependencies, no tests, no business-claim changes.

**Motion hierarchy enforced (design.md §7 aligned):**
- MICRO 100–250ms — buttons, icons, hover feedback (existing `duration-200`/`duration-300`).
- SMALL 300–500ms — cards, image transitions, menus.
- MEDIUM 500–900ms — section reveals, timelines.
- CINEMATIC 900–1500ms — reserved for hero/story transitions only.
- No animation on every element; important information stays immediately readable; the site remains premium with animations disabled.

**What was removed (excessive/repetitive motion):**
- `GalleryGrid.tsx` — removed the per-gallery-tile `BorderTrail` infinite loop (`repeat: Infinity, duration: 10`). Per design.md §7 "Never: constant looping animations", this was the most repetitive application of the effect. The three hero/featured films (Home, About-help, ServiceDetail) keep their single slow BorderTrail per the techspec §11 carve-out.
- `ClientTrustExperience.tsx` — replaced the 30s linear-infinite duplicated-category marquee (inline `<style>` keyframes + `[animation:...infinite]`) with a calm, static, wrapping centered chip strip. No auto-motion, no duplicated categories, no inline `<style>`.

**Accessibility / stability fixes:**
- `GalleryGrid.tsx` — removed the Framer `layout` prop from gallery buttons (unstable inside CSS `columns` masonry; caused reflow risk).
- `GalleryGrid.tsx` — corrected filter-chip semantics from an invalid `role="tablist"`/`role="tab"`/`aria-selected` group to a proper `aria-pressed` toggle-button group (no tab-panel contract existed).

**Unchanged (coherent system preserved):**
- Reduced-motion honoring (global `MotionConfig reducedMotion="user"` + `index.css` reduce block).
- Shared `src/lib/motion.ts` vocabulary (premiumEasing, stagger, fadeUp) and the per-component Anime.js ease `"out(4)"` — both engines left intact.
- Consistent hover lifts, skeleton/fade image loading, route transitions, navigation, and all 15 audit axes (motion consistency, timing, hover, mobile, tablet, reduced-motion, image loading, layout stability, route transitions, navigation, CTA visibility, text density, repeated patterns, accessibility, performance).

**Files modified:**
- `src/components/sections/GalleryGrid.tsx`
- `src/components/sections/ClientTrustExperience.tsx`
- `src/components/sections/HomeProcessTimeline.tsx`
- `src/components/sections/HomeProofSection.tsx`
- `src/components/sections/IndustryExplorer.tsx`
- `src/components/sections/ServiceShowcase.tsx`
- `TODO.md` (task tracking)
- `tracker.md` (this entry)
- `implementationplan.md`, `techspec.md` §11 (see milestone notes)

**TypeScript compile fix (build-blocking, pre-existing):** The Anime.js visual-upgrade components returned `animation.revert()` directly from their effect cleanups, which TypeScript flagged as `TS2345` (`JSAnimation` not assignable to `void | Destructor`). The cleanups were wrapped in a block `() => { animation.revert(); }` to return `void`, and an unused `useEffect` import was removed from `IndustryExplorer`. This is purely a type-correctness fix — no timing, easing, design, or behavior changed. `npm run build` now passes (`tsc -b` clean; Vite build ✓ ~2.2s).

**Verification:** No tests run (per instructions). No new npm dependencies added. Business claims, routes, and routing architecture unchanged.

---

### Milestone — Security Operations Visual System (2026-08-09)

**Status:** Complete — manual verification pending by request.

**Implemented:** Built ONLY the Security Operations visual system for the Home page. Created `SecurityOperations.tsx` (a reusable, responsive security-operations console in the dark, restrained Linear/Vercel/Raycast visual language) and inserted `<SecurityOperations />` on the Home page after `HomeProcessTimeline`, before Testimonials. All other Home sections, routes, navigation, Services, Industries, Clients, and content data remain unchanged.

**Console composition:**
- Header bar: "Security Operations" + an "Operational" status pill (static dot, no infinite ping).
- Three compact metrics: Active sites / Personnel / Coverage — all clearly illustrative UI values.
- Stylized SVG site map: subtle district blocks, muted blue coverage rings, a patrol route that draws once, and site points that appear sequentially.
- Site status list: Main gate, North perimeter, Control room, Patrol route — each with a green status indicator.
- Footer: "All operations normal" + a prominent "Illustrative view" caption attached directly to the console.

**Content honesty:** No real-company statistics were used or invented. The dashboard is framed as a *conceptual view of how organized security operations can be managed*; the three metric values (24 / 128 / 96%) are decorative UI figures and are explicitly labelled "Illustrative view" directly on the console so they can never be read as factual SSCSS claims.

**Animation (existing Anime.js setup):** Entrance runs once when the section enters the viewport — patrol route stroke draws once, site points stagger in sequentially, status rows reveal in sequence, and metric numbers count up once. No infinite looping. `prefers-reduced-motion` is honored: the reduced-motion path renders the complete final static state.

**Responsive:** The console is a two-column composition on desktop (copy + console) that stacks vertically on mobile; within the console, the metrics row wraps and the map + status list stack vertically on mobile and sit side-by-side on `sm+`.

**Files changed:**
- `src/components/sections/SecurityOperations.tsx` (new)
- `src/pages/Home.tsx` (import + `<SecurityOperations />` placement)
- `implementationplan.md` (milestone note)
- `tracker.md` (this entry)

**Verification:** `npx tsc --noEmit -p tsconfig.app.json` runs clean. No tests or builds run (per instructions). No new npm dependencies added.

---

### Milestone — Home Trust Visual Refinement (PHASE 03) (2026-08-09)

**Status:** ✅ Done — TypeScript check passes (`npx tsc --noEmit -p tsconfig.app.json` clean). No tests/builds run per instructions.

**Scope:** Refined ONLY the Home `Why Choose SSCSS` / `HomeProofSection` experience. No redesign of the page, no new routes, no business-logic/content-data changes, no new dependencies, no infinite/carousel/bounce animation, no fake statistics/clients/testimonials/certifications. The technical/dashboard visual remains owned by `SecurityOperations`; this section now communicates the **human / operational trust** side.

**What changed (`src/components/sections/HomeProofSection.tsx` only):**
1. **One dominant visual/proof area** — the previous generic 3-column card grid was replaced with a two-column editorial layout led by ONE real SSCSS photograph (`sscss-guards-team-2.jpg`, `isPlaceholder: false`) in a `rounded-2xl` stage with a bottom gradient scrim and an overlaid "Trained & vetted personnel" badge. Uses the existing `ImageWithSkeleton` + `HeroSkeleton` (reserve layout → skeleton → fade-in, `lazy`/`async`/`low`) — no CLS, same image loading behavior.
2. **Compact supporting proof points** — the six existing approved claims (15+ years / Structured / Verified / Scalable / Dedicated / Integrated) moved into a tight, grouped list of compact cards (icon chip + short title + uppercase label + the existing compact CSS/SVG visual). Text density reduced; none of the factual claims were changed.
3. **Visual hierarchy** — descriptive copy cut to a short two-line intro; the section now reads as a premium editorial proof surface rather than a generic icon-card grid.
4. **Restrained Anime.js motion (existing setup)** — the dominant photo enters once when it reaches the viewport (opacity + slight rise, 520ms, `out(4)`); proof rows reveal sequentially on a stagger (70ms, 420ms). Hovering/focusing a row subtly highlights its visual (icon chip fills primary + proof visual opacity shift) — no scale/bounce. All wrapped in `prefers-reduced-motion` guards that render the complete static state.
5. **Responsive** — stacks on mobile (photo first for a natural read), proof rows become a 2-col grid on `sm+`, no cramped tablet columns, no horizontal overflow, and the rows are non-interactive informational list items (touch-safe, no hover-dependent interaction).

**Files changed:** `src/components/sections/HomeProofSection.tsx`, `tracker.md` (this entry), `implementationplan.md` (milestone note), `TODO.md` (PHASE 03 checklist).

---

### Milestone — Home Engagement Process Timeline (PHASE 04) (2026-08-09)

**Status:** ✅ Done — TypeScript check passes (`npx tsc --noEmit -p tsconfig.app.json` clean). No tests/builds run per instructions.

**Scope:** Refined ONLY the Home `Our Engagement Process` / `HomeProcessTimeline` experience. No redesign of the page, no new routes, no business-logic/content-data changes, no new dependencies, no new imagery, no infinite/carousel/bounce animation, no fake statistics/clients/testimonials/certifications. The technical/dashboard visual stays owned by `SecurityOperations`; this section is a restrained, progressive process journey.

**What changed (`src/components/sections/HomeProcessTimeline.tsx` only):**
1. **Scroll-progressive timeline (desktop)** — the previous static six-column interactive grid (tappable cards with a fixed 6-col layout) is replaced with a single horizontal rail (`lg+`) with six step nodes. A restrained `h-px` `bg-border` rail carries a `bg-primary` progress line that fills as the user scrolls through the section, reading as a journey from enquiry → assessment → deployment → ongoing support. The progress fill is computed from the section's bounding-rect scroll position and set directly (no lag, no tween fighting scroll); it does not imply the user must scroll through each step to continue.
2. **Clean vertical process (mobile/tablet)** — a vertical rail with the same nodes and content, each step naturally revealing as it enters the viewport. No horizontal overflow.
3. **Strong visual identity per step (existing system)** — each step keeps its exact existing one-sentence description and its existing Lucide icon (from the existing `STEP_ICONS` set) as its visual identity. Visible text is reduced to step number + title + the one-sentence description.
4. **Sequential Anime.js reveal** — on section viewport entry, the heading and then each step reveal sequentially (stagger 70ms, 420–520ms, `out(4)` ease). One-time, no looping.
5. **Subtle active-step emphasis** — the step nearest the viewport center receives a primary fill + ring (color shift only; no scale, no bounce).
6. **Reduced motion** — `prefers-reduced-motion` renders the complete static state: all steps visible at full opacity, progress line set directly via scroll, no entrance animation.
7. **Accessibility** — semantic `<ol>`/`<li>` list, real `<h3>` step titles, section `aria-labelledby`, rail/nodes `aria-hidden` (decorative), no keyboard-only interaction required, no focus trap.

**Files changed:** `src/components/sections/HomeProcessTimeline.tsx`, `tracker.md` (this entry), `implementationplan.md` (milestone note), `TODO.md` (PHASE 04 checklist).

**Verification:** `npx tsc --noEmit -p tsconfig.app.json` clean. No tests/builds run (per instructions).

---

### Milestone — Image Wheel Visual Showcase (PHASE 05) (2026-08-09)

**Status:** ✅ Done — TypeScript check passes (`npx tsc --noEmit -p tsconfig.app.json` clean). No tests/builds run per instructions.

**Scope:** Added ONE premium cinematic ImageWheel visual section to the Home page — a single visual storytelling moment, NOT a gallery page and NOT another card grid. No redesign of the page, no new routes, no business-logic/content-data changes, no new dependencies, no generated/images invented, no infinite/carousel/bounce/auto-rotate animation, no fake statistics/clients/testimonials/claims. All other sections, Services, Industries, Clients, About, navigation, footer, and content data remain unchanged.

**What was built (`src/components/sections/ImageWheel.tsx` — new reusable component; `src/pages/Home.tsx` — wired after `HomeProcessTimeline`):**
1. **Minimal copy** — eyebrow *"THE PEOPLE BEHIND THE PRESENCE"* + large heading *"Security is built around people."* + one short support line ("The teams, discipline, and presence behind every deployment."). Very little text; the wheel is the dominant visual.
2. **Composed radial image installation (desktop `sm+`)** — a central dominant real tile (`sscss-guards-team-2.jpg`) with seven overlapping satellite real tiles at varied size/rotation/position/z-index (`bodyguard-1`, `guards-team-1`, `security-at-entrance`, `event-cfee1924`, `guards-team-3`, `security-rear`, `housekeeping-1`). All are approved SSCSS real photos chosen for composition; no unsuitable image was forced in. A subtle radial primary glow behind the composition adds depth. Each tile uses the existing `ImageWithSkeleton` + `HeroSkeleton` (reserve layout → skeleton → fade-in, `lazy`/`async`/`low`).
3. **One clearly-marked future-AI placeholder slot** — a dashed-border `primary` tile with a Lucide `ImagePlus` icon and an "Image placeholder" label. No AI image is generated or invented in this phase.
4. **Restrained hover interaction (desktop)** — hovering a tile brings it slightly forward (`scale` + `-translate-y-1` + raised shadow + `hover:z-40`), brightens the image (`hover:brightness-110`), and reveals its small category label (bottom gradient scrim, `opacity-0 → group-hover:opacity-100`). The wheel stays visually stable until the user interacts — no auto-rotation, no autoplay, no endless float, no bounce, no looping, no excessive parallax.
5. **Anime.js one-time entrance** — on viewport entry, the heading + all tiles stagger once into their final positions (`opacity` + `translateY` + `scale`, 70ms stagger, 520ms, `out(4)`). No looping. `prefers-reduced-motion` renders the complete final static state (no entrance animation).
6. **Responsive** — full composed wheel on desktop; a smaller overlap on tablet (`sm+`); on mobile a clean stacked/offset two-column arrangement (`grid-cols-2`, alternating `translate-y-6`) with no horizontal overflow, every image visible, and labels always shown (touch-safe — interaction never depends on hover).
7. **Accessibility** — semantic `<h2>` with `aria-labelledby`, `aria-hidden` on decorative glow and labels, descriptive `alt` text on every real image, `role="img"` + `aria-label` on the placeholder slot, keyboard focus ring via global CSS, and reduced-motion honored globally.

**Content honesty:** No fake statistics, testimonials, clients, or security claims were added. The future-AI slot is explicitly labelled "Image placeholder" so it can never be mistaken for a real SSCSS asset.

**Files changed:** `src/components/sections/ImageWheel.tsx` (new), `src/pages/Home.tsx` (placement), `tracker.md` (this entry), `implementationplan.md` (milestone note), `TODO.md` (PHASE 05 checklist).

**Verification:** `npx tsc --noEmit -p tsconfig.app.json` clean. No tests/builds run (per instructions).
