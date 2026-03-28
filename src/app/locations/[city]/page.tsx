import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";
import { generateFAQSchema, generateBreadcrumbSchemaFromItems, generateServiceSchema, generateReviewSchema, generateLocationBusinessSchema, wrapInGraph } from "@/lib/structured-data";
import { JsonLd } from "@/components/ui/JsonLd";
import { seoConfig } from "@/content/seo.config";
import { PageTransition } from "@/components/ui/PageTransition";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LocationHero } from "@/components/sections/LocationHero";
import { LocationNeighborhoods } from "@/components/sections/LocationNeighborhoods";
import { LocationPests } from "@/components/sections/LocationPests";
import { LocationServices } from "@/components/sections/LocationServices";
import { LocationTestimonials } from "@/components/sections/LocationTestimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ServiceCTA } from "@/components/sections/ServiceCTA";
import { allLocations, getLocationBySlug } from "@/content/locations/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return allLocations.map((loc) => ({ city: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) return { title: "Not Found", robots: { index: false } };

  return generatePageMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: location.route,
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) notFound();

  const breadcrumbItems = [
    { label: "Service Areas", href: "/locations" },
    { label: location.name, href: location.route }
  ];

  const faqSchema = generateFAQSchema(location.faqs);
  const breadcrumbSchema = generateBreadcrumbSchemaFromItems(breadcrumbItems);
  const serviceSchema = generateServiceSchema({
    name: `Pest Control in ${location.name}`,
    description: location.metaDescription,
    url: seoConfig.siteUrl + location.route,
    serviceType: "PestControl",
  });
  const locationBusinessSchema = generateLocationBusinessSchema({
    name: location.name,
    description: location.metaDescription,
    url: seoConfig.siteUrl + location.route,
    region: location.region,
  });
  const reviewSchemas = generateReviewSchema(
    location.testimonials.map((t) => ({
      name: t.name,
      text: t.text,
      city: t.location,
    }))
  );

  const pageSchema = wrapInGraph(faqSchema, breadcrumbSchema, serviceSchema, ...reviewSchemas, locationBusinessSchema);

  return (
    <PageTransition>
      <JsonLd data={pageSchema} />
      <Breadcrumbs items={breadcrumbItems} />
      <LocationHero location={location} />
      <LocationNeighborhoods location={location} />
      <div className="section-deferred">
        <LocationPests location={location} />
      </div>
      <div className="section-deferred">
        <LocationServices location={location} />
      </div>
      <div className="section-deferred">
        <LocationTestimonials location={location} />
      </div>
      <div className="section-deferred">
        {location.faqs.length > 0 && (
          <FAQ
            eyebrow="FAQ"
            heading={`Pest Control Questions in ${location.name}`}
            items={location.faqs}
            idPrefix="location-faq"
          />
        )}
      </div>
      <div className="section-deferred">
        <ServiceCTA
          heading={`Ready to Book in ${location.name}?`}
          description={`Schedule your 47-point inspection today. Most ${location.name} appointments available within ${location.responseTime.toLowerCase()}.`}
          primaryCta={{ label: "Book Your Inspection", href: "/contact" }}
        />
      </div>
    </PageTransition>
  );
}
