import type { PestData } from "@/content/types";

export const mosquitoesPest: PestData = {
  slug: "mosquitoes",
  name: "Mosquitoes",
  category: "flyers",
  subspecies: [
    {
      name: "Aedes (Asian Tiger Mosquito)",
      description:
        "Aedes albopictus is an aggressive daytime biter recognizable by bold black-and-white leg stripes. It breeds in as little as a bottle-cap of standing water and is a primary vector for dengue, Zika, and chikungunya.",
    },
    {
      name: "Culex (Northern House Mosquito)",
      description:
        "Culex pipiens is the dominant dusk-to-dawn feeder across most of North America. It breeds in stagnant, nutrient-rich water and serves as the principal vector for West Nile virus in the United States.",
    },
    {
      name: "Anopheles",
      description:
        "Anopheles quadrimaculatus rests at a distinctive 45-degree angle to surfaces. While historically the malaria vector in North America, it now primarily causes nuisance biting near clean, slow-moving water sources.",
    },
  ],
  shortDescription:
    "Mosquitoes are the deadliest animals on earth, killing over 700,000 people annually through disease transmission. Targeted breeding-site reduction is the most effective way to protect your property.",
  fullDescription:
    "Only female mosquitoes bite — they need blood proteins to develop their eggs. A single female Aedes mosquito can produce up to 300 eggs per batch and may lay five batches in her lifetime, each in a different water source to maximize offspring survival.\n\nMosquitoes locate you through a combination of CO2 plumes, body heat, and skin microbiome odors from up to 50 meters away. They are most active at temperatures between 26°C and 32°C, which is why populations explode during humid summer months and crash after the first hard frost.\n\nRidgeline Pest Defence focuses on larviciding and habitat modification rather than relying solely on adult knockdown sprays. Your technician maps every breeding source on your property — from clogged gutters to plant saucers — and applies targeted larvicides that prevent the next generation from ever taking flight.",
  signs: [
    "Persistent buzzing and biting activity during dawn, dusk, or daytime depending on species",
    "Small, itchy red welts appearing in exposed skin areas after outdoor activity",
    "Larvae (wrigglers) visible in standing water such as birdbaths, gutters, or flower pot saucers",
    "Adult mosquitoes resting on shaded exterior walls, under eaves, or inside garages",
    "Increased activity after rain events that create temporary pools in low-lying yard areas",
  ],
  healthRisks: [
    "West Nile virus transmission — the most common mosquito-borne illness in North America",
    "Eastern Equine Encephalitis (EEE), a rare but severe neurological disease with high fatality rates",
    "Zika virus risk in southern regions, linked to birth defects when contracted during pregnancy",
    "Severe allergic reactions (Skeeter Syndrome) causing large swollen welts and low-grade fever",
  ],
  preventionTips: [
    "Dump and refresh all standing water sources weekly — mosquito larvae mature in as few as 5 days",
    "Clean gutters and downspouts at least twice per season to prevent water pooling",
    "Treat ornamental ponds and rain barrels with mosquito dunks containing Bacillus thuringiensis israelensis (Bti)",
    "Trim vegetation and remove leaf litter where adult mosquitoes rest during the heat of the day",
    "Repair window and door screens — Aedes mosquitoes are small enough to pass through standard screen mesh if it is damaged",
    "Run fans on covered porches and patios, as mosquitoes are weak fliers and struggle in wind above 1 mph",
  ],
  treatmentSteps: [
    {
      step: "Property Assessment & Breeding-Site Mapping",
      description:
        "Your technician surveys the entire property to identify every source of standing water, from obvious containers to hidden spots like corrugated downspout extensions and tree holes.",
    },
    {
      step: "Larvicide Application",
      description:
        "Bti-based larvicides are applied to water sources that cannot be eliminated, killing larvae before they develop into biting adults. These products are safe for pets, birds, and beneficial insects.",
    },
    {
      step: "Barrier Spray Treatment",
      description:
        "A residual adulticide is applied to vegetation, fence lines, and shaded resting areas where mosquitoes harbor during the day. This creates a protective perimeter around high-traffic outdoor zones.",
    },
    {
      step: "Habitat Modification Recommendations",
      description:
        "You receive a site-specific action list to eliminate or manage standing water. Adjustments like regrading low spots or adding drainage solve the root problem instead of masking it.",
    },
    {
      step: "Seasonal Monitoring Cycle",
      description:
        "Monthly return visits from May through October maintain the barrier and address new breeding sites created by rain or irrigation changes throughout the season.",
    },
  ],
  faqs: [
    {
      question: "Why do mosquitoes bite some people more than others?",
      answer:
        "Research shows mosquitoes prefer hosts who emit higher levels of CO2, lactic acid, and certain skin bacteria byproducts. People with Type O blood are bitten up to 83% more often than those with Type A, according to a study published in the Journal of Medical Entomology.",
    },
    {
      question: "Do citronella candles and ultrasonic devices actually repel mosquitoes?",
      answer:
        "Citronella provides minimal short-range protection in still air, and peer-reviewed studies consistently show ultrasonic repellers have zero measurable effect. Health Canada\u2013approved repellents containing DEET, picaridin, or oil of lemon eucalyptus are the only proven personal-protection options.",
    },
    {
      question: "How long after treatment will I notice fewer mosquitoes?",
      answer:
        "Adult populations drop significantly within 24 to 48 hours of a barrier treatment. However, full population suppression takes 7 to 14 days as larvicides prevent the next generation from emerging. Consistent monthly treatments deliver the best season-long results.",
    },
    {
      question: "Is West Nile virus a real risk in my area?",
      answer:
        "West Nile virus has been detected in every Canadian province. Most infected people show no symptoms, but roughly 1 in 150 infections causes serious neurological illness. Adults over 60 and immunocompromised individuals face the highest risk of severe outcomes.",
    },
    {
      question: "Are mosquito yard treatments safe for pets and children?",
      answer:
        "The products Ridgeline Pest Defence uses are Health Canada\u2013approved and applied according to label directions. Treated areas are safe for people and pets once the application has dried, typically within 30 to 60 minutes. Bti larvicides pose no risk to mammals, birds, or fish.",
    },
  ],
  seasonalStatus: "Peak Season: May–October",
  searchTerms: ["mosquito", "mosquitoes", "mosquito control", "mosquito bites", "west nile", "mosquito larvae"],
  relatedPestSlugs: ["flies", "wasps-hornets", "beetles"],
  cityPageSlugs: [],
  image: {
    src: "/images/pests/pest-mosquitoes.webp",
    alt: "Aedes mosquito feeding on human skin showing distinctive black and white striped legs",
  },
};
