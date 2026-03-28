import type { PestData } from "@/content/types";

export const skunksPest: PestData = {
  slug: "skunks",
  name: "Skunks",
  category: "wildlife",
  subspecies: [
    {
      name: "Striped Skunk (Mephitis mephitis)",
      description:
        "The only skunk species native to Ontario, weighing 2.5–6.5 kg with the unmistakable black-and-white dorsal stripe pattern. Striped skunks can spray their sulphur-based musk accurately up to 4.5 metres and the odour is detectable by the human nose at concentrations as low as 10 parts per billion — making it one of the strongest natural scents on Earth.",
    },
  ],
  shortDescription:
    "Skunks dig under porches, decks, and foundations to den. Their spray contains thiols detectable at 10 parts per billion — and the odour can linger inside a home for weeks.",
  fullDescription:
    "Striped skunks are the most common source of wildlife odour complaints in Ontario. They den under porches, decks, sheds, and concrete stoops by excavating shallow burrows, often moving in during late winter when pregnant females seek sheltered birthing sites. A single litter averages 4–7 kits born in May or June.\n\nBeyond the spray, skunks tear up lawns nightly while foraging for grubs — their preferred protein source. The characteristic cone-shaped divots across a lawn are a reliable indicator that skunks are active on your property. This digging also destabilizes soil near foundations and walkways over time.\n\nSkunks are a primary rabies vector in Ontario. The Ministry of Natural Resources monitors skunk rabies closely, and any direct contact warrants immediate medical consultation. Professional exclusion using one-way doors and below-grade screening is the safest and most effective removal method.",
  signs: [
    "Strong, persistent musky odour near the foundation, deck, or porch — especially noticeable on warm evenings",
    "Cone-shaped divots (3–5 cm deep) scattered across the lawn from overnight grub foraging",
    "Visible burrow entrances under decks, porches, sheds, or concrete stoops",
    "Tracks showing five toes with visible claw marks, distinctly different from cat or raccoon prints",
    "Disturbed garden beds or overturned mulch near the foundation line",
  ],
  healthRisks: [
    "Rabies — skunks are one of Ontario's primary rabies reservoir species; any scratch or bite requires immediate post-exposure prophylaxis",
    "Leptospirosis — bacterial infection transmitted through skunk urine that can contaminate soil and groundwater near den sites",
    "Canine distemper — highly lethal to unvaccinated dogs and spread through contact with skunk saliva or nasal discharge",
    "Thiol spray exposure — direct hits to the eyes cause temporary blindness and intense pain; inhalation can trigger nausea and respiratory irritation",
  ],
  preventionTips: [
    "Install L-shaped galvanized mesh screening buried 30 cm deep and angled 30 cm outward along deck, porch, and shed perimeters",
    "Treat lawns for white grubs (European chafer, Japanese beetle larvae) in late summer to eliminate the primary food attractant",
    "Remove fallen fruit, accessible compost, and outdoor pet food before nightfall",
    "Seal gaps under concrete stoops and foundation walls with heavy-gauge steel mesh anchored into the substrate",
    "Keep garage doors fully closed at night — skunks investigate even partially open doors for shelter",
    "Install motion-activated lighting near known den areas as a temporary deterrent while professional exclusion is arranged",
  ],
  treatmentSteps: [
    {
      step: "Den Site Survey & Activity Confirmation",
      description:
        "A licensed technician inspects the property perimeter, focusing on areas under decks, porches, sheds, and foundation gaps. Tracking powder or trail cameras may be deployed to confirm active use and count individuals.",
    },
    {
      step: "One-Way Door Exclusion",
      description:
        "A heavy-duty one-way exclusion door is fitted over the primary burrow entrance, allowing skunks to exit naturally without re-entry. This method avoids spray events that trapping almost always triggers — a critical advantage for properties near living spaces.",
    },
    {
      step: "Below-Grade Screening Installation",
      description:
        "Galvanized steel mesh is trenched 30 cm below grade and extended 30 cm outward in an L-shape along the full deck, porch, or shed perimeter. This prevents skunks and other burrowing wildlife from digging new entry points.",
    },
    {
      step: "Odour Remediation (If Required)",
      description:
        "If spraying has occurred inside or near the structure, affected surfaces are treated with oxidizing agents that break down the thiol compounds. Standard household cleaners do not neutralize skunk musk — professional-grade treatments target the sulphur bonds directly.",
    },
    {
      step: "Monitoring & Warranty Inspection",
      description:
        "The one-way door remains in place for a minimum of 7–10 days. A follow-up visit confirms full vacancy, the door is removed, and the final seal is applied. Seasonal re-inspection is recommended during spring denning season.",
    },
  ],
  faqs: [
    {
      question: "Why do skunks keep digging up my lawn?",
      answer:
        "Skunks are excavation specialists targeting white grubs — the larvae of European chafer beetles and Japanese beetles that live just below the turf surface. Treating the lawn for grubs in late August or early September removes the food source and dramatically reduces skunk foraging activity.",
    },
    {
      question: "How do you remove a skunk without it spraying?",
      answer:
        "One-way exclusion doors let the skunk leave on its own terms, which almost never triggers a spray response. Live trapping, by contrast, causes extreme stress and spraying in the vast majority of cases. Exclusion is safer for the animal, the technician, and your property.",
    },
    {
      question: "Can skunk odour get inside my house from under the deck?",
      answer:
        "Yes. Thiol compounds from skunk spray are volatile enough to penetrate concrete, wood, and drywall. If a skunk sprays under a connected deck or porch, the odour routinely infiltrates the home through foundation gaps, dryer vents, and HVAC intakes — sometimes persisting for weeks without professional treatment.",
    },
    {
      question: "Are skunks dangerous to my pets?",
      answer:
        "The primary risks are rabies and canine distemper, both of which are fatal to unvaccinated dogs. A direct spray to a dog's eyes causes temporary blindness and severe irritation. Keep dogs leashed after dark during peak skunk activity months (April through October) and ensure vaccinations are current.",
    },
    {
      question: "When do skunks have babies in Ontario?",
      answer:
        "Breeding occurs in February and March, with litters of 4–7 kits born in May or June. Females den under structures specifically for the birthing period. Exclusion work near confirmed den sites must account for dependent young — a professional assessment ensures kits are mobile before one-way doors are installed.",
    },
  ],
  seasonalStatus: "Peak Season: Spring–Fall",
  searchTerms: ["skunk", "skunks", "skunk removal", "skunk smell", "skunk spray", "skunk under deck"],
  relatedPestSlugs: ["raccoons", "opossums", "moles"],
  cityPageSlugs: [],
  image: {
    src: "/images/pests/pest-skunks.webp",
    alt: "Striped skunk emerging from beneath a residential deck at twilight",
  },
};
