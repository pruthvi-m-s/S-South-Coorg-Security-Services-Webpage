# Implementation Plan — SSCSS Website

Phases run in order. Each phase is broken into small, single-objective prompts. Do not skip ahead. Mirror progress in `tracker.md` as you go — this file is the plan, `tracker.md` is the live status.

## Phase 0 — Foundation

0.1 Scaffold Vite + React + TypeScript project, install Tailwind, shadcn/ui, React Router, Framer Motion, Lucide, React Hook Form, Zod.
0.2 Set up folder structure per `techspec.md` §3.
0.3 Configure Tailwind theme tokens (colors, type scale, spacing, radius) per `design.md`.
0.4 Set up base layout shell: Header (nav placeholder), Footer, `<Layout>` wrapper, React Router routes stubbed (empty pages) for every route in `appflow.md` §1.
0.5 Confirm dev server runs, all stub routes navigate correctly, no console errors.

**Exit criteria:** empty but fully-routed skeleton site, theme tokens in place, nothing styled in detail yet.

---

## Phase 1 — Navigation

1.1 Global Header & Navigation: sticky header, scroll-aware shadow, content-layer-driven branding, desktop flat nav with active highlighting, accessible mobile menu (hamburger + Framer Motion slide-down), primary CTA.
1.2 Full Footer.
1.3 Floating WhatsApp Button.
1.4 Sticky Mobile Call Button.
1.5 Back-to-Top Button.
1.6 Page transitions + Lenis smooth scrolling.

**Exit criteria:** navigating the site feels premium, polished and consistent.

---

## Phase 2 — Design system & core components

2.1 Build themed shadcn primitives: Button (3 variants), Input/Textarea/Select, Card, Accordion, Badge.
2.2 Build `SectionContainer` + spacing/rhythm primitives.
2.3 Build `AnimatedCounter` with `prefers-reduced-motion` support.
2.4 Build reusable `Seo` component.
2.5 Build reusable `CTAButtons` block.

**Exit criteria:** style-guide/demo route showing all components themed correctly.

---

## Phase 3 — Content data layer

3.1 Author `services.ts` (all 13 services).
3.2 Author industries, testimonials, clients, certifications, stats and FAQs content.

**Exit criteria:** all content typed and importable.

---

## Phase 4 — Core pages

4.1 Home.
4.2 About.
4.3 Industries.
4.4 Clients.
4.5 Gallery.
4.6 FAQs.
4.7 Contact.

**Exit criteria:** every non-service page completed using the design system and content layer.

---

## Phase 5 — Service pages

5.1 Build `ServicePageTemplate`.
5.2 Dynamic routing + Services hub.
5.3 Verify all 13 service pages.

**Exit criteria:** all service pages live and cross-linked.

---

## Phase 6 — Forms & lead flow

6.1 InquiryForm component.
6.2 Formspree integration.
6.3 Thank-you page.
6.4 End-to-end submission testing.

**Exit criteria:** every inquiry path works correctly.

---

## Phase 7 — SEO & metadata

7.1 Per-page metadata.
7.2 JSON-LD schema.
7.3 sitemap.xml, robots.txt, Open Graph images.
7.4 Local SEO optimization pass.
7.5 Google Analytics 4 integration.
7.6 Enterprise SEO and GEO quality pass: audit page intent, metadata, schema, internal links, crawl files, and AI-readable content against the SEO documentation.
7.7 Enterprise trust and compliance pass: publish the content-driven Compliance page, sitewide pending/verified PSARA signal, and honest certification-status presentation; defer founder and case-study surfaces until real data exists.

---

## Phase 8 — Performance, accessibility & responsiveness

8.1 Image optimization.
8.2 Code splitting.
8.3 Accessibility audit.
8.4 Responsive QA.
8.5 Lighthouse 95+ pass.

---

## Phase 9 — Pre-launch QA & handoff

