import type { Metadata } from "next";
import { seoConfig } from "@/content/seo.config";
import { siteConfig } from "@/content/site.config";

interface GenerateMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
  ogType?: "website" | "article";
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  image,
  imageAlt,
  noIndex,
  ogType,
}: GenerateMetadataOptions = {}): Metadata {
  const pageTitle = title
    ? seoConfig.titleTemplate.replace("%s", title)
    : seoConfig.defaultTitle;
  const pageDescription = description ?? seoConfig.defaultDescription;
  const url = `${seoConfig.siteUrl}${path}`;
  const ogImage = image ?? seoConfig.openGraph.images[0].url;
  const ogImageAlt = imageAlt ?? (image ? pageTitle : seoConfig.openGraph.images[0].alt);

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      locale: seoConfig.locale,
      type: ogType ?? seoConfig.openGraph.type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: seoConfig.twitter.card,
      site: seoConfig.twitter.site,
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    robots: noIndex === true
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          "max-image-preview": "large" as const,
          "max-snippet": -1,
          "max-video-preview": -1,
        },
  };
}
