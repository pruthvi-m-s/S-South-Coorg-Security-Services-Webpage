// ============================================================
// SSCSS — Industries Served
// All 12 industries as defined in appflow.md
// ============================================================

import type { Industry } from "../types";

export const INDUSTRIES: Industry[] = [
  {
    slug: "apartment-associations",
    name: "Apartment Associations",
    icon: "Building2",
    description:
      "Comprehensive security and manpower solutions for apartment complexes and residential associations, including guard deployment, visitor management, and community safety.",
    relevantServiceSlugs: [
      "security-guards",
      "residential-security",
      "housekeeping",
      "background-verification",
    ],
    heroSubtitle:
      "Security and facility support for residential communities across Bengaluru.",
    environment:
      "Apartment complexes operate with a mix of residents, visitors, delivery personnel, and service vendors moving through the property throughout the day. Gate access, visitor verification, and package handling are daily requirements that demand consistent attention.\n\nSecurity needs shift between peak hours (morning and evening rush) and overnight periods when the premises are quieter. Housekeeping and common area maintenance add another layer of coordination, especially in larger gated communities with multiple blocks and amenities.",
    risks: [
      {
        title: "Unauthorized Access",
        description:
          "Visitors, vendors, and delivery personnel entering without proper verification can compromise resident safety and community protocols.",
      },
      {
        title: "Package and Delivery Management",
        description:
          "Unattended parcels and unsupervised delivery drop-offs create loss and theft risks, particularly in larger complexes with multiple entry points.",
      },
      {
        title: "Overnight Security Gaps",
        description:
          "Reduced staffing during night hours can leave common areas, parking, and perimeter zones under-monitored.",
      },
      {
        title: "Multiple Vendor Coordination",
        description:
          "Managing housekeeping, maintenance, and security from different providers creates communication gaps and inconsistent service standards.",
      },
    ],
    approach:
      "SSCSS begins with a walkthrough of the property to understand access points, peak movement patterns, and community-specific concerns. Based on this assessment, we recommend the right mix of gate guards, patrol personnel, and housekeeping staff.\n\nOur team coordinates with the apartment association or management committee to establish visitor protocols, shift schedules, and reporting structures. We provide a single point of contact for ongoing coordination, ensuring that staffing adjustments, incident reports, and operational updates are handled without delays.",
    industryCta: {
      heroCtaLabel: "Discuss Security for Your Property",
      finalHeading: "Ready to discuss security for your property?",
      finalSupporting:
        "Tell us about your apartment complex and we will help you identify the right security and facility support.",
      finalPrimaryLabel: "Discuss Your Property Requirement",
    },
  },
  {
    slug: "factories",
    name: "Factories",
    icon: "Factory",
    description:
      "Industrial security and manpower for manufacturing facilities, focusing on perimeter control, material movement monitoring, and shift-based guard deployment.",
    relevantServiceSlugs: [
      "industrial-security",
      "security-guards",
      "skilled-labour",
      "unskilled-labour",
    ],
    heroSubtitle:
      "Industrial security and workforce deployment for manufacturing facilities.",
    environment:
      "Factories operate with high-value raw materials, finished goods, and expensive machinery on-site. Shift-based operations mean personnel turnover throughout the day, and material movement in and out of the facility requires constant monitoring.\n\nPerimeter security, gate access control, and internal patrol are critical to preventing theft, trespassing, and safety incidents. Production environments also demand skilled and unskilled labour for material handling, loading, and general support roles.",
    risks: [
      {
        title: "Material and Inventory Theft",
        description:
          "Raw materials, finished products, and scrap are vulnerable to theft during shift changes, loading operations, and overnight periods.",
      },
      {
        title: "Perimeter Breaches",
        description:
          "Large factory compounds with multiple entry points are difficult to secure without structured patrol and access control.",
      },
      {
        title: "Shift Transition Gaps",
        description:
          "Handover periods between shifts are vulnerable moments where oversight can drop and security incidents can occur.",
      },
      {
        title: "Labour Coordination",
        description:
          "Deploying skilled and unskilled workers in sync with production schedules requires reliable coordination and standby capacity.",
      },
    ],
    approach:
      "We assess the factory layout, production schedule, and material flow to design a security plan that covers perimeter, gate, and internal zones. Shift rotations are planned to maintain coverage during handover periods.\n\nFor labour requirements, we maintain a pool of trained personnel who can be deployed based on production needs. A dedicated supervisor coordinates with the factory management to ensure that staffing levels match operational demands without gaps.",
    industryCta: {
      heroCtaLabel: "Discuss Your Industrial Security",
      finalHeading: "Ready to discuss your industrial security?",
      finalSupporting:
        "Share your factory's requirements and we will propose the right security and manpower solution.",
      finalPrimaryLabel: "Discuss Your Factory Requirement",
    },
  },
  {
    slug: "warehouses",
    name: "Warehouses",
    icon: "Warehouse",
    description:
      "Security and labour solutions for warehouses and logistics hubs, including goods movement monitoring, inventory protection, and general labour support.",
    relevantServiceSlugs: [
      "industrial-security",
      "security-guards",
      "unskilled-labour",
      "skilled-labour",
    ],
    heroSubtitle:
      "Security and labour support for warehouses and logistics operations.",
    environment:
      "Warehouses and logistics hubs handle large volumes of goods moving in and out daily. Loading docks, storage zones, and staging areas need continuous monitoring to prevent loss and ensure smooth operations.\n\nNight operations and weekend shifts are common in logistics, requiring round-the-clock security coverage. Labour demands fluctuate with shipment volumes, making flexible staffing essential for handling peak periods without delays.",
    risks: [
      {
        title: "Goods Movement Theft",
        description:
          "Loading, unloading, and staging operations create opportunities for inventory shrinkage if not properly monitored.",
      },
      {
        title: "Unsecured Perimeters",
        description:
          "Large warehouse compounds with multiple loading bays are difficult to monitor without structured patrol and access control.",
      },
      {
        title: "Night and Weekend Vulnerability",
        description:
          "Reduced staffing during off-hours leaves storage areas and entry points exposed to unauthorized access.",
      },
      {
        title: "Labour Shortages During Peaks",
        description:
          "Sudden spikes in shipment volume require quick deployment of additional unskilled and skilled labour to avoid delays.",
      },
    ],
    approach:
      "SSCSS designs a security plan that covers gate access, perimeter patrol, and goods movement monitoring. We coordinate with warehouse management to align shift schedules with loading and unloading windows.\n\nFor labour support, we maintain a standby pool of trained personnel who can be deployed on short notice during volume spikes. A site supervisor ensures that security and labour operations run in parallel without coordination gaps.",
    industryCta: {
      heroCtaLabel: "Discuss Your Warehouse Security",
      finalHeading: "Ready to discuss your warehouse security?",
      finalSupporting:
        "Tell us about your warehouse operations and we will recommend the right security and labour support.",
      finalPrimaryLabel: "Discuss Your Warehouse Requirement",
    },
  },
  {
    slug: "it-companies",
    name: "IT Companies",
    icon: "Monitor",
    description:
      "Corporate security and staffing solutions for IT companies, technology parks, and software development firms requiring professional security and front office management.",
    relevantServiceSlugs: [
      "corporate-security",
      "front-office-management",
      "corporate-staffing",
      "ex-army-security-guards",
    ],
    heroSubtitle:
      "Corporate security and staffing for technology companies and business parks.",
    environment:
      "IT companies and technology parks operate in high-traffic environments with employees, visitors, clients, and vendors moving through the premises daily. Visitor management, access control, and professional front office representation are core requirements.\n\nData security and restricted zone access add complexity to the security requirement. After-hours operations, late-night shifts, and weekend work are common, demanding consistent security coverage across all hours.",
    risks: [
      {
        title: "Visitor Management at Scale",
        description:
          "High visitor volumes with multiple meeting rooms and floors require systematic check-in and escort protocols.",
      },
      {
        title: "Data and IP Protection",
        description:
          "Restricted zones, server rooms, and R&D areas need access control beyond standard gate security.",
      },
      {
        title: "After-Hours Security",
        description:
          "Late-night shifts and weekend operations leave common areas and parking zones under-monitored without dedicated coverage.",
      },
      {
        title: "Professional Representation",
        description:
          "Front office and reception staff represent the company's brand and must handle visitors with professionalism and accuracy.",
      },
    ],
    approach:
      "We deploy professional security personnel trained in corporate environments, including ex-army guards for high-security requirements. Front office management staff are selected for their communication skills and ability to represent the company professionally.\n\nAccess control protocols are designed in coordination with the IT team to cover restricted zones, visitor management, and after-hours operations. A dedicated account manager ensures that staffing adjustments are handled quickly as requirements evolve.",
    industryCta: {
      heroCtaLabel: "Discuss Your Corporate Security",
      finalHeading: "Ready to discuss your corporate security?",
      finalSupporting:
        "Share your facility's requirements and we will propose the right security and staffing solution.",
      finalPrimaryLabel: "Discuss Your IT Security Requirement",
    },
  },
  {
    slug: "corporate-offices",
    name: "Corporate Offices",
    icon: "Building",
    description:
      "Complete security, front office, and staffing services for corporate offices, ensuring professional representation and comprehensive security coverage.",
    relevantServiceSlugs: [
      "corporate-security",
      "security-guards",
      "front-office-management",
      "corporate-staffing",
    ],
    heroSubtitle:
      "Security, front office, and staffing for corporate office environments.",
    environment:
      "Corporate offices require a blend of security, reception, and administrative support that reflects the organisation's professional standards. Visitor handling, mail management, and executive floor access are part of the daily routine.\n\nMulti-tenant buildings and standalone office campuses each have distinct requirements. Security must cover lobbies, parking, common areas, and restricted floors while maintaining a professional and approachable presence.",
    risks: [
      {
        title: "Lobby and Reception Security",
        description:
          "The front desk is the first point of contact and must balance security vigilance with a welcoming environment for visitors.",
      },
      {
        title: "Executive and Restricted Access",
        description:
          "Senior management floors, boardrooms, and confidential areas need controlled access without disrupting workflow.",
      },
      {
        title: "Parking and Common Area Monitoring",
        description:
          "Underground parking, stairwells, and common corridors are often overlooked but are common points for incidents.",
      },
      {
        title: "Staffing Continuity",
        description:
          "Absences in front office or security roles can disrupt operations if backup arrangements are not in place.",
      },
    ],
    approach:
      "SSCSS provides trained security guards and front office personnel who understand the professional standards expected in corporate environments. We design shift patterns that maintain full coverage across lobbies, parking, and restricted floors.\n\nA dedicated coordinator manages attendance, leave coverage, and performance reviews to ensure continuity. Regular supervisory visits and client feedback loops keep service quality consistent.",
    industryCta: {
      heroCtaLabel: "Discuss Your Corporate Security",
      finalHeading: "Ready to discuss your corporate security?",
      finalSupporting:
        "Tell us about your office environment and we will recommend the right security and staffing solution.",
      finalPrimaryLabel: "Discuss Your Office Requirement",
    },
  },
  {
    slug: "hospitals",
    name: "Hospitals",
    icon: "Hospital",
    description:
      "Specialized security and housekeeping services for healthcare facilities, with trained personnel who understand the unique requirements of medical environments.",
    relevantServiceSlugs: [
      "security-guards",
      "housekeeping",
      "front-office-management",
      "background-verification",
    ],
    heroSubtitle:
      "Security and housekeeping for healthcare facilities.",
    environment:
      "Hospitals and healthcare facilities operate 24/7 with a constant flow of patients, visitors, medical staff, and vendors. Emergency entrances, pharmacy zones, ICU wards, and OPD areas each have distinct security and housekeeping requirements.\n\nMedical environments require personnel who can handle sensitive situations with composure. Crowd management during peak hours, patient safety, and infection control protocols add layers of complexity beyond standard security.",
    risks: [
      {
        title: "Emergency Area Access Control",
        description:
          "Emergency entrances and ICU zones require controlled access to prevent overcrowding and ensure medical staff can operate.",
      },
      {
        title: "Pharmacy and Drug Security",
        description:
          "Pharmacy storage and controlled substance areas need dedicated monitoring to prevent theft and diversion.",
      },
      {
        title: "Crowd Management",
        description:
          "OPD waiting areas, billing counters, and visiting hours create crowd surges that require organized management.",
      },
      {
        title: "Infection Control Compliance",
        description:
          "Housekeeping staff must follow strict protocols for sanitation, waste disposal, and surface disinfection in medical areas.",
      },
    ],
    approach:
      "We deploy security personnel and housekeeping staff trained for healthcare environments. Guards are briefed on patient privacy, emergency protocols, and how to handle sensitive situations without escalation.\n\nHousekeeping teams follow infection control protocols for different zones of the hospital. A site supervisor coordinates with hospital administration to ensure that shift schedules, coverage, and service standards align with the facility's operational needs.",
    industryCta: {
      heroCtaLabel: "Discuss Your Hospital Security",
      finalHeading: "Ready to discuss your hospital security?",
      finalSupporting:
        "Share your healthcare facility's requirements and we will propose the right security and housekeeping solution.",
      finalPrimaryLabel: "Discuss Your Hospital Requirement",
    },
  },
  {
    slug: "schools",
    name: "Schools",
    icon: "GraduationCap",
    description:
      "Security services for educational institutions including schools and colleges, with guards trained in campus safety and child protection protocols.",
    relevantServiceSlugs: [
      "security-guards",
      "housekeeping",
    ],
    heroSubtitle:
      "Security and housekeeping for educational institutions.",
    environment:
      "Schools and colleges have predictable high-traffic patterns during drop-off, lunch, and dismissal hours. Campus grounds, entry gates, and common areas need monitoring during these peak windows.\n\nBeyond student safety, educational institutions require personnel who can manage visitor access for parents, vendors, and events while maintaining a calm and approachable presence on campus.",
    risks: [
      {
        title: "Campus Access Control",
        description:
          "Managing parent visits, vendor deliveries, and event attendees without disrupting the learning environment.",
      },
      {
        title: "Student Safety During Peak Hours",
        description:
          "Drop-off and dismissal periods create congestion and require organized management to prevent incidents.",
      },
      {
        title: "After-Hours Campus Security",
        description:
          "Empty campus grounds during evenings and weekends are vulnerable to trespassing and vandalism.",
      },
      {
        title: "Event and Function Security",
        description:
          "Annual days, sports events, and parent-teacher meetings bring large crowds that require crowd management support.",
      },
    ],
    approach:
      "SSCSS deploys security personnel trained in campus safety and child protection protocols. Guards are positioned at entry gates, parking areas, and common zones during peak hours.\n\nFor housekeeping, we ensure that classrooms, laboratories, and common areas are maintained to hygiene standards. A dedicated coordinator works with the school administration to plan coverage for regular days and special events.",
    industryCta: {
      heroCtaLabel: "Discuss Your School Security",
      finalHeading: "Ready to discuss your school security?",
      finalSupporting:
        "Tell us about your campus and we will recommend the right security and housekeeping solution.",
      finalPrimaryLabel: "Discuss Your School Requirement",
    },
  },
  {
    slug: "hotels",
    name: "Hotels",
    icon: "Hotel",
    description:
      "Security, front office, and housekeeping services for hotels and hospitality establishments, maintaining guest safety and property standards.",
    relevantServiceSlugs: [
      "security-guards",
      "housekeeping",
      "front-office-management",
      "event-security",
    ],
    heroSubtitle:
      "Security, housekeeping, and front office for hospitality establishments.",
    environment:
      "Hotels operate with a constant flow of guests, staff, and service providers across multiple zones — lobbies, guest floors, banquet halls, kitchens, and parking areas. Each zone has different security and housekeeping standards.\n\nGuest safety, property protection, and service quality are inseparable in hospitality. Security must be discreet yet effective, and housekeeping standards directly impact guest experience and reviews.",
    risks: [
      {
        title: "Guest Floor Access Control",
        description:
          "Restricting access to guest floors while maintaining a seamless experience for checked-in guests and their visitors.",
      },
      {
        title: "Banquet and Event Security",
        description:
          "Weddings, conferences, and corporate events bring large external crowds that require crowd management and asset protection.",
      },
      {
        title: "Back-of-House Security",
        description:
          "Kitchens, storage areas, and staff zones need monitoring to prevent theft and ensure operational integrity.",
      },
      {
        title: "Housekeeping Quality Consistency",
        description:
          "Guest rooms, common areas, and event spaces must be maintained to hotel standards across all shifts.",
      },
    ],
    approach:
      "We provide security and housekeeping personnel trained for hospitality environments. Guards are briefed on guest interaction protocols and how to maintain security without disrupting the guest experience.\n\nHousekeeping teams follow property-specific cleaning standards and shift schedules. A site coordinator works with hotel management to align staffing with occupancy levels, event schedules, and seasonal demand.",
    industryCta: {
      heroCtaLabel: "Discuss Your Hotel Security",
      finalHeading: "Ready to discuss your hotel security?",
      finalSupporting:
        "Share your property's requirements and we will propose the right security, housekeeping, and staffing solution.",
      finalPrimaryLabel: "Discuss Your Hotel Requirement",
    },
  },
  {
    slug: "commercial-buildings",
    name: "Commercial Buildings",
    icon: "Store",
    description:
      "Integrated security and facility management for commercial buildings, shopping centers, and mixed-use properties.",
    relevantServiceSlugs: [
      "security-guards",
      "housekeeping",
      "corporate-security",
      "event-security",
    ],
    heroSubtitle:
      "Security and facility management for commercial properties.",
    environment:
      "Commercial buildings house multiple tenants with varying operating hours, visitor patterns, and security requirements. Lobbies, parking structures, common areas, and individual tenant floors all need coordinated coverage.\n\nShopping centers and mixed-add additional complexity with high foot traffic, retail asset protection, and event hosting. Security must balance visibility with approachability across all zones.",
    risks: [
      {
        title: "Multi-Tenant Coordination",
        description:
          "Different tenants have different access requirements, operating hours, and security expectations that must be accommodated.",
      },
      {
        title: "Retail Asset Protection",
        description:
          "Shopping centers face shoplifting, return fraud, and inventory shrinkage that require dedicated monitoring.",
      },
      {
        title: "Parking Structure Security",
        description:
          "Multi-level parking is a common incident point for vehicle theft, break-ins, and personal safety concerns.",
      },
      {
        title: "Event and Peak Traffic Management",
        description:
          "Sales events, holiday seasons, and promotional activities create crowd surges that require additional coverage.",
      },
    ],
    approach:
      "SSCSS designs a security plan that covers all tenant zones, common areas, and parking structures. Shift patterns are planned around the building's operating hours and tenant-specific requirements.\n\nFor housekeeping, we maintain cleanliness standards across lobbies, corridors, and common facilities. A dedicated account manager coordinates with the building management to handle staffing adjustments, incident reporting, and service quality reviews.",
    industryCta: {
      heroCtaLabel: "Discuss Your Building Security",
      finalHeading: "Ready to discuss your building security?",
      finalSupporting:
        "Tell us about your commercial property and we will recommend the right security and facility management solution.",
      finalPrimaryLabel: "Discuss Your Property Requirement",
    },
  },
  {
    slug: "business-parks",
    name: "Business Parks",
    icon: "Trees",
    description:
      "Comprehensive security solutions for business parks and SEZs, including perimeter security, access control, and multi-client coordination.",
    relevantServiceSlugs: [
      "corporate-security",
      "security-guards",
      "ex-army-security-guards",
    ],
    heroSubtitle:
      "Perimeter security and access control for business parks and SEZs.",
    environment:
      "Business parks and SEZs spread across large campuses with multiple buildings, shared infrastructure, and diverse tenants. Perimeter security, internal road networks, and common amenities require coordinated monitoring.\n\nMulti-client environments demand a security provider who can work with different tenant requirements while maintaining a unified campus-wide security standard. Visitor management and vehicle access add logistical complexity.",
    risks: [
      {
        title: "Perimeter and Campus Access",
        description:
          "Large campus perimeters with multiple entry points for vehicles and pedestrians need structured access control.",
      },
      {
        title: "Multi-Tenant Security Standards",
        description:
          "Different tenants may have different security requirements that must be balanced within a unified campus framework.",
      },
      {
        title: "Vehicle and Parking Management",
        description:
          "High vehicle volumes during peak hours create congestion and access challenges that impact security and operations.",
      },
      {
        title: "Common Area Monitoring",
        description:
          "Shared amenities, food courts, and open spaces across the campus require continuous monitoring.",
      },
    ],
    approach:
      "We deploy trained security personnel across perimeter gates, internal checkpoints, and common areas. For high-security requirements, we provide ex-army security guards with experience in structured access control environments.\n\nA campus-level coordinator works with the business park management and individual tenants to align security protocols, shift schedules, and incident response procedures.",
    industryCta: {
      heroCtaLabel: "Discuss Your Park Security",
      finalHeading: "Ready to discuss your park security?",
      finalSupporting:
        "Share your business park's requirements and we will propose the right security solution.",
      finalPrimaryLabel: "Discuss Your Business Park Requirement",
    },
  },
  {
    slug: "construction-sites",
    name: "Construction Sites",
    icon: "HardHat",
    description:
      "Security and labour solutions for construction sites, including material protection, access control, and skilled/unskilled worker deployment.",
    relevantServiceSlugs: [
      "security-guards",
      "industrial-security",
      "skilled-labour",
      "unskilled-labour",
    ],
    heroSubtitle:
      "Site security and workforce deployment for construction projects.",
    environment:
      "Construction sites have open perimeters, high-value materials, and expensive equipment stored in temporary or semi-secure conditions. Worker access, material delivery, and equipment movement happen throughout the day.\n\nSite conditions change rapidly as construction progresses, requiring security and labour plans that adapt to evolving layouts and risk profiles. Night security is critical when the site is unoccupied.",
    risks: [
      {
        title: "Material and Equipment Theft",
        description:
          "Construction materials, power tools, and heavy equipment are high-value targets, especially during off-hours.",
      },
      {
        title: "Unauthorized Site Access",
        description:
          "Open perimeters allow unauthorized entry, creating safety and liability risks for the project.",
      },
      {
        title: "Worker Safety and Access Control",
        description:
          "Managing entry and exit of large numbers of workers across multiple shifts requires structured access control.",
      },
      {
        title: "Progressive Site Vulnerability",
        description:
          "As construction progresses, the site layout changes and new zones become exposed, requiring ongoing security reassessment.",
      },
    ],
    approach:
      "SSCSS deploys site security personnel trained in construction environments. Guards are positioned at entry points and conduct regular perimeter patrol, with shift schedules designed around work hours and material delivery windows.\n\nFor labour requirements, we provide skilled and unskilled workers who can be deployed based on project phase and workload. A site coordinator manages attendance, shift rotations, and coordination with the project management team.",
    industryCta: {
      heroCtaLabel: "Discuss Your Site Security",
      finalHeading: "Ready to discuss your site security?",
      finalSupporting:
        "Tell us about your construction project and we will recommend the right security and labour solution.",
      finalPrimaryLabel: "Discuss Your Construction Requirement",
    },
  },
  {
    slug: "government-institutions",
    name: "Government Institutions",
    icon: "Landmark",
    description:
      "Security services for government buildings and institutions, with personnel meeting government security standards and protocols.",
    relevantServiceSlugs: [
      "security-guards",
      "ex-army-security-guards",
      "corporate-security",
    ],
    heroSubtitle:
      "Security services for government buildings and institutions.",
    environment:
      "Government buildings operate with strict access protocols, visitor management procedures, and restricted zones that require trained security personnel. Public-facing areas, offices, and secure sections each need different access control measures.\n\nProtocol compliance, documentation, and reporting standards are higher in government environments. Personnel deployed must understand the chain of command and follow established procedures without deviation.",
    risks: [
      {
        title: "Public Area Access Control",
        description:
          "Government buildings serve large numbers of public visitors daily, requiring efficient and secure access management.",
      },
      {
        title: "Restricted Zone Security",
        description:
          "Classified offices, record rooms, and secure areas require personnel with appropriate clearance and discipline.",
      },
      {
        title: "Protocol Compliance",
        description:
          "Government security standards demand strict adherence to procedures, documentation, and reporting requirements.",
      },
      {
        title: "Event and VIP Security",
        description:
          "Official events, VIP visits, and public functions require additional security planning and coordination.",
      },
    ],
    approach:
      "We deploy ex-army security guards and trained personnel who understand government security protocols and reporting requirements. Personnel are briefed on the specific access control procedures, restricted zones, and chain of command for each institution.\n\nA dedicated coordinator ensures that shift schedules, attendance, and performance meet the institution's standards. Regular supervisory audits verify that all procedures are being followed consistently.",
    industryCta: {
      heroCtaLabel: "Discuss Your Security Requirement",
      finalHeading: "Ready to discuss your security requirement?",
      finalSupporting:
        "Share your institution's requirements and we will propose the right security solution.",
      finalPrimaryLabel: "Discuss Your Institution Requirement",
    },
  },
];

/** Get an industry by its slug */
export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES.find((industry) => industry.slug === slug);
}

/** Utility: get industries relevant to a specific service */
export function getIndustriesForService(
  serviceSlug: string,
): Industry[] {
  return INDUSTRIES.filter((ind) =>
    ind.relevantServiceSlugs.includes(serviceSlug),
  );
}
