import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface CityLink {
  readonly name: string;
  readonly slug: string;
}

interface PestGroup {
  readonly pest: string;
  readonly slug: string;
  readonly cities: readonly CityLink[];
}

interface PestByCityDirectoryProps {
  heading: string;
  description: string;
  groups: readonly PestGroup[];
}

export function PestByCityDirectory({ heading, description, groups }: PestByCityDirectoryProps) {
  return (
    <section className="py-20 lg:py-28 bg-muted/30" aria-labelledby="city-directory-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <h2 id="city-directory-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </ScrollReveal>

        <ScrollReveal className="space-y-10">
          {groups.map((group) => (
            <div
              key={group.slug}
              className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-sm"
            >
              <h3 className="font-heading text-xl text-foreground mb-4">
                {group.pest}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${group.slug}-${city.slug}`}
                    className="inline-flex items-center rounded-lg bg-background border border-border px-3.5 py-2 text-sm text-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    {group.pest} {city.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
