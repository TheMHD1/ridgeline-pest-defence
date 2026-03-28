import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PEST_SLUG_MAP } from "@/content/mappings";
import type { LocationData } from "@/content/locations/types";

interface LocationPestsProps {
  location: LocationData;
}

const pestIcons: Record<string, string> = {
  "Mice": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
  default: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z",
};

export function LocationPests({ location }: LocationPestsProps) {
  return (
    <section className="py-20 lg:py-28 bg-card" aria-labelledby="location-pests-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Common Pests
          </p>
          <h2 id="location-pests-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
            Pests We Treat in {location.name}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {location.localChallenges}
          </p>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {location.commonPests.map((pest) => {
            const slug = PEST_SLUG_MAP[pest];
            const href = slug ? `/pests/${slug}` : "/pests";

            return (
              <div key={pest}>
                <Link
                  href={href}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-[box-shadow,border-color,transform] hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/30 focus-visible:shadow-lg focus-visible:border-primary/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10 shrink-0">
                    <svg className="w-5 h-5 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                      <path d={pestIcons.default} />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary group-focus-within:text-primary transition-colors">
                      {pest}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      See Local Solutions
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
