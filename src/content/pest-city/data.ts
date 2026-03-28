import { getLocationBySlug } from "@/content/locations/data";
import { siteConfig } from "@/content/site.config";
import { rotateBrandPhrases } from "@/lib/brand-phrases";
import type {
  PestCityPageData,
  PestCityServiceItem,
  PestCityTreatmentStep,
  PestCityTestimonial,
  PestCityFAQ,
} from "./types";

/* ── City slug mapping (URL slug → location data slug) ───────── */
const citySlugMap: Record<string, string> = {
  toronto: "toronto",
  mississauga: "mississauga",
  brampton: "brampton",
  hamilton: "hamilton",
  london: "london",
  kitchener: "kitchener",
  oakville: "oakville",
  markham: "markham",
  niagara: "niagara-falls",
  "north-york": "north-york",
  scarborough: "scarborough",
  "richmond-hill": "richmond-hill",
  waterloo: "waterloo",
  "st-catharines": "st-catharines",
  edmonton: "edmonton",
  vaughan: "vaughan",
  etobicoke: "etobicoke",
  burlington: "burlington",
  welland: "welland",
  thorold: "thorold",
  grimsby: "grimsby",
  "fort-erie": "fort-erie",
  cambridge: "cambridge",
  guelph: "guelph",
  barrie: "barrie",
  oshawa: "oshawa",
  whitby: "whitby",
  ajax: "ajax",
  pickering: "pickering",
  milton: "milton",
  georgetown: "georgetown",
  "halton-hills": "halton-hills",
};

/* ── City lists per pest type ────────────────────────────────── */
const standard15: readonly string[] = [
  "toronto", "mississauga", "brampton", "hamilton", "london",
  "kitchener", "oakville", "markham", "niagara", "north-york",
  "scarborough", "richmond-hill", "waterloo", "st-catharines", "edmonton",
] as const;

const extended17: readonly string[] = [
  ...standard15, "vaughan", "etobicoke",
] as const;

const comprehensive32: readonly string[] = [
  "toronto", "mississauga", "brampton", "hamilton", "london",
  "kitchener", "oakville", "markham", "niagara", "north-york",
  "scarborough", "richmond-hill", "waterloo", "st-catharines", "edmonton",
  "vaughan", "etobicoke", "burlington", "welland", "thorold",
  "grimsby", "fort-erie", "cambridge", "guelph", "barrie",
  "oshawa", "whitby", "ajax", "pickering", "milton",
  "georgetown", "halton-hills",
] as const;

const hornet4: readonly string[] = [
  "toronto", "hamilton", "london", "niagara",
] as const;

const commercialWasp1: readonly string[] = ["toronto"] as const;

/* ── Pest type configuration ─────────────────────────────────── */

interface PestTypeConfig {
  readonly displayName: string;
  readonly pestLabel: string;
  readonly pestLower: string;
  readonly isCommercial: boolean;
  readonly pestPageSlug: string;
  readonly cities: readonly string[];
  readonly services: readonly PestCityServiceItem[];
  readonly treatmentSteps: readonly PestCityTreatmentStep[];
  readonly surprisingFact: string;
  readonly introTemplate: string;
  readonly serviceIntro: string;
  readonly testimonialPool: readonly { name: string; textTemplate: string }[];
  readonly faqPool: readonly { questionTemplate: string; answerTemplate: string }[];
  readonly cityModifiers: readonly CityModifierGroup[];
  readonly metaDescTemplates: readonly string[];
  readonly localChallengesClosings: readonly string[];
}

interface CityModifierGroup {
  readonly serviceOverrides: Partial<Record<number, string>>;
  readonly stepOverrides: Partial<Record<number, string>>;
}