9.1 Content review.
9.2 Cross-browser testing.
9.3 Deployment.
9.4 GBP embed + NAP verification.
9.5 Handoff documentation.

---

**Future / post-launch (not in this plan):** CMS integration, Careers functionality, CRM/serverless lead capture, blog/content marketing.

---

## Milestone — Enterprise Motion Enhancement Pass (COMPLETED)

**Status:** ✅ Done (produced as a motion-only pass; see `tracker.md` for full implementation notes and `techspec.md` §11 for the animation architecture.)

**Objective:** Improve perceived premium quality toward Apple/Stripe/Linear/Notion grade using tasteful, enterprise-grade motion — without a redesign, without changing the design system, accessibility, analytics, SEO, or responsive behavior.

**Scope of work (10 tasks):**
1. **Hero headlines** — Apple-style mask reveal (per-line, 450–600ms, premium easing, no overshoot) across all 11 heroes via the new `HeadlineReveal` wrapper (built on the `TextEffect` primitive). Subtitle + CTA keep existing `fadeUp`.
2. **Why Choose SSCSS** — replaced static cards with the Motion Primitive `Disclosure` (icon + title + label; click expands/collapses description; ARIA + keyboard; content remains from the content layer).
3. **Process timeline** — replaced the reveal with the `InView` primitive (once-per-viewport, margin-based trigger, slight up + fade, no continuous animation).
4. **Card hover lift** — subtle `-translate-y-1` + `shadow-lg` (no scale/rotate/tilt) applied only to `ServiceCard`, `IndustryCard`, `ClientCategoryCard`, `KeyFeatures`, `RelatedServices`, `TrustHighlights`.
5. **Border Trail** — subtle primary-colored sweep on hero/featured/gallery imagery only (`Hero`, `AboutHero`, `ServiceDetailHero`, `GalleryGrid`). Not applied site-wide.
6. **SVG backgrounds** — selective, low-opacity brand-aligned blue grid (`SectionBackground`) behind `bg-muted` Process and Coverage sections. Red/saturated SVGs rejected.
7. **Motion consistency audit** — unified easing/durations/stagger via existing `src/lib/motion.ts` vocabulary; removed inconsistent motion.
8. **Performance** — no new deps, `ServiceCard` stays memoized, lightweight primitives, no layout thrashing.
9. **Accessibility** — reduced-motion respected, semantic headings kept, Disclosure ARIA + keyboard, decorative layers hidden from assistive tech, no focus loss.
10. **Documentation** — updated `tracker.md`, `techspec.md` (§11), and this plan.

**Verification:** `npm run build` passes; `npm run lint` → 0 errors (16 pre-existing warnings only).

---

## Milestone — Loading Experience (Skeletons & Route Suspense) (COMPLETED)

**Status:** ✅ Done (produced as a loading-only pass; see `tracker.md` for full implementation notes and `techspec.md` §12 for the skeleton architecture.)

**Objective:** Improve perceived performance and eliminate layout shift (CLS) during route changes and image loads — **without a redesign**. The global Header and Footer must never disappear during client-side navigation, and every image should render a layout-reserving placeholder that fades into the final asset.

**Scope of work:**
1. **Skeleton primitives** (`src/components/common/`) — `Skeleton.tsx`, `TextBlockSkeleton.tsx`, `HeroSkeleton.tsx`, `CardSkeleton.tsx`, `GallerySkeleton.tsx`, `RouteContentSkeleton.tsx`, `ImageWithSkeleton.tsx`. One low-level shimmer block reused everywhere; no duplicated skeleton logic.
2. **Route suspense** — `routes.tsx` no longer suspends `<Layout/>`; `Layout.tsx` wraps `<Outlet/>` in `<Suspense fallback={<RouteContentSkeleton/>}/>`. Header/Footer stay mounted during navigation.
3. **Image loading** — `ImageWithSkeleton` (+ `HeroSkeleton`) applied to `Hero`, `AboutHero`, `ServiceDetailHero`, `FounderSection`, `ComplianceSection`, `GalleryGrid`, and `MediaLightbox` (skeleton behind + crossfade, keyed per image). Removed the duplicated `onLoad` opacity handler in `GalleryGrid`.
4. **Lazy modal** — lazy `MediaLightbox` wrapped in `<Suspense fallback={null}>`.
5. **Forms** — no skeleton needed (spinner + inline states already present). Verified disabled controls + inline progress + no double submit.
6. **Accessibility** — skeletons are `aria-hidden` and disabled under `prefers-reduced-motion`; real images retain `alt` semantics; no layout shift, no focus loss.
7. **Cleanup** — removed dead `src/components/common/RouteLoadingFallback.tsx` (no references remain).
8. **Documentation** — updated `tracker.md`, `techspec.md` (§12), and this plan.

