import type { PestData, PestCategory, PestCategorySlug } from "@/content/types";

/* ── Individual pest imports ────────────────── */
import { antsPest } from "./ants";
import { spidersPest } from "./spiders";
import { cockroachesPest } from "./cockroaches";
import { bedBugsPest } from "./bed-bugs";
import { centipedesPest } from "./centipedes";
import { silverfishPest } from "./silverfish";
import { fleasPest } from "./fleas";
import { earwigsPest } from "./earwigs";
import { termitesPest } from "./termites";

import { fliesPest } from "./flies";
import { mosquitoesPest } from "./mosquitoes";
import { waspsHornetsPest } from "./wasps-hornets";
import { mothsPest } from "./moths";
import { beetlesPest } from "./beetles";
import { boxelderBugsPest } from "./boxelder-bugs";
import { ladyBugsPest } from "./lady-bugs";
import { carpenterBeesPest } from "./carpenter-bees";

import { micePest } from "./mice";
import { ratsPest } from "./rats";
import { volesPest } from "./voles";
import { chipmunksPest } from "./chipmunks";

import { raccoonsPest } from "./raccoons";
import { squirrelsPest } from "./squirrels";
import { skunksPest } from "./skunks";
import { batsPest } from "./bats";
import { molesPest } from "./moles";
import { birdsPest } from "./birds";
import { opossumsPest } from "./opossums";

/* ── All pests (28 entries) ─────────────────── */
export const allPests: PestData[] = [
  /* Crawlers */
  antsPest,
  spidersPest,
  cockroachesPest,
  bedBugsPest,
  centipedesPest,
  silverfishPest,
  fleasPest,
  earwigsPest,
  termitesPest,
  /* Flyers */
  fliesPest,
  mosquitoesPest,
  waspsHornetsPest,
  mothsPest,
  beetlesPest,
  boxelderBugsPest,
  ladyBugsPest,
  carpenterBeesPest,
  /* Rodents */
  micePest,
  ratsPest,
  volesPest,
  chipmunksPest,
  /* Wildlife */
  raccoonsPest,
  squirrelsPest,
  skunksPest,
  batsPest,
  molesPest,
  birdsPest,
  opossumsPest,
];