const pestConfigs: Record<string, PestTypeConfig> = {
  "ant-control": {
    displayName: "Ant Control",
    pestLabel: "Ants",
    pestLower: "ants",
    isCommercial: false,
    pestPageSlug: "ants",
    cities: comprehensive32,
    services: [
      { name: "Species Identification", description: "Correct ID determines the treatment. Carpenter ants, pavement ants, and Pharaoh ants each require different strategies — the wrong approach can make infestations worse." },
      { name: "Targeted Gel & Granular Baiting", description: "Slow-acting baits placed along active trails. Workers carry the toxicant back to the colony through trophallaxis (mouth-to-mouth feeding), reaching the queen within days." },
      { name: "Perimeter Barrier Treatment", description: "Residual insecticide applied around the foundation and key entry points creates a chemical barrier that eliminates foraging ants and deters new colonies." },
      { name: "Carpenter Ant Nest Injection", description: "When satellite nests are located inside walls, targeted dust or foam injection delivers insecticide directly into galleries without tearing open drywall." },
      { name: "Follow-Up Monitoring", description: "Return visits 2–4 weeks later confirm colony collapse. Bait stations are checked and refreshed. For carpenter ants, annual inspections are recommended for 2 years." },
    ],
    treatmentSteps: [
      { step: "Inspect & Identify", description: "A technician maps every entry point, trail pattern, and nesting site. Species identification is critical — Pharaoh ants scatter and multiply if treated incorrectly." },
      { step: "Targeted Baiting", description: "Species-specific gel or granular baits are placed along confirmed travel routes. The colony's food-sharing behavior carries the bait to the queen." },
      { step: "Barrier Application", description: "A residual perimeter treatment around the foundation and entry points cuts off reinfestation routes." },
      { step: "Seal Entry Points", description: "Cracks around pipes, windows, and foundations are sealed with caulk, mesh, or weatherstripping." },
      { step: "Monitor & Guarantee", description: "Routine follow-up confirms elimination. Covered by our 12-month Zero-Comeback Guarantee." },
    ],
    surprisingFact: "A single queen can live 25 years and produce millions of offspring. The trail you see on your counter represents less than 10% of the colony.",
    introTemplate: "{city}'s mix of established homes and mature landscaping makes it prime territory for ant colonies. Carpenter ants target moisture-damaged wood in older properties near {nbr1} and {nbr2}, while pavement ants push sand mounds through driveway cracks across {nbr3}.",
    serviceIntro: "Ridgeline Pest Defence uses species-specific baiting that targets the queen through the colony's own food-sharing system — not generic sprays that scatter colonies and make the problem worse.",
    testimonialPool: [
      { name: "Sarah M.", textTemplate: "Ant trails across our kitchen counter every spring. Ridgeline identified them as odorous house ants and placed targeted baits. Within two weeks, not a single ant. They followed up to confirm." },
      { name: "David K.", textTemplate: "Carpenter ants were hollowing out our deck framing. Ridgeline traced the colony to a dead stump in the yard, eliminated it at the source, and treated the deck. Saved us thousands in replacement costs." },
      { name: "Priya R.", textTemplate: "We'd been spraying ants for years and they kept coming back stronger. Ridgeline explained that our DIY sprays were causing colony budding. Their professional baiting solved it in one treatment cycle." },
      { name: "James W.", textTemplate: "Found sawdust piles along our baseboards and panicked. Ridgeline confirmed carpenter ants and injected treatment directly into the wall galleries. No drywall damage, no mess, no ants." },
      { name: "Angela T.", textTemplate: "Pavement ants taking over our patio every summer. Ridgeline treated the colony under the paving stones and applied a perimeter barrier. First ant-free barbecue season in years." },
      { name: "Raj P.", textTemplate: "Our new build had Pharaoh ants in the kitchen — tiny things everywhere. Ridgeline warned us not to spray and used gel baits instead. Colony gone within three weeks." },
      { name: "Fatima A.", textTemplate: "Carpenter ants were getting into our sunroom through a rotting window frame. Ridgeline identified the entry point in under 20 minutes and treated the wall cavity without opening the drywall. Fixed in one visit." },
      { name: "Cormac J.", textTemplate: "We had pavement ants every spring for four years. Previous treatments just moved the colony. Ridgeline used slow-acting gel bait along the trails. Colony gone in 10 days — confirmed on follow-up." },
      { name: "Meera S.", textTemplate: "Tiny ants in our new condo's kitchen. Ridgeline confirmed they were Pharaoh ants and warned me not to use spray — apparently it makes them split into multiple colonies. Gel bait worked perfectly." },
      { name: "Oluwaseun D.", textTemplate: "Ants were trailing from the garage into the pantry through a crack in the foundation. Ridgeline sealed the crack and baited the colony outside. No ants since, and they checked back two weeks later." },
      { name: "Tariq G.", textTemplate: "Carpenter ant frass kept appearing under the bathroom vanity. Ridgeline traced the colony to a moisture-damaged joist and treated it with foam injection. The guarantee covered a follow-up inspection three months later." },
      { name: "Amara L.", textTemplate: "We found winged ants swarming near the patio door in May. Ridgeline identified them as carpenter ant reproductives and located the parent colony in a landscape timber. Removed the timber, treated the area, done." },
      { name: "Harpreet P.", textTemplate: "Ant trails across the entire kitchen floor — hundreds of them overnight. Ridgeline placed gel bait stations along the trail and the activity dropped to zero within a week. Quick, clean, effective." },
      { name: "Luca R.", textTemplate: "Our townhouse shared a wall with a unit that had a serious ant problem. Ridgeline coordinated treatment for both units at the same time. The property manager said it was the only approach that actually worked." },
      { name: "Owen T.", textTemplate: "Pavement ants kept pushing sand mounds through the basement floor cracks every spring. Ridgeline treated the cracks and applied a perimeter barrier outside. First spring without ant hills in the basement." },
    ],
    faqPool: [
      { questionTemplate: "Why do ants keep coming back in {city} after I spray them?", answerTemplate: "Retail sprays kill visible foragers but never reach the queen. She replaces lost workers within days. Worse, some species like Pharaoh ants respond to repellent sprays by splitting into multiple new colonies. Professional baiting targets the queen through the colony's food-sharing system." },
      { questionTemplate: "How do I tell carpenter ants from regular ants in my {city} home?", answerTemplate: "Carpenter ants are noticeably larger (6–13 mm vs. 2–4 mm). Look for coarse sawdust piles near baseboards or listen for faint rustling in walls at night. If you spot large black ants indoors during winter, you likely have an established indoor colony." },
      { questionTemplate: "Can ants cause structural damage to {city} homes?", answerTemplate: "Carpenter ants absolutely can. They excavate wood to create nesting galleries, preferring softened or moisture-damaged lumber. A colony active for 3–5 years can hollow out support beams, floor joists, and window frames." },
      { questionTemplate: "When is ant season in {city}?", answerTemplate: "Outdoor ant activity peaks April through October. However, indoor colonies — especially Pharaoh ants and carpenter ants with satellite nests in heated walls — remain active year-round. Seeing ants inside during winter is a strong indicator of an established indoor nest." },
      { questionTemplate: "How quickly can Ridgeline respond to ant problems in {city}?", answerTemplate: "Most {city} appointments are available within {responseTime}. For active carpenter ant infestations causing structural damage, we prioritize faster scheduling." },
    ],
    cityModifiers: [
      // Group 0 — older urban cores (toronto, london, niagara, waterloo, etobicoke)
      {
        serviceOverrides: {
          0: "Dense rowhouse blocks and older semi-detached homes create connected ant highways between properties. We identify the species first — Pharaoh ants, carpenter ants, and odorous house ants each require different baiting chemistry.",
          2: "Older foundation walls have more crack points than post-2000 builds. We treat the full perimeter plus window wells, utility penetrations, and garage door frames — 37 common entry points on a typical pre-1970 home.",
        },
        stepOverrides: {
          0: "We map all trails, entry points, and satellite nests across the property. In connected rowhouses, colonies frequently span multiple units — we check shared walls and basements.",
          3: "Mortar joints, aging caulk, and utility penetrations in older housing stock are sealed with silicone and copper mesh that ants cannot gnaw through.",
        },
      },
      // Group 1 — suburban mix (mississauga, kitchener, north-york, st-catharines)
      {
        serviceOverrides: {
          1: "Suburban properties with mature landscaping and mulch beds create ideal foraging conditions within meters of the foundation. We place non-repellent baits that workers carry back through the colony's food-sharing chain.",
          3: "Satellite nests in insulated wall cavities are common in heated suburban homes. Targeted dust or foam injection delivers insecticide directly into galleries without cutting drywall — most treatments take under 90 minutes.",
        },
        stepOverrides: {
          1: "Non-repellent gel and granular baits are placed along confirmed travel routes and near mulch beds that serve as ant staging areas. The colony's trophallaxis behavior carries active ingredient to the queen within 5–7 days.",
          4: "Monitoring stations are checked on a 2–4 week rotation. In suburban properties with large lots, we extend the monitoring perimeter to garden beds and retaining walls where satellite colonies establish.",
        },
      },
      // Group 2 — newer suburbs + Alberta (brampton, oakville, scarborough, edmonton)
      {
        serviceOverrides: {
          0: "Post-2000 subdivisions with slab foundations and weeping tile systems offer ants moisture and warmth year-round. We identify species before treatment — pavement ants exploit expansion joints while carpenter ants target OSB sheathing exposed to moisture.",
          4: "Return visits 2–4 weeks later confirm colony collapse. In newer communities where construction activity disturbs soil, we extend monitoring to adjacent lots and common green spaces.",
        },
        stepOverrides: {
          0: "We inspect slab edges, expansion joints, and utility penetrations that are common entry points in newer construction. Pavement ants push sand mounds through control joints that builders rarely seal.",
          3: "Expansion joints, pipe collars, and utility boxes in newer builds are sealed with professional-grade sealant and copper mesh. One unsealed pipe collar can admit 10,000 foraging ants per day.",
        },
      },
      // Group 3 — mixed development (hamilton, markham, richmond-hill, vaughan)
      {
        serviceOverrides: {
          2: "Properties in mixed residential-commercial areas face ant pressure from both landscaped yards and nearby food-service operations. We treat the full perimeter and coordinate with property managers when colonies cross lot lines.",
          3: "Wall-void injection is critical in multi-story homes where carpenter ants nest between floors. We use thermal imaging to pinpoint galleries without exploratory cuts — 85% of nests are found on the first scan.",
        },
        stepOverrides: {
          2: "A residual barrier is applied around the foundation, along window frames, and at utility entry points. In areas where older and newer construction meet, we seal the transition zones that ants exploit.",
          3: "Foundation seams, weep holes, and utility penetrations are sealed with silicone and copper mesh. Properties near commercial zones require additional attention to waste staging areas and loading docks.",
        },
      },
    ],
    metaDescTemplates: [
      "Ant control in {city} — PMRA-licensed technicians, species-specific baiting, and a 12-month Zero-Comeback Guarantee. Serving {nbr1}, {nbr2} & surrounding areas.",
      "Ridgeline Pest Defence provides targeted ant control in {city}. We identify the species before we treat — carpenter ants, pavement ants, and Pharaoh ants each need a different approach.",
      "Stop ant trails for good in {city}. Our 47-point inspection finds the colony source. Eco-friendly baiting targets the queen. Guaranteed 12 months.",
      "Professional ant control in {city} serving {nbr1} and {nbr2}. Ridgeline's species-specific baiting reaches the queen through the colony's own food-sharing system.",
    ],
    localChallengesClosings: [
      "Ridgeline Pest Defence brings targeted ant treatment to {city} — starting with our 47-point inspection and backed by a 12-month Zero-Comeback Guarantee.",
      "Our {city} technicians use species-specific baiting that reaches the queen. 47-point inspection included. 12-month guarantee on every treatment.",
      "Ridgeline has treated {city} ant problems since 2015. Same-day inspections available. Results guaranteed for 12 months.",
    ],
  },

  "rodent-control": {
    displayName: "Rodent Control",
    pestLabel: "Rodents",
    pestLower: "rodents",
    isCommercial: false,
    pestPageSlug: "mice",
    cities: comprehensive32,
    services: [
      { name: "Full-Property Inspection", description: "We trace droppings, gnaw marks, and grease trails to map every active runway and entry point — inside and outside your property." },
      { name: "Tamper-Resistant Bait Stations", description: "Locked bait stations placed along confirmed travel routes. Safe around children and pets, effective against mice and rats." },
      { name: "Interior Snap Trapping", description: "Snap traps along active runways provide quick, humane kills. Traps are checked and serviced on a scheduled rotation." },
      { name: "Entry Point Exclusion", description: "Every gap, crack, and utility penetration is sealed with steel mesh, caulk, or metal flashing. A mouse can fit through a hole the size of a dime." },
      { name: "Follow-Up Monitoring", description: "Stations are checked on rotation. Entry points are sealed progressively as activity drops — backed by our 12-month Zero-Comeback Guarantee." },
    ],
    treatmentSteps: [
      { step: "Detailed Inspection", description: "We map droppings, gnaw marks, grease trails, and every active runway to determine the species, population size, and entry points." },
      { step: "Bait & Trap Placement", description: "Tamper-resistant bait stations and snap traps are placed along confirmed travel routes. Interior trapping prioritises quick, humane kills." },
      { step: "Exclusion Work", description: "Gaps around pipes, vents, foundations, and garage doors are sealed with galvanized steel mesh and metal flashing." },
      { step: "Sanitation Guidance", description: "We identify food sources and harborage areas that attract rodents and recommend changes that reduce attractants." },
      { step: "Monitor & Guarantee", description: "Scheduled station checks confirm declining activity. Covered by our 12-month Zero-Comeback Guarantee." },
    ],
    surprisingFact: "A single pair of mice can produce 60 offspring in three months. One mouse can squeeze through a gap the width of a pencil.",
    introTemplate: "{city}'s housing stock — from older homes near {nbr1} to newer builds in {nbr2} — creates entry points that rodents exploit every fall. Mice and rats travel along pipes, utility lines, and foundation cracks, establishing nests in wall cavities and attic insulation near {nbr3}.",
    serviceIntro: "Ridgeline Pest Defence combines active trapping with permanent exclusion work. We don't just remove the rodents you have — we seal the gaps so new ones can't get in.",
    testimonialPool: [
      { name: "Mike T.", textTemplate: "Mice in the walls every October. Ridgeline found gaps around old plumbing penetrations we never noticed. Two winters in a row now — completely mouse-free." },
      { name: "Helen Y.", textTemplate: "Rat droppings in the garage. Ridgeline traced the entry to a gap behind the water heater vent. Sealed it with steel mesh and set monitoring traps. Problem solved in a week." },
      { name: "Linda C.", textTemplate: "We could hear scratching in the ceiling at night. Ridgeline confirmed mice in the attic, sealed every soffit gap, and cleaned up the droppings. Haven't heard a sound since." },
      { name: "Steve K.", textTemplate: "Found gnaw marks on wiring in the basement. Ridgeline treated the infestation and warned us about the fire risk from chewed wires. They sealed 14 entry points we had no idea existed." },
      { name: "Karen L.", textTemplate: "New house, mice within the first month. The builder left gaps around utility penetrations and weep holes. Ridgeline sealed everything the builder missed." },
      { name: "Tom B.", textTemplate: "Rat problem near the creek behind our property. Ridgeline installed bait stations along the fence line and sealed the foundation. Night and day difference." },
      { name: "Marco B.", textTemplate: "Mice chewed through a dryer vent hose in the basement. Ridgeline replaced the hose with metal ducting and sealed 11 other gaps we had no idea about. No mice since last October." },
      { name: "Oluwaseun D.", textTemplate: "We kept finding droppings in the kitchen drawer. Ridgeline traced the entry to a gap behind the dishwasher water line — barely visible. Sealed it, set traps, and caught four mice in the first night." },
      { name: "Tariq G.", textTemplate: "Rats in the garage every winter. Ridgeline found they were entering through the garage door weatherstrip gap. New brush seal plus bait stations — first rat-free winter in three years." },
      { name: "Cormac J.", textTemplate: "Our century home had mice coming through the stone foundation. Ridgeline packed every gap with steel wool and caulk. The technician found 19 entry points on a house we thought was tight." },
      { name: "Harpreet P.", textTemplate: "Mouse nest in the attic insulation — we found it when we went up to get Christmas decorations. Ridgeline cleared the nest, replaced contaminated insulation, and sealed the soffit gaps. Clean attic now." },
      { name: "Meera S.", textTemplate: "Heard scratching in the wall behind the stove every night. Ridgeline confirmed mice, set snap traps in the wall void through an outlet plate, and caught six over two weeks. Silent walls now." },
      { name: "Bogdan M.", textTemplate: "Norway rats burrowing under the garden shed. Ridgeline placed bait stations at the burrow entrances and installed steel mesh along the shed's foundation edge. Activity stopped within two weeks." },
      { name: "Kwame W.", textTemplate: "We triggered the 12-month guarantee when we heard scratching again nine months after treatment. Ridgeline came back, found a new entry point at a cable conduit, sealed it, and re-baited at no charge." },
    ],
    faqPool: [
      { questionTemplate: "Why do {city} homes get mice every fall?", answerTemplate: "When outdoor temperatures drop below 10°C, mice seek warm shelter. They detect heat escaping through gaps around pipes, vents, and foundations. A mouse can squeeze through a hole the size of a dime — so even small openings are enough." },
      { questionTemplate: "How do I know if I have rats or mice in my {city} home?", answerTemplate: "Rat droppings are 12–18 mm long (about the size of a raisin), while mouse droppings are 3–6 mm (like a grain of rice). Rats leave greasy rub marks along baseboards. Our 47-point inspection identifies the species so we can apply the correct strategy." },
      { questionTemplate: "Are rodent treatments safe for kids and pets in {city}?", answerTemplate: "Yes. All bait stations are tamper-resistant and locked. Interior snap traps are placed in areas inaccessible to children and pets. All products are Health Canada–approved." },
      { questionTemplate: "How quickly can you respond to rodent problems in {city}?", answerTemplate: "Most {city} rodent appointments are available within {responseTime}. For active infestations in living spaces, we prioritize faster scheduling." },
      { questionTemplate: "Can rodents cause house fires?", answerTemplate: "Yes. Mice and rats gnaw on electrical wiring, and rodent-chewed wires are a leading cause of unexplained house fires. If you see gnaw marks on cables, address the infestation immediately." },
    ],
    cityModifiers: [
      // Group 0 — older urban cores
      {
        serviceOverrides: {
          0: "In older neighbourhoods, decades of settled foundations create gaps around pipes and vents that rodents exploit each fall. We trace droppings, gnaw marks, and grease trails to map all active runways — averaging 14 entry points per pre-1970 home.",
          3: "Victorian-era homes and older builds have more utility penetrations than modern construction. Each gap, crack, and pipe collar is sealed with galvanized steel mesh and metal flashing — materials rodents cannot chew through.",
        },
        stepOverrides: {
          0: "We map droppings, gnaw marks, grease trails, and all active runways. In older housing stock, rodent highways often run through shared wall cavities between units — we inspect both sides.",
          2: "Gaps around pipes, vents, and deteriorated mortar joints are sealed with galvanized steel mesh and metal flashing. Pre-1970 homes average 14 potential entry points — we address each one.",
        },
      },
      // Group 1 — suburban mix
      {
        serviceOverrides: {
          1: "Locked bait stations placed along confirmed travel routes and fence lines. In suburban properties with large yards, we extend station coverage to garden sheds, detached garages, and compost areas.",
          4: "Stations are checked on a bi-weekly rotation through fall and winter. In suburban areas where green spaces back onto residential lots, monitoring continues until spring to catch seasonal re-entry attempts.",
        },
        stepOverrides: {
          1: "Tamper-resistant bait stations and snap traps are placed along confirmed travel routes. In properties backing onto ravines or green belts, we extend coverage to fence lines and detached structures.",
          3: "We identify food sources — bird feeders, pet food, compost bins, and fruit trees — that attract rodents to suburban lots and recommend changes that cut attractant levels by up to 80%.",
        },
      },
      // Group 2 — newer suburbs + Alberta
      {
        serviceOverrides: {
          0: "New subdivisions built on former farmland face intense rodent pressure as construction displaces field mice and Norway rats. We trace droppings, gnaw marks, and grease trails to map each active runway inside and around the property.",
          3: "Builder-grade weep vents, unsealed pipe collars, and garage door gaps are the top three entry points in post-2000 homes. All three are sealed with steel mesh, caulk, or metal flashing.",
        },
        stepOverrides: {
          0: "We map droppings, gnaw marks, grease trails, and active runways. In newer communities where ongoing construction disturbs rodent habitat, we check neighbouring lots and common areas for source colonies.",
          2: "Weep vents, pipe collars, and garage door seals in newer builds are reinforced with galvanized steel mesh and metal flashing. A gap of just 6 mm under a garage door admits an adult mouse.",
        },
      },
      // Group 3 — mixed development
      {
        serviceOverrides: {
          2: "Snap traps along active runways provide quick, humane kills. In mixed residential-commercial areas, we coordinate trap placement to intercept rodents migrating from food-service loading docks and waste areas.",
          4: "Stations are checked on rotation and entry points sealed progressively. Properties near commercial corridors get extended monitoring — restaurant and retail waste attracts rodents from a 200-metre radius.",
        },
        stepOverrides: {
          2: "Gaps around pipes, vents, foundations, and garage doors are sealed with galvanized steel mesh and metal flashing. In areas where residential and commercial properties share lot lines, we seal the interface thoroughly.",
          3: "We identify food sources and harborage areas that attract rodents — including nearby commercial waste, dumpsters, and grease traps — and recommend property-level changes to reduce attractants.",
        },
      },
    ],
    metaDescTemplates: [
      "Rodent control in {city} — trapping, exclusion, and a 12-month Zero-Comeback Guarantee. PMRA-licensed. Serving {nbr1}, {nbr2} & surrounding areas.",
      "Mice and rats in {city}? Ridgeline Pest Defence combines active trapping with permanent exclusion. We seal the gaps so new rodents can't get in. Guaranteed 12 months.",
      "Professional rodent control in {city}. We trace every runway, trap active populations, and seal entry points with steel mesh. Serving {nbr1} and {nbr2}.",
      "Stop rodents for good in {city}. Ridgeline's 47-point inspection finds every entry point. Steel-mesh exclusion keeps them out. 12-month guarantee included.",
    ],
    localChallengesClosings: [
      "Ridgeline Pest Defence brings targeted rodent treatment to {city} — starting with our 47-point inspection and backed by a 12-month Zero-Comeback Guarantee.",
      "Our {city} technicians combine active trapping with permanent exclusion work. 47-point inspection included. 12-month guarantee on every treatment.",
      "Ridgeline has solved {city} rodent problems since 2015. We seal the entry points other companies miss. Results guaranteed for 12 months.",
    ],
  },

  "squirrel-removal": {
    displayName: "Squirrel Removal",
    pestLabel: "Squirrels",
    pestLower: "squirrels",
    isCommercial: false,
    pestPageSlug: "squirrels",
    cities: comprehensive32,
    services: [
      { name: "Attic & Roof Inspection", description: "We check every soffit, vent, roof junction, and gable for chew marks, droppings, and nesting material. Squirrels can gnaw through aluminum soffit in under an hour." },
      { name: "One-Way Door Installation", description: "Humane one-way exclusion doors let squirrels leave but prevent re-entry. All methods comply with Ontario wildlife regulations." },
      { name: "Entry Point Reinforcement", description: "Roof vents, soffits, weep holes, and fascia gaps are reinforced with galvanized steel mesh and heavy-gauge screening." },
      { name: "Attic Restoration", description: "Contaminated insulation removal, sanitization, and replacement. Squirrel urine and droppings create health hazards and odour problems." },
      { name: "Prevention Guidance", description: "Tree-limb trimming recommendations and ongoing monitoring to keep squirrels from returning." },
    ],
    treatmentSteps: [
      { step: "Inspection & Assessment", description: "We identify all entry and exit points, check for babies or nesting activity, and assess damage to insulation and wiring." },
      { step: "Humane One-Way Exclusion", description: "One-way doors are installed at active entry points. Squirrels leave naturally but cannot re-enter." },
      { step: "Full Exclusion Sealing", description: "Every vulnerable point on the roofline is reinforced with galvanized steel mesh and heavy-gauge screening." },
      { step: "Damage Assessment", description: "Contaminated insulation, soiled vapour barriers, and chewed wiring are documented. Attic restoration quotes are provided on the spot." },
      { step: "Monitor & Guarantee", description: "Follow-up inspection confirms the attic is clear. Backed by our 12-month Zero-Comeback Guarantee." },
    ],
    surprisingFact: "Squirrels can chew through aluminum soffit in under an hour. Their teeth grow continuously — gnawing on your home keeps them trimmed.",
    introTemplate: "{city}'s mature trees and residential rooflines give squirrels easy access to attics across {nbr1}, {nbr2}, and {nbr3}. Once inside, they chew through wiring, tear up insulation, and create fire hazards.",
    serviceIntro: "Ridgeline Pest Defence uses humane one-way exclusion — squirrels leave naturally and can't get back in. Then we reinforce every vulnerable point on your roofline with galvanized steel.",
    testimonialPool: [
      { name: "Marco D.", textTemplate: "Squirrels chewed through our soffit and nested in the attic. Ridgeline installed one-way doors, repaired the damage, and screened every vent. Quiet attic ever since." },
      { name: "Christine H.", textTemplate: "Scratching and thumping above our bedroom at 5 AM. Ridgeline confirmed squirrels and had them out within 48 hours using one-way doors. Then sealed the entire roofline." },
      { name: "Robert F.", textTemplate: "Found chewed wiring in the attic insulation. Ridgeline removed the squirrels humanely, replaced the damaged insulation, and reinforced every entry point with steel mesh." },
      { name: "Nina S.", textTemplate: "Squirrels kept getting back in after two other companies tried to fix it. Ridgeline found gaps the others missed along the fascia joint. Problem finally solved." },
      { name: "George P.", textTemplate: "Baby squirrels in the attic — Ridgeline waited until they were mobile before installing one-way doors. Humane, patient, and thorough." },
      { name: "Kyle M.", textTemplate: "Squirrels gnawed through the fascia board near a tree branch. Ridgeline replaced it with metal-backed material and trimmed the branch. Permanent fix." },
      { name: "Yuki C.", textTemplate: "Squirrels were storing acorns in our attic insulation — we found over 200 when Ridgeline opened the soffit. They removed the cache, cleaned the area, and installed one-way doors. No more pantry raids." },
      { name: "Brigitte F.", textTemplate: "Our aluminum soffit had a hole the size of a baseball. Ridgeline said the squirrel chewed through it in under an hour. They patched it with galvanized steel and screened every vent on the roof." },
      { name: "Nadia H.", textTemplate: "Squirrel got into the wall between the bathroom and bedroom. We could hear it running at 5 AM. Ridgeline installed a one-way door at the entry and it left within 24 hours. Sealed the hole the next day." },
      { name: "Amara L.", textTemplate: "Raccoons and squirrels were both using our attic. Ridgeline handled both — one-way doors for the squirrels, a raccoon-specific exclusion for the larger opening. Full attic restoration afterward." },
      { name: "Dina N.", textTemplate: "We called Ridgeline because squirrels were chewing on the porch railing. Turned out they had a nest in the soffit above. One-way door, mesh screening, and a branch trim — problem solved in three days." },
      { name: "Zara Q.", textTemplate: "Third company we called for squirrels. The first two sealed the hole with the squirrel still inside. Ridgeline used cameras to confirm the attic was empty before sealing. Finally done right." },
      { name: "Ingrid V.", textTemplate: "Squirrel chewed through the ridge vent and nested in the attic above our baby's room. Ridgeline installed a one-way door, waited for the squirrel to leave, then reinforced the entire ridge vent with steel mesh." },
      { name: "Owen T.", textTemplate: "Flying squirrels in the attic — we didn't even know we had them until Ridgeline's inspection. They installed exclusion doors at dusk when the squirrels were active and sealed six entry points. Quiet attic ever since." },
    ],
    faqPool: [
      { questionTemplate: "How does Ridgeline remove squirrels in {city} humanely?", answerTemplate: "We install one-way exclusion doors at active entry points. Squirrels leave naturally to forage and cannot re-enter. This avoids the stress of trapping and complies with Ontario wildlife regulations." },
      { questionTemplate: "Can squirrels cause fire damage in {city} homes?", answerTemplate: "Yes. Squirrels gnaw on electrical wiring in attics, and chewed wires are a documented fire hazard. If you hear activity in your attic, have it inspected promptly." },
      { questionTemplate: "When are squirrels most active in {city} attics?", answerTemplate: "Squirrels enter attics primarily in late fall (seeking winter shelter) and early spring (nesting season). In {city}, October–November and March–April are peak entry periods." },
      { questionTemplate: "Do you repair squirrel damage in {city}?", answerTemplate: "Yes. We offer full attic restoration — contaminated insulation removal, sanitization, and replacement. We also repair soffit, fascia, and vent damage caused by squirrel entry." },
      { questionTemplate: "How do I prevent squirrels from returning to my {city} home?", answerTemplate: "Trim tree branches at least 2 meters from your roofline, install galvanized steel mesh over all vents, and have a professional inspect your roof annually. Our exclusion work includes all of these steps." },
    ],
    cityModifiers: [
      // Group 0 — older urban cores
      {
        serviceOverrides: {
          0: "Older rooflines with cedar soffits and aging fascia boards are prime targets for squirrels. We check every soffit joint, vent cap, and gable return — squirrels can gnaw through aluminum soffit in under an hour.",
          2: "Victorian-era and mid-century homes have more roof junctions and fascia gaps than modern builds. Each vulnerable point is reinforced with 16-gauge galvanized steel mesh rated for 10+ years.",
        },
        stepOverrides: {
          0: "We identify all entry and exit points across the roofline, paying particular attention to fascia-soffit joints and valley flashings common in older construction. We also check for babies before installing exclusion doors.",
          2: "Every vulnerable point on the roofline is reinforced with heavy-gauge galvanized mesh. Older homes average 8–12 potential entry points along soffit runs and roof junctions.",
        },
      },
      // Group 1 — suburban
      {
        serviceOverrides: {
          1: "Humane one-way exclusion doors let squirrels leave but prevent re-entry. In suburban areas with heavy tree cover, we time installations to avoid nesting season and comply with Ontario wildlife regulations.",
          4: "Tree-limb trimming recommendations are specific to your property — we identify every branch within 2 meters of the roofline. Ongoing monitoring through fall and spring covers both peak entry seasons.",
        },
        stepOverrides: {
          1: "One-way doors are installed at active entry points. In suburban properties with mature canopies, we check for multiple entry zones — squirrels often create backup access routes within 48 hours of losing their primary entry.",
          3: "Contaminated insulation, soiled vapour barriers, and chewed wiring are documented. Suburban attics with blown-in insulation typically show more extensive damage — restoration quotes are provided on the spot.",
        },
      },
      // Group 2 — newer suburbs + Alberta
      {
        serviceOverrides: {
          0: "In post-2000 subdivisions, builder-grade soffit and ridge vents are frequent squirrel entry points. We check every vent cap, roof penetration, and fascia joint — squirrels can gnaw through vinyl soffit even faster than aluminum.",
          3: "Newer blown-in insulation compacts quickly under squirrel traffic, reducing R-value by up to 40%. We remove contaminated material, sanitize the attic cavity, and install fresh insulation.",
        },
        stepOverrides: {
          0: "We identify all entry and exit points, focusing on builder-grade vents and roof penetrations common in newer developments. Ridge vents without metal backing are a top target — we find these in 60% of post-2000 homes.",
          4: "Follow-up inspection confirms the attic is clear and all reinforcements are intact. In newer communities with young tree growth, we advise on preventive trimming schedules as canopies mature toward rooflines.",
        },
      },
      // Group 3 — mixed development
      {
        serviceOverrides: {
          2: "Multi-story homes and townhouse complexes require systematic exclusion across shared rooflines. We reinforce every vulnerable point with galvanized steel mesh — from ground-floor soffits to third-floor ridge caps.",
          4: "Properties near parks, ravines, and mature tree lines face persistent squirrel pressure. We provide a trimming schedule and annual inspection plan that catches new vulnerabilities before squirrels exploit them.",
        },
        stepOverrides: {
          2: "Every vulnerable point on the roofline is reinforced. In townhouse complexes and semi-detached homes, we coordinate exclusion across shared fascia and soffit runs to prevent squirrels from shifting to an adjacent unit.",
          3: "Damage assessment covers insulation, vapour barriers, wiring, and stored items. In multi-story homes, we check every floor's ceiling cavity — squirrels travel between levels through wall voids.",
        },
      },
    ],
    metaDescTemplates: [
      "Squirrel removal in {city} — humane one-way exclusion, steel-mesh reinforcement, and a 12-month guarantee. Serving {nbr1}, {nbr2} & surrounding areas.",
      "Ridgeline Pest Defence removes squirrels from {city} attics humanely. One-way exclusion doors, full roofline reinforcement, and optional attic restoration. Guaranteed 12 months.",
      "Squirrels in your {city} attic? We install one-way doors, seal every entry point with galvanized steel, and guarantee results for 12 months. Book your inspection.",
      "Professional squirrel removal in {city} serving {nbr1} and {nbr2}. Humane exclusion, roofline reinforcement, and attic restoration by Ridgeline Pest Defence.",
    ],
    localChallengesClosings: [
      "Ridgeline Pest Defence provides humane squirrel removal in {city} — one-way exclusion, full roofline reinforcement, and a 12-month Zero-Comeback Guarantee.",
      "Our {city} technicians use one-way exclusion doors and galvanized steel reinforcement. Attic restoration available. 12-month guarantee on every job.",
      "Ridgeline has removed squirrels from {city} homes since 2015. Humane methods, permanent exclusion, and results guaranteed for 12 months.",
    ],
  },

  "bed-bug-control": {
    displayName: "Bed Bug Control",
    pestLabel: "Bed Bugs",
    pestLower: "bed bugs",
    isCommercial: false,
    pestPageSlug: "bed-bugs",
    cities: comprehensive32,
    services: [
      { name: "Visual & Canine Inspection", description: "Thorough inspection of mattresses, box springs, headboards, and furniture seams. Bed bugs hide in cracks as thin as a credit card." },
      { name: "Heat Treatment", description: "Rooms are heated to 50°C+ to eliminate bed bugs at all life stages — eggs, nymphs, and adults — in a single session." },
      { name: "Targeted Chemical Application", description: "Residual insecticides applied to harborage areas provide lasting protection in cracks, seams, and baseboards." },
      { name: "Mattress & Furniture Treatment", description: "Direct treatment of sleeping areas, headboards, and upholstered furniture where bed bugs concentrate." },
      { name: "Follow-Up Verification", description: "Return inspections at 2 and 4 weeks confirm elimination. Any remaining activity triggers re-treatment at no additional cost." },
    ],
    treatmentSteps: [
      { step: "Thorough Inspection", description: "We inspect mattresses, box springs, headboards, baseboards, and furniture seams. Bed bugs hide in cracks as thin as a credit card." },
      { step: "Preparation Guidance", description: "You receive a detailed prep sheet covering laundering, decluttering, and furniture positioning to maximize treatment effectiveness." },
      { step: "Heat or Chemical Treatment", description: "Heat treatment eliminates all life stages in one session. Chemical treatment provides residual protection in harborage areas." },
      { step: "Follow-Up Inspections", description: "Return visits at 2 and 4 weeks confirm elimination. Any remaining activity triggers re-treatment at no charge." },
      { step: "Prevention Advice", description: "We recommend encasements, interceptor traps, and travel precautions to prevent reintroduction." },
    ],
    surprisingFact: "A single female bed bug lays 200–500 eggs in her lifetime. Bed bugs can survive up to 12 months without feeding.",
    introTemplate: "Bed bug activity in {city} has increased significantly in multi-unit housing, student rentals, and homes near transit corridors. Properties in {nbr1}, {nbr2}, and {nbr3} are not immune — bed bugs travel through luggage, used furniture, and shared walls.",
    serviceIntro: "Ridgeline Pest Defence combines heat treatment with targeted chemical applications for thorough bed bug elimination. We follow up at 2 and 4 weeks to confirm every bug is gone.",
    testimonialPool: [
      { name: "Maria C.", textTemplate: "Bed bugs after a hotel stay. Ridgeline treated the bedroom with heat and followed up twice. Complete elimination confirmed. Discreet and professional." },
      { name: "Aaron W.", textTemplate: "Bed bugs in our rental unit. Ridgeline coordinated with our landlord, treated two units simultaneously, and confirmed elimination within a month. Handled everything smoothly." },
      { name: "Diana L.", textTemplate: "Woke up with bites and found blood spots on the sheets. Ridgeline confirmed bed bugs, heat-treated both bedrooms, and set up monitoring. Sleeping soundly again." },
      { name: "Ryan M.", textTemplate: "Bought a used couch and inherited bed bugs. Ridgeline treated the entire living area and showed us how to use interceptor traps. No recurrence in six months." },
      { name: "Tracey K.", textTemplate: "Multi-unit building with bed bugs spreading between floors. Ridgeline treated four units in a single day and the problem stopped. Our property manager was impressed." },
      { name: "Yuki T.", textTemplate: "We were mortified when we found bed bugs. Ridgeline was compassionate and discreet. Heat treatment wiped them out in one session." },
      { name: "Fatima A.", textTemplate: "Found bed bugs in our daughter's dorm room furniture when she moved home for summer. Ridgeline heat-treated her bedroom and inspected the rest of the house. Caught it before it spread." },
      { name: "Yuki C.", textTemplate: "Bed bugs in a furnished rental we manage. Ridgeline treated between tenants — heat plus chemical in every room. Provided a clearance report we could show the next occupant." },
      { name: "Tariq G.", textTemplate: "Bites on my arms every morning but I couldn't find anything. Ridgeline's technician used a flashlight and found bed bugs hiding in the headboard screw holes. Heat treatment eliminated them in one visit." },
      { name: "Svetlana K.", textTemplate: "Our condo building had a bed bug problem on two floors. Ridgeline treated our unit and coordinated with the property manager to treat our neighbours. No recurrence in eight months." },
      { name: "Bogdan M.", textTemplate: "We used the 12-month guarantee when we found one live bug six months after treatment. Ridgeline came back, re-inspected, and did a targeted follow-up treatment. No charge, no hassle." },
      { name: "Zara Q.", textTemplate: "Bought a vintage dresser at an estate sale and brought bed bugs home with it. Ridgeline treated the bedroom and living room with heat and set up interceptor traps. Clean inspection at the four-week follow-up." },
      { name: "Meera S.", textTemplate: "Bed bugs in our basement guest suite after a visitor stayed. Ridgeline treated the suite and inspected the main floor as a precaution. The two-week follow-up confirmed total elimination." },
      { name: "Elif Z.", textTemplate: "We tried DIY sprays and mattress covers for two months before calling Ridgeline. They explained that the bugs were in the baseboards and wall outlets, not just the bed. Heat treatment solved it in a day." },
    ],
    faqPool: [
      { questionTemplate: "How do bed bugs get into {city} homes?", answerTemplate: "Bed bugs travel through luggage, used furniture, clothing, and shared walls in multi-unit buildings. They don't come from poor hygiene — any home can get them. {city}'s density and transit connections increase exposure." },
      { questionTemplate: "What's the best treatment for bed bugs in {city}?", answerTemplate: "Heat treatment raises room temperatures to 50°C+, killing all life stages in a single session. For larger infestations or multi-room situations, we combine heat with targeted chemical applications for maximum effectiveness." },
      { questionTemplate: "How do I prepare my {city} home for bed bug treatment?", answerTemplate: "We provide a detailed preparation sheet covering laundering, decluttering, and furniture positioning. Proper preparation significantly improves treatment success. Your technician reviews the checklist before treatment begins." },
      { questionTemplate: "Can bed bugs survive without feeding?", answerTemplate: "Yes — bed bugs can survive up to 12 months without a blood meal. This is why DIY approaches like vacating the room for a few weeks don't work. Professional treatment is essential." },
      { questionTemplate: "How fast can Ridgeline treat bed bugs in {city}?", answerTemplate: "Most {city} bed bug appointments are available within {responseTime}. We prioritize bed bug calls because early treatment prevents spread to other rooms and units." },
    ],
    cityModifiers: [
      // Group 0 — older urban cores
      {
        serviceOverrides: {
          0: "Thorough inspection of mattresses, box springs, headboards, and furniture seams. In older multi-unit buildings with lathe-and-plaster walls, we also check picture rail gaps and outlet covers — bed bugs hide in cracks as thin as a credit card.",
          2: "Residual insecticides applied to harborage areas provide lasting protection. In older buildings with plaster walls and hardwood floors, we treat baseboard gaps, floor seams, and crown moulding joints where bed bugs establish daytime refuges.",
        },
        stepOverrides: {
          0: "We inspect mattresses, box springs, headboards, baseboards, and furniture seams. In older housing with shared walls, bed bugs migrate between units through electrical conduits and plumbing chases — we check adjacent areas too.",
          3: "Return visits at 2 and 4 weeks confirm elimination. In multi-unit buildings, we coordinate with property management to monitor neighbouring units — bed bugs travel up to 6 meters through wall voids.",
        },
      },
      // Group 1 — suburban mix
      {
        serviceOverrides: {
          1: "Rooms are heated to 50°C+ to eliminate bed bugs at all life stages in a single session. In suburban homes with finished basements and multiple living areas, we stage equipment to maintain lethal temperatures across all treated zones simultaneously.",
          4: "Return inspections at 2 and 4 weeks confirm elimination. For suburban homes with multiple bedrooms and guest rooms, we install interceptor traps at every bed frame to catch early reintroduction.",
        },
        stepOverrides: {
          1: "You receive a detailed prep sheet covering laundering, decluttering, and furniture positioning. Larger suburban homes typically require 4–6 hours of prep — we walk you through the checklist by phone before treatment day.",
          4: "We recommend encasements for all mattresses and box springs, interceptor traps at every bed frame, and travel precautions. Suburban homes with guest bedrooms need interceptors in every sleeping area.",
        },
      },
      // Group 2 — newer suburbs + Alberta
      {
        serviceOverrides: {
          0: "Thorough inspection of mattresses, box springs, headboards, and furniture seams. In newer homes with open-concept layouts, bed bugs travel farther from sleeping areas — we extend the inspection to living rooms, home offices, and laundry rooms.",
          3: "Direct treatment of sleeping areas, headboards, and upholstered furniture. In newer homes with walk-in closets and ensuite seating, these secondary harborage areas require treatment too — bed bugs follow CO2 trails from sleeping occupants.",
        },
        stepOverrides: {
          2: "Heat treatment raises room temperatures to 50°C+, killing all life stages. In newer construction with tighter building envelopes, we achieve lethal temperatures faster — most treatments complete in 6–8 hours.",
          4: "We recommend mattress encasements, interceptor traps, and specific travel precautions. In communities with high turnover — student housing, short-term rentals — annual preventive inspections are worth the investment.",
        },
      },
      // Group 3 — mixed development
      {
        serviceOverrides: {
          1: "Rooms are heated to 50°C+ for complete single-session elimination. In multi-story homes, we stage heating equipment on each level to maintain consistent temperatures — bed bug eggs require sustained exposure above 48°C for at least 90 minutes.",
          4: "Return inspections at 2 and 4 weeks confirm elimination. For homes in areas with mixed housing density, we advise on ongoing monitoring, especially if neighbouring properties have untreated infestations.",
        },
        stepOverrides: {
          0: "We inspect mattresses, box springs, headboards, baseboards, and furniture seams. In townhouse and semi-detached properties, bed bugs can migrate through shared walls — we advise neighbours to inspect simultaneously.",
          2: "Heat treatment eliminates all life stages in one session. Chemical treatment provides residual protection in harborage areas. For multi-story homes, we treat all levels on the same day to prevent bed bugs retreating to untreated floors.",
        },
      },
    ],
    metaDescTemplates: [
      "Bed bug control in {city} — heat treatment, targeted chemical application, and follow-up verification. PMRA-licensed. Serving {nbr1}, {nbr2} & surrounding areas.",
      "Ridgeline Pest Defence eliminates bed bugs in {city} with heat treatment that kills all life stages in one session. Follow-up inspections at 2 and 4 weeks. 12-month guarantee.",
      "Bed bugs in {city}? Professional heat treatment reaches 50°C+ to eliminate eggs, nymphs, and adults. Discreet service. Results verified at 2 and 4 weeks.",
      "Professional bed bug control in {city} serving {nbr1} and {nbr2}. Heat and chemical treatments combined for maximum effectiveness. Ridgeline guarantees results for 12 months.",
    ],
    localChallengesClosings: [
      "Ridgeline Pest Defence brings effective bed bug treatment to {city} — heat treatment, chemical application, and follow-up verification backed by a 12-month guarantee.",
      "Our {city} technicians eliminate bed bugs at every life stage. Discreet service, follow-up verification at 2 and 4 weeks, and a 12-month guarantee on every treatment.",
      "Ridgeline has treated {city} bed bug infestations since 2015. Same-day inspections available. Every treatment is verified and guaranteed for 12 months.",
    ],
  },

  "cockroach-control": {
    displayName: "Cockroach Control",
    pestLabel: "Cockroaches",
    pestLower: "cockroaches",
    isCommercial: false,
    pestPageSlug: "cockroaches",
    cities: comprehensive32,
    services: [
      { name: "Species Identification", description: "German, Oriental, and American cockroaches each require different strategies. Correct identification determines the treatment protocol." },
      { name: "Gel Bait Application", description: "Professional-grade gel baits placed in harborage areas. Cockroaches feed on the bait and share it through contact and faecal matter, spreading it through the colony." },
      { name: "Crack & Crevice Treatment", description: "Targeted insecticide applied inside wall voids, behind appliances, under sinks, and along pipe chases — where cockroaches harbour during the day." },
      { name: "Insect Growth Regulator", description: "IGR disrupts the cockroach reproductive cycle, preventing nymphs from maturing into breeding adults." },
      { name: "Follow-Up Monitoring", description: "Sticky traps and scheduled re-inspections confirm the treatment held. German cockroach infestations typically require 2–3 treatment cycles." },
    ],
    treatmentSteps: [
      { step: "Inspection & Species ID", description: "We identify the species and map all harborage areas — behind fridges, inside wall voids, under sinks, and along pipe runs." },
      { step: "Gel Bait Placement", description: "Professional-grade gel bait is applied in cracks, crevices, and harborage zones. The colony's feeding and contact behavior spreads the bait throughout the population." },
      { step: "Crack & Crevice Treatment", description: "Residual insecticide targets deep harborage areas inaccessible to baits — wall voids, pipe chases, and electrical boxes." },
      { step: "Growth Regulator Application", description: "Insect growth regulators prevent nymphs from reaching reproductive maturity, breaking the breeding cycle." },
      { step: "Monitor & Guarantee", description: "Sticky traps and follow-up visits confirm elimination. Backed by our 12-month Zero-Comeback Guarantee." },
    ],
    surprisingFact: "A single German cockroach egg case produces up to 48 nymphs. One female can produce 300–400 offspring in her lifetime.",
    introTemplate: "Cockroach infestations in {city} concentrate in multi-unit housing, older kitchens, and buildings with shared plumbing — particularly around {nbr1} and {nbr2}. German cockroaches breed fast indoors, while Oriental cockroaches enter through floor drains and basement gaps near {nbr3}.",
    serviceIntro: "Ridgeline Pest Defence targets cockroach colonies at the source with professional gel baits, crack-and-crevice treatments, and growth regulators that break the breeding cycle.",
    testimonialPool: [
      { name: "Alicia R.", textTemplate: "Cockroaches in our townhouse kitchen. Ridgeline treated our unit and worked with the property manager to address neighbouring units too. That coordinated approach made the difference." },
      { name: "Rashid A.", textTemplate: "German cockroaches behind the fridge and dishwasher. Ridgeline applied gel baits in every crack and crevice. Three follow-ups later, completely clear. Thorough work." },
      { name: "Pat O.", textTemplate: "Oriental cockroaches coming up through the basement drain. Ridgeline treated the drain lines and sealed the gaps around the floor drain. No more late-night surprises." },
      { name: "Amanda F.", textTemplate: "We'd tried everything — store sprays, traps, foggers. Ridgeline explained why those didn't work and applied a professional treatment that actually solved it in three weeks." },
      { name: "Simone J.", textTemplate: "Cockroach issue in our restaurant kitchen. Ridgeline treated after hours with zero disruption to service. Health inspector was satisfied at the next visit." },
      { name: "Frank D.", textTemplate: "Cockroaches in a rental property between tenants. Ridgeline deep-treated the kitchen and bathrooms before the new tenant moved in. Clean handover." },
      { name: "Fatima A.", textTemplate: "German cockroaches in the cracks behind the kitchen backsplash. Ridgeline applied gel bait into every seam and crevice without removing the tile. Three treatments over six weeks — completely clear." },
      { name: "Oluwaseun D.", textTemplate: "Cockroaches were coming up through the floor drain in the laundry room. Ridgeline treated the drain lines and sealed the gap around the drain cover with silicone. No more surprise visitors." },
      { name: "Nadia H.", textTemplate: "We found cockroaches in the toaster and microwave. Ridgeline treated the entire kitchen including inside appliance cavities. The technician showed us how to reduce moisture that attracts them." },
      { name: "Amara L.", textTemplate: "Oriental cockroaches in our century-home basement every summer. Ridgeline sealed the foundation cracks and treated the perimeter. First summer without cockroaches in the five years we've lived here." },
      { name: "Dina N.", textTemplate: "Our townhouse complex had cockroaches spreading between units through the plumbing chase. Ridgeline coordinated treatment for four units on the same day. The coordinated approach finally broke the cycle." },
      { name: "Luca R.", textTemplate: "Cockroach droppings behind the fridge and oven. Ridgeline deep-cleaned the area, applied gel bait, and installed monitoring traps. Two follow-ups confirmed the infestation was eliminated." },
      { name: "Kwame W.", textTemplate: "We tried foggers twice and the cockroaches just moved to the bedrooms. Ridgeline explained that foggers push them deeper into wall voids. Their targeted gel bait approach eliminated the colony in three weeks." },
      { name: "Owen T.", textTemplate: "American cockroaches in our garage, especially near the floor drain. Ridgeline treated the drain system and applied a residual barrier along the garage perimeter. Haven't seen one since." },
    ],
    faqPool: [
      { questionTemplate: "Why are cockroaches so hard to eliminate in {city}?", answerTemplate: "German cockroaches breed extremely fast — one egg case produces up to 48 nymphs. They hide in cracks as thin as a coin during the day and are resistant to many retail pesticides. Professional gel baits and growth regulators are far more effective than sprays." },
      { questionTemplate: "Are cockroaches a health risk in {city} homes?", answerTemplate: "Yes. Cockroaches carry Salmonella, E. coli, and dozens of other pathogens. Their droppings and shed skins trigger asthma and allergies, especially in children. The WHO classifies them as a public health concern." },
      { questionTemplate: "How do cockroaches enter {city} apartments?", answerTemplate: "Through shared plumbing chases, electrical conduits, gaps around pipes, and even grocery bags. In multi-unit buildings, they travel between units through wall voids and pipe runs." },
      { questionTemplate: "How many treatments does a cockroach infestation need?", answerTemplate: "German cockroach infestations typically require 2–3 treatment cycles spaced 2 weeks apart. This targets newly hatched nymphs that survived the initial treatment. All follow-ups are included in our service." },
      { questionTemplate: "Can Ridgeline treat cockroaches in a {city} restaurant?", answerTemplate: "Yes. We provide after-hours commercial cockroach treatment with documentation for health inspection compliance. Our products are approved for use in food-preparation areas when applied according to label directions." },
    ],
    cityModifiers: [
      // Group 0 — older urban cores
      {
        serviceOverrides: {
          0: "German, Oriental, and American cockroaches each need different strategies. In older buildings with shared plumbing risers and lathe-and-plaster walls, species identification is especially critical — treatment must account for multiple harborage pathways between units.",
          2: "Targeted insecticide applied inside wall voids, behind appliances, under sinks, and along pipe chases. Older buildings with cast-iron drain lines and deteriorated grout offer more harborage — we treat every accessible void and chase.",
        },
        stepOverrides: {
          0: "We identify the species and map all harborage areas. In older buildings, cockroaches travel through plumbing chases, electrical conduits, and gaps in deteriorated mortar — we inspect shared walls and adjacent units when possible.",
          2: "Residual insecticide targets deep harborage areas in wall voids, pipe chases, and electrical boxes. Pre-1970 buildings often have unsealed utility penetrations between units — each one is treated.",
        },
      },
      // Group 1 — suburban mix
      {
        serviceOverrides: {
          1: "Professional-grade gel baits placed in harborage areas. In suburban homes, we focus on kitchen cabinet hinges, dishwasher motors, and refrigerator compressor compartments — the three most common harborage zones in single-family properties.",
          4: "Sticky traps and scheduled re-inspections confirm elimination. German cockroach infestations typically require 2–3 treatment cycles. In larger suburban kitchens, we increase trap density to catch early re-establishment.",
        },
        stepOverrides: {
          1: "Professional-grade gel bait is applied in cracks, crevices, and harborage zones. Suburban kitchens with island counters and built-in appliances require bait placement in 15–20 discrete locations for full coverage.",
          4: "Sticky traps and follow-up visits confirm elimination. In suburban homes with attached garages, we monitor the garage-house junction — a common secondary harborage point for Oriental cockroaches.",
        },
      },
      // Group 2 — newer suburbs + Alberta
      {
        serviceOverrides: {
          0: "German, Oriental, and American cockroaches each require different strategies. In newer builds with tighter envelopes, German cockroach populations can explode faster because indoor humidity stays higher — correct species identification determines the protocol.",
          3: "Insect growth regulators disrupt the reproductive cycle. In post-2000 homes where airtight construction traps moisture around kitchen and bathroom plumbing, IGR application at pipe penetrations is critical — one untreated crack can sustain a breeding population.",
        },
        stepOverrides: {
          0: "We identify the species and map all harborage areas. Newer homes with PEX plumbing and flexible gas lines have more penetration points than copper-piped builds — each one is inspected and treated.",
          3: "Insect growth regulators prevent nymphs from reaching reproductive maturity. In newer construction, we apply IGR at every plumbing penetration and electrical box — a single German cockroach egg case produces up to 48 nymphs.",
        },
      },
      // Group 3 — mixed development
      {
        serviceOverrides: {
          2: "Targeted insecticide applied inside wall voids, behind appliances, under sinks, and along pipe chases. Properties near food-service businesses face additional cockroach pressure from shared dumpster areas and loading zones.",
          4: "Sticky traps and scheduled re-inspections confirm elimination. For properties in mixed residential-commercial areas, we extend monitoring to garage and utility areas that connect to external waste zones.",
        },
        stepOverrides: {
          2: "Residual insecticide targets deep harborage areas in wall voids, pipe chases, and electrical boxes. In multi-unit and mixed-use buildings, treatment must be coordinated across units — cockroaches migrate through shared infrastructure.",
          4: "Sticky traps and follow-up visits confirm elimination. Properties near commercial food operations may need quarterly monitoring to catch new introductions before they establish breeding populations.",
        },
      },
    ],
    metaDescTemplates: [
      "Cockroach control in {city} — species-specific gel baiting, crack-and-crevice treatment, and growth regulators. PMRA-licensed. Serving {nbr1}, {nbr2} & surrounding areas.",
      "Ridgeline Pest Defence eliminates cockroaches in {city} at the colony level. German, Oriental, and American cockroaches each get a targeted protocol. 12-month guarantee.",
      "Cockroaches in {city}? Professional gel baiting and growth regulators break the breeding cycle. Our {city} technicians follow up until elimination is confirmed.",
      "Professional cockroach control in {city} serving {nbr1} and {nbr2}. Ridgeline's targeted treatments reach harborage areas retail sprays can't. Guaranteed 12 months.",
    ],
    localChallengesClosings: [
      "Ridgeline Pest Defence brings targeted cockroach treatment to {city} — gel baiting, crack-and-crevice treatment, and growth regulators backed by a 12-month guarantee.",
      "Our {city} technicians use species-specific protocols that target cockroaches at the colony level. 47-point inspection included. 12-month guarantee on every treatment.",
      "Ridgeline has eliminated {city} cockroach infestations since 2015. Professional-grade treatments that retail products can't match. Results guaranteed for 12 months.",
    ],
  },

  "wasp-control": {
    displayName: "Wasp Control",
    pestLabel: "Wasps",
    pestLower: "wasps",
    isCommercial: false,
    pestPageSlug: "wasps-hornets",
    cities: comprehensive32,
    services: [
      { name: "Nest Identification & Risk Assessment", description: "We locate all active nests — under eaves, inside wall cavities, underground, and in trees — and assess the risk to occupants before treatment." },
      { name: "Safe Nest Removal", description: "Nests are treated with fast-acting insecticide and removed once activity stops. Underground and wall-cavity nests are treated through injection." },
      { name: "Perimeter Treatment", description: "Residual treatment along eaves, soffits, and overhangs discourages nest construction throughout the season." },
      { name: "Preventive Barrier Application", description: "Applied in early spring before queens establish new colonies. Prevents nest-building on treated surfaces." },
      { name: "Emergency Response", description: "Aggressive wasp activity near doorways, play areas, or allergic household members is prioritized for same-day or next-day service." },
    ],
    treatmentSteps: [
      { step: "Locate All Nests", description: "We identify every active nest on the property — visible nests under eaves plus hidden nests inside walls, soffits, or underground." },
      { step: "Safe Treatment", description: "Fast-acting insecticide is applied directly to the nest. Wall-cavity and underground nests are treated through targeted injection." },
      { step: "Nest Removal", description: "Once activity stops, accessible nests are physically removed to prevent reuse by future queens." },
      { step: "Perimeter Deterrent", description: "Residual treatment on eaves, soffits, and overhangs discourages new nest construction for the remainder of the season." },
      { step: "Monitor & Guarantee", description: "We check for new activity and re-treat if needed. Covered by our 12-month Zero-Comeback Guarantee." },
    ],
    surprisingFact: "A single yellowjacket nest can house 5,000 workers by late summer. Unlike bees, wasps can sting repeatedly — and they release alarm pheromones that recruit other wasps to attack.",
    introTemplate: "Wasp activity in {city} peaks between July and October, with nests appearing under eaves, inside wall cavities, and underground across {nbr1}, {nbr2}, and {nbr3}. A single yellowjacket nest can house 5,000 workers by late summer.",
    serviceIntro: "Ridgeline Pest Defence removes nests safely and applies preventive treatments to keep new colonies from building on your property.",
    testimonialPool: [
      { name: "Michelle R.", textTemplate: "Wasp nests under every overhang. Ridgeline removed four nests and treated the eaves to discourage rebuilding. First wasp-free patio season in years." },
      { name: "Derek S.", textTemplate: "Wasps built a nest inside our wall cavity — we could hear buzzing through the drywall. Ridgeline injected treatment through a tiny hole and removed the nest. No wall damage." },
      { name: "Anne G.", textTemplate: "Yellowjackets near the kids' play area. Ridgeline came out the same day, located an underground nest, and eliminated it. We could use the yard again by evening." },
      { name: "Darren K.", textTemplate: "Wasps nesting in the BBQ every spring. Ridgeline removed the nest, treated the area, and applied a preventive barrier. No more wasp surprises at cookouts." },
      { name: "Lisa P.", textTemplate: "Paper wasps building on every window frame. Ridgeline knocked them down and treated the frames with a deterrent. They haven't come back." },
      { name: "Bill T.", textTemplate: "Underground yellowjacket nest in the garden. Almost stepped on it mowing the lawn. Ridgeline treated it that evening — fast and effective." },
      { name: "Marco B.", textTemplate: "Wasps built a nest inside the gas meter box. Ridgeline suited up and removed it without disturbing the meter. The utility company couldn't have done that." },
      { name: "Brigitte F.", textTemplate: "Paper wasps on every window frame along the south side of the house. Ridgeline removed six nests and applied a residual deterrent. The technician said south-facing surfaces are warmer and attract them." },
      { name: "Nadia H.", textTemplate: "Yellowjackets nesting in an old groundhog burrow in the backyard. Kids couldn't play outside. Ridgeline treated the burrow at dusk and the yard was safe by the next afternoon." },
      { name: "Svetlana K.", textTemplate: "Wasps kept rebuilding nests under our deck every year. Ridgeline treated the area and applied a long-lasting deterrent to the deck joists. First summer without nests in four years." },
      { name: "Dina N.", textTemplate: "A wasp flew inside through a gap in the window screen and stung my son. Ridgeline found a nest behind the exterior shutters we hadn't noticed. Removed it and sealed the screen gap." },
      { name: "Harpreet P.", textTemplate: "Wasps coming and going from a hole in the mortar between the bricks. Ridgeline injected treatment into the wall cavity and sealed the entry. The nest was inside the wall — we never would have found it ourselves." },
      { name: "Ingrid V.", textTemplate: "We had a wasp nest inside the soffit, right above the front door. Every visitor got buzzed. Ridgeline removed it within hours of our call. Same-day service made a real difference." },
      { name: "Elif Z.", textTemplate: "Called Ridgeline after a yellowjacket stung our dog near the garden shed. They found an underground nest three meters from the shed door and treated it that evening. Dog's fine, nest is gone." },
    ],
    faqPool: [
      { questionTemplate: "When is wasp season in {city}?", answerTemplate: "Wasp activity in {city} runs from late May through October, peaking in August and September when colonies reach maximum size. Early-season nest removal (June–July) is easiest because colonies are still small." },
      { questionTemplate: "Are wasp stings dangerous?", answerTemplate: "For most people, stings cause localized pain and swelling. For those with venom allergies, a single sting can trigger anaphylaxis — a life-threatening reaction. If anyone in your household is allergic, treat wasp nests as urgent." },
      { questionTemplate: "Can I remove a wasp nest myself in {city}?", answerTemplate: "We strongly advise against it. Disturbing a nest triggers defensive behavior — wasps can sting repeatedly and release alarm pheromones that recruit more attackers. Professional removal uses fast-acting products applied from safe distances." },
      { questionTemplate: "How quickly can Ridgeline remove a wasp nest in {city}?", answerTemplate: "Most {city} wasp calls are scheduled within {responseTime}. For nests near doorways, play areas, or households with allergic members, we prioritize same-day service." },
      { questionTemplate: "Do wasps reuse old nests in {city}?", answerTemplate: "Wasps don't reuse old nests, but new queens often build near previous nest sites. Removing the old nest and treating the area with a deterrent reduces the chance of new colonies establishing in the same spot." },
    ],
    cityModifiers: [
      // Group 0 — older urban cores
      {
        serviceOverrides: {
          0: "We locate all active nests on the property — under eaves, inside wall cavities, underground, and in trees. Older homes with cedar soffits and open gable returns harbour more hidden nests than modern builds — we check every cavity and junction.",
          3: "Applied in early spring before queens establish new colonies. On older homes with multiple eave returns and decorative trim, preventive coverage requires 30–40% more product than modern flat-fascia designs.",
        },
        stepOverrides: {
          0: "We identify every active nest on the property. Older homes with complex rooflines, dormers, and decorative gables offer more nesting sites — a single Victorian-era property can harbour 4–6 nests simultaneously.",
          3: "Residual treatment on eaves, soffits, and overhangs discourages new nest construction. On older homes, we extend treatment to porch ceilings, gable returns, and window trim where queens shelter in spring.",
        },
      },
      // Group 1 — suburban mix
      {
        serviceOverrides: {
          1: "Nests are treated with fast-acting insecticide and removed once activity stops. In suburban properties with large backyards, underground nests in garden beds and lawn areas are as common as aerial nests under eaves.",
          4: "Aggressive wasp activity near doorways, play areas, or allergic household members is prioritized. In suburban neighbourhoods with play structures and pools, we offer same-day emergency response.",
        },
        stepOverrides: {
          1: "Fast-acting insecticide is applied directly to the nest. Underground nests — common in suburban gardens and lawns — are treated through targeted injection into the nest entrance.",
          4: "We check for new activity at 2-week intervals through September. Suburban properties with fruit trees, gardens, and outdoor dining areas attract wasps from a 500-metre radius and may need additional applications.",
        },
      },
      // Group 2 — newer suburbs + Alberta
      {
        serviceOverrides: {
          0: "We locate all active nests across the property. In newer subdivisions, wasps frequently build inside unfinished soffits, behind vinyl siding J-channels, and in gaps around builder-grade vent caps — areas that look sealed but aren't.",
          2: "Residual treatment along eaves, soffits, and overhangs discourages nest construction. In newer builds with vinyl and aluminum exteriors, we treat J-channel gaps and vent surrounds that serve as hidden nesting cavities.",
        },
        stepOverrides: {
          0: "We identify every active nest. In newer communities with ongoing construction, disturbed soil drives yellowjackets into residential yards — underground nests are found in 40% of our new-subdivision wasp calls.",
          3: "Residual treatment on eaves, soffits, and overhangs discourages new nest construction. On newer builds, we pay special attention to ridge vent openings and soffit vents with plastic screens that wasps chew through.",
        },
      },
      // Group 3 — mixed development
      {
        serviceOverrides: {
          1: "Nests are treated with fast-acting insecticide and removed once activity stops. In mixed residential-commercial areas, we coordinate treatment timing to minimise exposure to foot traffic and neighbouring tenants.",
          4: "Aggressive wasp activity near doorways, walkways, or shared amenity areas is prioritized for same-day service. Multi-tenant properties get a coordinated treatment plan that covers all common areas.",
        },
        stepOverrides: {
          2: "Once activity stops, accessible nests are physically removed. In multi-unit and mixed-use properties, we remove all nests rather than leaving dead nests in place — occupants in shared buildings prefer visual confirmation.",
          3: "Residual treatment on eaves, soffits, and overhangs discourages new nest construction. Properties near restaurants and food retailers get extended coverage around waste and loading areas.",
        },
      },
    ],
    metaDescTemplates: [
      "Wasp control in {city} — safe nest removal, perimeter treatment, and seasonal prevention. PMRA-licensed. Serving {nbr1}, {nbr2} & surrounding areas.",
      "Ridgeline Pest Defence removes wasp nests in {city} safely and applies preventive treatments for the full season. Same-day emergency service available. 12-month guarantee.",
      "Wasp nests in {city}? Fast-acting treatment, safe removal, and a preventive barrier to stop rebuilding. Serving {nbr1} and {nbr2}. Guaranteed results.",
      "Professional wasp control in {city}. We locate every nest — under eaves, in walls, underground — and treat them all. Seasonal prevention included. Book your inspection.",
    ],
    localChallengesClosings: [
      "Ridgeline Pest Defence provides safe wasp removal in {city} — fast-acting treatment, nest removal, and seasonal prevention backed by a 12-month guarantee.",
      "Our {city} technicians locate and treat every nest on your property. Emergency response available. 12-month Zero-Comeback Guarantee on every treatment.",
      "Ridgeline has handled {city} wasp problems since 2015. Same-day service for urgent situations. Results guaranteed for 12 months.",
    ],
  },

  "hornet-control": {
    displayName: "Hornet Control",
    pestLabel: "Hornets",
    pestLower: "hornets",
    isCommercial: false,
    pestPageSlug: "wasps-hornets",
    cities: hornet4,
    services: [
      { name: "Species Identification", description: "Bald-faced hornets and European hornets require different approaches. Correct identification determines the treatment and safety protocol." },
      { name: "Professional Nest Removal", description: "Hornet nests — often the size of a basketball or larger — are treated with fast-acting insecticide and removed by trained technicians in protective equipment." },
      { name: "Safety Perimeter", description: "We establish a safe zone around the nest before treatment. Bald-faced hornets are aggressive defenders and can sting from 2+ meters when disturbed." },
      { name: "Preventive Treatment", description: "Residual application on eaves, soffits, and overhangs discourages queens from establishing new nests the following season." },
      { name: "Emergency Response", description: "Hornet nests near high-traffic areas are treated on a priority basis. Same-day and next-day service available for urgent situations." },
    ],
    treatmentSteps: [
      { step: "Identify & Assess", description: "We identify the species (bald-faced or European) and assess nest size, location, and proximity to occupied areas." },
      { step: "Establish Safety Perimeter", description: "A safe zone is set before treatment begins. Bald-faced hornets aggressively defend nests — professional equipment and training are essential." },
      { step: "Treat & Remove", description: "Fast-acting insecticide is applied directly to the nest. Once activity ceases, the nest is physically removed." },
      { step: "Preventive Application", description: "Residual treatment on nearby surfaces discourages future nest construction in the same area." },
      { step: "Follow-Up Check", description: "We return to confirm no secondary nests exist and that the treated area is clear." },
    ],
    surprisingFact: "Bald-faced hornets can spray venom into the eyes of perceived threats from over 2 meters away. Their nests can grow to the size of a basketball by late summer.",
    introTemplate: "Hornet activity in {city} centres on bald-faced hornets, which build large grey paper nests in trees, under eaves, and on structures across {nbr1} and {nbr2}. These nests can house 400+ workers and the colony aggressively defends a 2-metre radius.",
    serviceIntro: "Ridgeline Pest Defence handles hornet removal with professional-grade protective equipment and fast-acting treatments. We don't recommend DIY removal — hornets are significantly more aggressive than common wasps.",
    testimonialPool: [
      { name: "Tony S.", textTemplate: "Massive bald-faced hornet nest in the tree by our front door. Ridgeline suited up, treated it at dusk, and removed it the next morning. Couldn't believe the size once it was down." },
      { name: "Sandra W.", textTemplate: "Hornets nesting under our second-floor overhang. Two storeys up, aggressive colony. Ridgeline handled it safely with zero fuss. Professional from start to finish." },
      { name: "Chris A.", textTemplate: "European hornets buzzing around our patio light every evening. Ridgeline found the nest in a tree hollow nearby and treated it. No more hornets at dinner." },
      { name: "Janet R.", textTemplate: "Hornet nest on the shed we use daily. Ridgeline treated it within hours of our call. They warned us not to approach it first — good advice given how aggressive the colony was." },
      { name: "Marco B.", textTemplate: "Bald-faced hornet nest the size of a basketball hanging from our eaves trough. Ridgeline treated it at dusk when the colony was inside and removed it the next morning. Professional and calm." },
      { name: "Brigitte F.", textTemplate: "European hornets kept flying into our house through a gap in the attic vent. Ridgeline found the nest in a tree hollow 10 meters away, treated it, and sealed the vent. No more hornets inside." },
      { name: "Cormac J.", textTemplate: "We tried to knock down a small hornet nest with a broom and they swarmed. Called Ridgeline after three stings. They treated the nest properly and removed it. Lesson learned — call the professionals first." },
      { name: "Svetlana K.", textTemplate: "Hornet nest attached to the underside of our deck. We couldn't use the patio for weeks. Ridgeline suited up and removed it safely. Back to barbecuing the same evening." },
      { name: "Bogdan M.", textTemplate: "Bald-faced hornets built a nest in the hedge by our front walkway. Every delivery person was getting buzzed. Ridgeline treated and removed it on a same-day call." },
      { name: "Zara Q.", textTemplate: "We spotted a hornet nest forming on the garage eave in early June — still small. Ridgeline removed it before it grew. The technician said early removal is ten times easier. Glad we called when we did." },
      { name: "Ingrid V.", textTemplate: "Hornets nesting in the wall cavity behind the exterior cladding. We could hear them buzzing through the drywall. Ridgeline injected treatment through a small hole and the buzzing stopped within an hour." },
      { name: "Kwame W.", textTemplate: "Large hornet nest in a tree directly over the kids' sandbox. Ridgeline removed it at dusk while the kids were inside. Fast, professional, and they cleaned up the debris from the ground." },
      { name: "Owen T.", textTemplate: "Two hornet nests on the same property — one on the chimney and one under the soffit. Ridgeline treated both in a single visit and applied deterrent to both areas. No rebuilding the following year." },
    ],
    faqPool: [
      { questionTemplate: "Are hornets dangerous in {city}?", answerTemplate: "Yes. Bald-faced hornets are significantly more aggressive than common wasps and defend their nests vigorously. They can sting repeatedly and spray venom at perceived threats. Nests near high-traffic areas should be treated promptly by professionals." },
      { questionTemplate: "What's the difference between hornets and wasps in {city}?", answerTemplate: "Bald-faced hornets are larger (15–20 mm), black with white facial markings, and build large enclosed paper nests. Yellowjackets are smaller, yellow and black, and often nest underground. Hornets are more aggressive and require more careful removal." },
      { questionTemplate: "When should I call about a hornet nest in {city}?", answerTemplate: "Call as soon as you spot the nest. Early-season nests (June) are smaller and easier to treat. By August, a bald-faced hornet nest can house 400+ workers and require significantly more caution during removal." },
      { questionTemplate: "Can I remove a hornet nest myself?", answerTemplate: "We strongly advise against it. Bald-faced hornets attack in swarms when their nest is disturbed and can sting through light clothing. Professional removal uses fast-acting products, protective suits, and experience." },
    ],
    cityModifiers: [
      // Group 0 — toronto (dense urban)
      {
        serviceOverrides: {
          0: "Bald-faced hornets and European hornets require different approaches. In dense urban areas, nests attached to occupied structures near walkways and transit stops create elevated public safety risks — we assess threat level before selecting the protocol.",
          3: "Residual application on eaves, soffits, and overhangs discourages queens from establishing new nests. On homes with complex rooflines and multiple gable returns, preventive treatment covers every sheltered surface where queens overwinter.",
        },
        stepOverrides: {
          0: "We identify the species and assess nest size, location, and proximity to occupied areas. Urban nests near high-traffic walkways and shared outdoor spaces require coordinated timing to minimise public exposure during treatment.",
          3: "Residual treatment on nearby surfaces discourages future nest construction. On urban properties with limited setback from sidewalks, we apply deterrents to all eave-facing surfaces within 3 meters of pedestrian areas.",
        },
      },
      // Group 1 — hamilton (industrial-era)
      {
        serviceOverrides: {
          1: "Hornet nests on industrial-era properties — warehouses, older mixed-use buildings, and heritage homes — often reach larger sizes before detection. Trained technicians in full protective equipment treat nests up to basketball size.",
          4: "Hornet nests near loading docks, parking areas, and heritage storefronts are treated on a priority basis. Same-day and next-day service available for urgent situations in high-traffic zones.",
        },
        stepOverrides: {
          1: "A safe zone is established before treatment. On larger properties with industrial outbuildings or detached garages, we check secondary structures — hornets build in any sheltered overhang regardless of building use.",
          3: "Residual treatment on nearby surfaces discourages future nest construction. On mixed-use and industrial-era properties, we extend coverage to loading docks, garage entries, and fence-mounted lighting where queens shelter.",
        },
      },
      // Group 2 — london (tree-lined residential)
      {
        serviceOverrides: {
          0: "Bald-faced hornets and European hornets require different approaches. In tree-lined residential areas, nests suspended 3–5 meters up in mature canopies are common — we use extended-reach application equipment to treat without climbing.",
          2: "We establish a safe zone around the nest before treatment. Properties near parks and urban forests face higher hornet pressure — bald-faced hornets forage up to 400 meters from the nest.",
        },
        stepOverrides: {
          0: "We identify the species and assess nest size, location, and proximity to occupied areas. In areas with mature tree cover, aerial nests are harder to spot — we check canopy intersections and branch forks within 10 meters of the structure.",
          2: "Fast-acting insecticide is applied directly to the nest. Once activity ceases, accessible nests are physically removed. Tree-suspended nests are treated from the ground using pressurised application equipment.",
        },
      },
      // Group 3 — niagara (tourism-adjacent)
      {
        serviceOverrides: {
          1: "Hornet nests in the Niagara region can reach exceptional size in warm summers. Trained technicians in full protective equipment treat nests containing 400+ workers — the largest we removed recently measured 45 cm across.",
          3: "Residual application on eaves, soffits, and overhangs discourages queens from establishing new nests. In tourist-adjacent areas, we apply preventive treatment before peak season to avoid disruption during high-traffic months.",
        },
        stepOverrides: {
          1: "A safe zone is established before treatment. In areas with outdoor tourism infrastructure — patios, trail heads, vineyard tasting rooms — we schedule treatment for early morning or dusk when visitor traffic is minimal.",
          2: "Fast-acting insecticide is applied directly to the nest. Once activity ceases, the nest is physically removed and disposed of off-site. In tourist and hospitality zones, we ensure no visible remnants remain.",
        },
      },
    ],
    metaDescTemplates: [
      "Hornet removal in {city} — bald-faced and European hornets removed safely by trained technicians. Same-day emergency service. Serving {nbr1} and {nbr2}.",
      "Ridgeline Pest Defence handles hornet nest removal in {city} with professional-grade protective equipment. Nests up to 400+ workers treated safely. 12-month guarantee.",
      "Dangerous hornet nest in {city}? Do not approach it. Ridgeline's trained technicians remove bald-faced and European hornet nests with fast-acting treatment. Call for same-day service.",
    ],
    localChallengesClosings: [
      "Ridgeline Pest Defence removes hornet nests in {city} safely — professional equipment, trained technicians, and preventive treatment backed by a 12-month guarantee.",
      "Our {city} technicians handle bald-faced and European hornets with full protective equipment. Same-day emergency service available. 12-month guarantee.",
      "Ridgeline has removed hornet nests across {city} since 2015. Do not attempt DIY removal. Call us for safe, guaranteed treatment.",
    ],
  },

  "commercial-wasp-control": {
    displayName: "Commercial Wasp Control",
    pestLabel: "Wasps",
    pestLower: "wasps",
    isCommercial: true,
    pestPageSlug: "wasps-hornets",
    cities: commercialWasp1,
    services: [
      { name: "Commercial Property Assessment", description: "We survey loading docks, waste areas, outdoor dining spaces, signage, and rooftop equipment for active and potential nest sites." },
      { name: "Multi-Nest Removal", description: "Commercial properties often have multiple nests across large structures. We treat and remove all nests in a single coordinated visit." },
      { name: "Loading Dock & Waste Area Treatment", description: "These high-activity zones attract wasps with food waste and shelter. Residual treatments and sanitation recommendations reduce attractants." },
      { name: "Outdoor Dining Protection", description: "Perimeter treatments and nest deterrents keep patios, terraces, and outdoor service areas safe for customers and staff." },
      { name: "Scheduled Maintenance Program", description: "Monthly or bi-weekly inspections during wasp season catch new nests early — before they become a safety or liability issue." },
    ],
    treatmentSteps: [
      { step: "Site Survey", description: "We inspect the entire property — roofline, loading docks, waste areas, signage, outdoor dining, and parking structures." },
      { step: "Priority Nest Treatment", description: "Active nests near customer and staff areas are treated first with fast-acting insecticide." },
      { step: "Full Property Treatment", description: "Remaining nests across the facility are treated and removed. Underground and cavity nests are addressed through injection." },
      { step: "Preventive Application", description: "Residual deterrents are applied to eaves, overhangs, and structural ledges across the property." },
      { step: "Maintenance Schedule", description: "Regular inspections during wasp season (May–October) catch new nests before they mature. Documentation provided for compliance records." },
    ],
    surprisingFact: "A commercial property with outdoor waste areas can attract wasps from a 500-metre radius. One untreated nest near a patio can result in customer injury and significant liability.",
    introTemplate: "Toronto's commercial properties — restaurants, warehouses, office complexes, and retail centres across {nbr1}, {nbr2}, and {nbr3} — face wasp pressure from May through October. Untreated nests near customer areas create liability and health risks.",
    serviceIntro: "Ridgeline Pest Defence provides scheduled commercial wasp management with documentation for compliance records. We treat after hours to minimize business disruption.",
    testimonialPool: [
      { name: "Michael T.", textTemplate: "Multiple wasp nests across our warehouse loading docks. Ridgeline treated all of them in a single evening visit with zero disruption to operations. Signed up for their monthly maintenance plan." },
      { name: "Sandra L.", textTemplate: "Wasps near our restaurant patio were driving away customers. Ridgeline removed four nests and applied a seasonal deterrent. No complaints since — and that covers our busiest months." },
      { name: "Kevin R.", textTemplate: "Our office park had wasp nests on three buildings. Ridgeline coordinated treatment across all structures in one session. Property management was impressed with the efficiency." },
      { name: "Yuki C.", textTemplate: "Yellowjackets near the loading dock kept getting into the warehouse. Ridgeline found the nest under a concrete pad and treated it after hours. No downtime, no disruption to the morning shift." },
      { name: "Tariq G.", textTemplate: "Wasps nesting in the signage above our storefront. Customers were complaining. Ridgeline removed the nest after closing and applied deterrent to the sign frame. Clean entrance the next morning." },
      { name: "Cormac J.", textTemplate: "Our daycare centre had wasps near the outdoor play area. Ridgeline came out the same day and treated two nests — one under the eave and one in a ground burrow. Zero disruption to the children." },
      { name: "Amara L.", textTemplate: "Wasps in the outdoor dining area of our café every August. Ridgeline set up a seasonal maintenance plan — monthly inspections from May to October. First complaint-free patio season." },
      { name: "Dina N.", textTemplate: "Paper wasps kept building nests on our retail storefront awning. Ridgeline removed them and applied a deterrent that lasted the entire season. Our staff felt much safer opening and closing." },
      { name: "Harpreet P.", textTemplate: "Wasp activity around our commercial waste bins was creating a safety issue for our janitorial staff. Ridgeline relocated the bait stations and treated the nesting sites nearby. Workers' comp concern resolved." },
      { name: "Luca R.", textTemplate: "Our hotel had guest complaints about wasps near the pool area. Ridgeline found three nests on adjacent structures and removed them all in one evening visit. Documentation provided for our liability file." },
      { name: "Ingrid V.", textTemplate: "Hornets built a nest on our commercial HVAC unit on the roof. Ridgeline accessed it safely, treated the colony, and removed the nest. Provided the service report our facilities manager needed for compliance." },
      { name: "Elif Z.", textTemplate: "Wasps getting into the kitchen exhaust vent of our restaurant. Ridgeline sealed the vent gap and removed a nest that had formed inside the ductwork. Health inspector was satisfied at the next visit." },
    ],
    faqPool: [
      { questionTemplate: "Do you provide after-hours wasp treatment for Toronto businesses?", answerTemplate: "Yes. Most commercial wasp treatments are performed after business hours or early morning to minimize disruption to customers, staff, and operations." },
      { questionTemplate: "How often should a Toronto commercial property be inspected for wasps?", answerTemplate: "During wasp season (May–October), we recommend bi-weekly or monthly inspections for commercial properties. This catches new nests early — a nest discovered at 50 workers is far easier to treat than one at 5,000." },
      { questionTemplate: "Can wasps create liability for Toronto businesses?", answerTemplate: "Yes. A customer or employee stung on your property can result in medical costs and legal claims. Properties with outdoor dining, public walkways, or play areas have particular exposure. Proactive nest management reduces this risk." },
      { questionTemplate: "Do you provide documentation for health and safety compliance?", answerTemplate: "Yes. Every treatment includes a detailed service report documenting nest locations, products used, and recommendations. These records satisfy most municipal and corporate compliance requirements." },
    ],
    cityModifiers: [
      // Group 0 — downtown Toronto commercial core
      {
        serviceOverrides: {
          0: "We survey loading docks, waste compactors, outdoor dining spaces, signage, and rooftop HVAC equipment across Toronto's commercial districts. Downtown properties with multiple exposure zones require systematic coverage across every floor and facade.",
          2: "Loading docks and waste staging areas in Toronto's core attract wasps from a 500-metre radius. Residual treatments combined with waste-management recommendations cut attractant levels and reduce new nest establishment by up to 70%.",
        },
        stepOverrides: {
          0: "We inspect the entire property — roofline, loading docks, waste areas, signage, outdoor dining, and parking structures. Toronto's high-density commercial zones often have nests on adjacent buildings contributing to your wasp problem.",
          3: "Residual deterrents are applied to eaves, overhangs, and structural ledges across the property. Downtown commercial buildings with multiple tenants and shared exteriors receive coordinated coverage.",
        },
      },
      // Group 1 — mixed-use commercial
      {
        serviceOverrides: {
          1: "Commercial properties with multiple building faces often have nests on signage brackets, canopy supports, and rooftop ductwork. We treat and remove all nests in a single coordinated after-hours visit to minimise tenant disruption.",
          3: "Outdoor dining terraces, rooftop patios, and ground-floor café seating require proactive perimeter treatment before June. One nest near a customer area can result in liability claims — early prevention costs a fraction of reactive treatment.",
        },
        stepOverrides: {
          1: "Active nests near customer and staff areas are treated first. In Toronto's mixed-use buildings, we coordinate with neighbouring tenants and property managers to treat shared exterior surfaces simultaneously.",
          4: "Regular inspections during wasp season catch new nests before they mature. Documentation is provided for compliance records. Properties with outdoor hospitality areas are inspected bi-weekly during peak months.",
        },
      },
      // Group 2 — industrial/warehouse
      {
        serviceOverrides: {
          0: "We survey loading docks, waste areas, outdoor dining spaces, signage, and rooftop equipment. Industrial and warehouse properties near Toronto's port lands face particular pressure from yellowjackets attracted to organic waste streams.",
          4: "Monthly or bi-weekly inspections during wasp season catch new nests at 50 workers rather than 5,000. Each visit includes a service report with nest locations, products used, and recommendations for your compliance file.",
        },
        stepOverrides: {
          2: "Remaining nests across the facility are treated and removed. Underground nests in parking areas and landscaped medians — common in commercial properties with green space — are addressed through injection.",
          3: "Residual deterrents are applied to eaves, overhangs, structural ledges, and signage brackets. Properties with extensive exterior surface area receive zone-based treatment to ensure complete coverage.",
        },
      },
      // Group 3 — hospitality/entertainment
      {
        serviceOverrides: {
          2: "Loading docks attract wasps with food waste, organic residue, and shelter from wind. We treat the dock area with residual insecticide, recommend waste-bin placement changes, and install bin liners that reduce attractants.",
          3: "Outdoor dining areas in Toronto's entertainment districts require pre-season treatment starting in May. We apply non-staining deterrents to patio overhangs, railing caps, and umbrella brackets to prevent nest establishment.",
        },
        stepOverrides: {
          0: "We inspect the entire property including rooftop mechanical equipment that is often overlooked. HVAC units, exhaust hoods, and satellite dishes create sheltered nesting sites that are only discovered during professional inspections.",
          4: "Regular inspections during wasp season catch new nests early. For Toronto's hospitality properties, we provide weekly monitoring during July–September peak season with same-day treatment of any new nests.",
        },
      },
    ],
    metaDescTemplates: [
      "Commercial wasp control in Toronto — multi-nest removal, loading dock treatment, and scheduled maintenance. After-hours service. Serving {nbr1}, {nbr2} & surrounding areas.",
      "Ridgeline Pest Defence provides commercial wasp management across Toronto. Outdoor dining protection, loading dock treatment, and compliance documentation. Scheduled maintenance programs available.",
      "Wasp nests on your Toronto commercial property? Ridgeline removes all nests in a single coordinated visit. After-hours treatment. Monthly maintenance plans for ongoing protection.",
    ],
    localChallengesClosings: [
      "Ridgeline Pest Defence provides scheduled commercial wasp management in {city} — coordinated nest removal, preventive treatment, and compliance documentation.",
      "Our {city} commercial team treats after hours with zero business disruption. Monthly maintenance programs catch new nests before they become a liability.",
      "Ridgeline has protected {city} commercial properties from wasps since 2015. One coordinated visit handles every nest. Documentation provided for compliance records.",
    ],
  },

  "termite-control": {
    displayName: "Termite Control",
    pestLabel: "Termites",
    pestLower: "termites",
    isCommercial: false,
    pestPageSlug: "termites",
    cities: standard15,
    services: [
      { name: "Termite Inspection & Identification", description: "We check foundation walls, crawl spaces, and wood-to-soil contact points for mud tubes, frass, and live colonies. Species ID determines the treatment protocol." },
      { name: "Liquid Soil Treatment", description: "A continuous chemical barrier is applied around the foundation perimeter. The termiticide bonds to soil particles and remains effective for years, blocking subterranean access." },
      { name: "Bait Station Installation", description: "In-ground monitoring stations placed every 3 meters around the foundation. Termites feed on the bait and carry it back to the colony, eliminating the queen." },
      { name: "Wood Treatment & Injection", description: "Borates are applied directly to exposed wood in crawl spaces, basements, and attics. Foam injection reaches hidden galleries inside wall cavities." },
      { name: "Annual Monitoring & Guarantee", description: "Bait stations are inspected quarterly. Any renewed activity triggers immediate re-treatment at no additional cost — backed by our 12-month Zero-Comeback Guarantee." },
    ],
    treatmentSteps: [
      { step: "Inspect & Assess", description: "We probe foundation walls, sill plates, and wood framing for mud tubes, hollow wood, and live termite activity. Moisture meters identify high-risk zones." },
      { step: "Soil Barrier Application", description: "Liquid termiticide is trenched and rodded into the soil around the foundation perimeter, creating an unbroken chemical barrier." },
      { step: "Bait Station Placement", description: "In-ground stations are installed at 3-metre intervals around the structure. Active stations are loaded with slow-acting bait that targets the entire colony." },
      { step: "Direct Wood Treatment", description: "Exposed framing in crawl spaces and basements is treated with borate solution. Foam injection reaches concealed galleries behind finished walls." },
      { step: "Monitor & Guarantee", description: "Quarterly station checks confirm colony elimination. Covered by our 12-month Zero-Comeback Guarantee." },
    ],
    surprisingFact: "A mature subterranean termite colony consumes roughly 5 kg of wood per year. Because they work inside the wood, damage can go unnoticed for years until structural members are seriously compromised.",
    introTemplate: "{city}'s clay-heavy soils and older housing stock create ideal conditions for subterranean termites. Properties near {nbr1} and {nbr2} with wood-to-soil contact, aging foundations, or poor drainage are at highest risk.",
    serviceIntro: "Ridgeline Pest Defence uses a dual approach — liquid soil barriers stop active infestations while bait stations eliminate the colony from within.",
    testimonialPool: [
      { name: "David W.", textTemplate: "Found mud tubes on the basement wall. Ridgeline confirmed subterranean termites and installed a full soil barrier the same week. Quarterly monitoring gives us peace of mind." },
      { name: "Patricia K.", textTemplate: "Our home inspector found termite damage in the crawl space. Ridgeline treated the soil, injected the affected framing, and set up bait stations. No new activity at the 6-month check." },
      { name: "James R.", textTemplate: "Termite swarmers in the basement every April. Ridgeline traced the colony to the south foundation wall, treated the soil, and installed monitoring stations. First spring without swarmers." },
      { name: "Angela T.", textTemplate: "Soft spots in the hardwood floor near the front door. Ridgeline confirmed termite damage, treated the subfloor, and installed a perimeter barrier. Caught it before structural damage." },
      { name: "Robert C.", textTemplate: "Our century home had termite activity in the sill plate. Ridgeline treated every wood-to-soil contact point and set up quarterly monitoring. The technician found 8 entry zones we never knew existed." },
      { name: "Mona S.", textTemplate: "Discarded wings on the windowsill every spring. Ridgeline identified them as termite swarmers and traced the colony to the foundation. Full soil treatment and bait stations installed in one day." },
    ],
    faqPool: [
      { questionTemplate: "How do I know if I have termites in my {city} home?", answerTemplate: "Look for mud tubes on foundation walls, hollow-sounding wood, discarded wings near windows, and small piles of frass (wood-coloured pellets). Our 47-point inspection uses probing and moisture meters to detect hidden activity." },
      { questionTemplate: "How quickly can you treat a termite problem in {city}?", answerTemplate: "Most {city} termite inspections are available within {responseTime}. Treatment typically begins within 48 hours of confirmed activity." },
      { questionTemplate: "Are termite treatments safe for my family and pets?", answerTemplate: "Yes. Soil treatments are applied outside around the foundation. Bait stations are tamper-resistant and installed below ground. All products are Health Canada–approved and applied by PMRA-licensed technicians." },
      { questionTemplate: "How long does termite treatment last?", answerTemplate: "Liquid soil barriers remain effective for 5–10 years depending on the product. Bait stations are monitored quarterly and refreshed as needed. Our 12-month guarantee covers any re-treatment required." },
      { questionTemplate: "Can termites cause structural damage to {city} homes?", answerTemplate: "Yes. Subterranean termites consume wood from the inside out. By the time damage is visible, structural members may be significantly weakened. Early detection through professional inspection is critical." },
    ],
    cityModifiers: [
      {
        serviceOverrides: {
          0: "In older neighbourhoods with stone or block foundations, we check every mortar joint, sill plate, and wood-to-masonry contact point. Decades of settling create cracks that termites exploit.",
          3: "Borates are applied to exposed wood in crawl spaces and basements. In pre-war homes with balloon framing, foam injection reaches hidden galleries that extend from foundation to attic.",
        },
        stepOverrides: {
          0: "We probe foundation walls, sill plates, and wood framing for mud tubes, hollow wood, and live activity. Older homes with rubble-stone foundations require extra attention at every mortar gap.",
          3: "Exposed framing in crawl spaces and basements is treated with borate solution. Homes with original wood lath require foam injection behind plaster walls to reach concealed galleries.",
        },
      },
      {
        serviceOverrides: {
          1: "A continuous chemical barrier is trenched around the foundation perimeter and rodded beneath porches, stoops, and attached garages — common termite entry points in suburban layouts.",
          4: "Bait stations are inspected quarterly through spring and summer. In newer subdivisions where grading directs water toward foundations, we add extra monitoring at downspout discharge points.",
        },
        stepOverrides: {
          1: "Liquid termiticide is trenched and rodded into the soil around the full foundation perimeter, including beneath attached garages and front stoops where wood framing contacts the slab.",
          2: "In-ground stations are installed at 3-metre intervals. Properties with large decks, porches, or landscape ties get additional stations at every wood-to-soil contact point.",
        },
      },
      {
        serviceOverrides: {
          2: "In-ground monitoring stations placed every 3 meters around the foundation. Properties near ravines or with mature trees get extra stations along fence lines where root systems create moisture pathways.",
          4: "Quarterly station checks continue year-round. Spring swarm season triggers additional inspections in April and May to catch colony expansion before it reaches your structure.",
        },
        stepOverrides: {
          0: "We probe foundation walls, sill plates, and wood framing for mud tubes, hollow wood, and live activity. Properties backing onto green spaces face higher pressure from colonies nesting in tree roots and stumps.",
          4: "Quarterly station checks confirm colony elimination. Properties with prior termite history receive annual re-inspection of previously affected areas to catch any resurgence early.",
        },
      },
    ],
    metaDescTemplates: [
      "Termite control in {city} — soil barriers, bait stations, and 12-month guarantee. PMRA-licensed. Serving {nbr1}, {nbr2} & area.",
      "Subterranean termites in {city}? Ridgeline Pest Defence combines liquid soil treatment with colony-eliminating bait stations. 47-point inspection included.",
      "Professional termite treatment in {city}. Soil barriers, wood injection, and quarterly monitoring. Serving {nbr1} and {nbr2}.",
      "Protect your {city} home from termite damage. Ridgeline's dual-barrier approach stops active colonies and prevents re-infestation. Guaranteed 12 months.",
    ],
    localChallengesClosings: [
      "Ridgeline Pest Defence brings proven termite treatment to {city} — soil barriers, bait stations, and quarterly monitoring backed by a 12-month Zero-Comeback Guarantee.",
      "Our {city} technicians combine liquid barriers with colony-eliminating bait stations. 47-point inspection included. 12-month guarantee on every treatment.",
      "Ridgeline has protected {city} homes from termite damage since 2015. Dual-barrier approach with quarterly monitoring. Results guaranteed for 12 months.",
    ],
  },

  "spider-control": {
    displayName: "Spider Control",
    pestLabel: "Spiders",
    pestLower: "spiders",
    isCommercial: false,
    pestPageSlug: "spiders",
    cities: standard15,
    services: [
      { name: "Interior & Exterior Inspection", description: "We identify active species, web clusters, egg sacs, and entry points. Species identification matters — treatment for cellar spiders differs from brown recluse protocols." },
      { name: "Web Removal & Egg Sac Destruction", description: "All visible webs and egg sacs are physically removed from eaves, window frames, basement corners, and attic spaces before chemical treatment begins." },
      { name: "Perimeter Barrier Treatment", description: "Residual insecticide is applied around the foundation, window frames, door frames, and utility penetrations. This kills spiders on contact and deters new entry for weeks." },
      { name: "Prey Reduction Program", description: "Spiders follow their food. We treat for the insects that attract spiders — reducing flies, moths, and other prey eliminates the reason spiders stay." },
      { name: "Follow-Up & Prevention", description: "Return visits confirm reduced activity. We seal gaps around windows, vents, and pipes that serve as spider highways into your living space." },
    ],
    treatmentSteps: [
      { step: "Inspect & Identify", description: "We map web locations, identify species, and locate egg sacs. Wolf spiders, cellar spiders, and house spiders each require different approaches." },
      { step: "Physical Removal", description: "All webs, egg sacs, and debris are removed from eaves, basement corners, garage rafters, and window frames." },
      { step: "Barrier Application", description: "Residual insecticide is applied around the foundation perimeter, window frames, door frames, and exterior light fixtures." },
      { step: "Prey Insect Treatment", description: "We treat for flies, moths, and other prey insects that attract and sustain spider populations inside the home." },
      { step: "Seal & Monitor", description: "Gaps around windows, vents, and pipes are sealed. Follow-up visits confirm reduced activity. Covered by our 12-month Zero-Comeback Guarantee." },
    ],
    surprisingFact: "A single wolf spider egg sac can contain over 100 spiderlings. Most house spiders produce multiple egg sacs per season — a small problem in spring becomes a large one by fall.",
    introTemplate: "{city}'s mix of mature trees, older homes, and seasonal temperature swings drives spiders indoors every fall. Properties near {nbr1} and {nbr2} with exterior lighting and garden beds see the heaviest activity.",
    serviceIntro: "Ridgeline Pest Defence targets both the spiders and the prey insects that sustain them. Reducing the food source is the only way to keep spider populations from rebuilding.",
    testimonialPool: [
      { name: "Jenny M.", textTemplate: "Spiders in every corner of the basement. Ridgeline removed all the webs, treated the perimeter, and found gaps around the dryer vent. First fall without cobwebs everywhere." },
      { name: "Raj P.", textTemplate: "Wolf spiders in the garage every night. Ridgeline treated the garage perimeter and sealed gaps under the door. They also treated for the crickets that were attracting the spiders. Problem solved." },
      { name: "Lisa H.", textTemplate: "Egg sacs in the window frames — we had hundreds of tiny spiders hatch one morning. Ridgeline removed every sac, treated the frames, and sealed the gaps. Haven't seen a repeat." },
      { name: "Omar K.", textTemplate: "Brown recluse concerns after finding unusual spiders in the crawl space. Ridgeline identified them as common house spiders but treated thoroughly anyway. Appreciated the honest ID." },
      { name: "Natalie C.", textTemplate: "Spiders dropping from the ceiling fan every evening. Ridgeline found they were entering through the attic access. Sealed the hatch, treated the attic, and no more surprises at dinner." },
      { name: "Derek F.", textTemplate: "Exterior of our house covered in webs every fall. Ridgeline did a full perimeter treatment and switched our porch lights to yellow bulbs that attract fewer insects. Huge difference." },
    ],
    faqPool: [
      { questionTemplate: "Why are there so many spiders in my {city} home in fall?", answerTemplate: "Spiders move indoors as temperatures drop and prey insects seek shelter. Exterior lighting attracts moths and flies, which in turn attract spiders. A perimeter treatment before September reduces fall migration significantly." },
      { questionTemplate: "Are spider treatments safe for pets in {city}?", answerTemplate: "Yes. Our perimeter treatments are applied to exterior surfaces and dry within 30–60 minutes. Interior treatments target cracks, corners, and voids where pets don't contact surfaces. All products are Health Canada–approved." },
      { questionTemplate: "How quickly can you respond to spider problems in {city}?", answerTemplate: "Most {city} spider appointments are available within {responseTime}. For unusual species or heavy infestations, we prioritize faster scheduling." },
      { questionTemplate: "Will killing spiders just bring more?", answerTemplate: "No. Spiders are territorial — removing them doesn't attract replacements. The key is reducing the prey insects that draw spiders to your property. Our treatment targets both." },
      { questionTemplate: "Do I have dangerous spiders in {city}?", answerTemplate: "Ontario has no established populations of brown recluse or black widow spiders. The most common species — house spiders, cellar spiders, and wolf spiders — are harmless. We still ID every species during inspection." },
    ],
    cityModifiers: [
      {
        serviceOverrides: {
          0: "In older neighbourhoods, gaps around original window frames, deteriorated weatherstripping, and unsealed utility penetrations create highways for spiders. We identify every entry point along with active web sites and egg sac locations.",
          3: "Older homes near mature trees attract more prey insects — moths, flies, and beetles that spiders feed on. We treat for the full prey spectrum, cutting the food source that sustains spider populations indoors.",
        },
        stepOverrides: {
          0: "We map web locations, identify species, and locate egg sacs. In older housing stock, basement-level windows and floor drains are common entry routes we check first.",
          4: "Gaps around original window frames, plumbing penetrations, and attic vents are sealed. Follow-up visits confirm activity reduction in previously high-traffic areas.",
        },
      },
      {
        serviceOverrides: {
          2: "Residual insecticide is applied around the foundation, window frames, and exterior light fixtures. Suburban homes with large yards and garden beds get extended perimeter coverage along fence lines and shed foundations.",
          4: "Return visits confirm reduced activity. In suburban areas where exterior lighting attracts prey insects from neighbouring properties, we recommend lighting modifications that reduce attractants by up to 60%.",
        },
        stepOverrides: {
          2: "Residual insecticide is applied around the full foundation perimeter, exterior light fixtures, and garage door frames. Properties with landscape beds abutting the house get extra coverage at mulch-to-siding junctions.",
          3: "We treat for flies, moths, and beetles attracted to exterior lighting and garden beds. Suburban properties with composting or fruit trees get targeted treatment of these high-attraction zones.",
        },
      },
      {
        serviceOverrides: {
          1: "All visible webs and egg sacs are removed from eaves, soffits, and exterior light fixtures. In newer builds, weep vents and J-channel gaps along siding are common web-building sites we clear thoroughly.",
          4: "Return visits confirm reduced activity. In newer subdivisions where construction disturbs ground-dwelling spiders, we extend monitoring through the first two fall seasons after move-in.",
        },
        stepOverrides: {
          1: "All webs, egg sacs, and debris are removed. Newer homes with vinyl siding have J-channel gaps and weep vents that harbour web-building spiders — we clear and treat every opening.",
          4: "Weep vents, J-channel gaps, and utility penetrations are sealed or screened. Properties in newer subdivisions with ongoing construction nearby get additional follow-up as disturbed spider populations redistribute.",
        },
      },
    ],
    metaDescTemplates: [
      "Spider control in {city} — web removal, perimeter treatment, and prey reduction. PMRA-licensed. Serving {nbr1}, {nbr2} & area.",
      "Spiders in your {city} home? Ridgeline Pest Defence targets spiders and the prey insects that sustain them. 47-point inspection included.",
      "Professional spider treatment in {city}. Perimeter barriers, egg sac removal, and prey reduction. Serving {nbr1} and {nbr2}.",
      "Keep spiders out of your {city} home. Ridgeline's dual approach eliminates active spiders and cuts the food source. Guaranteed 12 months.",
    ],
    localChallengesClosings: [
      "Ridgeline Pest Defence brings targeted spider treatment to {city} — perimeter barriers, prey reduction, and follow-up monitoring backed by a 12-month Zero-Comeback Guarantee.",
      "Our {city} technicians combine physical removal with residual perimeter treatment. 47-point inspection included. 12-month guarantee on every service.",
      "Ridgeline has solved {city} spider problems since 2015. We target the spiders and the prey that sustains them. Results guaranteed for 12 months.",
    ],
  },

  "raccoon-removal": {
    displayName: "Raccoon Removal",
    pestLabel: "Raccoons",
    pestLower: "raccoons",
    isCommercial: false,
    pestPageSlug: "raccoons",
    cities: standard15,
    services: [
      { name: "Attic & Roof Inspection", description: "We check soffits, roof vents, plumbing stacks, and fascia boards for entry points. Thermal imaging and sound detection locate nests in insulation." },
      { name: "One-Way Door Installation", description: "Humane one-way doors allow raccoons to exit but prevent re-entry. Compliant with Ontario Fish and Wildlife Conservation Act regulations." },
      { name: "Entry Point Exclusion", description: "Every soffit gap, damaged vent, and roof-edge vulnerability is sealed with galvanized steel mesh and metal flashing raccoons cannot tear through." },
      { name: "Attic Restoration", description: "Contaminated insulation is removed, surfaces sanitized, and new insulation installed. We eliminate raccoon roundworm (Baylisascaris) risk from fecal matter." },
      { name: "Follow-Up Monitoring", description: "Return visits confirm the animals have vacated and no new entry attempts have been made. Sealed points are inspected for integrity." },
    ],
    treatmentSteps: [
      { step: "Inspect & Locate", description: "We inspect the roofline, soffits, vents, and attic space to find every entry point and confirm whether babies are present — timing removal around denning season." },
      { step: "Install One-Way Doors", description: "Humane exclusion devices are installed at active entry points. Raccoons can leave but cannot return. Ontario-compliant and stress-free for the animals." },
      { step: "Seal All Entry Points", description: "Every soffit gap, vent, and roof vulnerability is reinforced with heavy-gauge galvanized steel mesh that raccoons cannot bend, chew, or tear." },
      { step: "Attic Cleanup & Sanitization", description: "Contaminated insulation and fecal matter are removed. Surfaces are sanitized to eliminate raccoon roundworm (Baylisascaris) risk. New insulation is installed." },
      { step: "Monitor & Guarantee", description: "Follow-up visits confirm the raccoons have vacated and sealed points are holding. Covered by our 12-month Zero-Comeback Guarantee." },
    ],
    surprisingFact: "Raccoons can tear through aluminum soffits, rip off roof shingles, and break plastic vent covers. A single raccoon in your attic can cause thousands of dollars in insulation and wiring damage in just one season.",
    introTemplate: "{city}'s mature tree canopy and older rooflines give raccoons easy access to attics and roof voids. Properties near {nbr1} and {nbr2} with large trees overhanging the roof are at highest risk during spring denning season.",
    serviceIntro: "Ridgeline Pest Defence uses humane one-way doors compliant with Ontario wildlife regulations. We remove the raccoons, seal every entry point, and restore the damage they leave behind.",
    testimonialPool: [
      { name: "Carol D.", textTemplate: "Raccoons in the attic — we could hear them running at 3 AM. Ridgeline installed one-way doors and sealed the soffits with steel mesh. Quiet nights ever since." },
      { name: "Brian W.", textTemplate: "Raccoon tore through the roof vent and nested in the attic insulation. Ridgeline removed the animal humanely, replaced the vent with a steel cage, and restored the attic. Insurance covered most of it." },
      { name: "Samira J.", textTemplate: "Baby raccoons in the soffit. Ridgeline waited until the family was mobile, installed one-way doors, and sealed everything once they left. Humane and effective." },
      { name: "Greg P.", textTemplate: "Raccoon damage to the roof edge every spring for three years. Ridgeline reinforced the entire roofline with galvanized mesh. First spring without damage." },
      { name: "Diane L.", textTemplate: "Raccoon feces in the attic — our contractor warned about roundworm risk. Ridgeline removed the contaminated insulation, sanitized the space, and blew in new insulation. Professional and thorough." },
      { name: "Kevin M.", textTemplate: "Caught a raccoon entering through a gap between the chimney and the roof flashing. Ridgeline sealed it with steel and installed a one-way door at the soffit. Animal left within 48 hours." },
    ],
    faqPool: [
      { questionTemplate: "When is raccoon season in {city}?", answerTemplate: "Raccoon denning season runs from March through June. Females seek warm, sheltered spaces — attics, soffits, and chimneys — to give birth. The best time to prevent entry is before March, but humane removal is possible year-round." },
      { questionTemplate: "Is raccoon removal humane and legal in {city}?", answerTemplate: "Yes. We use one-way doors that allow raccoons to leave on their own. This method complies with the Ontario Fish and Wildlife Conservation Act. We never relocate raccoons more than 1 km from the capture site, as required by law." },
      { questionTemplate: "How quickly can you respond to raccoon problems in {city}?", answerTemplate: "Most {city} raccoon calls are scheduled within {responseTime}. If raccoons are actively entering living spaces, we prioritize same-day response." },
      { questionTemplate: "Can raccoons damage my {city} home?", answerTemplate: "Yes. Raccoons tear through soffits, roof vents, and shingles to access attics. Inside, they shred insulation for nesting, chew wiring (fire risk), and contaminate spaces with feces carrying raccoon roundworm (Baylisascaris)." },
      { questionTemplate: "Do you clean up after raccoon removal in {city}?", answerTemplate: "Yes. Our attic restoration service removes contaminated insulation, sanitizes all surfaces, and installs new insulation. This eliminates raccoon roundworm risk and restores your attic's R-value." },
    ],
    cityModifiers: [
      {
        serviceOverrides: {
          0: "In older neighbourhoods, decades of soffit deterioration and original aluminum venting create easy entry for raccoons. We check every soffit panel, roof vent, plumbing stack, and chimney gap for signs of forced entry.",
          3: "Attics in older homes often have original vermiculite or fibreglass insulation that raccoons compress and contaminate. We remove all affected material, sanitize the space, and install new blown-in insulation to restore R-value.",
        },
        stepOverrides: {
          0: "We inspect rooflines, soffits, vents, and attic spaces. In older homes with original aluminum soffits, raccoons frequently bend or tear panels to create entry points — we check every panel.",
          2: "Every soffit gap, vent, and roof vulnerability is sealed. Older homes with deteriorated fascia boards and original vents require full replacement with raccoon-proof steel alternatives.",
        },
      },
      {
        serviceOverrides: {
          1: "One-way doors are installed at confirmed entry points. In suburban areas where raccoon populations are dense, we monitor multiple potential entry points simultaneously to prevent animals from creating new openings nearby.",
          4: "Return visits are scheduled at 48-hour and 2-week intervals. Suburban properties with large trees overhanging the roof get additional monitoring during spring denning season when females actively seek new shelter.",
        },
        stepOverrides: {
          0: "We inspect the full roofline, soffits, and attic. Properties with mature trees within 3 meters of the roof are highest priority — raccoons use overhanging branches as highways to the roofline.",
          3: "Contaminated insulation is removed and surfaces sanitized. Suburban homes where raccoons have denned for multiple seasons often require full attic restoration including vapour barrier replacement.",
        },
      },
      {
        serviceOverrides: {
          2: "Every soffit gap, vent, and roof-edge vulnerability is reinforced with heavy-gauge galvanized steel mesh. Newer homes with vinyl soffits are particularly vulnerable — raccoons can punch through vinyl in minutes.",
          4: "Follow-up visits confirm exclusion is holding. In newer subdivisions where green space borders residential lots, raccoon pressure remains high — we recommend annual roof inspections before denning season.",
        },
        stepOverrides: {
          1: "Humane exclusion devices are installed at active entry points. In areas with high raccoon density, we install deterrent lighting near the roofline to discourage new attempts at nearby entry points.",
          4: "Follow-up visits confirm the raccoons have vacated. Properties near ravines or parks face ongoing pressure — we recommend annual pre-season inspections in February to catch new vulnerabilities before denning begins.",
        },
      },
    ],
    metaDescTemplates: [
      "Raccoon removal in {city} — humane one-way doors, full exclusion, and attic restoration. Ontario-compliant. Serving {nbr1}, {nbr2} & area.",
      "Raccoons in your {city} attic? Ridgeline Pest Defence uses humane exclusion compliant with Ontario wildlife regulations. 47-point inspection included.",
      "Professional raccoon removal in {city}. One-way doors, steel mesh exclusion, and attic cleanup. Serving {nbr1} and {nbr2}.",
      "Protect your {city} home from raccoon damage. Ridgeline's humane removal and steel-mesh exclusion keeps them out permanently. Guaranteed 12 months.",
    ],
    localChallengesClosings: [
      "Ridgeline Pest Defence brings humane raccoon removal to {city} — one-way doors, steel exclusion, and attic restoration backed by a 12-month Zero-Comeback Guarantee.",
      "Our {city} technicians use Ontario-compliant one-way doors and heavy-gauge steel mesh. 47-point inspection included. 12-month guarantee on every exclusion.",
      "Ridgeline has solved {city} raccoon problems since 2015. Humane removal, permanent exclusion, and full attic restoration. Results guaranteed for 12 months.",
    ],
  },
};

