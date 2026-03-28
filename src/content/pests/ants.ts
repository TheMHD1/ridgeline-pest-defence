import type { PestData } from "@/content/types";

export const antsPest: PestData = {
  slug: "ants",
  name: "Ants",
  category: "crawlers",
  subspecies: [
    {
      name: "Carpenter Ants",
      description:
        "Large black or dark brown ants (6–13 mm) that excavate wood to build satellite colonies. They don't eat wood — they hollow it out, leaving behind sawdust-like frass. A mature colony can contain 10,000–50,000 workers.",
    },
    {
      name: "Pavement Ants",
      description:
        "Small brown-black ants (2.5–4 mm) commonly found nesting under sidewalks, driveways, and foundation slabs. They push tiny mounds of sand through cracks. Originally from Europe, they're now one of Canada's most common urban ant species.",
    },
    {
      name: "Pharaoh Ants",
      description:
        "Tiny yellow-brown ants (1.5–2 mm) that thrive indoors year-round. They spread through budding — when disturbed, a group splits off with a queen to form a new colony. A single colony can have hundreds of queens, making DIY treatments counterproductive.",
    },
    {
      name: "Odorous House Ants",
      description:
        "Small dark brown ants (2.5–3 mm) that emit a rotten-coconut smell when crushed. They form supercolonies with multiple queens and can relocate nests every few weeks in response to rain or disturbance.",
    },
  ],
  shortDescription:
    "Ants invade Canadian homes in trails of thousands, contaminating food and — in the case of carpenter ants — damaging structural wood from the inside out.",
  fullDescription:
    "Ant colonies operate like a single organism. A queen can live 15–30 years, producing millions of offspring over her lifetime. When you see a trail of ants in your kitchen, you're looking at roughly 10% of the colony — the rest are hidden inside walls, under slabs, or in nearby soil.\n\nCarpenter ants are the most destructive species in Canadian homes. Unlike termites, they don't eat wood — they carve galleries through it to expand their nests. Left unchecked for 3–5 years, a carpenter ant colony can compromise load-bearing beams. The telltale sign is fine sawdust (frass) appearing near baseboards or window frames.\n\nEffective ant control requires identifying the species first. Pharaoh ants, for instance, will scatter and form new colonies if you spray them with retail pesticides — turning one problem into five. Professional baiting systems exploit the colony's food-sharing behaviour, letting workers carry toxicant back to the queen.",
  signs: [
    "Visible ant trails along baseboards, countertops, or exterior walls — especially near moisture or food sources",
    "Small piles of fine sawdust (frass) near wooden structures, indicating carpenter ant galleries",
    "Tiny sand mounds pushed up through cracks in concrete or pavement",
    "Rustling sounds inside walls during quiet evening hours — carpenter ant colonies are audible",
    "Winged ants (swarmers) appearing indoors during spring, signalling a mature colony nearby",
  ],
  healthRisks: [
    "Pharaoh ants carry Salmonella, Staphylococcus, and Streptococcus bacteria, posing a serious risk in kitchens and hospitals",
    "Carpenter ants cause structural wood damage that can cost thousands in repairs if left untreated for multiple seasons",
    "Ant-contaminated food can trigger allergic reactions in sensitive individuals",
    "Fire ants (less common in Canada) deliver painful stings that cause welts and, rarely, anaphylaxis",
  ],
  preventionTips: [
    "Store all food in sealed containers — ants can detect sugar from several metres away through chemical receptors on their antennae",
    "Fix leaking pipes and eliminate standing water; carpenter ants specifically target moisture-damaged wood",
    "Seal cracks and gaps around your foundation, windows, and where utility lines enter the building",
    "Trim tree branches and shrubs so they don't touch your home — ants use vegetation as bridges to upper floors",
    "Remove firewood stacks and lumber from against exterior walls; carpenter ants frequently nest in stored wood",
    "Clean up crumbs and spills immediately — a single scout ant leaves a pheromone trail that recruits hundreds of nestmates within hours",
  ],
  treatmentSteps: [
    {
      step: "Inspection & Species Identification",
      description:
        "A technician locates entry points, trail patterns, and nesting sites. Species ID is critical — the wrong treatment on Pharaoh ants causes colony budding and makes the problem worse.",
    },
    {
      step: "Targeted Baiting",
      description:
        "Slow-acting gel or granular baits are placed along active trails. Workers carry the bait back to the colony, sharing it through trophallaxis (mouth-to-mouth feeding) until the queen ingests a lethal dose.",
    },
    {
      step: "Perimeter Barrier Treatment",
      description:
        "A residual insecticide is applied around the foundation and key entry points. This creates a chemical barrier that eliminates foraging ants on contact and deters new colonies from moving in.",
    },
    {
      step: "Nest Elimination (Carpenter Ants)",
      description:
        "When a carpenter ant satellite nest is located inside a wall, targeted dust or foam injection delivers insecticide directly into galleries without tearing open drywall.",
    },
    {
      step: "Follow-Up Monitoring",
      description:
        "A return visit 2–4 weeks later confirms colony collapse. Bait stations are checked and refreshed. For carpenter ants, annual inspections are recommended for 2 years.",
    },
  ],
  faqs: [
    {
      question: "Why do ants keep coming back after I spray them?",
      answer:
        "Retail sprays kill foragers on contact but never reach the queen. She replaces lost workers within days. Worse, some species like Pharaoh ants respond to repellent sprays by splitting into multiple new colonies — a process called budding. Professional baiting targets the queen through the colony's own food-sharing system.",
    },
    {
      question: "How do I tell carpenter ants apart from regular ants?",
      answer:
        "Carpenter ants are noticeably larger (6–13 mm vs. 2–4 mm for most species). They have a single node between thorax and abdomen, and their waist is evenly rounded — not pinched. If you find coarse sawdust piles near baseboards or hear faint rustling in walls at night, carpenter ants are the likely culprit.",
    },
    {
      question: "Can ants damage my home's structure?",
      answer:
        "Carpenter ants absolutely can. They excavate wood to create nesting galleries, preferring softened or moisture-damaged lumber. A colony active for 3–5 years can hollow out support beams, floor joists, and window frames. Annual inspection is the cheapest form of prevention.",
    },
    {
      question: "Are ants active in winter in Canada?",
      answer:
        "Outdoor colonies go dormant below 10°C, but indoor colonies — especially Pharaoh ants and carpenter ants with satellite nests in heated walls — remain active year-round. Seeing ants inside during winter is a strong indicator of an established indoor nest.",
    },
    {
      question: "How fast can an ant colony grow?",
      answer:
        "A single queen can lay up to 800 eggs per day depending on species. Pavement ant colonies reach 10,000 workers within a year. Carpenter ant colonies grow slower (3,000–10,000 over 3–6 years) but cause disproportionate damage because of their wood-excavating behaviour.",
    },
  ],
  seasonalStatus: "Peak Season: Spring–Fall",
  prepSheetSlug: "ants",
  searchTerms: ["ant", "ants", "carpenter ant", "carpenter ants", "pavement ant", "pharaoh ant", "fire ant", "ant infestation"],
  relatedPestSlugs: ["cockroaches", "silverfish", "centipedes"],
  cityPageSlugs: [
    "toronto", "mississauga", "brampton", "hamilton", "london",
    "kitchener", "oakville", "markham", "niagara", "north-york",
    "scarborough", "richmond-hill", "waterloo", "st-catharines", "edmonton",
  ],
  image: {
    src: "/images/pests/pest-ants.webp",
    alt: "Close-up of carpenter ants on a wooden surface showing their large mandibles and dark coloring",
  },
};
