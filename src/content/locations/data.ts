import type { LocationData } from "./types";
import { rotateBrandPhrases } from "@/lib/brand-phrases";
import { siteConfig } from "@/content/site.config";

const locationsRaw: LocationData[] = [
  // ─── Greater Toronto Area (8) ─────────────────────────────────
  {
    slug: "toronto",
    name: "Toronto",
    region: "gta",
    route: "/pest-control-toronto",
    h1: "Toronto Pest Control — Same-Day Inspections Available",
    metaTitle: "Pest Control Toronto | Expert Removal & Prevention",
    metaDescription:
      "PMRA-licensed pest control in Toronto. Same-day inspections, eco-friendly treatments, and 12-month Zero-Comeback Guarantee for all neighbourhoods.",
    neighborhoods: [
      "Downtown",
      "Midtown",
      "The Beaches",
      "Leslieville",
      "Roncesvalles",
      "High Park",
      "Liberty Village",
      "The Annex",
      "Yorkville",
      "Cabbagetown",
      "Danforth",
      "Junction",
    ],
    commonPests: ["Mice", "Rats", "Cockroaches", "Bed Bugs", "Ants", "Raccoons", "Wasps", "Spiders"],
    responseTime: "Same day",
    description:
      "Toronto's dense housing stock — from Victorian semi-detached homes to high-rise condos — creates ideal conditions for rodents, cockroaches, and bed bugs. Ridgeline Pest Defence provides fast, effective treatment across every Toronto neighbourhood, backed by our 12-month Zero-Comeback Guarantee.",
    localChallenges:
      "Toronto's aging infrastructure and interconnected row housing let mice travel between units undetected. High-density living accelerates bed bug spread, while ravine systems funnel raccoons into residential areas. A single mouse can squeeze through a gap the width of a pencil.",
    testimonials: [
      {
        name: "Shannon M.",
        location: "The Annex, Toronto",
        text: "Found mice droppings in our kitchen and called Ridgeline. The technician arrived the same day, sealed every entry point, and we haven't seen a single sign since. Genuinely impressed.",
      },
      {
        name: "Douglas K.",
        location: "Leslieville, Toronto",
        text: `Our condo building had a cockroach issue that two other companies couldn't solve. Ridgeline's ${siteConfig.inspectionPoints}-point inspection found the source in the utility room. Problem gone within a week.`,
      },
      {
        name: "Pooja R.",
        location: "Liberty Village, Toronto",
        text: "Raccoons tore through our soffit and nested in the attic. Ridgeline removed them humanely, repaired the damage, and installed exclusion mesh. The attic restoration was a bonus I didn't expect.",
      },
    ],
    faqs: [
      {
        question: "How quickly can you respond to a pest emergency in Toronto?",
        answer:
          "We offer same-day service across Toronto. Most inspections are scheduled within 4–6 hours of your call, depending on time of day and technician availability.",
      },
      {
        question: "Do you service Toronto condos and apartment buildings?",
        answer:
          "Yes. We work with property managers and individual condo owners throughout Toronto. Our technicians are experienced with multi-unit buildings and coordinate treatments to prevent pests from migrating between units.",
      },
      {
        question: "Are your treatments safe for children and pets?",
        answer:
          "All products are Health Canada–approved and applied according to PMRA guidelines. We use targeted, low-toxicity treatments and always explain any precautions before we start.",
      },
      {
        question: "What does the Zero-Comeback Guarantee cover?",
        answer:
          "If the treated pest returns within 12 months, we re-treat at no charge. The guarantee covers the specific pest and treatment area identified during your initial service.",
      },
    ],
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    region: "gta",
    route: "/pest-control-mississauga",
    h1: "Trusted Pest Control for Mississauga Homes & Businesses",
    metaTitle: "Pest Control Mississauga | Licensed Removal Services",
    metaDescription:
      `Trusted pest control in Mississauga. ${siteConfig.inspectionPoints}-point inspections, eco-friendly treatments, and 12-month guarantee. Serving Port Credit & Streetsville.`,
    neighborhoods: [
      "Port Credit",
      "Streetsville",
      "Meadowvale",
      "Erin Mills",
      "Cooksville",
      "Clarkson",
      "Lorne Park",
      "Malton",
      "Churchill Meadows",
      "Lisgar",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Wasps", "Cockroaches", "Bed Bugs", "Raccoons", "Spiders"],
    responseTime: "Same day",
    description:
      "Mississauga's mix of established neighbourhoods and new developments brings a wide range of pest pressures — from carpenter ants in Lorne Park's mature trees to rodents in Malton's older housing. Ridgeline Pest Defence delivers targeted solutions across every corner of the city.",
    localChallenges:
      "Mississauga's rapid growth means construction disturbance pushes rodents into nearby homes. Mature tree canopies in older areas like Port Credit harbour carpenter ants, while proximity to Pearson Airport increases wildlife activity. One carpenter ant colony can contain over 10,000 workers.",
    testimonials: [
      {
        name: "Joel W.",
        location: "Port Credit, Mississauga",
        text: "Carpenter ants were destroying our deck. Ridgeline traced the colony to a tree stump we'd ignored for years. Thorough treatment and the problem hasn't returned in 10 months.",
      },
      {
        name: "Lorraine C.",
        location: "Meadowvale, Mississauga",
        text: "We had wasps building nests under our eaves every summer. Ridgeline removed three nests and treated the area so they wouldn't come back. First wasp-free summer in years.",
      },
    ],
    faqs: [
      {
        question: "Do you cover all of Mississauga?",
        answer:
          "Yes, we service every Mississauga neighbourhood from Port Credit to Meadowvale, Malton to Churchill Meadows. Our technicians know the local pest patterns specific to each area.",
      },
      {
        question: "How much does an inspection cost in Mississauga?",
        answer:
          `Our initial ${siteConfig.inspectionPoints}-point inspection is included with any treatment plan. If you just want a Property Health Report without treatment, contact us for current pricing.`,
      },
      {
        question: "Can you treat a new-build home in Mississauga?",
        answer:
          "Absolutely. New construction often disturbs existing rodent populations. We offer pre-occupancy inspections and preventive exclusion work for new homes and developments.",
      },
    ],
  },
  {
    slug: "brampton",
    name: "Brampton",
    region: "gta",
    route: "/pest-control-brampton",
    h1: "Brampton's Pest Control Specialists — Licensed & Guaranteed",
    metaTitle: "Pest Control Brampton | Fast & Effective Treatment",
    metaDescription:
      "Expert pest control in Brampton. PMRA-licensed technicians serving Heart Lake, Bramalea, Springdale & all Brampton areas. 12-month guarantee included.",
    neighborhoods: [
      "Heart Lake",
      "Bramalea",
      "Springdale",
      "Mount Pleasant",
      "Castlemore",
      "Sandalwood",
      "Gore Meadows",
      "Fletcher's Meadow",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Cockroaches", "Wasps", "Bed Bugs", "Spiders", "Centipedes"],
    responseTime: "Same day",
    description:
      "Brampton's fast-growing suburban landscape creates unique pest challenges. New subdivisions border agricultural land, funneling field mice and insects into homes. Ridgeline Pest Defence keeps Brampton families protected with proven, eco-friendly methods.",
    localChallenges:
      "Brampton's expansion into former farmland means field mice, voles, and ground-nesting insects move into new subdivisions. Large lot sizes with gardens attract ants and wasps, while older Bramalea homes develop cracks that let cockroaches enter. A single cockroach egg case produces up to 48 nymphs.",
    testimonials: [
      {
        name: "Ravi P.",
        location: "Castlemore, Brampton",
        text: "Mice were getting into our garage every fall. Ridgeline sealed the gaps around our garage door and utility lines. Two winters later, still mouse-free.",
      },
      {
        name: "Audrey T.",
        location: "Bramalea, Brampton",
        text: "We had a cockroach problem we were embarrassed about. The Ridgeline team was professional and discreet. They solved it fast and followed up twice to make sure.",
      },
    ],
    faqs: [
      {
        question: "Why do new Brampton homes still get mice?",
        answer:
          "Construction disturbs existing rodent populations in the surrounding fields. Mice seek shelter in newly built homes through utility penetrations, weep holes, and garage seals that aren't always pest-proofed during construction.",
      },
      {
        question: "Do you offer pest control for Brampton businesses?",
        answer:
          "Yes, we provide commercial pest management for offices, restaurants, warehouses, and retail spaces throughout Brampton. We offer scheduled maintenance plans tailored to your industry.",
      },
      {
        question: "What pests are most common in Brampton?",
        answer:
          "Mice and rats top the list, especially in fall and winter. Ants and wasps are common spring through summer. Cockroaches and bed bugs appear year-round in multi-unit housing.",
      },
    ],
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    region: "gta",
    route: "/pest-control-vaughan",
    h1: "Expert Pest Control in Vaughan — Results Backed for 12 Months",
    metaTitle: "Pest Control Vaughan | Trusted Local Technicians",
    metaDescription:
      `Reliable pest control in Vaughan. Serving Woodbridge, Maple, Kleinburg, Thornhill & Concord. ${siteConfig.inspectionPoints}-point inspections and 12-month Zero-Comeback Guarantee.`,
    neighborhoods: [
      "Woodbridge",
      "Maple",
      "Kleinburg",
      "Thornhill",
      "Concord",
      "Vellore Village",
      "Patterson",
      "Sonoma Heights",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Raccoons", "Wasps", "Spiders", "Cockroaches", "Squirrels"],
    responseTime: "24 hours",
    description:
      "Vaughan's blend of established communities like Woodbridge and newer developments in Vellore Village means diverse pest pressures. Ridgeline Pest Defence combines local knowledge with proven treatment protocols to keep Vaughan homes and businesses pest-free.",
    localChallenges:
      "Vaughan's proximity to rural land in Kleinburg and King Township means wildlife pressure from raccoons and squirrels. Woodbridge's older homes have more entry points, while new builds in Vellore and Patterson attract displaced field rodents. Squirrels can chew through aluminum soffit in under an hour.",
    testimonials: [
      {
        name: "Martin D.",
        location: "Woodbridge, Vaughan",
        text: "Squirrels chewed into our attic through the soffit. Ridgeline trapped them, repaired the damage, and installed heavy-gauge mesh. Outstanding workmanship.",
      },
      {
        name: "Kathy L.",
        location: "Maple, Vaughan",
        text: "Ant trails everywhere in the spring. Ridgeline found the colony under our front steps and treated it at the source. No more ants marching across our counters.",
      },
    ],
    faqs: [
      {
        question: "Do you service the Kleinburg area?",
        answer:
          "Yes, we cover all of Vaughan including Kleinburg, Woodbridge, Maple, Thornhill, and Concord. Rural-adjacent properties in Kleinburg often benefit from our wildlife exclusion services.",
      },
      {
        question: "How do you handle raccoons in Vaughan?",
        answer:
          "We use humane one-way door systems that let raccoons leave but prevent re-entry. Once they vacate, we seal all entry points with galvanized steel mesh and offer attic restoration if needed.",
      },
      {
        question: "Is your service guaranteed?",
        answer:
          "Every treatment comes with our 12-month Zero-Comeback Guarantee. If the treated pest returns within that period, we come back at no extra cost.",
      },
    ],
  },
  {
    slug: "markham",
    name: "Markham",
    region: "gta",
    route: "/pest-control-markham",
    h1: "Trusted Pest Control for Markham Homes & Businesses",
    metaTitle: "Pest Control Markham | Expert Inspection & Treatment",
    metaDescription:
      "Professional pest control in Markham. Serving Unionville, Thornhill, Cornell & Markham Village. PMRA-licensed, eco-friendly treatments with 12-month guarantee.",
    neighborhoods: [
      "Unionville",
      "Thornhill",
      "Cornell",
      "Markham Village",
      "Berczy",
      "Cathedraltown",
      "Angus Glen",
      "Box Grove",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Cockroaches", "Wasps", "Bed Bugs", "Raccoons", "Spiders"],
    responseTime: "24 hours",
    description:
      `Markham's heritage homes in Unionville and modern developments in Cornell face different pest challenges, but all benefit from Ridgeline's systematic approach. Our ${siteConfig.inspectionPoints}-point inspection catches what other companies miss.`,
    localChallenges:
      "Markham's older stone-and-brick homes in Unionville and Markham Village have more hidden entry points than newer builds. Dense greenery along the Rouge River corridor supports strong wildlife populations. A single rat can produce up to 12 pups per litter, with 4–6 litters per year.",
    testimonials: [
      {
        name: "Hazel Y.",
        location: "Unionville, Markham",
        text: "Mice kept appearing in our heritage home's basement despite traps. Ridgeline found gaps behind the stone foundation we never noticed. Proper exclusion work finally solved it.",
      },
      {
        name: "Trevor B.",
        location: "Cornell, Markham",
        text: "Had wasps nesting in the wall cavity of our new build. Ridgeline removed the nest safely and sealed the entry. Very knowledgeable about construction-related pest issues.",
      },
    ],
    faqs: [
      {
        question: "Do heritage homes in Markham need special pest treatment?",
        answer:
          `Older homes often have more entry points and hidden voids. Our ${siteConfig.inspectionPoints}-point inspection is designed to find vulnerabilities that surface-level checks miss. We use non-invasive methods that respect the character of heritage properties.`,
      },
      {
        question: "How do I know if I have rats or mice?",
        answer:
          "Rat droppings are 12–18 mm long (about the size of a raisin), while mouse droppings are 3–6 mm (like a grain of rice). We identify the species during inspection because treatment strategies differ significantly.",
      },
      {
        question: "Do you treat commercial properties in Markham?",
        answer:
          "Yes. We serve offices, restaurants, warehouses, and retail spaces across Markham, including the Highway 7 corridor and Markham's tech sector buildings.",
      },
    ],
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    region: "gta",
    route: "/pest-control-richmond-hill",
    h1: "Professional Pest Control Services in Richmond Hill",
    metaTitle: "Pest Control Richmond Hill | Guaranteed Results",
    metaDescription:
      "Effective pest control in Richmond Hill. Serving Oak Ridges, Bayview Hill & Mill Pond. Eco-friendly treatments with 12-month guarantee.",
    neighborhoods: [
      "Oak Ridges",
      "Bayview Hill",
      "Mill Pond",
      "Jefferson",
      "Langstaff",
      "Westbrook",
      "Observatory",
      "Richvale",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Raccoons", "Wasps", "Squirrels", "Spiders", "Centipedes"],
    responseTime: "24 hours",
    description:
      "Richmond Hill's tree-lined streets and proximity to the Oak Ridges Moraine bring wildlife and insect pressures that suburban homes aren't always prepared for. Ridgeline Pest Defence delivers fast, lasting results across all Richmond Hill neighbourhoods.",
    localChallenges:
      "The Oak Ridges Moraine creates a natural wildlife corridor, pushing raccoons, squirrels, and skunks into residential areas. Mature lots throughout Richmond Hill harbour carpenter ant colonies in aging trees close to homes. One raccoon family can cause over $5,000 in attic damage.",
    testimonials: [
      {
        name: "Nora S.",
        location: "Oak Ridges, Richmond Hill",
        text: "Raccoons invaded our attic every spring. Ridgeline installed exclusion barriers and cleaned out the mess they left behind. Three years now with no return visitors.",
      },
      {
        name: "Gordon P.",
        location: "Bayview Hill, Richmond Hill",
        text: "Carpenter ants in our deck framing. Ridgeline traced them to a rotting tree stump 20 feet away. Eliminated the colony and treated the deck. Saved us from a full rebuild.",
      },
    ],
    faqs: [
      {
        question: "Why are raccoons so common in Richmond Hill?",
        answer:
          "Richmond Hill sits along the Oak Ridges Moraine, a natural wildlife corridor. Raccoons adapt well to suburban environments, using attics and sheds as denning sites. Professional exclusion is the most effective long-term solution.",
      },
      {
        question: "When should I call about carpenter ants?",
        answer:
          "If you see large black ants (6–13 mm) indoors, especially in spring, or notice fine sawdust near wood framing, call immediately. Early detection prevents structural damage.",
      },
      {
        question: "Do you offer preventive pest control plans?",
        answer:
          "Yes. Our seasonal maintenance plans include quarterly inspections and preventive treatments. They're popular with Richmond Hill homeowners who want year-round protection.",
      },
    ],
  },
  {
    slug: "oakville",
    name: "Oakville",
    region: "gta",
    route: "/pest-control-oakville",
    h1: "Oakville Pest Control — Same-Day Inspections Available",
    metaTitle: "Pest Control Oakville | Premium Residential & Commercial",
    metaDescription:
      `Premium pest control in Oakville. Serving Bronte, Glen Abbey, River Oaks & Clearview. ${siteConfig.inspectionPoints}-point inspections, eco-friendly treatments, 12-month guarantee.`,
    neighborhoods: [
      "Bronte",
      "Glen Abbey",
      "River Oaks",
      "Clearview",
      "Old Oakville",
      "Eastlake",
      "West Oak Trails",
      "Joshua Creek",
    ],
    commonPests: ["Mice", "Rats", "Carpenter Ants", "Wasps", "Raccoons", "Spiders", "Bed Bugs", "Squirrels"],
    responseTime: "24 hours",
    description:
      "Oakville's lakeside properties and mature tree canopy bring specific pest challenges — from carpenter ants in century-old oaks to raccoons denning in heritage homes. Ridgeline Pest Defence brings precision treatment to every Oakville neighbourhood.",
    localChallenges:
      "Oakville's lakefront proximity attracts moisture-loving insects and wildlife. Heritage homes in Old Oakville have complex rooflines that raccoons exploit. Glen Abbey and Bronte's mature landscaping supports large carpenter ant populations. A mature carpenter ant colony can weaken a deck or porch in a single season.",
    testimonials: [
      {
        name: "Claire H.",
        location: "Glen Abbey, Oakville",
        text: "We'd been fighting carpenter ants for three summers. Ridgeline found satellite colonies we had no idea existed. One treatment, one follow-up, done. Should have called them first.",
      },
      {
        name: "Richard F.",
        location: "Old Oakville",
        text: "Mice in our 1920s home were a yearly battle. Ridgeline's exclusion work sealed gaps I never would have found. First winter without mice traps in a decade.",
      },
    ],
    faqs: [
      {
        question: "Do you handle pest control for Oakville heritage homes?",
        answer:
          "Yes. We're experienced with the unique challenges of older construction — stone foundations, balloon framing, and complex rooflines. Our approach is thorough but non-invasive.",
      },
      {
        question: "How do you treat carpenter ants in Oakville?",
        answer:
          "We locate the main colony and any satellite nests using moisture meters and inspection probes. Treatment targets the queen and colony core, not just the visible workers.",
      },
      {
        question: "Can I get a same-day appointment in Oakville?",
        answer:
          "We prioritize urgent cases. Most Oakville appointments are available within 24 hours, with same-day service often possible depending on the time of your call.",
      },
    ],
  },
  {
    slug: "burlington",
    name: "Burlington",
    region: "gta",
    route: "/pest-control-burlington",
    h1: "Professional Pest Control Services in Burlington",
    metaTitle: "Pest Control Burlington | Trusted Local Service",
    metaDescription:
      "Trusted pest control in Burlington. Serving Aldershot, Tyandaga, Burlington Downtown & all areas. PMRA-licensed technicians with 12-month guarantee.",
    neighborhoods: [
      "Aldershot",
      "Tyandaga",
      "Downtown Burlington",
      "Orchard",
      "Brant Hills",
      "Roseland",
      "Palmer",
      "Millcroft",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Wasps", "Raccoons", "Spiders", "Cockroaches", "Centipedes"],
    responseTime: "24 hours",
    description:
      "Burlington straddles Lake Ontario and the Niagara Escarpment, creating a corridor where urban and rural pest pressures overlap. Ridgeline Pest Defence has been treating Burlington homes since 2015 — we know which pests thrive here and how to stop them.",
    localChallenges:
      "Burlington's position between the lake and the Escarpment funnels wildlife through residential areas. Aldershot's older housing stock has more entry points, while newer Millcroft developments border wooded ravines. Escarpment-adjacent properties see higher mouse activity in fall as temperatures drop.",
    testimonials: [
      {
        name: "Paul G.",
        location: "Aldershot, Burlington",
        text: "Had mice coming in every October. Ridgeline found gaps around old plumbing penetrations and sealed everything. Two autumns now with zero mice. Money well spent.",
      },
      {
        name: "Megan R.",
        location: "Tyandaga, Burlington",
        text: "Wasp nests under every overhang. Ridgeline removed four nests and treated the areas to discourage rebuilding. The technician even spotted early signs of carpenter ants we hadn't noticed.",
      },
    ],
    faqs: [
      {
        question: "Why do Burlington homes near the Escarpment get more mice?",
        answer:
          "The Niagara Escarpment supports large field mouse populations. When temperatures drop in fall, mice move downhill into nearby homes. Exclusion work before October is the best prevention.",
      },
      {
        question: "Do you service Burlington commercial properties?",
        answer:
          "Yes. We provide commercial pest management for restaurants, offices, and retail spaces along Burlington's lakefront and in the industrial areas near the QEW.",
      },
      {
        question: `What's included in the ${siteConfig.inspectionPoints}-point inspection?`,
        answer:
          "We check the full exterior for entry points, inspect the attic, basement, crawl spaces, utility penetrations, and all living areas. You receive a written Property Health Report with photos and a risk score.",
      },
    ],
  },

  // ─── Hamilton-Niagara Region (7) ──────────────────────────────
  {
    slug: "hamilton",
    name: "Hamilton",
    region: "hamilton-niagara",
    route: "/pest-control-hamilton",
    h1: "Expert Pest Control in Hamilton — Results Backed for 12 Months",
    metaTitle: "Pest Control Hamilton | Local Experts Since 2015",
    metaDescription:
      `Hamilton's trusted pest control since 2015. Serving Downtown, Dundas, Ancaster, Stoney Creek & Waterdown. ${siteConfig.inspectionPoints}-point inspections and 12-month guarantee.`,
    neighborhoods: [
      "Downtown Hamilton",
      "Dundas",
      "Ancaster",
      "Stoney Creek",
      "Waterdown",
      "Flamborough",
      "Westdale",
      "Locke Street",
      "The Delta",
      "Binbrook",
    ],
    commonPests: ["Mice", "Rats", "Cockroaches", "Bed Bugs", "Ants", "Raccoons", "Wasps", "Silverfish"],
    responseTime: "Same day",
    description:
      "Hamilton is where Ridgeline Pest Defence was founded. Our founder Marcus Ridgeway spent years as a building inspector here, learning exactly where pests enter Hamilton's century homes, steel-town duplexes, and mountain-side bungalows. No one knows Hamilton pest problems better.",
    localChallenges:
      "Hamilton's older housing stock in the lower city has shared walls, rubble foundations, and aging infrastructure that rodents and cockroaches exploit. The Escarpment divides the city into two distinct microclimates, and the harbour-area waterfront attracts rats. Hamilton has some of Ontario's highest rodent density per household.",
    testimonials: [
      {
        name: "Mitchell T.",
        location: "Locke Street, Hamilton",
        text: "Ridgeline was founded here and it shows. They knew our century home's weak points before they even started the inspection. Mice gone, entry points sealed, zero issues since.",
      },
      {
        name: "Donna L.",
        location: "Ancaster, Hamilton",
        text: "Bed bugs in our rental property. Ridgeline treated both units, coordinated with our tenants respectfully, and confirmed elimination in two visits. Professional start to finish.",
      },
      {
        name: "Scott K.",
        location: "Stoney Creek, Hamilton",
        text: "Rats in the garage. Ridgeline trapped them, sealed the holes, and cleaned up. They showed us photos of every entry point they found. That transparency matters.",
      },
    ],
    faqs: [
      {
        question: "Is Ridgeline based in Hamilton?",
        answer:
          "Yes. Ridgeline Pest Defence was founded in Hamilton in 2015 by Marcus Ridgeway, a former building inspector. Hamilton is our home base and we know the city's pest challenges inside and out.",
      },
      {
        question: "Do you service the Hamilton Mountain?",
        answer:
          "We cover all of Hamilton — lower city, the Mountain, Dundas, Ancaster, Stoney Creek, Waterdown, Flamborough, and Binbrook. Our technicians are dispatched daily across every ward.",
      },
      {
        question: "How do Hamilton's old homes attract more pests?",
        answer:
          `Century homes have rubble foundations, balloon framing, and shared party walls. These create hidden pathways that rodents and insects use to move through a structure. Our ${siteConfig.inspectionPoints}-point inspection specifically targets these vulnerable areas.`,
      },
      {
        question: "Do you offer the Neighbour Rate in Hamilton?",
        answer:
          "Absolutely. Book with a neighbour on your street and you both save 15%. It's our most popular promotion in Hamilton's tight-knit neighbourhoods.",
      },
    ],
  },
  {
    slug: "st-catharines",
    name: "St. Catharines",
    region: "hamilton-niagara",
    route: "/pest-control-st-catharines",
    h1: "Trusted Pest Control for St. Catharines Homes & Businesses",
    metaTitle: "Pest Control St. Catharines | Reliable Niagara Service",
    metaDescription:
      "Reliable pest control in St. Catharines. Serving Downtown, Port Dalhousie, Glenridge & all areas. PMRA-licensed with 12-month Zero-Comeback Guarantee.",
    neighborhoods: [
      "Downtown St. Catharines",
      "Port Dalhousie",
      "Glenridge",
      "Grantham",
      "Louth",
      "Merritton",
      "Facer",
      "Queenston",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Wasps", "Cockroaches", "Spiders", "Centipedes", "Raccoons"],
    responseTime: "24–48 hours",
    description:
      "St. Catharines' mix of lakefront homes, student rentals near Brock University, and older residential areas creates diverse pest challenges. Ridgeline Pest Defence delivers consistent results across the Garden City.",
    localChallenges:
      "Proximity to Lake Ontario and the Welland Canal increases moisture levels, attracting silverfish and centipedes. Student rental housing near Brock University sees higher bed bug and cockroach turnover. The canal system provides rat habitat that extends into nearby neighbourhoods.",
    testimonials: [
      {
        name: "Laura B.",
        location: "Port Dalhousie, St. Catharines",
        text: "Centipedes in our basement every spring. Ridgeline addressed the moisture issue and sealed the foundation cracks. Huge improvement — barely see any now.",
      },
      {
        name: "Kevin M.",
        location: "Glenridge, St. Catharines",
        text: "Managing student rentals near Brock and Ridgeline handles pest calls for three of my properties. Responsive, fair pricing, and tenants always give positive feedback.",
      },
    ],
    faqs: [
      {
        question: "Do you work with landlords in St. Catharines?",
        answer:
          "Yes. We partner with landlords and property managers across St. Catharines, especially near the Brock University area. We offer multi-unit discounts and priority scheduling.",
      },
      {
        question: "What causes centipede problems in St. Catharines?",
        answer:
          "High moisture from lake proximity and aging foundations creates ideal centipede habitat. Reducing basement humidity and sealing foundation cracks are the most effective long-term solutions.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "We typically schedule St. Catharines appointments within 24–48 hours. For urgent issues like wasps or rodents in living spaces, we prioritize faster response times.",
      },
    ],
  },
  {
    slug: "niagara-falls",
    name: "Niagara Falls",
    region: "hamilton-niagara",
    route: "/pest-control-niagara-falls",
    h1: "Niagara Falls' Pest Control Specialists — Licensed & Guaranteed",
    metaTitle: "Pest Control Niagara Falls | Residential & Commercial",
    metaDescription:
      `Expert pest control in Niagara Falls for homes and businesses. PMRA-licensed service with ${siteConfig.inspectionPoints}-point inspections and 12-month guarantee.`,
    neighborhoods: [
      "Downtown Niagara Falls",
      "Chippawa",
      "Lundy's Lane",
      "Stamford",
      "Drummond",
      "Willoughby",
      "Fallsview",
      "Beaverdams",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Wasps", "Cockroaches", "Bed Bugs", "Raccoons", "Spiders"],
    responseTime: "24–48 hours",
    description:
      "Niagara Falls' tourism district, residential areas, and proximity to the gorge create unique pest dynamics. Ridgeline Pest Defence serves both homeowners and hospitality businesses with reliable, guaranteed pest control.",
    localChallenges:
      "The Niagara Gorge and river system support robust wildlife and rodent populations. Tourism-area hotels and restaurants face strict pest compliance requirements. Older residential areas in Stamford and Chippawa have aging infrastructure that's vulnerable to rodent entry.",
    testimonials: [
      {
        name: "Terrence S.",
        location: "Chippawa, Niagara Falls",
        text: "Mice were coming in from the creek behind our property. Ridgeline identified the entry points and installed exclusion barriers along the entire foundation. Haven't seen one since.",
      },
      {
        name: "Selena W.",
        location: "Lundy's Lane, Niagara Falls",
        text: "We run a small hotel and needed fast, discreet cockroach treatment. Ridgeline handled everything with zero disruption to our guests. Ongoing maintenance plan keeps us compliant.",
      },
    ],
    faqs: [
      {
        question: "Do you service hotels and restaurants in Niagara Falls?",
        answer:
          "Yes. We work with hospitality businesses throughout the Niagara Falls tourism corridor. Our commercial plans include documentation for health inspection compliance.",
      },
      {
        question: "Why are rodents common near the Niagara Gorge?",
        answer:
          "The gorge and river provide water, food, and shelter for large rodent populations. Properties near the gorge benefit from proactive exclusion work before fall migration patterns begin.",
      },
      {
        question: "Can you treat bed bugs in a hotel setting?",
        answer:
          "Yes. We use heat treatment and targeted chemical applications for hotel bed bug issues. Our approach minimizes room downtime and includes follow-up monitoring.",
      },
    ],
  },
  {
    slug: "welland",
    name: "Welland",
    region: "hamilton-niagara",
    route: "/pest-control-welland",
    h1: "Welland Pest Control — Same-Day Inspections Available",
    metaTitle: "Pest Control Welland | Affordable & Effective",
    metaDescription:
      `Affordable pest control in Welland. PMRA-licensed technicians serving all Welland neighbourhoods. ${siteConfig.inspectionPoints}-point inspections and 12-month guarantee.`,
    neighborhoods: [
      "Downtown Welland",
      "Dain City",
      "Cooks Mills",
      "Riverside",
      "Plymouth",
      "Crowland",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Wasps", "Cockroaches", "Spiders", "Centipedes", "Silverfish"],
    responseTime: "24–48 hours",
    description:
      "Welland's canal-side location and affordable housing stock attract specific pest pressures. Ridgeline Pest Defence provides practical, results-driven pest control for Welland homeowners and businesses.",
    localChallenges:
      "The Welland Canal and Welland River create moisture-rich environments that attract rodents, centipedes, and silverfish. Older housing near downtown has settling foundations with gaps that let pests inside. Canal-adjacent properties see higher rat activity than inland homes.",
    testimonials: [
      {
        name: "Floyd D.",
        location: "Downtown Welland",
        text: "Rats near the canal were getting into our shed. Ridgeline trapped them and sealed the structure. They also gave us tips on reducing attractants around the property.",
      },
      {
        name: "Barb N.",
        location: "Crowland, Welland",
        text: "Silverfish in the bathroom and basement. Ridgeline addressed the moisture sources and treated the affected areas. Much better now.",
      },
    ],
    faqs: [
      {
        question: "Is pest control expensive in Welland?",
        answer:
          "We offer competitive pricing for Welland residents. The cost depends on the pest type and scope of work. Contact us for a free phone estimate — most standard treatments are very affordable.",
      },
      {
        question: "Why do homes near the canal get more pests?",
        answer:
          "The canal provides water and food sources for rats and mice, while the moisture supports insects like centipedes and silverfish. Homes within a few blocks of the canal benefit most from preventive exclusion.",
      },
      {
        question: "Do you service Dain City and Cooks Mills?",
        answer:
          "Yes. We cover all of Welland including Dain City, Cooks Mills, Riverside, and Crowland. Our technicians travel throughout the Niagara Region daily.",
      },
    ],
  },
  {
    slug: "thorold",
    name: "Thorold",
    region: "hamilton-niagara",
    route: "/pest-control-thorold",
    h1: "Trusted Pest Control for Thorold Homes & Businesses",
    metaTitle: "Pest Control Thorold | Local Niagara Region Service",
    metaDescription:
      "Local pest control in Thorold. PMRA-licensed technicians, eco-friendly treatments, and 12-month guarantee. Serving all Thorold communities.",
    neighborhoods: [
      "Downtown Thorold",
      "Port Robinson",
      "Allanburg",
      "Thorold South",
      "Rolling Meadows",
      "Turner's Corner",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Wasps", "Spiders", "Centipedes", "Cockroaches", "Raccoons"],
    responseTime: "24–48 hours",
    description:
      "Thorold's canal-side heritage and growing residential areas need pest control that understands the local environment. Ridgeline Pest Defence delivers targeted solutions for Thorold's unique setting along the Welland Canal.",
    localChallenges:
      "Thorold's position along the Welland Canal means elevated moisture and rodent activity. Heritage buildings downtown have stone foundations with multiple entry points. New developments along Rolling Meadows border agricultural land that displaces field pests.",
    testimonials: [
      {
        name: "Joanne R.",
        location: "Downtown Thorold",
        text: "Old stone foundation meant mice every winter. Ridgeline sealed the foundation from outside and set up monitoring. First quiet winter in our home's history.",
      },
      {
        name: "Cliff A.",
        location: "Rolling Meadows, Thorold",
        text: "Ants everywhere after the farmers plowed the field behind us. Ridgeline treated the perimeter and came back to check. Problem solved quickly.",
      },
    ],
    faqs: [
      {
        question: "Do you service all of Thorold including Port Robinson?",
        answer:
          "Yes. We cover Thorold proper, Port Robinson, Allanburg, and surrounding rural areas. Our Niagara Region technicians are in the area daily.",
      },
      {
        question: "Can you pest-proof an old stone foundation?",
        answer:
          "Absolutely. We use a combination of copper mesh, expanding foam, and concrete patch to seal stone foundation gaps without altering the building's character.",
      },
      {
        question: "How often should I schedule preventive treatments?",
        answer:
          "For Thorold homes near the canal or farmland, we recommend quarterly inspections. Most residential properties do well with semi-annual visits in spring and fall.",
      },
    ],
  },
  {
    slug: "grimsby",
    name: "Grimsby",
    region: "hamilton-niagara",
    route: "/pest-control-grimsby",
    h1: "Grimsby's Pest Control Specialists — Licensed & Guaranteed",
    metaTitle: "Pest Control Grimsby | Escarpment & Lakeshore Service",
    metaDescription:
      `Expert pest control in Grimsby. Serving the lakeshore, Escarpment, and town centre. PMRA-licensed with ${siteConfig.inspectionPoints}-point inspections and 12-month guarantee.`,
    neighborhoods: [
      "Downtown Grimsby",
      "Grimsby Beach",
      "Casablanca",
      "Kelvin",
      "Grimsby South",
      "Escarpment Area",
    ],
    commonPests: ["Mice", "Rats", "Carpenter Ants", "Wasps", "Raccoons", "Squirrels", "Spiders", "Ants"],
    responseTime: "24–48 hours",
    description:
      "Grimsby sits between Lake Ontario and the Niagara Escarpment, giving it a beautiful setting — and a steady stream of wildlife and insect pressure. Ridgeline Pest Defence keeps Grimsby homes protected year-round.",
    localChallenges:
      "Grimsby's Escarpment properties face high wildlife pressure from raccoons, squirrels, and skunks. Lakefront homes attract moisture-dependent insects. Mature orchards and vineyards in the area support large ant populations. Grimsby's fruit belt creates ideal conditions for wasps in late summer.",
    testimonials: [
      {
        name: "Allison G.",
        location: "Grimsby Beach",
        text: "Wasps were unbearable every August near our lakefront patio. Ridgeline removed the nests and treated the overhangs preventively. Finally enjoyed a full summer outside.",
      },
      {
        name: "Blake T.",
        location: "Escarpment Area, Grimsby",
        text: "Squirrels and raccoons kept breaking into our attic. Ridgeline's wildlife exclusion was thorough — reinforced soffit, sealed vents, installed chimney caps. Rock solid.",
      },
    ],
    faqs: [
      {
        question: "Why are wasps so bad in Grimsby?",
        answer:
          "Grimsby's fruit belt — orchards and vineyards — provides abundant food for wasps in late summer. They're drawn to ripening fruit and build nests in nearby residential structures.",
      },
      {
        question: "Do you handle wildlife removal in Grimsby?",
        answer:
          "Yes. We humanely remove raccoons, squirrels, and skunks using one-way door systems. All entry points are then sealed with galvanized steel mesh to prevent re-entry.",
      },
      {
        question: "Is Grimsby within your service area?",
        answer:
          "Absolutely. Grimsby is well within our Hamilton-Niagara service zone. We have technicians in the area daily serving Grimsby, Beamsville, and Lincoln.",
      },
    ],
  },
  {
    slug: "fort-erie",
    name: "Fort Erie",
    region: "hamilton-niagara",
    route: "/pest-control-fort-erie",
    h1: "Expert Pest Control in Fort Erie — Results Backed for 12 Months",
    metaTitle: "Pest Control Fort Erie | Border Town Experts",
    metaDescription:
      `Pest control in Fort Erie. PMRA-licensed service for homes and businesses. ${siteConfig.inspectionPoints}-point inspections, eco-friendly treatments, and 12-month guarantee.`,
    neighborhoods: [
      "Ridgeway",
      "Crystal Beach",
      "Stevensville",
      "Bridgeburg",
      "Downtown Fort Erie",
      "Black Creek",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Wasps", "Cockroaches", "Spiders", "Raccoons", "Centipedes"],
    responseTime: "24–48 hours",
    description:
      "Fort Erie's lakeside cottages, seasonal properties, and border-town activity create year-round pest needs. Ridgeline Pest Defence provides reliable treatment from Ridgeway to Crystal Beach and everywhere in between.",
    localChallenges:
      "Fort Erie's seasonal cottages sit empty for months, giving mice and insects time to establish colonies before owners return. The Niagara River waterfront supports rat and raccoon populations. Crystal Beach's older summer homes have minimal insulation and many entry points.",
    testimonials: [
      {
        name: "Dale H.",
        location: "Crystal Beach, Fort Erie",
        text: "Opened our cottage in May to find mouse damage everywhere. Ridgeline cleaned up, sealed the cottage, and set up seasonal monitoring. Huge difference the following spring.",
      },
      {
        name: "Pam J.",
        location: "Ridgeway, Fort Erie",
        text: "Ants taking over our kitchen. Ridgeline found the colony path from outside and treated it properly. Other companies just sprayed inside — Ridgeline actually solved it.",
      },
    ],
    faqs: [
      {
        question: "Do you offer seasonal cottage protection in Fort Erie?",
        answer:
          "Yes. We offer pre-season and post-season inspections for Fort Erie cottages. We seal entry points in fall and inspect in spring before you open up for the season.",
      },
      {
        question: "How do I prevent mice in a seasonal property?",
        answer:
          "Remove all food sources before closing, seal gaps around pipes and vents, and schedule a fall exclusion visit. Mice can survive on surprisingly little — even a forgotten box of crackers is enough.",
      },
      {
        question: "Do you service Ridgeway and Crystal Beach?",
        answer:
          "Yes. We cover all of Fort Erie including Ridgeway, Crystal Beach, Stevensville, and Bridgeburg. Our Niagara Region team is in the area regularly.",
      },
    ],
  },

  // ─── Southwestern Ontario (5) ─────────────────────────────────
  {
    slug: "london",
    name: "London",
    region: "southwestern",
    route: "/pest-control-london",
    h1: "Reliable Pest Control Serving London Since 2015",
    metaTitle: "Pest Control London Ontario | Expert Local Service",
    metaDescription:
      "Expert pest control in London, Ontario. Serving Byron, Wortley, Old North, Masonville & all areas. PMRA-licensed with 12-month Zero-Comeback Guarantee.",
    neighborhoods: [
      "Byron",
      "Wortley Village",
      "Old North",
      "Masonville",
      "Westmount",
      "White Oaks",
      "Lambeth",
      "Argyle",
      "Hyde Park",
      "Oakridge",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Cockroaches", "Bed Bugs", "Wasps", "Spiders", "Raccoons"],
    responseTime: "24–48 hours",
    description:
      "London's blend of heritage neighbourhoods, university housing, and suburban growth means varied pest pressures across the city. Ridgeline Pest Defence provides thorough, guaranteed service to every corner of the Forest City.",
    localChallenges:
      "London's Thames River corridor supports rat and raccoon populations that spill into nearby neighbourhoods. Student housing near Western University sees high bed bug and cockroach turnover. Older homes in Wortley Village and Old North have the classic entry points — rubble foundations, unscreened weep holes, and aging soffits.",
    testimonials: [
      {
        name: "Jennifer M.",
        location: "Old North, London",
        text: "Mice in our century home every fall. Ridgeline sealed the foundation and utility penetrations. First winter without hearing scratching in the walls. Finally.",
      },
      {
        name: "Brian C.",
        location: "Byron, London",
        text: "Carpenter ants in the deck framing. Ridgeline traced the colony to a tree on the fence line, eliminated it, and treated the deck. Saved us a full replacement.",
      },
    ],
    faqs: [
      {
        question: "Do you service all of London, Ontario?",
        answer:
          "Yes. We cover every London neighbourhood from Byron to White Oaks, Masonville to Lambeth. Our Southwestern Ontario team operates out of the London area daily.",
      },
      {
        question: "Do you work with student rental properties?",
        answer:
          "Yes. We partner with landlords and property managers near Western University and Fanshawe College. Multi-unit discounts and priority scheduling are available.",
      },
      {
        question: "What's the most common pest in London?",
        answer:
          "Mice are London's number-one residential pest, especially in fall and winter. Ants and wasps dominate spring and summer calls. Bed bugs are a year-round concern in multi-unit housing.",
      },
    ],
  },
  {
    slug: "kitchener",
    name: "Kitchener",
    region: "southwestern",
    route: "/pest-control-kitchener",
    h1: "Professional Pest Control Services in Kitchener",
    metaTitle: "Pest Control Kitchener | Fast Response, Guaranteed",
    metaDescription:
      `Fast pest control in Kitchener. PMRA-licensed technicians serving Downtown, Forest Heights, Doon & all areas. ${siteConfig.inspectionPoints}-point inspections and 12-month guarantee.`,
    neighborhoods: [
      "Downtown Kitchener",
      "Forest Heights",
      "Doon",
      "Pioneer Park",
      "Stanley Park",
      "Rosemount",
      "Idlewood",
      "Grand River South",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Cockroaches", "Wasps", "Bed Bugs", "Spiders", "Centipedes"],
    responseTime: "24–48 hours",
    description:
      "Kitchener's revitalized downtown, established suburbs, and proximity to the Grand River bring a full spectrum of pest challenges. Ridgeline Pest Defence delivers targeted, effective treatment across Kitchener-Waterloo.",
    localChallenges:
      "The Grand River corridor supports rodent and raccoon populations throughout Kitchener. Downtown intensification brings more multi-unit housing — and more opportunities for bed bug and cockroach spread. Older homes in Rosemount and Forest Heights have settlement cracks that mice exploit every fall.",
    testimonials: [
      {
        name: "Adrienne R.",
        location: "Forest Heights, Kitchener",
        text: "Cockroaches in our townhouse. Ridgeline treated our unit and worked with the property manager to address neighbouring units too. That coordinated approach made the difference.",
      },
      {
        name: "Dennis S.",
        location: "Doon, Kitchener",
        text: "Wasps built a massive nest inside our wall cavity. Ridgeline extracted it safely and sealed the entry. Impressive work under pressure — literally.",
      },
    ],
    faqs: [
      {
        question: "Do you service both Kitchener and Waterloo?",
        answer:
          "Yes. We treat both cities as one service zone. Whether you're in Downtown Kitchener or Uptown Waterloo, we're in the area daily.",
      },
      {
        question: "How quickly can you respond in Kitchener?",
        answer:
          "Most Kitchener appointments are available within 24–48 hours. For active infestations in living spaces, we prioritize faster scheduling.",
      },
      {
        question: "Are your products safe for a home with kids?",
        answer:
          "Yes. All products are Health Canada–approved. We use targeted applications and explain any short-term precautions before treatment begins.",
      },
    ],
  },
  {
    slug: "waterloo",
    name: "Waterloo",
    region: "southwestern",
    route: "/pest-control-waterloo",
    h1: "Waterloo Pest Control — Same-Day Inspections Available",
    metaTitle: "Pest Control Waterloo | University & Residential",
    metaDescription:
      "Professional pest control in Waterloo. Serving Uptown, Beechwood, Lakeshore & all areas. Eco-friendly treatments with 12-month guarantee.",
    neighborhoods: [
      "Uptown Waterloo",
      "Beechwood",
      "Lakeshore",
      "Westmount",
      "Lincoln Village",
      "Columbia Forest",
      "Laurelwood",
      "Clair Hills",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Cockroaches", "Bed Bugs", "Wasps", "Spiders", "Silverfish"],
    responseTime: "24–48 hours",
    description:
      "Waterloo's tech-sector growth and two major universities mean rapid housing development alongside established neighbourhoods. Ridgeline Pest Defence serves both student housing and family homes with consistent, guaranteed results.",
    localChallenges:
      "Student housing density near UW and Laurier drives bed bug and cockroach activity. New construction in Laurelwood and Clair Hills displaces field rodents into nearby homes. Waterloo's rapid growth means pest pressures shift as the city develops — yesterday's farm field is today's subdivision.",
    testimonials: [
      {
        name: "Alex W.",
        location: "Beechwood, Waterloo",
        text: "Managed three rental houses near the universities. Ridgeline handles all pest calls for us. Consistent quality, fair pricing, and they communicate directly with tenants when needed.",
      },
      {
        name: "Emily T.",
        location: "Laurelwood, Waterloo",
        text: "Field mice everywhere after the lot next door was developed. Ridgeline sealed our home and set up monitoring. Zero mice through the winter.",
      },
    ],
    faqs: [
      {
        question: "Do you handle pest control for student rentals in Waterloo?",
        answer:
          "Yes. We work with landlords, property managers, and individual tenants in the university housing areas. Multi-property discounts are available for landlords managing several units.",
      },
      {
        question: "Why do new subdivisions in Waterloo get mice?",
        answer:
          "Construction displaces field mouse populations. Mice seek shelter in newly built homes through utility penetrations and weep holes that aren't always sealed during construction.",
      },
      {
        question: "What sets Ridgeline apart from other Waterloo pest companies?",
        answer:
          `Our ${siteConfig.inspectionPoints}-point inspection, written Property Health Report, and 12-month Zero-Comeback Guarantee. We don't just treat symptoms — we find and seal the source.`,
      },
    ],
  },
  {
    slug: "cambridge",
    name: "Cambridge",
    region: "southwestern",
    route: "/pest-control-cambridge",
    h1: "Reliable Pest Control Serving Cambridge Since 2015",
    metaTitle: "Pest Control Cambridge | Tri-City Coverage",
    metaDescription:
      `Effective pest control in Cambridge. Serving Galt, Preston, Hespeler & Blair. PMRA-licensed technicians with ${siteConfig.inspectionPoints}-point inspections and 12-month guarantee.`,
    neighborhoods: [
      "Galt",
      "Preston",
      "Hespeler",
      "Blair",
      "Ainslie",
      "Elgin Street",
      "Southwood",
      "Lang's Farm",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Wasps", "Cockroaches", "Spiders", "Raccoons", "Centipedes"],
    responseTime: "24–48 hours",
    description:
      "Cambridge's three historic cores — Galt, Preston, and Hespeler — each have distinct housing stock and pest patterns. Ridgeline Pest Defence understands the nuances and delivers targeted treatment across all three.",
    localChallenges:
      "The Grand and Speed Rivers merge in Cambridge, creating prime habitat for rats and raccoons. Heritage buildings in Galt's core have limestone foundations with many entry points. Industrial areas near the 401 corridor attract rodents that spill into adjacent residential streets.",
    testimonials: [
      {
        name: "Mark R.",
        location: "Galt, Cambridge",
        text: "Heritage home, stone foundation, mouse highway. Ridgeline sealed every gap without damaging the stonework. Their inspector found entry points our previous company missed completely.",
      },
      {
        name: "Sue L.",
        location: "Hespeler, Cambridge",
        text: "Wasps nesting under the siding. Ridgeline removed the nest, treated the area, and came back to verify. Thorough and professional.",
      },
    ],
    faqs: [
      {
        question: "Do you cover Galt, Preston, and Hespeler?",
        answer:
          "Yes. We service all three cores of Cambridge plus Blair, Ainslie, and surrounding areas. Our Tri-City team is in Cambridge daily.",
      },
      {
        question: "Why are rats common near the Grand River?",
        answer:
          "Rivers provide water, food, and bank-side burrowing habitat. Norway rats in particular thrive along waterways and expand into nearby properties, especially during spring flooding.",
      },
      {
        question: "Can you treat a heritage building without damage?",
        answer:
          "Yes. We use non-invasive methods designed for older construction — copper mesh, targeted caulking, and mechanical exclusion that respects the building's character.",
      },
    ],
  },
  {
    slug: "guelph",
    name: "Guelph",
    region: "southwestern",
    route: "/pest-control-guelph",
    h1: "Professional Pest Control Services in Guelph",
    metaTitle: "Pest Control Guelph | Eco-Friendly & Effective",
    metaDescription:
      `Eco-friendly pest control in Guelph. Serving Downtown, The Ward, Exhibition Park & all areas. PMRA-licensed with ${siteConfig.inspectionPoints}-point inspections and 12-month guarantee.`,
    neighborhoods: [
      "Downtown Guelph",
      "The Ward",
      "Exhibition Park",
      "St. Patrick's Ward",
      "Kortright Hills",
      "Hanlon Creek",
      "Westminster Woods",
      "Grange Hill East",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Wasps", "Raccoons", "Spiders", "Cockroaches", "Centipedes"],
    responseTime: "24–48 hours",
    description:
      "Guelph's commitment to environmental sustainability aligns perfectly with Ridgeline's eco-friendly approach. We deliver effective pest control using targeted, low-impact methods that protect your home and the Royal City's green spaces.",
    localChallenges:
      "Guelph's extensive trail system and river valleys create wildlife corridors through residential areas. Student housing near the University of Guelph sees seasonal pest turnover. The city's emphasis on green space means more wildlife interaction at the urban-rural boundary.",
    testimonials: [
      {
        name: "Catherine D.",
        location: "The Ward, Guelph",
        text: "Raccoons in our attic, right in the heart of Guelph. Ridgeline used a humane one-way door, sealed every entry, and restored the attic insulation. Eco-friendly and effective — exactly what Guelph expects.",
      },
      {
        name: "Peter H.",
        location: "Kortright Hills, Guelph",
        text: "Mice from the conservation area kept getting in. Ridgeline's exclusion work was meticulous — they found gaps I'd never have noticed. Zero mice since treatment.",
      },
    ],
    faqs: [
      {
        question: "Are your methods eco-friendly?",
        answer:
          "Yes. We use integrated pest management (IPM) principles — physical exclusion first, targeted low-toxicity treatments only when necessary. All products are Health Canada–approved.",
      },
      {
        question: "Do you work near the University of Guelph?",
        answer:
          "Yes. We serve student housing, rental properties, and family homes throughout Guelph, including areas near the university campus.",
      },
      {
        question: "What wildlife issues are common in Guelph?",
        answer:
          "Raccoons, squirrels, and skunks are the most common wildlife calls. Guelph's trail network and river valleys bring them into close contact with residential properties year-round.",
      },
    ],
  },

  // ─── Additional Areas (11) ────────────────────────────────────
  {
    slug: "barrie",
    name: "Barrie",
    region: "additional",
    route: "/pest-control-barrie",
    h1: "Barrie Pest Control — Same-Day Inspections Available",
    metaTitle: "Pest Control Barrie | Northern GTA Coverage",
    metaDescription:
      `Professional pest control in Barrie. PMRA-licensed service for homes and businesses. ${siteConfig.inspectionPoints}-point inspections and 12-month Zero-Comeback Guarantee.`,
    neighborhoods: [
      "Downtown Barrie",
      "Holly",
      "Painswick",
      "Ardagh",
      "Letitia Heights",
      "Bayfield",
      "East Barrie",
      "South Barrie",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Wasps", "Raccoons", "Squirrels", "Spiders", "Cluster Flies"],
    responseTime: "24–48 hours",
    description:
      "Barrie's lakefront setting and proximity to cottage country mean strong wildlife and insect pressure year-round. Ridgeline Pest Defence delivers the same thorough, guaranteed service our GTA clients rely on — right here in Barrie.",
    localChallenges:
      "Barrie's colder winters push mice and rats indoors earlier and harder than in the GTA. Kempenfelt Bay attracts wildlife, and cluster flies are a significant nuisance in fall. Properties bordering Simcoe County farmland face field mouse invasions every autumn.",
    testimonials: [
      {
        name: "Heather S.",
        location: "Holly, Barrie",
        text: "Cluster flies swarming our south-facing windows every October. Ridgeline treated the exterior and sealed the attic vents. Dramatic reduction — we can actually use those rooms now.",
      },
      {
        name: "Dan W.",
        location: "Painswick, Barrie",
        text: "Mice coming in from the field behind our subdivision. Ridgeline sealed the house top to bottom. Their inspector was incredibly thorough.",
      },
    ],
    faqs: [
      {
        question: "What are cluster flies and why are they in my Barrie home?",
        answer:
          "Cluster flies enter attics and wall voids in fall to overwinter. They're attracted to warm, south-facing surfaces. Barrie's climate makes them especially prevalent. Exterior treatment in late summer is the best prevention.",
      },
      {
        question: "Do you travel to Barrie from the GTA?",
        answer:
          "We have technicians serving Barrie and Simcoe County regularly. You get the same quality service and guarantee as our GTA clients.",
      },
      {
        question: "When should I prepare my Barrie home for winter pests?",
        answer:
          "Schedule exclusion work in September or early October, before the first hard frost. That's when mice and cluster flies begin seeking winter shelter.",
      },
    ],
  },
  {
    slug: "oshawa",
    name: "Oshawa",
    region: "additional",
    route: "/pest-control-oshawa",
    h1: "Trusted Pest Control for Oshawa Homes & Businesses",
    metaTitle: "Pest Control Oshawa | Durham Region Service",
    metaDescription:
      `Trusted pest control in Oshawa. Serving all Durham Region neighbourhoods. PMRA-licensed with ${siteConfig.inspectionPoints}-point inspections and 12-month guarantee.`,
    neighborhoods: [
      "Downtown Oshawa",
      "Lakeview",
      "Eastdale",
      "Samac",
      "Taunton",
      "Northwood",
      "McLaughlin",
      "Windfields",
    ],
    commonPests: ["Mice", "Rats", "Cockroaches", "Bed Bugs", "Ants", "Wasps", "Spiders", "Raccoons"],
    responseTime: "24 hours",
    description:
      "Oshawa's affordable housing, industrial heritage, and growing northern suburbs create a mix of pest challenges. Ridgeline Pest Defence serves all of Oshawa and Durham Region with fast, effective treatment.",
    localChallenges:
      "Oshawa's older South End housing has aging infrastructure that rodents and cockroaches exploit. The city's industrial areas attract rats. Northern Oshawa's rapid development displaces field mice into new subdivisions. Durham Region has seen a 30% increase in bed bug calls over the past five years.",
    testimonials: [
      {
        name: "Ross M.",
        location: "Lakeview, Oshawa",
        text: "Cockroaches in our rental property. Ridgeline treated both units, followed up twice, and confirmed they were gone. Tenants were relieved.",
      },
      {
        name: "Teresa K.",
        location: "Taunton, Oshawa",
        text: "Mice in our brand-new home. Ridgeline sealed the garage and utility areas the builder didn't. Should have called them before moving in.",
      },
    ],
    faqs: [
      {
        question: "Do you cover all of Durham Region?",
        answer:
          "Yes. We service Oshawa, Whitby, Ajax, Pickering, and surrounding areas. Our Durham Region technicians are dispatched daily throughout the area.",
      },
      {
        question: "Why do new Oshawa homes still get mice?",
        answer:
          "Builders focus on code compliance, not pest exclusion. Gaps around utility penetrations, garage door seals, and weep holes are common entry points in new construction.",
      },
      {
        question: "Can you treat bed bugs in an apartment building?",
        answer:
          "Yes. We coordinate with property managers to treat affected units and inspect adjacent ones. Bed bugs travel between units through shared walls, so a coordinated approach is essential.",
      },
    ],
  },
  {
    slug: "whitby",
    name: "Whitby",
    region: "additional",
    route: "/pest-control-whitby",
    h1: "Whitby's Pest Control Specialists — Licensed & Guaranteed",
    metaTitle: "Pest Control Whitby | Fast Durham Region Service",
    metaDescription:
      "Fast pest control in Whitby. Serving Brooklin, Downtown, Port Whitby & all areas. Eco-friendly treatments and 12-month Zero-Comeback Guarantee.",
    neighborhoods: [
      "Downtown Whitby",
      "Brooklin",
      "Port Whitby",
      "Pringle Creek",
      "Williamsburg",
      "Blue Grass Meadows",
      "Whitby Shores",
      "Lynde Creek",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Wasps", "Cockroaches", "Spiders", "Raccoons", "Centipedes"],
    responseTime: "24 hours",
    description:
      "Whitby's lakefront neighbourhoods, established suburbs, and the growing Brooklin community all need reliable pest control. Ridgeline Pest Defence delivers fast, guaranteed service across the entire town.",
    localChallenges:
      "Whitby's Lynde Creek and waterfront areas support rodent and raccoon populations. Brooklin's rapid expansion displaces field pests into new homes. Older downtown properties have classic entry points that seasonal temperature swings exploit.",
    testimonials: [
      {
        name: "Leah P.",
        location: "Brooklin, Whitby",
        text: "Ants colonized our new patio stones. Ridgeline treated the colony and applied a perimeter barrier. First ant-free summer since we moved in.",
      },
      {
        name: "John D.",
        location: "Port Whitby",
        text: "Raccoon in the attic — terrifying scratching at night. Ridgeline handled the removal and exclusion within 48 hours. Calm, professional, and thorough.",
      },
    ],
    faqs: [
      {
        question: "Do you service Brooklin?",
        answer:
          "Yes. Brooklin is a growing part of our Whitby service area. We're familiar with the new-construction pest challenges common in Brooklin's expanding subdivisions.",
      },
      {
        question: "How do I prevent ants from nesting under patio stones?",
        answer:
          "Proper polymeric sand fills gaps between stones. Ridgeline can treat existing colonies and apply perimeter barriers that discourage ants from re-establishing under hardscape.",
      },
      {
        question: "What's your response time in Whitby?",
        answer:
          "Most Whitby appointments are available within 24 hours. We prioritize active infestations and urgent wildlife situations.",
      },
    ],
  },
  {
    slug: "ajax",
    name: "Ajax",
    region: "additional",
    route: "/pest-control-ajax",
    h1: "Expert Pest Control in Ajax — Results Backed for 12 Months",
    metaTitle: "Pest Control Ajax | Lakefront & Suburban Service",
    metaDescription:
      "Professional pest control in Ajax. Serving all neighbourhoods from the lakefront to north Ajax. PMRA-licensed with 12-month guarantee.",
    neighborhoods: [
      "Downtown Ajax",
      "Pickering Village",
      "South Ajax",
      "Central Ajax",
      "North Ajax",
      "Salem",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Wasps", "Cockroaches", "Spiders", "Raccoons", "Bed Bugs"],
    responseTime: "24 hours",
    description:
      "Ajax's lakefront properties and suburban communities face seasonal pest challenges that require local expertise. Ridgeline Pest Defence serves every Ajax neighbourhood with proven treatment methods and guaranteed results.",
    localChallenges:
      "Ajax's waterfront and Duffins Creek attract rodents and raccoons. Central Ajax's mix of townhomes and apartments sees cockroach and bed bug activity. North Ajax's newer developments border agricultural land that displaces mice.",
    testimonials: [
      {
        name: "Annette F.",
        location: "South Ajax",
        text: "Mice in our townhouse complex. Ridgeline treated our unit and identified how they were getting in through the shared garage. Proper solution, not just a band-aid.",
      },
      {
        name: "Drew K.",
        location: "Pickering Village, Ajax",
        text: "Wasp nest inside the BBQ. Ridgeline came out the next day, removed it safely, and checked the rest of the property. Quick and professional.",
      },
    ],
    faqs: [
      {
        question: "Do you service townhome complexes in Ajax?",
        answer:
          "Yes. We work with both individual homeowners and property managers in Ajax's townhome communities. Coordinated treatment of shared walls and garages produces the best results.",
      },
      {
        question: "Are mice common in Ajax?",
        answer:
          "Very. Ajax's mix of waterfront, suburban, and rural-adjacent areas means mice are the number-one pest call. Fall exclusion work is the most effective prevention.",
      },
      {
        question: "Do you offer same-day service in Ajax?",
        answer:
          "Same-day service is often available depending on scheduling. Most Ajax appointments are confirmed within 24 hours of your call.",
      },
    ],
  },
  {
    slug: "pickering",
    name: "Pickering",
    region: "additional",
    route: "/pest-control-pickering",
    h1: "Reliable Pest Control Serving Pickering Since 2015",
    metaTitle: "Pest Control Pickering | Durham Region Experts",
    metaDescription:
      `Expert pest control in Pickering. PMRA-licensed service for residential and commercial properties. ${siteConfig.inspectionPoints}-point inspections and 12-month guarantee.`,
    neighborhoods: [
      "Pickering Town Centre",
      "Bay Ridges",
      "Liverpool",
      "Rougemount",
      "Amberlea",
      "Brock Ridge",
      "Dunbarton",
      "Highbush",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Wasps", "Raccoons", "Cockroaches", "Spiders", "Centipedes"],
    responseTime: "24 hours",
    description:
      "Pickering's Rouge River valley, lakefront communities, and northern rural areas bring diverse pest challenges. Ridgeline Pest Defence covers all of Pickering with the same thorough approach our clients across Ontario trust.",
    localChallenges:
      "The Rouge National Urban Park borders Pickering, creating constant wildlife pressure. Bay Ridges and lakefront properties attract moisture-dependent pests. Pickering's north end borders agricultural land, increasing field mouse activity in fall.",
    testimonials: [
      {
        name: "Natasha V.",
        location: "Bay Ridges, Pickering",
        text: "Centipedes everywhere in our basement. Ridgeline addressed the drainage issue outside and sealed foundation cracks. Massive improvement — wish we'd called sooner.",
      },
      {
        name: "Greg T.",
        location: "Amberlea, Pickering",
        text: "Raccoons tore open our soffit. Ridgeline repaired it with heavy-gauge steel mesh and installed one-way doors for the ones still inside. Professional wildlife work.",
      },
    ],
    faqs: [
      {
        question: "Does the Rouge Valley affect pest activity in Pickering?",
        answer:
          "Yes. The Rouge River and surrounding parkland support large populations of raccoons, skunks, and rodents. Properties near the valley benefit from proactive exclusion work.",
      },
      {
        question: "Do you cover north Pickering and Seaton?",
        answer:
          "Yes. We service all of Pickering from the lakefront to the northern rural areas, including the developing Seaton community.",
      },
      {
        question: "How do you prevent centipedes?",
        answer:
          "Centipedes follow moisture. Reducing basement humidity, improving exterior drainage, and sealing foundation cracks removes the conditions they need. We combine habitat modification with targeted treatment.",
      },
    ],
  },
  {
    slug: "milton",
    name: "Milton",
    region: "additional",
    route: "/pest-control-milton",
    h1: "Professional Pest Control Services in Milton",
    metaTitle: "Pest Control Milton | Halton Region Service",
    metaDescription:
      "Reliable pest control in Milton. Serving Old Milton, Bristol, Timberlea & all areas. Eco-friendly treatments with 12-month Zero-Comeback Guarantee.",
    neighborhoods: [
      "Old Milton",
      "Bristol",
      "Timberlea",
      "Willmott",
      "Dorset Park",
      "Harrison",
      "Coates",
      "Scott",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Wasps", "Raccoons", "Squirrels", "Spiders", "Cockroaches"],
    responseTime: "24 hours",
    description:
      "Milton is one of Canada's fastest-growing towns, and that growth stirs up pest activity. Ridgeline Pest Defence keeps pace with Milton's development, providing proven pest control for both new builds and established homes.",
    localChallenges:
      "Milton's explosive growth disturbs existing rodent and insect populations. New subdivisions in Bristol and Timberlea border the Niagara Escarpment and former farmland, pushing wildlife and field mice into homes. The Escarpment's wooded slopes are home to raccoons and squirrels that target residential attics.",
    testimonials: [
      {
        name: "Stephanie B.",
        location: "Timberlea, Milton",
        text: "Brand-new home, mice within the first month. Ridgeline sealed every utility penetration and weep hole the builder left open. No more midnight scratching.",
      },
      {
        name: "Keith M.",
        location: "Old Milton",
        text: "Squirrels chewing through our fascia board. Ridgeline replaced the damaged section with metal-backed material and sealed all vents. Problem solved permanently.",
      },
    ],
    faqs: [
      {
        question: "Why do new Milton homes get mice so quickly?",
        answer:
          "Construction disturbs field mouse populations and new homes have unsealed gaps around utilities, garage doors, and weep holes. These small openings are all a mouse needs to enter.",
      },
      {
        question: "Do you handle Escarpment wildlife in Milton?",
        answer:
          "Yes. Raccoons, squirrels, and skunks from the Escarpment regularly target Milton homes. We use humane exclusion methods and seal all entry points to prevent return.",
      },
      {
        question: "Is Milton within your regular service area?",
        answer:
          "Yes. Milton is in our Halton Region service zone. We have technicians in Milton, Georgetown, and Halton Hills daily.",
      },
    ],
  },
  {
    slug: "georgetown",
    name: "Georgetown",
    region: "additional",
    route: "/pest-control-georgetown",
    h1: "Georgetown Pest Control — Same-Day Inspections Available",
    metaTitle: "Pest Control Georgetown | Halton Hills Service",
    metaDescription:
      "Pest control in Georgetown and Halton Hills. PMRA-licensed technicians, eco-friendly methods, and 12-month guarantee.",
    neighborhoods: [
      "Downtown Georgetown",
      "Glen Williams",
      "Limehouse",
      "Silver Creek",
      "Hungry Hollow",
      "Georgetown South",
    ],
    commonPests: ["Mice", "Rats", "Carpenter Ants", "Wasps", "Raccoons", "Squirrels", "Spiders", "Ants"],
    responseTime: "24–48 hours",
    description:
      "Georgetown's small-town character, surrounded by conservation lands and the Credit River valley, means rich wildlife habitat right next to residential streets. Ridgeline Pest Defence delivers effective, eco-conscious pest control for Georgetown and Glen Williams.",
    localChallenges:
      "The Credit River and Hungry Hollow conservation area support raccoon, squirrel, and rat populations that interact with Georgetown homes. Mature trees throughout Glen Williams harbour carpenter ant colonies. Rural properties on the town's edge face higher mouse and wildlife pressure.",
    testimonials: [
      {
        name: "Martha K.",
        location: "Glen Williams",
        text: "Carpenter ants in our century home near the Credit River. Ridgeline located the main colony in a dead tree out back and two satellite nests in the house. Complete elimination.",
      },
      {
        name: "Andrew B.",
        location: "Downtown Georgetown",
        text: "Mice every winter. Ridgeline's fall exclusion service sealed the house and we've been mouse-free for two seasons. Consistent, reliable service.",
      },
    ],
    faqs: [
      {
        question: "Do you service Glen Williams and Limehouse?",
        answer:
          "Yes. We cover all of Halton Hills including Georgetown, Glen Williams, Limehouse, and rural properties in between.",
      },
      {
        question: "How do conservation areas affect pest activity?",
        answer:
          "Conservation lands provide habitat for wildlife and rodents that naturally expand into adjacent properties. Homes near the Credit River and Hungry Hollow benefit from proactive exclusion.",
      },
      {
        question: "Do you treat carpenter ants in rural properties?",
        answer:
          "Yes. Rural and semi-rural properties often have higher carpenter ant activity due to proximity to wooded areas. We locate all colonies — both in the home and on the property — for complete treatment.",
      },
    ],
  },
  {
    slug: "halton-hills",
    name: "Halton Hills",
    region: "additional",
    route: "/pest-control-halton-hills",
    h1: "Trusted Pest Control for Halton Hills Homes & Businesses",
    metaTitle: "Pest Control Halton Hills | Rural & Urban Coverage",
    metaDescription:
      `Pest control across Halton Hills. Serving Acton, rural properties, and all communities. PMRA-licensed with ${siteConfig.inspectionPoints}-point inspections and 12-month guarantee.`,
    neighborhoods: [
      "Acton",
      "Georgetown",
      "Glen Williams",
      "Limehouse",
      "Ballinafad",
      "Speyside",
      "Silver Creek",
      "Norval",
    ],
    commonPests: ["Mice", "Rats", "Carpenter Ants", "Wasps", "Raccoons", "Squirrels", "Spiders", "Cluster Flies"],
    responseTime: "24–48 hours",
    description:
      "Halton Hills combines small-town living with rural landscapes, creating pest challenges that range from field mice in farmhouses to raccoons in town. Ridgeline Pest Defence provides coverage from Acton to Norval and every rural road in between.",
    localChallenges:
      "Halton Hills' rural properties face persistent mouse and wildlife pressure from surrounding farmland and conservation areas. Cluster flies are a fall nuisance in countryside homes. Acton's older housing stock has more entry points than newer builds, and the town's proximity to the Escarpment increases wildlife encounters.",
    testimonials: [
      {
        name: "Barbara F.",
        location: "Acton, Halton Hills",
        text: "Rural property with a serious mouse problem every fall. Ridgeline's exclusion work on our farmhouse was incredibly thorough. First quiet winter in a decade.",
      },
      {
        name: "Neil C.",
        location: "Speyside, Halton Hills",
        text: "Cluster flies covering our south-facing walls in October. Ridgeline treated the exterior and sealed the attic. Night and day difference.",
      },
    ],
    faqs: [
      {
        question: "Do you service rural properties in Halton Hills?",
        answer:
          "Yes. We regularly treat farm properties, estate homes, and rural residences throughout Halton Hills. Rural properties benefit especially from our exclusion and prevention services.",
      },
      {
        question: "What are cluster flies?",
        answer:
          "Cluster flies are slightly larger than house flies and enter buildings in fall to overwinter in wall voids and attics. They don't bite or spread disease but gather in large, annoying numbers. Treatment before they enter is most effective.",
      },
      {
        question: "How do I protect a farmhouse from mice?",
        answer:
          "Seal all utility penetrations, install door sweeps, screen foundation vents, and eliminate food sources in outbuildings. Professional exclusion work in early fall is the most cost-effective approach.",
      },
    ],
  },
  {
    slug: "north-york",
    name: "North York",
    region: "additional",
    route: "/pest-control-north-york",
    h1: "Expert Pest Control in North York — Results Backed for 12 Months",
    metaTitle: "Pest Control North York | Fast Toronto Service",
    metaDescription:
      "Expert pest control in North York. Serving Willowdale, Don Mills, Bayview Village & all areas. Same-day inspections and 12-month guarantee.",
    neighborhoods: [
      "Willowdale",
      "Don Mills",
      "Bayview Village",
      "York Mills",
      "Lansing",
      "Newtonbrook",
      "Bathurst Manor",
      "Jane and Finch",
      "Downsview",
      "Flemingdon Park",
    ],
    commonPests: ["Mice", "Rats", "Cockroaches", "Bed Bugs", "Ants", "Raccoons", "Wasps", "Spiders"],
    responseTime: "Same day",
    description:
      "North York's density — from high-rise corridors along Yonge to residential streets in Willowdale — creates concentrated pest pressure. Ridgeline Pest Defence provides fast, effective treatment for North York's apartments, condos, and homes.",
    localChallenges:
      "North York's high-rise buildings along the Yonge corridor face cockroach and bed bug challenges that require coordinated multi-unit treatment. The Don Valley ravine system pushes raccoons and rats into residential areas. Older homes in Bathurst Manor and Willowdale have settlement cracks that mice exploit.",
    testimonials: [
      {
        name: "Yuna T.",
        location: "Willowdale, North York",
        text: "Cockroach issue in our building's garbage room was spreading to units. Ridgeline treated the common areas and affected units. The building manager was impressed enough to sign a maintenance contract.",
      },
      {
        name: "Rayan A.",
        location: "Don Mills, North York",
        text: "Raccoons using our roof as a highway. Ridgeline installed caps on all vents and sealed the soffit gaps. No more 3 AM footsteps above us.",
      },
    ],
    faqs: [
      {
        question: "Do you service high-rise buildings in North York?",
        answer:
          "Yes. We work with property managers and condo boards throughout North York's high-rise corridor. Coordinated treatment of common areas and individual units produces the best long-term results.",
      },
      {
        question: "How fast can you respond in North York?",
        answer:
          "Same-day service is available for North York. Most inspections are scheduled within hours of your call.",
      },
      {
        question: "Why are raccoons so common in North York?",
        answer:
          "The Don Valley ravine system runs through North York, providing natural raccoon habitat. They travel along ravines and enter residential areas to den in attics and sheds.",
      },
    ],
  },
  {
    slug: "scarborough",
    name: "Scarborough",
    region: "additional",
    route: "/pest-control-scarborough",
    h1: "Reliable Pest Control Serving Scarborough Since 2015",
    metaTitle: "Pest Control Scarborough | East Toronto Experts",
    metaDescription:
      "Reliable pest control in Scarborough. Serving Agincourt, Malvern, Birch Cliff & all areas. PMRA-licensed with same-day inspections available.",
    neighborhoods: [
      "Agincourt",
      "Malvern",
      "Birch Cliff",
      "Scarborough Town Centre",
      "Highland Creek",
      "Guildwood",
      "West Hill",
      "Morningside",
      "Woburn",
      "Bendale",
    ],
    commonPests: ["Mice", "Rats", "Cockroaches", "Bed Bugs", "Ants", "Raccoons", "Wasps", "Centipedes"],
    responseTime: "Same day",
    description:
      "Scarborough's diverse housing — from lakefront bungalows in Birch Cliff to apartment towers in Scarborough Town Centre — demands flexible pest control approaches. Ridgeline Pest Defence adapts our methods to match Scarborough's varied neighbourhoods.",
    localChallenges:
      "Scarborough's Highland Creek and Rouge River valleys harbour large raccoon and rat populations. Multi-unit buildings in the Town Centre area face persistent cockroach and bed bug pressures. The Bluffs create unique microclimate conditions that attract moisture-loving insects in lakefront homes.",
    testimonials: [
      {
        name: "Miriam C.",
        location: "Agincourt, Scarborough",
        text: "Bed bugs in our home after a trip. Ridgeline treated the bedrooms with heat and followed up twice. Complete elimination confirmed. Discreet and compassionate service.",
      },
      {
        name: "Wayne L.",
        location: "Highland Creek, Scarborough",
        text: "Rats from the creek were getting into our garage. Ridgeline sealed every gap, set up monitoring, and the problem was resolved within a week. Excellent follow-through.",
      },
    ],
    faqs: [
      {
        question: "Do you service Scarborough apartment buildings?",
        answer:
          "Yes. We work with property managers and individual tenants across Scarborough's apartment corridors. Multi-unit coordination ensures pests don't simply move between units.",
      },
      {
        question: "How do the Bluffs affect pest activity?",
        answer:
          "The Scarborough Bluffs create a lakeside microclimate with higher humidity. This attracts moisture-loving insects like centipedes and silverfish to nearby homes, especially those with older foundations.",
      },
      {
        question: "Can you treat bed bugs with heat in Scarborough?",
        answer:
          "Yes. Heat treatment raises room temperatures to levels that eliminate bed bugs at all life stages. It's chemical-free and effective in a single treatment for most cases.",
      },
    ],
  },
  {
    slug: "etobicoke",
    name: "Etobicoke",
    region: "additional",
    route: "/pest-control-etobicoke",
    h1: "Reliable Pest Control Serving Etobicoke Since 2015",
    metaTitle: "Pest Control Etobicoke | West Toronto Service",
    metaDescription:
      "Expert pest control in Etobicoke. Serving Mimico, Long Branch, Islington & all areas. Same-day inspections and 12-month Zero-Comeback Guarantee.",
    neighborhoods: [
      "Mimico",
      "Long Branch",
      "Islington",
      "The Kingsway",
      "Alderwood",
      "New Toronto",
      "Rexdale",
      "Humber Bay",
      "Richview",
      "Princess Gardens",
    ],
    commonPests: ["Mice", "Rats", "Cockroaches", "Bed Bugs", "Ants", "Raccoons", "Wasps", "Spiders"],
    responseTime: "Same day",
    description:
      "Etobicoke's lakefront communities, established residential streets, and apartment corridors each bring distinct pest pressures. Ridgeline Pest Defence delivers fast, effective service across all of West Toronto.",
    localChallenges:
      "Etobicoke's Humber River and Mimico Creek corridors funnel raccoons and rats into residential areas. The lakeshore's older housing stock in Mimico and Long Branch has more entry points. High-rise buildings along the waterfront face cockroach and bed bug challenges common to dense housing.",
    testimonials: [
      {
        name: "Penny O.",
        location: "Mimico, Etobicoke",
        text: "Rats from the creek behind our house. Ridgeline's team was here the same day, identified three entry points, and sealed everything. Haven't seen a rat since.",
      },
      {
        name: "Suzanne J.",
        location: "The Kingsway, Etobicoke",
        text: "Carpenter ants in our mature-lot home. Ridgeline traced the colony to a dead branch overhanging the roof. Removed the source and treated the affected framing. Thorough work.",
      },
    ],
    faqs: [
      {
        question: "Do you offer same-day pest control in Etobicoke?",
        answer:
          "Yes. Same-day service is available for Etobicoke residents. We prioritize active infestations and urgent wildlife situations.",
      },
      {
        question: "Why are rats common near the Humber River?",
        answer:
          "The Humber River provides water, food, and burrowing habitat for Norway rats. Properties within a few blocks of the river see higher rat activity, especially in fall when populations peak.",
      },
      {
        question: "Do you service Etobicoke condos and apartments?",
        answer:
          "Yes. We work with building managers, condo boards, and individual residents throughout Etobicoke's waterfront and inland apartment buildings.",
      },
    ],
  },

  // ─── Alberta (1) ──────────────────────────────────────────────
  {
    slug: "edmonton",
    name: "Edmonton",
    region: "alberta",
    route: "/pest-control-edmonton",
    h1: "Edmonton's Pest Control Specialists — Licensed & Guaranteed",
    metaTitle: "Pest Control Edmonton | Alberta's Trusted Service",
    metaDescription:
      `Professional pest control in Edmonton. PMRA-licensed technicians serving all areas. ${siteConfig.inspectionPoints}-point inspections and 12-month guarantee.`,
    neighborhoods: [
      "Downtown Edmonton",
      "Oliver",
      "Strathcona",
      "Mill Woods",
      "West Edmonton",
      "Jasper Place",
      "Bonnie Doon",
      "Clareview",
      "Windermere",
      "Riverbend",
    ],
    commonPests: ["Mice", "Rats", "Ants", "Wasps", "Bed Bugs", "Spiders", "Cockroaches", "Voles"],
    responseTime: "24–48 hours",
    description:
      "Edmonton's harsh winters and sprawling river valley create pest pressures unlike anywhere else we serve. Ridgeline Pest Defence brings our proven Ontario methods to Alberta, adapted for Edmonton's climate and housing styles.",
    localChallenges:
      "Edmonton's extreme cold drives mice and rats indoors aggressively from October through April. The North Saskatchewan River valley supports large populations of voles, mice, and wildlife. Mature neighbourhoods like Strathcona and Oliver have aging homes with numerous entry points. Edmonton is officially rat-free by provincial policy — but mice are everywhere.",
    testimonials: [
      {
        name: "Jason R.",
        location: "Strathcona, Edmonton",
        text: "Mice in our 1940s bungalow. Ridgeline sealed gaps we'd been patching with steel wool for years. Proper exclusion work makes all the difference. Zero mice this winter.",
      },
      {
        name: "Kelly M.",
        location: "Mill Woods, Edmonton",
        text: "Wasps under the deck every summer. Ridgeline removed the nests and treated the area to prevent rebuilding. Our kids can finally play in the backyard without us worrying.",
      },
      {
        name: "Amir H.",
        location: "Oliver, Edmonton",
        text: "Bed bugs in our apartment building. Ridgeline coordinated with the landlord and treated three units. Confirmed elimination in two follow-up visits. Handled everything professionally.",
      },
    ],
    faqs: [
      {
        question: "Does Ridgeline serve all of Edmonton?",
        answer:
          "Yes. We cover all Edmonton neighbourhoods from Downtown and Oliver to Mill Woods, West Edmonton, and Windermere. Our Alberta team operates throughout the city.",
      },
      {
        question: "I thought Alberta was rat-free?",
        answer:
          "Alberta has a strict rat control program that prevents rat establishment. However, mice, voles, and other rodents are common and not covered by the rat control program. Mice are Edmonton's number-one residential pest.",
      },
      {
        question: "How do Edmonton's winters affect pest activity?",
        answer:
          "Edmonton's extreme cold (-30°C and below) drives mice, voles, and insects indoors earlier and more aggressively than in Ontario. Fall exclusion work before October is critical for Edmonton homes.",
      },
      {
        question: "Do you offer the Neighbour Rate in Edmonton?",
        answer:
          "Yes. Our Neighbour Rate — 15% off when two homes on the same street book together — is available across all our service areas, including Edmonton.",
      },
    ],
  },
];

export const allLocations: LocationData[] = locationsRaw.map((location, index) => ({
  ...location,
  metaDescription: rotateBrandPhrases(location.metaDescription, index),
  description: rotateBrandPhrases(location.description, index),
  localChallenges: rotateBrandPhrases(location.localChallenges, index),
  testimonials: location.testimonials.map(testimonial => ({
    ...testimonial,
    text: rotateBrandPhrases(testimonial.text, index),
  })),
}));

export function getLocationBySlug(slug: string): LocationData | undefined {
  return allLocations.find((loc) => loc.slug === slug);
}

export function getLocationsByRegion(region: string): LocationData[] {
  return allLocations.filter((loc) => loc.region === region);
}
