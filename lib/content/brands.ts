import type { Brand } from "./types";

export const brands: Brand[] = [
  {
    name: "Samsung",
    slug: "samsung",
    tagline: "Full-range Samsung appliance repair",
    specialty:
      "Widely used across refrigerators and washing machines in Delhi NCR homes, including inverter and digital inverter models.",
  },
  {
    name: "LG",
    slug: "lg",
    tagline: "LG refrigerator and washing machine specialists",
    specialty:
      "Strong coverage for LG's direct-drive washing machines and door-in-door refrigerators, including common OE/IE/FE error faults.",
  },
  {
    name: "IFB",
    slug: "ifb",
    tagline: "IFB front-load washing machine experts",
    specialty:
      "IFB is primarily a washing machine brand in India, and it's one of our highest-volume brands for drum, drain and PCB repairs.",
  },
  {
    name: "Bosch",
    slug: "bosch",
    tagline: "Premium Bosch dishwasher and washing machine repair",
    specialty:
      "Bosch appliances are common in premium kitchens; we handle Aquastop leak sensors, drain pumps and PCB diagnostics.",
  },
  {
    name: "Whirlpool",
    slug: "whirlpool",
    tagline: "Whirlpool refrigerator and washing machine repair",
    specialty:
      "Strong coverage for Whirlpool refrigerators and top-load washing machines, including common motor fault codes.",
  },
  {
    name: "Haier",
    slug: "haier",
    tagline: "Haier appliance repair",
    specialty:
      "Repair support for Haier refrigerators, washing machines and microwaves used across Delhi NCR homes.",
  },
  {
    name: "Hitachi",
    slug: "hitachi",
    tagline: "Hitachi refrigerator repair specialists",
    specialty:
      "Hitachi is best known in India for refrigerators; we handle compressor, cooling and inverter PCB faults.",
  },
];

export function getBrand(slug: string) {
  return brands.find((item) => item.slug === slug);
}
