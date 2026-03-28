import type { PestData } from "@/content/types";

export const waspsHornetsPest: PestData = {
  slug: "wasps-hornets",
  name: "Wasps & Hornets",
  category: "flyers",
  subspecies: [
    {
      name: "Yellow Jacket",
      description:
        "Vespula species build concealed nests underground or inside wall voids that can house over 5,000 workers by late summer. They are highly defensive near the nest and can sting repeatedly without losing their stinger.",
    },
    {
      name: "Paper Wasp",
      description:
        "Polistes species construct open, umbrella-shaped nests under eaves, deck railings, and porch ceilings. They are less aggressive than yellow jackets but will sting if the nest is disturbed or vibrated.",
    },
    {
      name: "Bald-Faced Hornet",
      description:
        "Dolichovespula maculata builds large, enclosed paper nests in trees and on structures that can reach the size of a basketball. They post sentries up to 3 meters from the nest and attack in coordinated groups when threatened.",
    },
    {
      name: "Mud Dauber",
      description:
        "Sceliphron and Trypoxylon species build distinctive tube-shaped mud nests on walls and ceilings. They are solitary and rarely sting humans, but their nests can block equipment, vents, and even aircraft pitot tubes.",
    },
  ],
  shortDescription:
    "Wasps and hornets deliver painful stings that can trigger life-threatening anaphylaxis. Professional nest removal eliminates the colony safely before defensive behavior escalates.",
  fullDescription:
    "Unlike honey bees, wasps and hornets can sting multiple times because their stingers lack barbs. A single yellow jacket sting injects a venom cocktail containing phospholipase A and hyaluronidase — enzymes that destroy cell membranes and allow the venom to spread rapidly through tissue.\n\nColony size peaks in late summer when food competition intensifies. This is when yellow jackets become aggressive scavengers at outdoor meals and trash cans. A mature colony produces new queens in fall; those queens overwinter alone and start new colonies the following spring, meaning every nest you ignore this year seeds multiple nests next year.\n\nRidgeline Pest Defence removes active nests and treats entry points to prevent recolonization. Your technician identifies the species first — because spraying a yellow jacket ground nest requires a completely different approach than removing an aerial bald-faced hornet nest 20 feet up in a tree.",
  signs: [
    "Wasps flying in a direct, repeated path to and from a specific entry point on your structure",
    "Papery nest material visible under eaves, in shrubs, or attached to playground equipment",
    "Increased wasp activity around outdoor food, sugary drinks, and garbage cans in late summer",
    "Buzzing sounds coming from inside wall voids, soffits, or attic spaces",
    "Mud tube formations on exterior walls, garage ceilings, or inside storage sheds",
  ],
  healthRisks: [
    "Anaphylaxis from venom hypersensitivity — affects approximately 3% of adults stung by Hymenoptera",
    "Multiple sting envenomation causing systemic toxicity, especially dangerous for children and the elderly",
    "Secondary bacterial infection at sting sites when scratched or improperly treated",
    "Psychological distress and outdoor activity avoidance due to nest proximity",
  ],
  preventionTips: [
    "Inspect eaves, soffits, and deck undersides monthly from April through June when queens are selecting nest sites",
    "Seal gaps around utility penetrations, soffit vents, and J-channels with caulk or steel wool",
    "Keep outdoor garbage cans tightly sealed and rinse recycling containers to remove sugary residue",
    "Avoid wearing bright floral patterns and strong fragrances when dining outdoors during peak season",
    "Hang decoy nests in early spring — paper wasps are territorial and often avoid areas with existing colonies",
    "Trim tree branches and shrubs that contact your roofline to reduce sheltered nesting sites",
  ],
  treatmentSteps: [
    {
      step: "Species & Nest Location Assessment",
      description:
        "Your technician identifies the exact wasp or hornet species and locates all active nests. Ground nests, wall-void colonies, and aerial nests each require different treatment protocols and safety equipment.",
    },
    {
      step: "Protective Zone Establishment",
      description:
        "A safety perimeter is set around the nest before treatment begins. Household members and pets are directed to stay indoors or at a safe distance during the removal process.",
    },
    {
      step: "Nest Treatment & Removal",
      description:
        "A targeted insecticidal dust or aerosol is applied directly into the nest entrance. For aerial nests, specialized extension equipment allows treatment from a safe distance without ladder contact near aggressive colonies.",
    },
    {
      step: "Entry Point Sealing",
      description:
        "After colony elimination is confirmed, nest material is removed and entry points are sealed to prevent future queens from recolonizing the same void or overhang.",
    },
    {
      step: "Post-Treatment Verification",
      description:
        "A follow-up inspection within 7 to 10 days confirms full colony elimination. Any returning foragers that were away during initial treatment are addressed at this visit.",
    },
  ],
  faqs: [
    {
      question: "Should I knock down a wasp nest myself?",
      answer:
        "Attempting DIY removal of an active nest — especially yellow jackets or bald-faced hornets — is the leading cause of mass-sting incidents treated in emergency rooms each summer. Yellow jackets release alarm pheromones when threatened, triggering coordinated defensive attacks from the entire colony.",
    },
    {
      question: "Why are wasps more aggressive in late summer and fall?",
      answer:
        "By August and September, the colony has reached peak population and the queen stops producing worker-feeding larvae. Workers lose their primary food source (larval secretions) and shift to scavenging sugary foods aggressively. This behavioral change is biological, not random.",
    },
    {
      question: "Do wasps return to the same nest the following year?",
      answer:
        "Social wasps do not reuse old nests, but new queens often select nesting sites near where they were raised. Removing old nest material and sealing the entry point reduces the likelihood of a new colony establishing in the same location.",
    },
    {
      question: "What is the difference between a wasp sting and a bee sting?",
      answer:
        "Honey bees sting once and die because their barbed stinger tears from the abdomen. Wasps and hornets have smooth stingers that retract cleanly, allowing them to sting repeatedly. Wasp venom also contains different protein allergens, so being allergic to one does not necessarily mean you are allergic to the other.",
    },
    {
      question: "Are mud dauber nests dangerous?",
      answer:
        "Mud daubers are solitary and have a 0.1% sting rate compared to 15% for paper wasps. However, their nests should still be removed because they attract other pests — abandoned mud dauber nests are frequently colonized by more aggressive species like paper wasps or small yellow jacket colonies.",
    },
  ],
  seasonalStatus: "Peak Season: Summer–Early Fall",
  searchTerms: ["wasp", "wasps", "hornet", "hornets", "yellowjacket", "yellow jacket"],
  relatedPestSlugs: ["mosquitoes", "flies", "beetles"],
  cityPageSlugs: [
    "toronto", "mississauga", "brampton", "hamilton", "london",
    "kitchener", "oakville", "markham", "niagara", "north-york",
    "scarborough", "richmond-hill", "waterloo", "st-catharines", "edmonton",
    "vaughan", "etobicoke",
  ],
  image: {
    src: "/images/pests/pest-wasps-hornets.webp",
    alt: "Yellow jacket wasp on a paper nest showing characteristic bright yellow and black banding pattern",
  },
};
