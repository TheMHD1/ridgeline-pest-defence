/* ──────────────────────────────────────────────
   Shared content types — pest data & categories
   ────────────────────────────────────────────── */

export type PestCategorySlug = "crawlers" | "flyers" | "rodents" | "wildlife";

export interface PestSubspecies {
  name: string;
  description: string;
}

// Base shared types
export interface TreatmentStep {
  readonly step: string;
  readonly description: string;
}

export interface FAQ {
  readonly question: string;
  readonly answer: string;
}

export interface Testimonial {
  readonly name: string;
  readonly location: string;
  readonly text: string;
  readonly rating?: number;
}

// Pest-specific type aliases (backwards compatibility)
export type PestTreatmentStep = TreatmentStep;
export type PestFAQ = FAQ;

export interface PestImage {
  src: string;
  alt: string;
}

export interface PestData {
  slug: string;
  name: string;
  category: PestCategorySlug;
  subspecies: PestSubspecies[];
  shortDescription: string;
  fullDescription: string;
  signs: string[];
  healthRisks: string[];
  preventionTips: string[];
  treatmentSteps: PestTreatmentStep[];
  faqs: PestFAQ[];
  seasonalStatus: string;
  prepSheetSlug?: string;
  searchTerms?: string[];
  relatedPestSlugs: string[];
  cityPageSlugs: string[];
  image: PestImage;
}

export interface IPMStep {
  step: string;
  description: string;
}

export interface PestCategory {
  slug: PestCategorySlug;
  name: string;
  description: string;
  pests: string[];
  ipmSteps: IPMStep[];
  heroImage: PestImage;
}

/* ──────────────────────────────────────────────
   Shared section config types — used across page configs
   ────────────────────────────────────────────── */

export interface CTAConfig {
  label: string;
  href: string;
}

export interface HeroSectionConfig {
  eyebrow?: string;
  heading: string;
  description: string;
  badges?: string[];
  primaryCta?: CTAConfig;
  secondaryCta?: CTAConfig;
}

export interface FAQSectionConfig {
  heading: string;
  description?: string;
  items: Array<{ question: string; answer: string }>;
}

export interface TestimonialsSectionConfig {
  heading: string;
  reviews: Array<{
    name: string;
    rating: number;
    text: string;
    city?: string;
    role?: string;
    location?: string;
  }>;
}
