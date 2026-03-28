import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

const variantClasses: Record<string, string> = {
  default: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  destructive: "bg-destructive/10 text-destructive",
  outline: "border border-border text-foreground",
  glass: "bg-white/15 backdrop-blur-sm text-white border border-white/20",
};

const sizeClasses: Record<string, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-4 py-1.5 text-sm",
};

const baseClasses = "inline-flex items-center rounded-full font-medium";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
}

export function Badge({
  variant = "default",
  size = "sm",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </span>
  );
}
