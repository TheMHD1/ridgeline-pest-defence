import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/content/site.config";
import type { LocationData } from "@/content/locations/types";
import { serviceDescriptionVariants } from "@/content/services/regional-descriptions.config";

interface LocationServicesProps {
  location: LocationData;
}

function getServices(location: LocationData) {
  const region = location.region ?? "default";
  const variant = serviceDescriptionVariants[region] ?? serviceDescriptionVariants.default;
  return [
    {
      title: "Residential Pest Control",
      description: variant.residential(location.commonPests),
      href: "/residential",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
          <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
    },
    {
      title: "Commercial Pest Control",
      description: variant.commercial,
      href: "/commercial",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
          <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      ),
    },
    {
      title: "Wildlife Removal",
      description: variant.wildlife,
      href: "/wildlife",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
          <path d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.209-.553-.34-.874-.383a3.75 3.75 0 01-2.362-1.332l-.282-.376A4.5 4.5 0 008.5 6.516V5.906c0-.309.158-.597.42-.762a2.093 2.093 0 00.692-2.834l-.05-.084a2.25 2.25 0 00-3.447 2.874z" />
        </svg>
      ),
    },
    {
      title: "Attic Restoration",
      description: variant.atticRestoration,
      href: "/residential",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
          <path d="M11.42 15.17l-5.645-5.644a2.56 2.56 0 010-3.623 2.56 2.56 0 013.623 0L12 8.506l2.602-2.603a2.56 2.56 0 013.623 0 2.56 2.56 0 010 3.623L12.645 15.17a.868.868 0 01-1.225 0z" />
        </svg>
      ),
    },
  ];
}

export function LocationServices({ location }: LocationServicesProps) {
  const services = getServices(location);

  return (
    <section className="py-20 lg:py-28" aria-labelledby="location-services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Our Services
          </p>
          <h2 id="location-services-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
            Pest Control Services in {location.name}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Every service follows {siteConfig.process.name}: Assess, Treat, and Seal. Backed by our {siteConfig.stats.guaranteeName}.
          </p>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.title}>
              <Link
                href={service.href}
                className="group flex gap-5 rounded-xl border border-border bg-card p-6 shadow-sm transition-[box-shadow,border-color,transform] hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/30 focus-visible:shadow-lg focus-visible:border-primary/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white group-focus-within:bg-primary group-focus-within:text-white">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary group-focus-within:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