---

## Milestone — Performance Optimization Pass (COMPLETED)

**Status:** ✅ Done (produced as a performance-only pass; see `tracker.md` for implementation notes and `techspec.md` §13 for the performance architecture.)

**Objective:** Improve runtime performance and Lighthouse scores using only **safe** optimizations — no redesign, no new dependencies, no state-management libraries, no overuse of `React.memo`. Every optimization is defensive and does not change behavior, markup, styling, accessibility, or SEO output.

**Audit coverage (every item checked against the codebase):**
1. **Expensive renders** — verified global shell (`Layout`) and heavily-rendered lists are already lean; no hot-path re-render storms found.
2. **Repeated calculations** — `Layout.tsx` hoists static footer/PSARA derivations (`FOOTER_SERVICES`, `FOOTER_DESCRIPTION`, `PSARA_CERTIFICATION`) to module scope so they run once at load instead of on every render. `ContactForm.tsx` memoizes `serviceOptions` via `useMemo`.
3. **Image loading** — already fully optimized via `ImageWithSkeleton` + `HeroSkeleton`: LCP hero is `eager`/`fetchPriority="high"`/`decoding="sync"`; all below-fold images are `lazy`/`decoding="async"`/`fetchPriority="low"`; explicit `width`/`height` on hero images; skeleton + fade-in prevents CLS.
4. **Route prefetching** — Home is eagerly loaded (critical path); all other routes are `React.lazy()` code-split. Analytics are loaded off the critical path via `requestIdleCallback`/first-interaction.
5. **Memoization** — `ServiceCard` stays `memo`-ized (the only genuinely hot list item). No further `React.memo` added (avoided overuse per task constraints).
6. **Browser caching / static content caching** — handled at the hosting layer (Vercel/Netlify default immutable caching for hashed static assets); fonts are self-hosted (`@fontsource-variable/geist`) with `font-display: swap`.
7. **Static content caching** — all content is static TS modules; no dynamic re-fetching exists.
8. **Derived data** — `Layout` footer data and `ContactForm` service options are derived once; `Faqs`/`GalleryGrid` already use `useMemo`/`useCallback` for filtered lists and handlers.
9. **Lazy loading** — route-level code splitting + lazy `MediaLightbox` already present.
10. **Code splitting** — verified all non-home routes are `lazy()` and bundled into separate chunks.

**Scope of work:**
1. `src/components/layout/Layout.tsx` — module-scope hoisting of static footer/PSARA derivations (render-path minimization).
2. `src/components/forms/ContactForm.tsx` — `useMemo` on the service options array (stable across renders).
3. Documentation — updated `techspec.md` (§13), `tracker.md`, and this plan.

**Verification:** `npm run build` passes (exit 0); `npm run lint` passes (0 errors, 16 pre-existing warnings only). No new npm dependencies added.

**Verification:** `npm run build` passes (exit 0, ~1.7s). No new npm dependencies added.

---

## Milestone — Global Experience Foundation (COMPLETED)

**Scope:** Shared interaction foundation only; page content and routing architecture were intentionally left intact.

