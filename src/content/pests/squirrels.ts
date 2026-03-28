import type { PestData } from "@/content/types";

export const squirrelsPest: PestData = {
  slug: "squirrels",
  name: "Squirrels",
  category: "wildlife",
  subspecies: [
    {
      name: "Eastern Grey Squirrel (Sciurus carolinensis)",
      description:
        "The most common urban squirrel across southern Ontario, weighing 400–600 g. Grey squirrels are prolific chewers — their incisors grow roughly 15 cm per year, driving constant gnawing behaviour on wood, plastic, and even aluminum.",
    },
    {
      name: "Red Squirrel (Tamiasciurus hudsonicus)",
      description:
        "Smaller and more territorial than grey squirrels at 200–250 g. Red squirrels are found throughout Canadian forests and are notorious for caching food inside wall cavities and attic spaces, creating secondary pest attraction.",
    },
    {
      name: "Black Squirrel (Sciurus carolinensis melanistic variant)",
      description:
        "A melanistic color morph of the eastern grey squirrel, especially prevalent in Ontario. Behaviorally identical to grey squirrels but anecdotally more bold around human activity — Kitchener, Ontario has one of the highest black squirrel densities in the world.",
    },
    {
      name: "Northern Flying Squirrel (Glaucomys sabrinus)",
      description:
        "Strictly nocturnal, weighing just 75–140 g, with a gliding membrane between front and hind legs. Flying squirrels often colonize attics in groups of 10–20 individuals, and homeowners may not discover the infestation for months because of their silent, nighttime activity.",
    },
  ],
  shortDescription:
    "Squirrels chew through electrical wiring, fascia, and roof vents to access attics. A single squirrel's incisors grow 15 cm per year, making non-stop gnawing a biological necessity.",
  fullDescription:
    "Squirrels are the second most reported wildlife intruder in Ontario homes, right behind raccoons. Their constantly growing incisors compel them to gnaw through wood, plastic vents, aluminum flashing, and electrical wiring — the last of which creates a documented fire hazard identified by Canadian insurers.\n\nFall and winter drive the heaviest intrusion activity. Squirrels seek warm, sheltered spaces to cache food and nest, with attics being the prime target. A grey squirrel can jump horizontally over 2.5 metres and vertically over 1.2 metres, so overhanging branches and nearby structures provide easy rooftop access.\n\nOntario regulations require humane treatment of squirrels. One-way exclusion doors allow animals to exit naturally while professionals seal every secondary opening with chew-proof materials. Flying squirrel colonies require extra care because the entire group must be given adequate time to vacate before final sealing.",
  signs: [
    "Rapid scratching, scurrying, or rolling sounds in the attic — loudest during early morning and late afternoon",
    "Chewed holes in fascia boards, plastic roof vents, or aluminum soffit panels",
    "Scattered nutshells, seed husks, or food caches inside attic insulation or wall cavities",
    "Visible gnaw marks on electrical wiring, wooden beams, or PVC plumbing pipes",
    "Squirrel droppings (small, dark, oval pellets about 8 mm long) concentrated near entry points",
  ],
  healthRisks: [
    "Electrical fire risk — squirrel-chewed wiring is a leading cause of unexplained attic fires in Canadian homes",
    "Salmonellosis — transmitted through droppings contaminating stored items or HVAC ductwork",
    "Leptospirosis — bacterial pathogen shed in squirrel urine that can enter through skin abrasions or mucous membranes",
    "Ectoparasites — squirrel nests harbour fleas, ticks, and mites that migrate into living spaces after the host animals leave",
  ],
  preventionTips: [
    "Trim all tree branches to at least 2.5 metres from the roofline — squirrels can clear this distance in a single leap",
    "Replace plastic roof vents with galvanized steel or heavy-gauge aluminum versions rated for wildlife resistance",
    "Seal gaps at soffit-to-fascia junctions with 16-gauge galvanized steel mesh — squirrels chew through lighter materials within hours",
    "Remove bird feeders or switch to weight-activated squirrel-proof models",
    "Inspect the roofline every fall before nesting season peaks, paying special attention to corners and vent openings",
    "Store firewood at least 6 metres from the house to reduce staging points near the structure",
  ],
  treatmentSteps: [
    {
      step: "Full Roofline & Attic Inspection",
      description:
        "A technician examines every soffit panel, roof vent, plumbing stack, and fascia joint for chew damage, grease marks, and droppings. Attic interiors are checked for nesting material, food caches, and wiring damage.",
    },
    {
      step: "One-Way Exclusion Door Placement",
      description:
        "A species-appropriate one-way door is installed at the primary entry point, allowing squirrels to leave but preventing re-entry. For flying squirrel colonies, doors remain in place longer to accommodate the full group's exit.",
    },
    {
      step: "Entry-Point Fortification",
      description:
        "All secondary and potential entry points are sealed with 16-gauge galvanized steel mesh, metal flashing, or aluminum sheeting. Materials are selected to resist squirrel jaw pressure, which can exert over 7,000 psi per square inch at the incisor tip.",
    },
    {
      step: "Contamination & Damage Assessment",
      description:
        "Droppings are removed, soiled insulation is extracted, and any chewed wiring is flagged for electrical repair. HEPA-filtered vacuuming reduces airborne particulates from dried fecal matter.",
    },
    {
      step: "Follow-Up Inspection & Seal-Off",
      description:
        "After a monitoring period of 7–14 days, the technician confirms full vacancy, removes the one-way door, and applies the final permanent seal. A warranty inspection ensures no new activity.",
    },
  ],
  faqs: [
    {
      question: "Why do squirrels chew on everything including my house?",
      answer:
        "Squirrel incisors never stop growing — roughly 15 cm per year. Gnawing on hard surfaces wears the teeth down to a functional length. Wood, aluminum, and plastic all serve this biological need, which is why your fascia and vents are prime targets.",
    },
    {
      question: "Can squirrels really cause house fires?",
      answer:
        "Yes. The Insurance Bureau of Canada identifies rodent- and wildlife-chewed wiring as a contributing factor in residential attic fires. Squirrels strip wire insulation while gnawing, exposing conductors that can arc against wood framing.",
    },
    {
      question: "How do flying squirrels get into my attic if I never see them?",
      answer:
        "Northern flying squirrels are strictly nocturnal and nearly silent. They glide from nearby trees to your roofline and can slip through gaps as small as 3.5 cm. Colonies of 10–20 animals are common, and infestations often go unnoticed for months until urine staining or faint scratching sounds give them away.",
    },
    {
      question: "Is it legal to trap and relocate squirrels in Ontario?",
      answer:
        "Ontario's Fish and Wildlife Conservation Act limits relocation to within one kilometre of the capture site. One-way exclusion is the preferred humane method — it avoids the stress of capture entirely and has a higher long-term success rate than trapping.",
    },
    {
      question: "When is the worst time of year for squirrel intrusions?",
      answer:
        "Late September through November sees the heaviest activity as squirrels stockpile food and seek warm shelter before winter. A secondary spike occurs in late February and March when females look for safe nesting sites to birth spring litters.",
    },
  ],
  seasonalStatus: "Year-Round (peak Fall–Winter)",
  searchTerms: ["squirrel", "squirrels", "squirrel removal", "squirrel in attic", "grey squirrel", "red squirrel"],
  relatedPestSlugs: ["raccoons", "bats", "birds"],
  cityPageSlugs: [
    "toronto", "mississauga", "brampton", "hamilton", "london",
    "kitchener", "oakville", "markham", "niagara", "north-york",
    "scarborough", "richmond-hill", "waterloo", "st-catharines", "edmonton",
  ],
  image: {
    src: "/images/pests/pest-squirrels.webp",
    alt: "Eastern grey squirrel perched on a residential roof edge near a chewed soffit vent",
  },
};
