import type { ComboPage } from "./types";

/**
 * Curated brand + service + location landing pages.
 * Deliberately NOT the full 7x7x5=245 matrix - see app/repair/[brand]/[service]/[location]/page.tsx,
 * which sets dynamicParams=false and only builds the combos listed here. Selected by realistic
 * search intent rather than mechanical coverage: Samsung/LG get the broadest spread since they
 * dominate Indian appliance-repair search volume, IFB is washing-machine-only (its specialty),
 * Bosch skews premium/dishwasher, Whirlpool is strongest on refrigerators, and Haier/Hitachi get
 * one flagship combo each. Dryer is excluded from every combo (low household penetration in
 * India makes a dryer combo page thin/low-intent) - dryer keeps its standalone service page only.
 */
export const combos: ComboPage[] = [
  {
    brandSlug: "samsung",
    serviceSlug: "refrigerator-repair",
    areaSlug: "faridabad",
    localIntro:
      "Samsung refrigerators are one of the most common brands in Faridabad homes, and our Faridabad-based technicians handle Samsung-specific faults like inverter compressor issues and 22 C sensor errors regularly.",
    whyThisCombo:
      "Faridabad is our home base, and Samsung is the highest-volume refrigerator brand we service here.",
    relatedProblemSlugs: ["refrigerator-not-cooling", "refrigerator-leaking-water"],
    relatedErrorCodeSlugs: ["samsung-22c"],
  },
  {
    brandSlug: "samsung",
    serviceSlug: "refrigerator-repair",
    areaSlug: "gurugram",
    localIntro:
      "Samsung refrigerators are widely used across Gurugram's high-rise societies and DLF phases, and our technicians are familiar with the space constraints and installation styles common in these buildings.",
    whyThisCombo:
      "Gurugram is a high-value secondary market with strong Samsung refrigerator ownership in apartment complexes.",
    relatedProblemSlugs: ["refrigerator-not-cooling"],
    relatedErrorCodeSlugs: ["samsung-22c"],
  },
  {
    brandSlug: "samsung",
    serviceSlug: "refrigerator-repair",
    areaSlug: "ballabhgarh",
    localIntro:
      "Ballabhgarh households rely on our Faridabad-based technician team for Samsung refrigerator repair, with same-day visits for cooling and compressor faults.",
    whyThisCombo:
      "Ballabhgarh shares technician coverage with Faridabad, keeping response times fast for this common brand.",
    relatedProblemSlugs: ["refrigerator-not-cooling", "refrigerator-making-loud-noise"],
    relatedErrorCodeSlugs: [],
  },
  {
    brandSlug: "samsung",
    serviceSlug: "washing-machine-repair",
    areaSlug: "faridabad",
    localIntro:
      "Samsung washing machines, especially digital inverter front-load models, are common across Faridabad - we regularly diagnose 4E water-fill and 5E drain faults on these machines.",
    whyThisCombo:
      "Samsung washing machine repair is one of our highest-demand combinations in our home service base.",
    relatedProblemSlugs: ["washing-machine-not-draining", "washing-machine-not-spinning"],
    relatedErrorCodeSlugs: ["samsung-4e", "samsung-5e", "samsung-ue"],
  },
  {
    brandSlug: "samsung",
    serviceSlug: "washing-machine-repair",
    areaSlug: "noida",
    localIntro:
      "Noida sector homes frequently call us for Samsung washing machine faults, from drainage issues to unbalanced-load spin errors.",
    whyThisCombo:
      "Noida is a high-density secondary market with strong Samsung washing machine ownership.",
    relatedProblemSlugs: ["washing-machine-not-draining", "washing-machine-not-spinning"],
    relatedErrorCodeSlugs: ["samsung-5e", "samsung-ue"],
  },
  {
    brandSlug: "samsung",
    serviceSlug: "washing-machine-repair",
    areaSlug: "ghaziabad",
    localIntro:
      "Ghaziabad, including Indirapuram and Vaishali, sees regular demand for Samsung washing machine repair, particularly drain and spin faults.",
    whyThisCombo:
      "Ghaziabad rounds out our Samsung washing machine coverage across the NCR's eastern belt.",
    relatedProblemSlugs: ["washing-machine-not-draining"],
    relatedErrorCodeSlugs: ["samsung-5e"],
  },
  {
    brandSlug: "samsung",
    serviceSlug: "microwave-repair",
    areaSlug: "faridabad",
    localIntro:
      "Samsung microwave ovens in Faridabad kitchens are commonly brought in for no-heat and sparking faults - both need a trained technician rather than DIY repair.",
    whyThisCombo:
      "Samsung is a leading microwave brand in our Faridabad service base.",
    relatedProblemSlugs: ["microwave-not-heating", "microwave-sparking"],
    relatedErrorCodeSlugs: [],
  },
  {
    brandSlug: "lg",
    serviceSlug: "refrigerator-repair",
    areaSlug: "faridabad",
    localIntro:
      "LG's door-in-door and inverter linear compressor refrigerators are common in Faridabad, and our technicians are experienced with LG-specific freezer fan (ER FF) faults.",
    whyThisCombo:
      "LG is the second-most common refrigerator brand we service in our home base.",
    relatedProblemSlugs: ["refrigerator-not-cooling"],
    relatedErrorCodeSlugs: ["lg-er-ff"],
  },
  {
    brandSlug: "lg",
    serviceSlug: "refrigerator-repair",
    areaSlug: "south-delhi",
    localIntro:
      "South Delhi homes, from Saket to Vasant Kunj, commonly own LG refrigerators - we cover cooling, compressor and freezer fan faults across the area.",
    whyThisCombo:
      "South Delhi is a strong secondary market for LG refrigerator service.",
    relatedProblemSlugs: ["refrigerator-not-cooling"],
    relatedErrorCodeSlugs: ["lg-er-ff"],
  },
  {
    brandSlug: "lg",
    serviceSlug: "washing-machine-repair",
    areaSlug: "faridabad",
    localIntro:
      "LG direct-drive washing machines are widely used in Faridabad, and OE drain errors are among the most common faults we diagnose on this brand.",
    whyThisCombo:
      "LG washing machine repair is a core, high-volume combination in our home base.",
    relatedProblemSlugs: ["washing-machine-not-draining", "washing-machine-not-spinning"],
    relatedErrorCodeSlugs: ["lg-oe", "lg-ie", "lg-fe", "lg-ue"],
  },
  {
    brandSlug: "lg",
    serviceSlug: "washing-machine-repair",
    areaSlug: "gurugram",
    localIntro:
      "Gurugram societies frequently report LG washing machine drain and inlet faults - our technicians carry common LG spare parts to resolve these on the first visit where possible.",
    whyThisCombo:
      "LG washing machines are heavily used across Gurugram's residential towers.",
    relatedProblemSlugs: ["washing-machine-not-draining"],
    relatedErrorCodeSlugs: ["lg-oe", "lg-ie"],
  },
  {
    brandSlug: "lg",
    serviceSlug: "washing-machine-repair",
    areaSlug: "greater-noida",
    localIntro:
      "Greater Noida and its extension sectors are covered by our Noida-based team for LG washing machine repair, including OE and FE fault diagnosis.",
    whyThisCombo:
      "Greater Noida extends our LG washing machine coverage from the neighbouring Noida market.",
    relatedProblemSlugs: ["washing-machine-not-draining"],
    relatedErrorCodeSlugs: ["lg-oe", "lg-fe"],
  },
  {
    brandSlug: "lg",
    serviceSlug: "microwave-repair",
    areaSlug: "noida",
    localIntro:
      "LG microwave ovens across Noida sectors are commonly serviced for no-heat and keypad faults by our team.",
    whyThisCombo:
      "LG is a widely-owned microwave brand across Noida households.",
    relatedProblemSlugs: ["microwave-not-heating"],
    relatedErrorCodeSlugs: [],
  },
  {
    brandSlug: "ifb",
    serviceSlug: "washing-machine-repair",
    areaSlug: "faridabad",
    localIntro:
      "IFB is primarily a washing machine brand in India, and it's one of our highest-volume brands in Faridabad - we regularly resolve E1 water-fill and E2 drain faults on IFB front-loaders.",
    whyThisCombo:
      "IFB's specialization in washing machines makes this our single highest-intent brand combination.",
    relatedProblemSlugs: ["washing-machine-not-draining", "washing-machine-leaking-water"],
    relatedErrorCodeSlugs: ["ifb-e1", "ifb-e2"],
  },
  {
    brandSlug: "ifb",
    serviceSlug: "washing-machine-repair",
    areaSlug: "ballabhgarh",
    localIntro:
      "Ballabhgarh households with IFB front-load washing machines get the same technician coverage as Faridabad, with fast response for drain and door-lock faults.",
    whyThisCombo:
      "IFB washing machine demand extends naturally from our Faridabad base into Ballabhgarh.",
    relatedProblemSlugs: ["washing-machine-not-draining"],
    relatedErrorCodeSlugs: ["ifb-e2"],
  },
  {
    brandSlug: "ifb",
    serviceSlug: "washing-machine-repair",
    areaSlug: "south-delhi",
    localIntro:
      "IFB washing machines are common in South Delhi apartments, and our technicians regularly handle E1 and E2 fault codes along with drum and PCB issues.",
    whyThisCombo:
      "South Delhi is a strong secondary market for IFB's premium front-load range.",
    relatedProblemSlugs: ["washing-machine-not-draining", "washing-machine-not-spinning"],
    relatedErrorCodeSlugs: ["ifb-e1", "ifb-e2"],
  },
  {
    brandSlug: "whirlpool",
    serviceSlug: "refrigerator-repair",
    areaSlug: "faridabad",
    localIntro:
      "Whirlpool refrigerators are common in Faridabad kitchens, and our technicians handle cooling, compressor and gasket faults on both single-door and frost-free models.",
    whyThisCombo:
      "Whirlpool is one of the strongest refrigerator brands we service in our home base.",
    relatedProblemSlugs: ["refrigerator-not-cooling"],
    relatedErrorCodeSlugs: [],
  },
  {
    brandSlug: "whirlpool",
    serviceSlug: "refrigerator-repair",
    areaSlug: "ghaziabad",
    localIntro:
      "Ghaziabad homes, including Indirapuram and Vaishali, regularly call us for Whirlpool refrigerator cooling faults and door gasket replacement.",
    whyThisCombo:
      "Whirlpool refrigerator ownership is strong across Ghaziabad's residential sectors.",
    relatedProblemSlugs: ["refrigerator-not-cooling"],
    relatedErrorCodeSlugs: [],
  },
  {
    brandSlug: "whirlpool",
    serviceSlug: "washing-machine-repair",
    areaSlug: "faridabad",
    localIntro:
      "Whirlpool top-load washing machines are common in Faridabad, and our technicians regularly diagnose F06 motor fault codes and spin-related issues.",
    whyThisCombo:
      "Whirlpool washing machine repair pairs naturally with our strong Whirlpool refrigerator coverage in this area.",
    relatedProblemSlugs: ["washing-machine-not-spinning"],
    relatedErrorCodeSlugs: ["whirlpool-f06"],
  },
  {
    brandSlug: "bosch",
    serviceSlug: "washing-machine-repair",
    areaSlug: "gurugram",
    localIntro:
      "Bosch washing machines are common in Gurugram's premium residential towers, and our technicians are experienced with Bosch's German-engineered drum and PCB systems.",
    whyThisCombo:
      "Bosch appliances skew toward premium households, which are concentrated in Gurugram.",
    relatedProblemSlugs: ["washing-machine-not-draining"],
    relatedErrorCodeSlugs: [],
  },
  {
    brandSlug: "bosch",
    serviceSlug: "refrigerator-repair",
    areaSlug: "south-delhi",
    localIntro:
      "Bosch refrigerators appear frequently in South Delhi's premium kitchens, and we handle cooling and compressor diagnostics on these models.",
    whyThisCombo:
      "South Delhi's premium housing stock has meaningful Bosch refrigerator ownership.",
    relatedProblemSlugs: ["refrigerator-not-cooling"],
    relatedErrorCodeSlugs: [],
  },
  {
    brandSlug: "bosch",
    serviceSlug: "dishwasher-repair",
    areaSlug: "gurugram",
    localIntro:
      "Bosch is the dishwasher brand we see most often in Gurugram's modern kitchens, and our technicians regularly resolve E15 Aquastop and E24 drain faults.",
    whyThisCombo:
      "Bosch dominates the dishwasher category in premium NCR kitchens, concentrated in Gurugram.",
    relatedProblemSlugs: ["dishwasher-leaking-water", "dishwasher-not-cleaning-properly"],
    relatedErrorCodeSlugs: ["bosch-e15", "bosch-e24"],
  },
  {
    brandSlug: "haier",
    serviceSlug: "refrigerator-repair",
    areaSlug: "faridabad",
    localIntro:
      "Haier refrigerators are a growing presence in Faridabad homes, and our technicians handle cooling and compressor diagnostics on these models.",
    whyThisCombo:
      "Faridabad has a solid base of Haier refrigerator ownership, our strongest market for the brand.",
    relatedProblemSlugs: ["refrigerator-not-cooling"],
    relatedErrorCodeSlugs: [],
  },
  {
    brandSlug: "hitachi",
    serviceSlug: "refrigerator-repair",
    areaSlug: "faridabad",
    localIntro:
      "Hitachi is best known in India for its inverter-compressor refrigerators, and Faridabad is where we see the strongest demand for Hitachi cooling and compressor repair.",
    whyThisCombo:
      "Hitachi's refrigerator specialization concentrates naturally in our Faridabad home base.",
    relatedProblemSlugs: ["refrigerator-not-cooling"],
    relatedErrorCodeSlugs: [],
  },
];

export function getCombo(brandSlug: string, serviceSlug: string, areaSlug: string) {
  return combos.find(
    (item) =>
      item.brandSlug === brandSlug &&
      item.serviceSlug === serviceSlug &&
      item.areaSlug === areaSlug,
  );
}

export function getCombosByBrand(brandSlug: string) {
  return combos.filter((item) => item.brandSlug === brandSlug);
}

export function getCombosByArea(areaSlug: string) {
  return combos.filter((item) => item.areaSlug === areaSlug);
}

export function getCombosByService(serviceSlug: string) {
  return combos.filter((item) => item.serviceSlug === serviceSlug);
}
