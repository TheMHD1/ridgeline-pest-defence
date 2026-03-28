import type { PestData } from "@/content/types";

export const micePest: PestData = {
  slug: "mice",
  name: "Mice",
  category: "rodents",
  subspecies: [
    {
      name: "House Mouse",
      description:
        "The Mus musculus is the most common rodent invader in North American homes. Dusty gray with a lighter belly, it measures 2.5 to 3.75 inches long and adapts rapidly to indoor environments. A pair of house mice can produce up to 60 offspring in just three months.",
    },
    {
      name: "Deer Mouse",
      description:
        "Peromyscus maniculatus is bicolored — brown on top with a white underbelly and distinctly white feet. Primarily rural, it enters structures when temperatures drop below 50 degrees Fahrenheit. Deer mice are the primary carrier of Hantavirus in North America.",
    },
    {
      name: "White-Footed Mouse",
      description:
        "Peromyscus leucopus closely resembles the deer mouse but has a shorter, less sharply bicolored tail. It thrives in wooded and suburban areas and is the leading reservoir host for the bacterium that causes Lyme disease. Adults cache seeds and nuts inside wall voids for winter consumption.",
    },
  ],
  shortDescription:
    "Mice squeeze through gaps as small as a dime and breed at alarming speed — a single pair can produce up to 60 offspring in three months, turning a minor sighting into a full-blown infestation.",
  fullDescription:
    "Your home offers everything a mouse needs: warmth, moisture, and accessible food. House mice, deer mice, and white-footed mice all exploit entry points you probably overlook — utility pipe gaps, foundation cracks, and garage door seals worn by weather. Once inside, they establish nesting sites within wall cavities, attic insulation, and storage boxes.\n\nMice are prolific breeders. A female house mouse reaches sexual maturity at six weeks and delivers litters of five to eight pups every three weeks. That means a single pair can generate up to 60 descendants in a single season. Their gnawing habit damages electrical wiring, PVC plumbing, and structural wood, causing billions in property damage annually across North America.\n\nBeyond property damage, mice contaminate surfaces with urine micro-droplets as they travel. Deer mice shed Hantavirus through droppings and saliva, while white-footed mice carry the Borrelia bacteria responsible for Lyme disease. Ridgeline Pest Defence targets the biology behind the infestation — sealing entry points, eliminating harborage, and deploying tamper-resistant stations that break the breeding cycle at its source.",
  signs: [
    "Small, dark droppings (1/8 to 1/4 inch) concentrated along walls, inside cabinets, or near food sources",
    "Greasy rub marks along baseboards and pipes where fur oils transfer to surfaces",
    "Gnaw marks on food packaging, electrical wiring, or wood framing",
    "Scratching or scurrying noises in walls and ceilings, especially after dark",
    "Shredded paper, insulation, or fabric gathered into nest-like clumps in hidden areas",
  ],
  healthRisks: [
    "Hantavirus Pulmonary Syndrome transmitted through inhalation of aerosolized deer mouse droppings",
    "Salmonellosis from contaminated food surfaces — mice leave up to 80 droppings per day",
    "Lymphocytic Choriomeningitis Virus (LCMV) spread through house mouse urine and saliva",
    "Lyme disease bacteria carried by white-footed mice and transmitted via tick vectors",
  ],
  preventionTips: [
    "Seal all exterior gaps larger than 1/4 inch with copper mesh and silicone caulk — mice can flatten their skulls to fit through dime-sized openings",
    "Store pantry items in glass or heavy plastic containers with tight-fitting lids",
    "Keep vegetation trimmed at least 18 inches from your foundation to eliminate harborage",
    "Install door sweeps on all exterior doors, including the garage service door",
    "Remove bird feeders near the home or switch to spill-proof designs — dropped seed is a primary attractant",
    "Declutter storage areas like attics, basements, and garages to reduce nesting opportunities",
  ],
  treatmentSteps: [
    {
      step: "Inspection and Entry-Point Mapping",
      description:
        "A Ridgeline technician inspects the full exterior and interior for active entry points, droppings concentration, and nesting sites. Every gap, crack, and utility penetration is documented with photos.",
    },
    {
      step: "Exclusion and Structural Sealing",
      description:
        "Identified entry points are sealed with rodent-proof materials — galvanized steel mesh, copper wool, and commercial-grade sealant. This stops new mice from entering before any population reduction begins.",
    },
    {
      step: "Population Knockdown",
      description:
        "Tamper-resistant bait stations and snap-trap arrays are placed along confirmed runways. Station placement follows label requirements and keeps non-target animals safe.",
    },
    {
      step: "Sanitation and Contamination Cleanup",
      description:
        "Droppings, urine-soaked insulation, and nesting debris are removed using HEPA-filtered vacuums. Affected areas are treated with hospital-grade disinfectant to neutralize pathogens.",
    },
    {
      step: "Monitoring and Follow-Up",
      description:
        "Stations are checked on a scheduled rotation. Your technician tracks activity trends and adjusts placement until trapping data confirms zero activity for two consecutive service visits.",
    },
  ],
  faqs: [
    {
      question: "How do mice get into my house if all the doors are closed?",
      answer:
        "Mice can compress their skulls and squeeze through any gap wider than 1/4 inch — roughly the diameter of a pencil. Common entry points include pipe penetrations under sinks, dryer vent gaps, and worn garage door weatherstripping. A thorough exterior inspection is the fastest way to locate them.",
    },
    {
      question: "Are mice dangerous or just a nuisance?",
      answer:
        "Mice pose real health risks. Deer mice carry Hantavirus, house mice spread Salmonella and LCMV, and white-footed mice are a key link in the Lyme disease transmission cycle. A single mouse deposits 50 to 80 droppings daily, contaminating every surface it crosses.",
    },
    {
      question: "Why do I see more mice in fall and winter?",
      answer:
        "Outdoor temperatures below 50 degrees Fahrenheit trigger survival-driven migration toward heated structures. Mice detect warm air escaping through gaps and follow those thermal gradients inside. Activity spikes from October through February in most climate zones.",
    },
    {
      question: "Do ultrasonic repellers actually work on mice?",
      answer:
        "Independent studies — including research published by the University of Arizona — show that ultrasonic devices have no lasting deterrent effect. Mice habituate to the sound within days. Physical exclusion and targeted trapping remain the only methods backed by reproducible data.",
    },
    {
      question: "How fast can a mouse infestation grow?",
      answer:
        "Extremely fast. A female house mouse can birth a litter every 19 to 21 days, with five to eight pups per litter. Pups reach reproductive maturity at six weeks. One breeding pair can theoretically produce up to 60 offspring in three months if food and shelter are available.",
    },
  ],
  seasonalStatus: "Year-Round (peak Fall–Winter)",
  searchTerms: ["mouse", "mice", "mouse control", "field mouse", "house mouse", "deer mouse", "white-footed mouse"],
  relatedPestSlugs: ["rats", "voles"],
  cityPageSlugs: [
    "toronto", "mississauga", "brampton", "hamilton", "london",
    "kitchener", "oakville", "markham", "niagara", "north-york",
    "scarborough", "richmond-hill", "waterloo", "st-catharines", "edmonton",
  ],
  image: {
    src: "/images/pests/pest-mice.webp",
    alt: "House mouse on a kitchen countertop near crumbs, showing its dusty gray fur and large ears",
  },
};
