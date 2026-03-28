import { homeConfig } from "@/content/pages/home.config";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { StarRating } from "@/components/ui/StarRating";
import { Container } from "@/components/ui/Container";

const { trustStats } = homeConfig;

/** Parse a stat value and return counter props if numeric, or null for text stats */
function parseStatValue(value: string): { target: number; prefix: string } | null {
  const cleaned = value.replace(/,/g, "");
  const match = cleaned.match(/^(\$?)(\d+)$/);
  if (!match) return null;
  return { prefix: match[1], target: parseInt(match[2], 10) };
}

export function TrustStats() {
  return (
    <section className="py-20 lg:py-28 bg-background" aria-labelledby="trust-heading">
      <Container>
        <ScrollReveal className="text-center mb-12">
          <h2 id="trust-heading" className="text-2xl font-heading font-bold text-foreground mb-4">Trust and credentials</h2>
        </ScrollReveal>

        {/* Stats grid */}
        <ScrollReveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {trustStats.stats.map((stat) => {
            const parsed = parseStatValue(stat.value);
            const suffix = "suffix" in stat ? (stat.suffix as string) : "";

            return (
              <div
                key={stat.label}
                className="text-center rounded-xl bg-card border border-border p-6 shadow-sm"
              >
                <p className="font-heading text-3xl lg:text-4xl text-primary">
                  {parsed ? (
                    <AnimatedCounter
                      target={parsed.target}
                      prefix={parsed.prefix}
                      suffix={suffix}
                    />
                  ) : (
                    <>
                      {stat.value}
                      {suffix && <span className="text-xl">{suffix}</span>}
                    </>
                  )}
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.description}</p>
              </div>
            );
          })}
        </ScrollReveal>

        {/* Guarantee + Rating row */}
        <ScrollReveal className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8">
          {/* Guarantee badge */}
          <div className="flex items-center gap-3 rounded-xl bg-primary/5 border border-primary/10 px-6 py-4">
            <svg className="w-8 h-8 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <span className="font-heading text-lg text-foreground">{trustStats.guarantee}</span>
          </div>

          {/* 5-star rating */}
          <div className="flex flex-col items-center gap-2">
            <StarRating filled={trustStats.rating.stars} />
            <p className="text-sm text-muted-foreground">{trustStats.rating.text}</p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
