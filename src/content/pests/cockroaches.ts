import type { PestData } from "@/content/types";

export const cockroachesPest: PestData = {
  slug: "cockroaches",
  name: "Cockroaches",
  category: "crawlers",
  subspecies: [
    {
      name: "German Cockroach",
      description:
        "Small (12–15 mm), light brown with two dark parallel stripes behind the head. The most common indoor cockroach worldwide. A single female produces 4–8 egg cases in her lifetime, each containing 30–48 eggs — meaning one pregnant roach can generate over 300,000 descendants in a year under ideal conditions.",
    },
    {
      name: "American Cockroach",
      description:
        "The largest common species (35–40 mm), reddish-brown with a yellowish figure-eight pattern on the back of the head. Despite the name, it originated in Africa. Capable of flight in warm conditions and can live up to two years — unusually long for an insect.",
    },
    {
      name: "Oriental Cockroach",
      description:
        "Dark brown to black, 25–30 mm, with a glossy appearance. Often called 'water bugs' because they prefer cool, damp environments like drains, basements, and crawl spaces. They emit a particularly strong musty odour compared to other species.",
    },
    {
      name: "Brown-Banded Cockroach",
      description:
        "Small (10–14 mm) with distinctive light brown bands across wings and abdomen. Unlike German cockroaches, they prefer warm, dry locations — hiding inside electronics, picture frames, and upper cabinets. They scatter their egg cases throughout a home rather than clustering near food.",
    },
  ],
  shortDescription:
    "Cockroaches spread bacteria across every surface they touch, trigger asthma attacks in children, and reproduce so rapidly that a single female can seed a colony of thousands within months.",
  fullDescription:
    "Cockroaches have survived for 300 million years by being almost impossible to starve. They eat glue, soap, leather, hair, and each other. A German cockroach can survive a month without food and two weeks without water. They squeeze through gaps as thin as a quarter coin and spend 75% of their time hidden inside walls, behind appliances, and under sinks.\n\nThe health impact is severe and well-documented. Cockroach droppings, shed skins, and saliva contain potent allergens. The National Pest Management Association reports that cockroach allergens trigger asthma attacks in 63% of urban homes where the insects are present. They also mechanically transmit E. coli, Salmonella, and over 30 other bacterial species simply by walking across food-preparation surfaces after crawling through sewage.\n\nGerman cockroaches are the dominant indoor species in Canada and the hardest to eliminate. They've developed resistance to multiple insecticide classes — a 2019 Purdue University study found some populations resistant to all retail pesticides tested simultaneously. Professional-grade baits and insect growth regulators remain effective because they exploit different biological pathways.",
  signs: [
    "Small dark droppings resembling ground pepper or coffee grounds along cabinet edges, behind appliances, and in drawer corners",
    "A persistent musty, oily odour in kitchens and bathrooms — cockroach aggregation pheromones become detectable at moderate population levels",
    "Oval brown egg cases (oothecae) approximately 8 mm long, found glued to surfaces in hidden areas",
    "Shed exoskeletons accumulating behind refrigerators, under sinks, and inside electrical boxes",
    "Live cockroaches spotted during daytime — a sign of severe overcrowding, since they're normally nocturnal",
  ],
  healthRisks: [
    "Cockroach allergens are a leading trigger of childhood asthma, affecting 63% of urban homes with cockroach activity according to clinical studies",
    "They mechanically carry E. coli, Salmonella, Staphylococcus, and over 30 other pathogenic bacteria on their legs and body",
    "Droppings and shed skins become airborne particulates that aggravate allergies and respiratory conditions",
    "German cockroaches have been linked to the spread of parasitic worms and viral pathogens in food-service environments",
  ],
  preventionTips: [
    "Eliminate moisture sources — fix dripping taps, repair sweating pipes, and ensure drain traps stay filled with water",
    "Store all food (including pet food) in airtight containers; cockroaches can detect crumbs from several metres away",
    "Take garbage out nightly and use bins with tight-sealing lids; decomposing organic waste is their primary food source",
    "Seal gaps around pipes, electrical conduit, and baseboards with caulk — cockroaches navigate through plumbing and electrical chases between units",
    "Declutter storage areas, especially cardboard boxes — cockroaches eat the glue in corrugated cardboard and use the fluting as harbourage",
    "In multi-unit buildings, coordinate pest management with neighbours; treating one unit pushes cockroaches into adjacent suites",
  ],
  treatmentSteps: [
    {
      step: "Inspection & Population Assessment",
      description:
        "Sticky monitor traps are placed in key areas to identify species, locate harbourage zones, and estimate population density. German cockroaches require different products than Oriental or American species.",
    },
    {
      step: "Gel Bait Application",
      description:
        "Professional-grade gel bait is applied in pea-sized dots inside cracks, hinges, and harbourage points. Cockroaches consume the bait and return to the colony, where secondary poisoning occurs through coprophagy (faeces consumption) and necrophagy (feeding on dead nestmates).",
    },
    {
      step: "Insect Growth Regulator (IGR)",
      description:
        "An IGR is applied to disrupt cockroach reproduction. It prevents nymphs from maturing and renders adults sterile. This breaks the reproductive cycle — critical for German cockroaches, which can recover from 90% population reduction in weeks without IGR.",
    },
    {
      step: "Crack & Void Treatment",
      description:
        "Insecticidal dust is injected behind switch plates, inside wall voids, and under appliances where cockroaches harbour during daylight hours. This targets the 75% of the population that never leaves hiding.",
    },
    {
      step: "Follow-Up & Monitoring",
      description:
        "Return visits at 2-week intervals check monitor traps, refresh baits, and assess population decline. Most German cockroach infestations require 2–3 treatment cycles for full elimination.",
    },
  ],
  faqs: [
    {
      question: "I keep my home clean — why do I still have cockroaches?",
      answer:
        "Cleanliness helps but isn't the whole picture. In apartments and townhomes, cockroaches travel through shared plumbing, electrical chases, and wall voids from neighbouring units. German cockroaches also hitchhike inside grocery bags, delivery boxes, and used appliances. You can do everything right and still receive them from next door.",
    },
    {
      question: "Why don't store-bought sprays work on cockroaches?",
      answer:
        "German cockroaches have evolved resistance to multiple insecticide classes. A 2019 Purdue University study demonstrated populations resistant to all over-the-counter products tested simultaneously. Additionally, repellent sprays scatter roaches into new hiding spots without killing the colony, often spreading the infestation further within the building.",
    },
    {
      question: "How fast do cockroaches reproduce?",
      answer:
        "Alarmingly fast. A single German cockroach female produces 4–8 egg cases containing 30–48 eggs each. Under ideal conditions, one female's descendants can exceed 300,000 in a single year. Their generation time is about 60 days from egg to reproductive adult — speed is why early treatment matters.",
    },
    {
      question: "Can cockroaches survive without their head?",
      answer:
        "Yes — for up to a week. Cockroaches breathe through spiracles (body pores), not through their mouth. They eventually die of dehydration since they can't drink. This illustrates why contact-kill sprays are unreliable: cockroaches have extraordinary survival biology, and only systemic baits that attack their nervous system provide reliable colony elimination.",
    },
    {
      question: "Do cockroaches only live in dirty buildings?",
      answer:
        "No. Cockroaches need three things: moisture, warmth, and darkness. A clean home with a leaking pipe under the sink is more attractive to Oriental cockroaches than a cluttered home with no water source. Multi-unit buildings are especially vulnerable because cockroaches move freely through shared infrastructure.",
    },
  ],
  seasonalStatus: "Year-Round",
  prepSheetSlug: "cockroaches",
  searchTerms: ["roach", "roaches", "cockroach", "cockroaches", "german cockroach", "american cockroach"],
  relatedPestSlugs: ["ants", "silverfish", "bed-bugs"],
  cityPageSlugs: [
    "toronto", "mississauga", "brampton", "hamilton", "london",
    "kitchener", "oakville", "markham", "niagara", "north-york",
    "scarborough", "richmond-hill", "waterloo", "st-catharines", "edmonton",
    "vaughan", "etobicoke",
  ],
  image: {
    src: "/images/pests/pest-cockroaches.webp",
    alt: "German cockroach on a kitchen surface showing its light brown body and two dark stripes behind the head",
  },
};
