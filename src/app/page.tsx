import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateLocalBusinessSchema, generateWebSiteSchema, generateReviewSchema, generateFAQSchema, wrapInGraph } from "@/lib/structured-data";
import { PageTransition } from "@/components/ui/PageTransition";
import { HeroSection } from "@/components/sections/HeroSection";
import { SeasonalPests } from "@/components/sections/SeasonalPests";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { PestIdSection } from "@/components/sections/PestIdSection";
import { TrustStats } from "@/components/sections/TrustStats";
import { AtticRestoration } from "@/components/sections/AtticRestoration";
import { RebatePrograms } from "@/components/sections/RebatePrograms";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FAQ } from "@/components/sections/FAQ";
import { homeConfig } from "@/content/pages/home.config";
import { siteConfig } from "@/content/site.config";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = generatePageMetadata({
  title: "Pest Control Ontario & Edmonton — PMRA-Licensed",
  description:
    `${siteConfig.name}: PMRA-licensed pest control across Ontario & Edmonton. 47-point inspections, eco-friendly treatments, and 12-month Zero-Comeback Guarantee.`,
  path: "",
});

export default function HomePage() {
  const reviewSchemas = generateReviewSchema(homeConfig.testimonials.reviews);
  const faqSchema = generateFAQSchema(homeConfig.faq);
  const pageSchema = wrapInGraph(
    ...reviewSchemas,
    faqSchema,
  );

  return (
    <PageTransition>
      <JsonLd data={pageSchema} />
      <HeroSection />
      <SeasonalPests />
      <div className="section-deferred">
        <ProcessSteps />
      </div>
      <div className="section-deferred">
        <PestIdSection />
      </div>
      <div className="section-deferred">
        <TrustStats />
      </div>
      <div className="section-deferred">
        <AtticRestoration />
      </div>
      <div className="section-deferred">
        <RebatePrograms />
      </div>
      <div className="section-deferred">
        <Testimonials
          heading={homeConfig.testimonials.heading}
          reviews={homeConfig.testimonials.reviews}
        />
      </div>
      <div className="section-deferred">
        <FAQ
          eyebrow="Common Questions"
          heading="Pest Control FAQs"
          items={homeConfig.faq}
          idPrefix="home-faq"
        />
      </div>
      <div className="section-deferred">
        <WhyChooseUs />
      </div>
    </PageTransition>
  );
}
