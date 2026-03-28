"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { homeConfig } from "@/content/pages/home.config";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { staggerContainer, staggerItem, buttonMicro } from "@/lib/animations";
import { getHeroImage } from "@/lib/images";

const PestSearchBar = dynamic(
  () => import("@/components/integrations/PestSearchBar").then((m) => ({ default: m.PestSearchBar })),
  { loading: () => <div className="h-11 w-full max-w-xs rounded-lg bg-white/10 animate-pulse" /> }
);

const { hero } = homeConfig;

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [activeType, setActiveType] = useState<
    (typeof hero.serviceTypes)[number]
  >("Residential");
  const radioRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleRadioKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    let nextIndex: number | null = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % hero.serviceTypes.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + hero.serviceTypes.length) % hero.serviceTypes.length;
    }
    if (nextIndex !== null) {
      setActiveType(hero.serviceTypes[nextIndex]);
      radioRefs.current[nextIndex]?.focus();
    }
  };

  const { scrollY } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const prefersReduced = useReducedMotion();
  const bgY = useTransform(scrollY, [0, 600], [0, 200]);

  const heroImage = getHeroImage("homepage");

  return (
    <section
      ref={heroRef}
      data-dark-bg
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label={hero.heading}
    >
      {/* Background overlay with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={prefersReduced ? undefined : { y: bgY }}
      >
        {heroImage ? (
          <>
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              sizes="100vw"
              priority
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80" aria-hidden="true" />
            <div className="absolute inset-0 hero-vignette" aria-hidden="true" />
          </>
        ) : (
          <>
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80"
              role="img"
              aria-label={hero.backgroundAlt}
            />
            <div className="absolute inset-0 hero-vignette" aria-hidden="true" />
          </>
        )}
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badges */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap gap-3 mb-6"
          >
            {hero.badges.map((badge) => (
              <Badge key={badge} variant="glass" size="lg">
                {badge}
              </Badge>
            ))}
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={staggerItem}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight"
          >
            {hero.heading}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={staggerItem}
            className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed"
          >
            {hero.subtext}
          </motion.p>

          {/* Residential/Commercial toggle + search */}
          <motion.div variants={staggerItem} className="mt-8">
            <div id="service-type-description" className="sr-only">
              Select service type to customize your pest control search
            </div>
            <div className="inline-flex flex-col sm:flex-row gap-4 w-full max-w-xl">
              {/* Toggle */}
              <div
                className="inline-flex rounded-lg bg-white/10 backdrop-blur-sm p-1 border border-white/20"
                role="radiogroup"
                aria-label="Service type"
                aria-describedby="service-type-description"
              >
                {hero.serviceTypes.map((type, index) => (
                  <button
                    key={type}
                    ref={(el) => { radioRefs.current[index] = el; }}
                    type="button"
                    role="radio"
                    aria-checked={activeType === type}
                    tabIndex={activeType === type ? 0 : -1}
                    onClick={() => setActiveType(type)}
                    onKeyDown={(e) => handleRadioKeyDown(e, index)}
                    className={`px-5 py-2 rounded-md text-sm font-semibold transition-[background-color,color,box-shadow] ${
                      activeType === type
                        ? "bg-card text-primary shadow-sm"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <PestSearchBar activeType={activeType} />
            </div>
          </motion.div>

          {/* Process pills */}
          <motion.ol
            variants={staggerItem}
            className="mt-8 flex flex-wrap items-center gap-2 list-none p-0 m-0"
            role="list"
          >
            {hero.processPills.map((pill, i) => (
              <li key={pill.label} className="flex items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-black/25 backdrop-blur-sm px-4 py-2 text-sm text-white border border-white/15">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                    {pill.step}
                  </span>
                  {pill.label}
                </span>
                {i < hero.processPills.length - 1 && (
                  <svg
                    className="w-4 h-4 text-white/60 hidden sm:block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </li>
            ))}
          </motion.ol>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.div {...buttonMicro}>
              <Button
                href={hero.cta.primary.href}
                variant="accent"
                size="lg"
                className="group/cta gap-2 font-semibold shadow-lg transition-shadow hover:shadow-xl"
              >
                {hero.cta.primary.label}
                <svg
                  className="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            </motion.div>
            <motion.div {...buttonMicro}>
              <Button
                href={hero.cta.phone.href}
                variant="outline-light"
                size="lg"
                className="gap-2 font-semibold"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                {hero.cta.phone.label}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
