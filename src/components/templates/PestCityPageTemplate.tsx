import { PestCityHero } from "@/components/sections/PestCityHero";
import { PestCityOverview } from "@/components/sections/PestCityOverview";
import { PestCityServices } from "@/components/sections/PestCityServices";
import { PestCityProcess } from "@/components/sections/PestCityProcess";
import { PestCityAreas } from "@/components/sections/PestCityAreas";
import { PestCityTestimonials } from "@/components/sections/PestCityTestimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ServiceCTA } from "@/components/sections/ServiceCTA";
import { siteConfig } from "@/content/site.config";
import type { PestCityPageData } from "@/content/pest-city/types";

interface PestCityPageTemplateProps {
  data: PestCityPageData;
}

export function PestCityPageTemplate({ data }: PestCityPageTemplateProps) {
  return (
    <>
      <PestCityHero data={data} />
      <PestCityOverview data={data} />
      <div className="section-deferred">
        <PestCityServices data={data} />
      </div>
      <div className="section-deferred">
        <PestCityProcess data={data} />
      </div>
      <div className="section-deferred">
        <PestCityAreas data={data} />
      </div>
      <div className="section-deferred">
        <PestCityTestimonials data={data} />
      </div>
      <div className="section-deferred">
        {data.faqs.length > 0 && (
          <FAQ
            eyebrow="FAQ"
            heading={`${data.pestName} Questions in ${data.cityName}`}
            items={data.faqs}
            idPrefix="pest-city-faq"
            bgClass="bg-card"
          />
        )}
      </div>
      <div className="section-deferred">
        <ServiceCTA
          heading={`Book ${data.pestName} in ${data.cityName}`}
          description={`Schedule your comprehensive inspection today. Most ${data.cityName} appointments available within ${data.responseTime.toLowerCase()}.`}
          primaryCta={{ label: siteConfig.cta.primary[1], href: "/contact" }}
        />
      </div>
    </>
  );
}
