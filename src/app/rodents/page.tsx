import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchemaFromItems, generateServiceSchema, generateItemListSchema, wrapInGraph } from "@/lib/structured-data";
import { JsonLd } from "@/components/ui/JsonLd";
import { seoConfig } from "@/content/seo.config";
import { PageTransition } from "@/components/ui/PageTransition";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PestCategoryTemplate } from "@/components/templates/PestCategoryTemplate";
import { getCategoryBySlug, getPestsByCategory } from "@/content/pests";

const category = getCategoryBySlug("rodents");
const pests = getPestsByCategory("rodents");

export const metadata = generatePageMetadata({
  title: category
    ? `${category.name} Control — Mice, Rats & Voles`
    : "Rodent Control — Mice, Rats & Voles",
  description:
    category?.description ??
    "Professional rodent control for mice, rats, and voles. Exclusion, trapping, and monitoring programs.",
  path: "/rodents",
});

export default function RodentsPage() {
  if (!category) notFound();

  const breadcrumbItems = [{ label: "Pests", href: "/pests" }, { label: category.name, href: "/rodents" }];

  const breadcrumbSchema = generateBreadcrumbSchemaFromItems(breadcrumbItems);

  const serviceSchema = generateServiceSchema({
    name: `${category.name} Control`,
    description: category.description,
    url: seoConfig.siteUrl + "/rodents"
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
