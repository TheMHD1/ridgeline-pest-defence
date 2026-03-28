import { generatePageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site.config";
import { prepSheetsConfig } from "@/content/pages/prep-sheet.config";
import { PrepSheetTemplate } from "@/components/templates/PrepSheetTemplate";

const sheet = prepSheetsConfig.sheets.ants;

export const metadata = generatePageMetadata({
  title: "Pre-Treatment Guide: Ant Control Preparation",
  description:
    `Prepare for your ant treatment with this step-by-step guide. Kitchen, bathroom, and exterior prep instructions from ${siteConfig.name}.`,
  path: "/prep-sheet-ants",
});

export default function PrepSheetAntsPage() {
  return (
    <PrepSheetTemplate
      sheet={sheet}
      breadcrumbLabel="Ant Prep Sheet"
      breadcrumbHref="/prep-sheet-ants"
    />
  );
}
