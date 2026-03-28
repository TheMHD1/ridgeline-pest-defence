import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import type { LocationData } from "@/content/locations/types";

interface LocationTestimonialsProps {
  location: LocationData;
}

export function LocationTestimonials({ location }: LocationTestimonialsProps) {
  if (location.testimonials.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-card" aria-labelledby="location-testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Customer Reviews
          </p>
          <h2 id="location-testimonials-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
            What {location.name} Homeowners Say
          </h2>
        </ScrollReveal>

        <ScrollReveal className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {location.testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              text={testimonial.text}
              subtitle={testimonial.location}
              rating={testimonial.rating}
            />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
