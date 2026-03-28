import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { getCommercialServiceBySlug } from "@/content/pages/commercial-services.config";
import { CommercialSubTemplate } from "@/components/templates/CommercialSubTemplate";
import { generateServiceSchema, wrapInGraph } from "@/lib/structured-data";
import { seoConfig } from "@/content/seo.config";
import { JsonLd } from "@/components/ui/JsonLd";

const commercialRoutes: Record<string, { configSlug: string; label: string; fallbackTitle: string; fallbackDescription: string }> = {
  restaurant: {
    configSlug: "commercial-restaurant-pest-control",
    label: "Restaurant",
    fallbackTitle: "Restaurant Pest Control & Food Safety Compliance",
    fallbackDescription: "Restaurant and food-service pest control. Health-code compliant treatments, kitchen sanitation, and ongoing monitoring programs.",
  },
  warehouse: {
    configSlug: "commercial-warehouse-pest-control",
    label: "Warehouse",
    fallbackTitle: "Warehouse Pest Prevention & Monitoring Programs",
    fallbackDescription: "Pest management for warehouses and distribution centres. Rodent exclusion, stored-product pest control, and audit-ready documentation.",
  },
  healthcare: {
    configSlug: "commercial-healthcare-pest-control",
    label: "Healthcare",
    fallbackTitle: "Healthcare Facility Pest Management & Compliance",
    fallbackDescription: "Certified pest management for hospitals, clinics, and long-term care facilities. HACCP-aligned protocols and discreet service.",
  },
  office: {
    configSlug: "commercial-office-pest-control",
    label: "Office",
    fallbackTitle: "Office Building Pest Prevention & Management",
    fallbackDescription: "Discreet pest control for offices and commercial buildings. Scheduled treatments, monitoring stations, and rapid response.",
  },
  "ant-control": {
    configSlug: "commercial-ant-control",
    label: "Ant Control",
    fallbackTitle: "Commercial Ant Control",
    fallbackDescription: "Professional ant control for commercial properties. Colony elimination, perimeter treatments, and prevention programs.",
  },
  "cockroach-control": {
    configSlug: "commercial-cockroach-control",
    label: "Cockroach Control",
    fallbackTitle: "Commercial Cockroach Elimination & Prevention",
    fallbackDescription: "Commercial cockroach elimination for restaurants, hotels, and food processing facilities. Gel baiting, IGR treatments, and monitoring.",
  },
  "rodent-control": {
    configSlug: "commercial-rodent-control",
    label: "Rodent Control",
    fallbackTitle: "Commercial Rodent Control",
    fallbackDescription: "Commercial rodent control for warehouses, restaurants, and offices. Exclusion, baiting, and monitoring programs.",
  },
};

export function generateStaticParams() {
  return Object.keys(commercialRoutes).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const route = commercialRoutes[slug];
  if (!route) return {};

  const page = getCommercialServiceBySlug(route.configSlug);

  return generatePageMetadata({
    title: page?.seo.title ?? route.fallbackTitle,
    description: page?.seo.description ?? route.fallbackDescription,
    path: `/commercial/${slug}`,
  });
}

export default async function CommercialServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = commercialRoutes[slug];
  if (!route) notFound();

  const page = getCommercialServiceBySlug(route.configSlug);
  if (!page) notFound();

  const serviceSchema = generateServiceSchema({
    name: page.hero.heading,
    description: page.seo.description,
    url: `${seoConfig.siteUrl}/commercial/${slug}`,
    serviceType: "PestControl",
    category: "Commercial",
  });

  const wrappedSchema = wrapInGraph(serviceSchema);

  return (
    <>
      <JsonLd data={wrappedSchema} />
      <CommercialSubTemplate
        config={page}
        breadcrumbLabel={route.label}
        breadcrumbHref={`/commercial/${slug}`}
      />
    </>
  );
}
