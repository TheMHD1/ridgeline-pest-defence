import { PageTransition } from "@/components/ui/PageTransition";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { CommercialPestTypes } from "@/components/sections/CommercialPestTypes";
import { IndustryTypes } from "@/components/sections/IndustryTypes";
import { CommercialServiceDetail } from "@/components/sections/CommercialServiceDetail";
import { CommercialTestimonials } from "@/components/sections/CommercialTestimonials";
import { ServiceCTA } from "@/components/sections/ServiceCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { generateBreadcrumbSchemaFromItems, wrapInGraph } from "@/lib/structured-data";
import type { CommercialServicePage } from "@/content/pages/commercial-services.config";
import { JsonLd } from "@/components/ui/JsonLd";

interface CommercialSubTemplateProps {
  config: CommercialServicePage;
  breadcrumbLabel: string;
  breadcrumbHref: string;
  serviceSchema?: Record<string, unknown>;
}

export function CommercialSubTemplate({
  config,
  breadcrumbLabel,
  breadcrumbHref,
  serviceSchema,
}: CommercialSubTemplateProps) {
  const breadcrumbItems = [
    { label: "Commercial", href: "/commercial" },
    { label: breadcrumbLabel, href: breadcrumbHref },
  ];

  const breadcrumbSchema = generateBreadcrumbSchemaFromItems(breadcrumbItems);
  const schemas = serviceSchema
    ? wrapInGraph(breadcrumbSchema, serviceSchema as Parameters<typeof wrapInGraph>[0])
    : breadcrumbSchema;

  return (
    <PageTransition>
      <JsonLd data={schemas} />
      <Breadcrumbs items={breadcrumbItems} />
      <ServiceHero
        badge={config.hero.badge}
        heading={config.hero.heading}
        subtitle={config.hero.subtitle}
        pills={config.hero.pills}
        badges={config.hero.badges}
        cta={config.hero.cta}
        backgroundAlt={config.hero.backgroundAlt}
        heroImageKey={config.hero.heroImageKey}
      />
      {config.emergencyCta && (
        <section className="bg-destructive py-6" aria-label="Emergency commercial pest control">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl font-heading text-white sm:text-3xl">
                    {config.emergencyCta.heading}
                  </h2>
                  <p className="mt-1 text-sm text-white/90">
                    {config.emergencyCta.responseTime}
                  </p>
                </div>
                <a
                  href={config.emergencyCta.phone.href}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-lg font-bold text-destructive shadow-lg transition-transform hover:scale-105"
                  style={{ willChange: "transform" }}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  {config.emergencyCta.phone.label}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}
      <CommercialPestTypes
        heading={config.pestTypes.heading}
        description={config.pestTypes.description}
        pests={config.pestTypes.pests}
      />
      <IndustryTypes
        heading={config.industryTypes.heading}
        description={config.industryTypes.description}
        industries={config.industryTypes.industries}
      />
      <CommercialServiceDetail
        heading={config.serviceDetail.heading}
        description={config.serviceDetail.description}
        features={config.serviceDetail.features}
      />
      <CommercialTestimonials
        heading={config.testimonials.heading}
        reviews={config.testimonials.reviews}
      />
      <ServiceCTA
        heading={config.cta.heading}
        description={config.cta.description}
        primaryCta={config.cta.primaryCta}
      />
    </PageTransition>
  );
}