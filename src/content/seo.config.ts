import { siteConfig, brandPhrases } from "./site.config";

export const seoConfig = {
  titleTemplate: `%s | ${siteConfig.name}`,
  defaultTitle: `${siteConfig.name} | ${siteConfig.tagline}`,
  defaultDescription:
    `Same-day pest control across Ontario & Edmonton — PMRA-licensed, eco-friendly treatments backed by our 12-month guarantee. Book inspection today.`,
  siteUrl: siteConfig.url,
  locale: "en_CA",
  type: "website" as const,

  openGraph: {
    siteName: siteConfig.name,
    locale: "en_CA",
    type: "website" as const,
    images: [
      {
        url: "/images/og/og-default.webp",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} \u2014 Licensed pest management for Ontario and Edmonton`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image" as const,
    site: siteConfig.social.twitterHandle,
    creator: siteConfig.social.twitterHandle,
  },

  robots: {
    index: true,
    follow: true,
  },

  jsonLd: {
    type: "PestControlService",
    additionalTypes: ["LocalBusiness"],
    priceRange: "$$",
    areaServed: [
      "Greater Toronto Area",
      "Hamilton",
      "Niagara Region",
      "Southwestern Ontario",
      "Edmonton",
    ],
  },
} as const;

export type SeoConfig = typeof seoConfig;
