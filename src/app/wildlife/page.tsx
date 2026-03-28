import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchemaFromItems, generateServiceSchema, generateItemListSchema, wrapInGraph } from "@/lib/structured-data";
import { JsonLd } from "@/components/ui/JsonLd";
import { seoConfig } from "@/content/seo.config";
import { PageTransition } from "@/components/ui/PageTransition";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PestCategoryTemplate } from "@/components/templates/PestCategoryTemplate";
import { getCategoryBySlug, getPestsByCategory } from "@/content/pests";

const category = getCategoryBySlug("wildlife");
const pests = getPestsByCategory("wildlife");

export const metadata = generatePageMetadata({
  title: category
    ? "Wildlife Removal — Raccoons, Squirrels, Bats & More"
    : "Wildlife Removal Services",
  description: category
    ? "Humane wildlife removal for raccoons, squirrels, skunks, bats, and birds. Exclusion methods, attic restoration, and 12-month guarantees."
    : "Professional humane wildlife removal and exclusion services.",
  path: "/wildlife",
});

export default function WildlifePage() {
  if (!category) notFound();
  const breadcrumbItems = [{ label: "Pests", href: "/pests" }, { label: "Wildlife", href: "/wildlife" }];

  const breadcrumbSchema = generateBreadcrumbSchemaFromItems(breadcrumbItems);

  const serviceSchema = generateServiceSchema({
    name: `${category.name} Control`,
    description: category.description,
    url: seoConfig.siteUrl + "/wildlife"
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
