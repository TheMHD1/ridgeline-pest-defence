import type { PestData } from "@/content/types";

export const raccoonsPest: PestData = {
  slug: "raccoons",
  name: "Raccoons",
  category: "wildlife",
  subspecies: [
    {
      name: "Common Raccoon (Procyon lotor)",
      description:
        "The only raccoon species native to Canada, weighing 5–14 kg with distinctive black facial mask and ringed tail. Highly dexterous front paws can open latches, jars, and garbage bins. Urban populations across Ontario have adapted to exploit human food sources, making them the most frequent wildlife intruder in Canadian homes.",
    },
  ],
  shortDescription:
    "Raccoons cause thousands of dollars in attic and soffit damage each year. Their latrines harbour roundworm eggs that remain infectious in soil for years.",
  fullDescription:
    "Raccoons rank as Ontario's most common nuisance wildlife species. Adults can squeeze through openings as small as 10 cm in diameter, targeting attics, chimneys, and crawl spaces for denning — especially females seeking a safe birthing site between March and June.\n\nOnce inside, raccoons tear apart insulation, chew through electrical wiring, and contaminate spaces with urine and droppings. A single latrine site can contain millions of Baylisascaris procyonis (raccoon roundworm) eggs, which survive in soil for years and pose a serious infection risk to children and pets.\n\nHumane removal is the only legal option in Ontario. Under the Fish and Wildlife Conservation Act, raccoons cannot be relocated more than one kilometre from the capture site. Professional one-way door exclusion allows the animals to leave on their own while sealing re-entry points permanently.",
  signs: [
    "Heavy thumping or chattering noises in the attic, especially at dusk and dawn",
    "Torn soffit panels, ripped roof vents, or damaged fascia boards near the roofline",
    "Dark, greasy smudge marks around entry holes from repeated body contact",
    "Concentrated latrine sites on rooftops, decks, or in attic insulation",
    "Overturned garbage bins with lids pried off and bags shredded",
  ],
  healthRisks: [
    "Baylisascaris procyonis (raccoon roundworm) — eggs persist in soil for years and can cause severe neurological damage in humans",
    "Rabies — raccoons are a primary rabies vector in Ontario; any direct contact requires immediate medical attention",
    "Leptospirosis — bacterial infection transmitted through raccoon urine that contaminates water and soil",
    "Canine distemper virus — lethal to unvaccinated dogs and spread through raccoon saliva and droppings",
  ],
  preventionTips: [
    "Secure garbage bins with locking lids or bungee cords — raccoons can defeat most standard latches",
    "Trim tree branches back at least 2.5 metres from the roofline to cut off aerial access routes",
    "Cap all chimneys with heavy-gauge galvanized steel mesh rated for wildlife",
    "Repair any soffit or fascia damage within 48 hours — raccoons exploit small gaps quickly",
    "Remove outdoor pet food bowls before dark since raccoons are primarily nocturnal foragers",
    "Install motion-activated lights or sprinklers near known entry points as a short-term deterrent",
  ],
  treatmentSteps: [
    {
      step: "Inspection & Entry-Point Mapping",
      description:
        "A licensed technician inspects the full roofline, soffits, vents, and chimney to document every active and potential entry point. Thermal imaging may be used to confirm the presence of animals inside the structure.",
    },
    {
      step: "One-Way Door Installation",
      description:
        "Heavy-duty, species-specific one-way exclusion doors are mounted over the primary entry point. This allows raccoons to leave naturally without being able to re-enter — the most humane and effective method under Ontario law.",
    },
    {
      step: "Secondary Entry-Point Sealing",
      description:
        "All other vulnerable openings are sealed with galvanized steel mesh, metal flashing, or reinforced screening. Materials must withstand the raccoon's considerable jaw strength and manual dexterity.",
    },
    {
      step: "Latrine & Contamination Cleanup",
      description:
        "Raccoon droppings and contaminated insulation are removed using full PPE and HEPA-filtered equipment. Because Baylisascaris eggs resist most disinfectants, affected areas are treated with direct heat or removed entirely.",
    },
    {
      step: "Monitoring & Warranty Follow-Up",
      description:
        "The one-way door remains in place for a minimum of 10 days to ensure all raccoons have vacated. A follow-up inspection confirms the structure is clear before the door is removed and the final seal is applied.",
    },
  ],
  faqs: [
    {
      question: "Can I relocate a raccoon myself in Ontario?",
      answer:
        "No. Ontario's Fish and Wildlife Conservation Act prohibits relocating raccoons more than one kilometre from the capture site. Unauthorized relocation carries fines up to $25,000. Professional exclusion using one-way doors is the legal and most effective approach.",
    },
    {
      question: "How do I know if a raccoon in my attic has babies?",
      answer:
        "Birthing season runs from March to June. Listen for high-pitched chittering or mewing sounds distinct from the heavier adult footsteps. A technician can confirm the presence of kits using thermal cameras before installing exclusion devices, ensuring the young are mobile enough to leave with the mother.",
    },
    {
      question: "Are raccoon droppings dangerous even after the animal is gone?",
      answer:
        "Yes. Baylisascaris procyonis eggs in raccoon droppings become infectious after 2–4 weeks and can survive in soil for years. Ingesting even a small number of eggs can lead to serious organ and brain damage. Professional cleanup with proper PPE and disposal methods is strongly recommended.",
    },
    {
      question: "Will raccoons come back after exclusion?",
      answer:
        "Raccoons have excellent spatial memory and will attempt to re-enter a former den site. That is why every secondary opening must be sealed with materials strong enough to resist their 23 kg bite force. Properly installed galvanized steel barriers and reinforced screening prevent re-entry long-term.",
    },
    {
      question: "Do raccoons cause structural damage?",
      answer:
        "Absolutely. Raccoons routinely tear through aluminum soffits, rip off roof shingles, and break plastic vent covers to access attics. Inside, they shred insulation for nesting, chew wiring — creating fire risk — and their urine can saturate drywall and ceiling joists over time.",
    },
  ],
  seasonalStatus: "Year-Round (peak Spring–Fall)",
  searchTerms: ["raccoon", "raccoons", "raccoon removal", "raccoon in attic", "raccoon control"],
  relatedPestSlugs: ["squirrels", "skunks", "opossums"],
  cityPageSlugs: [
    "toronto", "mississauga", "brampton", "hamilton", "london",
    "kitchener", "oakville", "markham", "niagara", "north-york",
    "scarborough", "richmond-hill", "waterloo", "st-catharines", "edmonton",
  ],
  image: {
    src: "/images/pests/pest-raccoons.webp",
    alt: "Raccoon peering out from a residential roofline gap at dusk",
  },
};
