import type { PestCategorySlug } from "@/content/types";

/** Emoji icons for each pest category — single source of truth. */
export const categoryIcons: Record<PestCategorySlug, string> = {
  crawlers: "🐜",
  flyers: "🦟",
  rodents: "🐀",
  wildlife: "🦝",
};

/** Look up a category icon with a generic-bug fallback for unknown values. */
export function getCategoryIcon(category: string): string {
  return (categoryIcons as Record<string, string>)[category] ?? "🐛";
}
