import type { ErrorCode } from "./types";

export const errorCodes: ErrorCode[] = [
  {
    slug: "samsung-4e",
    brandSlug: "samsung",
    code: "4E",
    applianceCategory: "washing machine",
    serviceSlug: "washing-machine-repair",
    meaning: "Water fill error — the machine isn't detecting enough water inflow within the expected time.",
    severity: "Safe to check yourself",
    likelyCauses: [
      "Water tap not fully open or water supply cut off",
      "Kinked or blocked inlet hose",
      "Clogged inlet valve filter mesh",
      "Low household water pressure",
    ],
    diySteps: [
      "Check the tap supplying the machine is fully open",
      "Straighten the inlet hose if kinked",
      "If comfortable, unscrew the inlet hose and check the small filter mesh for debris",
    ],
    relatedProblemSlug: null,
  },
  {
    slug: "samsung-5e",
    brandSlug: "samsung",
    code: "5E",
    applianceCategory: "washing machine",
    serviceSlug: "washing-machine-repair",
    meaning: "Drain error — the machine can't drain water within the expected time.",
    severity: "Call a technician",
    likelyCauses: [
      "Blocked drain filter or pump",
      "Kinked or blocked drain hose",
      "Faulty drain pump motor",
    ],
    diySteps: [
      "Check the drain hose isn't kinked or blocked",
      "If your model has an accessible drain filter, check it for debris (unplug the machine first)",
    ],
    relatedProblemSlug: "washing-machine-not-draining",
  },
  {
    slug: "samsung-ue",
    brandSlug: "samsung",
    code: "UE",
    applianceCategory: "washing machine",
    serviceSlug: "washing-machine-repair",
    meaning: "Unbalanced load — the machine has stopped the spin cycle to protect the motor and bearings.",
    severity: "Safe to check yourself",
    likelyCauses: [
      "Load bunched to one side of the drum",
      "Single heavy item (blanket, towel) spinning off-centre",
      "Machine not level on the floor",
    ],
    diySteps: [
      "Open the door and redistribute the load evenly",
      "Reduce load size if it's a single bulky item",
      "Check the machine is standing level",
    ],
    relatedProblemSlug: "washing-machine-not-spinning",
  },
  {
    slug: "samsung-22c",
    brandSlug: "samsung",
    code: "22 C / 22 E",
    applianceCategory: "refrigerator",
    serviceSlug: "refrigerator-repair",
    meaning: "Defrost sensor fault — the refrigerator's defrost temperature sensor is reporting an abnormal reading.",
    severity: "Call a technician",
    likelyCauses: [
      "Faulty defrost sensor",
      "Wiring connection issue to the sensor",
      "Control board fault",
    ],
    diySteps: null,
    relatedProblemSlug: "refrigerator-not-cooling",
  },
  {
    slug: "lg-oe",
    brandSlug: "lg",
    code: "OE",
    applianceCategory: "washing machine",
    serviceSlug: "washing-machine-repair",
    meaning: "Drain error — LG's code for a failure to drain water within the expected time.",
    severity: "Call a technician",
    likelyCauses: [
      "Blocked drain filter or pump",
      "Kinked drain hose",
      "Faulty drain pump",
    ],
    diySteps: [
      "Check the drain hose isn't kinked",
      "Check the drain filter (usually bottom-front) for debris, if accessible",
    ],
    relatedProblemSlug: "washing-machine-not-draining",
  },
  {
    slug: "lg-ie",
    brandSlug: "lg",
    code: "IE",
    applianceCategory: "washing machine",
    serviceSlug: "washing-machine-repair",
    meaning: "Water inlet error — the machine isn't filling with water within the expected time.",
    severity: "Safe to check yourself",
    likelyCauses: [
      "Water tap not fully open",
      "Kinked inlet hose",
      "Clogged inlet valve filter",
    ],
    diySteps: [
      "Check the water supply tap is fully open",
      "Straighten the inlet hose",
    ],
    relatedProblemSlug: null,
  },
  {
    slug: "lg-fe",
    brandSlug: "lg",
    code: "FE",
    applianceCategory: "washing machine",
    serviceSlug: "washing-machine-repair",
    meaning: "Overflow error — the machine has detected excess water in the tub.",
    severity: "Call a technician",
    likelyCauses: [
      "Faulty water level sensor",
      "Stuck-open inlet valve",
      "Control board fault",
    ],
    diySteps: null,
    relatedProblemSlug: null,
  },
  {
    slug: "lg-ue",
    brandSlug: "lg",
    code: "UE",
    applianceCategory: "washing machine",
    serviceSlug: "washing-machine-repair",
    meaning: "Unbalanced load — the machine has paused the spin cycle to protect the motor and bearings.",
    severity: "Safe to check yourself",
    likelyCauses: [
      "Load bunched to one side of the drum",
      "Machine not level",
    ],
    diySteps: [
      "Redistribute the load evenly and restart the spin cycle",
      "Check the machine is standing level",
    ],
    relatedProblemSlug: "washing-machine-not-spinning",
  },
  {
    slug: "lg-er-ff",
    brandSlug: "lg",
    code: "ER FF",
    applianceCategory: "refrigerator",
    serviceSlug: "refrigerator-repair",
    meaning: "Freezer fan error — the freezer compartment fan isn't operating correctly.",
    severity: "Call a technician",
    likelyCauses: [
      "Ice build-up obstructing the fan blades",
      "Faulty fan motor",
      "Wiring fault to the fan",
    ],
    diySteps: null,
    relatedProblemSlug: "refrigerator-not-cooling",
  },
  {
    slug: "bosch-e15",
    brandSlug: "bosch",
    code: "E15",
    applianceCategory: "dishwasher",
    serviceSlug: "dishwasher-repair",
    meaning: "Aquastop leak-sensor error — water has been detected in the base pan of the dishwasher.",
    severity: "Call a technician",
    likelyCauses: [
      "Internal leak from a hose, valve or pump seal",
      "Overfilling from excess detergent/suds",
      "Faulty Aquastop sensor itself",
    ],
    diySteps: [
      "Turn off the dishwasher and check you haven't used regular dish soap instead of dishwasher detergent",
      "Do not continue running cycles until the leak source is confirmed",
    ],
    relatedProblemSlug: "dishwasher-leaking-water",
  },
  {
    slug: "bosch-e24",
    brandSlug: "bosch",
    code: "E24",
    applianceCategory: "dishwasher",
    serviceSlug: "dishwasher-repair",
    meaning: "Drain error — the dishwasher isn't draining water correctly.",
    severity: "Call a technician",
    likelyCauses: [
      "Blocked drain hose or filter",
      "Faulty drain pump",
      "Kinked drain connection under the sink",
    ],
    diySteps: [
      "Check the filter at the bottom of the dishwasher for debris",
      "Check the drain hose under the sink isn't kinked",
    ],
    relatedProblemSlug: "dishwasher-not-cleaning-properly",
  },
  {
    slug: "ifb-e1",
    brandSlug: "ifb",
    code: "E1",
    applianceCategory: "washing machine",
    serviceSlug: "washing-machine-repair",
    meaning: "Water fill fault — the machine isn't detecting sufficient water inflow.",
    severity: "Safe to check yourself",
    likelyCauses: [
      "Water tap not fully open",
      "Low water pressure",
      "Blocked inlet filter",
    ],
    diySteps: [
      "Check the water supply tap and household pressure",
      "Check the inlet hose isn't kinked",
    ],
    relatedProblemSlug: null,
  },
  {
    slug: "ifb-e2",
    brandSlug: "ifb",
    code: "E2",
    applianceCategory: "washing machine",
    serviceSlug: "washing-machine-repair",
    meaning: "Drain fault — the machine isn't draining water within the expected time.",
    severity: "Call a technician",
    likelyCauses: [
      "Blocked drain filter or pump",
      "Kinked drain hose",
    ],
    diySteps: [
      "Check the drain hose for kinks or blockage",
    ],
    relatedProblemSlug: "washing-machine-not-draining",
  },
  {
    slug: "whirlpool-f06",
    brandSlug: "whirlpool",
    code: "F06",
    applianceCategory: "washing machine",
    serviceSlug: "washing-machine-repair",
    meaning: "Motor fault — a common Whirlpool code indicating the motor isn't responding correctly to control commands.",
    severity: "Call a technician",
    likelyCauses: [
      "Worn motor carbon brushes",
      "Faulty motor control board",
      "Wiring connection fault between the board and motor",
    ],
    diySteps: null,
    relatedProblemSlug: "washing-machine-not-spinning",
  },
];

export function getErrorCode(slug: string) {
  return errorCodes.find((item) => item.slug === slug);
}

export function getErrorCodesByBrand(brandSlug: string) {
  return errorCodes.filter((item) => item.brandSlug === brandSlug);
}

export function getErrorCodesByService(serviceSlug: string) {
  return errorCodes.filter((item) => item.serviceSlug === serviceSlug);
}
