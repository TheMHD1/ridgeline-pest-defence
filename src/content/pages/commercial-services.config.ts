import { siteConfig } from "@/content/site.config";

export interface CommercialServicePage {
  slug: string;
  hero: {
    badge: string;
    heading: string;
    subtitle: string;
    pills: string[];
    badges: string[];
    cta: {
      primary: { label: string; href: string };
      phone: { label: string; href: string };
    };
    backgroundAlt: string;
    heroImageKey?: string;
  };
  pestTypes: {
    heading: string;
    description: string;
    pests: { name: string; description: string; icon: string }[];
  };
  industryTypes: {
    heading: string;
    description: string;
    industries: { name: string; description: string }[];
  };
  serviceDetail: {
    heading: string;
    description: string;
    features: { title: string; description: string }[];
  };
  speciesProtocols?: {
    heading: string;
    description: string;
    protocols: {
      species: string;
      commercialRisk: string;
      treatmentApproach: string;
      facilitiesAffected: string;
      regulatoryNote?: string;
    }[];
  };
  testimonials: {
    heading: string;
    reviews: { name: string; role: string; text: string; rating: number }[];
  };
  emergencyCta?: {
    heading: string;
    phone: { label: string; href: string };
    responseTime: string;
  };
  cta: {
    heading: string;
    description: string;
    primaryCta: { label: string; href: string };
  };
  seo: {
    title: string;
    description: string;
  };
}

