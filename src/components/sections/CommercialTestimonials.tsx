import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

interface Review {
  readonly name: string;
  readonly role: string;
  readonly text: string;
  readonly rating: number;
}

interface CommercialTestimonialsProps {
  heading: string;
  reviews: readonly Review[];
}

export function CommercialTestimonials({
  heading,
  reviews,
}: CommercialTestimonialsProps) {
  return (
    <section className="py-20 lg:py-28 bg-background" aria-labelledby="commercial-testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Customer Reviews
          </p>
          <h2
            id="commercial-testimonials-heading"
            className="font-heading text-3xl sm:text-4xl text-foreground"
          >
            {heading}
          </h2>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <TestimonialCard
              key={review.name}
              name={review.name}
              text={review.text}
              rating={review.rating}
              subtitle={review.role}
            />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
