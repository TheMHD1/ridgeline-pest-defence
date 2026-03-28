import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchemaFromItems } from "@/lib/structured-data";
import { JsonLd } from "@/components/ui/JsonLd";
import { siteConfig } from "@/content/site.config";
import { privacyPolicyConfig } from "@/content/pages/privacy-policy.config";
import { PageTransition } from "@/components/ui/PageTransition";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PrivacyContent } from "@/components/sections/PrivacyContent";

export const metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    `Read ${siteConfig.name}'s comprehensive privacy policy. Learn how we collect, use, and protect your personal information during pest control services and website interactions.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [{ label: "Privacy Policy", href: "/privacy-policy" }];

  const breadcrumbSchema = generateBreadcrumbSchemaFromItems(breadcrumbItems);

  return (
    <PageTransition>
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumbs items={breadcrumbItems} />
      {/* Simple hero for privacy page */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl text-white">
            {privacyPolicyConfig.hero.heading}
          </h1>
          <p className="mt-4 text-white/90 text-sm">
            Effective Date: {privacyPolicyConfig.hero.effectiveDate}
          </p>
          <p className="mt-4 text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
            {privacyPolicyConfig.hero.description}
          </p>
        </div>
      </section>
      <PrivacyContent sections={privacyPolicyConfig.sections} />
    </PageTransition>
  );
}
