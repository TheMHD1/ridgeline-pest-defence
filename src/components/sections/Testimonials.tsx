import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export interface TestimonialData {
  name: string;
  rating: number;
  text: string;
  city?: string;
}

interface TestimonialsProps {
  heading: string;
  reviews: readonly TestimonialData[] | TestimonialData[];
}

export function Testimonials({ heading, reviews }: TestimonialsProps) {
  return (
    <section className="py-20 lg:py-28 bg-card" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Customer Reviews
          </p>
          <h2 id="testimonials-heading" className="font-heading text-3xl sm:text-4xl text-foreground">
            {heading}
          </h2>
        </ScrollReveal>

        <ScrollReveal className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <TestimonialCard
              key={review.name}
              name={review.name}
              text={review.text}
              rating={review.rating}
              subtitle={review.city}
            />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
