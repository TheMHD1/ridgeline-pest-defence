import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";
import { generateFAQSchema, generateBreadcrumbSchemaFromItems, generateServiceSchema, generateHowToSchema, wrapInGraph } from "@/lib/structured-data";
import { seoConfig } from "@/content/seo.config";
import { PageTransition } from "@/components/ui/PageTransition";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { PestPageTemplate } from "@/components/templates/PestPageTemplate";
import { allPests, getPestBySlug } from "@/content/pests";
import { getPestImage } from "@/lib/images";
import { JsonLd } from "@/components/ui/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return allPests.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pest = getPestBySlug(slug);
  if (!pest) return { title: "Not Found", robots: { index: false } };

  // Add title variation for better SERP distinctiveness
  const titleVariations = [
    `${pest.name} Control & Prevention`,
    `${pest.name} Removal Services`,
    `${pest.name} Treatment Guide`,
    `Get Rid of ${pest.name} — Pro Tips`,
  ];

  // Use hash of slug with length seed for better distribution
  const titleIndex = Math.abs(slug.split('').reduce((a, b, i) => {
    a = ((a << 5) - a) + b.charCodeAt(0) * (i + 1);
    return a & a;
  }, slug.length * 7)) % titleVariations.length;

  const pestImage = getPestImage(pest.slug);

  return generatePageMetadata({
    title: titleVariations[titleIndex],
    description: pest.shortDescription,
    path: `/pests/${pest.slug}`,
    ...(pestImage && {
      image: pestImage.src,
    }),
  });
}

export default async function PestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pest = getPestBySlug(slug);
  if (!pest) notFound();

  const breadcrumbItems = [
    { label: "Pests", href: "/pests" },
    { label: pest.name, href: `/pests/${pest.slug}` }
  ];

  const faqSchema = generateFAQSchema(pest.faqs);
  const breadcrumbSchema = generateBreadcrumbSchemaFromItems(breadcrumbItems);
  const serviceSchema = generateServiceSchema({
    name: `${pest.name} Control`,
    description: pest.shortDescription,
    url: `${seoConfig.siteUrl}/pests/${pest.slug}`,
    serviceType: "PestControl",
  });

  const howToSchema = pest.treatmentSteps.length > 0
    ? generateHowToSchema({
        name: `How to Get Rid of ${pest.name}`,
        description: `Professional ${pest.name.toLowerCase()} treatment process from inspection to prevention.`,
        steps: pest.treatmentSteps,
      })
    : null;

  const pageSchema = wrapInGraph(
    faqSchema,
    breadcrumbSchema,
    serviceSchema,
    ...(howToSchema ? [howToSchema] : []),
  );

  return (
    <PageTransition>
      <JsonLd data={pageSchema} />
      <Breadcrumbs items={breadcrumbItems} />
      <ProgressBar />
      <PestPageTemplate pest={pest} />
    </PageTransition>
  );
}
