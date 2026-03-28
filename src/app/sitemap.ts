import type { MetadataRoute } from "next";
import { seoConfig } from "@/content/seo.config";
import { allPests, pestCategories } from "@/content/pests";
import { allLocations } from "@/content/locations/data";
import { getAllPestCityRoutes } from "@/content/pest-city/data";
import { getAllCommercialServiceSlugs } from "@/content/pages/commercial-services.config";

const base = seoConfig.siteUrl;

// Stagger lastmod dates by content type so Google treats them as distinct update signals
function daysAgo(days: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const recent = daysAgo(3);
  const moderate = daysAgo(7);
  const older = daysAgo(14);

  /* ── Static pages ──────────────────────────── */
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/residential`, lastModified: recent, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/commercial`, lastModified: recent, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/pests`, lastModified: recent, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations`, lastModified: recent, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: moderate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/quote`, lastModified: moderate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/referral`, lastModified: moderate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/pest-control-rebates`, lastModified: moderate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/prep-sheet-ants`, lastModified: older, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/prep-sheet-bedbugs`, lastModified: older, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/prep-sheet-cockroaches`, lastModified: older, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified: older, changeFrequency: "yearly", priority: 0.3 },
  ];

  /* ── Pest category pages ───────────────────── */
  const categoryPages: MetadataRoute.Sitemap = pestCategories.map((cat) => ({
    url: `${base}/${cat.slug}`,
    lastModified: recent,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  /* ── Commercial sub-pages (/commercial/[slug]) */
  const commercialPages: MetadataRoute.Sitemap = getAllCommercialServiceSlugs().map((slug) => ({
    url: `${base}/commercial/${slug}`,
    lastModified: recent,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  /* ── Category detail pages (/crawlers/details, etc.) */
  const categoryDetailPages: MetadataRoute.Sitemap = pestCategories.map((cat) => ({
    url: `${base}/${cat.slug}/details`,
    lastModified: older,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  /* ── Individual pest pages ─────────────────── */
  const pestPages: MetadataRoute.Sitemap = allPests.map((pest) => ({
    url: `${base}/pests/${pest.slug}`,
    lastModified: moderate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  /* ── Location pages ────────────────────────── */
  const locationPages: MetadataRoute.Sitemap = allLocations.map((loc) => ({
    url: `${base}${loc.route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  /* ── Pest-city pages ───────────────────────── */
  const pestCityPages: MetadataRoute.Sitemap = getAllPestCityRoutes().map((r) => ({
    url: `${base}${r.route}`,
    lastModified: moderate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...categoryDetailPages,
    ...commercialPages,
    ...pestPages,
    ...locationPages,
    ...pestCityPages,
  ];
}
