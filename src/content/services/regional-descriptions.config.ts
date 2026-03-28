export const serviceDescriptionVariants: Record<string, {
  residential: (commonPests: readonly string[]) => string;
  commercial: string;
  wildlife: string;
  atticRestoration: string;
}> = {
  gta: {
    residential: (pests) => `${pests[0]} and ${pests[1] ?? "ant"} pressures are highest in GTA's older housing stock. Our 47-point inspection maps all entry points before we treat — not after.`,
    commercial: "Toronto-area businesses face regulatory scrutiny on pest records. Get written service reports after each visit — ready for health inspections.",
    wildlife: "GTA ravine systems funnel raccoons, skunks, and squirrels into residential and commercial properties year-round. Humane one-way doors plus full exclusion.",
    atticRestoration: "Raccoon urine in attic insulation creates persistent odour and health risks. We sanitize, remove contaminated insulation, and replace it to current R-value standards.",
  },
  "hamilton-niagara": {
    residential: (pests) => `${pests[0]} problems in Hamilton-Niagara's mixed industrial and residential areas require species-level identification. One treatment approach does not fit all pest types.`,
    commercial: "Hamilton's industrial sector creates unique pest pressure at food facilities, warehouses, and loading docks. Monthly inspections provide compliance documentation you can trust.",
    wildlife: "Niagara's green corridors push wildlife into backyards and roof spaces. Ontario-compliant one-way exclusion systems seal all re-entry points.",
    atticRestoration: "Squirrel and raccoon damage to attic insulation is common in Hamilton's older housing. Full sanitization, odour neutralization, and insulation replacement.",
  },
  southwestern: {
    residential: (pests) => `${pests[0]} activity in Southwestern Ontario's subdivisions peaks when surrounding agricultural land is disturbed. We treat the source, not just the symptom.`,
    commercial: "Southwestern Ontario's food processing and agricultural supply businesses require documented pest management. Detailed service records ensure audit readiness when you need it.",
    wildlife: "Field mice, groundhogs, and skunks move from farmland into Southwestern Ontario homes every fall. Humane exclusion systems prevent repeat entry.",
    atticRestoration: "Bat colonies are common in Southwestern Ontario's older buildings. We handle exclusion under Ontario regulations and restore contaminated insulation safely.",
  },
  alberta: {
    residential: (pests) => `Edmonton's extreme temperature swings drive ${pests[0].toLowerCase()} and other pests indoors by late September. We seal entry points before the first hard frost.`,
    commercial: "Edmonton commercial properties face pest pressure across a longer cold season than Ontario. Pre-winter exclusion and spring re-entry inspections protect your business year-round.",
    wildlife: "Gophers, mice, and magpies create entry points in Edmonton's newer subdivisions. Full exclusion plus soil-level sealing keeps wildlife from returning.",
    atticRestoration: "Edmonton attic damage from rodents and birds is accelerated by freeze-thaw cycling. We restore insulation to Alberta building code requirements.",
  },
  default: {
    residential: (pests) => `${pests[0]} and ${pests[1] ?? "ant"} activity requires species-specific treatment. Our 47-point inspection identifies all entry points before we treat.`,
    commercial: "Keep your business compliant and pest-free with scheduled maintenance plans and written service reports after every visit.",
    wildlife: "Humane one-way door systems for raccoons, squirrels, and skunks, plus full exclusion to prevent re-entry.",
    atticRestoration: "Sanitization, insulation replacement, and odour elimination after wildlife damage — restored to current building code standards.",
  },
};