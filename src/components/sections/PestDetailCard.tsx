import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { PestData } from "@/content/types";

interface PestDetailCardProps {
  pest: PestData;
}

export function PestDetailCard({ pest }: PestDetailCardProps) {
  return (
    <ScrollReveal className="border border-muted rounded-xl bg-card p-8 lg:p-12">
      <div className="flex items-start justify-between mb-6">
        <h2 className="font-heading text-3xl text-foreground">{pest.name}</h2>
        <Link
          href={`/pests/${pest.slug}`}
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors whitespace-nowrap ml-4"
          aria-label={`Get treatment plan for ${pest.name}`}
        >
          Get Treatment Plan &rarr;
        </Link>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-8">{pest.fullDescription}</p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-heading text-xl text-foreground mb-4">Treatment Steps</h3>
          <ol className="space-y-3">
            {pest.treatmentSteps.map((ts, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{ts.step}</p>
                  <p className="text-sm text-muted-foreground">{ts.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="font-heading text-xl text-foreground mb-4">Prevention Tips</h3>
          <ul className="space-y-2">
            {pest.preventionTips.map((tip, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                <span className="text-accent mt-0.5 flex-shrink-0" aria-hidden="true">✓</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h3 className="font-heading text-xl text-foreground mb-4">Signs of Infestation</h3>
        <ul className="grid sm:grid-cols-2 gap-2">
          {pest.signs.map((sign, i) => (
            <li key={i} className="flex gap-2 text-sm text-muted-foreground">
              <span className="text-destructive mt-0.5 flex-shrink-0">&bull;</span>
              <span>{sign}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}
