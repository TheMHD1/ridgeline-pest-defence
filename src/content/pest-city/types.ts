// Import shared base types and re-export with legacy names
import type { Testimonial, FAQ, TreatmentStep } from "@/content/types";

export type PestCityTestimonial = Testimonial;
export type PestCityFAQ = FAQ;
export type PestCityTreatmentStep = TreatmentStep;

export interface PestCityServiceItem {
  readonly name: string;
  readonly description: string;
}

export interface PestCityPageData {
  readonly pestSlug: string;
  readonly citySlug: string;
  readonly pestName: string;
  readonly cityName: string;
  readonly route: string;
  readonly h1: string;
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly overview: string;
  readonly localChallenges: string;
  readonly services: readonly PestCityServiceItem[];
  readonly treatmentSteps: readonly PestCityTreatmentStep[];
  readonly neighborhoods: readonly string[];
  readonly testimonials: readonly PestCityTestimonial[];
  readonly faqs: readonly PestCityFAQ[];
  readonly responseTime: string;
  readonly isCommercial: boolean;
  readonly pestPageHref: string;
  readonly locationPageHref: string;
}
