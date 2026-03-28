import { StarIcon } from "@/components/ui/StarIcon";

interface StarRatingProps {
  count?: number;
  filled?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

export function StarRating({
  count = 5,
  filled = 5,
  size = "md",
  className,
}: StarRatingProps) {
  return (
    <div
      className={`flex gap-0.5 ${className ?? ""}`}
      role="img"
      aria-label={`${filled} out of ${count} stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon
          key={i}
          className={`${sizeClasses[size]} ${
            i < filled ? "text-accent" : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );
}
