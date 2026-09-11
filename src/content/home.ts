// ============================================================
// SSCSS — Home Page Narrative Content
// Problem-led story: Pain → Solution → Services → Industries
// → FAQ. All copy kept in the content layer per architecture.
// ============================================================

export const HOME = {
  // ─── Pain — the problem ─────────────────────────────────────
  pain: {
    eyebrow: "The problem",
    title: "Security should not become another problem to manage.",
    items: [
      {
        number: "01",
        title: "Absent or unreliable guards",
        text: "One missed shift should not leave your team scrambling to cover the gate.",
      },
      {
        number: "02",
        title: "Weak supervision",
        text: "Deployment alone is not enough. Someone needs to remain accountable for standards and discipline.",
      },
      {
        number: "03",
        title: "Poor access control",
        text: "Visitor, vendor and material movement need clear procedures that fit the site.",
      },
      {
        number: "04",
        title: "Too many vendors",
        text: "Security, manpower and facility support become harder to manage when accountability is fragmented.",
      },
    ],
    cta: {
      label: "See how we solve this",
      href: "#home-solution",
    },
  },

  // ─── Solution — the SSCSS approach ──────────────────────────
  solution: {
    eyebrow: "The SSCSS approach",
    title:
      "One accountable partner for the people and processes behind your site.",
    items: [
      {
        title: "Understand the site",
        text: "We start with your property, operating hours, access points, staffing requirements and practical constraints.",
      },
      {
        title: "Build the right deployment",
        text: "The service mix is shaped around the requirement rather than forcing every client into the same staffing model.",
      },
      {
        title: "Maintain standards",
        text: "Verification, training, supervision and reporting form part of the operational picture — not just the initial deployment.",
      },
      {
        title: "Stay accountable",
        text: "Your team should know who to contact, what happens next and how issues are handled.",
      },
    ],
    cta: {
      label: "Discuss your requirement",
      href: "/contact#contact-form",
    },
  },

  // ─── Services — grouped preview ─────────────────────────────
  services: {
    eyebrow: "How we can help",
    title: "Four practical service areas. One accountable partner.",
    subtitle:
      "Pick the area that matches your requirement — each group links through to the specific services that fit your site.",
  },

  // ─── Industries — sector fit ────────────────────────────────
  industries: {
    eyebrow: "Sector expertise",
    title: "Deployments shaped around how each sector operates.",
    subtitle:
      "From apartment associations and tech parks to schools and construction sites — security and staffing adapted to the way your environment runs day to day.",
  },

  // ─── Proof — not promises ───────────────────────────────────
  proof: {
    eyebrow: "Proof, not promises",
    title: "A security partner should be able to show how it works.",
    stats: [
      {
        value: "2008",
        text: "SSCSS company operations began in Bengaluru.",
      },
      {
        value: "100+",
        text: "Trained personnel represented in the current business information.",
      },
      {
        value: "50+",
        text: "Clients represented across the current company profile.",
      },
    ],
  },

  // ─── FAQ preview ────────────────────────────────────────────
  faq: {
    eyebrow: "Common questions",
    title: "Before you engage a service partner.",
    subtitle:
      "Straight answers to the practical questions buyers usually have before deployment.",
    cta: {
      label: "Talk to our team",
      href: "/contact#contact-form",
    },
  },
} as const;