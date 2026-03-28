import { siteConfig } from "@/content/site.config";

export const residentialConfig = {
  meta: {
    title: "Residential Pest Control Services | Ridgeline Pest Defence",
    description: "Professional home pest control with 12-month guarantee. Family-safe treatments for ants, spiders, bed bugs, wildlife, and more. Same-day appointments available."
  },
  hero: {
    badge: "Residential Services",
    heading: "Your Home Deserves Better Than a Quick Spray",
    subtitle:
      "Your home deserves better than a quick spray and a handshake. We inspect 47 points, treat the source, and seal every gap — backed by a 12-month guarantee.",
    pills: ["Family Safe", "Fast Response", "Complete Inspection", "Speak to an Expert"],
    badges: ["Licensed & Insured", "Satisfaction Guaranteed"],
    cta: {
      primary: { label: "Book Your Inspection", href: "/contact" },
      phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
    },
    backgroundAlt: "Ridgeline technician inspecting a residential property",
  },

  programs: {
    heading: "Our Residential Pest Control Programs",
    description:
      "Choose from targeted programs designed to handle any pest problem in your home — each one backed by our Zero-Comeback Guarantee.",
    items: [
      {
        title: "Spider Control Program",
        description:
          "Targeted web removal, barrier treatments, and entry-point sealing. Most homes see a 90% reduction in spider activity within two weeks.",
        icon: "spider" as const,
      },
      {
        title: "Ant Treatments",
        description:
          "Colony elimination using bait systems and perimeter barriers. We treat carpenter ants, pavement ants, and pharaoh ants at the source — not just the trail.",
        icon: "ant" as const,
      },
      {
        title: "Wildlife Removal",
        description:
          "Humane removal of raccoons, squirrels, skunks, and bats, followed by entry-point exclusion and attic restoration. All work follows Ontario wildlife regulations.",
        icon: "wildlife" as const,
      },
      {
        title: "Bed Bug Exterminators",
        description:
          "Heat treatment and targeted chemical application to eliminate bed bugs at every life stage. We inspect every room, not just the one with bites.",
        icon: "bedbug" as const,
      },
      {
        title: "Flea Exterminator",
        description:
          "Multi-stage treatment targeting eggs, larvae, and adults. A single flea lays up to 50 eggs per day — waiting makes it worse.",
        icon: "flea" as const,
      },
      {
        title: "Termite Control",
        description:
          "Subterranean and drywood termite detection, baiting systems, and structural treatment. Termites cause more property damage in Canada than fire and flood combined.",
        icon: "termite" as const,
      },
      {
        title: "Wasp & Hornet Removal",
        description:
          "Safe nest removal and preventive treatments for wasps, hornets, and yellow jackets. We locate nests in walls, soffits, and underground — places most homeowners miss.",
        icon: "wasp" as const,
      },
      {
        title: "Cockroach Control",
        description:
          "Gel bait, IGR treatments, and sanitation guidance to break the breeding cycle. German cockroaches can produce 300,000 offspring in a single year.",
        icon: "cockroach" as const,
      },
    ],
  },

  serviceFeatures: {
    heading: "Don\u2019t Let Pests Take Over Your Home",
    description:
      "Year-round protection keeps your family safe and your property intact. Our customized plans adjust to seasonal patterns so you\u2019re always one step ahead.",
    features: [
      {
        title: "Full-Property Protection",
        description:
          "Interior and exterior treatments that create a protective barrier around your home — not just a one-room fix.",
        icon: "shield" as const,
      },
      {
        title: "Scheduled Maintenance",
        description:
          "Regular visits adjusted to seasonal pest patterns. We come back before problems return, not after.",
        icon: "calendar" as const,
      },
      {
        title: "Eco-Friendly Solutions",
        description:
          "Low-toxicity treatments safe for children and pets. Every product we use is Health Canada\u2013approved.",
        icon: "leaf" as const,
      },
      {
        title: "Custom Home Plans",
        description:
          "No two properties are the same. Your plan is built around your home\u2019s layout, history, and the pests in your area.",
        icon: "home" as const,
      },
    ],
  },

  pestCategories: {
    heading: "Pests We Treat for Residential Properties",
    description:
      "Explore our proven treatment methods for each pest type.",
    categories: [
      {
        title: "Crawlers",
        pests: "Ants, Spiders, Cockroaches, Bed Bugs, Termites, Fleas, Centipedes, Silverfish, Earwigs",
        href: "/crawlers",
        icon: "crawlers" as const,
      },
      {
        title: "Flyers",
        pests: "Wasps, Flies, Moths, Hornets, Beetles, Boxelder Bugs, Lady Bugs, Carpenter Bees",
        href: "/flyers",
        icon: "flyers" as const,
      },
      {
        title: "Rodents",
        pests: "Mice, Rats, Squirrels, Voles, Chipmunks",
        href: "/rodents",
        icon: "rodents" as const,
      },
      {
        title: "Wildlife",
        pests: "Raccoons, Skunks, Bats, Opossums, Birds, Moles",
        href: "/wildlife",
        icon: "wildlife" as const,
      },
    ],
  },

  commitment: {
    heading: "Our Residential Service Commitment",
    description:
      "If pests return between scheduled treatments, so do we — at no extra cost. That\u2019s the Zero-Comeback Guarantee.",
    items: [
      "Response within 2 hours — same-day appointments available",
      "Certified, background-checked technicians on every visit",
      "Child and pet-friendly treatment options as standard",
      "Detailed prevention recommendations in your Property Health Report",
    ],
    stat: `${siteConfig.stats.satisfactionRate} customer satisfaction rate based on post-service surveys`,
  },

  faq: [
    {
      question: "How much does residential pest control cost?",
      answer: "Costs vary based on property size, pest type, and treatment complexity. Most residential treatments range from $150-$400 for initial service, with ongoing protection plans starting at $89/quarter. We provide upfront quotes with no hidden fees."
    },
    {
      question: "How quickly can you respond to pest emergencies?",
      answer: "We typically respond within 2 hours, with same-day appointments available for urgent situations. Emergency services are available for severe infestations, wasp nests near entrances, or wildlife in living spaces."
    },
    {
      question: "Are your treatments safe around children and pets?",
      answer: "Yes, all our treatments use Health Canada\u2013approved products applied with family safety as the priority. We offer low-toxicity options as standard and provide clear guidelines for re-entry times when needed."
    },
    {
      question: "What does your 12-month guarantee cover?",
      answer: "Our Zero-Comeback Guarantee covers the return of treated pest species between scheduled visits at no extra cost. If pests return within 12 months following our treatment protocol, we return for free service calls."
    },
    {
      question: "Do I need to be home during treatment?",
      answer: "Not necessarily. For exterior treatments and some interior work, we can service your property while you're away with proper access arrangements. We'll always discuss scheduling preferences during booking."
    },
    {
      question: "How do you handle wildlife removal humanely?",
      answer: "All wildlife removal follows Ontario regulations using humane exclusion techniques. We use one-way doors and live exclusion methods that allow animals to leave safely without trapping or harm."
    },
    {
      question: "What preparation is needed before treatment?",
      answer: "Minimal preparation is typically required. We'll provide specific instructions based on the treatment type, which may include clearing access areas or temporarily relocating pets during application."
    },
    {
      question: "Can you treat multiple pest problems at once?",
      answer: "Absolutely. Our comprehensive inspection identifies all pest issues, and we can address multiple species in a single visit when appropriate. This is often more efficient and cost-effective than separate treatments."
    }
  ],

  cta: {
    heading: "Ready to Get Help with Pests?",
    description:
      "Talk to a licensed technician about a customized plan for your property.",
    primaryCta: { label: "Book Your Inspection", href: "/contact" },
  },
} as const;

export type ResidentialConfig = typeof residentialConfig;