1. Persistent, scroll-aware global navigation with active-route treatment and preserved quote CTA.
2. Desktop Services mega-menu with categorized existing services, keyboard/focus support, route targets, and crossfading service imagery.
3. Tap-friendly mobile Services expansion with the same routes.
4. Route scroll reset for new navigations while preserving back/forward history restoration.
5. Lightweight Anime.js route-content entrance that keeps the global shell stable and respects reduced motion.

**Verification:** Not run in this phase by request; manual verification is pending.

---

## Milestone — About Storytelling Upgrade (COMPLETED)

**Scope:** Redesigned only About's story, founder, and certification presentation.

1. Replaced the text-only story and detached history with a cinematic media fallback surface and integrated timeline.
2. Added an About-only MD portrait presentation without changing the Home founder component.
3. Replaced the About trust-strip certification display with document-evidence previews.

**Verification:** Not run in this phase by request; manual verification is pending.

---

## Milestone — Industries & Clients Experience Upgrade (COMPLETED)

**Scope:** Redesigned only `/industries` and `/clients`.

1. Replaced the Industries grid with an Anime.js-driven environment wheel and visual requirements brief.
2. Replaced the Clients grid with a category trust strip, sector visuals, animated stats, and approval-only proof treatment.
3. Removed their legacy shared card/process sections from the route compositions to preserve distinct visual identities and reduce text density.

**Verification:** Not run in this phase by request; manual verification is pending.

---

## Milestone — Home Visual Storytelling Upgrade (COMPLETED)

**Scope:** Redesigned only the specified Home sections.

1. Replaced the Home use of six Why Choose cards with a compact visual proof canvas.
2. Replaced the Home use of the static engagement process layout with a scroll-progress timeline.
3. Added a calm, illustrative security-intelligence interface between the existing Services and proof sections.
4. Kept reusable sections, navigation, Services, Industries, Clients, routes, and content data intact.

**Verification:** Not run in this phase by request; manual verification is pending.

---

## Milestone — Services Experience Upgrade (COMPLETED)

**Scope:** Redesigned only the `/services` hub's service exploration surface. The Home preview, global navigation, service-detail routes, Industries, and Clients were not changed.

1. Replaced the repeated 13-card hub grid with an interactive selector and featured visual stage.
2. Kept all existing services and paths intact; no image or service content was invented.
3. Added Anime.js selector entrance, active-indicator movement, and image crossfade/scale transitions with reduced-motion fallbacks.
4. Added a touch-first mobile accordion equivalent with one service open at a time.

**Verification:** Not run in this phase by request; manual verification is pending.

---

## Milestone — Real Company Image Integration (COMPLETED)

**Status:** ✅ Done (2026-08-09)

**Scope:** Wire the approved real SSCSS photography into the content layer's personnel/team image slots, replacing the reusable/synthetic placeholders per `docs/IMAGE_AUDIT_FINAL.md` REPLACE decisions and `TODO.md`. No AI images added, no business claims changed, no tests run.

1. Copied the ten approved real assets from `Images/` into `public/images/real/` with kebab-case SEO names (guards-team-1/2/3, security-at-entrance, security-rear, housekeeping-1, bodyguard-1/3, event-cfee1924, event-emmr4893).
2. Wired `about.ts` hero + CompanyStory fallback → `sscss-guards-team-1.jpg` (`isPlaceholder: false`).
3. Wired `services.ts` personnel service heroes → `security-guards`, `residential-security`, `housekeeping`, `ex-army-security-guards`, `event-security`.
4. Wired `gallery.ts` team (4), deployments (2), and events (3) tiles to the real assets; kept training/equipment tiles as placeholders (no real assets exist for those categories).
5. Left Home hero, founder portrait, certification documents (request-only), and environment service heroes as placeholders, consistent with the audit rule against mixing synthetic personnel into real-personnel compositions.

**Verification:** `npx tsc --noEmit -p tsconfig.app.json` clean for content-layer changes; project build passes. See `tracker.md` "Real Company Image Integration" milestone for full asset mapping.

