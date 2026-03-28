import type { PestData } from "@/content/types";

export const molesPest: PestData = {
  slug: "moles",
  name: "Moles",
  category: "wildlife",
  subspecies: [
    {
      name: "Eastern Mole (Scalopus aquaticus)",
      description:
        "The most common mole in southern Ontario, weighing 75–140 g with powerful, spade-shaped front paws that can excavate up to 5.5 metres of new tunnel per hour. Eastern moles are solitary and territorial — a single individual is usually responsible for an entire yard's tunnel network.",
    },
    {
      name: "Star-Nosed Mole (Condylura cristata)",
      description:
        "Easily identified by the 22 fleshy tentacles ringing its snout, this species holds the record for the fastest-eating mammal on Earth — identifying and consuming a food item in as little as 120 milliseconds. Star-nosed moles prefer wetter habitats and are commonly found near streams, marshes, and poorly drained lawns in Ontario.",
    },
    {
      name: "Hairy-Tailed Mole (Parascalops breweri)",
      description:
        "Found in the mixed forests and well-drained soils of eastern Ontario, weighing 40–65 g. This species creates shallower tunnel systems than the eastern mole and is more active at the surface during spring and fall, producing the most visible lawn damage during those seasons.",
    },
  ],
  shortDescription:
    "A single mole can tunnel up to 5.5 metres per hour, destroying root systems and destabilizing lawns. Most yards with extensive tunnel networks are the work of just one or two individuals.",
  fullDescription:
    "Moles are subterranean insectivores that rarely surface, yet the damage they cause is immediately visible. Raised tunnel ridges, volcano-shaped mounds, and spongy, collapsing turf are the hallmarks of mole activity. Despite appearances, a heavily tunnelled yard is typically the territory of just one or two moles — they are aggressively solitary.\n\nMoles eat 70–100% of their body weight daily, primarily targeting earthworms, white grubs, and soil-dwelling beetle larvae. Their tunnelling aerates soil and controls grub populations, but the trade-off for homeowners is torn root systems, damaged irrigation lines, and turf that peels away in sheets.\n\nEffective mole management combines targeted trapping with habitat modification. Reducing soil moisture and grub populations makes your lawn far less attractive. Because moles are not classified as furbearers in Ontario, property owners have more flexibility in management methods, though humane approaches remain the professional standard.",
  signs: [
    "Raised, winding surface ridges (feeding tunnels) visible across the lawn, especially after rain",
    "Volcano-shaped mounds of excavated soil — 10–15 cm tall — pushed up from deeper tunnel systems",
    "Spongy or collapsing turf when walked on, indicating shallow tunnel networks just below the surface",
    "Dead or yellowing grass strips where root systems have been severed by tunnelling",
    "Small, round entry/exit holes (about 3 cm diameter) often found at the base of mounds",
  ],
  healthRisks: [
    "Tripping and ankle-injury hazard — collapsed tunnel networks create uneven ground that is particularly dangerous for children and elderly residents",
    "Secondary pest attraction — mole tunnels are readily adopted by voles, shrews, and field mice that use the existing network to access plant roots and garden bulbs",
    "Tick and flea transmission — moles carry ectoparasites that can migrate to the surface via tunnel openings and contact pets or humans near den areas",
    "Lyme disease risk from tunnel systems — the underground networks provide shelter for blacklegged ticks carrying Borrelia burgdorferi, increasing exposure risk during yard maintenance",
  ],
  preventionTips: [
    "Treat the lawn for white grubs in late summer — reducing the primary food source makes your property less attractive to moles",
    "Improve lawn drainage to avoid consistently moist soil, which concentrates the earthworm populations moles target",
    "Install vertical underground barriers (galvanized mesh or hardware cloth) at least 60 cm deep around high-value garden beds",
    "Compact soil along foundation perimeters and walkways to resist tunnel excavation in those areas",
    "Avoid over-watering lawns — irrigation schedules that keep the top 10 cm of soil consistently wet create ideal mole habitat",
    "Monitor for new surface tunnels weekly during spring and fall when mole activity peaks near the surface",
  ],
  treatmentSteps: [
    {
      step: "Tunnel Mapping & Activity Assessment",
      description:
        "A technician identifies which tunnel runs are actively used by collapsing sections and monitoring for re-excavation within 24–48 hours. Only active tunnels are targeted — moles abandon many feeding tunnels after a single use.",
    },
    {
      step: "Targeted Trapping",
      description:
        "Professional-grade scissor or harpoon traps are set in confirmed active runs. Trap placement depth and orientation are critical — improper positioning results in the mole simply tunnelling around the device. A skilled technician typically resolves single-mole infestations within 3–5 days.",
    },
    {
      step: "Habitat Modification",
      description:
        "Soil conditions are assessed and recommendations are provided to reduce attractiveness. This includes grub treatment, irrigation schedule adjustment, and drainage improvements. Habitat modification alone does not remove existing moles but is essential for long-term prevention.",
    },
    {
      step: "Barrier Installation (High-Value Areas)",
      description:
        "For garden beds, ornamental plantings, or sports turf, underground exclusion barriers made of galvanized hardware cloth are installed vertically to a depth of 60 cm. This physically blocks tunnel expansion into protected zones.",
    },
    {
      step: "Follow-Up Monitoring",
      description:
        "Tunnel activity is reassessed 7–14 days after trapping to confirm resolution. Because moles are territorial, removing the resident individual often means neighbouring moles will eventually investigate the vacated territory — so ongoing monitoring during spring and fall is recommended.",
    },
  ],
  faqs: [
    {
      question: "How many moles are actually in my yard?",
      answer:
        "Probably fewer than you think. Moles are fiercely territorial, and a single eastern mole can create an extensive tunnel network covering an entire residential lot. Most infestations involve just one or two individuals. That one mole, however, can excavate up to 5.5 metres of new tunnel per hour.",
    },
    {
      question: "Do moles eat plant roots and garden bulbs?",
      answer:
        "No. Moles are strict insectivores — their diet is almost entirely earthworms, grubs, and beetle larvae. The plant damage you see is from root systems being torn apart by tunnelling, not from feeding. Voles, which often move into mole tunnels, are the actual root and bulb eaters.",
    },
    {
      question: "Will grub treatment eliminate my mole problem?",
      answer:
        "Grub treatment reduces one food source but will not remove moles already established in your yard. Earthworms — which you do not want to eliminate — make up 70–80% of a mole's diet. Grub control works best as a long-term prevention strategy combined with active trapping for current residents.",
    },
    {
      question: "What is the difference between mole damage and vole damage?",
      answer:
        "Moles create raised surface ridges and volcano-shaped soil mounds. Voles create visible surface runways through grass (like miniature trails) and chew on plant roots, bulbs, and bark at the base of trees. The two species often coexist because voles exploit mole tunnel systems for underground travel.",
    },
    {
      question: "Are sonic or vibrating mole repellers effective?",
      answer:
        "Independent research consistently shows that ultrasonic and vibrating stake devices have no measurable effect on mole behaviour. Moles quickly habituate to the stimulus. Your money is better spent on professional trapping and habitat modification that addresses the actual food-source attractants.",
    },
  ],
  seasonalStatus: "Year-Round (peak Spring–Fall)",
  searchTerms: ["mole", "moles", "mole removal", "mole tunnels", "mole damage", "yard moles"],
  relatedPestSlugs: ["voles", "skunks", "raccoons"],
  cityPageSlugs: [],
  image: {
    src: "/images/pests/pest-moles.webp",
    alt: "Eastern mole emerging from a freshly excavated soil mound on a residential lawn",
  },
};
