import { siteConfig } from "@/content/site.config";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  description?: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  children: NavItem[];
  megaMenu?: boolean;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export const navigationConfig = {
  header: {
    logo: {
      text: siteConfig.name,
      href: "/",
    },
    cta: {
      label: "Schedule Free Assessment",
      href: "/contact",
    },
    nav: [
      {
        label: "Pests We Treat",
        href: "/pests",
        megaMenu: true,
        children: [
          {
            label: "Crawlers",
            href: "/crawlers",
            description: "Professional control for crawling pests including ants, spiders, cockroaches, bed bugs, and termites. Same-day service available throughout Ontario.",
            children: [
              { label: "Ants", href: "/pests/ants" },
              { label: "Spiders", href: "/pests/spiders" },
              { label: "Cockroaches", href: "/pests/cockroaches" },
              { label: "Bed Bugs", href: "/pests/bed-bugs" },
              { label: "Centipedes", href: "/pests/centipedes" },
              { label: "Earwigs", href: "/pests/earwigs" },
              { label: "Fleas", href: "/pests/fleas" },
              { label: "Silverfish", href: "/pests/silverfish" },
              { label: "Termites", href: "/pests/termites" },
            ],
          },
          {
            label: "Flyers",
            href: "/flyers",
            description: "Expert removal of flying pests including wasps, hornets, flies, mosquitoes, and carpenter bees. Emergency stinging insect removal available.",
            children: [
              { label: "Wasps & Hornets", href: "/pests/wasps-hornets" },
              { label: "Flies", href: "/pests/flies" },
              { label: "Moths", href: "/pests/moths" },
              { label: "Mosquitoes", href: "/pests/mosquitoes" },
              { label: "Beetles", href: "/pests/beetles" },
              { label: "Boxelder Bugs", href: "/pests/boxelder-bugs" },
              { label: "Lady Bugs", href: "/pests/lady-bugs" },
              { label: "Carpenter Bees", href: "/pests/carpenter-bees" },
            ],
          },
          {
            label: "Rodents",
            href: "/rodents",
            description: "Comprehensive rodent control for mice, rats, and other small mammals. Humane exclusion methods and ongoing prevention programs available.",
            children: [
              { label: "Mice", href: "/pests/mice" },
              { label: "Rats", href: "/pests/rats" },
              { label: "Voles", href: "/pests/voles" },
              { label: "Chipmunks", href: "/pests/chipmunks" },
            ],
          },
          {
            label: "Wildlife",
            href: "/wildlife",
            description: "Humane wildlife removal for raccoons, squirrels, skunks, bats, and birds. Licensed professionals with eco-friendly exclusion techniques.",
            children: [
              { label: "Raccoons", href: "/pests/raccoons" },
              { label: "Squirrels", href: "/pests/squirrels" },
              { label: "Skunks", href: "/pests/skunks" },
              { label: "Bats", href: "/pests/bats" },
              { label: "Moles", href: "/pests/moles" },
              { label: "Birds", href: "/pests/birds" },
              { label: "Opossums", href: "/pests/opossums" },
            ],
          },
        ],
      },
      {
        label: "Residential",
        href: "/residential",
        children: [],
      },
      {
        label: "Commercial",
        href: "/commercial",
        children: [
          { label: "Industry-Specific Solutions", href: "/commercial" },
          { label: "Restaurant Pest Control", href: "/commercial/restaurant" },
          { label: "Office Building Pest Control", href: "/commercial/office" },
          { label: "Warehouse Pest Control", href: "/commercial/warehouse" },
          { label: "Healthcare Facility Pest Control", href: "/commercial/healthcare" },
          { label: "Commercial Ant Control", href: "/commercial/ant-control" },
          { label: "Commercial Cockroach Control", href: "/commercial/cockroach-control" },
          { label: "Commercial Rodent Control", href: "/commercial/rodent-control" },
        ],
      },
      {
        label: "Service Areas",
        href: "/locations",
        children: [
          {
            label: "GTA",
            href: "/locations",
            children: [
              { label: "Toronto", href: "/pest-control-toronto" },
              { label: "Mississauga", href: "/pest-control-mississauga" },
              { label: "Brampton", href: "/pest-control-brampton" },
              { label: "Markham", href: "/pest-control-markham" },
              { label: "Vaughan", href: "/pest-control-vaughan" },
              { label: "Richmond Hill", href: "/pest-control-richmond-hill" },
              { label: "Scarborough", href: "/pest-control-scarborough" },
              { label: "Etobicoke", href: "/pest-control-etobicoke" },
              { label: "North York", href: "/pest-control-north-york" },
              { label: "Pickering", href: "/pest-control-pickering" },
              { label: "Ajax", href: "/pest-control-ajax" },
              { label: "Oshawa", href: "/pest-control-oshawa" },
              { label: "Barrie", href: "/pest-control-barrie" },
              { label: "Whitby", href: "/pest-control-whitby" },
            ],
          },
          {
            label: "Hamilton-Niagara",
            href: "/locations",
            children: [
              { label: "Hamilton", href: "/pest-control-hamilton" },
              { label: "Burlington", href: "/pest-control-burlington" },
              { label: "Oakville", href: "/pest-control-oakville" },
              { label: "St. Catharines", href: "/pest-control-st-catharines" },
              { label: "Niagara Falls", href: "/pest-control-niagara-falls" },
              { label: "Welland", href: "/pest-control-welland" },
              { label: "Grimsby", href: "/pest-control-grimsby" },
              { label: "Thorold", href: "/pest-control-thorold" },
              { label: "Fort Erie", href: "/pest-control-fort-erie" },
            ],
          },
          {
            label: "Southwestern Ontario",
            href: "/locations",
            children: [
              { label: "London", href: "/pest-control-london" },
              { label: "Kitchener", href: "/pest-control-kitchener" },
              { label: "Waterloo", href: "/pest-control-waterloo" },
              { label: "Cambridge", href: "/pest-control-cambridge" },
              { label: "Guelph", href: "/pest-control-guelph" },
              { label: "Milton", href: "/pest-control-milton" },
              { label: "Georgetown", href: "/pest-control-georgetown" },
              { label: "Halton Hills", href: "/pest-control-halton-hills" },
            ],
          },
          {
            label: "Alberta",
            href: "/locations",
            children: [
              { label: "Edmonton", href: "/pest-control-edmonton" },
            ],
          },
        ],
      },
      {
        label: "Get Help Now",
        href: "/contact",
        children: [],
      },
    ] as NavGroup[],
  },

  footer: {
    columns: [
      {
        title: "Our Services",
        links: [
          { label: "Residential", href: "/residential" },
          { label: "Commercial", href: "/commercial" },
          { label: "Restaurant Pest Control", href: "/commercial/restaurant" },
          { label: "Office Building Pest Control", href: "/commercial/office" },
          { label: "Crawling Pests", href: "/crawlers" },
          { label: "Flying Pests", href: "/flyers" },
          { label: "Rodent Control", href: "/rodents" },
          { label: "Wildlife Control", href: "/wildlife" },
        ],
      },
      {
        title: "Commercial Solutions",
        links: [
          { label: "Commercial Ant Control", href: "/commercial/ant-control" },
          { label: "Cockroach Control", href: "/commercial/cockroach-control" },
          { label: "Rodent Control", href: "/commercial/rodent-control" },
          { label: "Warehouse Pest Control", href: "/commercial/warehouse" },
          { label: "Healthcare Facilities", href: "/commercial/healthcare" },
          { label: "Industry-Specific Solutions", href: "/commercial" },
        ],
      },
      {
        title: "Pest Library",
        links: [
          { label: "Ants", href: "/pests/ants" },
          { label: "Bed Bugs", href: "/pests/bed-bugs" },
          { label: "Cockroaches", href: "/pests/cockroaches" },
          { label: "Wasps & Hornets", href: "/pests/wasps-hornets" },
          { label: "Mice", href: "/pests/mice" },
          { label: "Rats", href: "/pests/rats" },
          { label: "View All Pests", href: "/pests" },
        ],
      },
      {
        title: "Service Areas",
        links: [
          { label: "Toronto", href: "/pest-control-toronto" },
          { label: "Mississauga", href: "/pest-control-mississauga" },
          { label: "Brampton", href: "/pest-control-brampton" },
          { label: "Hamilton", href: "/pest-control-hamilton" },
          { label: "Markham", href: "/pest-control-markham" },
          { label: "Oakville", href: "/pest-control-oakville" },
          { label: "Edmonton", href: "/pest-control-edmonton" },
          { label: "All Locations", href: "/locations" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Referral Program", href: "/referral" },
          { label: "Rebates & Assistance", href: "/pest-control-rebates" },
          { label: "Get Your Free Quote", href: "/quote" },
          { label: "Privacy Policy", href: "/privacy-policy" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Ant Prep Sheet", href: "/prep-sheet-ants" },
          { label: "Bed Bug Prep Sheet", href: "/prep-sheet-bedbugs" },
          { label: "Cockroach Prep Sheet", href: "/prep-sheet-cockroaches" },
        ],
      },
      {
        title: "Contact & Links",
        links: [
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
    ] as FooterColumn[],
  },
} as const;

export type NavigationConfig = typeof navigationConfig;
