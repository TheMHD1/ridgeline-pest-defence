import { generatePageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site.config";
import { prepSheetsConfig } from "@/content/pages/prep-sheet.config";
import { PrepSheetTemplate } from "@/components/templates/PrepSheetTemplate";

const sheet = prepSheetsConfig.sheets.cockroaches;

export const metadata = generatePageMetadata({
  title: "Pre-Service Preparation: Cockroach Treatment Guidelines",
  description:
    `Maximize cockroach treatment effectiveness with proper preparation. Kitchen, bathroom, and living area preparation guide from ${siteConfig.name}.`,
  path: "/prep-sheet-cockroaches",
});

export default function PrepSheetCockroachesPage() {
  return (
    <PrepSheetTemplate
      sheet={sheet}
      breadcrumbLabel="Cockroach Prep Sheet"
      breadcrumbHref="/prep-sheet-cockroaches"
    />
  );
}
