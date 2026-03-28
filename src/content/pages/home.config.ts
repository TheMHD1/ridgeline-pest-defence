import { siteConfig } from "@/content/site.config";

export const homeConfig = {
  meta: {
    title: "Pest Control Services | Ridgeline Pest Defence",
    description: "Professional pest control services serving the Greater Toronto Area. Licensed technicians, eco-friendly treatments, and 12-month guarantee. Same-day service available.",
  },
  hero: {
    badges: [
      `Serving ${siteConfig.serviceArea} Since 2015`,
      "PMRA Licensed, $2M Coverage",
    ],
    heading: "Pest Control That Lasts. Guaranteed.",
    subtext:
      "Ridgeline Pest Defence finds the problem, fixes it, and seals it — quiet homes, confident owners.",
    serviceTypes: ["Residential", "Commercial"] as const,
    searchPlaceholder: "Search for mice, ants, wasps...",
    processPills: [
      { step: 1, label: "Assess" },
      { step: 2, label: "Treat" },
      { step: 3, label: "Seal" },
      { step: 4, label: "Guarantee" },
    ],
    cta: {
      primary: { label: "Book Your Inspection", href: "/contact" },
      phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
    },
    backgroundAlt: "Ridgeline Pest Defence technician with customer",
  },

  seasonalPests: {
    seasonBadge: "Spring Season — Peak Pest Activity",
    heading: "Every Property Tells a Story. We Read the Signs.",
    bundlePromoAlt: "Seasonal pest control bundle offer",
    pests: [
      {
        name: "Rats",
        subspecies: "Norway Rats \u2022 Roof Rats",
        seasonalTag: "Active Season",
        description:
          "Aggressive infestations that damage wiring and spread disease. A single pair can produce 1,500 descendants in a year.",
        image: { alt: "Norway rat near a residential foundation", placeholder: "from-emerald-900/30 to-emerald-800/10" },
        href: "/pests/rats",
      },
      {
        name: "Mice",
        subspecies: "House Mice \u2022 Field Mice",
        seasonalTag: "Breeding Season",
        description:
          "Contaminate food, spread disease, and cause structural damage. A pair of mice can become 60 mice in 3 months.",
        image: { alt: "House mouse entering kitchen pantry area", placeholder: "from-amber-900/30 to-amber-800/10" },
        href: "/pests/mice",
      },
      {
        name: "Raccoons",
        subspecies: "Attic Intrusions \u2022 Yard Damage",
        seasonalTag: "Nesting Season",
        description:
          "Destroy insulation, carry rabies, and create costly damage. They can tear through roof soffits in under an hour.",
        image: { alt: "Raccoon family on residential roof seeking attic entry", placeholder: "from-slate-900/30 to-slate-800/10" },
        href: "/pests/raccoons",
      },
      {
        name: "Wildlife",
        subspecies: "Squirrels \u2022 Skunks \u2022 Opossums",
        seasonalTag: "Spring Activity",
        description:
          "Property damage, disease transmission, and safety hazards. Squirrels chew through electrical wiring, causing fire risks.",
        image: { alt: "Squirrels and wildlife around residential property during spring", placeholder: "from-stone-900/30 to-stone-800/10" },
        href: "/wildlife",
      },
    ],
    alertText:
      "Currently In Season: Ants, Spiders, Wasps, Mice & Wildlife emerging with warmer temperatures",
    ctaBox: {
      heading: "Not Sure What You\u2019re Dealing With?",
      description:
        "Licensed technicians eliminate your pest problem in 24-48 hours. Guaranteed results or we return for free.",
      primaryCta: { label: "Get a Same-Day Quote", href: "/contact" },
      secondaryCta: { label: "View All Pests", href: "/pests" },
    },
  },

  processSteps: {
    eyebrow: "What Happens After You Call",
    heading: "We Find the Problem. We Fix It. We Seal It.",
    steps: [
      {
        number: 1,
        title: "Thorough Inspection",
        description:
          "Complete interior & exterior assessment to identify all pest entry points, nests, and problem areas.",
        icon: "search",
      },
      {
        number: 2,
        title: "Targeted Treatment",
        description:
          "Customized treatment plan using professional-grade, eco-friendly solutions for maximum effectiveness.",
        icon: "target",
      },
      {
        number: 3,
        title: "Exclusion & Prevention",
        description:
          "Seal entry points and implement preventive measures to keep pests out permanently.",
        icon: "shield",
      },
      {
        number: 4,
        title: "Follow-Up & Guarantee",
        description:
          "Ongoing monitoring and our 12-month Zero-Comeback Guarantee ensures your property stays pest-free.",
        icon: "check",
      },
    ],
    discountBanner:
      "Same-Street Savings: 15% off when two homes on the same street book together",
    cta: { label: "Schedule a Visit", href: "/contact" },
  },

  pestId: {
    heading: "Snap a Photo. We\u2019ll Tell You What It Is.",
    description:
      "Found something in your home? Text us a picture and our experts will identify it and recommend the best treatment — completely free.",
    steps: [
      { number: 1, label: "Snap a photo", icon: "camera" },
      { number: 2, label: "Text it to us", icon: "message" },
      { number: 3, label: "Get ID\u2019d", icon: "bug" },
    ],
    sms: {
      label: `Text for free pest ID ${siteConfig.contact.sms}`,
      displayNumber: siteConfig.contact.sms,
      href: siteConfig.contact.smsHref,
    },
  },

  trustStats: {
    stats: [
      { label: "PMRA-Licensed", value: "PMRA", description: "Health Canada\u2013approved methods proven safe around children and pets" },
      { label: "$2M Liability Coverage", value: "$2M", description: "Full liability protection for your property" },
      {
        label: "Average First Visit",
        value: "19",
        suffix: "hrs",
        description: "Fast response time",
      },
      {
        label: "Serving Ontario Since",
        value: "2015",
        description: `${new Date().getFullYear() - siteConfig.founded}+ years of experience`,
      },
      {
        label: "Properties Protected",
        value: "3,200",
        suffix: "+",
        description: "Across Ontario & Alberta",
      },
    ],
    guarantee: siteConfig.stats.guaranteeName,
    rating: { stars: 5, text: "Rated 4.9 stars by customers across Ontario" },
  },

  atticRestoration: {
    badge: "Attic Restoration",
    heading: "Attic Restoration Services",
    description:
      "Restore your attic to pristine condition after pest infestations. Our attic restoration service includes insulation replacement, sanitization, and decontamination to protect your home and family.",
    services: [
      {
        title: "Complete Sanitization",
        description: "Remove all contaminated insulation and droppings",
        icon: "sparkles",
      },
      {
        title: "New Insulation Installation",
        description: "Energy-efficient insulation to improve home comfort",
        icon: "layers",
      },
      {
        title: "Odor Elimination",
        description: "Professional deodorization and air quality restoration",
        icon: "wind",
      },
    ],
    healthCallout: {
      title: "Health & Safety First",
      description:
        "Protect your family from contaminated insulation and airborne pathogens",
    },
    whyChoose: {
      title: "Why Choose Our Attic Restoration?",
      reasons: [
        "Complete removal of contaminated materials",
        "Professional-grade disinfection & sanitization",
        "Energy-efficient insulation installation",
        "Improved indoor air quality",
        "Prevent future pest infestations",
      ],
    },
    urgency: "Limited availability — Book early to secure your spot",
    cta: {
      primary: { label: "Book Your Restoration", href: "/contact" },
      phone: {
        label: `Call Now: ${siteConfig.contact.phone}`,
        href: siteConfig.contact.phoneHref,
      },
    },
  },

  rebatePrograms: {
    heading: "Financial Assistance & Rebate Programs",
    description:
      "We\u2019ll help you access available rebates and assistance programs in your area.",
    programs: [
      {
        title: "Toronto Public Health",
        type: "Public Health Program",
        description: "Financial assistance for pest control services",
        icon: "building",
      },
      {
        title: "Municipal Programs",
        type: "Municipal Support",
        description: "Local rebates and assistance programs",
        icon: "landmark",
      },
      {
        title: "Federal Housing",
        type: "Federal Program",
        description: "Support for housing-related pest issues",
        icon: "government",
      },
    ],
    footer: {
      heading: "Save Money with Pest Control Rebate Programs",
      description:
        "Get expert guidance on available programs and receive all the documentation needed for your rebate claims.",
      primaryCta: { label: "View All Programs", href: "/pest-control-rebates" },
      phoneCta: {
        label: "Call for Assistance",
        href: siteConfig.contact.phoneHref,
      },
    },
  },

  testimonials: {
    heading: "What Our Neighbours Say",
    reviews: [
      {
        name: "David Chen",
        rating: 5,
        text: "Ridgeline was at our door within 18 hours. Their technician explained every step of the 47-point inspection and found entry points we\u2019d missed for years. Three months later\u2014still zero signs of mice.",
        city: "Hamilton",
      },
      {
        name: "Margaret Flores",
        rating: 5,
        text: "After two other companies failed, Marcus\u2019s team solved our raccoon problem in a single visit. The attic restoration was spotless, and the 12-month guarantee gave us real confidence. Truly worth every dollar.",
        city: "Burlington",
      },
      {
        name: "Scott & Nina Patel",
        rating: 4,
        text: "We used the Neighbour Rate with our next-door neighbours and saved 15% each. The whole process\u2014inspection, treatment, sealing\u2014was done in one day. Our kids can play in the yard again without worry.",
        city: "Oakville",
      },
    ],
  },

  faq: [
    {
      question: "What areas does Ridgeline Pest Defence serve?",
      answer: "We serve the Greater Toronto Area, Hamilton-Niagara region, Southwestern Ontario, and Edmonton, Alberta. Our PMRA-licensed technicians provide same-day service across all service areas.",
    },
    {
      question: "How does your 12-month Zero-Comeback Guarantee work?",
      answer: "If the treated pest species returns within 12 months of our service, we come back and re-treat at no additional cost. This covers all pest types included in your original treatment plan.",
    },
    {
      question: "Are your pest control treatments safe for children and pets?",
      answer: "Yes. All treatments use Health Canada–approved, eco-friendly products. We provide clear re-entry guidelines and offer low-toxicity options as standard for homes with children and pets.",
    },
    {
      question: "How quickly can you respond to a pest emergency?",
      answer: "We typically respond within 2 hours, with same-day appointments available for urgent situations. Call us directly for the fastest service on active infestations or wildlife in living spaces.",
    },
    {
      question: "What is included in your 47-point inspection?",
      answer: "Our comprehensive inspection covers interior and exterior entry points, nesting sites, moisture sources, structural vulnerabilities, and signs of current or past pest activity. You receive a written diagnostic report with photos and a risk score.",
    },
    {
      question: "How much does pest control cost?",
      answer: "Most residential treatments range from $150–$400 for initial service, with ongoing protection plans starting at $89/quarter. We provide transparent, upfront quotes with no hidden fees after our inspection.",
    },
  ],

  whyChooseUs: {
    heading: "Why Our Customers Love Us",
    reasons: [
      "Response within 2 hours — same-day appointments available",
      "Eco-friendly solutions safe for families and pets",
      "12-month Zero-Comeback Guarantee on all services",
      "Licensed and insured professionals with $2M coverage",
      "Customized treatment plans for your specific property",
    ],
    certifications: ["PMRA Licensed", "Fully Insured", "Ontario Registered"],
    contactForm: {
      heading: "Talk to a Technician",
      description: siteConfig.formDescription,
      formspreeEndpoint: siteConfig.integrations.formspree.endpoint,
    },
  },
} as const;

export type HomeConfig = typeof homeConfig;
