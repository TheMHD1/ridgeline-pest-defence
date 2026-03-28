const inspectionPoints = 47;
const formDescription = "Fill out the form below and one of our licensed technicians will get back to you within 2 hours.";

export const siteConfig = {
  name: "Ridgeline Pest Defence",
  tagline: "Quiet Homes. Confident Owners.",
  description:
    "Professional pest control services across Ontario and Edmonton. PMRA-licensed, insured, and committed to keeping your property pest-free since 2015.",
  url: "https://ridgelinepestdefence.ca",
  founded: 2015,
  founder: "Marcus Ridgeway",
  founderBackground: "Building inspector, Hamilton",
  poweredBy: "Powered by Phinexus",
  inspectionPoints,
  formDescription,

  badges: {
    licensed: "Licensed & Insured",
    guaranteed: "Satisfaction Guaranteed",
    pmraLicensed: "PMRA-licensed",
    zeroComebackGuarantee: "Zero-Comeback Guarantee",
  },

  contact: {
    phone: "(905) 555-0174",
    phoneHref: "tel:+19055550174",
    sms: "(905) 555-0175",
    smsHref: "sms:+19055550175",
    email: "hello@ridgelinepestdefence.ca",
    emailHref: "mailto:hello@ridgelinepestdefence.ca",
  },

  hours: {
    display: "Mon\u2013Sat 7:00 AM \u2013 8:00 PM",
    structured: {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "20:00",
    },
  },

  address: {
    streetAddress: "123 Main Street",
    addressLocality: "Hamilton",
    addressRegion: "ON",
    postalCode: "L8P 1A1",
    addressCountry: "CA",
    geo: {
      latitude: 43.2557,
      longitude: -79.8711,
    },
  },

  regions: ["GTA", "Hamilton-Niagara", "Southwestern Ontario", "Edmonton"],
  serviceArea: "Ontario & Alberta",

  process: {
    name: "The Ridgeline Method",
    steps: [
      {
        number: 1,
        name: "Assess",
        description: `${inspectionPoints}-point property inspection + written diagnostic`,
      },
      {
        number: 2,
        name: "Treat",
        description: "Species-specific, eco-friendly treatment plan",
      },
      {
        number: 3,
        name: "Seal",
        description: "Entry point exclusion + 12-month guarantee",
      },
    ],
  },

  stats: {
    yearsSince: 2015,
    propertiesServed: "3,200+",
    referralRate: "78%",
    avgResponseTime: "< 2 hours",
    guarantee: "12 months",
    guaranteeName: "Zero-Comeback Guarantee",
    satisfactionRate: "97%",
    rating: {
      value: 4.9,
      count: 150, // External reviews (Google/Yelp) - higher than ~45 rendered testimonials
      bestRating: 5,
      worstRating: 1,
    },
  },

  credentials: [
    "PMRA-licensed",
    "$2M liability coverage",
    "Ontario Registered",
  ],

  signatureServices: {
    propertyHealthReport:
      "Written diagnostic + photos + risk score",
    neighbourRate:
      "15% off when 2 homes on same street book together",
    atticRestoration:
      "Sanitization, insulation, odor elimination",
  },

  social: {
    instagram: "https://instagram.com/ridgelinepestdefence",
    instagramHandle: "@ridgelinepestdefence",
    facebook: "https://facebook.com/RidgelinePestDefence",
    facebookName: "Ridgeline Pest Defence",
    googleBusiness: "https://g.page/ridgelinepestdefence",
    twitterHandle: "@ridgelinepestdefence",
  },

  integrations: {
    formspree: {
      endpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/PLACEHOLDER",
      baseUrl: "https://formspree.io",
    },
    tawkto: {
      propertyId: process.env.NEXT_PUBLIC_TAWKTO_PROPERTY_ID || "",
      widgetId: process.env.NEXT_PUBLIC_TAWKTO_WIDGET_ID || "",
      embedUrl: "https://embed.tawk.to",
      vaUrl: "https://va.tawk.to",
    },
    plausible: {
      scriptUrl: "https://plausible.io/js/script.js",
      baseUrl: "https://plausible.io",
    },
  },

  cta: {
    // Lead generation CTAs for discovery phase users
    primary: [
      "Book Your Inspection",
      "Get a Same-Day Quote",
    ],
    // Service booking CTAs for ready-to-hire users
    booking: [
      "Schedule a Visit",
      "Book Now",
    ],
    // Emergency response CTAs for urgent situations
    emergency: [
      "Call for Urgent Help",
      "Get Emergency Service",
    ],
    phone: ["Talk to a Technician", "Call for Urgent Help"],
    soft: ["Ask Us Anything", "Get Free Pest ID via Photo", "Not Sure? We\u2019ll Help"],
  },
} as const;

export const brandPhrases = {
  guaranteeFull: "12-month Zero-Comeback Guarantee",
  guaranteeShort: "12-month guarantee",
  guarantee: [
    "12-month Zero-Comeback Guarantee",
    "12-month service guarantee",
    "12-month re-treatment warranty",
    "12-month pest-free warranty",
    "guaranteed for 12 months",
  ],
  inspection: [
    "47-point inspection",
    "comprehensive property assessment",
    "thorough multi-point inspection",
    "detailed property survey",
    "full-spectrum property evaluation",
    "47-point diagnostic walkthrough",
    "in-depth property audit",
    "complete pest vulnerability assessment",
    "systematic property check",
    "professional site evaluation",
  ],
  licensed: [
    "PMRA-licensed",
    "fully licensed and insured",
    "certified and PMRA-compliant",
    "licensed pest control professionals",
    "provincially registered and PMRA-licensed",
    "PMRA-certified professionals",
    "Health Canada-approved technicians",
    "provincially certified specialists",
  ],
  ecoFriendly: [
    "eco-friendly",
    "low-impact",
    "environmentally responsible",
    "green pest control",
    "family-safe and eco-conscious",
    "Health Canada-approved treatments",
    "environmental protection focused",
    "sustainable pest management",
  ],
  responseTime: [
    "same-day service",
    "fast-response scheduling",
    "rapid appointment booking",
    "priority scheduling available",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
