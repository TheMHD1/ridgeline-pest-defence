import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchemaFromItems, generateServiceSchema, generateItemListSchema, wrapInGraph } from "@/lib/structured-data";
import { JsonLd } from "@/components/ui/JsonLd";
import { seoConfig } from "@/content/seo.config";
import { PageTransition } from "@/components/ui/PageTransition";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PestCategoryTemplate } from "@/components/templates/PestCategoryTemplate";
import { getCategoryBySlug, getPestsByCategory } from "@/content/pests";
import { notFound } from "next/navigation";

const category = getCategoryBySlug("crawlers");
const pests = getPestsByCategory("crawlers");

export const metadata = generatePageMetadata({
  title: category
    ? "Crawling Pest Control — Ants, Spiders, Cockroaches & More"
    : "Crawling Pest Control — Ants, Spiders, Cockroaches & More",
  description:
    category?.description ??
    "Expert control for ants, spiders, cockroaches, bed bugs, termites, and fleas. Inspection, treatment, and prevention.",
  path: "/crawlers",
});

export default function CrawlersPage() {
  if (!category) notFound();

  const breadcrumbItems = [{ label: "Pests", href: "/pests" }, { label: category.name, href: "/crawlers" }];

  const breadcrumbSchema = generateBreadcrumbSchemaFromItems(breadcrumbItems);

  const serviceSchema = generateServiceSchema({
    name: `${category.name} Control`,
    description: category.description,
    url: seoConfig.siteUrl + "/crawlers"
  });

  const itemListSchema = generateItemListSchema(
    pests.map((p) => ({
      name: p.name,
      url: `${seoConfig.siteUrl}/pests/${p.slug}`,
    }))
  );

  const pageSchema = wrapInGraph(breadcrumbSchema, serviceSchema, itemListSchema);

  return (
    <PageTransition>
      <JsonLd data={pageSchema} />
      <Breadcrumbs items={breadcrumbItems} />
      <PestCategoryTemplate category={category} pests={pests} />
    </PageTransition>
  );
}
