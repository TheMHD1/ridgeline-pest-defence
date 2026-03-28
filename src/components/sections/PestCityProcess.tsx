import { TreatmentProcessBase } from "@/components/sections/PestTreatmentProcess";
import type { PestCityPageData } from "@/content/pest-city/types";

interface PestCityProcessProps {
  data: PestCityPageData;
}

export function PestCityProcess({ data }: PestCityProcessProps) {
  return (
    <TreatmentProcessBase
      heading={`How We Handle ${data.pestName} in ${data.cityName}`}
      steps={data.treatmentSteps}
      idPrefix="pest-city-process"
    />
  );
}
