import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchemaFromItems, generateOfferSchema, wrapInGraph } from "@/lib/structured-data";
import { JsonLd } from "@/components/ui/JsonLd";
import { seoConfig } from "@/content/seo.config";
import { siteConfig } from "@/content/site.config";
import { rebatesConfig } from "@/content/pages/rebates.config";
import { PageTransition } from "@/components/ui/PageTransition";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContentHero } from "@/components/sections/ContentHero";
import { MunicipalPrograms } from "@/components/sections/MunicipalPrograms";
import { PublicHealthPrograms } from "@/components/sections/PublicHealthPrograms";
import { FederalPrograms } from "@/components/sections/FederalPrograms";
import Link from "next/link";

export const metadata = generatePageMetadata({
  title: "Pest Control Rebates & Assistance",
  description:
    "Find pest control rebates and financial assistance programs in Ontario. Municipal, public health, and federal programs that help offset pest control costs.",
  path: "/pest-control-rebates",
});

export default function RebatesPage() {
  const breadcrumbItems = [{ label: "Rebates & Assistance", href: "/pest-control-rebates" }];

  const breadcrumbSchema = generateBreadcrumbSchemaFromItems(breadcrumbItems);

  // Generate offer schemas for main programs
  const offerSchemas = [
    generateOfferSchema({
      name: "Municipal Rodent Control Rebates",
      description: "Financial assistance programs for rodent control services available through various Ontario municipalities",
      type: "Municipal Program",
      eligibleRegion: ["Fort Erie", "Niagara Falls", "Port Colborne", "Welland", "Lincoln", "Lakeshore"],
      eligibleService: "Rodent Control Services",
      url: seoConfig.siteUrl + "/pest-control-rebates"
    }),
    generateOfferSchema({
      name: "Public Health Pest Management Support",
      description: "Vector control and pest management assistance through regional public health units",
      type: "Public Health Program",
      eligibleRegion: ["Peel Region", "York Region", "Toronto"],
      eligibleService: "Pest Control Services",
      url: seoConfig.siteUrl + "/pest-control-rebates"
    }),
    generateOfferSchema({
      name: "Federal Housing Maintenance Assistance",
      description: "Federal programs that may cover pest control costs as part of housing maintenance initiatives",
      type: "Federal Program",
      eligibleRegion: ["Ontario", "Canada"],
      eligibleService: "Pest Control Services",
      url: seoConfig.siteUrl + "/pest-control-rebates"
    })
  ];

  const serviceLinks = [
    { name: "Rodent Control", href: "/commercial/rodent-control", description: "Professional rodent exclusion and removal" },
    { name: "Ant Control", href: "/commercial/ant-control", description: "Complete ant colony elimination" },
    { name: "Cockroach Control", href: "/commercial/cockroach-control", description: "Commercial cockroach treatment" },
    { name: "Bed Bug Treatment", href: "/pests/bed-bugs", description: "Comprehensive bed bug elimination" },
    { name: "Wasp Removal", href: "/pests/wasps-hornets", description: "Safe wasp nest removal services" },
    { name: "Spider Control", href: "/pests/spiders", description: "Indoor and outdoor spider treatment" }
  ];

  return (
    <PageTransition>
      <JsonLd data={wrapInGraph(breadcrumbSchema, ...offerSchemas)} />
      <Breadcrumbs items={breadcrumbItems} />
      <ContentHero
        badge={rebatesConfig.hero.badge}
        heading={rebatesConfig.hero.heading}
        subtitle={rebatesConfig.hero.subtitle}
        backgroundAlt={rebatesConfig.hero.backgroundAlt}
        cta={{
          primary: { label: "Check Eligibility", href: "/contact" },
          phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
        }}
      />
      <MunicipalPrograms
        heading={rebatesConfig.municipalPrograms.heading}
        description={rebatesConfig.municipalPrograms.description}
        programs={rebatesConfig.municipalPrograms.programs}
      />
      <PublicHealthPrograms
        heading={rebatesConfig.publicHealthPrograms.heading}
        description={rebatesConfig.publicHealthPrograms.description}
        programs={rebatesConfig.publicHealthPrograms.programs}
      />
      <FederalPrograms
        heading={rebatesConfig.federalPrograms.heading}
        description={rebatesConfig.federalPrograms.description}
        programs={rebatesConfig.federalPrograms.programs}
      />

      {/* Service Cross-Links Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading text-foreground mb-4">
              Eligible Services for Rebate Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These professional pest control services may qualify for financial assistance through the programs listed above.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceLinks.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group block bg-card rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow border border-border hover:border-primary/20 focus-visible:shadow-lg focus-visible:border-primary/30"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary group-focus-within:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-primary font-medium">
                  Learn About {service.name}
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 group-focus-within:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth={2} />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" strokeWidth={2} />
              </svg>
              Rebates available now — call {siteConfig.contact.phone} to check your eligibility
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
