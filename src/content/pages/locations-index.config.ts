import { siteConfig } from "@/content/site.config";

export const locationsIndexConfig = {
  hero: {
    badge: "Service Areas",
    heading: "Service Areas Across Southern Ontario",
    subtitle:
      "Ridgeline Pest Defence serves 32 cities across Ontario and Alberta. Find your area below and book a local technician.",
    cta: {
      primary: { label: "Book Your Inspection", href: "/contact" },
      phone: { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
    },
    backgroundAlt: "Map of Ridgeline Pest Defence service areas across Ontario",
  },

  regions: [
    {
      name: "Greater Toronto Area",
      cities: [
        { name: "Toronto", href: "/pest-control-toronto" },
        { name: "Mississauga", href: "/pest-control-mississauga" },
        { name: "Brampton", href: "/pest-control-brampton" },
        { name: "Vaughan", href: "/pest-control-vaughan" },
        { name: "Markham", href: "/pest-control-markham" },
        { name: "Richmond Hill", href: "/pest-control-richmond-hill" },
        { name: "Oakville", href: "/pest-control-oakville" },
        { name: "Burlington", href: "/pest-control-burlington" },
      ],
    },
    {
      name: "Hamilton-Niagara Region",
      cities: [
        { name: "Hamilton", href: "/pest-control-hamilton" },
        { name: "St. Catharines", href: "/pest-control-st-catharines" },
        { name: "Niagara Falls", href: "/pest-control-niagara-falls" },
        { name: "Welland", href: "/pest-control-welland" },
        { name: "Thorold", href: "/pest-control-thorold" },
        { name: "Grimsby", href: "/pest-control-grimsby" },
        { name: "Fort Erie", href: "/pest-control-fort-erie" },
      ],
    },
    {
      name: "Southwestern Ontario",
      cities: [
        { name: "London", href: "/pest-control-london" },
        { name: "Kitchener", href: "/pest-control-kitchener" },
        { name: "Waterloo", href: "/pest-control-waterloo" },
        { name: "Cambridge", href: "/pest-control-cambridge" },
        { name: "Guelph", href: "/pest-control-guelph" },
      ],
    },
    {
      name: "Additional Areas",
      cities: [
        { name: "Barrie", href: "/pest-control-barrie" },
        { name: "Oshawa", href: "/pest-control-oshawa" },
        { name: "Whitby", href: "/pest-control-whitby" },
        { name: "Ajax", href: "/pest-control-ajax" },
        { name: "Pickering", href: "/pest-control-pickering" },
        { name: "Milton", href: "/pest-control-milton" },
        { name: "Georgetown", href: "/pest-control-georgetown" },
        { name: "Halton Hills", href: "/pest-control-halton-hills" },
        { name: "North York", href: "/pest-control-north-york" },
        { name: "Scarborough", href: "/pest-control-scarborough" },
        { name: "Etobicoke", href: "/pest-control-etobicoke" },
      ],
    },
    {
      name: "Alberta",
      cities: [
        { name: "Edmonton", href: "/pest-control-edmonton" },
      ],
    },
  ],
} as const;

export type LocationsIndexConfig = typeof locationsIndexConfig;