**Documentation cleanup (complete):** The integrated real assets are documented in `techspec.md` §19 "Real Company Image Assets" (source→public mapping, usage, and alignment with `docs/IMAGE_AUDIT_FINAL.md` KEEP/EDIT/REPLACE/REMOVE decisions). `TODO.md` step "Update techspec.md §11" is marked complete. This documentation pass changed no source code, layout, route, animation, or content data.

---

## Milestone — Services Visual Upgrade (PHASE 02) (COMPLETED)

**Status:** ✅ Done (2026-08-09)

**Scope:** Elevated only the existing `/services` `ServiceShowcase` selector into a large, premium Apple-product-selection + Linear-case-study + Raycast-card presentation. No redesign, no new routes, no business-logic/content-data changes, no new dependencies, no autoplay/infinite motion.

1. **Selected service visually dominant** — feature image fills a taller `rounded-2xl` stage with a bottom gradient scrim; icon chip + title + concise tagline + Explore CTA overlaid directly on the image (removes the separate text bar, reducing text density).
2. **Grid rebalanced toward the visual** — `lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.35fr)]`.
3. **Subtle metadata / index** — top-right `01 / 13` counter animates on selection (Anime.js, reduced-motion safe); numeric indices added to selector items + mobile accordion.
4. **Restrained transitions (existing Anime.js setup)** — selector hover tint, sliding active indicator, image crossfade/scale, and a 420ms overlay title/content reveal. All `prefers-reduced-motion` guarded.
5. **Real-image/placeholder decision untouched** — five personnel services keep real SSCSS photos; eight environment/other services keep the honest placeholder. No weak real photo forced where it doesn’t fit.
6. **Mobile clean** — single-open accordion retained, now with the same overlay treatment + numeric index and same route CTAs.
7. **Refactor** — `ServiceVisual` placeholder state resets via `key={service.slug}` remounts (removes the lint-flagged `setState`-in-effect); stage counter uses a typed Anime.js `update` callback.

**Files changed:** `src/components/sections/ServiceShowcase.tsx`, `tracker.md` (milestone note), `implementationplan.md` (this note), `TODO.md` (PHASE 02 checklist).

**Verification:** `npx tsc --noEmit -p tsconfig.app.json` clean. No tests/builds run (per instructions).

---

## Milestone — Security Operations Visual System (COMPLETED)

**Status:** ✅ Done (2026-08-09)

**Scope:** Built ONLY the Security Operations visual system for the Home page. A premium, dark, restrained security-operations console in the Linear/Vercel/Raycast visual language. No routes, dependencies, business data, or surrounding Home sections were changed.

**What was built:**
1. Created `src/components/sections/SecurityOperations.tsx` — a reusable, responsive security-operations console.
2. Inserted `<SecurityOperations />` on the Home page after `HomeProcessTimeline` (before Testimonials), leaving all other Home sections unchanged.
3. Console composition: header bar with "Security Operations" + an "Operational" status pill; three compact metrics (Active sites / Personnel / Coverage); stylized SVG site map (subtle district blocks, coverage rings, a patrol route, sequential site points); a site status list (Main gate, North perimeter, Control room, Patrol route); and an "All operations normal" footer status.
4. All numeric values (24 / 128 / 96%) are clearly illustrative UI decoration — a prominent "Illustrative view" caption is attached directly to the console so they can never be read as factual company claims.
5. Animation: Anime.js (existing setup) runs once on viewport entry — patrol route draws once, site points appear sequentially via stagger, status rows reveal in sequence, and metric numbers count up once. No infinite looping (removed any `animate-ping` loop). Full `prefers-reduced-motion` support shows the complete static state when motion is reduced.
6. "Illustrative view" label is visually attached directly to the dashboard footer, not hidden.
7. Responsive: metrics stack on mobile; the map and status list stack vertically on mobile, side-by-side on `sm+`.

**Deliberately NOT changed:** routes, dependencies, business data, real stats, other components.

