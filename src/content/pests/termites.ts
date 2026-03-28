import type { PestData } from "@/content/types";

export const termitesPest: PestData = {
  slug: "termites",
  name: "Termites",
  category: "crawlers",
  subspecies: [
    {
      name: "Subterranean Termite",
      description:
        "The most common and destructive termite in Canada (4–8 mm). Pale, soft-bodied workers build mud tubes from the soil to reach wood above ground. Colonies can contain 60,000–1,000,000 individuals. They require constant soil contact for moisture and travel through mud shelter tubes to reach wood inside your home.",
    },
    {
      name: "Dampwood Termite",
      description:
        "Larger than subterranean species (up to 20 mm for soldiers). They infest wood with high moisture content — logs, stumps, and structural timber with water damage. Less common in urban homes but found in cottages, barns, and buildings with chronic leaks or ground-contact wood.",
    },
  ],
  shortDescription:
    "Termites consume wood from the inside out, leaving a paper-thin shell that looks solid until it collapses. A mature colony eats over 2 kg of wood per year — silently, invisibly, 24 hours a day.",
  fullDescription:
    "Termites cause more structural damage in Canada than fires and floods combined — and most homeowner insurance doesn't cover it. A subterranean termite colony eats 24 hours a day, seven days a week, consuming over 2 kg of wood annually. Because they eat from the inside out, the surface looks perfectly intact until the damage is catastrophic.\n\nSubterranean termites are the primary threat in Ontario. They build pencil-width mud tubes from the soil up foundation walls to reach wood framing. These tubes maintain the humidity they need to survive. A mature colony can contain over a million workers, and they'll travel up to 100 metres from the nest to find food.\n\nDetection is the biggest challenge. Termites avoid light and open air, so infestations progress for years before anyone notices. Mud tubes on foundation walls, hollow-sounding wood, and discarded wings near windows are the earliest visible signs. Annual professional inspections are the most reliable way to catch termite activity before repair costs escalate.",
  signs: [
    "Pencil-width mud tubes running up foundation walls, piers, or inside crawl spaces",
    "Wood that sounds hollow when tapped — termites consume the interior and leave a thin outer shell",
    "Discarded wings near windows or doors in spring — termite swarmers shed wings after mating flights",
    "Bubbling or uneven paint on wood surfaces, caused by moisture from termite galleries below",
    "Sagging floors, stiff-fitting doors, or crumbling baseboards in areas near soil contact",
  ],
  healthRisks: [
    "Termite damage can compromise load-bearing beams, floor joists, and wall studs — creating serious structural safety risks",
    "Repair costs for advanced termite damage routinely exceed $10,000–$30,000 and are typically not covered by homeowner insurance",
    "Termite frass and gallery dust can trigger mild allergic or respiratory responses in sensitive individuals",
    "Moisture conditions that support termites also promote mould growth, compounding indoor air quality issues",
  ],
  preventionTips: [
    "Eliminate wood-to-soil contact around your home — raise siding, deck posts, and fence boards at least 15 cm above grade",
    "Fix leaking taps, downspouts, and condensation issues; termites need constant moisture to survive",
    "Store firewood, lumber, and mulch at least 5 metres from the foundation and off the ground",
    "Ensure crawl spaces are well-ventilated and free of standing water or debris",
    "Grade soil away from the foundation so surface water drains outward, not toward the house",
    "Schedule annual professional termite inspections — early detection prevents five-figure repair bills",
  ],
  treatmentSteps: [
    {
      step: "Comprehensive Inspection",
      description:
        "A technician inspects the foundation, crawl space, basement walls, and all wood-to-soil contact points. Moisture meters and probing tools identify active galleries and assess damage extent.",
    },
    {
      step: "Liquid Soil Treatment",
      description:
        "A continuous termiticide barrier is applied in the soil around the foundation perimeter. This barrier eliminates termites on contact as they travel between the soil colony and your home's wood.",
    },
    {
      step: "Bait Station Installation",
      description:
        "In-ground bait stations placed around the property intercept foraging termites. Workers carry the bait back to the colony, where it spreads through grooming and feeding, collapsing the colony from within.",
    },
    {
      step: "Damage Documentation",
      description:
        "All structural damage is documented with photos and measurements. Your technician provides a detailed report for insurance claims and contractor repair quotes.",
    },
    {
      step: "Annual Monitoring Program",
      description:
        "Bait stations are inspected and refreshed quarterly. Annual full inspections catch any new activity early. Covered by our 12-month Zero-Comeback Guarantee with renewal options.",
    },
  ],
  faqs: [
    {
      question: "How do I know if I have termites or carpenter ants?",
      answer:
        "Termites are pale, soft-bodied, with straight antennae and no visible waist. Carpenter ants are dark, hard-bodied, with elbowed antennae and a pinched waist. Termite damage is packed with mud and frass; carpenter ant galleries are clean with sawdust piles nearby. Both cause wood damage, but the treatment strategies are completely different.",
    },
    {
      question: "Does homeowner insurance cover termite damage?",
      answer:
        "Almost never. Most Canadian homeowner policies explicitly exclude termite damage because it's classified as a maintenance issue, not a sudden loss. This makes prevention and early detection critical — repair costs for advanced infestations routinely reach $10,000–$30,000.",
    },
    {
      question: "Are termites common in Ontario?",
      answer:
        "Subterranean termites are established in southwestern Ontario and parts of the GTA. Activity has been documented in Toronto, Hamilton, and surrounding areas. As urban heat islands expand and winters moderate, the risk zone is shifting northward.",
    },
    {
      question: "How fast do termites cause damage?",
      answer:
        "A mature colony consumes over 2 kg of wood per year. That's slow per day, but the damage is cumulative and invisible — by the time you notice hollow-sounding wood or sagging floors, the colony has been feeding for years. Annual inspections catch damage early when repairs are still minor.",
    },
    {
      question: "Can I treat termites myself?",
      answer:
        "Retail products are inadequate for termite control. Effective treatment requires specialized equipment to create a continuous soil barrier around the foundation and professionally monitored bait stations. Incomplete treatment leaves gaps that termites exploit immediately.",
    },
    {
      question: "What time of year do termites swarm?",
      answer:
        "In Ontario, subterranean termite swarms typically occur in spring (April–June) on warm, humid days after rain. Swarmers are winged reproductive termites that fly out to start new colonies. Finding discarded wings near windows or doors is a strong indicator of a nearby colony.",
    },
  ],
  seasonalStatus: "Year-Round (swarms in Spring)",
  searchTerms: ["termite", "termites", "subterranean termite", "drywood termite", "termite damage", "termite inspection"],
  relatedPestSlugs: ["ants", "carpenter-bees", "beetles"],
  cityPageSlugs: [
    "toronto", "mississauga", "brampton", "hamilton", "london",
    "kitchener", "oakville", "markham", "niagara", "north-york",
    "scarborough", "richmond-hill", "waterloo", "st-catharines", "edmonton",
  ],
  image: {
    src: "/images/pests/pest-termites.webp",
    alt: "Subterranean termite mud tubes on a concrete foundation wall showing worker termites",
  },
};
