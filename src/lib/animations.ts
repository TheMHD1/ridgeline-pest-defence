import type { Variants, Transition } from "framer-motion";

const EASE_SMOOTH = [0.25, 0.1, 0.25, 1] as const;

const defaultTransition: Transition = {
  duration: 0.5,
  ease: EASE_SMOOTH,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};


export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const scaleOnHover = {
  whileHover: { scale: 1.03, willChange: 'transform' },
  whileTap: { scale: 0.98, willChange: 'transform' },
  transition: { duration: 0.2 },
};


export const buttonMicro = {
  whileHover: { scale: 1.02, y: -1, willChange: 'transform' },
  whileTap: { scale: 0.98, willChange: 'transform' },
  transition: { duration: 0.15 },
};

export const accordionContent: Variants = {
  collapsed: { height: 0, opacity: 0, overflow: "hidden" },
  expanded: {
    height: "auto",
    opacity: 1,
    overflow: "hidden",
    transition: { duration: 0.3, ease: EASE_SMOOTH },
  },
};

export const mobileMenu: Variants = {
  closed: { x: "100%", opacity: 0 },
  open: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: EASE_SMOOTH },
  },
};

export const tabCrossfade: Variants = {
  hidden: { opacity: 0, x: 10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25 },
  },
  exit: {
    opacity: 0,
    x: -10,
    transition: { duration: 0.2 },
  },
};

export const counterAnimation = {
  duration: 1.5,
  ease: EASE_SMOOTH as [number, number, number, number],
};

export const menuStaggerContainer: Variants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

export const menuStaggerItem: Variants = {
  closed: { opacity: 0, x: 20 },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: EASE_SMOOTH },
  },
};
