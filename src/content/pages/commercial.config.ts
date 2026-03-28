import { siteConfig } from "@/content/site.config";

export const commercialConfig = {
  meta: {
    title: "Commercial Pest Control Services | Ridgeline Pest Defence",
    description: "Protect your business with industry-compliant commercial pest control. Same-day quotes, minimal disruption, and specialized programs for food service, healthcare, hospitality, and manufacturing."
  },
  hero: {
    badge: "Commercial Services",
    heading: "Commercial Pest Control Services",
    subtitle:
      "One rodent sighting can cost you a health inspection, a customer, or a contract. We build pest management programs that protect your operations, reputation, and bottom line.",
    pills: ["Industry Compliant", "Minimal Disruption", "Thorough Inspection", "Service within 24 Hours"],
    badges: ["Licensed & Insured", "Satisfaction Guaranteed"],
    cta: {
      primary: { label: "Get a Same-Day Quote", href: "/contact" },
      phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
    },
    backgroundAlt: "Ridgeline technician servicing a commercial facility",
  },

  certifications: {
    heading: "Industry-Specific Pest Management Solutions",
    description:
      "Specialized commercial programs tailored to your industry\u2019s requirements — helping you stay compliant, protect your reputation, and avoid costly shutdowns.",
    badges: [
      { label: "Food Safety Certified", icon: "food-safety" as const },
      { label: "GreenPro Certified", icon: "greenpro" as const },
      { label: "QualityPro Canada", icon: "qualitypro" as const },
    ],
    features: [
      { title: "Industry-Specific Solutions", icon: "industry" as const },
      { title: "Regulatory Compliance", icon: "compliance" as const },
      { title: "Fast Response", icon: "clock" as const },
      { title: "Detailed Documentation", icon: "document" as const },
    ],
  },

  industryGrid: {
    heading: "Industries We Serve",
    description:
      "Customized pest management programs for commercial and industrial sectors — each built around the specific risks your industry faces.",
    industries: [
      {
        title: "Food & Beverage Processing",
        description: "HACCP-compliant rodent exclusion, cockroach monitoring, and fly control programs protecting production lines and cold storage facilities.",
        icon: "factory" as const,
        relatedServices: ["rodent-control", "cockroach-control", "fly-control"],
      },
      {
        title: "Foodservice",
        description: "Cockroach and fly management that keeps restaurant kitchens audit-ready with scheduled treatments, drain maintenance, and real-time monitoring.",
        icon: "restaurant" as const,
        relatedServices: ["cockroach-control", "ant-control", "fly-control"],
      },
      {
        title: "Government",
        description: "Rodent and wildlife management for public buildings, social housing, and municipal infrastructure with full compliance documentation.",
        icon: "government" as const,
        relatedServices: ["rodent-control", "ant-control", "wildlife-control"],
      },
      {
        title: "Healthcare",
        description: "Hospital-grade bed bug heat treatment, fly control, and ant management meeting strict sterile environment and infection-control standards.",
        icon: "healthcare" as const,
        relatedServices: ["ant-control", "cockroach-control", "fly-control"],
      },
      {
        title: "Hospitality",
        description: "Discreet bed bug detection, cockroach prevention, and rodent exclusion that protects guest experience and online reviews.",
        icon: "hospitality" as const,
        relatedServices: ["bed-bug-control", "cockroach-control", "ant-control"],
      },
      {
        title: "Pharmaceutical",
        description: "Rodent and insect contamination prevention for labs, clean rooms, and temperature-controlled storage areas with audit-ready reporting.",
        icon: "pharma" as const,
        relatedServices: ["rodent-control", "cockroach-control", "fly-control"],
      },
      {
        title: "Logistics",
        description: "Rodent exclusion, bird deterrent systems, and wildlife monitoring across warehouses, loading docks, and distribution centres.",
        icon: "logistics" as const,
        relatedServices: ["rodent-control", "bird-control", "wildlife-control"],
      },
      {
        title: "Multifamily",
        description: "Building-wide bed bug, cockroach, and rodent programs that stop infestations from spreading unit to unit across apartments and condos.",
        icon: "multifamily" as const,
        relatedServices: ["bed-bug-control", "cockroach-control", "rodent-control"],
      },
      {
        title: "Office Property Management",
        description: "Off-hours ant, cockroach, and rodent service for offices and co-working spaces with minimal disruption to tenants and staff.",
        icon: "office" as const,
        relatedServices: ["ant-control", "cockroach-control", "rodent-control"],
      },
      {
        title: "Retail",
        description: "Ant and rodent protection that keeps shelves clean, backrooms pest-free, and customers confident in your store environment.",
        icon: "retail" as const,
        relatedServices: ["ant-control", "cockroach-control", "rodent-control"],
      },
      {
        title: "Education",
        description: "Child-safe ant, rodent, and wildlife treatments for schools, daycare centres, and university campuses with parent-friendly reporting.",
        icon: "education" as const,
        relatedServices: ["ant-control", "rodent-control", "wildlife-control"],
      },
      {
        title: "Manufacturing",
        description: "Rodent, bird, and fly management for production lines with minimal downtime, full documentation, and regulatory compliance support.",
        icon: "manufacturing" as const,
        relatedServices: ["rodent-control", "bird-control", "fly-control"],
      },
    ],
  },

  services: {
    heading: "Commercial Pest Control Services",
    description:
      "Targeted services designed for commercial environments — effective solutions with minimal disruption to your operations.",
    items: [
      {
        title: "Integrated Pest Management (IPM)",
        description:
          "A science-based approach combining inspection, monitoring, sanitation guidance, and targeted treatment. IPM reduces chemical use by up to 80% while delivering better long-term results.",
      },
      {
        title: "Fly Control Programs",
        description:
          "UV light traps, drain treatments, and exclusion measures for restaurants, food processing, and healthcare facilities. One fly carries up to 6 million bacteria.",
      },
      {
        title: "Bird Control Services",
        description:
          "Netting, spikes, deterrent systems, and exclusion work for warehouses, loading docks, and rooftops. Bird droppings are corrosive and carry over 60 transmittable diseases.",
      },
      {
        title: "Rodent Management",
        description:
          "Bait stations, exclusion sealing, and monitoring systems for commercial properties. A single mouse produces 75 droppings per day and contaminates 10x more food than it eats.",
      },
      {
        title: "Cockroach Control",
        description:
          "Gel bait, growth regulators, and crack-and-crevice treatments for kitchens, break rooms, and storage areas. German cockroaches can trigger asthma attacks in enclosed spaces.",
      },
      {
        title: "Bed Bug Treatment",
        description:
          "Heat treatment and chemical application for hotels, multifamily buildings, and shelters. Early detection saves thousands — proactive monitoring programs included.",
      },
    ],
  },

  approach: {
    heading: "The Commercial Pest Control Approach",
    description:
      "Commercial pest control requires discretion, compliance documentation, and zero disruption. Here\u2019s how your business gets all three.",
    items: [
      "Minimize disruption to your business operations with off-hours scheduling",
      "Provide preventative solutions designed to stop problems before they start",
      "Discreet and professional — your customers never notice a thing",
      "Include staff education on pest prevention best practices at no extra charge",
    ],
    responseCallout:
      "Emergency commercial service available within 24 hours — call for urgent situations",
  },

  faq: {
    heading: "Commercial Pest Control FAQ",
    description: "Common questions about commercial pest management services.",
    faqs: [
      {
        question: "What documentation do you provide for regulatory compliance?",
        answer: "We provide detailed service reports, material safety data sheets, treatment logs, and inspection certificates. All documentation is digitally accessible and audit-ready, meeting requirements for health departments, insurance audits, and industry certifications."
      },
      {
        question: "Do you offer after-hours service for commercial clients?",
        answer: "Yes, we schedule most commercial services during off-hours to minimize disruption. Emergency services are available 24/7, and we can arrange weekend or overnight treatments for urgent situations."
      },
      {
        question: "How does pricing work for multi-location businesses?",
        answer: "We offer volume discounts for multi-location accounts and can structure contracts for quarterly, semi-annual, or annual service packages. Each location receives a customized treatment plan based on its specific risks and requirements."
      },
      {
        question: "What are typical contract terms for commercial pest control?",
        answer: "Standard contracts are 12 months with monthly, bi-monthly, or quarterly service intervals. We offer flexible terms for seasonal businesses and can include emergency call-out provisions at no additional charge."
      },
      {
        question: "Are your technicians certified for commercial work?",
        answer: "All our technicians are PMRA-licensed and receive ongoing training in commercial pest management. Many hold specialized certifications for food processing, healthcare, and other regulated industries."
      },
      {
        question: "How quickly can you respond to a commercial pest emergency?",
        answer: "We guarantee commercial emergency response within 24 hours, with same-day service available for critical situations. Priority clients can arrange dedicated emergency response within 4 hours."
      }
    ]
  },

  cta: {
    heading: "Protect Your Business Today",
    description:
      "Talk to a commercial pest management specialist for a customized assessment and quote.",
    primaryCta: { label: "Get a Same-Day Quote", href: "/contact" },
  },
} as const;

export type CommercialConfig = typeof commercialConfig;
