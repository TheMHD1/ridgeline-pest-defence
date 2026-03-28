import type { PestData } from "@/content/types";

export const fleasPest: PestData = {
  slug: "fleas",
  name: "Fleas",
  category: "crawlers",
  subspecies: [
    {
      name: "Cat Flea",
      description:
        "Ctenocephalides felis — despite the name, this is the dominant flea species on dogs, cats, and humans in North America. Adults are 1.5–3 mm, laterally flattened, and capable of jumping 150 times their own body length. A single female lays up to 50 eggs per day, and the eggs roll off the host into carpets, furniture, and bedding.",
    },
    {
      name: "Dog Flea",
      description:
        "Ctenocephalides canis — nearly identical to the cat flea but less common in North America. Distinguished by a slightly rounder head shape visible only under magnification. Shares the same lifecycle and behaviour, with a strong preference for canine hosts but will readily bite humans.",
    },
    {
      name: "Human Flea",
      description:
        "Pulex irritans — historically the primary flea species on humans and the vector for bubonic plague. Now rare in Canadian homes thanks to modern hygiene, but still found in rural areas and on wild mammals. Lacks the specialized head combs (ctenidia) that cat and dog fleas use to grip host hair.",
    },
  ],
  shortDescription:
    "Fleas multiply explosively in homes with pets, producing thousands of eggs that embed in carpets and furniture. Their bites cause intense itching, allergic reactions, and can transmit tapeworm and bacterial infections.",
  fullDescription:
    "The flea you see on your pet represents about 5% of the total infestation. The other 95% — eggs, larvae, and pupae — are hidden in your carpets, furniture crevices, and pet bedding. A single female cat flea lays 40–50 eggs per day, and those eggs hatch into larvae that burrow deep into carpet fibres where vacuums and topical pet treatments can't reach them.\n\nFlea pupae are the real obstacle to elimination. Encased in a silk cocoon coated with carpet debris, they're virtually impervious to insecticides and can remain dormant for up to 12 months waiting for vibration, warmth, or CO2 that signals a host is nearby. This is why empty homes and vacation properties often produce explosive flea outbreaks when someone finally walks in — thousands of dormant pupae hatch simultaneously.\n\nEffective treatment requires hitting every life stage. Pet treatment alone won't stop the 95% developing in your environment. Environmental treatment alone won't stop the 5% living on your pet. You need both, timed correctly, with follow-up to catch the pupae that no product can penetrate on the first pass.",
  signs: [
    "Pets scratching, biting, or grooming excessively — especially around the tail base, belly, and inner thighs",
    "Small dark specks (flea dirt) in pet fur that turn reddish-brown when placed on a damp paper towel — this is digested blood",
    "Itchy bite marks on human ankles and lower legs, typically in clusters of 2–3 bites in a line or triangle",
    "Tiny white oval eggs (0.5 mm) visible on pet bedding, furniture seams, and carpet near baseboards",
    "Fleas jumping when you walk across carpeted rooms — visible as tiny dark specks launching 15–20 cm vertically",
  ],
  healthRisks: [
    "Flea allergy dermatitis (FAD) is the most common skin disease in dogs and cats — a single bite triggers intense itching and hair loss in sensitized animals",
    "Fleas transmit Dipylidium caninum (tapeworm) when pets or children accidentally ingest an infected flea during grooming or play",
    "Cat fleas carry Bartonella henselae, the bacterium that causes cat-scratch fever — transmitted to humans when cats scratch with flea-contaminated claws",
    "Heavy infestations on young, elderly, or small pets can cause anaemia from cumulative blood loss — a single flea consumes up to 15 times its body weight in blood daily",
  ],
  preventionTips: [
    "Maintain year-round veterinary flea prevention on all pets — even indoor cats, since fleas hitchhike on clothing and shoes",
    "Vacuum carpets, rugs, and upholstered furniture at least twice weekly; vibration from vacuuming triggers pupae to hatch, making them vulnerable to treatment",
    "Wash pet bedding in hot water (60°C minimum) weekly to kill eggs, larvae, and adults",
    "Mow your lawn regularly and remove leaf litter — flea larvae develop in shaded, humid outdoor areas where pets rest",
    "Treat outdoor resting areas where pets spend time, particularly shaded zones under decks and porches",
    "If you acquire a used rug, couch, or pet bed, inspect and vacuum thoroughly before bringing it into your home",
  ],
  treatmentSteps: [
    {
      step: "Pet Treatment Coordination",
      description:
        "All pets in the home must receive veterinary-grade flea treatment before or on the same day as the environmental treatment. Topical or oral products kill adult fleas on the host and prevent re-infestation from the environment. Without this step, pets continuously reseed your home with eggs.",
    },
    {
      step: "Thorough Pre-Treatment Vacuuming",
      description:
        "You vacuum all carpets, rugs, upholstered furniture, and under cushions before the technician arrives. This serves two purposes: it physically removes a portion of eggs and larvae, and the vibration triggers dormant pupae to hatch into adults that are vulnerable to insecticide.",
    },
    {
      step: "IGR + Adulticide Application",
      description:
        "The technician applies a combination of insect growth regulator (IGR) and residual adulticide to all carpeted areas, along baseboards, under furniture, and in pet resting zones. The IGR prevents eggs and larvae from developing; the adulticide kills hatching adults on contact.",
    },
    {
      step: "Targeted Crack & Crevice Treatment",
      description:
        "Insecticidal dust is applied into cracks in hardwood floors, along carpet edges, and inside upholstered furniture seams where larvae congregate. Flea larvae are photophobic — they burrow to the base of carpet fibres where surface sprays often don't reach.",
    },
    {
      step: "Follow-Up Treatment",
      description:
        "A second visit 10–14 days later targets the pupae that were insecticide-proof during the first treatment. By now they've hatched into vulnerable adults. Continued vacuuming between visits accelerates this process by triggering more pupae to emerge.",
    },
  ],
  faqs: [
    {
      question: "My pet is on flea prevention — why do I still have fleas?",
      answer:
        "Most pet flea products kill adult fleas after they bite, but eggs that were already laid in your carpet before treatment continue to develop. A single female lays up to 50 eggs per day, and pupae can remain dormant for months. Your pet's prevention stops the cycle on the animal, but the environmental reservoir takes 2–3 months to exhaust without professional treatment.",
    },
    {
      question: "Why did fleas appear after we came back from vacation?",
      answer:
        "Flea pupae can lie dormant in carpet for up to 12 months, encased in an insecticide-resistant cocoon. They hatch in response to vibration, warmth, and CO2 — all signals that a host has returned. When you walked back into the house, you triggered a mass emergence event. This is one of the most common flea infestation scenarios.",
    },
    {
      question: "Can fleas live in a home without pets?",
      answer:
        "Yes. Fleas can feed on humans, and pupae can survive for months in empty homes. Properties with previous pet owners, wildlife access (raccoons under decks, rodents in walls), or neighbouring outdoor cats can develop flea populations without any resident pets. The cat flea isn't picky — it will bite any warm-blooded host.",
    },
    {
      question: "How long does it take to get rid of fleas completely?",
      answer:
        "With professional treatment plus pet prevention, active populations drop dramatically within 1–2 weeks. However, the full lifecycle takes 2–3 months to exhaust because dormant pupae continue hatching in waves. Consistent vacuuming, pet treatment, and the follow-up application are all necessary to break the cycle completely.",
    },
    {
      question: "Do fleas carry diseases?",
      answer:
        "Yes. Cat fleas transmit tapeworm (Dipylidium caninum) and Bartonella henselae — the bacterium behind cat-scratch fever. Historically, the human flea (Pulex irritans) carried bubonic plague, though this is not a current risk in Canada. For pets, heavy infestations cause flea allergy dermatitis and, in young animals, potentially dangerous anaemia.",
    },
  ],
  seasonalStatus: "Peak Season: Summer–Fall",
  searchTerms: ["flea", "fleas", "flea infestation", "flea bites", "cat flea", "dog flea", "flea treatment"],
  relatedPestSlugs: ["bed-bugs", "ants", "spiders"],
  cityPageSlugs: [],
  image: {
    src: "/images/pests/pest-fleas.webp",
    alt: "Magnified cat flea showing its laterally compressed body and powerful jumping legs adapted for navigating animal fur",
  },
};
