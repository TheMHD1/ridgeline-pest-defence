export type LocationRegion =
  | "gta"
  | "hamilton-niagara"
  | "southwestern"
  | "additional"
  | "alberta";

// Import shared base types and re-export with legacy names
import type { Testimonial, FAQ } from "@/content/types";

export type LocationTestimonial = Testimonial;
export type LocationFAQ = FAQ;

export interface LocationGeo {
  readonly lat: number;
  readonly lng: number;
}

export interface LocationData {
  readonly slug: string;
  readonly name: string;
  readonly region: LocationRegion;
  readonly route: string;
  readonly h1: string;
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly neighborhoods: readonly string[];
  readonly commonPests: readonly string[];
  readonly responseTime: string;
  readonly description: string;
  readonly localChallenges: string;
  readonly testimonials: readonly LocationTestimonial[];
  readonly faqs: readonly LocationFAQ[];
  readonly geo?: LocationGeo;
}
