import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchemaFromItems, generateFAQSchema, wrapInGraph } from "@/lib/structured-data";
import { seoConfig } from "@/content/seo.config";
import { PageTransition } from "@/components/ui/PageTransition";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getCategoryBySlug, getPestsByCategory } from "@/content/pests";
import { PestDetailCard } from "@/components/sections/PestDetailCard";
import { JsonLd } from "@/components/ui/JsonLd";

const category = getCategoryBySlug("crawlers");

export const metadata = generatePageMetadata({
  title: `${category?.name ?? "Crawling Pest"} Treatment & Prevention`,
  description: `Identify and eliminate crawling pests — ants, spiders, cockroaches, bed bugs, termites & fleas. PMRA-licensed treatments and DIY prevention checklists.`,
  path: "/crawlers/details",
  noIndex: true,
});

export default function CrawlersDetailsPage() {
  if (!category) {
    notFound();
  }
  const pests = getPestsByCategory("crawlers");
  const breadcrumbItems = [
    { label: "Pests", href: "/pests" },
    { label: category.name, href: "/crawlers" },
    { label: "Details", href: "/crawlers/details" },
  ];

  const breadcrumbSchema = generateBreadcrumbSchemaFromItems(breadcrumbItems);

  const faqSchema = generateFAQSchema(
    pests.flatMap((pest) =>
      pest.faqs.slice(0, 2).map((faq) => ({
        question: `${pest.name}: ${faq.question}`,
        answer: faq.answer,
      }))
    )
  );

  return (
    <PageTransition>
      <JsonLd data={wrapInGraph(breadcrumbSchema, faqSchema)} />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="py-20 lg:py-28 bg-background" aria-labelledby="crawlers-details-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              {category.name}
            </p>
            <h1 id="crawlers-details-heading" className="font-heading text-4xl sm:text-5xl text-foreground">
              {`${category.name} Pest Guide`}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {category.description}
            </p>
          </ScrollReveal>

          <div className="space-y-20">
            {pests.map((pest) => (
              <PestDetailCard key={pest.slug} pest={pest} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
