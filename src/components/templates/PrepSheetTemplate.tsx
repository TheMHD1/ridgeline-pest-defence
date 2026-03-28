import { generateBreadcrumbSchemaFromItems } from "@/lib/structured-data";
import { prepSheetsConfig, type PrepSheetData } from "@/content/pages/prep-sheet.config";
import { PageTransition } from "@/components/ui/PageTransition";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContentHero } from "@/components/sections/ContentHero";
import { PrepSheetContent } from "@/components/sections/PrepSheetContent";
import { PrepSheetCTA } from "@/components/sections/PrepSheetCTA";
import { JsonLd } from "@/components/ui/JsonLd";

interface PrepSheetTemplateProps {
  sheet: PrepSheetData;
  breadcrumbLabel: string;
  breadcrumbHref: string;
}

export function PrepSheetTemplate({ sheet, breadcrumbLabel, breadcrumbHref }: PrepSheetTemplateProps) {
  const breadcrumbItems = [{ label: breadcrumbLabel, href: breadcrumbHref }];
  const breadcrumbSchema = generateBreadcrumbSchemaFromItems(breadcrumbItems);

  return (
    <PageTransition>
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumbs items={breadcrumbItems} />
      <ContentHero
        badge="Treatment Preparation"
        heading={sheet.heading}
        subtitle={sheet.subtitle}
        backgroundAlt={`Preparation guide for ${sheet.pestName} treatment`}
      />
      <PrepSheetContent sections={sheet.sections} />
      <PrepSheetCTA
        heading={prepSheetsConfig.cta.heading}
        description={prepSheetsConfig.cta.description}
        phone={prepSheetsConfig.cta.phone}
        email={prepSheetsConfig.cta.email}
        bookCta={prepSheetsConfig.cta.bookCta}
      />
    </PageTransition>
  );
}
