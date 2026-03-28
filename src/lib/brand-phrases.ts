import { brandPhrases } from "@/content/site.config";

/**
 * Rotates brand phrase variations based on an index (city/location).
 * Ensures different pages get different brand messaging to avoid duplicate content.
 */
export function rotateBrandPhrases(text: string, index: number): string {
  const result = text
    .replace(/12-month Zero-Comeback Guarantee/g, brandPhrases.guarantee[index % brandPhrases.guarantee.length])
    .replace(/47-point inspection/g, brandPhrases.inspection[index % brandPhrases.inspection.length])
    .replace(/PMRA-licensed/g, brandPhrases.licensed[index % brandPhrases.licensed.length])
    .replace(/eco-friendly/g, brandPhrases.ecoFriendly[index % brandPhrases.ecoFriendly.length]);

  if (result.length > 160) {
    const truncated = result.slice(0, 155);
    const lastSpace = truncated.lastIndexOf(" ");
    return (lastSpace > 100 ? truncated.slice(0, lastSpace) : truncated) + "\u2026";
  }
  return result;
}
