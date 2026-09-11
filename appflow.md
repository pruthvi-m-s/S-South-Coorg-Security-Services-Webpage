# App Flow — SSCSS Website

## 1. Sitemap

```
/                          Home
/about                     About
/compliance                Compliance & documentation
/services                  Services hub (grid of all 13, links out)
/services/:slug            Individual service landing page (×13)
/industries                Industries served
/clients                   Clients
/gallery                   Gallery
/faqs                      FAQs
/contact                   Contact
/thank-you                 Post-submit confirmation (not in nav)
```

### Service slugs

`security-guards`, `corporate-security`, `industrial-security`, `residential-security`, `housekeeping`, `front-office-management`, `skilled-labour`, `unskilled-labour`, `corporate-staffing`, `ex-army-security-guards`, `event-security`, `background-verification`, `private-detective-services`

## 2. Primary navigation

**Header:** Logo | Home · About · Services (dropdown/mega-menu listing all 13) · Industries · Clients · Gallery · FAQs · Contact | Phone CTA (always visible) | "Get Quote" button (always visible, primary color)

**Footer:** Sitemap links grouped (including Compliance), certification badge, address + GBP map link, phone/WhatsApp/email, social links (if any), copyright.

**Mobile:** Hamburger → full-screen navigation; phone CTA and "Get Quote" button remain pinned/sticky.

## 3. Page-by-page flow

### Home

Hero (value proposition + hero image + Phone CTA + Get Quote CTA) → Services overview (grid linking to all 13) → Industries Served → Stats (15+ Years / 100+ Guards / 50+ Clients, animated counters) → Clients → Final CTA band → Footer.

### Service page (template, per slug)

Hero (service name + one-line value proposition + Get Quote CTA) → Overview → Industries Served (filtered/relevant subset) → Benefits → Process (how engagement works, six-step engagement process) → Inquiry CTA (form pre-tagged with this service) → Related Services (2–3 links).

### About

Company story (2008–present) → **Why Choose Us** → **Certifications & Registrations** → **Company History** → **Our Process** (six-step engagement process).

#### Process (About page)

1. Requirement Discussion
2. Site Assessment
3. Proposal Submission
4. Client Approval
5. Deployment
6. Ongoing Support

### Industries

Grid of industries served (Apartment Associations, Factories, Warehouses, IT Companies, Corporate Offices, Hospitals, Schools, Hotels, Commercial Buildings, Business Parks, Construction Sites, Government Institutions) → each links to the most relevant service(s).

### Contact

Contact details (phone, WhatsApp, email, address) → Google Business Profile map embed → Inquiry form (general, service field optional/"Not sure yet") → Office hours.

## 4. Lead flow

```
Visitor
  ↓
Chooses a service (via navigation, Home, or Industries)
  ↓
Reads service page details
  ↓
Clicks "Get Quote"
  ↓
Fills Inquiry Form (name, phone, email, organization, service, message)
  ↓
Client-side validation (Zod) → Formspree submission
  ↓
Confirmation shown (inline + optional redirect to /thank-you)
  ↓
Formspree → Email notification to sales inbox
  ↓
Manual WhatsApp follow-up by sales team
  ↓
Sales team calls prospect
```

Parallel path at every stage: direct `tel:` and WhatsApp click-to-chat CTAs for visitors who prefer calling or messaging instead of submitting the inquiry form.

## 5. Primary user journey

```
Visitor lands on the website
  ↓
Explores Services or arrives on a service page
  ↓
Reviews service details and benefits
  ↓
Builds trust through About, Clients, and Certifications
  ↓
Clicks "Get Quote"
  ↓
Submits inquiry or contacts directly via Phone/WhatsApp
  ↓
Sales team follows up and begins onboarding
```
