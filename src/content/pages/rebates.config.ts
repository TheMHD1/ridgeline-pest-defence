// Centralized rebate program contact details
const rebateContacts = {
  fortErie: { phone: "905-871-1600", phoneHref: "tel:+19058711600" },
  niagaraFalls: { phone: "905-356-7521", phoneHref: "tel:+19053567521" },
  portColborne: { phone: "905-835-2900", phoneHref: "tel:+19058352900" },
  welland: { phone: "905-735-1700", phoneHref: "tel:+19057351700" },
  lincoln: { phone: "905-563-8205", phoneHref: "tel:+19055638205" },
  lakeshore: { phone: "519-728-2700", phoneHref: "tel:+15197282700" },
} as const;

export const rebatesConfig = {
  hero: {
    badge: "Financial Assistance",
    heading: "Pest Control Rebates & Financial Assistance in the GTA",
    subtitle:
      "Several municipal, public health, and federal programs offer financial help for pest control. Here\u2019s what\u2019s available in your area.",
    backgroundAlt: "Pest control rebates and financial assistance programs in Ontario",
  },

  municipalPrograms: {
    heading: "Municipal Rebate Programs",
    description:
      "These local programs provide direct financial assistance for rodent control and pest management. These programs are available to residents of these municipalities regardless of which pest control company they choose.",
    programs: [
      {
        name: "Fort Erie",
        program: "Municipal Rodent Control Program",
        phone: rebateContacts.fortErie.phone,
        phoneHref: rebateContacts.fortErie.phoneHref,
        description:
          "The Town of Fort Erie offers a municipal rodent control program to assist residents with rodent infestations.",
      },
      {
        name: "Niagara Falls",
        program: "Rodent Prevention and Control Program",
        phone: rebateContacts.niagaraFalls.phone,
        phoneHref: rebateContacts.niagaraFalls.phoneHref,
        description:
          "Niagara Falls provides a rodent prevention and control program for eligible residential properties.",
      },
      {
        name: "Port Colborne",
        program: "Rodent Control Services",
        phone: rebateContacts.portColborne.phone,
        phoneHref: rebateContacts.portColborne.phoneHref,
        description:
          "Port Colborne offers rodent control services to help residents manage infestations in their homes.",
      },
      {
        name: "Welland",
        program: "Rodent Control Program",
        phone: rebateContacts.welland.phone,
        phoneHref: rebateContacts.welland.phoneHref,
        description:
          "The City of Welland runs a rodent control program offering assistance to residential property owners.",
      },
      {
        name: "Lincoln",
        program: "Residential Mice/Rat Removal Rebate Program (Pilot)",
        phone: rebateContacts.lincoln.phone,
        phoneHref: rebateContacts.lincoln.phoneHref,
        description:
          "Lincoln is piloting a rebate program for residential mice and rat removal to help offset treatment costs.",
      },
      {
        name: "Lakeshore",
        program: "Rat Abatement Program",
        phone: rebateContacts.lakeshore.phone,
        phoneHref: rebateContacts.lakeshore.phoneHref,
        description:
          "The Municipality of Lakeshore offers a rat abatement program to assist homeowners with rodent issues.",
      },
    ],
  },

  publicHealthPrograms: {
    heading: "Public Health Programs",
    description:
      "Regional public health units provide pest management resources and, in some cases, direct intervention for qualifying residents.",
    programs: [
      {
        name: "Peel Public Health",
        program: "Vector Control",
        coverage: "Mississauga, Brampton, Caledon",
        description:
          "Peel Public Health offers vector control services including pest management guidance and interventions for residents in Mississauga, Brampton, and Caledon.",
      },
      {
        name: "York Region Public Health",
        program: "Pest Management",
        coverage: "Markham, Vaughan, Richmond Hill",
        description:
          "York Region Public Health provides pest management support and resources for residents across Markham, Vaughan, and Richmond Hill.",
      },
      {
        name: "Toronto Public Health",
        program: "Pest Control Support",
        coverage: "Toronto",
        description:
          "Toronto Public Health offers pest control support services for eligible Toronto residents, including inspections and treatment assistance.",
      },
    ],
  },

  federalPrograms: {
    heading: "Federal Programs",
    description:
      "Federal housing programs may cover or subsidize pest control costs as part of broader housing maintenance and safety initiatives.",
    programs: [
      {
        name: "Canada Housing Benefit",
        description:
          "The Canada Housing Benefit provides financial assistance to eligible renters and homeowners, which may be applied toward necessary home maintenance including pest control.",
      },
      {
        name: "Indigenous Housing Programs",
        description:
          "Federal programs supporting Indigenous housing communities include provisions for pest control and home maintenance services.",
      },
    ],
  },
} as const;

export type RebatesConfig = typeof rebatesConfig;
