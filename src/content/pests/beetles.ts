import type { PestData } from "@/content/types";

export const beetlesPest: PestData = {
  slug: "beetles",
  name: "Beetles",
  category: "flyers",
  subspecies: [
    {
      name: "Carpet Beetle",
      description:
        "Anthrenus and Attagenus species larvae feed on wool, silk, fur, feathers, and dried animal products. A single carpet beetle larva can survive up to 3 years before pupating, silently destroying fabrics the entire time.",
    },
    {
      name: "Powderpost Beetle",
      description:
        "Lyctus and Anobiid species bore into hardwood and softwood, reducing structural timber and furniture to fine, talc-like powder. Infestations are often discovered only when small round exit holes and sawdust piles appear on surfaces.",
    },
    {
      name: "Drugstore Beetle",
      description:
        "Stegobium paniceum earned its name by infesting pharmacies, but it attacks nearly any dried organic material — spices, flour, leather, wool, and even books. Larvae bore directly into products, making them nearly invisible until populations explode.",
    },
    {
      name: "Larder Beetle",
      description:
        "Dermestes lardarius larvae feed on cured meats, cheese, pet food, and animal hides. They also bore into structural wood, insulation, and even lead-sheathed cables when seeking a pupation site, causing damage unrelated to feeding.",
    },
  ],
  shortDescription:
    "Beetles are the most diverse insect order on earth, and several species target your home's food, fabric, and structural wood. Larvae cause the damage — adults are just the symptom.",
  fullDescription:
    "One in every four animal species on the planet is a beetle. That staggering diversity means multiple beetle species have evolved to exploit every organic material inside your home, from hardwood flooring to dried pasta to cashmere scarves. By the time you spot adult beetles, larvae have likely been feeding for months.\n\nPowderpost beetles are particularly insidious because their larvae develop inside wood for one to five years before emerging as adults. The fine powder they produce is actually digested wood being expelled through pin-sized exit holes — structural damage accumulates invisibly until surfaces collapse or crumble. Carpet beetles, meanwhile, cost the textile industry hundreds of millions annually in damaged goods.\n\nRidgeline Pest Defence identifies the exact beetle species because treatment varies dramatically. Carpet beetles require residual fabric treatments and source elimination, while powderpost beetles may need localized heat treatment or borate-based wood preservatives. Your technician traces the infestation to its origin and builds a plan around the species' biology, not a generic spray schedule.",
  signs: [
    "Small round exit holes (1–3mm) in wooden furniture, flooring, or structural timbers",
    "Fine powdery sawdust (frass) collecting beneath wooden items or along baseboards",
    "Irregular damage to wool carpets, clothing, or upholstered furniture, often along edges and folds",
    "Small, oval adult beetles found on windowsills or near light sources during spring",
    "Shed larval skins (cast exoskeletons) in drawers, closets, or pantry shelving",
  ],
  healthRisks: [
    "Allergic dermatitis caused by contact with carpet beetle larval hairs (setae), often mistaken for bed bug bites",
    "Contamination of stored food products by drugstore and larder beetle larvae and frass",
    "Structural weakening of load-bearing timbers by powderpost beetle activity over multiple years",
    "Respiratory irritation from airborne frass particles and larval hair fragments in infested rooms",
  ],
  preventionTips: [
    "Vacuum carpets, rugs, and upholstered furniture edges weekly — carpet beetle larvae thrive on accumulated lint and pet hair",
    "Store dried foods in airtight glass or metal containers and inspect bulk purchases before shelving",
    "Have new or antique hardwood furniture inspected for exit holes before bringing it indoors",
    "Dry-clean or heat-treat wool and silk garments before long-term storage to kill eggs and larvae",
    "Seal gaps around windows and door frames in spring when adult beetles fly toward homes seeking egg-laying sites",
    "Remove dead insects from light fixtures and windowsills — they are a primary protein source for carpet and larder beetle larvae",
  ],
  treatmentSteps: [
    {
      step: "Species Identification & Damage Assessment",
      description:
        "Your technician collects specimens and inspects damage patterns to identify the exact beetle species. Carpet beetle damage on textiles, powderpost beetle exit holes in wood, and drugstore beetle bore-holes in food packaging each point to a different treatment protocol.",
    },
    {
      step: "Source Elimination",
      description:
        "Infested materials are removed or isolated. For fabric pests, severely damaged items are discarded and salvageable items are treated with heat or dry cleaning. For wood-boring species, the extent of structural damage is assessed and documented.",
    },
    {
      step: "Targeted Treatment Application",
      description:
        "Residual insecticides are applied to cracks, crevices, and harborage zones specific to the identified species. Powderpost beetle infestations may require borate wood treatments or localized heat application to penetrate below the wood surface.",
    },
    {
      step: "Monitoring & Follow-Up",
      description:
        "Sticky traps and pheromone monitors are placed in key areas to track adult beetle emergence over the following months. Because beetle lifecycles can span years, monitoring continues longer than for most pest treatments.",
    },
    {
      step: "Long-Term Prevention Plan",
      description:
        "You receive a customized schedule for inspections, vacuuming protocols, and storage practices based on the species identified. For wood-boring beetles, your technician recommends moisture management steps, since larvae develop faster in wood with elevated moisture content.",
    },
  ],
  faqs: [
    {
      question: "Are carpet beetle bites real?",
      answer:
        "Carpet beetles do not bite. The itchy, red welts often blamed on carpet beetles are actually an allergic reaction to tiny barbed hairs (setae) on the larvae. These hairs break off and embed in skin on contact, producing a rash that closely mimics insect bites and often leads to misdiagnosis.",
    },
    {
      question: "How do I know if powderpost beetles are still active in my wood?",
      answer:
        "Fresh exit holes contain light-colored, fine powder and have clean, sharp edges. Old, inactive holes appear darkened and may be sealed with dust or finish. Your technician can mark existing holes and monitor for new emergence over several months to confirm whether the infestation is active or historic.",
    },
    {
      question: "Can beetles damage hardwood floors?",
      answer:
        "Yes. Powderpost beetles specifically target hardwoods with high starch content, including oak, ash, and hickory. Lyctid beetles lay eggs in the pores of unfinished wood, and larvae tunnel through the interior for one to five years before emerging. Finished and sealed wood surfaces are largely protected because females cannot access pores to deposit eggs.",
    },
    {
      question: "Why do I keep finding small beetles on my windowsills in spring?",
      answer:
        "Carpet beetles and drugstore beetles are attracted to light and often congregate on windowsills as they attempt to leave the structure in spring. Their presence on windows means larvae have been developing somewhere inside your home — typically in closets, pantries, or HVAC ductwork — through the winter months.",
    },
    {
      question: "How long does beetle treatment take to work?",
      answer:
        "Surface-feeding beetles like carpet beetles show results within 2 to 4 weeks. Wood-boring species require longer monitoring because larvae deep inside wood are not immediately affected by surface treatments. Borate-based wood treatments work as larvae feed through treated zones, so full elimination may take 3 to 12 months depending on infestation depth.",
    },
  ],
  seasonalStatus: "Year-Round (peak Spring–Summer)",
  searchTerms: ["beetle", "beetles", "carpet beetle", "powder post beetle", "japanese beetle", "beetle infestation"],
  relatedPestSlugs: ["moths", "flies", "boxelder-bugs"],
  cityPageSlugs: [],
  image: {
    src: "/images/pests/pest-beetles.webp",
    alt: "Varied carpet beetle on white fabric showing its distinctive mottled brown orange and white scale pattern",
  },
};
