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

## Phase 1 — Design system & core components

1.1 Build themed shadcn primitives: Button (3 variants), Input/Textarea/Select, Card, Accordion, Badge.
1.2 Build `SectionContainer` + spacing/rhythm primitives.
1.3 Build `AnimatedCounter` with `prefers-reduced-motion` support.
1.4 Build reusable `Seo` component.
1.5 Build reusable `CTAButtons` block.

**Exit criteria:** style-guide/demo route showing all components themed correctly.

---

## Phase 2 — Navigation & layout polish

2.1 Full Header with services dropdown, sticky behavior, phone + Get Quote CTA.
2.2 Mobile navigation (hamburger, full-screen menu).
2.3 Full Footer.
2.4 Floating WhatsApp Button.
2.5 Sticky Mobile Call Button.
2.6 Back-to-Top Button.
2.7 Page transitions + Lenis smooth scrolling.

**Exit criteria:** navigating the site feels premium, polished and consistent.

---

## Phase 3 — Content data layer

3.1 Author `services.ts` (all 13 services).
3.2 Author industries, testimonials, clients, certifications, stats and FAQs content.

**Exit criteria:** all content typed and importable.

---

## Phase 4 — Core pages

4.1 Home.
4.2 About (Company History, Why Choose Us, Certifications, Process).
4.3 Industries.
4.4 Clients.
4.5 Gallery.
4.6 FAQs.
4.7 Contact.

**Exit criteria:** every non-service page completed using the design system and content layer.

---

## Phase 5 — Service page template & 13 service pages

5.1 Build `ServicePageTemplate`.
5.2 Dynamic routing + Services hub.
5.3 QA against 2–3 services.
5.4 Verify all 13 service pages.

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
