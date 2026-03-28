import type { PestData } from "@/content/types";

export const volesPest: PestData = {
  slug: "voles",
  name: "Voles",
  category: "rodents",
  subspecies: [
    {
      name: "Meadow Vole",
      description:
        "Microtus pennsylvanicus is the most widespread vole in North America, found from Alaska to the Carolinas. It builds extensive surface runway systems through grass and mulch and can consume its own body weight in plant material every 24 hours. Populations cycle dramatically, peaking every 3 to 5 years.",
    },
    {
      name: "Prairie Vole",
      description:
        "Microtus ochrogaster inhabits grasslands and agricultural fields across the central United States. Unlike most rodents, prairie voles form monogamous pair bonds — a trait that makes them a model species in neuroscience research on social bonding. They build underground burrow networks with multiple entrances.",
    },
    {
      name: "Woodland Vole",
      description:
        "Microtus pinetorum lives almost entirely below the soil surface, tunneling through the root zone of trees and shrubs. Its smaller eyes, shorter tail, and velvety fur reflect a subterranean lifestyle. Woodland voles cause the most severe root damage of any North American vole species.",
    },
  ],
  shortDescription:
    "Voles tunnel through lawns and garden beds at remarkable speed, and a single individual can devour its own body weight in roots, bulbs, and bark every day.",
  fullDescription:
    "Voles look like stocky, short-tailed mice, but the damage they cause is very different. While mice target your pantry, voles destroy your landscape. They chew through grass roots to create visible surface runways, girdle the bark of young trees in winter, and excavate bulbs and root systems from below. A single meadow vole eats its own body weight in plant material daily — multiply that across a population that can exceed 300 individuals per acre during peak cycles.\n\nThree species create the majority of vole damage in residential settings. Meadow voles build surface runways through turf and mulch beds. Woodland voles tunnel below grade and attack tree roots directly. Prairie voles excavate burrow systems in open lawn areas and field borders. All three species breed rapidly, producing 5 to 10 litters per year with 3 to 6 pups each.\n\nVole damage is often mistaken for mole activity, but the evidence differs. Voles leave 1- to 2-inch-wide runways clipped to bare soil, small round burrow openings, and gnaw marks on the lower trunks of trees and shrubs. Ridgeline Pest Defence uses targeted habitat modification, exclusion guards, and strategic population management to protect your landscape investment before the damage compounds.",
  signs: [
    "Narrow surface runways (1 to 2 inches wide) worn through grass, connecting burrow openings in a visible network",
    "Small, clean burrow holes approximately 1.5 inches in diameter with no soil mounding — unlike mole tunnels",
    "Bark stripped from the base of young trees and shrubs, especially during winter months (girdling damage)",
    "Irregularly dead patches of lawn where root systems have been severed below the surface",
    "Flower bulbs and root vegetables hollowed out or missing from garden beds",
  ],
  healthRisks: [
    "Tularemia transmitted through direct contact with infected voles or contaminated soil",
    "Leptospirosis shed in vole urine, which can contaminate garden soil and standing water",
    "Tick-borne diseases — voles are significant hosts for blacklegged ticks that carry Lyme disease and anaplasmosis",
    "Intestinal parasites including Giardia and Cryptosporidium found in vole droppings near water sources",
  ],
  preventionTips: [
    "Mow your lawn regularly to 3 inches or shorter — voles rely on tall grass cover to move safely between feeding sites",
    "Pull mulch at least 3 inches away from tree trunks and shrub bases to eliminate protected gnawing zones",
    "Install 1/4-inch hardware cloth cylinders around the base of young trees, buried 4 to 6 inches below soil level",
    "Remove leaf litter, brush piles, and dense ground cover near garden beds and foundation plantings",
    "Avoid heavy applications of straw mulch over newly seeded areas — it creates ideal vole habitat",
    "Keep bird feeders away from landscape beds, as spilled seed attracts and sustains vole populations",
  ],
  treatmentSteps: [
    {
      step: "Landscape and Runway Assessment",
      description:
        "A Ridgeline technician walks the full property to map active runway systems, locate burrow openings, and assess plant damage. High-value trees and garden beds are flagged for priority protection.",
    },
    {
      step: "Habitat Modification",
      description:
        "Tall grass borders, dense ground cover, and excessive mulch depths are addressed to remove the protective corridors voles depend on. Reducing cover forces voles into the open where natural predators become effective.",
    },
    {
      step: "Exclusion Guard Installation",
      description:
        "Hardware cloth tree guards and root-zone barriers are installed around high-value plantings. Guards are buried below grade to block woodland vole access from below and extend high enough to prevent winter bark girdling above snow line.",
    },
    {
      step: "Targeted Population Management",
      description:
        "Tamper-resistant bait stations are placed directly within active runway systems. Snap-trap sets in protective housings supplement stations in areas adjacent to garden beds and foundations. All placements are secured against non-target access.",
    },
    {
      step: "Seasonal Monitoring and Adjustment",
      description:
        "Vole populations cycle seasonally and across multi-year peaks. Your technician returns on a scheduled rotation to reassess runway activity, refresh stations, and adapt the protection plan as population pressure shifts through fall, winter, and spring.",
    },
  ],
  faqs: [
    {
      question: "What is the difference between a vole and a mole?",
      answer:
        "Voles are herbivores that eat roots, bark, and grass. Moles are insectivores that eat grubs and earthworms. Voles create narrow, clipped surface runways and small round burrow holes. Moles push up raised soil ridges and volcano-shaped mounds. The damage pattern and burrow structure tell you which animal is at work.",
    },
    {
      question: "Why is my lawn suddenly full of vole tunnels every spring?",
      answer:
        "Voles are active year-round, but snow cover hides their runway construction all winter. When snow melts, the accumulated damage becomes visible at once. The runways you see in March were built over months of continuous feeding beneath the snowpack.",
    },
    {
      question: "Can voles kill my trees?",
      answer:
        "Yes. Voles girdle trees by stripping bark in a complete ring around the trunk base, severing the cambium layer that transports nutrients. A fully girdled tree will die. Young fruit trees, ornamental maples, and crabapples are especially vulnerable during winters with prolonged snow cover.",
    },
    {
      question: "How fast do vole populations grow?",
      answer:
        "A female vole can produce 5 to 10 litters per year with 3 to 6 pups each. Pups mature in about 21 days. Population densities regularly hit 100 to 300 voles per acre during peak cycle years. Those multi-year boom cycles are why damage can seem to appear suddenly after years of no visible problems.",
    },
    {
      question: "Do cats or dogs help control voles?",
      answer:
        "Cats are moderately effective hunters of surface-active voles, but they rarely reduce populations below damaging levels on their own. Dogs dig enthusiastically but catch few voles. Encouraging natural predators like hawks, owls, and snakes helps, but targeted management is needed when populations are already established.",
    },
  ],
  seasonalStatus: "Year-Round (peak Fall–Spring)",
  searchTerms: ["vole", "voles", "meadow vole", "vole damage", "vole tunnels", "field mouse"],
  relatedPestSlugs: ["mice", "rats"],
  cityPageSlugs: [],
  image: {
    src: "/images/pests/pest-voles.webp",
    alt: "Meadow vole on a surface runway through short grass near a garden bed",
  },
};
