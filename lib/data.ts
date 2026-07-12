import { slugify } from "@/lib/utils";
export const services = [
  {
    name: "AC Repair",
    slug: "ac-repair",
    appliance: "air conditioner",
    image:
      "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?auto=format&fit=crop&w=1200&q=80",
    issues: [
      "No cooling",
      "Gas leakage",
      "Water leakage",
      "Compressor fault",
      "Bad odour",
      "Remote or PCB issue",
    ],
  },
  {
    name: "Refrigerator Repair",
    slug: "refrigerator-repair",
    appliance: "refrigerator",
    image:
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=1200&q=80",
    issues: [
      "Low cooling",
      "Water leakage",
      "Ice build-up",
      "Compressor fault",
      "Thermostat issue",
      "Door gasket damage",
    ],
  },
  {
    name: "Washing Machine Repair",
    slug: "washing-machine-repair",
    appliance: "washing machine",
    image:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80",
    issues: [
      "Water leakage",
      "Drum not spinning",
      "Drain error",
      "Noise during wash",
      "Door lock issue",
      "Vibration",
    ],
  },
  {
    name: "Microwave Repair",
    slug: "microwave-repair",
    appliance: "microwave oven",
    image:
      "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=1200&q=80",
    issues: [
      "No heating",
      "Sparking",
      "Turntable not moving",
      "Keypad failure",
      "Door switch issue",
      "Fuse fault",
    ],
  },
  {
    name: "Dishwasher Repair",
    slug: "dishwasher-repair",
    appliance: "dishwasher",
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80",
    issues: [
      "Poor cleaning",
      "Drain blockage",
      "Water leakage",
      "Spray arm fault",
      "Tablet not dissolving",
      "Error code",
    ],
  },
  {
    name: "Dryer Repair",
    slug: "dryer-repair",
    appliance: "clothes dryer",
    image:
      "https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?auto=format&fit=crop&w=1200&q=80",
    issues: [
      "No heat",
      "Drum not rotating",
      "Lint blockage",
      "Burning smell",
      "Sensor issue",
      "Long drying time",
    ],
  },
];
export const brands = [
  "Samsung",
  "LG",
  "IFB",
  "Bosch",
  "Whirlpool",
  "Voltas",
  "Panasonic",
  "Haier",
  "Toshiba",
  "Hitachi",
].map((name) => ({ name, slug: slugify(name + " repair") }));
export const areas = [
  "Faridabad",
  "South Delhi",
  "Noida",
  "Greater Noida",
  "Ghaziabad",
  "Gurugram",
  "Ballabhgarh",
].map((name) => ({
  name,
  slug: slugify(name),
  map:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(name + " appliance repair") +
    "&output=embed",
}));
export const trustPoints = [
  "Same day doorstep visit",
  "Trained appliance technicians",
  "Transparent inspection before repair",
  "Original spare parts where available",
  "Service support after completion",
  "Clean, respectful home visits",
];
const seeds = [
  [
    "How much does refrigerator repair cost?",
    "Refrigerator repair pricing depends on the fault, spare part requirement and model type. The technician shares an estimate after inspection, so you approve the work before repair starts.",
  ],
  [
    "Why is my washing machine leaking?",
    "A washing machine can leak due to a damaged inlet pipe, loose drain hose, worn door gasket, clogged filter or tub seal issue. Stop using it and book an inspection to prevent floor and motor damage.",
  ],
  
  [
    "Which microwave brands do you repair?",
    "We repair Samsung, LG, IFB, Bosch, Whirlpool, Panasonic, Haier, Toshiba, Hitachi and other common microwave oven brands used in Delhi NCR homes.",
  ],
  [
    "How long does refrigerator repair take?",
    "Many refrigerator repairs take 45 to 90 minutes after diagnosis. Compressor, gas charging or PCB repairs can take longer depending on the model and fault severity.",
  ],
  [
    "Do you provide doorstep service?",
    "Yes. The Home Appliance Services provides doorstep appliance repair across Faridabad, South Delhi, Noida, Greater Noida, Gurugram, Ghaziabad and Ballabhgarh.",
  ],
  [
    "How much does dishwasher repair cost?",
    "Dishwasher repair cost varies by problem. Drain cleaning, inlet valve replacement, motor work and PCB repair are priced differently after inspection.",
  ],
  [
    "Is appliance repair better than replacement?",
    "Repair is often better when the appliance is under eight years old, the cabinet is in good condition and the repair cost is reasonable compared with replacement.",
  ],
  [
    "Do you repair inverter appliances?",
    "Yes. We handle many inverter refrigerators, and modern washing machines, including diagnosis of sensors, PCBs and compressor-related issues.",
  ],
  [
    "Do you provide warranty on repair?",
    "Warranty depends on the repair type and spare part used. The technician explains applicable service support before the job is closed.",
  ],
];
export const faqs = Array.from({ length: 100 }, (_, index) => {
  const base = seeds[index % seeds.length];
  if (index < seeds.length) return { question: base[0], answer: base[1] };
  const area = areas[Math.floor(index / seeds.length) % areas.length].name;
  const service = services[index % services.length].name.toLowerCase();
  return {
    question: base[0].replace("?", ` for ${service} in ${area}?`),
    answer:
      base[1] +
      " For " +
      service +
      " in " +
      area +
      ", call or WhatsApp The Home Appliance Services for a quick doorstep visit.",
  };
});
const articleTitles = [
  "Complete Refrigerator Repair Guide for Delhi NCR Homes",
  "Why Your Washing Machine Is Leaking and What to Do Next",
  "Microwave Not Heating: Safe Diagnosis and Repair Guide",
  "Dishwasher Problems Indian Homes Face Most Often",
  "Dryer Not Heating: Practical Troubleshooting Guide",
  "Same Day Appliance Repair: What Customers Should Expect",
  "How to Choose a Reliable Appliance Repair Company",
  "Samsung Appliance Repair Guide for Common Faults",
  "LG Washing Machine and Refrigerator Repair Tips",
  "Bosch Dishwasher Repair: Symptoms and Solutions",
  "Whirlpool Refrigerator Problems and Repair Options",
  "Appliance Maintenance Checklist for Busy Families",
  "Doorstep Appliance Repair in Faridabad: Local Guide",
  "Appliance Repair in Noida: Cost, Time and Service Tips",
  "Gurugram Appliance Repair: How to Avoid Repeat Faults",
  "Ghaziabad Home Appliance Service Guide",
  "Repair or Replace: Smart Appliance Decisions",
  "How Original Spare Parts Improve Appliance Life",
];
export const blogIdeas = Array.from({ length: 100 }, (_, index) => ({
  title:
    index < articleTitles.length
      ? articleTitles[index]
      : `${services[index % services.length].name} tips for ${areas[index % areas.length].name} homeowners`,
  slug: slugify(
    index < articleTitles.length
      ? articleTitles[index]
      : `${services[index % services.length].name} tips for ${areas[index % areas.length].name} homeowners`,
  ),
}));
export const articles = blogIdeas
  .slice(0, 20)
  .map((item, index) => ({
    ...item,
    category: services[index % services.length].name,
    area: areas[index % areas.length].name,
    service: services[index % services.length].name,
    excerpt: `A practical homeowner guide from The Home Appliance Services covering symptoms, repair choices, pricing clarity and maintenance for ${services[index % services.length].name.toLowerCase()} in ${areas[index % areas.length].name}.`,
  }));
export function getService(slug: string) {
  return services.find((item) => item.slug === slug);
}
export function getArea(slug: string) {
  return areas.find((item) => item.slug === slug);
}
export function getBrand(slug: string) {
  return brands.find((item) => item.slug === slug);
}
export function getArticle(slug: string) {
  return articles.find((item) => item.slug === slug);
}
