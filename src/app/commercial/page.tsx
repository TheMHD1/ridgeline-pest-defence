import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchemaFromItems, generateFAQSchema, generateServiceSchema, wrapInGraph } from "@/lib/structured-data";
import { JsonLd } from "@/components/ui/JsonLd";
import { seoConfig } from "@/content/seo.config";
import { commercialConfig } from "@/content/pages/commercial.config";
import { PageTransition } from "@/components/ui/PageTransition";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { CommercialCertifications } from "@/components/sections/CommercialCertifications";
import { IndustryGrid } from "@/components/sections/IndustryGrid";
import { CommercialServices } from "@/components/sections/CommercialServices";
import { CommercialApproach } from "@/components/sections/CommercialApproach";
import { FAQ } from "@/components/sections/FAQ";
import { ServiceCTA } from "@/components/sections/ServiceCTA";

export const metadata = generatePageMetadata({
  title: "Commercial Pest Control Services",
  description:
    "Commercial pest control for restaurants, offices, warehouses, and healthcare facilities across Ontario & Edmonton. Industry-compliant, 24-hour response.",
  path: "/commercial",
});

export default function CommercialPage() {
  const breadcrumbItems = [{ label: "Commercial", href: "/commercial" }];

  const breadcrumbSchema = generateBreadcrumbSchemaFromItems(breadcrumbItems);

  const faqSchema = generateFAQSchema(commercialConfig.faq.faqs);

  const serviceSchema = generateServiceSchema({
    name: "Commercial Pest Control Services",
    description: metadata.description as string,
    url: seoConfig.siteUrl + "/commercial",
    serviceType: "PestControl",
    category: "Commercial",
  });

  const pageSchema = wrapInGraph(breadcrumbSchema, faqSchema, serviceSchema);

  return (
    <PageTransition>
      <JsonLd data={pageSchema} />
      <Breadcrumbs items={breadcrumbItems} />
      <ServiceHero
        badge={commercialConfig.hero.badge}
        heading={commercialConfig.hero.heading}
        subtitle={commercialConfig.hero.subtitle}
        pills={commercialConfig.hero.pills}
        badges={commercialConfig.hero.badges}
        cta={commercialConfig.hero.cta}
        backgroundAlt={commercialConfig.hero.backgroundAlt}
        heroImageKey="commercial"
      />
      <CommercialCertifications
        heading={commercialConfig.certifications.heading}
        description={commercialConfig.certifications.description}
        badges={commercialConfig.certifications.badges}
        features={commercialConfig.certifications.features}
      />
      <div className="section-deferred">
        <IndustryGrid
          heading={commercialConfig.industryGrid.heading}
          description={commercialConfig.industryGrid.description}
          industries={commercialConfig.industryGrid.industries}
        />
      </div>
      <div className="section-deferred">
        <CommercialServices
          heading={commercialConfig.services.heading}
          description={commercialConfig.services.description}
          items={commercialConfig.services.items}
        />
      </div>
      <div className="section-deferred">
        <CommercialApproach
          heading={commercialConfig.approach.heading}
          description={commercialConfig.approach.description}
          items={commercialConfig.approach.items}
          responseCallout={commercialConfig.approach.responseCallout}
        />
      </div>
      <div className="section-deferred">
        <FAQ
          heading={commercialConfig.faq.heading}
          description={commercialConfig.faq.description}
          items={commercialConfig.faq.faqs}
          idPrefix="commercial-faq"
        />
      </div>
      <div className="section-deferred">
        <section className="py-12 bg-muted/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
            <Link href="/residential" className="text-primary hover:text-primary/80 font-medium transition-colors underline underline-offset-4">
              Need home service? See residential pest control &rarr;
            </Link>
            <span className="hidden sm:inline text-muted-foreground/40">|</span>
            <Link href="/pest-control-rebates" className="text-primary hover:text-primary/80 font-medium transition-colors underline underline-offset-4">
              Save on service — check available rebates &rarr;
            </Link>
          </div>
        </section>
      </div>
      <div className="section-deferred">
        <ServiceCTA
          heading={commercialConfig.cta.heading}
          description={commercialConfig.cta.description}
          primaryCta={commercialConfig.cta.primaryCta}
        />
      </div>
    </PageTransition>
  );
}
