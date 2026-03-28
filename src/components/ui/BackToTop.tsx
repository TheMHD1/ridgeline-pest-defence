"use client";

import { useScrolled } from "@/hooks/useScrolled";

export function BackToTop() {
  const visible = useScrolled(400);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      className={`fixed bottom-20 right-4 lg:bottom-8 lg:right-6 z-30 inline-flex items-center justify-center w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-lg transition-[background-color,transform,opacity] hover:bg-primary/90 hover:scale-110 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
        visible ? 'opacity-100 pointer-events-auto animate-fade-in' : 'opacity-0 pointer-events-none invisible'
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
