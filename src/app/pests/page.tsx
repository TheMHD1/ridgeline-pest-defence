import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchemaFromItems, generateItemListSchema, generateServiceSchema, wrapInGraph } from "@/lib/structured-data";
import { JsonLd } from "@/components/ui/JsonLd";
import { seoConfig } from "@/content/seo.config";
import { pestsIndexConfig } from "@/content/pages/pests-index.config";
import { allPests } from "@/content/pests";
import { PageTransition } from "@/components/ui/PageTransition";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PestsIndexContent } from "@/components/templates/PestsIndexContent";
import { PestByCityDirectory } from "@/components/sections/PestByCityDirectory";
import { ConfusedPests } from "@/components/sections/ConfusedPests";
import { PestsTrust } from "@/components/sections/PestsTrust";

export const metadata: Metadata = generatePageMetadata({
  title: pestsIndexConfig.meta.title,
  description: pestsIndexConfig.meta.description,
  path: "/pests",
});

export default function PestsIndexPage() {
  const breadcrumbItems = [{ label: "Pests", href: "/pests" }];

  const breadcrumbSchema = generateBreadcrumbSchemaFromItems(breadcrumbItems);

  const itemListSchema = generateItemListSchema(
    allPests.map((pest) => ({
      name: `${pest.name} Control`,
      url: `${seoConfig.siteUrl}/pests/${pest.slug}`,
      description: pest.shortDescription,
    }))
  );

  const serviceSchema = generateServiceSchema({
    name: "Pest Control Services",
    description: "Comprehensive pest control and extermination services for residential and commercial properties",
    url: `${seoConfig.siteUrl}/pests`,
    serviceType: "PestControl",
  });

  const pageSchema = wrapInGraph(breadcrumbSchema, itemListSchema, serviceSchema);

  return (
    <PageTransition>
      <JsonLd data={pageSchema} />
      <Breadcrumbs items={breadcrumbItems} />
      <PestsIndexContent />
      <PestByCityDirectory
        heading={pestsIndexConfig.cityDirectory.heading}
        description={pestsIndexConfig.cityDirectory.description}
        groups={pestsIndexConfig.cityDirectory.groups}
      />
      <ConfusedPests
        heading={pestsIndexConfig.confusedPests.heading}
        description={pestsIndexConfig.confusedPests.description}
        comparisons={pestsIndexConfig.confusedPests.comparisons}
      />
      <PestsTrust
        heading={pestsIndexConfig.trust.heading}
        items={pestsIndexConfig.trust.items}
      />
    </PageTransition>
  );
}
