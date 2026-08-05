// ============================================================
// SSCSS — Services Content
// All 14 services. Each is a full landing page's worth of data.
// Placeholder status is indicated by isPlaceholder in ImageRef.
// ============================================================

import type { Service } from "../types";

const placeholderImage = (name: string): string => `/images/services/${name}.jpg`;

export const SERVICES: Service[] = [
  {
    slug: "security-guards",
    name: "Security Guards",
    shortTagline:
      "Trained, disciplined security personnel for your premises.",
    icon: "Shield",
    heroImage: {
      src: placeholderImage("security-guards"),
      alt: "SSCSS security guard on duty",
      isPlaceholder: true,
    },
    overview:
      "SSCSS provides highly trained, verified, and disciplined security guards for commercial, residential, and industrial properties. Our guards undergo rigorous background checks, physical fitness tests, and ongoing training to ensure they meet the highest standards of professionalism and reliability. Whether you need a single guard for a small office or a full team for a large facility, we tailor our deployment to your specific security requirements.",
    industriesServed: [
      "apartment-associations",
      "corporate-offices",
      "commercial-buildings",
      "business-parks",
      "hospitals",
      "hotels",
      "construction-sites",
    ],
    benefits: [
      {
        title: "Rigorous Vetting",
        description:
          "Every guard is background-verified, trained, and insured.",
        icon: "ShieldCheck",
      },
      {
        title: "Custom Deployment",
        description:
          "We match guard profiles to your specific site and shift requirements.",
        icon: "Users",
      },
      {
        title: "24/7 Supervision",
        description:
          "Supervisory patrols and reporting ensure consistent service quality.",
        icon: "Clock",
      },
      {
        title: "Quick Replacement",
        description:
          "Absentee guards are replaced within hours, never leaving your site exposed.",
        icon: "RefreshCw",
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirement Discussion",
        description:
          "We discuss your property type, headcount needs, shift timing, and any special requirements.",
      },
      {
        step: 2,
        title: "Site Assessment",
        description:
          "Our team visits your premises to assess entry points, vulnerable areas, and security infrastructure.",
      },
      {
        step: 3,
        title: "Proposal Submission",
        description:
          "We provide a detailed service proposal including guard profiles, shifts, pricing, and reporting structure.",
      },
      {
        step: 4,
        title: "Client Approval",
        description:
          "You review and approve the proposal. We finalize the deployment schedule.",
      },
      {
        step: 5,
        title: "Deployment",
        description:
          "Trained guards are deployed with proper uniforms, equipment, and post orders.",
      },
      {
        step: 6,
        title: "Ongoing Support",
        description:
          "Regular supervisory visits, incident reporting, and 24/7 coordination ensure quality.",
      },
    ],
    whyChooseUs: [
      {
        title: "15+ Years of Experience",
        description:
          "We've been protecting Bengaluru properties since 2008 — we know the local security landscape.",
      },
      {
        title: "100+ Trained Guards",
        description:
          "Our team includes ex-servicemen, licensed guards, and specially trained personnel.",
      },
      {
        title: "50+ Happy Clients",
        description:
          "From apartments to corporates, our clients trust us with their safety.",
      },
      {
        title: "Enterprise-Grade Processes",
        description:
          "Structured reporting, supervisory checks, and responsive management set us apart.",
      },
    ],
    faqs: [
      {
        question: "Are your guards licensed and insured?",
        answer:
          "Yes, all our guards are licensed under applicable state regulations and covered by comprehensive insurance.",
      },
      {
        question: "What is the minimum contract period?",
        answer:
          "We offer flexible engagement terms. Minimum contract periods are discussed during the proposal stage based on your needs.",
      },
      {
        question: "Can you deploy guards on short notice?",
        answer:
          "Yes, we maintain a standby pool for urgent requirements. Deployment can happen within 24–48 hours in most cases.",
      },
      {
        question: "How do you handle guard absenteeism?",
        answer:
          "We have a replacement policy that ensures an alternate guard is deployed within hours of any absence.",
      },
    ],
    relatedServices: [
      "corporate-security",
      "industrial-security",
      "residential-security",
    ],
    seo: {
      title:
        "Security Guards in Bengaluru | SSCSS",
      description:
        "SSCSS provides trained, verified security guards for apartments, corporates, industries & more in South Bengaluru. 15+ years of trusted service.",
      canonicalPath: "/services/security-guards",
      schemaType: "Service",
    },
  },
  {
    slug: "corporate-security",
    name: "Corporate Security",
    shortTagline:
      "Professional security management for corporate offices and IT parks.",
    icon: "Building2",
    heroImage: {
      src: placeholderImage("corporate-security"),
      alt: "Corporate security team at work",
      isPlaceholder: true,
    },
    overview:
      "SSCSS offers comprehensive corporate security solutions for IT companies, corporate offices, and business parks. Our corporate security personnel are trained in access control, visitor management, emergency response, and professional reception duties. We understand the unique security challenges of modern corporate environments and provide guards who present a professional image while maintaining vigilant security.",
    industriesServed: [
      "it-companies",
      "corporate-offices",
      "business-parks",
    ],
    benefits: [
      {
        title: "Professional Presentation",
        description:
          "Corporate-trained guards with excellent communication and customer service skills.",
        icon: "Briefcase",
      },
      {
        title: "Access Control",
        description:
          "Managing visitor logs, ID checks, and entry protocols seamlessly.",
        icon: "DoorOpen",
      },
      {
        title: "Emergency Response",
        description:
          "Trained in fire safety, evacuation procedures, and incident management.",
        icon: "AlertTriangle",
      },
      {
        title: "Technology Integration",
        description:
          "Works alongside your existing security systems — CCTV, biometrics, and alarms.",
        icon: "Monitor",
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirement Discussion",
        description:
          "We assess your corporate facility's size, headcount, visitor flow, and security protocols.",
      },
      {
        step: 2,
        title: "Site Assessment",
        description:
          "Our team evaluates entry points, parking, lobby areas, and emergency exits.",
      },
      {
        step: 3,
        title: "Proposal Submission",
        description:
          "We present a tailored security plan with guard profiles, shifts, and reporting structure.",
      },
      {
        step: 4,
        title: "Client Approval",
        description:
          "You approve the proposal and we finalize deployment details.",
      },
      {
        step: 5,
        title: "Deployment",
        description:
          "Professional guards deployed with post orders, uniforms, and equipment.",
      },
      {
        step: 6,
        title: "Ongoing Support",
        description:
          "Regular performance reviews, incident reports, and 24/7 management support.",
      },
    ],
    whyChooseUs: [
      {
        title: "Corporate-Ready Personnel",
        description:
          "Our guards are trained for professional corporate environments with strong communication skills.",
      },
      {
        title: "Proven Track Record",
        description:
          "We serve multiple corporate clients across Bengaluru's prime business districts.",
      },
      {
        title: "Responsive Management",
        description:
          "Dedicated account manager for each corporate client with weekly reporting.",
      },
    ],
    faqs: [
      {
        question: "Do your guards handle front desk duties?",
        answer:
          "Yes, our corporate security personnel are trained to manage reception, visitor coordination, and access control alongside their security duties.",
      },
      {
        question: "Can you integrate with our existing security systems?",
        answer:
          "Absolutely. We work with your existing CCTV, access control, and alarm systems to provide seamless security coverage.",
      },
    ],
    relatedServices: [
      "security-guards",
      "industrial-security",
      "front-office-management",
    ],
    seo: {
      title:
        "Corporate Security in Bengaluru | SSCSS",
      description:
        "Professional corporate security for IT companies, offices & business parks in South Bengaluru. Trained guards, access control & emergency response.",
      canonicalPath: "/services/corporate-security",
      schemaType: "Service",
    },
  },
  {
    slug: "industrial-security",
    name: "Industrial Security",
    shortTagline:
      "Robust security solutions for factories, warehouses, and industrial facilities.",
    icon: "Factory",
    heroImage: {
      src: placeholderImage("industrial-security"),
      alt: "Industrial security personnel",
      isPlaceholder: true,
    },
    overview:
      "SSCSS provides specialized industrial security services for factories, warehouses, manufacturing plants, and logistics hubs. Our industrial security personnel are trained in perimeter control, material movement monitoring, fire safety, and handling large-scale access management. We understand the critical nature of industrial assets and provide round-the-clock vigilance.",
    industriesServed: [
      "factories",
      "warehouses",
      "construction-sites",
    ],
    benefits: [
      {
        title: "Perimeter Security",
        description:
          "Guards trained in monitoring large perimeters and controlling entry points.",
        icon: "Fence",
      },
      {
        title: "Material Movement Monitoring",
        description:
          "Supervision of goods inward/outward to prevent theft and losses.",
        icon: "Truck",
      },
      {
        title: "Fire & Safety Trained",
        description:
          "Personnel trained in fire prevention, evacuation, and first response.",
        icon: "Flame",
      },
      {
        title: "Shift-Based Deployment",
        description:
          "24/7 coverage with managed shift rotations and supervisory oversight.",
        icon: "Clock",
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirement Discussion",
        description:
          "We understand your industrial facility's layout, operations, and security concerns.",
      },
      {
        step: 2,
        title: "Site Assessment",
        description:
          "Our team conducts a thorough site survey identifying vulnerable areas and access points.",
      },
      {
        step: 3,
        title: "Proposal Submission",
        description:
          "We submit a comprehensive security plan with guard deployment and reporting protocols.",
      },
      {
        step: 4,
        title: "Client Approval",
        description:
          "You review and approve the security plan.",
      },
      {
        step: 5,
        title: "Deployment",
        description:
          "Trained industrial security personnel deployed with site-specific post orders.",
      },
      {
        step: 6,
        title: "Ongoing Support",
        description:
          "Regular supervisory patrols, incident reporting, and 24/7 management coordination.",
      },
    ],
    whyChooseUs: [
      {
        title: "Industrial Expertise",
        description:
          "We understand the unique security challenges of manufacturing and warehousing environments.",
      },
      {
        title: "Loss Prevention Focus",
        description:
          "Our guards are trained to monitor material movement and prevent theft.",
      },
      {
        title: "Scalable Teams",
        description:
          "From single-shift to multi-shift deployments, we scale to your needs.",
      },
    ],
    faqs: [
      {
        question: "Can you handle multiple shifts at our factory?",
        answer:
          "Yes, we provide multi-shift deployment with dedicated supervisors for each shift to ensure seamless coverage.",
      },
      {
        question: "Do you provide armed guards for industrial sites?",
        answer:
          "Depending on the site requirements and applicable regulations, we can deploy appropriately trained and licensed personnel.",
      },
    ],
relatedServices: [
      "security-guards",
      "corporate-security",
      "facility-management",
    ],
    seo: {
      title:
        "Industrial Security in Bengaluru | SSCSS",
      description:
        "Specialized industrial security for factories, warehouses & manufacturing plants in Bengaluru. Perimeter control, loss prevention & 24/7 coverage.",
      canonicalPath: "/services/industrial-security",
      schemaType: "Service",
    },
  },
  {
    slug: "residential-security",
    name: "Residential Security",
    shortTagline:
      "Trusted security for apartments, gated communities, and residential complexes.",
    icon: "Home",
    heroImage: {
      src: placeholderImage("residential-security"),
      alt: "Residential security guard at apartment gate",
      isPlaceholder: true,
    },
    overview:
      "SSCSS provides dedicated residential security solutions for apartment associations, gated communities, and residential complexes. Our guards are trained in visitor management, package handling, resident assistance, and community safety protocols. We help create a safe, welcoming environment for residents while maintaining professional security standards.",
    industriesServed: [
      "apartment-associations",
      "residential-complexes",
    ],
    benefits: [
      {
        title: "Visitor Management",
        description:
          "Professional handling of guest check-ins, delivery personnel, and service providers.",
        icon: "ClipboardCheck",
      },
      {
        title: "Community Friendly",
        description:
          "Guards trained to be helpful and courteous with residents while maintaining security.",
        icon: "Home",
      },
      {
        title: "Night Patrols",
        description:
          "Regular perimeter walks and common area monitoring during night hours.",
        icon: "Moon",
      },
      {
        title: "Emergency Response",
        description:
          "Trained to handle medical emergencies, fire incidents, and security breaches.",
        icon: "Ambulance",
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirement Discussion",
        description:
          "We discuss your apartment complex size, resident count, entry points, and specific concerns.",
      },
      {
        step: 2,
        title: "Site Assessment",
        description:
          "Our team visits to assess gates, parking, common areas, and existing security infrastructure.",
      },
      {
        step: 3,
        title: "Proposal Submission",
        description:
          "We provide a proposal covering guard deployment, shifts, and community-specific protocols.",
      },
      {
        step: 4,
        title: "Client Approval",
        description:
          "The apartment association reviews and approves the proposal.",
      },
      {
        step: 5,
        title: "Deployment",
        description:
          "Trained residential security guards deployed with community-specific post orders.",
      },
      {
        step: 6,
        title: "Ongoing Support",
        description:
          "Regular committee meetings, incident reports, and responsive management support.",
      },
    ],
    whyChooseUs: [
      {
        title: "Community Experience",
        description:
          "We serve multiple apartment associations across South Bengaluru.",
      },
      {
        title: "Resident-Focused Training",
        description:
          "Our guards are trained to balance security with courteous resident interaction.",
      },
      {
        title: "Flexible Engagement",
        description:
          "We work with association committees to customize security as per resident needs.",
      },
    ],
    faqs: [
      {
        question: "How do you handle late-night visitor access?",
        answer:
          "Our guards follow the community's visitor policy, verifying and logging all late-night entries while ensuring minimal disturbance to residents.",
      },
      {
        question: "Can you deploy female guards for women's safety?",
        answer:
          "Yes, we can deploy trained female security personnel based on community requirements.",
      },
    ],
    relatedServices: [
      "security-guards",
      "corporate-security",
    ],
    seo: {
      title:
        "Residential Security in Bengaluru | SSCSS",
      description:
        "Professional residential security for apartments and gated communities in South Bengaluru. Visitor management, night patrols & community-friendly guards.",
      canonicalPath: "/services/residential-security",
      schemaType: "Service",
    },
  },
  {
    slug: "housekeeping",
    name: "Housekeeping",
    shortTagline:
      "Professional housekeeping and cleaning services for commercial and residential spaces.",
    icon: "Sparkles",
    heroImage: {
      src: placeholderImage("housekeeping"),
      alt: "Professional housekeeping staff",
      isPlaceholder: true,
    },
    overview:
      "SSCSS provides comprehensive housekeeping and cleaning services for offices, apartments, commercial buildings, and industrial facilities. Our housekeeping staff is trained in modern cleaning techniques, hygiene standards, and eco-friendly practices. We ensure clean, healthy, and well-maintained premises that create a positive impression.",
    industriesServed: [
      "corporate-offices",
      "apartment-associations",
      "commercial-buildings",
      "hospitals",
      "hotels",
    ],
    benefits: [
      {
        title: "Trained Staff",
        description:
          "Professional housekeeping personnel trained in modern cleaning standards.",
        icon: "Sparkles",
      },
      {
        title: "Eco-Friendly Practices",
        description:
          "Use of environmentally safe cleaning products and sustainable practices.",
        icon: "Leaf",
      },
      {
        title: "Supervised Teams",
        description:
          "Regular quality checks and supervisory oversight for consistent results.",
        icon: "ClipboardCheck",
      },
      {
        title: "Flexible Scheduling",
        description:
          "Daily, weekly, or custom schedules to suit your operational needs.",
        icon: "Calendar",
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirement Discussion",
        description:
          "We assess your premises size, cleaning needs, frequency, and special requirements.",
      },
      {
        step: 2,
        title: "Site Assessment",
        description:
          "Our team evaluates the site to determine staffing and equipment needs.",
      },
      {
        step: 3,
        title: "Proposal Submission",
        description:
          "We provide a detailed cleaning plan with staffing, schedule, and pricing.",
      },
      {
        step: 4,
        title: "Client Approval",
        description:
          "You review and approve the housekeeping plan.",
      },
      {
        step: 5,
        title: "Deployment",
        description:
          "Trained housekeeping staff deployed with proper equipment and supplies.",
      },
      {
        step: 6,
        title: "Ongoing Support",
        description:
          "Regular quality audits, feedback collection, and responsive management.",
      },
    ],
    whyChooseUs: [
      {
        title: "Integrated Services",
        description:
          "Combine housekeeping with security for streamlined facility management.",
      },
      {
        title: "Quality Focus",
        description:
          "Regular inspections and client feedback loops ensure high standards.",
      },
      {
        title: "Reliable Staffing",
        description:
          "We maintain standby staff to cover absences without service disruption.",
      },
    ],
    faqs: [
      {
        question: "Do you provide cleaning equipment and supplies?",
        answer:
          "Yes, we bring all necessary cleaning equipment, tools, and eco-friendly supplies as part of our service.",
      },
      {
        question: "Can housekeeping be combined with security services?",
        answer:
          "Absolutely. Many of our clients opt for integrated security and housekeeping for streamlined vendor management.",
      },
    ],
    relatedServices: [
      "front-office-management",
      "skilled-labour",
    ],
    seo: {
      title:
        "Housekeeping in Bengaluru | SSCSS",
      description:
        "Professional housekeeping and cleaning services for offices, apartments & commercial buildings in South Bengaluru. Trained staff, eco-friendly practices.",
      canonicalPath: "/services/housekeeping",
      schemaType: "Service",
    },
  },
  {
    slug: "front-office-management",
    name: "Front Office Management",
    shortTagline:
      "Professional front desk and reception management for your business.",
    icon: "UserCheck",
    heroImage: {
      src: placeholderImage("front-office-management"),
      alt: "Front office management personnel",
      isPlaceholder: true,
    },
    overview:
      "SSCSS provides trained front office and reception management personnel for corporate offices, hospitals, hotels, and commercial establishments. Our staff is trained in professional etiquette, communication skills, visitor management, and administrative support. We ensure your front desk represents your brand with professionalism and warmth.",
    industriesServed: [
      "corporate-offices",
      "hospitals",
      "hotels",
      "it-companies",
    ],
    benefits: [
      {
        title: "Professional Presentation",
        description:
          "Well-groomed, courteous staff trained in corporate etiquette.",
        icon: "UserCheck",
      },
      {
        title: "Visitor Management",
        description:
          "Efficient check-in processes, visitor logs, and host notifications.",
        icon: "ClipboardList",
      },
      {
        title: "Communication Skills",
        description:
          "Staff trained in phone etiquette, email handling, and verbal communication.",
        icon: "Phone",
      },
      {
        title: "Administrative Support",
        description:
          "Assistance with meeting room booking, mail handling, and basic admin tasks.",
        icon: "FileText",
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirement Discussion",
        description:
          "We understand your front office needs, visitor volume, and brand expectations.",
      },
      {
        step: 2,
        title: "Profile Matching",
        description:
          "We match staff profiles based on your industry, culture, and specific requirements.",
      },
      {
        step: 3,
        title: "Proposal Submission",
        description:
          "We present a proposal with staffing plan, training approach, and service levels.",
      },
      {
        step: 4,
        title: "Client Approval",
        description:
          "You review and approve the proposed plan.",
      },
      {
        step: 5,
        title: "Deployment",
        description:
          "Trained front office personnel deployed with brand-specific orientation.",
      },
      {
        step: 6,
        title: "Ongoing Support",
        description:
          "Regular performance feedback, refresher training, and management support.",
      },
    ],
    whyChooseUs: [
      {
        title: "Corporate-Grade Training",
        description:
          "Our staff undergoes training in corporate etiquette, communication, and presentation.",
      },
      {
        title: "Brand Representation",
        description:
          "We ensure our personnel represent your brand values through professional conduct.",
      },
      {
        title: "Integrated Solutions",
        description:
          "Combine with security or housekeeping for complete facility management.",
      },
    ],
    faqs: [
      {
        question: "Do you provide training specific to our company?",
        answer:
          "Yes, we provide brand-specific orientation and training to ensure our staff aligns with your company culture and protocols.",
      },
      {
        question: "Can front office staff handle phone calls and scheduling?",
        answer:
          "Yes, our staff is trained in phone etiquette, meeting scheduling, and basic administrative coordination.",
      },
    ],
    relatedServices: [
      "corporate-security",
      "housekeeping",
    ],
    seo: {
      title:
        "Front Office Management in Bengaluru | SSCSS",
      description:
        "Professional front desk and reception management for corporates, hospitals & hotels in Bengaluru. Trained staff in communication & visitor management.",
      canonicalPath: "/services/front-office-management",
      schemaType: "Service",
    },
  },
  {
    slug: "skilled-labour",
    name: "Skilled Labour",
    shortTagline:
      "Qualified skilled workers for your operational and project needs.",
    icon: "Wrench",
    heroImage: {
      src: placeholderImage("skilled-labour"),
      alt: "Skilled labour personnel",
      isPlaceholder: true,
    },
    overview:
      "SSCSS provides verified skilled labour personnel for various industries including construction, manufacturing, facilities management, and events. Our skilled workers are trained, experienced, and ready to contribute to your projects. We handle recruitment, verification, and deployment so you can focus on your core operations.",
    industriesServed: [
      "construction-sites",
      "factories",
      "warehouses",
      "hotels",
    ],
    benefits: [
      {
        title: "Pre-Vetted Workers",
        description:
          "All workers undergo background checks and skill verification before deployment.",
        icon: "SearchCheck",
      },
      {
        title: "Quick Deployment",
        description:
          "We maintain a ready pool of skilled workers for urgent requirements.",
        icon: "Rocket",
      },
      {
        title: "Flexible Engagement",
        description:
          "Short-term, project-based, or long-term engagements as per your needs.",
        icon: "Repeat",
      },
      {
        title: "Supervisory Support",
        description:
          "We provide supervisory oversight for larger teams to ensure productivity.",
        icon: "Users",
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirement Discussion",
        description:
          "We discuss your skill requirements, duration, and deployment location.",
      },
      {
        step: 2,
        title: "Candidate Selection",
        description:
          "We identify and verify candidates matching your specific skill requirements.",
      },
      {
        step: 3,
        title: "Proposal Submission",
        description:
          "We present candidate profiles, pricing, and engagement terms.",
      },
      {
        step: 4,
        title: "Client Approval",
        description:
          "You review and confirm the candidates.",
      },
      {
        step: 5,
        title: "Deployment",
        description:
          "Workers deployed to your site with necessary documentation and safety gear.",
      },
      {
        step: 6,
        title: "Ongoing Support",
        description:
          "Regular check-ins, performance feedback, and replacement if needed.",
      },
    ],
    whyChooseUs: [
      {
        title: "Verified Workforce",
        description:
          "Thorough background and skill verification for every worker we deploy.",
      },
      {
        title: "Industry Coverage",
        description:
          "We serve construction, manufacturing, hospitality, and facility management sectors.",
      },
      {
        title: "Hassle-Free Management",
        description:
          "We handle payroll, compliance, and worker management so you don't have to.",
      },
    ],
    faqs: [
      {
        question: "What types of skilled workers do you provide?",
        answer:
          "We provide a range of skilled workers including electricians, plumbers, carpenters, masons, technicians, and general maintenance staff.",
      },
      {
        question: "Can you provide workers for short-term projects?",
        answer:
          "Yes, we offer flexible engagement terms including daily, weekly, and project-based deployments.",
      },
    ],
    relatedServices: [
      "unskilled-labour",
      "corporate-staffing",
    ],
    seo: {
      title:
        "Skilled Labour in Bengaluru | SSCSS",
      description:
        "Verified skilled labour for construction, manufacturing & facilities in Bengaluru. Electricians, plumbers, carpenters & more. Quick deployment.",
      canonicalPath: "/services/skilled-labour",
      schemaType: "Service",
    },
  },
  {
    slug: "unskilled-labour",
    name: "Unskilled Labour",
    shortTagline:
      "Reliable general labour support for your operations and projects.",
    icon: "Ham",
    heroImage: {
      src: placeholderImage("unskilled-labour"),
      alt: "General labour personnel",
      isPlaceholder: true,
    },
    overview:
      "SSCSS provides reliable unskilled and semi-skilled labour for general duties across industries. Our workers are physically fit, verified, and ready for tasks such as loading/unloading, cleaning, site maintenance, and general assistance. We ensure timely deployment and consistent workforce availability.",
    industriesServed: [
      "warehouses",
      "construction-sites",
      "factories",
      "commercial-buildings",
    ],
    benefits: [
      {
        title: "Ready Workforce",
        description:
          "Pre-screened workers available for immediate deployment.",
        icon: "Users",
      },
      {
        title: "Physical Fitness",
        description:
          "Workers are physically assessed to ensure they can handle demanding tasks.",
        icon: "Zap",
      },
      {
        title: "Flexible Quantity",
        description:
          "Scale up or down based on your daily or project requirements.",
        icon: "SlidersHorizontal",
      },
      {
        title: "Supervised Teams",
        description:
          "Supervisory oversight for larger teams to ensure productivity and discipline.",
        icon: "Eye",
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirement Discussion",
        description:
          "We discuss the nature of work, number of workers needed, and duration.",
      },
      {
        step: 2,
        title: "Worker Allocation",
        description:
          "We assign verified workers matching your requirements.",
      },
      {
        step: 3,
        title: "Proposal Submission",
        description:
          "We provide pricing and engagement terms.",
      },
      {
        step: 4,
        title: "Client Approval",
        description:
          "You confirm the deployment plan.",
      },
      {
        step: 5,
        title: "Deployment",
        description:
          "Workers deployed to your site with necessary instructions and safety gear.",
      },
      {
        step: 6,
        title: "Ongoing Support",
        description:
          "Regular check-ins and replacement support as needed.",
      },
    ],
    whyChooseUs: [
      {
        title: "Verified Personnel",
        description:
          "Identity and background verification for all workers.",
      },
      {
        title: "Quick Turnaround",
        description:
          "Most deployment requests fulfilled within 24–48 hours.",
      },
      {
        title: "Hassle-Free Management",
        description:
          "We handle all administrative and compliance aspects.",
      },
    ],
    faqs: [
      {
        question: "What kind of tasks can unskilled labour handle?",
        answer:
          "Our workers can handle loading/unloading, site cleaning, material handling, general assistance, and basic maintenance tasks.",
      },
      {
        question: "Can we get workers on a daily basis?",
        answer:
          "Yes, we offer daily, weekly, and monthly deployment options based on your requirements.",
      },
    ],
    relatedServices: [
      "skilled-labour",
      "housekeeping",
    ],
    seo: {
      title:
        "Unskilled Labour in Bengaluru | SSCSS",
      description:
        "Reliable unskilled and general labour for warehouses, construction sites & factories in Bengaluru. Quick deployment, verified workers.",
      canonicalPath: "/services/unskilled-labour",
      schemaType: "Service",
    },
  },
  {
    slug: "corporate-staffing",
    name: "Corporate Staffing",
    shortTagline:
      "End-to-end staffing solutions for corporate and administrative roles.",
    icon: "UserPlus",
    heroImage: {
      src: placeholderImage("corporate-staffing"),
      alt: "Corporate staffing professionals",
      isPlaceholder: true,
    },
    overview:
      "SSCSS provides comprehensive corporate staffing solutions including administrative staff, data entry operators, office assistants, and support personnel. We handle the entire recruitment lifecycle from sourcing and screening to deployment and payroll management. Our staffing solutions help businesses focus on core operations while we manage their workforce needs.",
    industriesServed: [
      "corporate-offices",
      "it-companies",
      "commercial-buildings",
    ],
    benefits: [
      {
        title: "End-to-End Recruitment",
        description:
          "Sourcing, screening, verification, and deployment handled by us.",
        icon: "UserPlus",
      },
      {
        title: "Payroll Management",
        description:
          "We handle payroll, compliance, and statutory requirements.",
        icon: "FileText",
      },
      {
        title: "Quality Candidates",
        description:
          "Rigorous screening process ensures quality staff for your organization.",
        icon: "Star",
      },
      {
        title: "Scalable Solutions",
        description:
          "Easily scale your workforce up or down based on business needs.",
        icon: "TrendingUp",
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirement Discussion",
        description:
          "We understand your staffing needs, role requirements, and organizational culture.",
      },
      {
        step: 2,
        title: "Sourcing & Screening",
        description:
          "We source, screen, and verify candidates matching your requirements.",
      },
      {
        step: 3,
        title: "Candidate Presentation",
        description:
          "We present shortlisted candidates for your review and interviews.",
      },
      {
        step: 4,
        title: "Client Approval",
        description:
          "You select and approve the candidates.",
      },
      {
        step: 5,
        title: "Onboarding",
        description:
          "Selected candidates are onboarded with necessary documentation and orientation.",
      },
      {
        step: 6,
        title: "Ongoing Support",
        description:
          "Performance monitoring, payroll management, and replacement support.",
      },
    ],
    whyChooseUs: [
      {
        title: "Proven Recruitment Process",
        description:
          "Structured sourcing and screening process delivering quality candidates consistently.",
      },
      {
        title: "Compliance Assurance",
        description:
          "We handle all statutory compliances, PF, ESI, and payroll management.",
      },
      {
        title: "Pan-Bengaluru Reach",
        description:
          "We source candidates from across Bengaluru to find the best fit for your organization.",
      },
    ],
    faqs: [
      {
        question: "What types of corporate roles do you staff?",
        answer:
          "We staff administrative assistants, data entry operators, office assistants, receptionists, customer support, and other support roles.",
      },
      {
        question: "Do you handle contract-to-hire placements?",
        answer:
          "Yes, we offer flexible engagement models including contract, contract-to-hire, and permanent placements.",
      },
    ],
    relatedServices: [
      "skilled-labour",
      "front-office-management",
    ],
    seo: {
      title:
        "Corporate Staffing in Bengaluru | SSCSS",
      description:
        "End-to-end corporate staffing solutions in Bengaluru. Administrative staff, data entry operators & support personnel. Payroll & compliance managed.",
      canonicalPath: "/services/corporate-staffing",
      schemaType: "Service",
    },
  },
  {
    slug: "ex-army-security-guards",
    name: "Ex-Army Security Guards",
    shortTagline:
      "Disciplined, experienced ex-servicemen for premium security needs.",
    icon: "Medal",
    heroImage: {
      src: placeholderImage("ex-army-security-guards"),
      alt: "Ex-army security guard",
      isPlaceholder: true,
    },
    overview:
      "SSCSS provides ex-army security guards who bring unmatched discipline, loyalty, and experience to your security operations. Our ex-servicemen have served in the Indian Armed Forces and are trained in advanced security protocols, situational awareness, and crisis management. They are ideal for high-security environments, VIP security, and premium establishments.",
    industriesServed: [
      "corporate-offices",
      "it-companies",
      "hotels",
      "business-parks",
      "government-institutions",
    ],
    benefits: [
      {
        title: "Military Discipline",
        description:
          "Ex-servicemen bring unmatched discipline, punctuality, and integrity.",
        icon: "Shield",
      },
      {
        title: "Advanced Training",
        description:
          "Trained in combat, crisis management, and advanced security protocols.",
        icon: "Sword",
      },
      {
        title: "Situational Awareness",
        description:
          "Sharp observational skills and quick decision-making in critical situations.",
        icon: "Eye",
      },
      {
        title: "Leadership Qualities",
        description:
          "Many ex-army personnel have leadership experience and can manage security teams.",
        icon: "Medal",
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirement Discussion",
        description:
          "We discuss your security requirements, site criticality, and specific needs.",
      },
      {
        step: 2,
        title: "Site Assessment",
        description:
          "Our team assesses your premises for vulnerability and security planning.",
      },
      {
        step: 3,
        title: "Personnel Selection",
        description:
          "We match ex-army personnel profiles to your specific security needs.",
      },
      {
        step: 4,
        title: "Client Approval",
        description:
          "You review and approve the proposed personnel.",
      },
      {
        step: 5,
        title: "Deployment",
        description:
          "Ex-army guards deployed with site-specific post orders and protocols.",
      },
      {
        step: 6,
        title: "Ongoing Support",
        description:
          "Regular performance reviews and 24/7 management support.",
      },
    ],
    whyChooseUs: [
      {
        title: "Verified Service Records",
        description:
          "All ex-army personnel have verified service records and honorable discharges.",
      },
      {
        title: "Premium Security",
        description:
          "Ideal for high-profile clients, luxury properties, and critical infrastructure.",
      },
      {
        title: "Leadership Pipeline",
        description:
          "Ex-army personnel often serve as supervisors and team leaders for larger deployments.",
      },
    ],
    faqs: [
      {
        question: "Are all your ex-army guards from the Indian Armed Forces?",
        answer:
          "Yes, all our ex-army guards have served in the Indian Army, Navy, or Air Force with verified service records.",
      },
      {
        question: "Can ex-army guards handle weapons if required?",
        answer:
          "Where legally permitted and required, we deploy appropriately licensed and trained ex-army personnel for armed security duties.",
      },
    ],
    relatedServices: [
      "security-guards",
      "corporate-security",
    ],
    seo: {
      title:
        "Ex-Army Guards in Bengaluru | SSCSS",
      description:
        "Ex-army security guards in Bengaluru. Military-trained, disciplined personnel for premium security needs. Verified service records.",
      canonicalPath: "/services/ex-army-security-guards",
      schemaType: "Service",
    },
  },
  {
    slug: "event-security",
    name: "Event Security",
    shortTagline:
      "Comprehensive security management for events, conferences, and gatherings.",
    icon: "CalendarCheck",
    heroImage: {
      src: placeholderImage("event-security"),
      alt: "Event security personnel",
      isPlaceholder: true,
    },
    overview:
      "SSCSS provides specialized event security services for conferences, corporate events, weddings, concerts, and large gatherings. Our event security personnel are trained in crowd management, access control, bag checks, and emergency response. We work with event organizers to create a safe environment while ensuring a positive experience for attendees.",
    industriesServed: [
      "corporate-offices",
      "hotels",
      "commercial-buildings",
    ],
    benefits: [
      {
        title: "Crowd Management",
        description:
          "Trained in crowd flow control, queue management, and de-escalation.",
        icon: "Users",
      },
      {
        title: "Access Control",
        description:
          "Efficient entry management with ticketing, guest lists, and credential checks.",
        icon: "DoorOpen",
      },
      {
        title: "Emergency Preparedness",
        description:
          "Emergency response plans, evacuation procedures, and first aid trained personnel.",
        icon: "AlertTriangle",
      },
      {
        title: "Flexible Deployment",
        description:
          "Scalable security teams from small events to large-scale gatherings.",
        icon: "SlidersHorizontal",
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirement Discussion",
        description:
          "We discuss event type, expected attendance, venue layout, and security concerns.",
      },
      {
        step: 2,
        title: "Site Assessment",
        description:
          "Our team visits the venue to assess entry points, crowd flow, and emergency exits.",
      },
      {
        step: 3,
        title: "Security Plan",
        description:
          "We create a comprehensive event security plan including staffing and protocols.",
      },
      {
        step: 4,
        title: "Client Approval",
        description:
          "You review and approve the security plan.",
      },
      {
        step: 5,
        title: "Deployment",
        description:
          "Trained event security personnel deployed with event-specific briefings.",
      },
      {
        step: 6,
        title: "Ongoing Support",
        description:
          "Real-time coordination with event organizers and incident management.",
      },
    ],
    whyChooseUs: [
      {
        title: "Event Experience",
        description:
          "We have experience managing security for corporate events, weddings, and public gatherings.",
      },
      {
        title: "Customized Plans",
        description:
          "Every event is unique — we tailor our security approach accordingly.",
      },
      {
        title: "Professional Presentation",
        description:
          "Well-groomed, presentable guards who enhance rather than detract from the event experience.",
      },
    ],
    faqs: [
      {
        question: "Do you provide security for small events?",
        answer:
          "Yes, we provide security for events of all sizes, from intimate corporate gatherings to large-scale public events.",
      },
      {
        question: "Can you handle VIP security at events?",
        answer:
          "Yes, we can provide dedicated VIP protection details alongside general event security.",
      },
    ],
    relatedServices: [
      "security-guards",
      "corporate-security",
    ],
    seo: {
      title:
        "Event Security in Bengaluru | SSCSS",
      description:
        "Professional event security for conferences, corporate events & gatherings in Bengaluru. Crowd management, access control & emergency response.",
      canonicalPath: "/services/event-security",
      schemaType: "Service",
    },
  },
  {
    slug: "background-verification",
    name: "Background Verification",
    shortTagline:
      "Thorough background checks for individuals and organizations.",
    icon: "SearchCheck",
    heroImage: {
      src: placeholderImage("background-verification"),
      alt: "Background verification documentation",
      isPlaceholder: true,
    },
    overview:
      "SSCSS provides comprehensive background verification services for employers, landlords, and organizations. Our verification process includes identity verification, address confirmation, employment history, education verification, criminal record checks, and reference checks. We help you make informed decisions with reliable, thorough background screening.",
    industriesServed: [
      "corporate-offices",
      "it-companies",
      "apartment-associations",
      "hotels",
      "hospitals",
    ],
    benefits: [
      {
        title: "Comprehensive Checks",
        description:
          "Identity, address, employment, education, and criminal record verification.",
        icon: "SearchCheck",
      },
      {
        title: "Fast Turnaround",
        description:
          "Most verifications completed within 3–5 business days.",
        icon: "Clock",
      },
      {
        title: "Confidential Process",
        description:
          "All verification conducted with strict confidentiality and consent.",
        icon: "Lock",
      },
      {
        title: "Detailed Reports",
        description:
          "Comprehensive verification reports with clear findings and recommendations.",
        icon: "FileText",
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirement Discussion",
        description:
          "We discuss the type and scope of verification required.",
      },
      {
        step: 2,
        title: "Consent & Documentation",
        description:
          "We obtain necessary consents and collect required documentation.",
      },
      {
        step: 3,
        title: "Verification Process",
        description:
          "Our team conducts thorough checks through authorized channels.",
      },
      {
        step: 4,
        title: "Report Generation",
        description:
          "A comprehensive verification report is compiled with findings.",
      },
      {
        step: 5,
        title: "Report Delivery",
        description:
          "The verification report is delivered to you with analysis.",
      },
      {
        step: 6,
        title: "Follow-up Support",
        description:
          "We provide clarification and additional support as needed.",
      },
    ],
    whyChooseUs: [
      {
        title: "Authorized Processes",
        description:
          "All verification conducted through authorized and legal channels.",
      },
      {
        title: "Experienced Team",
        description:
          "Our verification team has years of experience in background screening.",
      },
      {
        title: "Comprehensive Coverage",
        description:
          "From employment checks to tenant verification — we cover it all.",
      },
    ],
    faqs: [
      {
        question: "What documents are required for background verification?",
        answer:
          "Requirements vary by verification type but typically include government ID, address proof, and relevant educational/employment documents.",
      },
      {
        question: "How long does a typical verification take?",
        answer:
          "Most verifications are completed within 3–5 business days, though complex cases may take longer.",
      },
    ],
    relatedServices: [
      "corporate-staffing",
      "private-detective-services",
    ],
    seo: {
      title:
        "Background Verification in Bengaluru | SSCSS",
      description:
        "Comprehensive background verification for employers and organizations in Bengaluru. Identity, employment, education & criminal record checks.",
      canonicalPath: "/services/background-verification",
      schemaType: "Service",
    },
  },
  {
    slug: "private-detective-services",
    name: "Private Detective Services",
    shortTagline:
      "Discreet, professional investigative services for individuals and businesses.",
    icon: "Search",
    heroImage: {
      src: placeholderImage("private-detective-services"),
      alt: "Private detective services",
      isPlaceholder: true,
    },
    overview:
      "SSCSS provides professional private detective and investigative services for individuals, businesses, and legal professionals. Our services include surveillance, matrimonial investigations, corporate investigations, evidence gathering, and due diligence. All investigations are conducted with the utmost discretion, professionalism, and within legal frameworks.",
    industriesServed: [
      "corporate-offices",
      "apartment-associations",
      "legal-professionals",
    ],
    benefits: [
      {
        title: "Discreet Operations",
        description:
          "All investigations conducted with complete confidentiality.",
        icon: "EyeOff",
      },
      {
        title: "Legal Compliance",
        description:
          "All investigative methods comply with applicable laws and regulations.",
        icon: "Scale",
      },
      {
        title: "Experienced Investigators",
        description:
          "Our team includes ex-law enforcement and trained investigation professionals.",
        icon: "BadgeCheck",
      },
      {
        title: "Detailed Reporting",
        description:
          "Comprehensive investigation reports with evidence documentation.",
        icon: "FileSearch",
      },
    ],
    process: [
      {
        step: 1,
        title: "Consultation",
        description:
          "Initial confidential consultation to understand your investigative needs.",
      },
      {
        step: 2,
        title: "Case Assessment",
        description:
          "We assess the scope, feasibility, and legal aspects of the investigation.",
      },
      {
        step: 3,
        title: "Investigation Plan",
        description:
          "We prepare a detailed investigation plan with timeline and approach.",
      },
      {
        step: 4,
        title: "Client Approval",
        description:
          "You review and approve the investigation plan.",
      },
      {
        step: 5,
        title: "Investigation",
        description:
          "Our team conducts the investigation using professional methods and legal approaches.",
      },
      {
        step: 6,
        title: "Report & Closure",
        description:
          "Detailed investigation report delivered with findings and evidence.",
      },
    ],
    whyChooseUs: [
      {
        title: "Professional Team",
        description:
          "Experienced investigators with backgrounds in law enforcement and security.",
      },
      {
        title: "Confidentiality Guaranteed",
        description:
          "Strict confidentiality protocols protect your privacy throughout the investigation.",
      },
      {
        title: "Legal Compliance",
        description:
          "All investigations conducted within legal frameworks with admissible evidence.",
      },
    ],
    faqs: [
      {
        question: "Are your investigation methods legal?",
        answer:
          "Yes, all our investigative methods comply with applicable laws, and evidence gathered is admissible in legal proceedings.",
      },
      {
        question: "Do you handle matrimonial investigations?",
        answer:
          "Yes, we handle matrimonial investigations discreetly and sensitively, always within legal boundaries.",
      },
    ],
    relatedServices: [
      "background-verification",
      "corporate-security",
    ],
    seo: {
      title:
        "Private Detective Services in Bengaluru | SSCSS",
      description:
        "Professional private detective and investigation services in Bengaluru. Surveillance, matrimonial, corporate investigations & due diligence. Discreet & legal.",
      canonicalPath: "/services/private-detective-services",
      schemaType: "Service",
    },
  },
{
    slug: "facility-management",
    name: "Integrated Facility Management Services",
    shortTagline:
      "Complete facility operations management — security, housekeeping, staffing, and more.",
    icon: "Building2",
    heroImage: {
      src: placeholderImage("facility-management"),
      alt: "Integrated facility management team",
      isPlaceholder: true,
    },
    overview:
      "SSCSS offers comprehensive Integrated Facility Management Services (IFMS) for corporate offices, commercial buildings, hospitals, hotels, IT parks, and industrial facilities. We manage complete facility operations including security services, housekeeping, skilled and unskilled labour, front office staff, pantry staff, facility supervisors, and general facility operations. Our integrated approach ensures seamless workforce coordination, single-vendor accountability, and consistent service quality across all your facility needs. By consolidating multiple service lines under one management umbrella, we reduce your administrative overhead while improving operational efficiency.",
    industriesServed: [
      "corporate-offices",
      "commercial-buildings",
      "hospitals",
      "hotels",
      "it-companies",
      "business-parks",
      "factories",
    ],
    benefits: [
      {
        title: "Single-Vendor Accountability",
        description:
          "One point of contact for security, housekeeping, staffing, and facility operations — no more coordinating multiple vendors.",
        icon: "Building2",
      },
      {
        title: "Workforce Coordination",
        description:
          "Integrated scheduling and supervision across all service lines ensures seamless facility operations.",
        icon: "Users",
      },
      {
        title: "Cost Efficiency",
        description:
          "Consolidated services reduce administrative overhead and vendor management costs.",
        icon: "TrendingUp",
      },
      {
        title: "Quality Consistency",
        description:
          "Uniform training, supervision, and quality standards across all facility services.",
        icon: "ShieldCheck",
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirement Discussion",
        description:
          "We assess your facility's complete operational needs — security, housekeeping, staffing, and additional services.",
      },
      {
        step: 2,
        title: "Site Assessment",
        description:
          "Our team conducts a comprehensive facility audit to understand workflows, pain points, and optimization opportunities.",
      },
      {
        step: 3,
        title: "Proposal Submission",
        description:
          "We present an integrated facility management plan covering all service lines, staffing, and reporting structure.",
      },
      {
        step: 4,
        title: "Client Approval",
        description:
          "You review and approve the integrated facility management plan.",
      },
      {
        step: 5,
        title: "Deployment",
        description:
          "Trained personnel deployed across all service lines with integrated supervision and reporting.",
      },
      {
        step: 6,
        title: "Ongoing Support",
        description:
          "Dedicated account management, regular performance reviews, and responsive 24/7 coordination.",
      },
    ],
    whyChooseUs: [
      {
        title: "End-to-End Service Portfolio",
        description:
          "From security to housekeeping to staffing — we handle every aspect of your facility operations.",
      },
      {
        title: "Proven Track Record",
        description:
          "15+ years of managing complex facility operations across 50+ client organizations.",
      },
      {
        title: "Integrated Management",
        description:
          "Dedicated supervisors and account managers ensure seamless coordination across all service lines.",
      },
      {
        title: "Scalable Solutions",
        description:
          "Easily scale services up or down based on your evolving facility needs.",
      },
    ],
    faqs: [
      {
        question: "What services are included in facility management?",
        answer:
          "Our integrated facility management covers security services, housekeeping, skilled and unskilled labour, front office staff, pantry staff, facility supervisors, and general facility operations. We customize the service mix based on your specific needs.",
      },
      {
        question: "How does single-vendor facility management benefit my organization?",
        answer:
          "Single-vendor management reduces administrative overhead, eliminates coordination gaps between multiple vendors, ensures consistent service quality, and provides a single point of accountability for all facility operations.",
      },
      {
        question: "Can you customize the service scope for our facility?",
        answer:
          "Absolutely. We tailor our facility management services to your specific requirements — you choose which services to include, and we build an integrated plan around your needs.",
      },
    ],
    relatedServices: [
      "corporate-security",
      "housekeeping",
      "skilled-labour",
      "unskilled-labour",
      "front-office-management",
    ],
    seo: {
      title:
        "Integrated Facility Management Services in Bengaluru | SSCSS",
      description:
        "Comprehensive facility management services in Bengaluru — security, housekeeping, staffing & more. Single-vendor accountability, integrated operations. 15+ years experience.",
      canonicalPath: "/services/facility-management",
      schemaType: "Service",
    },
  },
];

/** Utility: get a single service by slug */
export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

/** Utility: get related services for a given service */
export function getRelatedServices(
  slug: string,
): Pick<Service, "slug" | "name" | "shortTagline" | "heroImage">[] {
  const service = getServiceBySlug(slug);

  if (!service) {
    return [];
  }

  const relatedServices: Service[] = service.relatedServices
    .map((relSlug: string) => getServiceBySlug(relSlug))
    .filter((related): related is Service => related !== undefined);

  return relatedServices.map((related: Service) => ({
    slug: related.slug,
    name: related.name,
    shortTagline: related.shortTagline,
    heroImage: related.heroImage,
  }));
}