import { StarRating } from "./StarRating";

export interface TestimonialCardProps {
  name: string;
  text: string;
  rating?: number;
  subtitle?: string;
}

export function TestimonialCard({
  name,
  text,
  rating = 5,
  subtitle,
}: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <blockquote className="rounded-xl bg-card border border-border p-6 shadow-sm">
      <StarRating filled={rating} className="mb-4" />

      <p className="text-foreground leading-relaxed text-sm">
        &ldquo;{text}&rdquo;
      </p>

      <footer className="mt-5 flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm"
          aria-hidden="true"
        >
          {initials}
        </div>
        <div>
          <cite className="not-italic text-sm font-semibold text-foreground">
            {name}
          </cite>
          {subtitle && (
            <span className="block text-xs text-muted-foreground">
              {subtitle}
            </span>
          )}
        </div>
      </footer>
    </blockquote>
  );
}
