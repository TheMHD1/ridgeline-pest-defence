"use client";

import { useInView, useMotionValue, useTransform, useReducedMotion, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { counterAnimation } from "@/lib/animations";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  once?: boolean;
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  className,
  once = true,
}: AnimatedCounterProps) {
  const safeTarget = Number.isFinite(target) ? target : 0;
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, amount: 0.1 });
  const prefersReduced = useReducedMotion();
  const hasMountedRef = useRef(false);
  const motionValue = useMotionValue(safeTarget);
  const rounded = useTransform(motionValue, (v) => Math.round(v));

  useEffect(() => {
    hasMountedRef.current = true;

    if (!isInView) return;

    if (prefersReduced) {
      motionValue.set(safeTarget);
      return;
    }

    // Animate from 0 → target via keyframes (avoids synchronous flash of "0" on hydration)
    const controls = animate(motionValue, [0, safeTarget], {
      duration: counterAnimation.duration,
      ease: counterAnimation.ease,
    });

    return () => controls.stop();
  }, [isInView, motionValue, safeTarget, prefersReduced]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${v.toLocaleString()}${suffix}`;
      }
    });

    // Set initial display value (target on SSR, current motion value after hydration)
    if (ref.current) {
      ref.current.textContent = `${prefix}${Math.round(motionValue.get()).toLocaleString()}${suffix}`;
    }

    return unsubscribe;
  }, [rounded, prefix, suffix, motionValue]);

  return (
    <span ref={ref} className={className} aria-live="polite" aria-atomic="true">
      {prefix}{safeTarget.toLocaleString()}{suffix}
    </span>
  );
}
