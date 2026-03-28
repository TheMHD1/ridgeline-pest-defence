import type { PestData } from "@/content/types";

export const bedBugsPest: PestData = {
  slug: "bed-bugs",
  name: "Bed Bugs",
  category: "crawlers",
  subspecies: [
    {
      name: "Common Bed Bug",
      description:
        "Cimex lectularius — a flat, oval, reddish-brown insect (4–7 mm) that feeds exclusively on human blood. Adults can survive 6–12 months without a meal by entering a dormant state. They inject an anaesthetic during feeding, so most people don't feel the bite until the allergic reaction develops hours later.",
    },
    {
      name: "Tropical Bed Bug",
      description:
        "Cimex hemipterus — nearly identical in appearance to the common bed bug but adapted to warmer climates. Increasingly found in heated Canadian buildings and imported through international travel. Distinguished from the common bed bug only by microscopic examination of the prothorax shape.",
    },
    {
      name: "Bat Bug",
      description:
        "Cimex adjunctus — primarily feeds on bats but will bite humans when bat colonies are removed from attics and the bugs lose their primary host. Visually almost indistinguishable from bed bugs; the key difference is longer fringe hairs on the prothorax, visible only under magnification.",
    },
  ],
  shortDescription:
    "Bed bugs feed on your blood while you sleep, leaving itchy bite clusters and spreading rapidly through furniture and luggage — regardless of cleanliness.",
  fullDescription:
    "Bed bugs are ambush parasites. They hide within 2.5 metres of where you sleep during the day and emerge between 2–5 AM, guided by the carbon dioxide you exhale and your body heat. A single feeding takes 5–10 minutes, during which the bug swells to three times its unfed size. They don't live on your body — they retreat to cracks in headboards, mattress seams, and baseboards after each meal.\n\nThese insects spread through human activity, not filth. Five-star hotels get them. New condos get them. They hitchhike in luggage, used furniture, clothing, and shared laundry facilities. A pregnant female carrying fertilized eggs can start a new infestation alone. Because they reproduce through traumatic insemination — the male pierces the female's abdomen — females actively flee established colonies, which accelerates spread to new rooms.\n\nDIY treatment almost never works. Bed bugs have developed resistance to pyrethroids (the active ingredient in most retail sprays), and their flat bodies allow them to hide in crevices thinner than a credit card. Professional heat treatment or targeted chemical protocols are the reliable path to elimination.",
  signs: [
    "Small, itchy bite marks appearing in clusters or lines on skin exposed during sleep — face, neck, arms, and shoulders",
    "Tiny dark brown or black faecal spots (digested blood) on mattress seams, sheets, and pillowcase edges",
    "Translucent shed skins accumulating along mattress piping, behind headboards, and in nightstand joints",
    "A sweet, musty odour in the bedroom — produced by bed bug scent glands — that intensifies as the population grows",
    "Live bugs visible in mattress tufts, box spring staple points, or behind electrical outlet covers near the bed",
  ],
  healthRisks: [
    "Bite reactions range from small red welts to large blistering lesions; about 30% of people show no skin reaction at all, delaying detection",
    "Chronic infestations cause documented sleep deprivation, anxiety, and psychological distress — clinically similar to PTSD symptoms in severe cases",
    "Secondary skin infections occur when scratching bites introduces bacteria like Staphylococcus into open wounds",
    "Though bed bugs carry over 40 human pathogens in their bodies, no confirmed disease transmission through bites has been documented — their primary impact is allergic and psychological",
  ],
  preventionTips: [
    "Inspect hotel mattress seams and headboards before unpacking — check with a flashlight along piping and tufting",
    "Store luggage on hard surfaces or luggage racks, never on the bed or carpeted floor, when travelling",
    "Encase mattresses and box springs in bed-bug-proof encasements — this eliminates their primary harbourage and makes inspection easier",
    "After travelling, run all clothing through a hot dryer cycle (60°C minimum for 30 minutes) before putting items away",
    "Avoid acquiring used furniture, especially mattresses and upholstered items, without thorough professional inspection",
    "Install interceptor traps under bed legs — these capture bed bugs climbing up or down and serve as an early-warning monitoring system",
  ],
  treatmentSteps: [
    {
      step: "Comprehensive Inspection",
      description:
        "Every crack, seam, and crevice within 2.5 metres of sleeping areas is examined. Technicians check mattresses, box springs, headboards, nightstands, baseboards, and electrical outlets. Interceptor traps may be placed to confirm activity levels before treatment begins.",
    },
    {
      step: "Preparation Protocol",
      description:
        "You'll receive a detailed prep sheet. Key steps: launder all bedding and clothing on high heat, declutter around the bed, and pull furniture away from walls. Proper preparation is the single biggest factor in treatment success.",
    },
    {
      step: "Heat or Chemical Treatment",
      description:
        "Heat treatment raises room temperature to 50–60°C for several hours, killing all life stages including eggs. Chemical treatment uses a combination of residual sprays, dust, and IGRs applied to cracks, seams, and voids. Heat provides same-day results; chemical treatment requires 2–3 visits over 4–6 weeks.",
    },
    {
      step: "Mattress & Furniture Treatment",
      description:
        "Mattresses and box springs receive targeted application along seams and tufting, then are encased in certified bed-bug-proof covers. Encasements trap any surviving bugs inside and prevent re-infestation of the mattress.",
    },
    {
      step: "Follow-Up Verification",
      description:
        "Interceptor traps and visual inspections at 2 and 4 weeks confirm elimination. Bed bugs are declared eliminated only after zero activity across two consecutive monitoring periods.",
    },
  ],
  faqs: [
    {
      question: "Can I get rid of bed bugs on my own?",
      answer:
        "It's extremely difficult. Bed bugs hide in crevices thinner than a credit card, and most populations are resistant to over-the-counter pyrethroids. Studies show that DIY treatments have a success rate below 10% for established infestations. Professional heat treatment or multi-visit chemical protocols using synergized products are required for reliable elimination.",
    },
    {
      question: "Do bed bugs only live in dirty homes?",
      answer:
        "No. Bed bugs are transported by people, not attracted by filth. They've been found in luxury hotels, hospitals, movie theatres, and corporate offices. They need only a sleeping human host and a crevice to hide in. Cleanliness doesn't prevent them — vigilant inspection does.",
    },
    {
      question: "How do bed bugs get into my home?",
      answer:
        "The most common vectors are travel luggage, used furniture, shared laundry facilities, and visiting guests. In multi-unit buildings, they migrate through wall voids, electrical conduit, and plumbing chases. A single fertilized female can start a full infestation — she carries enough sperm to produce eggs for months without re-mating.",
    },
    {
      question: "Can bed bugs transmit diseases?",
      answer:
        "Bed bugs carry over 40 human pathogens internally, but no confirmed case of disease transmission through bites has been documented in medical literature. The real health impacts are allergic bite reactions, secondary skin infections from scratching, sleep deprivation, and significant psychological distress.",
    },
    {
      question: "How long does bed bug treatment take?",
      answer:
        "Heat treatment takes one day for the active treatment but requires preparation the night before. Chemical treatment involves 2–3 visits spaced 2 weeks apart — this ensures each generation of hatching eggs is eliminated. From start to confirmed elimination, expect 4–6 weeks for chemical protocols.",
    },
  ],
  seasonalStatus: "Year-Round (peak Summer)",
  prepSheetSlug: "bedbugs",
  searchTerms: ["bed bug", "bed bugs", "bedbug", "bedbugs", "bed bug bites", "bed bug infestation"],
  relatedPestSlugs: ["fleas", "cockroaches", "spiders"],
  cityPageSlugs: [
    "toronto", "mississauga", "brampton", "hamilton", "london",
    "kitchener", "oakville", "markham", "niagara", "north-york",
    "scarborough", "richmond-hill", "waterloo", "st-catharines", "edmonton",
    "vaughan", "etobicoke",
  ],
  image: {
    src: "/images/pests/pest-bed-bugs.webp",
    alt: "Adult bed bug on white fabric showing its flat oval body and reddish-brown coloring after feeding",
  },
};
