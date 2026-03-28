"use client";

import { useRef, useEffect, useState, createElement, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
  delay?: number;
  as?: keyof HTMLElementTagNameMap;
}

/** Pre-trigger margin so elements begin animating before entering the viewport */
const REVEAL_ROOT_MARGIN = "150px 0px";

/** Motion settings for animations */
const MOTION_CONFIG = {
  translateY: "0.5rem", // Reduced from 1.5rem for better accessibility (WCAG motion threshold)
  duration: "0.5s",
  ease: "ease-out",
};

// Shared observer pool keyed by threshold+rootMargin
const observerPool = new Map<string, {
  observer: IntersectionObserver;
  callbacks: Map<Element, (isIntersecting: boolean) => void>;
}>();

function getSharedObserver(threshold: number, rootMargin: string) {
  const key = `${threshold}|${rootMargin}`;
  let entry = observerPool.get(key);
  if (!entry) {
    const callbacks = new Map<Element, (isIntersecting: boolean) => void>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          callbacks.get(e.target)?.(e.isIntersecting);
        }
      },
      { threshold, rootMargin }
    );
    entry = { observer, callbacks };
    observerPool.set(key, entry);
  }
  return entry;
}

const hiddenStyle: React.CSSProperties = {
  opacity: 0,
  transform: `translateY(${MOTION_CONFIG.translateY})`,
};

export function ScrollReveal({
  children,
  className,
  once = true,
  amount = 0.2,
  delay = 0,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setPrefersReduced(true);
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const { observer, callbacks } = getSharedObserver(amount, REVEAL_ROOT_MARGIN);

    callbacks.set(el, (isIntersecting) => {
      if (isIntersecting) {
        setIsVisible(true);
        if (once) {
          observer.unobserve(el);
          callbacks.delete(el);
          // Cleanup observer when no elements are being observed
          if (callbacks.size === 0) {
            observer.disconnect();
            observerPool.delete(`${amount}|${REVEAL_ROOT_MARGIN}`);
          }
        }
      } else if (!once) {
        setIsVisible(false);
      }
    });

    observer.observe(el);
    return () => {
      observer.unobserve(el);
      callbacks.delete(el);
      // Cleanup observer when no elements are being observed
      if (callbacks.size === 0) {
        observer.disconnect();
        observerPool.delete(`${amount}|${REVEAL_ROOT_MARGIN}`);
      }
    };
  }, [once, amount]);

  const style: React.CSSProperties = prefersReduced
    ? { opacity: 1, transform: "none", transition: "none" }
    : isVisible
      ? {
          opacity: 1,
          transform: "none",
          ["--reveal-delay" as string]: `${delay}s`,
        }
      : {
          ...hiddenStyle,
          ["--reveal-delay" as string]: `${delay}s`,
        };

  return createElement(
    Tag,
    {
      ref,
      className: `${className ?? ""} scroll-reveal-animated`.trim(),
      suppressHydrationWarning: true,
      style,
    },
    children,
  );
}
