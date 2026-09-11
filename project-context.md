# Project Context — SSCSS Website

> **Read this file first, every session.** It tells you what this project is, where to find things, and what order to read them in.

## What this project is

A premium, lead-generation website for **S South Coorg Security Services (SSCSS)** — a Bengaluru-based private security & manpower company, 15+ years in business, 100+ guards, 50+ clients. The site is **not e-commerce**. Its only job is to make the company look enterprise-grade (think Mercedes/Apple/Stripe/Linear/Notion/IBM, not "local security agency") and convert visitors into inquiries.

Frontend-heavy, near-zero custom backend. React + Vite + Tailwind + shadcn/ui, form submissions via Formspree.

## Document map — read in this order

| # | File | Purpose |
|---|------|---------|
| 1 | `rules.md` | **Non-negotiable working rules.** How you (the AI) are allowed to work — phase gating, one-objective-per-prompt, no big-bang generation. Read before writing any code. |
| 2 | `tracker.md` | **Current state of the project.** What phase we're in, what's done, what's next. Read this to know where to resume. You update this file after every meaningful step. |
| 3 | `prd.md` | What we're building and why. Features, audience, success criteria, scope boundaries. |
| 4 | `appflow.md` | Sitemap, navigation, page-by-page user flow, lead flow. |
| 5 | `design.md` | Visual language — colors, type, spacing, motion, imagery rules. Consult before building/styling any component. |
| 6 | `schema.md` | Data shapes — TypeScript interfaces/content structure for services, testimonials, industries, form payloads, etc. No database; content is static/local. |
| 7 | `techspec.md` | Stack, architecture, folder structure, SEO/schema.org approach, performance budget, form-handling integration. |
| 8 | `implementationplan.md` | The phased roadmap, broken into small prompts/milestones. This is the plan; `tracker.md` is the live status against it. |

## Golden rules (expanded in rules.md)

1. Never build the whole site in one shot. One phase, one objective, one clean working state at a time.
2. Always check `design.md` before touching UI/styling.
3. Always update `tracker.md` after finishing a milestone.
4. Never invent generic/ugly AI layouts — prefer well-established shadcn/Aceternity/Magic UI patterns, adapted to the brand.
5. Placeholder content only where real content doesn't exist yet — mark it clearly (see `schema.md` content conventions) so it's easy to swap later.

## Quick facts

- **Brand:** S South Coorg Security Services (SSCSS)
- **Est.:** 2008 · 15+ years · 100+ guards · 50+ clients
- **Primary service area:** South Bengaluru (secondary: all of Bengaluru on request)
- **Positioning:** Reliable, Professional, Disciplined, Affordable (never "cheap"), Experienced, Responsive, Trustworthy, Enterprise Ready
- **Lead capture:** Formspree (free tier) — see `techspec.md` for setup
- **Content status:** Placeholder/stock content for now; real photos, certs, testimonials to be swapped in later (owner-confirmed)
