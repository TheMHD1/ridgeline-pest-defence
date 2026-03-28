import { siteConfig } from "@/content/site.config";

export interface PrepSheetData {
  slug: string;
  pestName: string;
  heading: string;
  subtitle: string;
  sections: {
    title: string;
    items: string[];
  }[];
}

export const prepSheetsConfig = {
  sheets: {
    ants: {
      slug: "ants",
      pestName: "Ants",
      heading: "Ant Treatment Preparation Sheet",
      subtitle:
        "Follow these steps before your scheduled ant treatment to help our technicians deliver the most effective results.",
      sections: [
        {
          title: "Kitchen & Dining Areas",
          items: [
            "Remove all food items from countertops and open shelving",
            "Clean behind and under appliances (stove, refrigerator, microwave)",
            "Empty and clean kitchen cabinets where ant activity has been observed",
            "Wipe down all surfaces to remove crumbs and food residue",
            "Store dry goods in sealed containers",
            "Empty and clean recycling bins and garbage cans",
          ],
        },
        {
          title: "Bathrooms & Wet Areas",
          items: [
            "Fix any dripping faucets or leaking pipes \u2014 ants are attracted to moisture",
            "Remove items stored under sinks to allow technician access",
            "Clean bathroom counters and floors thoroughly",
          ],
        },
        {
          title: "Living Spaces",
          items: [
            "Vacuum all floors, paying extra attention to baseboards and corners",
            "Move furniture slightly away from walls where possible",
            "Pick up pet food bowls and store pet food in sealed containers",
            "Remove items from floors along walls and in closets",
          ],
        },
        {
          title: "Exterior Preparation",
          items: [
            "Trim bushes and branches that touch the exterior walls of your home",
            "Move firewood, mulch, and yard debris at least 3 feet from the foundation",
            "Clear items stored against the exterior walls (planters, tools, bins)",
            "Ensure technician access to the perimeter of your home",
          ],
        },
        {
          title: "After Treatment",
          items: [
            "Do not mop or clean treated areas for at least 7 days",
            "Avoid disturbing bait placements \u2014 they are working even if you still see ants",
            "Continue to keep food stored properly and clean up spills immediately",
            "Call for emergency treatment if ant activity increases or persists beyond 14 days",
          ],
        },
      ],
    } satisfies PrepSheetData,

    bedbugs: {
      slug: "bedbugs",
      pestName: "Bed Bugs",
      heading: "Bed Bug Treatment Preparation Sheet",
      subtitle:
        "Proper preparation is critical for bed bug treatment success. Follow every step below \u2014 skipping steps can reduce treatment effectiveness significantly.",
      sections: [
        {
          title: "Bedding & Linens",
          items: [
            "Strip all bedding (sheets, pillowcases, mattress covers, blankets) and wash on the highest heat setting",
            "Dry all items on the highest heat setting for at least 30 minutes",
            "Place clean items in sealed plastic bags until after treatment",
            "Do not put clean items back on beds until cleared by your technician",
          ],
        },
        {
          title: "Clothing & Fabric Items",
          items: [
            "Wash and dry all clothing from infested rooms on the highest heat settings",
            "Items that cannot be washed (shoes, bags, delicates) should go in the dryer on high heat for 30 minutes",
            "Store all clean clothing in sealed plastic bags away from infested areas",
            "Remove all fabric items from closets and dressers in affected rooms",
          ],
        },
        {
          title: "Furniture & Rooms",
          items: [
            "Pull beds and furniture at least 2 feet from walls",
            "Remove all items from under beds",
            "Empty nightstands and bedside drawers",
            "Remove wall hangings, clocks, and outlet covers in affected rooms",
            "Vacuum all floors, mattresses, box springs, and upholstered furniture thoroughly",
            "Immediately dispose of the vacuum bag in a sealed outdoor bin",
          ],
        },
        {
          title: "General Preparation",
          items: [
            "Declutter all rooms being treated \u2014 reduce hiding spots",
            "Ensure all rooms are accessible and cleared of floor items",
            "Plan to be out of your home during treatment and for the time specified by your technician",
            "Keep pets away from treated areas for the duration specified",
          ],
        },
        {
          title: "After Treatment",
          items: [
            "Do not rearrange furniture or place items against walls for at least 2 weeks",
            "Continue sleeping in your bed \u2014 this is important for the treatment to work",
            "Avoid vacuuming treated areas for at least 14 days",
            "Inspect for activity and report any signs to your technician immediately",
            "A follow-up treatment is typically scheduled \u2014 do not skip it",
          ],
        },
      ],
    } satisfies PrepSheetData,

    cockroaches: {
      slug: "cockroaches",
      pestName: "Cockroaches",
      heading: "Cockroach Treatment Preparation Sheet",
      subtitle:
        "Cockroach treatments work best when the environment is properly prepared. Follow these steps to maximize treatment effectiveness.",
      sections: [
        {
          title: "Kitchen Preparation",
          items: [
            "Empty all cabinets and drawers in the kitchen \u2014 remove dishes, food, and utensils",
            "Clean behind and under all major appliances (refrigerator, stove, dishwasher)",
            "Remove everything from the top of the refrigerator and above cabinets",
            "Clean all surfaces with soap and water to remove grease and food residue",
            "Store all food in sealed containers or in the refrigerator",
            "Empty and clean garbage cans and recycling bins",
          ],
        },
        {
          title: "Bathroom Preparation",
          items: [
            "Empty all bathroom cabinets and under-sink storage",
            "Fix any leaking faucets or pipes \u2014 cockroaches need water to survive",
            "Clean all surfaces, especially behind toilets and under sinks",
            "Remove bath mats, towels, and toiletries from counters",
          ],
        },
        {
          title: "General Living Areas",
          items: [
            "Vacuum all floors thoroughly, including baseboards and corners",
            "Move furniture away from walls where possible",
            "Remove items from closet floors in affected areas",
            "Pick up pet food and water bowls",
            "Remove any shelf liners from cabinets and closets",
          ],
        },
        {
          title: "Important Notes",
          items: [
            "All people and pets must leave during treatment and stay away for the time specified by your technician",
            "Cover or remove fish tanks and turn off the air pump",
            "Inform your technician of any severe allergies or health conditions",
            "Do not use any over-the-counter pest sprays before or after professional treatment \u2014 they interfere with our products",
          ],
        },
        {
          title: "After Treatment",
          items: [
            "Do not clean treated areas for at least 14 days",
            "You may see increased cockroach activity for the first 1\u20132 weeks \u2014 this is normal as the treatment flushes them from hiding spots",
            "Keep all food sealed and clean up crumbs and spills immediately",
            "Do not apply any other pesticides or cleaning products to treated areas",
            "Report persistent activity if it has not decreased after 3 weeks",
          ],
        },
      ],
    } satisfies PrepSheetData,
  },

  cta: {
    heading: "Ready for Your Treatment?",
    description:
      "If you have questions about preparation or need to reschedule, reach out to our team.",
    phone: {
      label: `Call: ${siteConfig.contact.phone}`,
      href: siteConfig.contact.phoneHref,
    },
    email: {
      label: siteConfig.contact.email,
      href: siteConfig.contact.emailHref,
    },
    bookCta: { label: "Book Your Treatment", href: "/contact" },
  },
} as const;

export type PrepSheetsConfig = typeof prepSheetsConfig;