**Verification:** `npx tsc --noEmit -p tsconfig.app.json` runs clean. No tests or builds run (per instructions).

---

## Milestone — Final Experience Polish (COMPLETED)

**Status:** ✅ Done (2026-08-09)

**Scope:** Consistency and refinement only, applied after the prior visual-upgrade phases. No new layouts, no route/dependency/business-claim changes, no tests run.

1. Removed the per-gallery-tile `BorderTrail` infinite loop from `GalleryGrid.tsx` (design.md §7 forbids constant looping animation). The three hero/featured films (Home, About, ServiceDetail) retain their single slow BorderTrail per techspec §11.
2. Removed the Framer `layout` prop from gallery buttons (unstable inside CSS `columns` masonry).
3. Corrected gallery filter-chip semantics from an invalid `role="tablist"`/`tab`/`aria-selected` group to an `aria-pressed` toggle-button group.
4. Replaced `ClientTrustExperience`'s 30s linear-infinite duplicated-category marquee (inline `<style>` keyframes) with a calm, static, wrapping centered sector chip strip. No auto-motion, no duplicated categories, no inline `<style>`.
5. Enforced the motion hierarchy (MICRO 100–250ms / SMALL 300–500ms / MEDIUM 500–900ms / CINEMATIC 900–1500ms) across the 15 audit axes (motion consistency, timing, hover, mobile, tablet, reduced-motion, image loading, layout stability, route transitions, navigation, CTA visibility, text density, repeated patterns, accessibility, performance).

**Verification:** No tests run (per instructions). No new npm dependencies added.

---

## Milestone — Home Trust Visual Refinement (PHASE 03) (COMPLETED)

**Status:** ✅ Done (2026-08-09)

**Scope:** Refined ONLY the Home `Why Choose SSCSS` / `HomeProofSection` experience. No redesign of the page, no new routes, no business-logic/content-data changes, no new dependencies, no infinite/carousel/bounce animation, no fake statistics/clients/testimonials/certifications. The technical/dashboard visual remains owned by `SecurityOperations`; this section now communicates the **human / operational trust** side.

1. **One dominant visual/proof area** — replaced the generic 3-column card grid with a two-column editorial layout led by ONE real SSCSS photograph (`sscss-guards-team-2.jpg`, `isPlaceholder: false`) in a `rounded-2xl` stage with a bottom gradient scrim and an overlaid "Trained & vetted personnel" badge. Uses the existing `ImageWithSkeleton` + `HeroSkeleton` (reserve layout → skeleton → fade-in, `lazy`/`async`/`low`) — no CLS.
2. **Compact supporting proof points** — the six existing approved claims (15+ years / Structured / Verified / Scalable / Dedicated / Integrated) became a tight, grouped list of compact cards (icon chip + short title + uppercase label + existing compact CSS/SVG visual). Text density reduced; no factual claims changed.
3. **Visual hierarchy** — descriptive copy cut to a short two-line intro; reads as a premium editorial proof surface rather than a generic icon-card grid.
4. **Restrained Anime.js motion (existing setup)** — the dominant photo enters once on viewport entry (opacity + slight rise, 520ms, `out(4)`); proof rows reveal sequentially on a stagger (70ms, 420ms). Hovering/focusing a row subtly highlights its visual (icon chip fills primary + proof visual opacity shift) — no scale/bounce. All `prefers-reduced-motion` guarded to render the complete static state.
5. **Responsive** — stacks on mobile (photo first), proof rows become a 2-col grid on `sm+`, no cramped tablet columns, no horizontal overflow, and the rows are non-interactive informational list items (touch-safe, no hover-dependent interaction).

**Files changed:** `src/components/sections/HomeProofSection.tsx`, `tracker.md` (milestone note), `implementationplan.md` (this note), `TODO.md` (PHASE 03 checklist).

**Verification:** `npx tsc --noEmit -p tsconfig.app.json` clean. No tests/builds run (per instructions).

