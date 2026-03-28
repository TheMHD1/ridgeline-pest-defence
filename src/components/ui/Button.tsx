import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

const variantClasses: Record<string, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
  accent: "bg-accent text-accent-foreground hover:bg-accent/90",
  outline: "border border-primary text-primary bg-transparent hover:bg-primary/10",
  "outline-muted": "border border-muted text-muted-foreground bg-transparent hover:bg-muted/10",
  ghost: "bg-transparent text-foreground hover:bg-muted",
  lead: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg",
  "outline-light": "border-2 border-white/20 bg-white/10 text-white hover:bg-white/20",
  cta: "bg-accent text-accent-foreground hover:bg-accent/90",
};

const sizeClasses: Record<string, string> = {
  sm: "px-3 py-1.5 text-sm min-h-11",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
  xl: "px-8 py-4 text-lg",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-[var(--radius-default)] font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} role="button">
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
