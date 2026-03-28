import { generatePageMetadata } from "@/lib/metadata";
import { generateFAQSchema, generateBreadcrumbSchemaFromItems, generateReviewSchema, wrapInGraph } from "@/lib/structured-data";
import { JsonLd } from "@/components/ui/JsonLd";
import { siteConfig } from "@/content/site.config";
import { quoteConfig } from "@/content/pages/quote.config";
import { PageTransition } from "@/components/ui/PageTransition";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContentHero } from "@/components/sections/ContentHero";
import { QuoteFeatures } from "@/components/sections/QuoteFeatures";
import { FormPlaceholder } from "@/components/sections/FormPlaceholder";
import { PestIdTips } from "@/components/sections/PestIdTips";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ServiceCommitment } from "@/components/sections/ServiceCommitment";

export const metadata = generatePageMetadata({
  title: "Free Pest Control Quote — Same-Day Response | Ridgeline",
  description:
    `Request a free pest control quote from ${siteConfig.name}. PMRA-licensed technicians respond within hours. Serving Ontario and Edmonton since ${siteConfig.founded}.`,
  path: "/quote",
});

export default function QuotePage() {
  const breadcrumbItems = [{ label: "Get a Quote", href: "/quote" }];

  const faqSchema = generateFAQSchema(quoteConfig.faq);
  const breadcrumbSchema = generateBreadcrumbSchemaFromItems(breadcrumbItems);
  const reviewSchemas = generateReviewSchema(
    quoteConfig.testimonials.map((t) => ({
      name: t.name,
      text: t.content,
      rating: t.rating,
      city: t.location,
    }))
  );

  const pageSchema = wrapInGraph(faqSchema, breadcrumbSchema, ...reviewSchemas);

  return (
    <PageTransition>
      <JsonLd data={pageSchema} />
      <Breadcrumbs items={breadcrumbItems} />
      <ContentHero
        badge={quoteConfig.hero.badge}
        heading={quoteConfig.hero.heading}
        subtitle={quoteConfig.hero.subtitle}
        cta={quoteConfig.hero.cta}
        backgroundAlt={quoteConfig.hero.backgroundAlt}
      />
      <QuoteFeatures
        heading={quoteConfig.features.heading}
        items={quoteConfig.features.items}
      />
      <FormPlaceholder
        id="quote-form"
        heading={quoteConfig.form.heading}
        description={quoteConfig.form.description}
      />
      <PestIdTips
        heading={quoteConfig.pestId.heading}
        description={quoteConfig.pestId.description}
        tips={quoteConfig.pestId.tips}
        email={quoteConfig.pestId.email}
        emailHref={quoteConfig.pestId.emailHref}
      />
      <ServiceCommitment
        heading={quoteConfig.commitment.heading}
        description={quoteConfig.commitment.description}
        items={quoteConfig.commitment.guarantees}
        stat={quoteConfig.commitment.stat}
      />
      <Testimonials
        heading="What Our Customers Say"
        reviews={quoteConfig.testimonials.map((t) => ({
          name: t.name,
          rating: t.rating,
          text: t.content,
          city: t.location,
        }))}
      />
      <FAQ
        eyebrow="Common Questions"
        heading="Quote & Service FAQs"
        items={quoteConfig.faq}
        idPrefix="quote-faq"
      />
    </PageTransition>
  );
}
