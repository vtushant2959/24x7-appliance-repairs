import { slugify } from "@/lib/utils";
import type { Area } from "./types";

const raw: Omit<Area, "slug" | "map">[] = [
  {
    name: "Faridabad",
    nearbyAreaSlugs: ["ballabhgarh", "south-delhi"],
    intro:
      "Faridabad is our home base, with technicians positioned across the city for fast same-day doorstep visits.",
  },
  {
    name: "Ballabhgarh",
    nearbyAreaSlugs: ["faridabad"],
    intro:
      "Ballabhgarh is covered by the same Faridabad-based technician team, so response times stay quick.",
  },
  {
    name: "South Delhi",
    nearbyAreaSlugs: ["faridabad", "gurugram"],
    intro:
      "South Delhi neighbourhoods are served daily, from Saket and Greater Kailash to Vasant Kunj and beyond.",
  },
  {
    name: "Noida",
    nearbyAreaSlugs: ["greater-noida", "ghaziabad"],
    intro:
      "Noida sectors across the city are covered, with regular visits for refrigerator, washing machine and microwave repair.",
  },
  {
    name: "Greater Noida",
    nearbyAreaSlugs: ["noida"],
    intro:
      "Greater Noida and its extension sectors are covered by our Noida-based technician team.",
  },
  {
    name: "Ghaziabad",
    nearbyAreaSlugs: ["noida"],
    intro:
      "Ghaziabad, including Indirapuram and Vaishali, is served with same-day doorstep appliance repair.",
  },
  {
    name: "Gurugram",
    nearbyAreaSlugs: ["south-delhi"],
    intro:
      "Gurugram sectors and DLF phases are covered, with strong demand for AC-adjacent appliances like refrigerators and washing machines in high-rise societies.",
  },
];

export const areas: Area[] = raw.map((item) => ({
  ...item,
  slug: slugify(item.name),
  map:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(item.name + " appliance repair") +
    "&output=embed",
}));

export function getArea(slug: string) {
  return areas.find((item) => item.slug === slug);
}
