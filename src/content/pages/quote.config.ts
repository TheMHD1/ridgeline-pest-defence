import { siteConfig } from "@/content/site.config";

export const quoteConfig = {
  hero: {
    badge: "Free Estimates",
    heading: "Get Expert Pest Solutions Tailored to Your Problem",
    subtitle:
      "Receive a customized treatment plan from licensed specialists \u2014 typically within 2 hours. Our targeted approach eliminates pests faster and prevents comebacks.",
    cta: {
      primary: { label: "Get a Same-Day Quote", href: "#quote-form" },
      phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
    },
    backgroundAlt: "Ridgeline Pest Defence technician providing an estimate",
  },

  features: {
    heading: "Why Request a Quote from Ridgeline?",
    items: [
      {
        title: "Rapid Response",
        description: "Most inquiries answered within one hour during business hours, with detailed treatment plans and transparent pricing so you can make informed decisions quickly.",
        icon: "clock" as const,
      },
      {
        title: "Quick Service",
        description: "Service within 24\u201348 hours of your approved quote.",
        icon: "zap" as const,
      },
      {
        title: "Certified Technicians",
        description:
          "Every quote is backed by PMRA-licensed specialists with a decade of field experience.",
        icon: "shield" as const,
      },
    ],
  },

  form: {
    heading: "Request Your Free Quote",
    description:
      "Tell us about your pest issue and we\u2019ll get back to you with a detailed estimate.",
    formspreeEndpoint: siteConfig.integrations.formspree.endpoint,
  },

  pestId: {
    heading: "Help Us Identify Your Pest",
    description:
      "A clear photo speeds up the process. Email it to us or attach it to your quote request.",
    tips: [
      "Snap a photo in good lighting",
      "Include something for scale (coin, ruler)",
      "Note the location and time of sighting",
      "Describe any damage or droppings you\u2019ve found",
    ],
    email: siteConfig.contact.email,
    emailHref: siteConfig.contact.emailHref,
  },

  testimonials: [
    {
      name: "Sarah Mitchell",
      location: "Hamilton, ON",
      rating: 5,
      content: "Called on Tuesday morning about ants in my kitchen. Had a quote by noon and service the next day. The technician was thorough and explained everything clearly. No ants since!"
    },
    {
      name: "Daniel Park",
      location: "Burlington, ON",
      rating: 5,
      content: "Ridgeline's quote was detailed and fair - no hidden fees. Their 12-month guarantee gave me confidence to move forward. Excellent service from start to finish."
    },
    {
      name: "Jennifer Walsh",
      location: "Oakville, ON",
      rating: 5,
      content: "After dealing with mice for months, Ridgeline solved it in two visits. Their quote clearly outlined the plan and timeline. Professional team, lasting results."
    }
  ],

  faq: [
    {
      question: "How quickly will I receive my quote?",
      answer: "Most quotes are provided within 2 hours during business hours. For urgent situations, we can often provide same-day quotes and next-day service."
    },
    {
      question: "Are there any hidden fees in the quote?",
      answer: "No. Our quotes include all treatment costs, follow-up visits, and our 12-month guarantee. The price you see is the price you pay."
    },
    {
      question: "What if the treatment doesn't work?",
      answer: "Every service comes with our Zero-Comeback Guarantee. If pests return within 12 months, we'll retreat at no charge until the problem is solved."
    },
    {
      question: "What pests do you treat?",
      answer: "We handle all common household pests including ants, mice, rats, cockroaches, wasps, spiders, bed bugs, and more. Our licensed technicians are trained in species-specific treatment methods for lasting results."
    },
    {
      question: "What areas do you serve?",
      answer: "We provide comprehensive pest control services throughout the Greater Toronto Area, Hamilton-Niagara region, Southwestern Ontario, and Edmonton, Alberta. Contact us to confirm service availability in your specific location."
    },
    {
      question: "Do I need a deposit?",
      answer: "No deposit is required. We provide upfront quotes and only collect payment after successful completion of your service. This reflects our confidence in delivering results you'll be satisfied with."
    },
    {
      question: "What happens after I submit my quote request?",
      answer: "You'll receive a detailed response within 2 hours during business hours, including treatment plan, pricing, and next steps. We can then schedule your service within 24-48 hours of quote approval."
    },
    {
      question: "Can I book online?",
      answer: "Yes, you can request quotes online through our website. For immediate booking or urgent situations, call us directly for faster scheduling and same-day service when possible."
    }
  ],

  commitment: {
    heading: "Our Quote Response Commitment",
    description: "When you request a quote, you can expect:",
    guarantees: [
      "Detailed response within 2 hours (business hours)",
      "Clear pricing with no hidden fees",
      "Service scheduling within 24-48 hours of approval",
      "12-month Zero-Comeback Guarantee included"
    ],
    stat: "2-Hour Response",
  },
} as const;

export type QuoteConfig = typeof quoteConfig;
