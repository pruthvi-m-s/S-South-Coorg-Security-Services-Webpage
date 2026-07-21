# PRD — S South Coorg Security Services (SSCSS) Website

## 1. Summary

A premium, trust-first marketing website for SSCSS, a Bengaluru private security & manpower company (est. 2008). The site's sole function is lead generation for B2B/institutional security services — it is not a store, not a portal, and does not need user accounts.

## 2. Problem statement

SSCSS has 15+ years of operating history, 100+ guards, and 50+ clients, but no digital presence that reflects that credibility. Prospective clients (facility managers, HR/admin heads, apartment association committees) judge vendor legitimacy partly on how professional their website looks. A weak or generic-looking site actively costs enterprise-grade leads.

## 3. Goals

* Generate qualified inquiries from apartment associations, corporates, industrial/warehouse operators, hospitals, schools, hotels, and government institutions.
* Build immediate trust through design quality, real credentials, and clear service depth.
* Establish local SEO authority for "security services / security guards / industrial security [+ Bengaluru]" type queries.
* Give the sales team a clean, low-maintenance lead pipeline (form → email/CRM notification → WhatsApp/call follow-up).

## 4. Non-goals

* No online payments, checkout, or e-commerce of any kind.
* No client login/portal, guard scheduling, or attendance systems (future consideration only).
* No blog/CMS requirement at launch (structure should not block adding one later).
* No native mobile app.

## 5. Target audience

**Primary:** Apartment associations, factories, warehouses, IT companies, corporate offices, hospitals, schools, hotels, commercial buildings, business parks, construction sites, government institutions.

**Secondary:** Any organization needing dependable manpower solutions.

**Geography:** South Bengaluru primary; all of Bengaluru secondary/on request.

## 6. Core features

### 6.1 Site sections

Home, About, Services (hub) + 13 individual service pages, Industries, Clients, Gallery, FAQs, Contact.

The **About** page consolidates key trust-building content through dedicated subsections:

* Why Choose Us
* Certifications
* Company History
* Process

Rather than existing as separate pages, these sections form a single, comprehensive company profile.

### 6.2 The 12 service pages (each a full landing page)

1. Security Guards
2. Corporate Security
3. Industrial Security
4. Residential Security
5. Housekeeping
6. Front Office Management
7. Skilled Labour
8. Unskilled Labour
9. Corporate Staffing
10. Ex-Army Security Guards
11. Event Security
12. Background Verification
13. Private Detective Services

*(Yes, 13 items are listed under "12 Core Services" in the source brief — treat all 13 as required pages; flag this discrepancy back to the client if it matters for nav grouping.)*

Each service page requires: Hero, Overview, Industries Served, Benefits, Process, Why Choose Us, FAQs, Inquiry CTA, Related Services.

### 6.3 Lead capture

Single reusable inquiry form (service-aware — pre-fills/tags which service page it was submitted from), routed via Formspree to email, with a WhatsApp/phone CTA as an always-available parallel channel. See `techspec.md` for integration details and `appflow.md` for the full lead flow.

### 6.4 Trust elements

Stats (15+ Years / 100+ Guards / 50+ Clients), certifications section (GST, PSARA, PF, ESI — placeholder until documents supplied), client logos (only once permission is confirmed), real photography (placeholder/stock until real photos supplied), and company history.

The About page serves as the primary destination for communicating trust, credentials, experience, and the company's engagement process.

## 7. Success metrics

* Lighthouse: 95+ on Performance, Accessibility, SEO, Best Practices (all key pages).
* Every one of the 13 service pages live, unique, and indexable (not thin/duplicate content).
* Inquiry form successfully delivers a test submission end-to-end before launch.
* Site ranks/appears for local SEO targets listed in `techspec.md` within a reasonable post-launch window (directional, not a hard launch gate).

## 8. Assumptions & open items

* Real photos, certificates, testimonials, and client logos will be supplied after initial build; site ships with clearly-structured placeholders (see `schema.md`).
* No backend/database is required at launch — all service/content data is static (local JSON/TS, not a CMS) unless this PRD is revised.
* Formspree (or equivalent free-tier form service) is the launch lead-capture method; can be swapped for a serverless function or CRM integration later without changing the frontend contract (see `techspec.md`).
