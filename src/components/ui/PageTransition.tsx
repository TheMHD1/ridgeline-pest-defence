import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <main
      id="main-content"
      className={`relative z-0 animate-page-enter${className ? ` ${className}` : ""}`}
    >
      {children}
    </main>
  );
}
