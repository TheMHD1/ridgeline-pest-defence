import type { PestData } from "@/content/types";

export const carpenterBeesPest: PestData = {
  slug: "carpenter-bees",
  name: "Carpenter Bees",
  category: "flyers",
  subspecies: [
    {
      name: "Eastern Carpenter Bee",
      description:
        "Large (19–25 mm), robust bees with a shiny, hairless black abdomen and yellow-furred thorax. Often mistaken for bumblebees, but bumblebees have fuzzy abdomens. Males are territorial and hover aggressively near nests but cannot sting. Females bore perfectly round 10 mm holes into untreated wood.",
    },
    {
      name: "Small Carpenter Bee",
      description:
        "Smaller (6–8 mm) and metallic blue-black. They nest in pithy stems, dead branches, and occasionally wooden trim. Less destructive than the Eastern species but can still cause cosmetic damage to decks, railings, and window frames over multiple seasons.",
    },
  ],
  shortDescription:
    "Carpenter bees drill perfectly round holes into decks, fascia, and wooden trim to nest inside. One season of boring is cosmetic — but the same holes get reused and expanded year after year, weakening structural wood.",
  fullDescription:
    "Carpenter bees drill perfectly round 10 mm holes — you'd think they used a power tool. A female bores straight in for about 15 mm, then turns 90 degrees to excavate a gallery running 15–30 cm along the wood grain. Inside, she provisions individual cells with pollen balls and lays one egg per cell.\n\nThe damage from a single gallery is mostly cosmetic. The real problem is cumulative: carpenter bees return to the same wood year after year, and daughters often nest adjacent to their mothers. Over 3–5 seasons, a deck fascia or pergola beam can become honeycombed with interconnected tunnels. Woodpeckers compound the damage — they hammer into carpenter bee galleries to feed on larvae.\n\nCarpenter bees strongly prefer untreated softwood: cedar, pine, redwood, and Douglas fir. Painted or stained surfaces are far less attractive. Treating the wood and sealing existing galleries stops the cycle before structural damage adds up.",
  signs: [
    "Perfectly round 10 mm holes in wooden fascia, deck rails, pergolas, or eaves — often with sawdust below",
    "Piles of coarse, light-colored sawdust on the ground beneath wooden structures",
    "Large, hovering bees near rooflines or deck areas in spring — males patrol aggressively but cannot sting",
    "Yellowish-brown staining (frass) streaking down from entry holes",
    "Woodpecker damage on wooden trim — woodpeckers excavate carpenter bee galleries to reach larvae",
  ],
  healthRisks: [
    "Female carpenter bees can sting if directly handled or trapped against skin, but they rarely do — they are solitary and non-aggressive",
    "Male carpenter bees hover and dive-bomb near nests but have no stinger at all",
    "Cumulative wood damage over multiple seasons can compromise deck rails, pergola beams, and fascia boards",
    "Woodpecker activity following carpenter bee infestation causes secondary structural and cosmetic damage",
  ],
  preventionTips: [
    "Paint or stain all exposed exterior wood — carpenter bees avoid treated surfaces",
    "Seal existing gallery holes in fall after bees have emerged, using steel wool and wood filler",
    "Replace softwood trim (cedar, pine) with hardwood, composite, or PVC alternatives in problem areas",
    "Install carpenter bee traps near known nesting sites to intercept females in spring",
    "Avoid leaving untreated lumber, firewood, or wooden furniture exposed on decks and patios",
  ],
  treatmentSteps: [
    {
      step: "Inspection & Gallery Mapping",
      description:
        "A technician locates all active and abandoned galleries in exterior wood. Entry holes, sawdust piles, and woodpecker damage are documented.",
    },
    {
      step: "Gallery Treatment",
      description:
        "Residual insecticidal dust is applied directly into active galleries using a bulb duster. The product coats the interior surfaces and eliminates bees and larvae inside.",
    },
    {
      step: "Entry Hole Sealing",
      description:
        "After treatment, gallery entrances are plugged with steel wool and sealed with wood filler or caulk to prevent reuse the following season.",
    },
    {
      step: "Exterior Wood Treatment",
      description:
        "A residual deterrent is applied to vulnerable untreated wood surfaces — fascia, eaves, and deck rails — to discourage new boring activity.",
    },
    {
      step: "Follow-Up & Prevention Plan",
      description:
        "A spring check confirms no new boring activity. Your technician recommends long-term prevention: painting, staining, or replacing softwood with composite materials.",
    },
  ],
  faqs: [
    {
      question: "Are carpenter bees the same as bumblebees?",
      answer:
        "No. Carpenter bees have a shiny, hairless black abdomen, while bumblebees are fully fuzzy with yellow bands on the abdomen. Carpenter bees are solitary nesters that bore into wood; bumblebees are social and nest in the ground or in cavities. The easiest tell: if the abdomen is shiny and black, it's a carpenter bee.",
    },
    {
      question: "Do carpenter bees eat wood?",
      answer:
        "No. Unlike termites, carpenter bees don't consume wood — they excavate it to create nesting galleries. The sawdust (frass) you see below the hole is the excavated material. They feed on pollen and nectar like other bees.",
    },
    {
      question: "Can carpenter bees cause structural damage?",
      answer:
        "One gallery per season is cosmetic. The danger is cumulative — carpenter bees return to the same wood annually, and daughters nest alongside mothers. After 3–5 years, a fascia board or deck beam can be honeycombed with tunnels. Woodpeckers enlarge the damage further by excavating galleries to reach larvae.",
    },
    {
      question: "Will carpenter bees sting me?",
      answer:
        "Males cannot sting at all — the hovering, dive-bombing bees near your deck are bluffing. Females have a stinger but are docile and rarely use it unless physically grabbed or trapped. Carpenter bees are far less aggressive than wasps or hornets.",
    },
    {
      question: "When are carpenter bees most active in Ontario?",
      answer:
        "Adults emerge in late April to early May when temperatures consistently exceed 15°C. Females bore new galleries or reoccupy old ones through May and June. A new generation emerges in late summer and often overwinters in the same galleries.",
    },
    {
      question: "How do I prevent carpenter bees from coming back?",
      answer:
        "Paint or stain all exposed exterior wood — it's the single most effective deterrent. Seal old gallery holes in fall after bees have left. For chronic areas, replace softwood trim with composite or PVC. Annual spring inspections catch new activity before damage accumulates.",
    },
  ],
  seasonalStatus: "Peak Season: Late April–July",
  searchTerms: ["carpenter bee", "carpenter bees", "wood bee", "wood bees", "boring bee"],
  relatedPestSlugs: ["wasps-hornets", "flies", "beetles"],
  cityPageSlugs: [],
  image: {
    src: "/images/pests/pest-carpenter-bees.webp",
    alt: "Eastern carpenter bee hovering near a round bore hole in a wooden deck railing",
  },
};
