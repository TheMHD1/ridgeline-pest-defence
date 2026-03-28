"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { PestSpeciesGrid } from "@/components/sections/PestSpeciesGrid";
import { IPMProcess } from "@/components/sections/IPMProcess";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ServiceCTA } from "@/components/sections/ServiceCTA";
import { generateItemListSchema } from "@/lib/structured-data";
import type { PestCategory, PestData } from "@/content/types";
import { siteConfig } from "@/content/site.config";
import { seoConfig } from "@/content/seo.config";
import { getCategoryImage, getHeroImage } from "@/lib/images";
import { JsonLd } from "@/components/ui/JsonLd";

interface PestCategoryTemplateProps {
  category: PestCategory;
  pests: PestData[];
}

export function PestCategoryTemplate({ category, pests }: PestCategoryTemplateProps) {
  const heroImage = getHeroImage(category.slug) || getCategoryImage(category.slug);

  const itemListSchema = generateItemListSchema(
    pests.map((pest) => ({
      name: `${pest.name} Control`,
      url: `${seoConfig.siteUrl}/pests/${pest.slug}`,
      description: pest.shortDescription,
    }))
  );

  return (
    <>
      <JsonLd data={itemListSchema} />
      {/* Hero */}
      <section
        className="relative flex items-center overflow-hidden py-32 lg:py-40"
        aria-label={`${category.name} pest control`}
      >
        <div className="absolute inset-0 z-0">
          {heroImage ? (
            <>
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={heroImage.width}
                height={heroImage.height}
                sizes="100vw"
                fetchPriority="high"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80" aria-hidden="true" />
              <div className="absolute inset-0 hero-vignette" aria-hidden="true" />
            </>
          ) : (
            <>
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80"
                aria-hidden="true"
              />
              <div className="absolute inset-0 hero-vignette" aria-hidden="true" />
            </>
          )}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={staggerItem} className="mb-6">
              <Badge variant="glass" size="lg">Pest Library</Badge>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight"
            >
              {category.name}
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed"
            >
              {category.description}
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="mt-6 flex flex-wrap items-center gap-4"
            >
              {siteConfig.credentials.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/90"
                >
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="/contact" variant="accent" size="lg" className="gap-2 shadow-lg hover:shadow-xl">
                {siteConfig.cta.primary[0]}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center gap-2 rounded-[var(--radius-default)] border-2 border-white/20 bg-white/10 px-7 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-white/20"
                aria-label={`Call ${siteConfig.name} at ${siteConfig.contact.phone}`}
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
                {siteConfig.cta.phone[0]}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pest species grid */}
      <PestSpeciesGrid
        heading={`Common ${category.name} Species`}
        description={`Identify your pest below and learn about signs, risks, and treatment options. Every species gets a targeted approach — because a one-size treatment rarely fits.`}
        pests={pests}
      />

      {/* IPM process */}
      <IPMProcess
        heading={`${category.name} Treatment Process`}
        description={`The Integrated Pest Management approach for ${category.name.toLowerCase()} follows a proven sequence that targets the root cause — not just the symptom.`}
        steps={category.ipmSteps}
      />

      {/* CTA */}
      <ServiceCTA
        heading={`Dealing with ${category.name.toLowerCase()}?`}
        description={`Book a free inspection and get a same-day quote. Our ${category.name.toLowerCase()} specialists serve ${siteConfig.regions.join(", ")} — backed by a ${siteConfig.stats.guarantee} ${siteConfig.stats.guaranteeName}.`}
        primaryCta={{ label: siteConfig.cta.primary[1], href: "/contact" }}
      />
    </>
  );
}
