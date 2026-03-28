import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ReferralRewardProps {
  heading: string;
  description: string;
  highlights: readonly string[];
}

export function ReferralReward({ heading, description, highlights }: ReferralRewardProps) {
  return (
    <section className="py-20 lg:py-28 bg-primary" aria-labelledby="referral-reward-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 id="referral-reward-heading" className="font-heading text-3xl sm:text-4xl text-white">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-lg bg-white/10 px-5 py-3 border border-white/15"
            >
              <svg className="w-5 h-5 shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-white/90">{item}</span>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
