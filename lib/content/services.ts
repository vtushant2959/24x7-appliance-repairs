import type { Service } from "./types";

export const services: Service[] = [
  {
    name: "Refrigerator Repair",
    slug: "refrigerator-repair",
    appliance: "refrigerator",
    shortDescription:
      "Doorstep diagnosis and repair for cooling loss, leaks, ice build-up and compressor faults.",
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
    shortDescription:
      "Front-load and top-load repair for drainage, spin, noise and door lock faults.",
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
    shortDescription:
      "Safe diagnosis for no-heat, sparking, turntable and keypad faults across solo, grill and convection models.",
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
    shortDescription:
      "Repair for poor cleaning, drain blockage, leaks and error codes on built-in and freestanding dishwashers.",
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
    shortDescription:
      "Repair for no-heat, drum, lint and sensor faults on vented and condenser dryers.",
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

export function getService(slug: string) {
  return services.find((item) => item.slug === slug);
}