---

## Milestone — Home Engagement Process Timeline (PHASE 04) (COMPLETED)

**Status:** ✅ Done (2026-08-09)

**Scope:** Refined ONLY the Home `Our Engagement Process` / `HomeProcessTimeline` experience. No redesign, no new routes, no business-logic/content-data changes, no new dependencies, no new imagery, no infinite/carousel/bounce animation, no fake statistics/clients/testimonials/certifications. Does NOT duplicate the SecurityOperations dashboard or HomeProofSection visual language.

1. **Progressive horizontal timeline (desktop)** — replaced the previous static six-column interactive grid with a single horizontal rail (`lg+`) of six step nodes and a restrained `bg-primary` progress line that fills with scroll through the section (journey: enquiry → assessment → deployment → ongoing support). The fill is computed from the section's scroll position and set directly; it does not force step-through.
2. **Clean vertical process (mobile/tablet)** — vertical rail with the same nodes and content, each step revealing as it enters the viewport. No horizontal overflow.
3. **Existing visual identity per step** — each step keeps its exact existing description and existing Lucide icon. Text reduced to step number + title + one-sentence description.
4. **Sequential Anime.js reveal** — heading + steps stagger in once on viewport entry (70ms stagger, 420–520ms, `out(4)`). No looping.
5. **Subtle active-step emphasis** — the step nearest the viewport center gets a primary fill + ring (color shift only).
6. **Reduced motion** — complete static state (all steps visible, progress line set directly).
7. **Accessibility** — semantic `<ol>`/`<li>`, real `<h3>` titles, `aria-labelledby`, decorative rail/nodes `aria-hidden`, no focus trap.

**Files changed:** `src/components/sections/HomeProcessTimeline.tsx`, `tracker.md` (milestone note), `implementationplan.md` (this note), `TODO.md` (PHASE 04 checklist).

**Verification:** `npx tsc --noEmit -p tsconfig.app.json` clean. No tests/builds run (per instructions).

---

## Milestone — Final Homepage Cleanup (COMPLETED)

**Status:** ✅ Done (2026-08-10)

**Scope:** Final homepage cleanup — remove the AI-looking hero illustration, remove dashboard-style sections, remove the generic six-card "Why Choose SSCSS" grid, and fix the Services mega-menu hover interaction. No new visual systems, no new dependencies, no route/business-claim changes, no new animations.

**What was removed:**
1. **Home hero AI-looking shield/grid illustration** — `src/assets/placeholder/hero.svg` is no longer referenced. The hero now uses the real SSCSS photograph `public/images/real/sscss-guards-team-2.jpg` in a premium editorial frame (rounded-2xl, subtle dark gradient, inner hairline ring, shadow-2xl). Hero copy, statistics, and CTAs unchanged.
2. **`SecurityOperations`** — removed from `Home.tsx` (the developer-dashboard map/flow diagram). Component file left unused.
3. **`SecurityIntelligence`** — removed from `Home.tsx` (the second dashboard-style operations panel). Component file left unused.
4. **`HomeProofSection`** — removed from `Home.tsx` (the six-card "Why Choose SSCSS" grid). The approved claims remain wherever they already have meaningful context (About, Services, Industries, Clients pages).

**What was fixed:**
- **Services mega-menu hover gap** — the dropdown was positioned `top-[calc(100%+0.65rem)]` below the trigger, creating a 0.65rem dead zone where the cursor would leave the wrapper and trigger the 120ms close timer. Added an invisible `aria-hidden` hover-bridge `<span>` (`absolute inset-x-0 top-full h-[0.7rem] z-40`) that fills the gap without covering the trigger, and increased the close delay to 220ms. Moving the cursor from "Services" into the dropdown no longer closes it; clicking a service works; moving away closes it naturally; keyboard focus/blur behavior unchanged; mobile Services interaction unchanged.