/* ── Content generators ──────────────────────────────────────── */

function pickItemsHashed<T>(pool: readonly T[], cityIndex: number, count: number): T[] {
  const len = pool.length;
  const result: T[] = [];
  const seen = new Set<number>();
  let cursor = (cityIndex * 7) % len;
  while (result.length < count && result.length < len) {
    if (!seen.has(cursor)) {
      seen.add(cursor);
      result.push(pool[cursor]);
    }
    cursor = (cursor + 3) % len;
    if (seen.size === len) break;
  }
  return result;
}

function generateOverview(
  config: PestTypeConfig,
  cityName: string,
  neighborhoods: readonly string[],
  cityIndex: number = 0,
): string {
  const nbr1 = neighborhoods[0] ?? cityName;
  const nbr2 = neighborhoods[1] ?? neighborhoods[0] ?? cityName;
  const nbr3 = neighborhoods[2] ?? neighborhoods[0] ?? cityName;

  const intro = config.introTemplate
    .replace("{city}", cityName)
    .replace("{nbr1}", nbr1)
    .replace("{nbr2}", nbr2)
    .replace("{nbr3}", nbr3);

  // Rotate brand phrases through the static paragraphs for cross-city variation
  const fact = rotateBrandPhrases(config.surprisingFact, cityIndex);
  const serviceIntro = rotateBrandPhrases(config.serviceIntro, cityIndex);

  // City-specific bridge sentence to break up identical content blocks
  const bridgeSentences = [
    `${cityName} homeowners near ${nbr1} and ${nbr2} frequently report this issue — especially from spring through late fall.`,
    `In ${cityName}, properties around ${nbr1} see heightened activity due to local soil and moisture conditions.`,
    `Homes in ${nbr2} and ${nbr3} are particularly affected, though no ${cityName} neighbourhood is immune.`,
    `Our ${cityName} technicians serving ${nbr1}, ${nbr2}, and surrounding areas encounter this pattern regularly.`,
    `Across ${cityName} — from ${nbr1} to ${nbr3} — property owners deal with this challenge seasonally.`,
  ];
  const bridge = bridgeSentences[cityIndex % bridgeSentences.length];

  return `${intro}\n\n${fact} ${bridge}\n\n${serviceIntro}`;
}

