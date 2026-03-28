import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";
import { generateFAQSchema, generateBreadcrumbSchemaFromItems, generateServiceSchema, wrapInGraph } from "@/lib/structured-data";
import { seoConfig } from "@/content/seo.config";
import { PageTransition } from "@/components/ui/PageTransition";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PestCityPageTemplate } from "@/components/templates/PestCityPageTemplate";
import { getPestCityData, getAllPestCityRoutes } from "@/content/pest-city/data";
import { getPestImage } from "@/lib/images";
import { JsonLd } from "@/components/ui/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPestCityRoutes().map((r) => ({
    pestType: r.pestType,
    city: r.citySlug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pestType: string; city: string }>;
}): Promise<Metadata> {
  const { pestType, city } = await params;
  const data = getPestCityData(pestType, city);
  if (!data) return { title: "Not Found", robots: { index: false } };

  const pestImage = getPestImage(data.pestSlug);

  return generatePageMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    path: data.route,
    ...(pestImage && { image: pestImage.src }),
  });
}

export default async function PestCityPage({
  params,
}: {
  params: Promise<{ pestType: string; city: string }>;
}) {
  const { pestType, city } = await params;
  const data = getPestCityData(pestType, city);
  if (!data) notFound();

  const breadcrumbItems = [
    { label: "Pests", href: "/pests" },
    { label: data.pestName, href: data.pestPageHref },
    { label: data.cityName, href: data.route },
  ];

  const faqSchema = generateFAQSchema(data.faqs);
  const breadcrumbSchema = generateBreadcrumbSchemaFromItems(breadcrumbItems);
  const serviceSchema = generateServiceSchema({
    name: `${data.pestName} in ${data.cityName}`,
    description: data.metaDescription,
    url: seoConfig.siteUrl + data.route,
    serviceType: "PestControl",
  });

  return (
    <PageTransition>
      <JsonLd data={wrapInGraph(faqSchema, breadcrumbSchema, serviceSchema)} />
      <Breadcrumbs items={breadcrumbItems} />
      <PestCityPageTemplate data={data} />
    </PageTransition>
  );
}
