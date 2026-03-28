import type { PestData } from "@/content/types";

export const chipmunksPest: PestData = {
  slug: "chipmunks",
  name: "Chipmunks",
  category: "rodents",
  subspecies: [
    {
      name: "Eastern Chipmunk",
      description:
        "The only chipmunk species in Ontario (20–25 cm including tail). Reddish-brown with five dark and two light stripes running from head to rump. Cheek pouches can expand to three times the size of the head for food transport. They dig extensive burrow systems up to 3 metres long with multiple chambers for food storage, nesting, and waste.",
    },
  ],
  shortDescription:
    "Chipmunks tunnel under patios, stairs, and foundations, creating burrow networks that undermine hardscaping and let water drain toward your home. Cute above ground — destructive below it.",
  fullDescription:
    "A single chipmunk can store up to 8 lbs of food in its burrow — enough to fill a grocery bag. They stockpile acorns, seeds, bulbs, and berries in underground chambers connected by tunnels that extend up to 3 metres. That impressive food-hoarding behaviour is exactly why they dig so aggressively around residential properties.\n\nChipmunk burrows are the real problem. Entrances appear as small 5 cm holes along foundations, beside patios, under front steps, and in garden beds. Below the surface, tunnel networks undermine walkways, retaining walls, and foundation drainage. Water follows the tunnels straight to your foundation wall, accelerating erosion and creating moisture conditions that attract other pests.\n\nChipmunks are protected under Ontario wildlife regulations, so control requires humane methods. One-way exclusion, habitat modification, and targeted trapping (where permitted) are the standard approach. Sealing burrow entrances without removing the animals first traps them inside, which is both inhumane and ineffective.",
  signs: [
    "Small 5 cm diameter holes near foundations, patios, retaining walls, or garden borders",
    "Chipmunks running along fences, walls, or across the yard with visibly stuffed cheeks",
    "Dug-up flower bulbs, scattered seed shells, or raided bird feeders",
    "Shifting, sinking, or cracked patio stones and walkway pavers above burrow tunnels",
    "Gnaw marks on garden hoses, outdoor wiring, or plastic edging",
  ],
  healthRisks: [
    "Chipmunk burrows undermine foundations, patios, and retaining walls — settling and cracking follow",
    "Burrow tunnels redirect rainwater toward foundations, accelerating erosion and basement moisture",
    "Chipmunks carry fleas and ticks that can transmit Lyme disease and other tick-borne illnesses",
    "Stored food caches inside burrows attract secondary pests including mice, ants, and beetles",
  ],
  preventionTips: [
    "Remove bird feeders or switch to squirrel-proof models — spilled seed is the primary chipmunk attractant around homes",
    "Keep garden beds clean of fallen fruit, seed hulls, and leaf litter that provide food and cover",
    "Install L-shaped mesh barriers along the base of patios, decks, and foundation walls to block burrowing",
    "Stack firewood and lumber at least 5 metres from the house to reduce harbourage",
    "Trim ground-level shrubs so chipmunks can't use dense cover to stage near your foundation",
    "Seal gaps around basement windows and utility conduits — chipmunks will use any opening over 5 cm",
  ],
  treatmentSteps: [
    {
      step: "Inspection & Burrow Mapping",
      description:
        "A technician locates all active burrow entrances around the property, checks for structural undermining, and identifies food sources attracting the population.",
    },
    {
      step: "Humane Exclusion",
      description:
        "One-way exclusion devices or live traps (where permitted by Ontario regulations) are used to remove chipmunks without harm. Babies and nesting activity are checked before any entry point is sealed.",
    },
    {
      step: "Burrow Sealing",
      description:
        "After confirmed vacancy, burrow entrances are backfilled with gravel and sealed with heavy-gauge mesh or hardware cloth to prevent re-excavation.",
    },
    {
      step: "Habitat Modification",
      description:
        "Your technician recommends specific changes — bird feeder removal, ground cover reduction, and mesh barrier installation — that make the property less attractive to chipmunks.",
    },
    {
      step: "Follow-Up Monitoring",
      description:
        "A return visit 3–4 weeks later checks for new burrow activity. Any recurrence is addressed under our 12-month Zero-Comeback Guarantee.",
    },
  ],
  faqs: [
    {
      question: "Can chipmunks damage my home's foundation?",
      answer:
        "Yes. Chipmunk burrows run alongside and beneath foundations, patios, and retaining walls. The tunnels redirect water toward your foundation and undermine the soil that supports hardscaping. Over time, this leads to cracking, settling, and moisture infiltration.",
    },
    {
      question: "Are chipmunks protected in Ontario?",
      answer:
        "Chipmunks are classified as furbearing mammals under Ontario's Fish and Wildlife Conservation Act. Humane removal methods are required. Ridgeline uses one-way exclusion and habitat modification as the primary approach, with live trapping where regulations permit.",
    },
    {
      question: "Why do chipmunks dig near my patio?",
      answer:
        "Patios and front steps provide overhead cover that chipmunks use to protect burrow entrances from predators and rain. The gap between the patio slab and the foundation is an ideal entry point. Stone or brick patios with sand bases are especially easy for chipmunks to excavate under.",
    },
    {
      question: "Will removing bird feeders stop chipmunks?",
      answer:
        "It helps significantly. Spilled seed below bird feeders is the single biggest chipmunk attractant in most yards. Removing feeders or switching to squirrel-proof designs with catch trays reduces the food source that supports high chipmunk populations near your home.",
    },
    {
      question: "Do chipmunks carry diseases?",
      answer:
        "Chipmunks themselves rarely transmit diseases directly to humans, but they carry fleas and ticks that do. Blacklegged ticks on chipmunks can carry Lyme disease. Their burrows also attract mice, which bring additional parasite and disease risks.",
    },
  ],
  seasonalStatus: "Peak Season: April–October",
  searchTerms: ["chipmunk", "chipmunks", "chipmunk removal", "chipmunk damage", "chipmunk control"],
  relatedPestSlugs: ["squirrels", "mice", "voles"],
  cityPageSlugs: [],
  image: {
    src: "/images/pests/pest-chipmunks.webp",
    alt: "Eastern chipmunk with full cheek pouches beside a residential foundation wall",
  },
};
