import { generatePageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site.config";
import { prepSheetsConfig } from "@/content/pages/prep-sheet.config";
import { PrepSheetTemplate } from "@/components/templates/PrepSheetTemplate";

const sheet = prepSheetsConfig.sheets.bedbugs;

export const metadata = generatePageMetadata({
  title: sheet.heading,
  description:
    `Critical preparation steps for your bed bug treatment. Bedding, clothing, furniture, and room preparation guide from ${siteConfig.name}.`,
  path: "/prep-sheet-bedbugs",
});

export default function PrepSheetBedbugsPage() {
  return (
    <PrepSheetTemplate
      sheet={sheet}
      breadcrumbLabel="Bed Bug Prep Sheet"
      breadcrumbHref="/prep-sheet-bedbugs"
    />
  );
}
