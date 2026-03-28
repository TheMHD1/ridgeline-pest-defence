import type { PestData } from "@/content/types";

export const earwigsPest: PestData = {
  slug: "earwigs",
  name: "Earwigs",
  category: "crawlers",
  subspecies: [
    {
      name: "European Earwig",
      description:
        "The most common earwig in Canada (12–25 mm), dark brown with distinctive rear pincers (cerci). Males have curved pincers; females have straight ones. They feed on decaying organic matter, seedlings, and soft fruit. Active at night, they hide in tight, damp crevices during the day.",
    },
    {
      name: "Striped Earwig",
      description:
        "Slightly larger and lighter in color than the European species, with two dark longitudinal stripes on the pronotum. More predatory — they actively hunt small insects and larvae. Less common indoors but show up in garages and sheds near exterior lighting.",
    },
  ],
  shortDescription:
    "Earwigs slip into basements and bathrooms through foundation cracks, drawn by moisture. Their pincers look alarming but the real problem is the numbers — one female can hatch 50+ nymphs in a single clutch.",
  fullDescription:
    "Earwigs are one of few insects where the mother guards her eggs — but that maternal instinct doesn't stop them from invading your basement. A female European earwig lays 30–60 eggs in a shallow soil nest and actively protects them until the nymphs can forage on their own.\n\nThey're nocturnal and moisture-dependent. During the day, earwigs pack into tight gaps — under mulch, inside door frames, beneath siding, and along foundation walls. At night they emerge to feed on decaying vegetation, flower petals, and soft-bodied insects. When outdoor conditions dry out in midsummer, they push indoors through weep holes, cracks, and gaps around basement windows.\n\nA dozen earwigs in a laundry room usually means hundreds more staging behind the foundation. Effective control means addressing the moisture gradient that draws them in and sealing the entry points they exploit.",
  signs: [
    "Clusters of earwigs under flowerpots, mulch, or landscape fabric near the foundation",
    "Live earwigs in sinks, bathtubs, or laundry room drains — they follow moisture",
    "Irregular holes chewed in flower petals, seedlings, or soft fruit in the garden",
    "Earwigs dropping from door frames, window casings, or light fixtures at night",
    "Dark, moist spots along basement walls showing frass or shed exoskeletons",
  ],
  healthRisks: [
    "Earwigs do not transmit diseases to humans, but large indoor populations contaminate stored food and pantry items",
    "Their pincers can deliver a mild pinch if handled — not medically significant but startling",
    "Earwig frass and shed skins can trigger mild allergic responses in sensitive individuals",
    "Heavy garden infestations destroy seedlings, ornamental flowers, and soft fruit crops",
  ],
  preventionTips: [
    "Reduce mulch depth to under 5 cm within one metre of your foundation — deep mulch traps the moisture earwigs need",
    "Fix leaking outdoor taps and ensure downspouts direct water at least 1.5 metres from the house",
    "Seal cracks along the foundation, around basement windows, and where utility conduits enter the building",
    "Switch exterior lighting to yellow or sodium-vapour bulbs — white lights attract earwigs and the insects they feed on",
    "Remove leaf litter, rotting boards, and stacked firewood from against exterior walls",
    "Run a dehumidifier in the basement to keep relative humidity below 50%",
  ],
  treatmentSteps: [
    {
      step: "Inspection & Entry Point Mapping",
      description:
        "A technician identifies indoor harbourage areas and traces entry points along the foundation, weep holes, basement windows, and utility penetrations.",
    },
    {
      step: "Exterior Perimeter Treatment",
      description:
        "A residual insecticide barrier is applied around the foundation, along walkways, and in landscape beds where earwigs stage before entering.",
    },
    {
      step: "Interior Crack & Crevice Application",
      description:
        "Targeted dust or liquid treatment in cracks behind baseboards, under sinks, and around drain openings where earwigs harbour indoors.",
    },
    {
      step: "Moisture & Habitat Reduction",
      description:
        "Your technician recommends specific changes — mulch depth, drainage fixes, and dehumidification — that remove the conditions earwigs depend on.",
    },
    {
      step: "Follow-Up Monitoring",
      description:
        "A return visit 3–4 weeks later confirms population collapse. Sticky traps placed during the initial visit are checked for ongoing activity.",
    },
  ],
  faqs: [
    {
      question: "Do earwigs actually crawl into ears?",
      answer:
        "This is a centuries-old myth with no medical basis. Earwigs have zero interest in human ear canals. They seek tight, damp crevices — but the warmth and airflow of an ear is the opposite of what they prefer. The name likely comes from the Old English 'ēarwicga' (ear insect), a folk superstition.",
    },
    {
      question: "Can earwig pincers hurt you?",
      answer:
        "The pincers (cerci) can deliver a mild pinch if you handle an earwig, but they can't break skin or inject venom. The pincers are used for defence against predators and during mating displays — not for attacking humans.",
    },
    {
      question: "Why do earwigs come inside during summer?",
      answer:
        "When outdoor soil dries out in July and August, earwigs migrate toward moisture. Foundations, basement walls, and bathroom plumbing provide the humidity they need. If your home has unsealed weep holes or foundation cracks, earwigs follow the moisture gradient straight inside.",
    },
    {
      question: "How do I keep earwigs out of my garden?",
      answer:
        "Reduce hiding spots by thinning mulch, removing debris, and spacing plants for airflow. Rolled-up newspaper or damp cardboard tubes placed in garden beds overnight make effective traps — collect and dispose of them each morning. For severe infestations, perimeter treatment keeps populations manageable.",
    },
    {
      question: "Are earwigs active year-round in Ontario?",
      answer:
        "No. Earwigs overwinter as adults buried in soil below the frost line. They emerge in late spring when soil temperatures rise above 10°C and remain active until the first hard frost. Indoor populations can persist longer in heated basements.",
    },
    {
      question: "How quickly can Ridgeline treat an earwig problem?",
      answer:
        "Most earwig appointments are available within 24–48 hours. Since earwigs are a nuisance pest rather than a structural threat, we schedule based on the severity of the indoor population.",
    },
  ],
  seasonalStatus: "Peak Season: June–September",
  searchTerms: ["earwig", "earwigs", "pincher bug", "pincher bugs", "earwig infestation"],
  relatedPestSlugs: ["centipedes", "silverfish", "cockroaches"],
  cityPageSlugs: [],
  image: {
    src: "/images/pests/pest-earwigs.webp",
    alt: "European earwig showing distinctive rear pincers on a damp basement surface",
  },
};
