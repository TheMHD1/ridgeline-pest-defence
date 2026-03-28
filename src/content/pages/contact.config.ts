import { siteConfig } from "@/content/site.config";

export const contactConfig = {
  hero: {
    badge: "$150 Off Select Services",
    heading: "Contact Ridgeline Pest Defence",
    subtitle:
      "Have questions or need urgent pest control support? Our experts typically respond within 2 hours and provide service within 24\u201348 hours.",
    cta: {
      primary: { label: "Schedule Comprehensive Property Evaluation", href: "#contact-form" },
      phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
    },
    backgroundAlt: "Ridgeline Pest Defence contact and support",
  },

  form: {
    heading: "Get in Touch",
    description: siteConfig.formDescription,
    formspreeEndpoint: siteConfig.integrations.formspree.endpoint,
  },

  info: {
    heading: "How to Reach Us",
    phone: {
      label: "Call Us",
      value: siteConfig.contact.phone,
      href: siteConfig.contact.phoneHref,
    },
    email: {
      label: "Email",
      value: siteConfig.contact.email,
      href: siteConfig.contact.emailHref,
    },
    hours: {
      label: "Hours",
      value: siteConfig.hours.display,
    },
    serviceAreas: {
      label: "Service Areas",
      areas: ["Greater Toronto Area", "Hamilton-Niagara", "Southwestern Ontario", "Edmonton, Alberta"],
    },
  },

  testimonials: {
    heading: "What Customers Are Saying",
    reviews: [
      {
        name: "Sarah Thompson",
        rating: 5,
        text: "Ridgeline was incredibly responsive. They arrived the same day I called and resolved our ant problem in one visit. The technician explained every step and left detailed notes on how to prevent a recurrence.",
        city: "Mississauga",
      },
      {
        name: "Michael Rodriguez",
        rating: 5,
        text: "Professional from start to finish. The 47-point inspection found entry points two other companies missed. Three months later and still zero signs of mice. Burlington\u2019s best-kept secret.",
        city: "Burlington",
      },
      {
        name: "Jennifer Clarke",
        rating: 4,
        text: "After trying two other companies, Ridgeline finally solved our mouse issue. Their Property Health Report was incredibly detailed \u2014 photos, risk scores, the works. Worth every penny.",
        city: "Brampton",
      },
    ],
  },

  faq: {
    heading: "Common Questions",
    items: [
      {
        question: "How quickly can you respond to a pest emergency?",
        answer:
          "We prioritize emergencies and can typically have a licensed technician at your property within 24 hours. For urgent situations like wasp nests near entrances or active wildlife intrusions, same-day response is often available.",
      },
      {
        question: "Are your pest control methods safe for children and pets?",
        answer:
          "Yes. Every product we use is Health Canada\u2013approved and applied by PMRA-licensed technicians. We use low-toxicity, eco-friendly treatments as standard, and our technicians will advise you on any specific precautions for your household.",
      },
      {
        question: "Do you provide commercial pest control services?",
        answer:
          "Absolutely. We serve restaurants, offices, warehouses, healthcare facilities, and more. Our commercial programs include scheduled maintenance, compliance documentation, and emergency response \u2014 all customized to your industry requirements.",
      },
      {
        question: "How much does pest control cost?",
        answer:
          "Pricing varies based on the type of pest, property size, and severity of infestation. We provide transparent, upfront quotes with no hidden fees. Most residential treatments range from $150-$400, and we offer flexible payment plans for larger projects.",
      },
      {
        question: "What happens during the first visit?",
        answer:
          "Your technician will conduct a thorough 47-point property inspection, identify pest entry points, assess risk levels, and create a customized treatment plan. You'll receive a detailed Property Health Report with photos, recommended actions, and prevention strategies.",
      },
      {
        question: "Do you offer any guarantees on your work?",
        answer:
          "Yes. We stand behind our work with service guarantees that vary by treatment type. Most treatments include a 30-day callback guarantee, and our ongoing programs offer continuous protection with free retreatments if pests return.",
      },
      {
        question: "Can you help identify an unknown pest?",
        answer:
          "Absolutely. Email a clear photo to our experts and we'll identify the pest and recommend next steps at no charge. Include a coin for size reference and note where you found it for the most accurate identification.",
      },
      {
        question: "Do I need to be present during treatment?",
        answer:
          "We recommend being present for the initial consultation and treatment explanation, but you don't need to stay for the entire service. Our technicians can work independently and will leave detailed service notes and next-step recommendations.",
      },
    ],
  },

  pestId: {
    heading: "Not Sure What Pest You\u2019re Dealing With?",
    description:
      "Take a clear photo in good lighting, include a coin for size reference, and email it to us. Our experts will identify the pest and recommend next steps \u2014 free of charge.",
    tips: [
      "Use good lighting and get as close as safely possible",
      "Include a coin or ruler for size reference",
      "Photograph any damage, droppings, or nesting material",
      "Note where and when you spotted the pest",
    ],
    email: siteConfig.contact.email,
    emailHref: siteConfig.contact.emailHref,
  },
} as const;

export type ContactConfig = typeof contactConfig;