/* ── Category definitions ───────────────────── */
export const pestCategories: PestCategory[] = [
  {
    slug: "crawlers",
    name: "Crawlers",
    description:
      "Ants, cockroaches, spiders, bed bugs, and other crawling insects that invade your home through cracks, pipes, and foundations. Most are nocturnal — by the time you spot one, dozens more are hidden nearby.",
    pests: ["ants", "spiders", "cockroaches", "bed-bugs", "centipedes", "silverfish", "fleas", "earwigs", "termites"],
    ipmSteps: [
      {
        step: "Thorough Inspection",
        description:
          "Our technicians check every entry point, moisture zone, and harbourage area using a 47-point checklist tailored to crawling insects.",
      },
      {
        step: "Customized Treatment Plan",
        description:
          "You receive a written plan that identifies the species, severity, and exact treatment strategy — no guesswork.",
      },
      {
        step: "Targeted Applications",
        description:
          "We apply species-specific products only where needed: baits, dusts, and residual barriers placed in cracks, voids, and travel paths.",
      },
      {
        step: "Exclusion Techniques",
        description:
          "Gaps around pipes, vents, and foundations are sealed with caulk, mesh, or weatherstripping to cut off re-entry routes.",
      },
      {
        step: "Follow-up Monitoring",
        description:
          "Sticky traps and scheduled re-inspections confirm the treatment held. If activity returns within 12 months, so do we — free of charge.",
      },
    ],
    heroImage: {
      src: "/images/pests/hero-crawlers.webp",
      alt: "Close-up of a crawling insect on a residential foundation wall",
    },
  },
  {
    slug: "flyers",
    name: "Flyers",
    description:
      "Flies, mosquitoes, wasps, moths, and other airborne pests that breed fast and turn outdoor spaces into no-go zones. A single house fly carries over 100 pathogens on its body.",
    pests: ["flies", "mosquitoes", "wasps-hornets", "moths", "beetles", "boxelder-bugs", "lady-bugs", "carpenter-bees"],
    ipmSteps: [
      {
        step: "Species Identification",
        description:
          "Correct ID is half the battle. Our technicians determine the exact species so treatments target the right biology and behaviour.",
      },
      {
        step: "Breeding Site Elimination",
        description:
          "Standing water, organic waste, and damp materials are located and addressed — cutting populations off at the source.",
      },
      {
        step: "Adult Insect Control",
        description:
          "Targeted knockdown treatments, UV traps, and baiting stations reduce the active adult population quickly.",
      },
      {
        step: "Barrier Treatments",
        description:
          "Perimeter sprays and screen repairs create a chemical and physical barrier that keeps new flyers out of your living space.",
      },
      {
        step: "Ongoing Prevention",
        description:
          "Seasonal monitoring and proactive treatments during peak months keep populations below nuisance thresholds all year.",
      },
    ],
    heroImage: {
      src: "/images/pests/hero-flyers.webp",
      alt: "Wasp nest attached to a residential eave in summer",
    },
  },
  {
    slug: "rodents",
    name: "Rodents",
    description:
      "Mice, rats, and voles gnaw through wiring, contaminate food, and reproduce rapidly. Professional rodent control with exclusion and monitoring.",
    pests: ["mice", "rats", "voles", "chipmunks"],
    ipmSteps: [
      {
        step: "Detailed Inspection",
        description:
          "We trace droppings, gnaw marks, and grease trails to map every active runway and entry point inside and outside your property.",
      },
      {
        step: "Customized Treatment Plan",
        description:
          "Your written plan details the species, population estimate, bait station locations, and a clear timeline for results.",
      },
      {
        step: "Active Population Control",
        description:
          "Tamper-resistant bait stations and snap traps are placed along confirmed travel routes. Interior trapping prioritises quick, humane kills.",
      },
      {
        step: "Entry Point Exclusion",
        description:
          "Steel wool, copper mesh, and metal flashing are used to seal gaps around pipes, vents, and foundations. This prevents re-entry after population control is achieved.",
      },
      {
        step: "Ongoing Monitoring",
        description:
          "Stations are checked on a scheduled rotation. Entry points are sealed progressively as activity drops — backed by our 12-month guarantee.",
      },
    ],
    heroImage: {
      src: "/images/pests/hero-rodents.webp",
      alt: "Mouse near a residential foundation gap at dusk",
    },
  },
  {
    slug: "wildlife",
    name: "Wildlife",
    description:
      "Raccoons, squirrels, skunks, bats, and other animals that damage attics, soffits, and foundations. Ontario law requires humane removal — and that is exactly how Ridgeline operates.",
    pests: ["raccoons", "squirrels", "skunks", "bats", "moles", "birds", "opossums"],
    ipmSteps: [
      {
        step: "Inspection & Assessment",
        description:
          "We identify the species, locate all entry and exit points, and check for babies or nesting activity before any work begins.",
      },
      {
        step: "Humane Removal",
        description:
          "One-way doors and live-exclusion techniques let animals leave safely without the stress of trapping. All methods comply with Ontario wildlife regulations.",
      },
      {
        step: "Exclusion Work",
        description:
          "Roof vents, soffits, weep holes, and foundation gaps are reinforced with galvanized steel mesh and heavy-gauge screening.",
      },
      {
        step: "Damage Assessment",
        description:
          "Contaminated insulation, soiled vapour barriers, and damaged wiring are documented. We provide attic restoration quotes on the spot.",
      },
      {
        step: "Prevention",
        description:
          "Tree-limb trimming guidance, chimney caps, and ongoing monitoring ensure wildlife stays out — guaranteed for 12 months.",
      },
    ],
    heroImage: {
      src: "/images/pests/hero-wildlife.webp",
      alt: "Raccoon peering out from a residential soffit opening",
    },
  },
];

/* ── Helper functions ───────────────────────── */
export function getPestBySlug(slug: string): PestData | undefined {
  return allPests.find((p) => p.slug === slug);
}

export function getPestsByCategory(category: string): PestData[] {
  return allPests.filter((p) => p.category === category);
}

export function getCategoryBySlug(slug: string): PestCategory | undefined {
  return pestCategories.find((c) => c.slug === slug);
}

export function isCategorySlug(value: string): value is PestCategorySlug {
  return ["crawlers", "flyers", "rodents", "wildlife"].includes(value);
}
