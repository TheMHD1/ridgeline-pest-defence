import manifest from "@/content/image-manifest.json";

export type ImageKey = keyof typeof manifest;

export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: string;
  usedOn: string;
}

/**
 * Get image data by key. Returns src, alt, width, height.
 * Usage:
 *   import { getImage } from '@/lib/images';
 *   const hero = getImage('hero-homepage');
 *   <Image src={hero.src} alt={hero.alt} width={hero.width} height={hero.height} />
 */
export function getImage(key: ImageKey): SiteImage {
  return manifest[key] as SiteImage;
}

/**
 * Get all images in a category.
 * Categories: "hero", "pest", "commercial", "service", "seasonal", "brand"
 */
export function getImagesByCategory(category: string): Record<string, SiteImage> {
  const result: Record<string, SiteImage> = {};
  for (const [key, value] of Object.entries(manifest)) {
    if ((value as SiteImage).category === category) {
      result[key] = value as SiteImage;
    }
  }
  return result;
}

/**
 * Get the pest card image for a given pest slug.
 * e.g., getPestImage('ants') returns the 'pest-ants' image.
 */
export function getPestImage(slug: string): SiteImage | null {
  const key = `pest-${slug}` as ImageKey;
  return key in manifest ? manifest[key] as SiteImage : null;
}

/**
 * Get the hero image for a page.
 * e.g., getHeroImage('homepage'), getHeroImage('crawlers')
 */
export function getHeroImage(page: string): SiteImage | null {
  const key = `hero-${page}` as ImageKey;
  return key in manifest ? manifest[key] as SiteImage : null;
}

/**
 * Get the category card image.
 * e.g., getCategoryImage('crawlers')
 */
export function getCategoryImage(category: string): SiteImage | null {
  const key = `category-${category}` as ImageKey;
  return key in manifest ? manifest[key] as SiteImage : null;
}

/**
 * Get commercial setting image.
 * e.g., getCommercialImage('restaurant')
 */
export function getCommercialImage(industry: string): SiteImage | null {
  const key = `commercial-${industry}` as ImageKey;
  return key in manifest ? manifest[key] as SiteImage : null;
}
