import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchemaFromItems, generateServiceSchema, generateItemListSchema, wrapInGraph } from "@/lib/structured-data";
import { JsonLd } from "@/components/ui/JsonLd";
import { seoConfig } from "@/content/seo.config";
import { PageTransition } from "@/components/ui/PageTransition";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PestCategoryTemplate } from "@/components/templates/PestCategoryTemplate";
import { getCategoryBySlug, getPestsByCategory } from "@/content/pests";
import { notFound } from "next/navigation";

const category = getCategoryBySlug("flyers");
const pests = getPestsByCategory("flyers");

export const metadata = generatePageMetadata({
  title: category
    ? "Flying Insect Control Services"
    : "Flying Insect Control Services",
  description: category
    ? "Expert control for flies, mosquitoes, wasps, hornets, and moths. Breeding site elimination, barrier treatments, and seasonal monitoring."
    : "Professional flying insect control and prevention services.",
  path: "/flyers",
});

export default function FlyersPage() {
  if (!category) notFound();

  const breadcrumbItems = [{ label: "Pests", href: "/pests" }, { label: "Flyers", href: "/flyers" }];

  const breadcrumbSchema = generateBreadcrumbSchemaFromItems(breadcrumbItems);

  const serviceSchema = generateServiceSchema({
    name: `${category.name} Control`,
    description: category.description,
    url: seoConfig.siteUrl + "/flyers"
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
