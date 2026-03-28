import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/content/site.config";
import type { PestCityPageData } from "@/content/pest-city/types";

interface PestCityServicesProps {
  data: PestCityPageData;
}

export function PestCityServices({ data }: PestCityServicesProps) {
  return (
    <section
      className="py-20 lg:py-28 bg-card"
      aria-labelledby="pest-city-services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Our Services
          </p>
          <h2
            id="pest-city-services-heading"
            className="font-heading text-3xl sm:text-4xl text-foreground"
          >
            {data.pestName} Services in {data.cityName}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Every treatment begins with a {siteConfig.process.steps[0].description.split(" ")[0]} inspection and ends with a{" "}
            {siteConfig.stats.guarantee} {siteConfig.stats.guaranteeName}. Here is what our{" "}
            {data.cityName} technicians deliver.
          </p>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.services.map((service, i) => (
            <div
              key={service.name}
              className="rounded-xl border border-border bg-background p-6 shadow-sm"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-heading text-sm mb-4">
                {i + 1}
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