function generateLocalChallenges(
  locationChallenges: string,
  closing: string,
): string {
  return `${locationChallenges} ${closing}`;
}

function generateTestimonials(
  config: PestTypeConfig,
  cityName: string,
  neighborhoods: readonly string[],
  cityIndex: number,
): PestCityTestimonial[] {
  const selected = pickItemsHashed(config.testimonialPool, cityIndex, 3);
  return selected.map((t, i) => ({
    name: t.name,
    location: `${neighborhoods[i % neighborhoods.length]}, ${cityName}`,
    text: rotateBrandPhrases(t.textTemplate, cityIndex),
  }));
}

function generateFAQs(
  config: PestTypeConfig,
  cityName: string,
  responseTime: string,
  cityIndex: number,
): PestCityFAQ[] {
  const selected = pickItemsHashed(config.faqPool, cityIndex, 4);
  return selected.map((f) => ({
    question: rotateBrandPhrases(f.questionTemplate, cityIndex)
      .replace(/{city}/g, cityName),
    answer: rotateBrandPhrases(f.answerTemplate, cityIndex)
      .replace(/{city}/g, cityName)
      .replace(/{responseTime}/g, responseTime.toLowerCase()),
  }));
}

/* ── Main generator ──────────────────────────────────────────── */

export function getPestCityData(
  pestType: string,
  citySlug: string,
): PestCityPageData | undefined {
  const config = pestConfigs[pestType];
  if (!config) return undefined;

  if (!config.cities.includes(citySlug)) return undefined;

  const locationSlug = citySlugMap[citySlug];
  if (!locationSlug) return undefined;

  const location = getLocationBySlug(locationSlug);
  if (!location) return undefined;

  const cityIndex = config.cities.indexOf(citySlug);

  // Apply city-group modifiers to reduce cross-city content overlap
  const modifierGroup = config.cityModifiers[cityIndex % config.cityModifiers.length];

  const services = config.services.map((svc, i) =>
    modifierGroup.serviceOverrides[i]
      ? { ...svc, description: modifierGroup.serviceOverrides[i]! }
      : svc
  );

  const treatmentSteps = config.treatmentSteps.map((step, i) =>
    modifierGroup.stepOverrides[i]
      ? { ...step, description: rotateBrandPhrases(modifierGroup.stepOverrides[i]!, cityIndex) }
      : { ...step, description: rotateBrandPhrases(step.description, cityIndex) }
  );

  // Rotate meta description template by city index
  const metaDescTemplate = config.metaDescTemplates[cityIndex % config.metaDescTemplates.length];
  const nbr1 = location.neighborhoods[0] ?? location.name;
  const nbr2 = location.neighborhoods[1] ?? location.name;
  const metaDescription = rotateBrandPhrases(metaDescTemplate, cityIndex)
    .replace(/{city}/g, location.name)
    .replace(/{nbr1}/g, nbr1)
    .replace(/{nbr2}/g, nbr2);

  // Rotate localChallenges closing by city index
  const closingTemplate = config.localChallengesClosings[cityIndex % config.localChallengesClosings.length];
  const closing = rotateBrandPhrases(closingTemplate, cityIndex).replace(/{city}/g, location.name);

  return {
    pestSlug: pestType,
    citySlug,
    pestName: config.displayName,
    cityName: location.name,
    route: `/${pestType}-${citySlug}`,
    h1: `${config.displayName} in ${location.name}`,
    metaTitle: `${config.displayName} ${location.name}`,
    metaDescription,
    overview: generateOverview(config, location.name, location.neighborhoods, cityIndex),
    localChallenges: generateLocalChallenges(location.localChallenges, closing),
    services,
    treatmentSteps,
    neighborhoods: location.neighborhoods,
    testimonials: generateTestimonials(config, location.name, location.neighborhoods, cityIndex),
    faqs: generateFAQs(config, location.name, location.responseTime, cityIndex),
    responseTime: location.responseTime,
    isCommercial: config.isCommercial,
    pestPageHref: `/pests/${config.pestPageSlug}`,
    locationPageHref: location.route,
  };
}

/* ── Static param exports ────────────────────────────────────── */


/* ── All pest-city routes (for sitemap, nav, etc.) ───────────── */

interface PestCityRoute {
  readonly pestType: string;
  readonly citySlug: string;
  readonly route: string;
  readonly label: string;
}

export function getAllPestCityRoutes(): PestCityRoute[] {
  const routes: PestCityRoute[] = [];
  for (const [pestType, config] of Object.entries(pestConfigs)) {
    for (const city of config.cities) {
      const locationSlug = citySlugMap[city];
      if (!locationSlug) continue;
      const location = getLocationBySlug(locationSlug);
      if (!location) continue;
      routes.push({
        pestType,
        citySlug: city,
        route: `/${pestType}-${city}`,
        label: `${config.displayName} in ${location.name}`,
      });
    }
  }
  return routes;
}
