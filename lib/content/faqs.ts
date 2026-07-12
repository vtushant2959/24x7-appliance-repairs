import type { FaqItem } from "./types";

export type FaqCategory =
  | "general"
  | "pricing"
  | "booking"
  | "service"
  | "brand"
  | "area";

export interface CategorizedFaq extends FaqItem {
  category: FaqCategory;
  serviceSlug?: string;
  brandSlug?: string;
  areaSlug?: string;
}

export const faqs: CategorizedFaq[] = [
  // General
  {
    category: "general",
    question: "What areas does 24x7 Appliance Repairs cover?",
    answer:
      "We provide doorstep appliance repair across Faridabad, Ballabhgarh, South Delhi, Noida, Greater Noida, Ghaziabad and Gurugram.",
  },
  {
    category: "general",
    question: "What appliances do you repair?",
    answer:
      "We repair refrigerators, washing machines, microwave ovens, dishwashers and clothes dryers, across Samsung, LG, IFB, Bosch, Whirlpool, Haier and Hitachi models.",
  },
  {
    category: "general",
    question: "Do you offer same-day repair?",
    answer:
      "Yes. Most bookings get a same-day technician visit in active service areas, subject to technician availability at the time of booking.",
  },
  {
    category: "general",
    question: "Are your technicians trained and background-verified?",
    answer:
      "Our technicians are trained on major appliance brands and repair categories, and are briefed on respectful, professional in-home conduct before every visit.",
  },
  {
    category: "general",
    question: "Do I need to bring my appliance anywhere?",
    answer:
      "No. All repairs are doorstep — a technician visits your home or office to inspect and repair the appliance on-site wherever possible.",
  },
  {
    category: "general",
    question: "What if my appliance can't be repaired on-site?",
    answer:
      "If a part needs to be sourced or the fault requires workshop-level equipment, the technician explains the timeline clearly before proceeding.",
  },
  // Pricing & warranty
  {
    category: "pricing",
    question: "How much does appliance repair cost?",
    answer:
      "Cost depends on the appliance, fault and spare part required. The technician inspects the appliance first and shares a clear estimate before any repair work begins — you approve the cost, there are no surprise charges.",
  },
  {
    category: "pricing",
    question: "Is there a visit or inspection charge?",
    answer:
      "Any inspection charge is communicated at the time of booking or on arrival, before the technician opens the appliance.",
  },
  {
    category: "pricing",
    question: "Do you use original spare parts?",
    answer:
      "We use original or OEM-equivalent spare parts where available, and the technician confirms part sourcing with you before fitting it.",
  },
  {
    category: "pricing",
    question: "Do you provide warranty on repairs?",
    answer:
      "Warranty coverage depends on the repair type and spare part used. The technician explains the applicable service support before closing the job.",
  },
  {
    category: "pricing",
    question: "Is repair always better than buying a new appliance?",
    answer:
      "Usually yes when the appliance is under about eight years old, the cabinet and body are in good condition, and the repair cost is reasonable compared with replacement. The technician gives an honest recommendation either way.",
  },
  // Booking
  {
    category: "booking",
    question: "How do I book a repair?",
    answer:
      "Call, WhatsApp, or fill in the booking form on this website with your appliance, brand, area and preferred time — we confirm the visit and dispatch the nearest technician.",
  },
  {
    category: "booking",
    question: "Can I choose a preferred time slot?",
    answer:
      "Yes, the booking form lets you select a preferred date and time slot (morning, afternoon, evening or emergency), and we do our best to match it based on technician availability.",
  },
  {
    category: "booking",
    question: "Do you offer emergency repair outside normal hours?",
    answer:
      "For urgent faults like leaks or electrical smell, call or WhatsApp directly and mention it's an emergency — we prioritise these requests where a technician is available.",
  },
  {
    category: "booking",
    question: "Can I reschedule my booking?",
    answer:
      "Yes, call or WhatsApp us with your booking details and preferred new time, and we'll adjust the technician schedule.",
  },
  // Service-specific
  {
    category: "service",
    serviceSlug: "refrigerator-repair",
    question: "How long does refrigerator repair usually take?",
    answer:
      "Most refrigerator repairs take 45 to 90 minutes after diagnosis. Compressor, gas charging or PCB faults can take longer depending on the model.",
  },
  {
    category: "service",
    serviceSlug: "refrigerator-repair",
    question: "Why is my refrigerator not cooling but the light is on?",
    answer:
      "This usually points to a compressor, thermostat, gas leak or condenser fault rather than a power issue. See our Refrigerator Not Cooling guide, or book an inspection for an exact diagnosis.",
  },
  {
    category: "service",
    serviceSlug: "washing-machine-repair",
    question: "Why is my washing machine leaking water?",
    answer:
      "Common causes include a damaged inlet pipe, loose drain hose, worn door gasket, clogged filter or tub seal issue. Stop using the machine and book an inspection to avoid floor and motor damage.",
  },
  {
    category: "service",
    serviceSlug: "washing-machine-repair",
    question: "Do you repair both front-load and top-load washing machines?",
    answer:
      "Yes, we repair both front-load and top-load washing machines across all major brands, including drum, motor, PCB and drainage faults.",
  },
  {
    category: "service",
    serviceSlug: "microwave-repair",
    question: "Is it safe to use my microwave if it's sparking?",
    answer:
      "No. Stop using it immediately — sparking usually means a damaged waveguide cover, metal contact inside, or a faulting magnetron, and continued use can damage the appliance further or pose a safety risk.",
  },
  {
    category: "service",
    serviceSlug: "microwave-repair",
    question: "Which microwave brands do you repair?",
    answer:
      "We repair Samsung, LG, IFB, Bosch, Whirlpool, Haier and Hitachi microwave ovens, including solo, grill and convection models.",
  },
  {
    category: "service",
    serviceSlug: "dishwasher-repair",
    question: "Why are my dishes still dirty after a wash cycle?",
    answer:
      "This is often caused by a blocked spray arm, clogged filter, low water pressure or an undissolved detergent tablet. A technician can identify the exact cause during inspection.",
  },
  {
    category: "service",
    serviceSlug: "dishwasher-repair",
    question: "How much does dishwasher repair cost?",
    answer:
      "Cost varies by fault — drain cleaning, inlet valve replacement, motor work and PCB repair are priced differently after inspection.",
  },
  {
    category: "service",
    serviceSlug: "dryer-repair",
    question: "Why is my dryer running but not heating?",
    answer:
      "This is commonly a faulty heating element, thermal fuse, or thermostat. It's electrical, so avoid DIY repair and book a technician inspection.",
  },
  {
    category: "service",
    serviceSlug: "dryer-repair",
    question: "Is a burning smell from my dryer dangerous?",
    answer:
      "Yes — stop using the dryer immediately and unplug it. A burning smell can indicate lint build-up near the heating element or a wiring fault, both of which are fire risks.",
  },
  // Brand-specific
  {
    category: "brand",
    brandSlug: "samsung",
    question: "Do you repair Samsung inverter refrigerators?",
    answer:
      "Yes, including diagnosis of inverter compressor faults, PCB issues and common error codes like 22 C on Samsung refrigerators.",
  },
  {
    category: "brand",
    brandSlug: "lg",
    question: "What does the OE error mean on my LG washing machine?",
    answer:
      "OE is LG's drain error code, usually caused by a blocked drain filter, kinked hose or faulty drain pump. See our LG error code guide for the full breakdown.",
  },
  {
    category: "brand",
    brandSlug: "ifb",
    question: "Do you specialise in IFB washing machines?",
    answer:
      "Yes, IFB is one of our highest-volume brands — we regularly handle drum, drain, PCB and door lock faults on IFB front-load machines.",
  },
  {
    category: "brand",
    brandSlug: "bosch",
    question: "What is the E15 error on a Bosch dishwasher?",
    answer:
      "E15 is Bosch's Aquastop leak-sensor error, triggered when water is detected in the base pan. It usually needs a technician visit to confirm the source before continuing use.",
  },
  {
    category: "brand",
    brandSlug: "whirlpool",
    question: "Do you repair Whirlpool refrigerators and washing machines?",
    answer:
      "Yes, including common Whirlpool motor fault codes like F06 on washing machines and cooling faults on refrigerators.",
  },
  {
    category: "brand",
    brandSlug: "haier",
    question: "Do you repair Haier appliances?",
    answer:
      "Yes, we service Haier refrigerators, washing machines and microwaves across our coverage areas.",
  },
  {
    category: "brand",
    brandSlug: "hitachi",
    question: "Why is my Hitachi refrigerator not cooling?",
    answer:
      "Hitachi refrigerators are known for their inverter compressors — a cooling drop is often a compressor, gas or inverter PCB fault, best confirmed by inspection.",
  },
  // Area-specific
  {
    category: "area",
    areaSlug: "faridabad",
    question: "Do you provide same-day appliance repair in Faridabad?",
    answer:
      "Yes, Faridabad is our home base with technicians positioned across the city for fast same-day visits.",
  },
  {
    category: "area",
    areaSlug: "ballabhgarh",
    question: "Is Ballabhgarh covered for doorstep repair?",
    answer:
      "Yes, Ballabhgarh is covered by our Faridabad-based technician team with same-day availability in most cases.",
  },
  {
    category: "area",
    areaSlug: "south-delhi",
    question: "Which South Delhi areas do you cover?",
    answer:
      "We cover South Delhi neighbourhoods including Saket, Greater Kailash, Vasant Kunj and nearby localities.",
  },
  {
    category: "area",
    areaSlug: "noida",
    question: "Do you repair appliances across all Noida sectors?",
    answer:
      "Yes, we cover Noida sectors with regular technician visits for refrigerator, washing machine, microwave and dishwasher repair.",
  },
  {
    category: "area",
    areaSlug: "greater-noida",
    question: "Is Greater Noida covered for appliance repair?",
    answer:
      "Yes, Greater Noida and its extension sectors are served by our Noida-based technician team.",
  },
  {
    category: "area",
    areaSlug: "ghaziabad",
    question: "Do you cover Indirapuram and Vaishali in Ghaziabad?",
    answer:
      "Yes, Ghaziabad including Indirapuram and Vaishali is covered with same-day doorstep appliance repair.",
  },
  {
    category: "area",
    areaSlug: "gurugram",
    question: "Do you repair appliances in Gurugram high-rise societies?",
    answer:
      "Yes, we regularly service Gurugram sectors and DLF phases, including high-rise apartments and gated societies.",
  },
];

export function getFaqsByCategory(category: FaqCategory) {
  return faqs.filter((item) => item.category === category);
}

export function getFaqsByService(serviceSlug: string) {
  return faqs.filter((item) => item.serviceSlug === serviceSlug);
}

export function getFaqsByBrand(brandSlug: string) {
  return faqs.filter((item) => item.brandSlug === brandSlug);
}

export function getFaqsByArea(areaSlug: string) {
  return faqs.filter((item) => item.areaSlug === areaSlug);
}
