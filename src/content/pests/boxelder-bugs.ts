import type { PestData } from "@/content/types";

export const boxelderBugsPest: PestData = {
  slug: "boxelder-bugs",
  name: "Boxelder Bugs",
  category: "flyers",
  subspecies: [
    {
      name: "Eastern Boxelder Bug",
      description:
        "Boisea trivittata is the most common species east of the Rocky Mountains. Adults are 12–14mm long with distinctive red-orange wing veins against a black body, and they aggregate by the hundreds on sun-warmed surfaces each fall.",
    },
    {
      name: "Western Boxelder Bug",
      description:
        "Boisea rubrolineata is slightly smaller than its eastern counterpart and found primarily west of the Rockies. It has more extensive red markings and the same overwintering behavior, congregating on south- and west-facing building walls.",
    },
  ],
  shortDescription:
    "Boxelder bugs invade structures by the thousands each fall seeking warm overwintering sites. They do not bite or cause structural damage, but their sheer numbers and staining potential make them a serious nuisance.",
  fullDescription:
    "Boxelder bugs spend summer feeding harmlessly on boxelder, maple, and ash trees — sucking sap from seeds and leaves. When fall temperatures drop, their biology switches from feeding to survival. They seek south-facing walls warmed by afternoon sun, then squeeze through gaps as small as 1.5mm to reach the protected voids behind siding, soffits, and window frames.\n\nOnce inside wall voids, they enter a dormant state called diapause and remain inactive through winter. On warm winter days, some become disoriented and emerge into living spaces. When crushed or stressed, they release a pungent orange compound that stains curtains, upholstery, and painted surfaces permanently.\n\nRidgeline Pest Defence addresses boxelder bugs before they enter your home. A fall perimeter treatment combined with exclusion work blocks entry points during the narrow two-to-three-week window when aggregation behavior peaks. Spring treatments focus on removing overwintering populations as they exit wall voids.",
  signs: [
    "Large congregations of black-and-red bugs on south- or west-facing exterior walls in September and October",
    "Boxelder bugs clustering around window frames, door frames, and siding gaps seeking entry points",
    "Individual bugs appearing indoors on warm winter days, especially near sunny windows",
    "Orange-red staining on curtains, walls, or upholstery where bugs have been crushed",
    "Dead boxelder bugs accumulating in window tracks, light fixtures, and behind baseboards",
  ],
  healthRisks: [
    "Skin irritation from the defensive compound released when bugs are crushed or handled",
    "Allergic reactions in sensitive individuals exposed to large accumulations of bug debris and fecal material",
    "Permanent orange staining on fabrics, painted surfaces, and wallpaper from crushed-bug secretions",
  ],
  preventionTips: [
    "Seal all gaps around windows, doors, soffits, and utility penetrations before September — bugs exploit cracks as narrow as 1.5mm",
    "Replace damaged weatherstripping and install door sweeps on all exterior doors",
    "Repair torn window screens and ensure all attic and foundation vents have intact mesh covers",
    "Remove female (seed-bearing) boxelder trees within 60 meters of your home if practical, as they are the primary food source",
    "Avoid crushing bugs indoors — vacuum them instead and empty the bag outside immediately to prevent odor",
    "Power-wash exterior walls in early fall to remove aggregation pheromones left by previous years' populations",
  ],
  treatmentSteps: [
    {
      step: "Fall Timing Assessment",
      description:
        "Your technician monitors local boxelder bug activity to time the perimeter treatment during peak aggregation — typically a two-to-three-week window in September or October when daytime highs drop below 21°C.",
    },
    {
      step: "Exterior Perimeter Treatment",
      description:
        "A residual insecticide is applied to south- and west-facing walls, window frames, soffits, and foundation lines where bugs congregate. This contact barrier eliminates bugs before they reach entry points.",
    },
    {
      step: "Exclusion Sealing",
      description:
        "Gaps around windows, doors, utility lines, and siding joints are sealed with appropriate materials. This physical barrier provides long-term protection that outlasts any chemical application.",
    },
    {
      step: "Interior Vacuum & Removal",
      description:
        "Any bugs already inside the structure are removed via HEPA-filtered vacuum. This avoids crushing and the resulting staining and odor. Accessible wall voids are treated with a desiccant dust to eliminate overwintering populations.",
    },
    {
      step: "Spring Follow-Up",
      description:
        "A return visit in early spring addresses any surviving adults emerging from wall voids. Exterior entry points are re-inspected and re-sealed as needed before the next fall cycle.",
    },
  ],
  faqs: [
    {
      question: "Do boxelder bugs bite?",
      answer:
        "Boxelder bugs have piercing-sucking mouthparts designed for plant sap, not skin. In extremely rare cases, they may probe human skin if trapped against it, producing a minor prick similar to a pinprick. This is not a true bite and poses no health risk beyond momentary discomfort.",
    },
    {
      question: "Why do boxelder bugs only appear on one side of my house?",
      answer:
        "Boxelder bugs are heliotropic — they orient toward the sun for warmth. South- and west-facing walls absorb the most afternoon heat, making them the preferred aggregation surfaces. You will rarely see significant numbers on north-facing walls because those surfaces do not reach the temperatures bugs need to trigger overwintering behavior.",
    },
    {
      question: "Will removing my boxelder tree stop the problem?",
      answer:
        "Removing the nearest female boxelder tree reduces the local food source and can decrease populations significantly. However, boxelder bugs fly up to several hundred meters from their host trees, so removing a single tree may not eliminate the problem if other boxelder, maple, or ash trees exist in the neighborhood.",
    },
    {
      question: "Can I spray boxelder bugs with soap and water?",
      answer:
        "A solution of dish soap and water kills boxelder bugs on contact by breaking down their waxy exoskeleton. It works as a quick knockdown for visible clusters but provides no residual protection. Bugs that arrive after the spray dries are unaffected, so it is not a substitute for professional perimeter treatment and exclusion.",
    },
    {
      question: "How did boxelder bugs get inside my walls?",
      answer:
        "Boxelder bugs are flat-bodied and can compress through gaps as small as 1.5mm — roughly the thickness of a credit card. Common entry points include weep holes in brick veneer, gaps behind J-channel siding trim, unsealed soffit joints, and worn weatherstripping around doors and windows.",
    },
  ],
  seasonalStatus: "Peak Season: Fall (overwintering)",
  searchTerms: ["boxelder bug", "boxelder bugs", "box elder bug", "box elder bugs", "boxelder beetle"],
  relatedPestSlugs: ["lady-bugs", "beetles", "flies"],
  cityPageSlugs: [],
  image: {
    src: "/images/pests/pest-boxelder-bugs.webp",
    alt: "Cluster of boxelder bugs congregating on a sun-warmed exterior wall showing black bodies with red-orange wing markings",
  },
};