export const commercialServicesConfig: CommercialServicePage[] = [
  {
    slug: "commercial-restaurant-pest-control",
    hero: {
      badge: "Restaurant Services",
      heading: "Restaurant Pest Control Services",
      subtitle:
        "A single health code violation can close your doors. We keep kitchens audit-ready with scheduled treatments, real-time monitoring, and full compliance documentation.",
      pills: ["Health Code Compliant", "Kitchen-Safe Products", "After-Hours Service", "Audit Documentation"],
      badges: ["Food Safety Certified", "Licensed & Insured"],
      cta: {
        primary: { label: "Book Your Inspection", href: "/contact" },
        phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
      },
      backgroundAlt: "Ridgeline technician inspecting a commercial restaurant kitchen",
      heroImageKey: "commercial",
    },
    pestTypes: {
      heading: "Common Restaurant Pests",
      description: "These are the pests that put restaurants at risk for health code violations and lost revenue.",
      pests: [
        { name: "Cockroaches", description: "German cockroaches thrive in warm kitchens. A single egg case produces 30\u201340 nymphs — and they mature in 6 weeks.", icon: "cockroach" },
        { name: "Rodents", description: "Mice and rats contaminate food, chew wiring, and leave droppings that trigger automatic health inspection failures.", icon: "rodent" },
        { name: "Ants", description: "Grease ants and pharaoh ants invade food prep areas. Pharaoh ants are resistant to most over-the-counter sprays.", icon: "ant" },
        { name: "Flies", description: "A single house fly carries over 6 million bacteria. Fruit flies breed in floor drains most restaurants forget to treat.", icon: "fly" },
      ],
    },
    industryTypes: {
      heading: "Restaurant Types We Serve",
      description: "Every kitchen is different. We customize programs based on your equipment, layout, and service hours.",
      industries: [
        { name: "Full-Service Restaurants", description: "Dining rooms, kitchens, and bar areas" },
        { name: "Fast Food & QSR", description: "High-volume kitchens with drive-through service" },
        { name: "Cafeterias & Buffets", description: "Open food displays and high-traffic service lines" },
        { name: "Catering Operations", description: "Prep kitchens and mobile food service" },
        { name: "Commercial Kitchens", description: "Ghost kitchens and shared prep spaces" },
        { name: "Bars & Pubs", description: "Beverage storage, ice machines, and bar drains" },
        { name: "Hotels & Resorts", description: "Multi-outlet food and beverage programs" },
        { name: "Food Processing", description: "Production lines, cold storage, and shipping areas" },
      ],
    },
    serviceDetail: {
      heading: "Our Restaurant Pest Control Program",
      description: "A proactive system designed around your inspection schedule — not reactive visits after a problem.",
      features: [
        { title: "Weekly or Bi-Weekly Service", description: "Scheduled visits timed around your busiest periods. We work after hours so your kitchen never stops." },
        { title: "Real-Time Monitoring", description: "Bait stations and glue traps checked on every visit with digital logs your inspector can review." },
        { title: "Compliance Documentation", description: "Service reports, treatment logs, and corrective action records ready for any audit." },
        { title: "Staff Training", description: "Brief, practical training sessions on sanitation, storage, and early warning signs — included at no extra cost." },
      ],
    },
    testimonials: {
      heading: "What Restaurant Owners Say",
      reviews: [
        { name: "Marco Pellegrini", role: "Owner, Pellegrini\u2019s Trattoria", text: "We switched to Ridgeline after our second health inspection flag. Six months later — zero violations and the inspector actually complimented our documentation.", rating: 5 },
        { name: "Lisa Tran", role: "General Manager, The Elm Room", text: "Their after-hours service means my kitchen staff never sees a technician. The monitoring reports have made our audit prep effortless.", rating: 5 },
        { name: "James Okafor", role: "Franchise Owner, 3 GTA Locations", text: "Ridgeline manages all three of my locations. Consistent service, one point of contact, and no surprises on inspection day.", rating: 4 },
      ],
    },
    emergencyCta: {
      heading: "Emergency Restaurant Pest Response",
      phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
      responseTime: "Same-day emergency service — we respond within 2 hours for active infestations",
    },
    cta: {
      heading: "Keep Your Kitchen Audit-Ready",
      description: "Talk to a commercial pest specialist about a program built around your restaurant\u2019s schedule.",
      primaryCta: { label: "Get Your Restaurant Quote", href: "/contact" },
    },
    seo: {
      title: "Restaurant Pest Control Services",
      description: "Health code-compliant pest control for Ontario restaurants. Scheduled treatments, compliance docs, and 24-hour emergency response.",
    },
  },
  {
    slug: "commercial-office-pest-control",
    hero: {
      badge: "Office Services",
      heading: "Office Building Pest Control",
      subtitle:
        "Your tenants expect a pest-free workplace. We deliver discreet, off-hours service with zero disruption to your operations — and documentation your property manager can rely on.",
      pills: ["Discreet Service", "Off-Hours Scheduling", "Property Management Reports", "Tenant-Safe Products"],
      badges: ["Licensed & Insured", "Satisfaction Guaranteed"],
      cta: {
        primary: { label: "Book Your Assessment", href: "/contact" },
        phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
      },
      backgroundAlt: "Ridgeline technician servicing a commercial office building",
      heroImageKey: "commercial",
    },
    pestTypes: {
      heading: "Common Office Building Pests",
      description: "Offices attract pests through break rooms, loading docks, and shared HVAC systems.",
      pests: [
        { name: "Mice", description: "Office mice nest in wall voids, ceiling tiles, and server rooms. They chew cables and contaminate break room surfaces overnight.", icon: "rodent" },
        { name: "Cockroaches", description: "Break room appliances and floor drains create ideal conditions. One cockroach sighting can trigger tenant complaints across a floor.", icon: "cockroach" },
        { name: "Ants", description: "Pavement ants enter through foundation cracks. Pharaoh ants spread through HVAC ductwork to multiple floors.", icon: "ant" },
        { name: "Spiders", description: "Common in storage rooms, parking garages, and mechanical spaces. Cobwebs in tenant-facing areas signal neglect.", icon: "spider" },
      ],
    },
    industryTypes: {
      heading: "Office Environments We Serve",
      description: "From single-tenant buildings to multi-floor complexes, we scale our program to match your property.",
      industries: [
        { name: "Corporate Offices", description: "Executive suites and open-plan workspaces" },
        { name: "Co-Working Spaces", description: "Shared kitchens and high-turnover tenant areas" },
        { name: "Professional Services", description: "Law firms, accounting offices, and consultancies" },
        { name: "Medical Offices", description: "Clinics and dental practices within office buildings" },
        { name: "Government Offices", description: "Municipal, provincial, and federal workspaces" },
        { name: "Mixed-Use Buildings", description: "Retail on ground floor with offices above" },
      ],
    },
    serviceDetail: {
      heading: "Our Office Pest Management Program",
      description: "Built for property managers who need reliable, documented service without tenant disruption.",
      features: [
        { title: "After-Hours Service", description: "All treatments happen evenings and weekends. Your tenants arrive to a clean, pest-free environment every morning." },
        { title: "Monitoring Network", description: "Tamper-resistant stations in mechanical rooms, loading docks, and common areas — checked and logged on every visit." },
        { title: "Property Manager Dashboard", description: "Digital service reports, trend data, and corrective action items delivered after every visit." },
        { title: "Tenant Communication Support", description: "Pre-written notices and FAQ sheets you can share with tenants when service is scheduled." },
      ],
    },
    testimonials: {
      heading: "What Property Managers Say",
      reviews: [
        { name: "Karen Whitfield", role: "Property Manager, Whitfield Commercial", text: "Ridgeline\u2019s reporting is the best I\u2019ve seen in 15 years of managing office properties. My owners get clear data, and tenants never complain.", rating: 5 },
        { name: "Raj Mehta", role: "Facilities Director, GTA Office Complex", text: "We had a mouse problem in the parking garage that three companies couldn\u2019t solve. Ridgeline sealed 40+ entry points in one visit. Problem gone.", rating: 5 },
        { name: "Sarah-Jane Bowman", role: "Building Manager, Downtown Hamilton", text: "The after-hours scheduling is a game-changer. Zero tenant disruption, and the monthly reports make my board meetings much easier.", rating: 5 },
      ],
    },
    emergencyCta: {
      heading: "Emergency Office Pest Response",
      phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
      responseTime: "Same-day emergency service — discreet after-hours response available",
    },
    cta: {
      heading: "Protect Your Property and Tenants",
      description: "Get a customized pest management program for your office building.",
      primaryCta: { label: "Start Protection Today", href: "/contact" },
    },
    seo: {
      title: "Professional Office Pest Management",
      description: "Discreet, off-hours pest control for Ontario office buildings. Property management reporting, tenant-safe treatments, and proactive monitoring.",
    },
  },
  {
    slug: "commercial-warehouse-pest-control",
    hero: {
      badge: "Warehouse Services",
      heading: "Commercial Warehouse Pest Control",
      subtitle:
        "Rodents cost warehouses millions in contaminated inventory and failed audits every year. Our exclusion-first approach seals the building, then monitors it — so problems stop before they start.",
      pills: ["Rodent Exclusion", "Integrated Monitoring", "Audit-Ready Documentation", "Loading Dock Protection"],
      badges: ["Licensed & Insured", "Satisfaction Guaranteed"],
      cta: {
        primary: { label: "Get a Same-Day Quote", href: "/contact" },
        phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
      },
      backgroundAlt: "Ridgeline technician inspecting a commercial warehouse",
    },
    pestTypes: {
      heading: "Common Warehouse Pests",
      description: "Large footprints, loading docks, and stored goods create ideal conditions for persistent infestations.",
      pests: [
        { name: "Rodents", description: "Norway rats chew through shipping containers. Mice nest in pallet wrap. Both contaminate inventory and trigger audit failures.", icon: "rodent" },
        { name: "Birds", description: "Pigeons and sparrows roost on racking and rafters. Droppings corrode equipment and contaminate product below.", icon: "bird" },
        { name: "Stored Product Insects", description: "Indian meal moths, grain beetles, and weevils infest stored goods. One contaminated pallet can spread through an entire bay.", icon: "beetle" },
        { name: "Cockroaches", description: "American cockroaches thrive in floor drains and break rooms. They spread to shipping areas and contaminate outbound product.", icon: "cockroach" },
      ],
    },
    industryTypes: {
      heading: "Warehouse Types We Serve",
      description: "Every warehouse has different risk points. We design programs around your layout, inventory, and traffic patterns.",
      industries: [
        { name: "Distribution Centres", description: "High-volume shipping and receiving areas" },
        { name: "Cold Storage", description: "Temperature-controlled environments with condensation risks" },
        { name: "E-Commerce Fulfilment", description: "Pick-pack-ship operations with frequent dock activity" },
        { name: "Food & Beverage Storage", description: "HACCP-compliant inventory environments" },
        { name: "Manufacturing Warehouses", description: "Raw material storage and finished goods staging" },
        { name: "Third-Party Logistics (3PL)", description: "Multi-client storage with varied product types" },
      ],
    },
    serviceDetail: {
      heading: "Our Warehouse Pest Management Program",
      description: "Exclusion-first. Monitor-always. Document-everything. Built for operations that can\u2019t afford downtime.",
      features: [
        { title: "Exclusion Sealing", description: "We seal dock levellers, utility penetrations, roof vents, and every gap larger than 6mm. Mice need just a pencil-width opening." },
        { title: "Perimeter Bait Stations", description: "Tamper-resistant exterior stations positioned at 15-metre intervals, checked and logged on every visit." },
        { title: "Interior Monitoring Network", description: "Glue boards, snap traps, and pheromone traps placed along walls, near docks, and in break rooms." },
        { title: "Audit-Ready Reporting", description: "BRC, SQF, and AIB-format documentation available. Digital records accessible to your quality team anytime." },
      ],
    },
    testimonials: {
      heading: "What Warehouse Managers Say",
      reviews: [
        { name: "Derek Fonseca", role: "Operations Manager, GTA Distribution", text: "Ridgeline sealed over 60 entry points in our 80,000-sqft facility. Our rodent catches dropped to zero within 8 weeks. Our auditor noticed.", rating: 5 },
        { name: "Priya Vasquez", role: "Quality Manager, Food Distribution Co.", text: "Their BRC-format reports saved our QA team hours of prep work. We passed our last audit with zero pest-related findings for the first time.", rating: 5 },
        { name: "Tom Brandt", role: "Facility Supervisor, 3PL Hamilton", text: "The exterior bait station network caught a rat migration from the neighbouring property before a single rodent entered our building. Proactive is the right word.", rating: 4 },
      ],
    },
    emergencyCta: {
      heading: "Emergency Warehouse Pest Response",
      phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
      responseTime: "Same-day emergency service — protecting inventory from contamination",
    },
    cta: {
      heading: "Protect Your Inventory and Operations",
      description: "Get a warehouse-specific pest management assessment and quote.",
      primaryCta: { label: "Schedule Warehouse Inspection", href: "/contact" },
    },
    seo: {
      title: "Warehouse Pest Prevention Programs",
      description: "Warehouse pest control with rodent exclusion, monitoring systems, and audit-ready documentation. Serving Ontario warehouses and distribution centres.",
    },
  },
  {
    slug: "commercial-healthcare-pest-control",
    hero: {
      badge: "Healthcare Services",
      heading: "Commercial Healthcare Pest Control",
      subtitle:
        "Sterile environments demand sterile pest management. Our hospital-grade programs use low-toxicity treatments that meet healthcare facility standards — with zero disruption to patient care.",
      pills: ["Hospital-Grade Treatment", "Sterile Environment Safe", "Compliance Documentation", "24-Hour Response"],
      badges: ["Licensed & Insured", "Healthcare Approved"],
      cta: {
        primary: { label: "Book Your Inspection", href: "/contact" },
        phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
      },
      backgroundAlt: "Ridgeline technician servicing a healthcare facility",
    },
    pestTypes: {
      heading: "Common Healthcare Facility Pests",
      description: "Healthcare environments face unique pest pressures from food service, laundry, and constant foot traffic.",
      pests: [
        { name: "Ants", description: "Pharaoh ants are the number-one ant pest in hospitals. They seek moisture and warmth, nesting inside walls near IV lines and sterile storage.", icon: "ant" },
        { name: "Cockroaches", description: "German cockroaches thrive in commercial kitchens and laundry rooms. They carry bacteria that pose serious risks in clinical settings.", icon: "cockroach" },
        { name: "Flies", description: "Drain flies breed in floor drains and moisture traps. Fruit flies contaminate cafeteria and patient food service areas.", icon: "fly" },
        { name: "Rodents", description: "Mice enter through loading docks and utility chases. In healthcare, rodent droppings near stored supplies can trigger regulatory action.", icon: "rodent" },
      ],
    },
    industryTypes: {
      heading: "Healthcare Facilities We Serve",
      description: "From emergency departments to long-term care, we adapt our approach to your facility\u2019s specific environment and regulatory requirements.",
      industries: [
        { name: "Hospitals", description: "Acute care facilities with sterile zones and patient wards" },
        { name: "Long-Term Care", description: "Nursing homes and assisted living residences" },
        { name: "Medical Clinics", description: "Walk-in clinics, specialist offices, and urgent care" },
        { name: "Dental Practices", description: "Sterilization areas and patient treatment rooms" },
        { name: "Laboratories", description: "Research labs, diagnostic facilities, and blood banks" },
        { name: "Rehabilitation Centres", description: "Inpatient and outpatient recovery facilities" },
      ],
    },
    serviceDetail: {
      heading: "Our Healthcare Pest Management Program",
      description: "Designed for environments where patient safety is non-negotiable and regulatory scrutiny is constant.",
      features: [
        { title: "Low-Toxicity Treatments", description: "Products selected for safety in clinical environments. Every treatment follows Health Canada guidelines for healthcare facilities." },
        { title: "Infection Control Coordination", description: "We work with your IC team to schedule treatments around patient care activities and sterile procedures." },
        { title: "Regulatory Documentation", description: "Complete service records formatted for public health inspections and accreditation audits." },
        { title: "Emergency Response", description: "24-hour callback for pest sightings in patient care areas. We understand that in healthcare, every hour matters." },
      ],
    },
    testimonials: {
      heading: "What Healthcare Administrators Say",
      reviews: [
        { name: "Dr. Anika Sharma", role: "Chief of Staff, Regional Hospital", text: "Ridgeline\u2019s infection control coordination sets them apart. They work around our surgical schedule and their documentation satisfies our accreditation requirements.", rating: 5 },
        { name: "Paul Dubois", role: "Facilities Manager, Long-Term Care", text: "Our residents are vulnerable. Ridgeline uses only low-toxicity products and their technicians understand the sensitivity of our environment. Trustworthy team.", rating: 5 },
        { name: "Nadine Tremblay", role: "Clinic Administrator, Walk-In Clinic", text: "Fast response and discreet service. A patient never has to know we had a pest issue. Their documentation made our public health inspection seamless.", rating: 5 },
      ],
    },
    emergencyCta: {
      heading: "Emergency Healthcare Pest Response",
      phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
      responseTime: "Priority 2-hour response for healthcare facilities — sterile environment protocols",
    },
    cta: {
      heading: "Protect Your Patients and Staff",
      description: "Talk to a healthcare pest specialist about a program designed for your facility.",
      primaryCta: { label: "Request Facility Assessment", href: "/contact" },
    },
    seo: {
      title: "Healthcare Pest Management Solutions",
      description: "Hospital-grade pest control for Ontario healthcare facilities. Low-toxicity treatments, infection control coordination, and compliance documentation.",
    },
  },
  {
    slug: "commercial-ant-control",
    hero: {
      badge: "Commercial Ant Control",
      heading: "Commercial Ant Control Services",
      subtitle:
        "Ants follow scent trails through your building\u2019s smallest cracks. We eliminate colonies at the source and seal the paths they use — so they don\u2019t come back tomorrow with reinforcements.",
      pills: ["Colony Elimination", "Species-Specific Treatment", "Entry Point Sealing", "Monitoring Program"],
      badges: ["Licensed & Insured", "Satisfaction Guaranteed"],
      cta: {
        primary: { label: "Get a Same-Day Quote", href: "/contact" },
        phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
      },
      backgroundAlt: "Ridgeline technician treating a commercial property for ants",
    },
    pestTypes: {
      heading: "Ant Species We Treat in Commercial Settings",
      description: "Different ant species require different treatment strategies. We identify the species first, then apply the right approach.",
      pests: [
        { name: "Pavement Ants", description: "The most common commercial ant in Ontario. They nest under foundations, sidewalks, and loading docks and invade through expansion joints.", icon: "ant" },
        { name: "Pharaoh Ants", description: "Tiny, persistent, and resistant to most sprays. Pharaoh ants form satellite colonies when disturbed — wrong treatment makes them worse.", icon: "ant" },
        { name: "Carpenter Ants", description: "They don\u2019t eat wood — they excavate it. A mature colony in a structural beam can compromise building integrity over time.", icon: "ant" },
        { name: "Little Black Ants", description: "Common in break rooms and kitchens. Colonies can number 100,000+ and they\u2019ll trail across counters, walls, and equipment.", icon: "ant" },
      ],
    },
    industryTypes: {
      heading: "Industries Most Affected by Ants",
      description: "Ants impact different businesses in different ways. We tailor our approach to your industry\u2019s specific risks.",
      industries: [
        { name: "Restaurants & Foodservice", description: "Health code violations and food contamination" },
        { name: "Offices", description: "Break room invasions and tenant complaints" },
        { name: "Healthcare", description: "Pharaoh ants near sterile supplies and IV lines" },
        { name: "Warehouses", description: "Foundation entry through expansion joints and dock seals" },
        { name: "Retail", description: "Customer-facing spaces and stockroom contamination" },
        { name: "Multifamily Housing", description: "Unit-to-unit spread through plumbing and electrical chases" },
      ],
    },
    serviceDetail: {
      heading: "Our Commercial Ant Control Program",
      description: "Species identification first. Targeted treatment second. Exclusion and monitoring to prevent recurrence.",
      features: [
        { title: "Species Identification", description: "We identify the exact species before treatment. Pharaoh ants require bait; carpenter ants require dust injection. Wrong approach = worse problem." },
        { title: "Colony Elimination", description: "Targeted baiting systems that workers carry back to the queen. Surface sprays kill scouts — bait kills colonies." },
        { title: "Entry Point Sealing", description: "Caulking, weatherstripping, and exclusion work at foundation cracks, utility penetrations, and window frames." },
        { title: "Ongoing Monitoring", description: "Scheduled inspections and bait station checks to catch new activity early — before trails form." },
      ],
    },
    speciesProtocols: {
      heading: "Species-Specific Treatment Protocols",
      description: "Different ant species require completely different approaches. Using the wrong treatment can make problems worse.",
      protocols: [
        {
          species: "Pharaoh Ants",
          commercialRisk: "High - healthcare facilities, food service",
          treatmentApproach: "Bait-only strategy (sprays cause budding and colony splitting)",
          facilitiesAffected: "Hospitals, restaurants, any warm indoor environment",
          regulatoryNote: "Critical for healthcare compliance - cannot disturb colonies"
        },
        {
          species: "Carpenter Ants",
          commercialRisk: "Structural damage - can compromise building integrity",
          treatmentApproach: "Structural assessment + targeted dust injection into voids",
          facilitiesAffected: "Buildings with moisture issues, wooden structures"
        },
        {
          species: "Odorous House Ants",
          commercialRisk: "Customer complaints, food contamination",
          treatmentApproach: "Perimeter exclusion + exterior baiting program",
          facilitiesAffected: "Restaurants, retail, any facility with accessible food"
        }
      ],
    },
    testimonials: {
      heading: "What Our Commercial Clients Say",
      reviews: [
        { name: "Angela Foster", role: "Restaurant Owner, Burlington", text: "We had pharaoh ants for months. Two other companies sprayed and made it worse. Ridgeline identified the species, used bait, and eliminated them in three weeks.", rating: 5 },
        { name: "Victor Lam", role: "Property Manager, Oakville", text: "Carpenter ants in the main beam of a heritage building. Ridgeline\u2019s dust injection saved us from a costly structural repair. Thorough and careful work.", rating: 5 },
        { name: "Diane Chow", role: "Facilities Coordinator, Hamilton Office Tower", text: "Pavement ants were coming up through every crack in the lobby. Ridgeline sealed and treated the entire ground floor. No ants since.", rating: 4 },
      ],
    },
    emergencyCta: {
      heading: "Emergency Commercial Ant Response",
      phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
      responseTime: "Same-day emergency service for active ant infestations in your facility",
    },
    cta: {
      heading: "Stop the Colony, Not Just the Scouts",
      description: "Get a commercial ant control assessment and species-specific treatment plan.",
      primaryCta: { label: "Request Ant Control Quote", href: "/contact" },
    },
    seo: {
      title: "Commercial Ant Elimination Services",
      description: "Commercial ant control across Ontario. Species-specific baiting for pavement, pharaoh & carpenter ants. Colony elimination guaranteed.",
    },
  },
  {
    slug: "commercial-cockroach-control",
    hero: {
      badge: "Commercial Cockroach Control",
      heading: "Commercial Cockroach Control",
      subtitle:
        "Cockroaches reproduce fast, hide well, and carry over 30 types of bacteria. Our targeted approach breaks the breeding cycle where it starts — in cracks, drains, and equipment gaps most treatments miss.",
      pills: ["Breeding Cycle Disruption", "Kitchen-Safe Products", "Crack & Crevice Treatment", "Follow-Up Monitoring"],
      badges: ["Licensed & Insured", "Food Safety Certified"],
      cta: {
        primary: { label: "Book Your Inspection", href: "/contact" },
        phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
      },
      backgroundAlt: "Ridgeline technician treating a commercial kitchen for cockroaches",
    },
    pestTypes: {
      heading: "Cockroach Species in Commercial Settings",
      description: "The two species you\u2019ll encounter most in Ontario commercial properties — and why they require different approaches.",
      pests: [
        { name: "German Cockroaches", description: "The most common commercial cockroach. They live in kitchens, reproduce every 28 days, and a single female produces 300,000 descendants in a year.", icon: "cockroach" },
        { name: "American Cockroaches", description: "Larger, slower to reproduce, but they thrive in floor drains, basements, and mechanical rooms. Often enter through sewer connections.", icon: "cockroach" },
        { name: "Brown-Banded Cockroaches", description: "Prefer warm, dry areas like offices and equipment rooms. They nest in electronics, behind wall plates, and above ceiling tiles.", icon: "cockroach" },
        { name: "Oriental Cockroaches", description: "Also called water bugs. They live in drains, pipe chases, and damp storage areas. Strong odour signals a significant population.", icon: "cockroach" },
      ],
    },
    industryTypes: {
      heading: "Industries Most Affected by Cockroaches",
      description: "Cockroaches are an equal-opportunity pest. These industries face the highest risk and regulatory consequences.",
      industries: [
        { name: "Restaurants & Commercial Kitchens", description: "Health code violations and forced closures" },
        { name: "Food Processing", description: "Product contamination and recall liability" },
        { name: "Hotels & Hospitality", description: "Guest complaints and negative online reviews" },
        { name: "Healthcare Facilities", description: "Asthma triggers and infection control risks" },
        { name: "Office Buildings", description: "Break room infestations and tenant complaints" },
        { name: "Warehouses & Storage", description: "Contamination of stored goods and packaging" },
      ],
    },
    serviceDetail: {
      heading: "Our Commercial Cockroach Control Program",
      description: "We target every life stage — eggs, nymphs, and adults — in the places cockroaches actually live, not just where you see them.",
      features: [
        { title: "Gel Bait Application", description: "Professional-grade gel bait placed in cracks, crevices, and harbourage areas. Cockroaches carry bait back to hiding spots, eliminating populations you can\u2019t see." },
        { title: "IGR Treatment", description: "Insect Growth Regulators prevent nymphs from maturing. This breaks the breeding cycle and stops population recovery." },
        { title: "Drain & Void Treatment", description: "Foam and dust applications in floor drains, wall voids, and equipment gaps where cockroaches actually nest." },
        { title: "Follow-Up Monitoring", description: "Sticky traps and scheduled re-inspections track population decline and catch any survivors before they reproduce." },
      ],
    },
    speciesProtocols: {
      heading: "Species-Specific Treatment Protocols",
      description: "Each cockroach species has different nesting preferences and requires tailored treatment approaches.",
      protocols: [
        {
          species: "German Cockroaches",
          commercialRisk: "Extreme - rapid reproduction, health code violations",
          treatmentApproach: "Bait-only strategy (sprays cause budding and population explosion)",
          facilitiesAffected: "Commercial kitchens, food service, warm equipment rooms",
          regulatoryNote: "Critical compliance concern - automatic violations in food facilities"
        },
        {
          species: "American Cockroaches",
          commercialRisk: "Contamination, customer complaints",
          treatmentApproach: "Perimeter exclusion + granular bait in drains and voids",
          facilitiesAffected: "Basements, floor drains, mechanical rooms, large facilities"
        },
        {
          species: "Oriental Cockroaches",
          commercialRisk: "Moisture-related infestations, structural damage indicators",
          treatmentApproach: "Moisture elimination + residual treatment in damp areas",
          facilitiesAffected: "Basements, crawl spaces, facilities with plumbing issues"
        },
        {
          species: "Brown-Banded Cockroaches",
          commercialRisk: "Electronics damage, upper-level infestations",
          treatmentApproach: "Upper-wall and ceiling-void treatment + dry bait placement",
          facilitiesAffected: "Office buildings, electronics areas, warm dry spaces"
        }
      ],
    },
    testimonials: {
      heading: "What Our Clients Say",
      reviews: [
        { name: "Chef Dominic Rossi", role: "Executive Chef, GTA Fine Dining", text: "German cockroaches in a kitchen are a nightmare. Ridgeline\u2019s gel bait approach eliminated them without shutting down service. Our inspector was impressed.", rating: 5 },
        { name: "Amira Hassan", role: "Building Manager, Mixed-Use Complex", text: "Cockroaches were spreading from the ground-floor restaurant to upper-floor offices. Ridgeline treated both and stopped the migration in two visits.", rating: 5 },
        { name: "Robert Macleod", role: "Warehouse Manager, Hamilton", text: "American cockroaches in our floor drains. Ridgeline\u2019s drain treatment and exclusion work cleared the problem. Monthly monitoring keeps it that way.", rating: 5 },
      ],
    },
    emergencyCta: {
      heading: "Emergency Cockroach Response",
      phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
      responseTime: "Same-day emergency service — rapid response for health-code-critical situations",
    },
    cta: {
      heading: "Break the Breeding Cycle",
      description: "Get a cockroach control assessment and targeted treatment plan for your commercial property.",
      primaryCta: { label: "Request Cockroach Treatment Plan", href: "/contact" },
    },
    seo: {
      title: "Commercial Cockroach Removal",
      description: "Commercial cockroach control across Ontario. Gel bait, IGR treatments, and monitoring for restaurants, offices, and warehouses. Certified technicians.",
    },
  },
  {
    slug: "commercial-rodent-control",
    hero: {
      badge: "Commercial Rodent Control",
      heading: "Commercial Rodent Control Services",
      subtitle:
        "A single mouse produces 75 droppings per day and contaminates 10\u00d7 more food than it eats. Our exclusion-first approach seals your building, eliminates existing populations, and monitors for new activity.",
      pills: ["Exclusion Sealing", "Population Elimination", "Continuous Monitoring", "Compliance Documentation"],
      badges: ["Licensed & Insured", "Satisfaction Guaranteed"],
      cta: {
        primary: { label: "Get a Same-Day Quote", href: "/contact" },
        phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
      },
      backgroundAlt: "Ridgeline technician installing rodent exclusion on a commercial building",
    },
    pestTypes: {
      heading: "Rodent Species in Commercial Settings",
      description: "Three species cause 99% of commercial rodent problems in Ontario. Each requires a different approach.",
      pests: [
        { name: "House Mice", description: "The most common commercial rodent. They squeeze through gaps as small as 6mm, nest in wall voids, and reproduce every 3 weeks.", icon: "rodent" },
        { name: "Norway Rats", description: "Burrowers that enter through foundation gaps and damaged drains. They gnaw through concrete, wood, and even aluminum to reach food sources.", icon: "rodent" },
        { name: "Roof Rats", description: "Climbers that enter through rooflines, vents, and utility cables. Common in warehouses with high racking and older buildings with soffit gaps.", icon: "rodent" },
      ],
    },
    industryTypes: {
      heading: "Industries Most Affected by Rodents",
      description: "Rodents are the number-one pest concern for commercial properties. These industries face the highest risk.",
      industries: [
        { name: "Restaurants & Foodservice", description: "Health code violations and forced closures" },
        { name: "Warehouses & Distribution", description: "Inventory contamination and audit failures" },
        { name: "Food Processing", description: "Product recalls and regulatory action" },
        { name: "Office Buildings", description: "Cable damage, fire risk, and tenant complaints" },
        { name: "Healthcare Facilities", description: "Disease risk in patient care areas" },
        { name: "Retail", description: "Product damage and customer complaints" },
        { name: "Multifamily Housing", description: "Unit-to-unit spread and tenant turnover" },
      ],
    },
    serviceDetail: {
      heading: "Our Commercial Rodent Control Program",
      description: "Exclusion first, elimination second, monitoring always. We stop the problem at the building envelope, not inside it.",
      features: [
        { title: "Building Exclusion", description: "Steel mesh, copper wool, and commercial-grade sealant at every entry point. Mice need 6mm. Rats need 12mm. We seal both." },
        { title: "Interior Elimination", description: "Snap traps, bait stations, and tracking powder in wall voids and ceiling plenums. Placed by species behaviour, not guesswork." },
        { title: "Exterior Monitoring", description: "Tamper-resistant bait stations at 15-metre intervals around the building perimeter. Checked and logged on every visit." },
        { title: "Emergency Response", description: "Same-day or next-day response for active rodent sightings in customer-facing or food-handling areas." },
      ],
    },
    speciesProtocols: {
      heading: "Species-Specific Treatment Protocols",
      description: "Each rodent species has different behavior patterns and entry methods requiring specialized approaches.",
      protocols: [
        {
          species: "House Mice",
          commercialRisk: "Food contamination, rapid reproduction",
          treatmentApproach: "Exclusion-first approach with snap traps, no rodenticides near food areas",
          facilitiesAffected: "Any facility with 6mm gaps - restaurants, offices, warehouses",
          regulatoryNote: "Require 6mm gap exclusion - pencil-width opening is sufficient entry"
        },
        {
          species: "Norway Rats",
          commercialRisk: "Structural damage, gnawing through utilities",
          treatmentApproach: "Burrow fumigation + concrete-rated sealant + tamper-resistant exterior stations",
          facilitiesAffected: "Ground-level facilities, areas with foundation access",
          regulatoryNote: "Require structural repair approach - can gnaw through standard materials"
        },
        {
          species: "Roof Rats",
          commercialRisk: "Upper-level contamination, roofline damage",
          treatmentApproach: "Roofline exclusion + vertical bait placement + tree/shrub setback",
          facilitiesAffected: "Multi-story buildings, warehouses with high storage, older buildings",
          regulatoryNote: "Focus on 8-foot elevation and above - climbing specialists"
        }
      ],
    },
    testimonials: {
      heading: "What Our Commercial Clients Say",
      reviews: [
        { name: "Ian Crawford", role: "Operations Director, National Logistics", text: "Ridgeline sealed our 120,000-sqft distribution centre and installed 80+ exterior stations. Rodent catches went from 12/month to zero in 10 weeks.", rating: 5 },
        { name: "Michelle Fournier", role: "Restaurant Group Owner, 5 GTA Locations", text: "Norway rats were entering through a damaged drain. Ridgeline found the entry point, sealed it, and cleared the population. All five locations are now rodent-free.", rating: 5 },
        { name: "Andrew Kim", role: "Property Manager, Hamilton Office Complex", text: "Mice in the server room were chewing cables. Ridgeline sealed every utility penetration on the building and installed monitoring. No incidents in 14 months.", rating: 5 },
      ],
    },
    emergencyCta: {
      heading: "Emergency Rodent Response",
      phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
      responseTime: "Same-day emergency service — rapid exclusion and population control",
    },
    cta: {
      heading: "Seal Your Building. Stop the Problem.",
      description: "Get a commercial rodent control assessment and exclusion plan.",
      primaryCta: { label: "Request Rodent Exclusion Quote", href: "/contact" },
    },
    seo: {
      title: "Commercial Rodent Control",
      description: "Commercial rodent control across Ontario. Building exclusion, population elimination, and continuous monitoring for mice and rats.",
    },
  },
];

export function getCommercialServiceBySlug(slug: string): CommercialServicePage | undefined {
  return commercialServicesConfig.find((page) => page.slug === slug);
}

export function getAllCommercialServiceSlugs(): string[] {
  return commercialServicesConfig.map((page) => page.slug);
}
