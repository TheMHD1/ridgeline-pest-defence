import type { PestData } from "@/content/types";

export const ladyBugsPest: PestData = {
  slug: "lady-bugs",
  name: "Lady Bugs",
  category: "flyers",
  subspecies: [
    {
      name: "Asian Lady Beetle",
      description:
        "Harmonia axyridis was introduced to North America as a biological pest-control agent but became an invasive nuisance. It is highly variable in color — from pale orange to deep red — and distinguished from native species by the M-shaped marking behind its head.",
    },
    {
      name: "Seven-Spotted Lady Beetle",
      description:
        "Coccinella septempunctata is Europe's most common ladybug and now widespread in North America. It has exactly seven black spots on bright red wing covers and is less likely to invade homes than the Asian lady beetle.",
    },
    {
      name: "Convergent Lady Beetle",
      description:
        "Hippodamia convergens is a native North American species named for the two converging white lines on its pronotum. It is commercially sold for garden aphid control and rarely enters structures in nuisance numbers.",
    },
  ],
  shortDescription:
    "Asian lady beetles invade homes by the thousands each fall, releasing a foul-smelling yellow fluid that stains surfaces. They look like harmless ladybugs but behave like overwintering pests.",
  fullDescription:
    "The lady bugs invading your home each fall are almost certainly Asian lady beetles, not the native species gardeners welcome. Harmonia axyridis was deliberately released across North America in the 1970s and 1980s to control agricultural aphids. It worked — too well. Without natural predators, populations exploded and the beetles developed a habit of overwintering inside human structures by the tens of thousands.\n\nAsian lady beetles aggregate on light-colored, sun-warmed buildings in autumn, releasing aggregation pheromones that recruit even more beetles to the same location year after year. Once inside wall voids, they enter diapause until spring. When disturbed or crushed, they engage in reflex bleeding — exuding a yellow, alkaloid-rich hemolymph from their leg joints that stains surfaces and carries a pungent, acrid odor.\n\nRidgeline Pest Defence treats Asian lady beetle infestations with the same exclusion-first approach used for boxelder bugs. Your technician seals entry points, applies a fall perimeter barrier, and uses HEPA vacuuming to remove indoor populations without triggering the reflex-bleeding response that makes DIY removal so messy.",
  signs: [
    "Masses of orange-red beetles congregating on light-colored, south-facing exterior walls in October",
    "Individual beetles appearing indoors on warm days throughout winter, clustering near windows and light fixtures",
    "Yellow-orange staining on walls, curtains, and ceilings where beetles have been crushed or stressed",
    "A pungent, chemical-like odor in rooms with large beetle accumulations, especially in attics and wall voids",
    "Dead beetles piling up in window tracks, ceiling light fixtures, and behind electrical outlet covers",
  ],
  healthRisks: [
    "Allergic rhinitis and asthma exacerbation triggered by airborne beetle debris and hemolymph proteins in heavily infested homes",
    "Contact dermatitis from handling beetles or exposure to their defensive hemolymph secretion",
    "Rare cases of oral irritation — Asian lady beetles occasionally land on food and have been documented contaminating wine grapes with their bitter hemolymph",
    "Permanent staining damage to light-colored fabrics, wallpaper, and painted surfaces from reflex bleeding",
  ],
  preventionTips: [
    "Seal all exterior cracks and gaps before October — Asian lady beetles exploit openings as small as 2mm around windows, soffits, and siding",
    "Install fine-mesh screens over attic vents, gable vents, and weep holes in brick veneer",
    "Caulk around cable, plumbing, and electrical penetrations on exterior walls",
    "Avoid crushing beetles indoors — use a HEPA vacuum and empty the bag outside immediately to contain odor and prevent staining",
    "Power-wash exterior walls in early fall to remove aggregation pheromones deposited by previous years' populations",
    "Replace outdoor white and yellow lights with warm-toned LED bulbs, which are less attractive to beetles during fall aggregation",
  ],
  treatmentSteps: [
    {
      step: "Fall Activity Monitoring",
      description:
        "Your technician times the perimeter treatment to coincide with peak aggregation, typically when consecutive nighttime lows drop below 10°C. Treating too early or too late misses the narrow entry window.",
    },
    {
      step: "Exterior Barrier Application",
      description:
        "A residual insecticide is applied to south- and west-facing walls, window and door frames, eaves, and soffits. This contact barrier intercepts beetles as they crawl toward entry points during the aggregation period.",
    },
    {
      step: "Exclusion & Sealing",
      description:
        "All accessible gaps around windows, doors, utility lines, vents, and siding joints are sealed. Physical exclusion provides multi-year protection and is the most effective long-term strategy against overwintering pests.",
    },
    {
      step: "Interior Population Removal",
      description:
        "Beetles already inside are removed with HEPA-filtered vacuuming to avoid triggering reflex bleeding. Accessible wall voids and attic spaces are treated with desiccant dust to dehydrate overwintering populations.",
    },
    {
      step: "Spring Emergence Treatment",
      description:
        "A follow-up visit in early spring intercepts surviving beetles as they exit wall voids. Entry points are re-inspected and reinforced before the next overwintering cycle begins in fall.",
    },
  ],
  faqs: [
    {
      question: "What is the difference between a ladybug and an Asian lady beetle?",
      answer:
        "Native ladybugs (like the convergent lady beetle) are solid red or orange with clearly defined spots and rarely enter homes. Asian lady beetles vary widely in color, often have an M-shaped black marking on the white area behind their head, and aggressively invade structures each fall. If beetles are clustering on your house by the hundreds, they are almost certainly Asian lady beetles.",
    },
    {
      question: "Why do Asian lady beetles come back to the same house every year?",
      answer:
        "During fall aggregation, beetles release a chemical aggregation pheromone that soaks into building materials. This pheromone persists through winter and attracts new beetles to the identical location the following autumn. Power-washing exterior walls can reduce pheromone residue, but complete removal is difficult once a site is established.",
    },
    {
      question: "Do Asian lady beetles bite?",
      answer:
        "Asian lady beetles can deliver a mild pinch using their mandibles, especially when trapped against skin under clothing. It is not a true bite in the way mosquitoes or bed bugs feed — they are not drawing blood. The sensation is minor, but sensitive individuals may develop a small red welt at the contact point.",
    },
    {
      question: "Can lady beetles damage my home?",
      answer:
        "Lady beetles do not cause structural damage. The primary concern is staining from reflex bleeding — the yellow hemolymph they secrete when disturbed permanently discolors light-colored paint, wallpaper, and fabrics. In homes with very large overwintering populations, accumulated beetle debris in wall voids can also attract secondary pests like carpet beetles and larder beetles.",
    },
    {
      question: "Should I release ladybugs in my garden for aphid control?",
      answer:
        "Commercially sold convergent lady beetles often disperse from your garden within 24 hours of release. If you want effective biological aphid control, attract native ladybugs by planting pollen-rich flowers like yarrow, dill, and fennel. Avoid broad-spectrum insecticide use in your garden, which kills beneficial predators along with pests.",
    },
  ],
  seasonalStatus: "Peak Season: Fall (overwintering)",
  searchTerms: ["lady bug", "lady bugs", "ladybug", "ladybugs", "asian lady beetle", "lady beetle"],
  relatedPestSlugs: ["boxelder-bugs", "beetles", "moths"],
  cityPageSlugs: [],
  image: {
    src: "/images/pests/pest-ladybugs.webp",
    alt: "Asian lady beetle on a window frame showing orange wing covers and the distinctive M-shaped head marking",
  },
};
