"use client";

import { useEffect, useRef } from "react";

export function ProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (barRef.current) barRef.current.hidden = true;
      return;
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const el = barRef.current;
          if (el) {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
            el.style.transform = `scaleX(${progress})`;
          }
          ticking = false;
        });
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 right-0 h-1 bg-accent z-60 origin-left"
      style={{ transform: "scaleX(0)" }}
      aria-hidden="true"
    />
  );
}
