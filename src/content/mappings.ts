/* ──────────────────────────────────────────────
   Unified lookup tables for pest slugs, city names, and route prefixes.
   Single source of truth — import from here instead of duplicating.
   ────────────────────────────────────────────── */

/** Maps pest slug → route prefix used in pest-city URLs */
export const PEST_ROUTE_PREFIX: Record<string, string> = {
  ants: "ant-control",
  mice: "rodent-control",
  rats: "rodent-control",
  squirrels: "squirrel-removal",
  "bed-bugs": "bed-bug-control",
  cockroaches: "cockroach-control",
  "wasps-hornets": "wasp-control",
};

/** Maps city slug → display name */
export const CITY_DISPLAY_NAMES: Record<string, string> = {
  toronto: "Toronto",
  mississauga: "Mississauga",
  brampton: "Brampton",
  hamilton: "Hamilton",
  london: "London",
  kitchener: "Kitchener",
  oakville: "Oakville",
  markham: "Markham",
  niagara: "Niagara Falls",
  "north-york": "North York",
  scarborough: "Scarborough",
  "richmond-hill": "Richmond Hill",
  waterloo: "Waterloo",
  "st-catharines": "St. Catharines",
  edmonton: "Edmonton",
  vaughan: "Vaughan",
  etobicoke: "Etobicoke",
};

/** Maps pest display name → slug for linking */
export const PEST_SLUG_MAP: Record<string, string> = {
  "Mice": "mice",
  "Rats": "rats",
  "Cockroaches": "cockroaches",
  "Bed Bugs": "bed-bugs",
  "Ants": "ants",
  "Carpenter Ants": "ants",
  "Raccoons": "raccoons",
  "Wasps": "wasps-hornets",
  "Spiders": "spiders",
  "Centipedes": "centipedes",
  "Silverfish": "silverfish",
  "Squirrels": "squirrels",
  "Cluster Flies": "flies",
  "Voles": "voles",
  "Termites": "termites",
  "Flies": "flies",
  "Mosquitoes": "mosquitoes",
  "Moths": "moths",
  "Beetles": "beetles",
  "Boxelder Bugs": "boxelder-bugs",
  "Lady Bugs": "lady-bugs",
  "Carpenter Bees": "carpenter-bees",
  "Chipmunks": "chipmunks",
  "Bats": "bats",
  "Moles": "moles",
  "Birds": "birds",
  "Opossums": "opossums",
  "Skunks": "skunks",
};
