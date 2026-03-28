import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchemaFromItems, generateItemListSchema, generateServiceSchema, wrapInGraph } from "@/lib/structured-data";
import { JsonLd } from "@/components/ui/JsonLd";
import { seoConfig } from "@/content/seo.config";
import { siteConfig } from "@/content/site.config";
import { locationsIndexConfig } from "@/content/pages/locations-index.config";
import { PageTransition } from "@/components/ui/PageTransition";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContentHero } from "@/components/sections/ContentHero";
import { LocationsGrid } from "@/components/sections/LocationsGrid";
import { ServiceCTA } from "@/components/sections/ServiceCTA";

const totalCities = locationsIndexConfig.regions.reduce((sum, r) => sum + r.cities.length, 0);
const regionNames = locationsIndexConfig.regions.map((r) => r.name).join(", ");

export const metadata = generatePageMetadata({
  title: "Service Areas — Ontario & Alberta",
  description:
    `Pest control across ${totalCities}+ Ontario & Alberta cities. PMRA-licensed, same-day response — find your area and book today.`,
  path: "/locations",
});

export default function LocationsPage() {
  const breadcrumbItems = [{ label: "Service Areas", href: "/locations" }];

  const breadcrumbSchema = generateBreadcrumbSchemaFromItems(breadcrumbItems);

  // Generate ItemList schema for all locations
  const allCities = locationsIndexConfig.regions.flatMap(region =>
    region.cities.map(city => ({
      name: `${city.name} Pest Control`,
      url: seoConfig.siteUrl + city.href,
      description: `Professional pest control services in ${city.name}`
    }))
  );
  const itemListSchema = generateItemListSchema(allCities);

  // Generate ServiceSchema for all areas
  const serviceSchema = generateServiceSchema({
    name: 'Pest Control Services',
    description: `Professional pest control services across ${totalCities}+ cities in Ontario and Alberta`,
    url: seoConfig.siteUrl + '/locations',
    serviceType: 'Pest Control',
    category: 'Home Services'
  });

  const structuredData = wrapInGraph(breadcrumbSchema, itemListSchema, serviceSchema);

  return (
    <PageTransition>
      <JsonLd data={structuredData} />
      <Breadcrumbs items={breadcrumbItems} />
      <ContentHero
        badge={locationsIndexConfig.hero.badge}
        heading={locationsIndexConfig.hero.heading}
        subtitle={locationsIndexConfig.hero.subtitle}
        cta={locationsIndexConfig.hero.cta}
        backgroundAlt={locationsIndexConfig.hero.backgroundAlt}
      />
      <LocationsGrid regions={locationsIndexConfig.regions} />
      <ServiceCTA
        heading="Ready to Book a Local Technician?"
        description="Contact us to schedule an inspection in your area. Most appointments available within 24 hours."
        primaryCta={{ label: "Book Your Inspection", href: "/contact" }}
      />
    </PageTransition>
  );
}
