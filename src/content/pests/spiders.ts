import type { PestData } from "@/content/types";

export const spidersPest: PestData = {
  slug: "spiders",
  name: "Spiders",
  category: "crawlers",
  subspecies: [
    {
      name: "House Spiders",
      description:
        "Small to medium brown spiders (5–8 mm body) that build tangled cobwebs in corners, basements, and garages. Despite their constant presence, a single house spider can consume up to 2,000 insects per year — making them effective but unwelcome pest controllers.",
    },
    {
      name: "Wolf Spiders",
      description:
        "Large, ground-dwelling hunters (10–35 mm body) that don't spin webs. They chase prey at speed, relying on excellent eyesight from two oversized front-facing eyes. Females carry their egg sacs on their spinnerets and the hatched young ride on the mother's back for weeks.",
    },
    {
      name: "Cellar Spiders",
      description:
        "Thin-bodied spiders (7–8 mm) with extremely long, delicate legs — often mistaken for daddy longlegs. They hang inverted in loose, messy webs in dark damp areas. When threatened, they vibrate rapidly in their web to blur their outline, earning the nickname 'vibrating spiders.'",
    },
    {
      name: "Brown Recluse",
      description:
        "Medium-sized (6–20 mm) light brown spider with a distinctive violin-shaped marking behind its eyes. Rare in Canada but occasionally transported in shipped goods. Their venom contains sphingomyelinase D, which can cause tissue necrosis around the bite site.",
    },
  ],
  shortDescription:
    "Spiders enter homes seeking prey insects and sheltered nesting spots. Most are harmless, but infestations signal a larger insect problem and leave webs throughout living spaces.",
  fullDescription:
    "Finding spiders in your home isn't random — it's a signal. Spiders go where food is, and their food is other insects. A sudden increase in spider activity usually means you have an underlying pest population they're feeding on. Solving the spider problem starts with solving whatever attracted them.\n\nMost Canadian spider species are harmless to humans. House spiders and cellar spiders lack the fang strength to penetrate skin effectively. Wolf spiders can bite if handled but their venom is mild — comparable to a bee sting. The brown recluse, whose bite can cause serious tissue damage, is extremely rare north of the US border and almost always arrives as a hitchhiker in cardboard boxes or furniture shipped from southern states.\n\nSpider infestations are primarily a nuisance issue — webs accumulate fast, egg sacs hatch 100–300 spiderlings at once, and certain species can produce multiple egg sacs per season. Professional treatment combines direct removal with residual barriers that eliminate both spiders and the prey insects sustaining them.",
  signs: [
    "Accumulating cobwebs in corners, window frames, basements, and garages — especially if webs rebuild within days of removal",
    "Egg sacs attached to webs or hidden in sheltered crevices — each sac contains 100–300 eggs",
    "Live spiders spotted frequently during evening hours when most species are actively hunting",
    "Shed exoskeletons (moults) in undisturbed areas; spiders moult 5–10 times before reaching adulthood",
    "An increase in other insect activity (flies, ants, moths) — spiders follow their food source",
  ],
  healthRisks: [
    "Brown recluse bites (rare in Canada) can cause necrotic lesions that take weeks to heal and may require medical debridement",
    "Wolf spider bites cause localized pain, redness, and swelling similar to a wasp sting",
    "Spider webs collect dust and allergens, aggravating asthma and respiratory sensitivities in enclosed spaces",
    "Arachnophobia affects an estimated 3–6% of the population, causing significant anxiety and sleep disruption when spiders are present indoors",
  ],
  preventionTips: [
    "Reduce outdoor lighting or switch to yellow/sodium vapour bulbs — bright lights attract the flying insects that spiders feed on",
    "Seal gaps around windows, doors, and foundation cracks; spiders can squeeze through openings as small as 1.5 mm",
    "Remove clutter in basements, garages, and storage areas — undisturbed boxes and piles are prime nesting habitat",
    "Install tight-fitting screens on windows and vents; inspect them annually for tears or gaps",
    "Clear vegetation and leaf litter from your foundation perimeter to reduce ground-dwelling species like wolf spiders",
    "Address underlying insect problems — eliminating the food source is the most effective long-term spider deterrent",
  ],
  treatmentSteps: [
    {
      step: "Inspection & Web Survey",
      description:
        "A technician maps web locations, identifies species, and assesses the underlying insect population. High spider density often reveals a hidden fly, ant, or moth problem worth treating simultaneously.",
    },
    {
      step: "Direct Web & Egg Sac Removal",
      description:
        "All accessible webs and egg sacs are physically removed using extension tools. This provides immediate relief and prevents the next generation from hatching — a single missed egg sac can release 300 spiderlings.",
    },
    {
      step: "Residual Perimeter Application",
      description:
        "A microencapsulated residual insecticide is applied to baseboards, window frames, door thresholds, and exterior foundation walls. Spiders absorb the product through their feet as they cross treated surfaces.",
    },
    {
      step: "Crack & Crevice Treatment",
      description:
        "Insecticidal dust is injected into wall voids, weep holes, and utility penetrations where spiders harbour. This targets spiders in their daytime hiding spots before they emerge to hunt.",
    },
    {
      step: "Prey Insect Reduction",
      description:
        "Exterior light management recommendations and targeted treatment for prey insects (flies, moths, ants) remove the food source that attracted spiders in the first place.",
    },
  ],
  faqs: [
    {
      question: "Are spiders in my Canadian home dangerous?",
      answer:
        "The vast majority are not. Common house spiders, cellar spiders, and wolf spiders pose no medical threat beyond a mild bite if provoked. The brown recluse — the only medically significant species occasionally found in Canada — is not established here and almost always arrives via shipped goods from the southern US.",
    },
    {
      question: "Why do I see more spiders in fall?",
      answer:
        "Male spiders leave their webs in late summer and fall to search for mates, making them far more visible as they wander across floors and walls. This isn't a new infestation — they've been in your home all along. Fall is mating season, and the males are simply on the move.",
    },
    {
      question: "Do spiders actually come in through drains?",
      answer:
        "Almost never. Spiders can't climb the smooth, wet interior of drain pipes, and the water trap (P-trap) blocks passage. Spiders found in sinks and tubs got there by walking across surfaces and falling in — the slick porcelain sides prevent them from climbing back out.",
    },
    {
      question: "Should I kill spiders or leave them alone?",
      answer:
        "A few spiders are genuinely useful — they consume flies, mosquitoes, and other pests. But when you're finding multiple spiders weekly, egg sacs in living areas, or webs rebuilding faster than you can remove them, it's a sign of an underlying insect problem that needs professional attention.",
    },
    {
      question: "How many eggs can a spider lay at once?",
      answer:
        "Most common house spiders produce egg sacs containing 100–300 eggs, and a single female can create multiple sacs per season. Wolf spiders carry their egg sac attached to their spinnerets and guard the young after hatching. This reproductive rate is why a small problem can scale quickly.",
    },
  ],
  seasonalStatus: "Year-Round (peak Fall)",
  searchTerms: ["spider", "spiders", "brown recluse", "black widow", "house spider", "wolf spider", "cellar spider", "spider web"],
  relatedPestSlugs: ["centipedes", "silverfish", "ants"],
  cityPageSlugs: [
    "toronto", "mississauga", "brampton", "hamilton", "london",
    "kitchener", "oakville", "markham", "niagara", "north-york",
    "scarborough", "richmond-hill", "waterloo", "st-catharines", "edmonton",
  ],
  image: {
    src: "/images/pests/pest-spiders.webp",
    alt: "Wolf spider on a basement floor showing its distinctive large front-facing eyes and brown patterning",
  },
};
