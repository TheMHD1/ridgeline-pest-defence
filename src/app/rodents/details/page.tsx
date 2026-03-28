import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchemaFromItems, generateFAQSchema, wrapInGraph } from "@/lib/structured-data";
import { seoConfig } from "@/content/seo.config";
import { PageTransition } from "@/components/ui/PageTransition";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getCategoryBySlug, getPestsByCategory } from "@/content/pests";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/ui/JsonLd";

const category = getCategoryBySlug("rodents");

export const metadata = generatePageMetadata({
  title: `${category?.name ?? "Rodent"} ID, Treatment & Prevention`,
  description:
    "Complete rodent control resource — mice, rats, voles & chipmunks. Signs of infestation, entry-point sealing techniques, and safe removal options for Ontario homeowners.",
  path: "/rodents/details",
  noIndex: true,
});

export default function RodentsDetailsPage() {
  if (!category) notFound();
  const pests = getPestsByCategory("rodents");

  const breadcrumbItems = [
    { label: "Pests", href: "/pests" },
    { label: "Rodents", href: "/rodents" },
    { label: "Details", href: "/rodents/details" },
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

      <section className="py-20 lg:py-28 bg-background" aria-labelledby="rodents-details-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              {category.name}
            </p>
            <h1 id="rodents-details-heading" className="font-heading text-4xl sm:text-5xl text-foreground">
              {category.name} Control Guide
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {category.description}
            </p>
          </ScrollReveal>

          <div className="space-y-20">
            {pests.map((pest) => (
              <ScrollReveal key={pest.slug} className="border border-muted rounded-xl bg-card p-8 lg:p-12">
                <div className="flex items-start justify-between mb-6">
                  <h2 className="font-heading text-3xl text-foreground">{pest.name}</h2>
                  <Link
                    href={`/pests/${pest.slug}`}
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors whitespace-nowrap ml-4"
                  >
                    View Full Page &rarr;
                  </Link>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">{pest.fullDescription}</p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-4">Treatment Steps</h3>
                    <ol className="space-y-3">
                      {pest.treatmentSteps.map((ts, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                            {i + 1}
                          </span>
                          <div>
                            <p className="font-semibold text-foreground">{ts.step}</p>
                            <p className="text-sm text-muted-foreground">{ts.description}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-4">Prevention Tips</h3>
                    <ul className="space-y-2">
                      {pest.preventionTips.map((tip, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-accent mt-0.5 flex-shrink-0">&#10003;</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-xl text-foreground mb-4">Signs of Infestation</h3>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {pest.signs.map((sign, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-destructive mt-0.5 flex-shrink-0">&bull;</span>
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
