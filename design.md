# Design.md — Visual Language

## 1. Brand positioning (never violate this)

Reliable · Professional · Disciplined · Affordable · Experienced · Responsive · Trustworthy · Enterprise Ready.

**Never** "cheap." **Never** flashy, childish, or cartoonish.

---

# Visual Direction

### Prioritize

* Premium corporate aesthetic over trendy design.
* Strong visual hierarchy with generous whitespace.
* High-end editorial photography.
* Calm, confident layouts that communicate trust.
* Minimal color palette with disciplined use of accent colors.
* Consistent spacing, typography, and component rhythm across the entire site.
* Motion that feels cinematic, intentional, and supports the content rather than distracting from it.

### Avoid

* Generic "agency" or "template" websites.
* Loud gradients, glowing effects, glassmorphism, or excessive shadows.
* Oversized rounded blobs or AI-startup aesthetics.
* Cartoon illustrations, mascots, emojis, or playful visuals.
* Inconsistent spacing, typography, or card styles.
* Motion for the sake of motion.
* Anything that reduces the perception of professionalism or enterprise credibility.

## 2. Reference bar

The site should read closer to:

* **Mercedes** — photography, branding, confidence, premium presentation.
* **Stripe** and **Linear** — layout, typography, whitespace, UI systems, and interaction design.

That means restraint, whitespace, confident typography, purposeful motion, and enterprise-level polish—not the typical local security agency website.

## 3. Color system

| Token                               | Role                                           | Suggested value                                      |
| ----------------------------------- | ---------------------------------------------- | ---------------------------------------------------- |
| `--color-primary` (Deep Red)        | Primary brand color, CTAs, key accents         | `#8B1E1E`                                            |
| `--color-primary-700`               | Richer corporate red for hover/deeper emphasis | **TBD after logo review**                            |
| `--color-ink` (Black)               | Primary text, dark sections                    | `#0A0A0A`                                            |
| `--color-surface` (White)           | Base background                                | `#FFFFFF`                                            |
| `--color-muted` (Very Light Grey)   | Section alternation, cards, borders            | `#F5F5F4`                                            |
| `--color-success` / `--color-error` | Form states                                    | Standard accessible green/red, kept subtle, not neon |

Rules:

* Deep red is an **accent**, not a wash—use it for CTAs, key numerals/stats, active nav states, and subtle section accents.
* Large surfaces should remain white, black, or light grey.
* No gradients beyond extremely subtle overlays used for readability (such as a dark hero image overlay).
* Verify contrast: white on deep red, deep red on white, black on light grey—all combinations must satisfy WCAG AA.

## 4. Typography

* Use **one** modern corporate sans-serif.
* Preferred shortlist:

  * Inter
  * Manrope
  * Geist
  * IBM Plex Sans
* **Do not use Poppins.**
* Strong heading hierarchy with a consistent modular scale (roughly 1.25–1.333).
* Comfortable body line-height (1.5–1.6).
* Tighter display heading line-height (1.1–1.2).
* Avoid using more than two font weights within a single screen.

## 5. Spacing & layout

* Generous whitespace—this is one of the primary trust signals.
* Use a consistent spacing system (sm / md / lg / xl) across every section.
* Text-heavy layouts should remain within approximately 1200–1280px.
* Full-width layouts should only be used where imagery benefits from it.
* Prefer balanced grid layouts with consistent gutters and alignment.

## 6. Components

* Base primitives from shadcn/ui, themed to the design token system (avoid the default slate/zinc styling).
* Buttons:

  * Primary: deep red fill, white text.
  * Secondary: outline/ghost.
  * On-dark: white variant for hero and dark backgrounds.
* Cards:

  * White or light grey.
  * Subtle border **or** subtle shadow—not both heavily.
  * Consistent corner radius throughout the project.
* Icons:

  * Lucide only.
  * Consistent stroke width.
  * Fixed sizing within each UI context.

## 7. Motion (Framer Motion + Lenis)

Motion should feel **premium, cinematic, and intentional**.

Every animation must reinforce hierarchy, guide attention, or improve perceived quality. If it doesn't serve one of those goals, remove it.

### Hero

* Cinematic hero reveal with elegant sequencing.
* Background imagery, headline, supporting copy, and CTA should enter with carefully timed staggered motion.
* Motion should feel confident and refined rather than fast or attention-seeking.

### Page Motion

* Subtle fade and upward movement as sections enter the viewport.
* Consistent timing (roughly 300–500ms) and easing throughout the site.
* Maintain a unified animation language across all pages.

### Hover States

* Gentle elevation, subtle shadow changes, or restrained scale.
* Underline or color transitions for interactive text.
* Keep feedback responsive without drawing unnecessary attention.

### Parallax

* Use sparingly.
* Limited primarily to hero imagery or large visual elements.
* Never apply parallax to body copy or content that affects readability.

### Statistics

* Animate counters once when they first enter the viewport.
* Examples:

  * 15+
  * 100+
  * 50+

### Accessibility

* Respect `prefers-reduced-motion`.
* Provide a complete static experience when motion is disabled.

### Never Use

* Spinning elements.
* Bouncing animations.
* Flashing effects.
* Overshooting springs.
* Gimmicky micro-interactions.
* Constant looping animations.
* Motion that distracts from the content.

## 8. Imagery

* Prioritize real company photography whenever available.
* Until then, use only premium, realistic stock photography.
* Never use AI-generated-looking imagery.
* Prefer authentic environments such as corporate offices, industrial facilities, gated communities, and commercial properties.
* Maintain a consistent visual treatment across placeholder imagery.
* Clearly tag every placeholder in code so replacement with real assets requires minimal changes.

## 9. What to avoid (explicit)

* Generic AI-startup layouts.
* Oversized rounded gradient blobs.
* Excessive use of deep red.
* Cartoon icons or playful illustrations.
* Emoji as UI elements.
* Dense or cluttered layouts.
* Inconsistent spacing or typography.
* Visual noise that reduces the premium enterprise feel.