import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import type { PestCityPageData } from "@/content/pest-city/types";

interface PestCityTestimonialsProps {
  data: PestCityPageData;
}

export function PestCityTestimonials({ data }: PestCityTestimonialsProps) {
  if (data.testimonials.length === 0) return null;

  return (
    <section
      className="py-20 lg:py-28"
      aria-labelledby="pest-city-testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Customer Reviews
          </p>
          <h2
            id="pest-city-testimonials-heading"
            className="font-heading text-3xl sm:text-4xl text-foreground"
          >
            What {data.cityName} Clients Say About Our {data.pestName}
          </h2>
        </ScrollReveal>

        <ScrollReveal className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              text={testimonial.text}
              subtitle={testimonial.location}
            />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
