# Rules.md — How to Work on This Project

These rules override "just do it all now" instincts. They exist because this is a vibe-coded project built prompt by prompt, and a messy big-bang generation is harder to fix than a slow correct one.

## 1. Phase discipline

* Work strictly through the phases defined in `implementationplan.md`, in order.
* **Never** attempt to build the complete website in a single response or session.
* Before writing code for a new phase, re-read `tracker.md` to confirm the previous phase is actually marked done.
* Do not start Phase N+1 work inside a Phase N prompt, even if it feels efficient.

## 2. One objective per prompt

* Each prompt/response should have **one clear objective** (e.g. "build the Hero section," not "build Hero + Services grid + Footer").
* Complex areas (animations, a service page, SEO metadata, form validation, responsiveness, accessibility) are each their own prompt — don't bundle them.
* Leave the codebase in a clean, working, runnable state at the end of every prompt. Never commit a half-wired component.

## 3. Design consistency

* Consult `design.md` before styling anything. Don't invent new colors, spacing scales, or type styles on the fly.
* Every page must feel like it belongs to the same premium brand — same buttons, same card style, same motion language.
* Prefer well-established open-source component patterns (shadcn/ui, Aceternity UI, Magic UI, 21st.dev) adapted to brand colors over self-generated generic layouts.
* No flashy, childish, or cartoonish UI. No default-looking "AI generated" layouts (centered hero + 3 generic cards + gradient blob, etc. — study the reference brands in `design.md` instead).

## 4. Component sourcing

Before building any custom component, check the following sources in order:

1. shadcn/ui
2. Magic UI
3. Aceternity UI
4. 21st.dev

If a high-quality component already exists, adapt it to the SSCSS design system instead of reinventing it. Build custom components only when none of these sources provide a suitable foundation.

## 5. Content honesty

* Where real content (photos, certificates, testimonials, client logos) doesn't exist yet, use clearly-structured placeholders per the conventions in `schema.md` — never invent fake specific claims (fake client names, fake numbers beyond the confirmed 15+/100+/50+ stats).
* Never fabricate certifications (PSARA, GST, PF, ESI) — placeholder these as "pending upload," don't render fake certificate numbers.

## 6. Every service page is a landing page

* Each of the 13 services gets its own full landing page with: Hero, Overview, Industries Served, Benefits, Process, Why Choose Us, FAQs, Inquiry CTA, and Related Services (per `appflow.md`).
* **Never copy text between service pages or simply replace the service name.** Every page should address that service's unique client pain points, industries served, benefits, process details, FAQs, and positioning. Each landing page must stand on its own as genuinely useful content for both visitors and search engines.

## 7. Forms & leads

* Inquiry form uses Formspree (see `techspec.md`). Never wire a fake/non-functional submit handler — if Formspree isn't configured yet, clearly stub it with a TODO and a console log, don't silently swallow submissions.

## 8. Performance & SEO are not optional polish

* Every page ships with proper metadata, semantic HTML, and image optimization from the start — not bolted on at the end. Target Lighthouse 95+ across Performance/Accessibility/SEO/Best Practices (see `techspec.md`).

## 9. Tracker updates

* After completing any milestone, update `tracker.md`: mark the item done, note any deviations, note what's next.
* If you discover the plan needs to change (e.g. a phase should be split further), update `implementationplan.md` and note why in `tracker.md` — don't silently deviate.

## 10. When in doubt, ask

* If a requirement is ambiguous (copy, exact wording, a specific number, a legal claim), stop and ask rather than guessing — especially for anything a client/prospect would read as a factual claim about the company.
