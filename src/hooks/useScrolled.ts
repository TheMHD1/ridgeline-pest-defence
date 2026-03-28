import { useState, useEffect } from "react";

export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > threshold);
        rafId = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [threshold]);

  return scrolled;
}
