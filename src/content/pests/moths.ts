import type { PestData } from "@/content/types";

export const mothsPest: PestData = {
  slug: "moths",
  name: "Moths",
  category: "flyers",
  subspecies: [
    {
      name: "Pantry Moth (Indian Meal Moth)",
      description:
        "Plodia interpunctella is the most common stored-product moth worldwide. Its larvae spin silken webbing through flour, cereal, dried fruit, and pet food — contaminating far more product than they actually consume.",
    },
    {
      name: "Clothes Moth",
      description:
        "Tineola bisselliella larvae feed exclusively on animal-based fibers including wool, cashmere, silk, and feathers. Adults are tiny, golden-brown, and avoid light — the opposite of most moths you see fluttering around lamps.",
    },
    {
      name: "Brown House Moth",
      description:
        "Hofmannophila pseudospretella is a generalist feeder whose larvae damage textiles, stored food, and even leather bookbindings. It thrives in undisturbed areas like attics, closet corners, and behind furniture.",
    },
    {
      name: "White-Shouldered House Moth",
      description:
        "Endrosis sarcitrella is identifiable by its white head and mottled brown wings. Larvae feed on a wide range of organic debris in wall voids, bird nests in eaves, and accumulated lint in dryer vents.",
    },
  ],
  shortDescription:
    "Moths cause thousands of dollars in damage to clothing, textiles, and stored food before you ever notice them. Larvae — not adults — are the destructive stage.",
  fullDescription:
    "The adult moths you see flying are not the ones causing damage. It is the larvae that chew through your wool sweaters, contaminate your pantry staples, and leave behind silk webbing and frass pellets. A single female Indian meal moth lays up to 400 eggs directly on or near food sources, and larvae can chew through sealed plastic bags and thin cardboard.\n\nClothes moths are uniquely destructive because they are one of the few organisms capable of digesting keratin, the protein in animal hair and feathers. A small infestation in an undisturbed closet can destroy irreplaceable heirloom garments in a single season. These moths actively avoid light, so by the time you spot one in the open, the population is well-established.\n\nRidgeline Pest Defence uses pheromone-based monitoring traps to determine species and infestation scope before applying targeted treatments. Your technician inspects stored clothing, pantry goods, and hidden areas like HVAC ducts where lint and organic debris accumulate — because moths exploit food sources you did not know existed.",
  signs: [
    "Small moths (8–12mm wingspan) flying in zigzag patterns near pantries, closets, or light fixtures",
    "Silken webbing or cocoons on the surface of stored food products or inside packaging seams",
    "Irregular holes in wool, cashmere, or silk garments, especially along folds and seams",
    "Tiny cream-colored larvae crawling on shelving, walls, or ceilings near food storage",
    "Fine, sand-like frass (larval excrement) at the bottom of food containers or dresser drawers",
  ],
  healthRisks: [
    "Contamination of stored food with larvae, webbing, and fecal matter rendering products inedible",
    "Allergic reactions including skin irritation and respiratory symptoms from moth scales and frass dust",
    "Secondary fungal growth on food products damaged by moth larvae activity",
    "Significant financial loss from destruction of wool, silk, and cashmere clothing and rugs",
  ],
  preventionTips: [
    "Store dry goods in glass or heavy-duty plastic containers with airtight seals — moth larvae chew through paper and thin plastic easily",
    "Inspect all bulk food purchases before shelving, as infestations frequently originate from products bought already contaminated",
    "Clean closets and drawers seasonally, vacuuming corners and crevices where lint and hair accumulate",
    "Store off-season wool and silk garments in sealed garment bags with cedar blocks or lavender sachets",
    "Freeze suspect food items at -18°C for 72 hours to kill eggs and larvae before discarding",
    "Keep HVAC filters clean and dryer vents free of lint buildup, which provides hidden food sources for house moths",
  ],
  treatmentSteps: [
    {
      step: "Species Identification & Scope Assessment",
      description:
        "Pheromone monitoring traps are deployed to confirm the moth species and gauge population density. Pantry moth treatment is fundamentally different from clothes moth treatment, so accurate identification comes first.",
    },
    {
      step: "Infested Material Removal",
      description:
        "All contaminated food products or damaged textiles are identified and safely removed. Your technician inspects areas most homeowners miss — under shelf liners, inside seldom-opened pantry items, and in HVAC return ducts.",
    },
    {
      step: "Targeted Residual Treatment",
      description:
        "Crack-and-crevice applications of PMRA-registered insecticides target larval harborage zones. For clothes moths, treatments focus on closet baseboards, carpet edges, and furniture undersides where larvae feed on accumulated fibers.",
    },
    {
      step: "Pheromone Trap Monitoring",
      description:
        "Species-specific pheromone traps remain in place to track adult moth activity over the following weeks. A declining trap count confirms treatment success; persistent catches indicate a secondary source that needs attention.",
    },
    {
      step: "Prevention Protocol Setup",
      description:
        "You receive storage recommendations and a monitoring schedule tailored to your home. Ongoing pheromone traps provide early warning before any future moth population reaches a damaging level.",
    },
  ],
  faqs: [
    {
      question: "How do pantry moths get into sealed food packages?",
      answer:
        "Indian meal moth larvae can chew through cellophane, thin plastic wrap, and cardboard seams. Infestations frequently start at the grocery store or warehouse, and eggs are already present inside the package when you bring it home. Transferring dry goods to glass or thick plastic containers immediately after purchase is the most effective prevention.",
    },
    {
      question: "Do cedar closets really prevent clothes moths?",
      answer:
        "Fresh cedar oil has modest repellent properties against adult moths, but it does not kill larvae already feeding on fabric. Cedar effectiveness diminishes as the wood ages and its oil evaporates. Sanding the surface every 6 to 12 months partially restores oil release, but sealed garment storage is more reliable than cedar alone.",
    },
    {
      question: "Why did my moth problem come back after I threw out contaminated food?",
      answer:
        "Moth larvae often pupate away from the food source — behind shelf liners, in wall cracks, or even on the ceiling. If you remove infested food but do not treat harborage areas, pupae continue to emerge as adults for weeks. A thorough crack-and-crevice treatment addresses the stages you cannot see.",
    },
    {
      question: "Can moths damage synthetic fabrics?",
      answer:
        "Clothes moths cannot digest synthetic fibers like polyester or nylon. However, they will chew through synthetic-blend fabrics to reach wool or silk fibers woven in. They also feed on food stains and body oils deposited on any fabric, so even a polyester garment can sustain surface damage if it is stored soiled.",
    },
    {
      question: "How long does a moth infestation take to resolve?",
      answer:
        "Expect 4 to 8 weeks for full resolution because you need to outlast the pupal stage. Pupae are resistant to most insecticides and continue emerging as adults for several weeks after treatment. Pheromone traps monitor progress, and a follow-up treatment addresses any late-emerging adults.",
    },
  ],
  seasonalStatus: "Year-Round (peak Spring–Summer)",
  searchTerms: ["moth", "moths", "clothes moth", "pantry moth", "indian meal moth", "moth larvae", "moth damage"],
  relatedPestSlugs: ["flies", "beetles", "silverfish"],
  cityPageSlugs: [],
  image: {
    src: "/images/pests/pest-moths.webp",
    alt: "Indian meal moth resting on a pantry shelf with wings folded showing copper and tan coloring",
  },
};
