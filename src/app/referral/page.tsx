import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchemaFromItems, generateReviewSchema, generateFAQSchema, generateOfferSchema, wrapInGraph } from "@/lib/structured-data";
import { JsonLd } from "@/components/ui/JsonLd";
import { seoConfig } from "@/content/seo.config";
import { siteConfig } from "@/content/site.config";
import { referralConfig } from "@/content/pages/referral.config";
import { PageTransition } from "@/components/ui/PageTransition";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContentHero } from "@/components/sections/ContentHero";
import { ReferralProcess } from "@/components/sections/ReferralProcess";
import { ReferralReward } from "@/components/sections/ReferralReward";
import { ReferralForm } from "@/components/sections/ReferralForm";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";

export const metadata = generatePageMetadata({
  title: "Referral Program — Earn $50 Per Referral",
  description:
    `Refer a friend to ${siteConfig.name} and earn $50 cash per successful referral. No limit on earnings. Fill out our referral form today.`,
  path: "/referral",
});

export default function ReferralPage() {
  const breadcrumbItems = [{ label: "Referral Program", href: "/referral" }];

  const breadcrumbSchema = generateBreadcrumbSchemaFromItems(breadcrumbItems);
  const reviewSchemas = generateReviewSchema(referralConfig.testimonials.reviews);
  const faqSchema = generateFAQSchema(referralConfig.faq.questions);

  const offerSchema = generateOfferSchema({
    name: "Referral Program - $50 Cash Per Referral",
    description: "Earn $50 cash for every successful referral to Ridgeline Pest Defence. No limit on referrals.",
    type: "ReferralProgram",
    price: "$50",
    eligibleRegion: [...seoConfig.jsonLd.areaServed],
    eligibleService: "Pest Control Services",
    url: seoConfig.siteUrl + "/referral"
  });

  const pageSchema = wrapInGraph(breadcrumbSchema, faqSchema, offerSchema, ...reviewSchemas);

  return (
    <PageTransition>
      <JsonLd data={pageSchema} />
      <Breadcrumbs items={breadcrumbItems} />
      <ContentHero
        badge={referralConfig.hero.badge}
        heading={referralConfig.hero.heading}
        subtitle={referralConfig.hero.subtitle}
        cta={referralConfig.hero.cta}
        backgroundAlt={referralConfig.hero.backgroundAlt}
      />
      <ReferralProcess
        heading={referralConfig.process.heading}
        steps={referralConfig.process.steps}
      />
      <ReferralReward
        heading={referralConfig.reward.heading}
        description={referralConfig.reward.description}
        highlights={referralConfig.reward.highlights}
      />
      <ReferralForm
        heading={referralConfig.form.heading}
        description={referralConfig.form.description}
        submitLabel={referralConfig.form.submitLabel}
      />
      <Testimonials
        heading={referralConfig.testimonials.heading}
        reviews={referralConfig.testimonials.reviews}
      />
      <FAQ
        heading={referralConfig.faq.heading}
        description={referralConfig.faq.description}
        items={referralConfig.faq.questions}
        idPrefix="referral-faq"
      />
    </PageTransition>
  );
}
