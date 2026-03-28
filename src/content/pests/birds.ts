import type { PestData } from "@/content/types";

export const birdsPest: PestData = {
  slug: "birds",
  name: "Birds",
  category: "wildlife",
  subspecies: [
    {
      name: "Pigeon (Columba livia domestica)",
      description:
        "Feral pigeons thrive in every Canadian city. A single breeding pair can produce up to 12 offspring per year, and flocks concentrate on ledges, rooftops, and HVAC units where their acidic droppings (pH 3–4.5) corrode metal, concrete, and painted surfaces. Pigeons are not protected under the Migratory Birds Convention Act.",
    },
    {
      name: "European Starling (Sturnus vulgaris)",
      description:
        "An invasive species introduced to North America in 1890 — all 200 million on the continent descend from roughly 100 birds released in New York's Central Park. Starlings nest aggressively in dryer vents, bathroom exhausts, and soffits. Their bulky nests block airflow and create fire hazards. Not protected under the Migratory Birds Convention Act.",
    },
    {
      name: "House Sparrow (Passer domesticus)",
      description:
        "Another non-native species that competes aggressively with native cavity-nesting birds. House sparrows nest inside building signage, light fixtures, warehouse rafters, and retail store entryways. Their droppings contaminate food storage and preparation areas in commercial settings. Not protected under the Migratory Birds Convention Act.",
    },
    {
      name: "Canada Goose (Branta canadensis)",
      description:
        "Ontario's resident Canada goose population has grown dramatically since the 1970s. A single goose produces up to 1.5 kg of droppings per day, fouling commercial lawns, parks, and waterfront properties. Canada geese are protected under the Migratory Birds Convention Act — management requires federal permits.",
    },
  ],
  shortDescription:
    "Pest bird droppings corrode building materials, block ventilation, and carry over 60 transmissible pathogens. Pigeon guano alone has a pH as low as 3, acidic enough to etch stone and metal.",
  fullDescription:
    "Nuisance birds cause more property damage to Canadian commercial and residential buildings than any other wildlife category. Pigeon, starling, and sparrow droppings are acidic enough to corrode steel, degrade concrete, and strip automotive paint. Accumulated droppings also block drainage systems, clog HVAC intakes, and create slip-and-fall hazards on walkways.\n\nHealth risks are equally serious. Dried bird droppings harbour Histoplasma capsulatum, Cryptococcus neoformans, and Chlamydia psittaci — fungal and bacterial pathogens that become airborne when disturbed. Commercial food-handling facilities face regulatory shutdown if bird contamination is identified during health inspections.\n\nManagement strategies vary by species and legal status. Pigeons, starlings, and house sparrows are not protected under the Migratory Birds Convention Act and can be excluded or removed year-round. Canada geese, however, require federal permits for any management action. Professional bird control combines physical exclusion (netting, spikes, and wire systems) with deterrents to deliver lasting results without harming non-target species.",
  signs: [
    "Concentrated droppings on ledges, rooftops, signage, loading docks, or HVAC equipment",
    "Nesting material (twigs, grass, feathers, debris) stuffed into dryer vents, exhaust fans, or soffit gaps",
    "Persistent cooing, chirping, or squawking from roofline areas, especially at dawn",
    "Blocked gutters, downspouts, or roof drains caused by accumulated nesting debris and feathers",
    "Damaged or displaced vent covers, screen panels, and weatherstripping near bird entry points",
  ],
  healthRisks: [
    "Histoplasmosis — fungal respiratory infection from Histoplasma capsulatum spores in dried pigeon and starling droppings",
    "Cryptococcosis — caused by Cryptococcus neoformans found in pigeon guano; can lead to meningitis in immunocompromised individuals",
    "Psittacosis (ornithosis) — bacterial infection transmitted by inhaling dust from dried droppings of pigeons, starlings, and sparrows",
    "Ectoparasites — bird mites, lice, and nest-dwelling insects migrate into occupied spaces when birds vacate or are excluded, causing skin irritation and secondary infestations",
  ],
  preventionTips: [
    "Install bird netting over recessed areas, courtyards, and loading docks — properly tensioned polyethylene netting provides 10+ years of protection",
    "Fit stainless steel bird spikes on ledges, signage, and parapet walls to prevent perching and roosting",
    "Screen all dryer vents, bathroom exhausts, and soffit openings with bird-proof vent covers",
    "Remove food sources including open dumpsters, outdoor dining scraps, and standing water near the building",
    "Clean droppings promptly — accumulated guano signals a safe roosting site to other birds and accelerates flock establishment",
    "Avoid feeding pigeons or sparrows on or near the property, as even small food subsidies anchor flocks to the location",
  ],
  treatmentSteps: [
    {
      step: "Site Assessment & Species Identification",
      description:
        "A technician surveys the property to identify species, flock size, roosting patterns, nesting locations, and legal status. Management options for unprotected species (pigeons, starlings, sparrows) differ significantly from those for protected species (Canada geese, native songbirds).",
    },
    {
      step: "Physical Exclusion Installation",
      description:
        "The primary line of defence. Bird netting, spike strips, electrified track systems, or tensioned wire deterrents are installed at roosting and nesting sites. Material selection depends on the target species, building architecture, and aesthetic requirements.",
    },
    {
      step: "Nest Removal & Vent Protection",
      description:
        "Existing nests are removed from vents, soffits, signage cavities, and equipment housings. Dryer vents and exhaust fans are fitted with species-specific exclusion covers that maintain airflow while preventing re-nesting.",
    },
    {
      step: "Dropping Cleanup & Decontamination",
      description:
        "Accumulated droppings are wetted to suppress dust, removed with HEPA-filtered equipment, and the area is disinfected with antimicrobial agents. Workers use full respiratory protection due to the fungal and bacterial pathogen load in dried guano.",
    },
    {
      step: "Ongoing Monitoring & Maintenance",
      description:
        "Bird pressure is reassessed periodically to ensure exclusion systems remain effective. Netting tension, spike condition, and vent cover integrity are inspected on a scheduled basis. Flock behaviour changes seasonally, and deterrent systems may require adjustment.",
    },
  ],
  faqs: [
    {
      question: "Are pigeons protected by law in Canada?",
      answer:
        "No. Feral pigeons (rock doves), European starlings, and house sparrows are not protected under the Migratory Birds Convention Act because they are non-native species. You can exclude, deter, or remove them year-round without a federal permit. Native species and Canada geese, however, are protected and require permits for management.",
    },
    {
      question: "Why are bird droppings so damaging to buildings?",
      answer:
        "Pigeon guano has a pH between 3 and 4.5 — acidic enough to etch limestone, corrode galvanized steel, and strip paint. The uric acid component does not dissolve in water, so rain does not wash the corrosive residue away. Over time, untreated accumulation causes permanent surface damage and structural degradation.",
    },
    {
      question: "How do starlings get into my dryer vent?",
      answer:
        "Standard louvred vent covers are no match for a determined starling. They wedge the flaps open and pack the duct with nesting material in as little as 24 hours. A blocked dryer vent creates a fire hazard and reduces appliance efficiency. Bird-proof vent covers with spring-loaded closures or cage guards are the permanent fix.",
    },
    {
      question: "Can I manage Canada geese on my commercial property?",
      answer:
        "Canada geese are federally protected under the Migratory Birds Convention Act. Any management action — including egg oiling, nest removal, or hazing — requires a permit from Environment and Climate Change Canada. Professional wildlife companies handle the permitting process and implement compliant management programs.",
    },
    {
      question: "Do ultrasonic bird deterrents work?",
      answer:
        "Most birds hear within the same frequency range as humans, so ultrasonic devices that claim to emit sounds above human hearing are largely inaudible to birds as well. Independent studies consistently show negligible deterrent effect. Physical exclusion (netting, spikes, wire systems) remains the only reliably effective long-term solution.",
    },
  ],
  seasonalStatus: "Year-Round",
  searchTerms: ["bird", "birds", "pigeon", "pigeons", "starling", "sparrow", "bird control", "bird removal", "bird nesting"],
  relatedPestSlugs: ["bats", "squirrels", "raccoons"],
  cityPageSlugs: [],
  image: {
    src: "/images/pests/pest-birds.webp",
    alt: "Flock of pigeons roosting on a commercial building ledge with visible droppings",
  },
};
