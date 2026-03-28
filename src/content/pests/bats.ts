import type { PestData } from "@/content/types";

export const batsPest: PestData = {
  slug: "bats",
  name: "Bats",
  category: "wildlife",
  subspecies: [
    {
      name: "Little Brown Bat (Myotis lucifugus)",
      description:
        "Once Ontario's most abundant bat species, now listed as Endangered under both federal and provincial legislation due to White-Nose Syndrome. Weighing just 7–14 g, a single little brown bat consumes up to 1,000 mosquito-sized insects per hour during peak foraging. Colonies roost in attics, barns, and wall cavities.",
    },
    {
      name: "Big Brown Bat (Eptesicus fuscus)",
      description:
        "The most common bat found in Ontario buildings today, weighing 14–21 g with a wingspan of 33 cm. Big brown bats are hardier than little brown bats and tolerate colder temperatures, allowing them to overwinter inside heated structures rather than migrating to traditional cave hibernacula.",
    },
    {
      name: "Northern Long-Eared Bat (Myotis septentrionalis)",
      description:
        "Listed as Endangered in Canada, this species roosts under loose bark and in tree cavities during summer but occasionally enters buildings. Its population has declined by over 90% in parts of Ontario since the arrival of White-Nose Syndrome in 2010.",
    },
  ],
  shortDescription:
    "Bats are protected under Ontario's Endangered Species Act — removal must be done through humane exclusion during legal timing windows. A single bat eats up to 1,000 insects per hour, making them ecologically vital.",
  fullDescription:
    "Bats provide enormous ecological value — a single colony can consume millions of insects nightly, including agricultural pests and disease-carrying mosquitoes. However, when bats roost inside your attic or walls, their droppings (guano) accumulate rapidly and create genuine health hazards that require professional intervention.\n\nTwo of Ontario's three most common building-roosting species — the little brown bat and the northern long-eared bat — are listed as Endangered under the Ontario Endangered Species Act. This means you cannot harm, harass, or kill these animals. Exclusion work is restricted to specific timing windows (typically late August through October, before hibernation) to avoid separating flightless pups from their mothers.\n\nHumane one-way exclusion is the only legal and effective method. Bats are loyal to roost sites and will return year after year if openings remain available. Professional exclusion seals every gap larger than 6 mm — the minimum width a bat needs to enter — using materials and methods that comply with provincial wildlife regulations.",
  signs: [
    "Small, dark droppings (guano) accumulating on windowsills, attic floors, or below wall-mounted fixtures — guano crumbles to a shiny powder revealing insect exoskeletons",
    "Squeaking, scratching, or faint chittering sounds inside walls or attic spaces, especially at dusk",
    "Dark, oily staining around small gaps in soffits, fascia, or where walls meet the roofline — residue from body oils on repeated entry",
    "Bats visibly flying out from the roofline, chimney, or gable vents at sunset",
    "Strong ammonia-like odour from accumulated guano and urine in confined roosting areas",
  ],
  healthRisks: [
    "Histoplasmosis — a respiratory fungal infection caused by Histoplasma capsulatum spores that thrive in accumulated bat guano; disturbing dry guano without protection releases infectious airborne spores",
    "Rabies — while less than 1% of wild bats carry rabies, any direct contact with a bat requires immediate medical evaluation and potential post-exposure prophylaxis",
    "Ectoparasites — bat bugs (close relatives of bed bugs), fleas, and mites can migrate into living spaces when bats are excluded without concurrent pest treatment",
  ],
  preventionTips: [
    "Seal every exterior gap 6 mm or wider along the roofline, soffits, and around utility penetrations — bats exploit remarkably small openings",
    "Install fine-mesh screening (maximum 6 mm aperture) over attic vents, gable vents, and chimney openings",
    "Repair or replace damaged fascia and weatherstripping promptly, especially on older homes with board-and-batten siding",
    "Schedule exclusion work during the legal timing window (typically late August to early October in Ontario) to avoid trapping flightless young inside",
    "Consider installing bat houses on your property 6–10 metres from the building to provide an alternative roosting site",
    "Keep exterior lighting that attracts insects away from entry-prone areas, as insect concentrations draw bats to those zones",
  ],
  treatmentSteps: [
    {
      step: "Species Identification & Regulatory Assessment",
      description:
        "A licensed wildlife technician identifies the bat species present using visual observation, guano analysis, and acoustic monitoring. Because two common Ontario species are Endangered, the specific legal requirements for your situation are determined before any physical work begins.",
    },
    {
      step: "Timing-Window Compliance",
      description:
        "Exclusion is scheduled within the legally permitted window — after young bats are volant (capable of flight) and before hibernation begins. In Ontario, this typically means late August through early October. Work outside this window requires a permit from the Ministry of Natural Resources and Forestry.",
    },
    {
      step: "One-Way Exclusion Device Installation",
      description:
        "Bat-specific one-way devices (cones or netting) are installed at confirmed exit points. These allow bats to leave at dusk for nightly foraging but prevent re-entry. Devices remain in place for a minimum of 5–7 warm nights to ensure full colony departure.",
    },
    {
      step: "Full Building Envelope Sealing",
      description:
        "Every gap 6 mm or larger across the entire building envelope is sealed with caulk, steel mesh, expanding foam, or metal flashing. This is the most labour-intensive step — a typical Ontario home may have 30–50 potential entry points along the roofline alone.",
    },
    {
      step: "Guano Cleanup & Decontamination",
      description:
        "Accumulated guano is carefully removed using HEPA-filtered vacuums and full respiratory protection to prevent Histoplasma spore dispersal. Affected insulation is replaced, and surfaces are treated with antimicrobial agents. Guano is disposed of according to provincial waste regulations.",
    },
  ],
  faqs: [
    {
      question: "Is it illegal to kill bats in Ontario?",
      answer:
        "Yes. The little brown bat and northern long-eared bat are protected under Ontario's Endangered Species Act. Killing, harming, or harassing any individual of these species carries significant fines. Even the big brown bat, which is not currently listed, must be treated humanely under the Fish and Wildlife Conservation Act. One-way exclusion is the only compliant removal method.",
    },
    {
      question: "When can bats be legally excluded from a building in Ontario?",
      answer:
        "The standard exclusion window runs from late August to early October — after pups can fly independently and before bats enter hibernation. Excluding bats during the maternity season (May through mid-August) can trap flightless young inside, which is both inhumane and illegal for Endangered species. Winter exclusion is also prohibited because hibernating bats cannot survive displacement.",
    },
    {
      question: "How dangerous is bat guano?",
      answer:
        "The primary risk is Histoplasmosis, caused by a fungus that colonizes bat droppings. When dry guano is disturbed — by sweeping, shovelling, or even walking through it — microscopic spores become airborne and can cause severe respiratory illness. Professional cleanup with HEPA filtration and respiratory protection is the safe approach.",
    },
    {
      question: "A bat flew into my living space — what should I do?",
      answer:
        "Close off the room, open a window, and turn off interior lights to encourage the bat to leave on its own. Do not handle the bat with bare hands. If anyone in the household was sleeping in the same room or if a child or pet had potential contact, capture the bat carefully (gloves and a container) and contact your local public health unit for rabies assessment guidance.",
    },
    {
      question: "Will bats return to my house after exclusion?",
      answer:
        "Bats have strong roost-site fidelity and will absolutely attempt to return. The key to permanent results is sealing every opening 6 mm or larger across the entire building envelope — not just the obvious exit point. A properly executed exclusion with full sealing provides long-term protection backed by warranty.",
    },
  ],
  seasonalStatus: "Peak Season: Spring–Fall",
  searchTerms: ["bat", "bats", "bat removal", "bat in attic", "bat guano", "bat exclusion", "bat colony"],
  relatedPestSlugs: ["birds", "squirrels", "raccoons"],
  cityPageSlugs: [],
  image: {
    src: "/images/pests/pest-bats.webp",
    alt: "Big brown bat clinging to a residential attic rafter in dim light",
  },
};
