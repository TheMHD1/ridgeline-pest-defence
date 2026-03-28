import { siteConfig } from "@/content/site.config";
import { seoConfig } from "@/content/seo.config";

// TypeScript interfaces for schema.org types
interface SchemaObject {
  "@context"?: string;
  "@type": string | string[];
  "@id"?: string;
  [key: string]: unknown;
}

interface OfferSchema extends SchemaObject {
  "@type": "Offer";
  name: string;
  description: string;
  url: string;
  seller: SchemaObject;
  category?: string;
  price?: string;
  priceSpecification?: SchemaObject;
  validFrom?: string;
  validThrough?: string;
  eligibleRegion?: SchemaObject[];
  itemOffered?: SchemaObject;
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${seoConfig.siteUrl}/#organization`,
    name: siteConfig.name,
    description: seoConfig.defaultDescription,
    url: seoConfig.siteUrl,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    logo: {
      "@type": "ImageObject",
      url: seoConfig.siteUrl + "/images/logo.webp",
      width: 200,
      height: 60,
    },
    image: seoConfig.siteUrl + "/images/og/og-default.webp",
    foundingDate: String(siteConfig.founded),
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      areaServed: "CA",
      availableLanguage: "English",
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.googleBusiness,
    ],
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["PestControlService", "LocalBusiness"],
    "@id": `${seoConfig.siteUrl}/#localbusiness`,
    name: siteConfig.name,
    description: seoConfig.defaultDescription,
    url: seoConfig.siteUrl,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    logo: {
      "@type": "ImageObject",
      url: seoConfig.siteUrl + "/images/logo.webp",
      width: 200,
      height: 60,
    },
    image: seoConfig.siteUrl + "/images/og/og-default.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.geo.latitude,
      longitude: siteConfig.address.geo.longitude,
    },
    priceRange: seoConfig.jsonLd.priceRange,
    foundingDate: String(siteConfig.founded),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: siteConfig.hours.structured.dayOfWeek,
      opens: siteConfig.hours.structured.opens,
      closes: siteConfig.hours.structured.closes,
    },
    areaServed: seoConfig.jsonLd.areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.stats.rating.value,
      reviewCount: siteConfig.stats.rating.count,
      bestRating: siteConfig.stats.rating.bestRating,
      worstRating: siteConfig.stats.rating.worstRating,
    },
    paymentAccepted: "Cash, Credit Card, Debit, E-Transfer",
    currenciesAccepted: "CAD",
    slogan: siteConfig.tagline,
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.googleBusiness,
    ],
  };
}

const regionToProvince: Record<string, string> = {
  gta: "ON",
  "hamilton-niagara": "ON",
  southwestern: "ON",
  additional: "ON",
  alberta: "AB",
};

export function generateLocationBusinessSchema(location: {
  name: string;
  description: string;
  url: string;
  region?: string;
}) {
  const addressRegion = regionToProvince[location.region ?? ""] ?? "ON";

  return {
    "@context": "https://schema.org",
    "@type": ["PestControlService", "LocalBusiness"],
    "@id": `${location.url}/#localbusiness`,
    name: `${siteConfig.name} — ${location.name}`,
    description: location.description,
    url: location.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.name} Office`,
      addressLocality: location.name,
      addressRegion,
      addressCountry: "CA",
    },
    areaServed: {
      "@type": "City",
      name: location.name,
    },
    priceRange: seoConfig.jsonLd.priceRange,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: siteConfig.hours.structured.dayOfWeek,
      opens: siteConfig.hours.structured.opens,
      closes: siteConfig.hours.structured.closes,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.stats.rating.value,
      reviewCount: siteConfig.stats.rating.count,
      bestRating: siteConfig.stats.rating.bestRating,
      worstRating: siteConfig.stats.rating.worstRating,
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.googleBusiness,
    ],
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "PestControlService",
    name: service.name,
    description: service.description,
    url: service.url,
    ...(service.serviceType && { serviceType: service.serviceType }),
    ...(service.category && { category: service.category }),
    provider: {
      "@type": "LocalBusiness",
      "@id": `${seoConfig.siteUrl}/#localbusiness`,
      name: siteConfig.name,
      telephone: siteConfig.contact.phone,
    },
    areaServed: seoConfig.jsonLd.areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    priceRange: seoConfig.jsonLd.priceRange,
    potentialAction: {
      "@type": "OrderAction",
      target: seoConfig.siteUrl + "/quote",
    },
  };
}

export function generateFAQSchema(faqs: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateItemListSchema(items: readonly { name: string; url: string; image?: string; description?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
      ...(item.image && { image: item.image }),
      ...(item.description && { description: item.description }),
    })),
  };
}

export function generateBreadcrumbSchema(items: readonly { name: string; url: string }[]) {
  const siteUrl = seoConfig.siteUrl;
  const allItems = items.length > 0 && items[0].url === siteUrl
    ? items
    : [{ name: "Home", url: siteUrl }, ...items];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: { "@id": item.url },
    })),
  };
}

export function generateOfferSchema(offer: {
  name: string;
  description: string;
  type?: string;
  price?: string;
  discount?: string;
  validFrom?: string;
  validThrough?: string;
  eligibleRegion?: string[];
  eligibleService?: string;
  url: string;
}) {
  const schema: OfferSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: offer.name,
    description: offer.description,
    url: offer.url,
    seller: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.contact.phone,
    },
  };

  if (offer.type) schema.category = offer.type;
  if (offer.price) schema.price = offer.price;
  if (offer.discount) schema.priceSpecification = {
    "@type": "PriceSpecification",
    price: offer.discount,
  };
  if (offer.validFrom) schema.validFrom = offer.validFrom;
  if (offer.validThrough) schema.validThrough = offer.validThrough;
  if (offer.eligibleRegion) schema.eligibleRegion = offer.eligibleRegion.map(region => ({
    "@type": "AdministrativeArea",
    name: region,
  }));
  if (offer.eligibleService) schema.itemOffered = {
    "@type": "Service",
    name: offer.eligibleService,
  };

  return schema;
}

export function generateBreadcrumbSchemaFromItems(items: readonly { label: string; href: string }[]) {
  const siteUrl = seoConfig.siteUrl;
  const homeItem = { name: "Home", url: siteUrl };

  const breadcrumbItems = [
    homeItem,
    ...items.map(item => ({
      name: item.label,
      url: siteUrl + item.href
    }))
  ];

  return generateBreadcrumbSchema(breadcrumbItems);
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${seoConfig.siteUrl}/#website`,
    name: siteConfig.name,
    description: seoConfig.defaultDescription,
    url: seoConfig.siteUrl,
    publisher: {
      "@type": "Organization",
      "@id": `${seoConfig.siteUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${seoConfig.siteUrl}/pests?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateReviewSchema(reviews: readonly { name: string; text: string; rating?: number; city?: string; role?: string; date?: string }[]) {
  return reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.name,
    },
    reviewBody: review.text,
    datePublished: review.date ?? new Date().toISOString().split('T')[0],
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating ?? 5,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      "@type": "LocalBusiness",
      "@id": `${seoConfig.siteUrl}/#localbusiness`,
      name: siteConfig.name,
    },
  }));
}

export function generateHowToSchema(howTo: {
  name: string;
  description: string;
  steps: readonly { step: string; description: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo.name,
    description: howTo.description,
    step: howTo.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.step,
      text: s.description,
    })),
  };
}

export function wrapInGraph(...schemas: SchemaObject[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas.map(({ "@context": _, ...rest }) => rest),
  };
}