**Final Homepage structure (intentionally shorter and stronger):**
```
Hero (real SSCSS photo)
↓
Trust ribbon + hotline
↓
TrustStats
↓
Services
↓
Engagement Process
↓
Real SSCSS people (ImageWheel)
↓
Testimonials
↓
Founder
↓
CTA / footer
```

**Files changed:** `src/pages/Home.tsx`, `src/content/hero.ts`, `src/components/sections/Hero.tsx`, `src/components/navigation/DesktopNav.tsx`, `tracker.md` (this note), `implementationplan.md` (this note), `TODO.md` (cleanup checklist).

**Verification:** `npm run build` passes. No new npm dependencies added.

---

## Milestone — Image Wheel Visual Showcase (PHASE 05) (COMPLETED)

**Status:** ✅ Done (2026-08-09)

**Scope:** Added ONE premium cinematic ImageWheel visual section to the Home page — a single visual storytelling moment, NOT a gallery page and NOT another card grid. No redesign of the page, no new routes, no business-logic/content-data changes, no new dependencies, no generated/AI images, no infinite/carousel/bounce/auto-rotate animation, no fake statistics/clients/testimonials/claims. All other sections, Services, Industries, Clients, About, navigation, footer, and content data remain unchanged.

1. **Minimal copy** — eyebrow *"THE PEOPLE BEHIND THE PRESENCE"* + large heading *"Security is built around people."* + one short support line. Very little text; the wheel is the dominant visual.
2. **Composed radial image installation (desktop `sm+`)** — a central dominant real tile (`sscss-guards-team-2.jpg`) with seven overlapping satellite real tiles at varied size/rotation/position/z-index (`bodyguard-1`, `guards-team-1`, `security-at-entrance`, `event-cfee1924`, `guards-team-3`, `security-rear`, `housekeeping-1`). All are the strongest approved SSCSS real photos; no unsuitable image was forced in. A subtle radial primary glow adds depth. Each tile uses the existing `ImageWithSkeleton` + `HeroSkeleton` (reserve layout → skeleton → fade-in, `lazy`/`async`/`low`).
3. **One clearly-marked future-AI placeholder slot** — a dashed-border `primary` tile with a Lucide `ImagePlus` icon and an "Image placeholder" label. No AI image is generated or invented now.
4. **Restrained hover interaction (desktop)** — hover brings a tile slightly forward (`scale` + `-translate-y-1` + raised shadow + `hover:z-40`), brightens the image (`hover:brightness-110`), and reveals its small category label (bottom gradient scrim). The wheel stays visually stable until the user interacts — no auto-rotate/autoplay/endless float/bounce/looping/excessive parallax.
5. **Anime.js one-time entrance** — on viewport entry the tiles stagger once into their final positions (`opacity` + `translateY` + `scale`, 70ms stagger, 520ms, `out(4)`). No looping. `prefers-reduced-motion` renders the complete final static state.
6. **Responsive** — full composed wheel on desktop; smaller overlap on tablet (`sm+`); clean stacked/offset two-column mobile arrangement (`grid-cols-2`, alternating `translate-y-6`) with no horizontal overflow, every image visible, and labels always shown (touch-safe — interaction never depends on hover).
7. **Accessibility** — semantic `<h2>` with `aria-labelledby`, `aria-hidden` on decorative glow/labels, descriptive `alt` on every real image, `role="img"` + `aria-label` on the placeholder slot, keyboard focus ring via global CSS, and reduced-motion honored globally.

**Content honesty:** No fake statistics, testimonials, clients, or security claims were added. The future-AI slot is explicitly labelled "Image placeholder" so it can never be mistaken for a real SSCSS asset.

**Files changed:** `src/components/sections/ImageWheel.tsx` (new), `src/pages/Home.tsx` (placement after `HomeProcessTimeline`), `tracker.md` (milestone note), `implementationplan.md` (this note), `TODO.md` (PHASE 05 checklist).

**Verification:** `npx tsc --noEmit -p tsconfig.app.json` clean. No tests/builds run (per instructions).
