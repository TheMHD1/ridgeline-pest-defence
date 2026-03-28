import { siteConfig } from "@/content/site.config";

export const referralConfig = {
  hero: {
    badge: "Earn $50 Per Referral",
    heading: "Ridgeline Pest Defence Referral Program",
    subtitle:
      "Know someone with a pest problem? Refer them to Ridgeline and earn $50 cash for every successful referral \u2014 no limit.",
    cta: {
      primary: { label: "Refer a Friend Now", href: "#referral-form" },
      phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
    },
    backgroundAlt: "Ridgeline Pest Defence referral program",
  },

  process: {
    heading: "How It Works",
    steps: [
      {
        number: 1,
        title: "Refer a Friend",
        description:
          "Fill out the referral form below with your friend\u2019s contact details.",
        icon: "users" as const,
      },
      {
        number: 2,
        title: "They Get a Personal Call",
        description:
          "Your referral receives a call to schedule a free inspection at their convenience.",
        icon: "phone" as const,
      },
      {
        number: 3,
        title: "Earn Your Reward",
        description:
          "Once your referral completes their first service, you receive $50 cash \u2014 no limit on how many you can earn.",
        icon: "gift" as const,
      },
    ],
  },

  reward: {
    heading: "$50 Cash Reward",
    description:
      "There\u2019s no cap on earnings. Refer 10 friends, earn $500. Refer 20, earn $1,000. Every successful referral puts $50 in your pocket.",
    highlights: [
      "No limit on referrals",
      "$50 per successful referral",
      "Cash reward \u2014 not a credit or discount",
      "Paid after your referral\u2019s first completed service",
    ],
  },

  form: {
    heading: "Submit Your Referral",
    description:
      "Fill out both sections below and we\u2019ll take it from there.",
    submitLabel: "Submit Referral",
  },

  testimonials: {
    heading: "What Our Referrers Say",
    reviews: [
      {
        name: "Rachel Okafor",
        rating: 5,
        text: "I\u2019ve referred three neighbours so far and earned $150. The whole process is simple \u2014 fill out the form and Ridgeline handles the rest. My neighbours were thrilled with the service too.",
        city: "Toronto",
      },
      {
        name: "Andrew Matsumoto",
        rating: 5,
        text: "Referred a colleague who had a raccoon in his attic. Ridgeline responded the same day and my colleague couldn\u2019t stop thanking me. The $50 reward was a nice bonus on top.",
        city: "Hamilton",
      },
      {
        name: "Diane Tremblay",
        rating: 5,
        text: "After Ridgeline solved our bed bug problem, I told everyone I know. Three referrals later, I\u2019ve made $150 and helped friends get the same quality service we received.",
        city: "Oakville",
      },
    ],
  },

  faq: {
    heading: "Referral Program FAQ",
    description: "Everything you need to know about earning referral rewards",
    questions: [
      {
        question: "When do I get my $50?",
        answer: "You receive your $50 cash reward after your referral completes their first service with us. Payment is typically issued within 7-10 business days of their completed service.",
      },
      {
        question: "Is there a limit on referrals?",
        answer: "No limit at all. You can refer as many friends, family members, or colleagues as you want. Each successful referral earns you $50 — whether it's your 1st or your 50th.",
      },
      {
        question: "Does my friend get a discount?",
        answer: "Your friend receives our comprehensive 47-point inspection service at regular pricing. The $50 reward goes to you as a thank-you for the referral. We focus on delivering exceptional value through our thorough service rather than discounting.",
      },
      {
        question: "How do I track my referrals?",
        answer: "After submitting a referral, we'll send you a confirmation email. We'll also update you when your referral books their service and again when your $50 reward is processed.",
      },
      {
        question: "What counts as a successful referral?",
        answer: "A successful referral is when your referred friend, family member, or colleague completes their first pest control service with Ridgeline Pest Defence. One-time inspections or cancelled appointments don't qualify for the reward.",
      },
    ],
  },
} as const;

export type ReferralConfig = typeof referralConfig;
