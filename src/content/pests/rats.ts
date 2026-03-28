import type { PestData } from "@/content/types";

export const ratsPest: PestData = {
  slug: "rats",
  name: "Rats",
  category: "rodents",
  subspecies: [
    {
      name: "Norway Rat (Brown Rat)",
      description:
        "Rattus norvegicus is the dominant commensal rat in North America, weighing 10 to 17 ounces with a blunt nose and small ears. It prefers ground-level harborage — basements, crawl spaces, and sewer lines. Norway rats are strong swimmers and routinely enter structures through broken sewer laterals and floor drains.",
    },
    {
      name: "Roof Rat (Black Rat)",
      description:
        "Rattus rattus is slender with a pointed nose, large ears, and a tail longer than its body. It nests above ground in attics, palm trees, and dense ivy. Historically responsible for transmitting bubonic plague via flea vectors, the roof rat remains a serious disease carrier in coastal and southern states.",
    },
  ],
  shortDescription:
    "Rats gnaw through concrete, lead pipe, and electrical wiring to reach food sources — and their incisors grow 4 to 5 inches per year, so they never stop chewing.",
  fullDescription:
    "Rats are among the most destructive animals on the planet relative to their size. A Norway rat can gnaw through cinder block, aluminum sheeting, and even unhardened concrete. Their incisors grow 4 to 5 inches per year, which means gnawing is not optional — it is a biological necessity to prevent their teeth from curving back into their skulls.\n\nNorway rats favor ground-level entry: cracked foundations, sewer breaks, and gaps around utility conduits. Roof rats take the opposite approach, climbing power lines, tree branches, and stucco walls to access attics and soffits. Both species reach sexual maturity at three months and produce litters of 6 to 12 pups roughly five times per year. A single breeding pair can be responsible for over 1,000 descendants within twelve months under ideal conditions.\n\nBeyond structural damage, rats carry over 35 diseases transmissible to humans, including leptospirosis, rat-bite fever, and Seoul hantavirus. Their droppings contaminate stored food, and their burrowing undermines foundations and retaining walls. Ridgeline Pest Defence attacks the problem at every level — sealing entry architecture, collapsing active burrow systems, and deploying locked bait stations that reduce populations while keeping your household and pets protected.",
  signs: [
    "Capsule-shaped droppings 1/2 to 3/4 inch long, often concentrated near food storage or along walls",
    "Gnaw marks on wood framing, PVC pipes, door corners, and electrical conduit",
    "Grease trails (dark smear marks) along repeated travel paths on walls, beams, and rafters",
    "Burrow openings 2 to 3 inches in diameter along foundations, under slabs, or in garden beds",
    "Scratching, thumping, or squeaking sounds in walls, ceilings, or under floors at night",
  ],
  healthRisks: [
    "Leptospirosis from contact with rat urine — contaminated water and soil are common transmission routes",
    "Rat-bite fever caused by Streptobacillus moniliformis bacteria transmitted through bites, scratches, or contaminated food",
    "Salmonellosis from droppings deposited on food preparation surfaces and stored goods",
    "Seoul Hantavirus carried by Norway rats and shed through urine, droppings, and saliva",
  ],
  preventionTips: [
    "Seal any exterior opening larger than 1/2 inch with hardware cloth, steel wool, or metal flashing — rats can squeeze through a gap the width of a quarter",
    "Secure outdoor garbage in heavy-duty bins with locking lids and keep dumpster areas clean",
    "Trim tree branches at least 4 feet from your roofline to cut off aerial access for roof rats",
    "Eliminate standing water sources including leaky hose bibs, birdbaths, and pet water bowls left out overnight",
    "Store firewood, lumber, and compost bins at least 20 feet from the structure and elevated off the ground",
    "Repair broken sewer laterals promptly — Norway rats routinely travel through municipal sewer systems to reach homes",
  ],
  treatmentSteps: [
    {
      step: "Full-Property Inspection",
      description:
        "Your Ridgeline technician surveys the interior, exterior, roofline, and substructure for active signs — droppings, rub marks, gnaw damage, and burrow systems. A detailed report with photos identifies every confirmed and suspected entry point.",
    },
    {
      step: "Exclusion and Structural Hardening",
      description:
        "Entry points are sealed with gnaw-proof materials: 16-gauge galvanized hardware cloth, sheet metal kick plates, and expanding copper mesh packed into pipe chases. Roof vents and soffit gaps receive custom-fitted exclusion screens.",
    },
    {
      step: "Targeted Population Reduction",
      description:
        "Locked, tamper-resistant bait stations are anchored along confirmed travel paths. Interior snap-trap sets are placed in concealed locations based on droppings mapping. All placements comply with EPA label and state regulatory standards.",
    },
    {
      step: "Burrow Collapse and Exterior Treatment",
      description:
        "Active Norway rat burrows along the foundation are treated and collapsed to prevent re-entry. Exterior perimeter stations create a defensive ring that intercepts rats before they reach the structure.",
    },
    {
      step: "Ongoing Monitoring and Reporting",
      description:
        "Scheduled service visits track station consumption, trap captures, and new activity indicators. Your technician adjusts the plan each visit and provides a written status report until monitoring data shows sustained zero activity.",
    },
  ],
  faqs: [
    {
      question: "What is the difference between Norway rats and roof rats?",
      answer:
        "Norway rats are heavy-bodied, prefer ground-level and below-grade spaces, and are strong swimmers. Roof rats are lighter, agile climbers that nest in attics and tree canopies. Identifying the species determines where your technician focuses exclusion and trapping effort.",
    },
    {
      question: "Can rats chew through concrete?",
      answer:
        "Yes. Rat incisors register 5.5 on the Mohs hardness scale — harder than copper or iron. Their teeth grow 4 to 5 inches per year, and constant gnawing is a biological requirement. Norway rats regularly chew through unhardened concrete, cinder block, and even lead pipe.",
    },
    {
      question: "Why are rats so hard to get rid of on my own?",
      answer:
        "Rats are neophobic — they actively avoid new objects in their environment for days or even weeks. Store-bought traps placed in the wrong location or with the wrong bait go untouched. Professional service combines strategic placement, proven bait matrices, and structural exclusion to overcome that behavioral resistance.",
    },
    {
      question: "How many diseases do rats carry?",
      answer:
        "Rats are confirmed vectors or reservoirs for over 35 diseases, including leptospirosis, hantavirus, salmonellosis, and rat-bite fever. Transmission occurs through droppings, urine, bites, and ectoparasites like fleas and mites that feed on rats and then bite humans.",
    },
    {
      question: "How quickly can a rat population grow?",
      answer:
        "A female Norway rat produces 6 to 12 pups per litter and can deliver up to five litters per year. Pups reach reproductive age at about three months. Under favorable conditions, a single pair can be the origin point for more than 1,000 descendants within a year.",
    },
  ],
  seasonalStatus: "Year-Round (peak Fall–Winter)",
  searchTerms: ["rat", "rats", "norway rat", "roof rat", "rat infestation", "rat droppings", "rat control"],
  relatedPestSlugs: ["mice", "voles"],
  cityPageSlugs: [
    "toronto", "mississauga", "brampton", "hamilton", "london",
    "kitchener", "oakville", "markham", "niagara", "north-york",
    "scarborough", "richmond-hill", "waterloo", "st-catharines", "edmonton",
  ],
  image: {
    src: "/images/pests/pest-rats.webp",
    alt: "Norway rat emerging from a foundation gap beside a residential structure",
  },
};
