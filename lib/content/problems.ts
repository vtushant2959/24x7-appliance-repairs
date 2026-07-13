import type { Problem } from "./types";

export const problems: Problem[] = [
  {
    name: "Refrigerator Not Cooling",
    slug: "refrigerator-not-cooling",
    serviceSlug: "refrigerator-repair",
    symptoms: [
      "Interior feels warm or only mildly cool",
      "Freezer stays cold but the fridge section doesn't",
      "Compressor runs constantly without cooling down",
      "Food spoils faster than usual",
    ],
    likelyCauses: [
      {
        cause: "Dirty or blocked condenser coils",
        explanation:
          "Dust build-up on the coils at the back or bottom of the fridge stops heat from escaping, so the compressor struggles to cool.",
      },
      {
        cause: "Faulty door gasket",
        explanation:
          "A worn or torn door seal lets cold air escape continuously, so the compressor can never catch up.",
      },
      {
        cause: "Low refrigerant / gas leak",
        explanation:
          "A slow gas leak reduces cooling capacity gradually over weeks, often with the compressor running longer than normal.",
      },
      {
        cause: "Compressor or start relay fault",
        explanation:
          "If the compressor doesn't start or cycles off quickly, the refrigerant can't circulate at all.",
      },
    ],
    diySafetyChecks: [
      "Check the door closes fully and the gasket isn't visibly torn or loose",
      "Make sure nothing is blocking the internal air vents inside the fridge",
      "Vacuum visible dust off the back/bottom condenser coils if easily accessible",
      "Confirm the thermostat dial hasn't been accidentally turned down",
    ],
    whenToCallAPro: [
      "Cooling doesn't improve after basic checks within a few hours",
      "You hear unusual clicking, humming or the compressor cycling on/off rapidly",
      "There's a chemical or burning smell near the back of the unit",
      "The fridge is under 8 years old and repair is likely more economical than replacement",
    ],
    relatedErrorCodeSlugs: ["samsung-22c", "lg-er-ff"],
    relatedProblemSlugs: ["refrigerator-making-loud-noise", "refrigerator-leaking-water"],
  },
  {
    name: "Refrigerator Leaking Water",
    slug: "refrigerator-leaking-water",
    serviceSlug: "refrigerator-repair",
    symptoms: [
      "Puddle of water forming under or inside the fridge",
      "Water pooling in the vegetable/crisper drawers",
      "Ice building up unusually at the back panel",
    ],
    likelyCauses: [
      {
        cause: "Blocked defrost drain",
        explanation:
          "Food debris or ice can block the small drain hole at the back of the fridge, causing melted frost to overflow inside instead of draining away.",
      },
      {
        cause: "Damaged or disconnected drain pan",
        explanation:
          "The pan under the fridge that collects defrost water can crack or slip out of place over time.",
      },
      {
        cause: "Door gasket letting in humid air",
        explanation:
          "A poor seal lets in warm, humid air that condenses and can contribute to excess frost and dripping.",
      },
    ],
    diySafetyChecks: [
      "Check for visible ice blocking the drain hole at the back interior wall",
      "Confirm the fridge is level - an unlevel fridge can cause water to pool incorrectly",
      "Look under the fridge for a dislodged drain pan",
    ],
    whenToCallAPro: [
      "The leak continues after clearing visible ice from the drain",
      "Water is pooling near electrical components at the back of the unit",
      "The issue recurs repeatedly within the same month",
    ],
    relatedErrorCodeSlugs: [],
    relatedProblemSlugs: ["refrigerator-not-cooling", "refrigerator-making-loud-noise"],
  },
  {
    name: "Refrigerator Making Loud Noise",
    slug: "refrigerator-making-loud-noise",
    serviceSlug: "refrigerator-repair",
    symptoms: [
      "Buzzing, rattling or grinding sound",
      "Loud clicking when the compressor starts",
      "Vibration felt on nearby countertops",
    ],
    likelyCauses: [
      {
        cause: "Fridge not level",
        explanation:
          "An unlevel fridge can vibrate against the floor or nearby cabinets, especially during the compressor cycle.",
      },
      {
        cause: "Condenser or evaporator fan obstruction",
        explanation:
          "Dust, ice build-up or an object touching the fan blades causes a rattling or grinding sound.",
      },
      {
        cause: "Worn compressor",
        explanation:
          "An ageing compressor can develop a loud hum or knocking sound as internal components wear down.",
      },
    ],
    diySafetyChecks: [
      "Check the fridge is standing level on all four feet",
      "Make sure nothing (bottles, packaging) is touching the back panel",
      "Listen to identify whether the noise is from the front (evaporator fan) or back (compressor/condenser fan)",
    ],
    whenToCallAPro: [
      "The noise is a loud knock, grind or metallic scrape rather than a normal hum",
      "Noise is paired with reduced cooling",
      "The sound has gotten noticeably louder over a few days",
    ],
    relatedErrorCodeSlugs: [],
    relatedProblemSlugs: ["refrigerator-not-cooling"],
  },
  {
    name: "Washing Machine Not Draining",
    slug: "washing-machine-not-draining",
    serviceSlug: "washing-machine-repair",
    symptoms: [
      "Water remains in the drum after a cycle finishes",
      "Machine stops mid-cycle with standing water",
      "Clothes come out soaking wet, not just damp",
    ],
    likelyCauses: [
      {
        cause: "Blocked drain filter or pump",
        explanation:
          "Lint, coins, buttons or hair can clog the drain filter or pump impeller, the single most common cause of drainage failure.",
      },
      {
        cause: "Kinked or blocked drain hose",
        explanation:
          "If the hose behind the machine is bent sharply or clogged, water can't exit even if the pump is working.",
      },
      {
        cause: "Faulty drain pump motor",
        explanation:
          "If the pump motor itself has failed electrically, water won't be pumped out regardless of blockages.",
      },
    ],
    diySafetyChecks: [
      "Check the drain hose behind the machine isn't kinked or pinched",
      "If your model has an accessible filter (usually a small door at the front-bottom), check it for debris - unplug the machine first",
      "Confirm the drain hose end isn't sitting below the water level of the standpipe, causing siphoning",
    ],
    whenToCallAPro: [
      "Filter and hose look clear but water still won't drain",
      "You hear the pump humming but no water moves",
      "The machine shows a drain-related error code",
    ],
    relatedErrorCodeSlugs: ["lg-oe", "samsung-5e", "bosch-e24"],
    relatedProblemSlugs: ["washing-machine-not-spinning", "washing-machine-leaking-water"],
  },
  {
    name: "Washing Machine Not Spinning",
    slug: "washing-machine-not-spinning",
    serviceSlug: "washing-machine-repair",
    symptoms: [
      "Wash and rinse work but the spin cycle doesn't start",
      "Drum doesn't rotate at all",
      "Clothes are heavily waterlogged at the end of the cycle",
    ],
    likelyCauses: [
      {
        cause: "Unbalanced load triggering a safety cut-off",
        explanation:
          "Most machines refuse to spin if the load is bunched to one side, to protect the motor and bearings.",
      },
      {
        cause: "Worn drive belt (top-load models)",
        explanation:
          "A loose or snapped belt means the motor runs but doesn't turn the drum.",
      },
      {
        cause: "Door lock not engaging",
        explanation:
          "Many machines won't spin unless the door lock sensor confirms the door is securely closed.",
      },
      {
        cause: "Motor or PCB fault",
        explanation:
          "Electronic control faults can prevent the spin command from reaching the motor at all.",
      },
    ],
    diySafetyChecks: [
      "Redistribute the load evenly and restart the spin cycle",
      "Reduce load size - overloading can also trigger a spin cut-off",
      "Check the door is closing and latching fully",
    ],
    whenToCallAPro: [
      "Spin still fails with a balanced, normal-size load",
      "You hear a burning smell or the motor humming without movement",
      "The issue is consistent across every wash cycle",
    ],
    relatedErrorCodeSlugs: ["lg-ue", "samsung-ue", "whirlpool-f06"],
    relatedProblemSlugs: ["washing-machine-not-draining", "washing-machine-leaking-water"],
  },
  {
    name: "Washing Machine Leaking Water",
    slug: "washing-machine-leaking-water",
    serviceSlug: "washing-machine-repair",
    symptoms: [
      "Water pooling on the floor during wash or spin",
      "Damp patches near the machine's base",
      "Leaking specifically during the fill or drain phase",
    ],
    likelyCauses: [
      {
        cause: "Damaged inlet pipe or connection",
        explanation:
          "A cracked or loose inlet hose leaks during the fill phase, often at the tap or machine connection point.",
      },
      {
        cause: "Worn door gasket (front-load)",
        explanation:
          "The rubber door seal can crack or accumulate debris that prevents a watertight closure.",
      },
      {
        cause: "Loose or damaged drain hose",
        explanation:
          "A poorly seated drain hose can leak during the pump-out phase.",
      },
      {
        cause: "Tub seal or bearing wear",
        explanation:
          "On older machines, internal tub seals can wear out, leaking during the spin phase specifically.",
      },
    ],
    diySafetyChecks: [
      "Check the inlet hose connection at the tap and the back of the machine is tightened",
      "Inspect the door gasket for visible tears, trapped debris or detergent build-up",
      "Note exactly which phase (fill, wash, drain, spin) the leak happens during - this narrows the cause significantly",
    ],
    whenToCallAPro: [
      "Leak happens during spin specifically (often a tub seal/bearing issue, not DIY-fixable)",
      "You can't identify the source after basic checks",
      "The leak is near electrical connections",
    ],
    relatedErrorCodeSlugs: ["bosch-e15"],
    relatedProblemSlugs: ["washing-machine-not-draining", "washing-machine-not-spinning"],
  },
  {
    name: "Microwave Not Heating",
    slug: "microwave-not-heating",
    serviceSlug: "microwave-repair",
    symptoms: [
      "Turntable rotates and display works, but food stays cold",
      "Fan and light turn on but no heat is produced",
      "Heating is much weaker than before",
    ],
    likelyCauses: [
      {
        cause: "Faulty magnetron",
        explanation:
          "The magnetron generates the microwaves that heat food - if it fails, everything else can run normally while heating stops completely.",
      },
      {
        cause: "Failed high-voltage diode or capacitor",
        explanation:
          "These components power the magnetron; a fault here is a common cause of a no-heat microwave.",
      },
      {
        cause: "Door switch fault",
        explanation:
          "Safety interlock switches can fail in a way that allows the microwave to run but blocks the high-voltage circuit from activating.",
      },
    ],
    diySafetyChecks: [
      "Confirm the turntable and interior light work normally (rules out a total power failure)",
      "Test with a microwave-safe cup of water for 60 seconds to confirm the no-heat symptom",
      "Do not open the microwave casing yourself - high-voltage capacitors can hold a dangerous charge even when unplugged",
    ],
    whenToCallAPro: [
      "Always - no-heat faults involve high-voltage electrical components that aren't safe for DIY repair",
    ],
    relatedErrorCodeSlugs: [],
    relatedProblemSlugs: ["microwave-sparking"],
  },
  {
    name: "Microwave Sparking Inside",
    slug: "microwave-sparking",
    serviceSlug: "microwave-repair",
    symptoms: [
      "Visible sparks or arcing during operation",
      "Crackling sounds while heating",
      "Burn marks appearing on interior walls",
    ],
    likelyCauses: [
      {
        cause: "Metal object or foil inside the cavity",
        explanation:
          "Even small metal fragments (twist ties, cutlery, decorative plate rims) can cause visible arcing.",
      },
      {
        cause: "Damaged waveguide cover",
        explanation:
          "The mica/waveguide cover protects internal components; if it's burnt through or missing, exposed metal parts can spark.",
      },
      {
        cause: "Worn interior paint/enamel",
        explanation:
          "Chipped enamel can expose the metal cavity wall underneath, which can arc during use.",
      },
    ],
    diySafetyChecks: [
      "Stop using the microwave immediately and unplug it",
      "Check for and remove any metal objects inside",
      "Do not attempt to run the microwave again until it's inspected - continued use risks further damage or fire",
    ],
    whenToCallAPro: [
      "Always, once metal objects are ruled out - a damaged waveguide cover or cavity needs professional replacement",
    ],
    relatedErrorCodeSlugs: [],
    relatedProblemSlugs: ["microwave-not-heating"],
  },
  {
    name: "Dishwasher Not Cleaning Dishes Properly",
    slug: "dishwasher-not-cleaning-properly",
    serviceSlug: "dishwasher-repair",
    symptoms: [
      "Food residue remains after a full cycle",
      "Dishes come out cloudy or with a film",
      "Some dishes clean while others in the same load don't",
    ],
    likelyCauses: [
      {
        cause: "Blocked or misaligned spray arms",
        explanation:
          "If the spray arm holes are clogged with mineral deposits or the arm can't rotate freely, water doesn't reach all dishes.",
      },
      {
        cause: "Clogged filter",
        explanation:
          "A dirty filter reduces water circulation and recirculates food particles onto dishes.",
      },
      {
        cause: "Detergent tablet not dissolving fully",
        explanation:
          "Low water pressure, incorrect loading blocking the dispenser, or a faulty dispenser latch can prevent proper detergent release.",
      },
      {
        cause: "Low water inlet pressure or temperature",
        explanation:
          "Dishwashers need adequately hot water to dissolve grease and detergent effectively.",
      },
    ],
    diySafetyChecks: [
      "Remove and rinse the spray arms and filter under running water",
      "Make sure large items aren't blocking the spray arms from rotating",
      "Run your kitchen tap until hot before starting the dishwasher, if it doesn't have direct hot water supply",
    ],
    whenToCallAPro: [
      "Cleaning stays poor after clearing spray arms and filter",
      "The dispenser door isn't opening or releasing detergent properly",
      "An error code appears on the display",
    ],
    relatedErrorCodeSlugs: ["bosch-e15", "bosch-e24"],
    relatedProblemSlugs: ["dishwasher-leaking-water"],
  },
  {
    name: "Dishwasher Leaking Water",
    slug: "dishwasher-leaking-water",
    serviceSlug: "dishwasher-repair",
    symptoms: [
      "Water pooling on the kitchen floor near the base",
      "Suds or water visible under the door",
      "Error code related to a leak or Aquastop sensor",
    ],
    likelyCauses: [
      {
        cause: "Worn door gasket",
        explanation: "A cracked or misaligned door seal is the most common cause of front-of-unit leaks.",
      },
      {
        cause: "Overfilled with the wrong detergent",
        explanation: "Using regular dish soap instead of dishwasher detergent causes excess suds that leak out.",
      },
      {
        cause: "Faulty inlet valve or drain hose",
        explanation: "A stuck-open inlet valve or a loose drain connection can leak internally, pooling under the unit.",
      },
    ],
    diySafetyChecks: [
      "Confirm you're using dishwasher-specific detergent, not regular dish soap",
      "Check the door gasket for visible gaps, food debris or tears",
      "Make sure the dishwasher is level - an unlevel unit can leak from the door",
    ],
    whenToCallAPro: [
      "The leak continues after ruling out detergent and gasket issues",
      "An Aquastop or leak-sensor error code is displayed (e.g. Bosch E15)",
      "Water appears to be coming from underneath rather than the door",
    ],
    relatedErrorCodeSlugs: ["bosch-e15"],
    relatedProblemSlugs: ["dishwasher-not-cleaning-properly"],
  },
  {
    name: "Dryer Not Heating",
    slug: "dryer-not-heating",
    serviceSlug: "dryer-repair",
    symptoms: [
      "Drum turns and cycle runs, but clothes come out still damp/cold",
      "Cycle takes far longer than usual to dry",
      "No warm air felt at the vent",
    ],
    likelyCauses: [
      {
        cause: "Blown thermal fuse",
        explanation:
          "This safety fuse cuts heating power if the dryer overheats (often due to lint blockage) and needs replacement, not a reset.",
      },
      {
        cause: "Faulty heating element",
        explanation: "If the element itself has burnt out, the drum will still turn but produce no heat.",
      },
      {
        cause: "Failed thermostat",
        explanation: "A stuck thermostat can prevent the heating circuit from activating correctly.",
      },
    ],
    diySafetyChecks: [
      "Check and clean the lint filter - heavy lint build-up is a common contributing cause",
      "Confirm the exhaust vent outside isn't blocked, which can trigger a safety cut-off",
      "Do not attempt to access or replace the heating element or thermal fuse yourself - this is a mains-powered electrical repair",
    ],
    whenToCallAPro: [
      "Heating doesn't return after clearing lint and checking the vent",
      "This is an electrical fault (thermal fuse, element, thermostat) and needs a technician",
    ],
    relatedErrorCodeSlugs: [],
    relatedProblemSlugs: ["dryer-not-starting"],
  },
  {
    name: "Dryer Not Starting",
    slug: "dryer-not-starting",
    serviceSlug: "dryer-repair",
    symptoms: [
      "Dryer doesn't respond when the start button is pressed",
      "Display or indicator lights are off entirely",
      "Motor hums but the drum doesn't turn",
    ],
    likelyCauses: [
      {
        cause: "Door not fully latched",
        explanation: "Most dryers have a safety switch that blocks startup unless the door is confirmed closed.",
      },
      {
        cause: "Blown thermal fuse or tripped circuit",
        explanation: "A safety fuse or a tripped household circuit breaker can cut all power to the unit.",
      },
      {
        cause: "Worn drive belt or motor fault",
        explanation: "If the motor hums without turning the drum, a snapped belt or seized motor is likely.",
      },
    ],
    diySafetyChecks: [
      "Confirm the door is closing and latching fully",
      "Check your home's circuit breaker/fuse box for a tripped switch",
      "Confirm the dryer is receiving power at the socket with another appliance",
    ],
    whenToCallAPro: [
      "Power and door are confirmed fine but the dryer still won't start",
      "You hear a hum but no drum movement",
      "Circuit breaker trips specifically when the dryer is switched on",
    ],
    relatedErrorCodeSlugs: [],
    relatedProblemSlugs: ["dryer-not-heating"],
  },
];

export function getProblem(slug: string) {
  return problems.find((item) => item.slug === slug);
}

export function getProblemsByService(serviceSlug: string) {
  return problems.filter((item) => item.serviceSlug === serviceSlug);
}
