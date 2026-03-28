import type { PestData } from "@/content/types";

export const fliesPest: PestData = {
  slug: "flies",
  name: "Flies",
  category: "flyers",
  subspecies: [
    {
      name: "House Fly",
      description:
        "The most common indoor fly species, Musca domestica breeds in decaying organic matter and can carry over 100 different pathogens on its body and legs.",
    },
    {
      name: "Fruit Fly",
      description:
        "Drosophila melanogaster measures just 3mm long but reproduces at staggering speed — a single female lays up to 500 eggs on fermenting fruit and vegetables.",
    },
    {
      name: "Cluster Fly",
      description:
        "Pollenia rudis parasitizes earthworms during larval stages and invades structures in large numbers each fall, seeking warm overwintering sites inside wall voids.",
    },
    {
      name: "Drain Fly",
      description:
        "Psychodidae larvae thrive in the gelatinous biofilm lining drain pipes. Adults are weak fliers with fuzzy, moth-like wings and rarely travel far from their breeding source.",
    },
  ],
  shortDescription:
    "Flies reproduce rapidly and spread bacteria across every surface they land on. Early intervention stops small nuisances from becoming full-scale infestations.",
  fullDescription:
    "A single house fly can carry more than 100 disease-causing organisms, transferring them every time it lands on your countertop or food. Flies taste with their feet and regurgitate digestive enzymes onto surfaces before feeding — a process that deposits pathogens directly where you prepare meals.\n\nFruit flies exploit the tiniest food residue to establish colonies that double in days. Drain flies breed inside the slimy biofilm coating pipes, making them nearly impossible to eliminate with surface sprays alone. Cluster flies behave differently altogether, invading wall voids by the thousands each autumn.\n\nRidgeline Pest Defence targets each species at its breeding source. Your technician identifies the exact fly type, eliminates larval habitat, and installs exclusion measures so the cycle breaks permanently rather than resetting every few weeks.",
  signs: [
    "Adult flies buzzing around kitchens, trash cans, or drains",
    "Small dark spots (fly specks) on walls, ceilings, and light fixtures",
    "Maggots visible in garbage bins or near decaying organic material",
    "Sweet or rotting odor near drain openings or garbage disposal units",
    "Clusters of slow-moving flies on sunny windows during fall and winter",
  ],
  healthRisks: [
    "Transmission of E. coli, Salmonella, and Shigella through surface contamination",
    "Spread of dysentery and cholera-causing organisms in food preparation areas",
    "Allergic reactions and asthma triggers from accumulated fly debris and feces",
    "Secondary bacterial infections from fly larvae (myiasis) in rare wound-contact cases",
  ],
  preventionTips: [
    "Store ripe fruit in the refrigerator and wipe down counters after every meal",
    "Clean drains weekly with an enzyme-based cleaner to dissolve biofilm buildup",
    "Keep trash cans sealed with tight-fitting lids and empty them at least twice per week",
    "Install fine-mesh screens on all windows and repair torn screens immediately",
    "Seal gaps around exterior doors with weatherstripping — house flies can squeeze through a 4mm crack",
    "Remove pet waste from yards daily, as it serves as a primary breeding medium",
  ],
  treatmentSteps: [
    {
      step: "Species Identification",
      description:
        "Your technician inspects the property to determine the exact fly species, because treatment for drain flies differs completely from treatment for cluster flies.",
    },
    {
      step: "Breeding Source Elimination",
      description:
        "Larval habitats are located and removed — biofilm in drains, decaying organic matter in trash areas, or moisture-damaged materials inside wall voids.",
    },
    {
      step: "Targeted Application",
      description:
        "PMRA-registered residual products are applied to resting surfaces and entry points. Baits and light traps are positioned based on species-specific behavior patterns.",
    },
    {
      step: "Exclusion & Sanitation Guidance",
      description:
        "Door sweeps, screen repairs, and drain maintenance recommendations are provided so breeding conditions do not re-establish after treatment.",
    },
    {
      step: "Follow-Up Monitoring",
      description:
        "A scheduled return visit confirms population collapse. Sticky traps placed during initial service are checked to verify species-level elimination.",
    },
  ],
  faqs: [
    {
      question: "Why do fruit flies appear overnight even in a clean kitchen?",
      answer:
        "Fruit flies can detect fermenting odors from over a kilometer away and enter through gaps smaller than 1mm. A single overripe banana or a thin residue inside a recycling bin is enough to attract and sustain a breeding colony within 24 hours.",
    },
    {
      question: "Are drain flies a sign of a plumbing problem?",
      answer:
        "Not necessarily. Drain flies breed in the organic biofilm that naturally coats pipes over time, even in fully functional plumbing. However, persistent infestations sometimes indicate a broken or leaking drain line that creates standing moisture beneath the slab.",
    },
    {
      question: "How fast can a fly infestation grow?",
      answer:
        "A single house fly female lays 500 eggs in her lifetime, and eggs hatch in as little as 8 hours under warm conditions. One generation completes its lifecycle in 7 to 10 days, meaning a handful of flies can produce thousands of offspring within a month.",
    },
    {
      question: "Do UV light traps actually work for fly control?",
      answer:
        "UV traps are effective monitoring and knockdown tools for house flies and cluster flies, but they do not eliminate breeding sources. Your Ridgeline technician uses traps as part of an integrated approach — not as a standalone fix.",
    },
    {
      question: "Why do cluster flies keep coming back every fall?",
      answer:
        "Cluster flies release aggregation pheromones in wall voids that attract future generations to the same overwintering site year after year. Sealing exterior entry points before September is the only reliable way to break this cycle.",
    },
  ],
  seasonalStatus: "Peak Season: Spring–Fall",
  searchTerms: ["fly", "flies", "cluster fly", "house fly", "drain fly", "fruit fly", "blow fly"],
  relatedPestSlugs: ["mosquitoes", "moths", "wasps-hornets"],
  cityPageSlugs: [],
  image: {
    src: "/images/pests/pest-flies.webp",
    alt: "Close-up of a house fly on a kitchen surface showing iridescent compound eyes and translucent wings",
  },
};
