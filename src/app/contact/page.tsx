import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { generateFAQSchema, generateBreadcrumbSchemaFromItems, generateReviewSchema, wrapInGraph } from "@/lib/structured-data";
import { contactConfig } from "@/content/pages/contact.config";
import { PageTransition } from "@/components/ui/PageTransition";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContentHero } from "@/components/sections/ContentHero";
import { FormPlaceholder } from "@/components/sections/FormPlaceholder";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { PestIdTips } from "@/components/sections/PestIdTips";
import { JsonLd } from "@/components/ui/JsonLd";
import { siteConfig } from "@/content/site.config";

export const metadata = generatePageMetadata({
  title: "Contact Ridgeline Pest Defence — Ontario & Edmonton Pest Control",
  description:
    "Contact Ridgeline Pest Defence for same-day pest control in Ontario & Edmonton. PMRA-licensed technicians, free inspections, and 12-month Zero-Comeback Guarantee. Call (905) 555-0174 or book online.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbItems = [{ label: "Contact", href: "/contact" }];

  const faqSchema = generateFAQSchema(contactConfig.faq.items);
  const reviewSchemas = generateReviewSchema(contactConfig.testimonials.reviews);
  const breadcrumbSchema = generateBreadcrumbSchemaFromItems(breadcrumbItems);

  const pageSchema = wrapInGraph(faqSchema, breadcrumbSchema, ...reviewSchemas);

  return (
    <PageTransition>
      <JsonLd data={pageSchema} />
      <Breadcrumbs items={breadcrumbItems} />
      <ContentHero
        badge={contactConfig.hero.badge}
        heading={contactConfig.hero.heading}
        subtitle={contactConfig.hero.subtitle}
        cta={contactConfig.hero.cta}
        backgroundAlt={contactConfig.hero.backgroundAlt}
      />
      <FormPlaceholder
        id="contact-form"
        heading={contactConfig.form.heading}
        description={contactConfig.form.description}

      />
      <div className="section-deferred">
        <ContactInfo
          heading={contactConfig.info.heading}
          phone={contactConfig.info.phone}
          email={contactConfig.info.email}
          hours={contactConfig.info.hours}
          serviceAreas={contactConfig.info.serviceAreas}
        />
      </div>
      <div className="section-deferred">
        <Testimonials
          heading={contactConfig.testimonials.heading}
          reviews={contactConfig.testimonials.reviews}
        />
      </div>
      <div className="section-deferred">
        <FAQ
          heading={contactConfig.faq.heading}
          items={contactConfig.faq.items}
          idPrefix="contact-faq"
        />
      </div>
      <div className="section-deferred">
        <section className="py-12 bg-muted/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Link href="/referral" className="text-primary hover:text-primary/80 font-medium transition-colors underline underline-offset-4">
              Refer a friend &amp; earn $50 — learn about our referral program &rarr;
            </Link>
          </div>
        </section>
      </div>
      <div className="section-deferred">
        <PestIdTips
          heading={contactConfig.pestId.heading}
          description={contactConfig.pestId.description}
          tips={contactConfig.pestId.tips}
          email={contactConfig.pestId.email}
          emailHref={contactConfig.pestId.emailHref}
        />
      </div>
    </PageTransition>
  );
}
