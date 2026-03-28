import { siteConfig } from "@/content/site.config";

export const privacyPolicyConfig = {
  hero: {
    heading: "Privacy Policy",
    effectiveDate: "March 26, 2026",
    description: `This privacy policy explains how ${siteConfig.name} collects, uses, and protects your personal information when you use our website and services.`,
  },

  sections: [
    {
      id: "information-we-collect",
      title: "1. Information We Collect",
      content: [
        "We collect information you provide directly, including your name, email address, phone number, property address, and details about your pest control needs when you fill out a contact form, request a quote, or book a service.",
        "We automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, pages visited, and referring URLs. This data helps us improve our website and services.",
        "If you use our pest identification service via email or text, we collect the photos and descriptions you send along with your contact information.",
      ],
    },
    {
      id: "how-we-use",
      title: "2. How We Use Your Information",
      content: [
        "We use your personal information to provide pest control services, respond to inquiries, schedule appointments, send service confirmations, and follow up on completed treatments.",
        "Your information helps us improve our services, customize treatment plans, and provide accurate quotes based on your property and pest situation.",
        "We may use your contact information to send appointment reminders, service updates, and follow-up communications directly related to your pest control service.",
      ],
    },
    {
      id: "marketing",
      title: "3. Marketing Communications",
      content: [
        "With your consent, we may send promotional communications about our services, seasonal pest alerts, and special offers. You can opt out of marketing emails at any time by clicking the unsubscribe link in any marketing email.",
        "We do not sell or rent your personal information to third parties for their marketing purposes.",
      ],
    },
    {
      id: "sharing",
      title: "4. Sharing Your Information",
      content: [
        "We may share your information with trusted service providers who assist us in operating our business, such as payment processors, scheduling platforms, and email service providers. These providers are contractually obligated to protect your data.",
        "We may disclose your information if required by law, regulation, or legal process, or if we believe disclosure is necessary to protect our rights, safety, or property.",
      ],
    },
    {
      id: "security",
      title: "5. Data Security",
      content: [
        "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes encryption of data in transit and secure storage of records.",
        "While we take reasonable precautions, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.",
      ],
    },
    {
      id: "your-rights",
      title: "6. Your Rights",
      content: [
        "You have the right to access, correct, or delete your personal information. You may request a copy of the data we hold about you or ask us to update inaccurate information.",
        `To exercise any of these rights, contact us at ${siteConfig.contact.email} or call ${siteConfig.contact.phone}. We will respond to your request within 30 days.`,
      ],
    },
    {
      id: "external-links",
      title: "7. External Links",
      content: [
        "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.",
      ],
    },
    {
      id: "updates",
      title: "8. Policy Updates",
      content: [
        "We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. The updated policy will be posted on this page with a revised effective date.",
        "We encourage you to review this policy periodically. Your continued use of our website and services after any changes constitutes acceptance of the updated policy.",
      ],
    },
    {
      id: "contact-us",
      title: "9. Contact Us",
      content: [
        `If you have questions about this privacy policy or how we handle your data, contact us at ${siteConfig.contact.email} or call ${siteConfig.contact.phone}.`,
      ],
    },
  ],
} as const;

export type PrivacyPolicyConfig = typeof privacyPolicyConfig;
