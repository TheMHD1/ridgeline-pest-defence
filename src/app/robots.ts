import type { MetadataRoute } from "next";
import { seoConfig } from "@/content/seo.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/*/details"],
    },
    sitemap: `${seoConfig.siteUrl}/sitemap.xml`,
  };
}
