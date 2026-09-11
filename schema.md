# Schema.md — Content & Data Shapes

No database. All content is static, typed, and lives in `src/content/`. This file defines the shape of that content and the form payload contract with Formspree.

## 1. Service

```ts
interface Service {
  slug: string;                 // "industrial-security"
  name: string;                 // "Industrial Security"
  shortTagline: string;         // one-liner for cards/nav
  heroImage: ImageRef;
  overview: string;             // 2-4 paragraphs
  industriesServed: string[];   // industry slugs/names relevant to this service
  benefits: { title: string; description: string; icon: string }[];
  process: { step: number; title: string; description: string }[];
  whyChooseUs: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];    // 2-3 other service slugs
  seo: SeoMeta;
}
```

## 2. Industry

```ts
interface Industry {
  slug: string;
  name: string;                 // "Apartment Associations"
  icon: string;
  description: string;
  relevantServiceSlugs: string[];
}
```

## 3. Testimonial

```ts
interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole?: string;
  organization?: string;
  isPlaceholder: boolean;       // true until real testimonial supplied
}
```

## 4. Client (logo)

```ts
interface Client {
  id: string;
  name: string;
  logo: ImageRef;
  permissionConfirmed: boolean; // must be true before logo is rendered publicly
}
```

## 5. Certification / registration

```ts
interface Certification {
  id: string;
  type: "GST" | "PSARA" | "PF" | "ESI" | "Award" | "Other";
  label: string;
  documentImage?: ImageRef;     // absent while pending upload
  status: "verified" | "pending-upload";
}
```

## 6. Stat (Home page counters)

```ts
interface Stat {
  id: string;
  value: number;                // 15, 100, 50
  suffix: string;               // "+ Years", "+ Guards", "+ Clients"
  label: string;
}
```

## 7. FAQ (site-wide, distinct from per-service FAQs)

```ts
interface Faq {
  id: string;
  category: string;             // e.g. "General", "Coverage"
  question: string;
  answer: string;
}
```

## 8. About page content

```ts
interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface CompanyHistoryEntry {
  year: string;
  title: string;
  description: string;
}

interface WhyChooseUsItem {
  title: string;
  description: string;
}
```

These lightweight types power the About page's **Process**, **Company History**, and **Why Choose Us** subsections while reusing the same content patterns used elsewhere.

## 9. Image reference & placeholder convention

```ts
interface ImageRef {
  src: string;
  alt: string;
  isPlaceholder: boolean;       // true = stock/placeholder, false = real company asset
  credit?: string;              // stock source attribution if required by license
}
```

Convention: every placeholder asset lives under `src/assets/placeholder/`, every real asset under `src/assets/real/`. `isPlaceholder` must match the folder it's sourced from — this is what makes future swap-out mechanical rather than a redesign.

## 10. SEO meta (reused per page)

```ts
interface SeoMeta {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: ImageRef;
  schemaType: "LocalBusiness" | "Service" | "FAQPage" | "WebPage";
}
```

## 11. Inquiry form payload (Formspree contract)

```ts
interface InquiryFormPayload {
  name: string;
  phone: string;                // required, validated format
  email: string;                // required, validated format
  organizationName?: string;
  organizationType?: string;    // e.g. "Apartment Association", "Corporate", etc.
  serviceInterested: string;    // service slug, or "not-sure" from general Contact form
  message?: string;
  sourcePage: string;           // path the form was submitted from, for attribution
}
```

Validation (Zod, enforced client-side per `techspec.md`):

* `name`: required, min 2 chars.
* `phone`: required, Indian phone format check.
* `email`: required, valid email format.
* `serviceInterested`: required (defaults to `"not-sure"` on general Contact form).
* All other fields optional but sanitized (trim, max length).

## 12. Content status convention

Every content file's records should default `isPlaceholder`/`status: "pending-upload"` fields to placeholder state at launch, per `prd.md` assumptions. Do not hardcode fabricated specifics (exact certificate numbers, exact client names, invented quotes) — leave those fields structurally present but empty/placeholder until supplied by the client.

**Note:** No schema is required for small stateless UI components (e.g. floating WhatsApp button, sticky mobile CTA, quick-call button). These remain presentational components without associated content models.

## 13. Compliance page content

```ts
interface CompliancePageContent {
  seo: SeoMeta;
  hero: { title: string; subtitle: string };
  introduction: { title: string; description: string };
  certificationDetails: Partial<Record<Certification["type"], { title: string; description: string }>>;
  statusLabels: { verified: string; pending: string };
  psaraBadge: { verified: string; pending: string };
}
```

The compliance page, `ComplianceSection`, and `PSARABadge` must read certification status and document images from the single `Certification[]` source. This page-level shape may provide explanatory copy and state labels, but must not duplicate certification records, registration numbers, or document data.
