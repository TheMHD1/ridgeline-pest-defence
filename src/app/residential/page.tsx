import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchemaFromItems, generateServiceSchema, generateFAQSchema, wrapInGraph } from "@/lib/structured-data";
import { JsonLd } from "@/components/ui/JsonLd";
import { seoConfig } from "@/content/seo.config";
import { siteConfig } from "@/content/site.config";
import { residentialConfig } from "@/content/pages/residential.config";
import { PageTransition } from "@/components/ui/PageTransition";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ResidentialPrograms } from "@/components/sections/ResidentialPrograms";
import { ServiceFeatures } from "@/components/sections/ServiceFeatures";
import { PestCategories } from "@/components/sections/PestCategories";
import { ServiceCommitment } from "@/components/sections/ServiceCommitment";
import { ServiceCTA } from "@/components/sections/ServiceCTA";
import { FAQ } from "@/components/sections/FAQ";

export const metadata = generatePageMetadata({
  title: "Residential Pest Control Services",
  description:
    `Protect your home from ants, spiders, bed bugs, and wildlife with ${siteConfig.name}. Comprehensive property assessments, eco-friendly treatments across Ontario including GTA, Hamilton, and Niagara. 12-month guaranteed results.`,
  path: "/residential",
});

export default function ResidentialPage() {
  const breadcrumbItems = [{ label: "Residential", href: "/residential" }];

  const breadcrumbSchema = generateBreadcrumbSchemaFromItems(breadcrumbItems);

  const serviceSchema = generateServiceSchema({
    name: residentialConfig.hero.heading,
    description: metadata.description as string,
    url: seoConfig.siteUrl + "/residential"
  });
  const faqSchema = generateFAQSchema(residentialConfig.faq);

  const pageSchema = wrapInGraph(breadcrumbSchema, serviceSchema, faqSchema);

  return (
    <PageTransition>
      <JsonLd data={pageSchema} />
      <Breadcrumbs items={breadcrumbItems} />
      <ServiceHero
        badge={residentialConfig.hero.badge}
        heading={residentialConfig.hero.heading}
        subtitle={residentialConfig.hero.subtitle}
        pills={residentialConfig.hero.pills}
        badges={residentialConfig.hero.badges}
        cta={residentialConfig.hero.cta}
        backgroundAlt={residentialConfig.hero.backgroundAlt}
      />
      <ResidentialPrograms
        heading={residentialConfig.programs.heading}
        description={residentialConfig.programs.description}
        items={residentialConfig.programs.items}
      />
      <div className="section-deferred">
        <ServiceFeatures
          heading={residentialConfig.serviceFeatures.heading}
          description={residentialConfig.serviceFeatures.description}
          features={residentialConfig.serviceFeatures.features}
        />
      </div>
      <div className="section-deferred">
        <PestCategories
          heading={residentialConfig.pestCategories.heading}
          description={residentialConfig.pestCategories.description}
          categories={residentialConfig.pestCategories.categories}
        />
      </div>
      <div className="section-deferred">
        <ServiceCommitment
          heading={residentialConfig.commitment.heading}
          description={residentialConfig.commitment.description}
          items={residentialConfig.commitment.items}
          stat={residentialConfig.commitment.stat}
        />
      </div>
      <div className="section-deferred">
        <FAQ
          eyebrow="Common Questions"
          heading="Residential Pest Control FAQs"
          items={residentialConfig.faq}
          idPrefix="residential-faq"
        />
      </div>
      <div className="section-deferred">
        <section className="py-12 bg-muted/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
            <Link href="/commercial" className="text-primary hover:text-primary/80 font-medium transition-colors underline underline-offset-4">
              Also serving businesses? Explore commercial pest control &rarr;
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
          heading={residentialConfig.cta.heading}
          description={residentialConfig.cta.description}
          primaryCta={residentialConfig.cta.primaryCta}
        />
      </div>
    </PageTransition>
  );
}
