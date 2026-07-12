import {
  CalendarCheck,
  ClipboardCheck,
  PhoneCall,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Book Service",
    detail: "Call, WhatsApp or fill the booking form with your appliance, brand and area.",
  },
  {
    icon: CalendarCheck,
    title: "Technician Assigned",
    detail: "We confirm your slot and assign the nearest available technician.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection & Diagnosis",
    detail: "The technician inspects the appliance and identifies the exact fault.",
  },
  {
    icon: Wrench,
    title: "Estimate & Repair",
    detail: "You approve a clear estimate, then the technician repairs or replaces the part.",
  },
  {
    icon: ShieldCheck,
    title: "Test & Completion",
    detail: "The appliance is tested before the technician leaves, with service support explained.",
  },
];

export function ProcessTimeline() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-5">
      {steps.map((step, index) => (
        <div key={step.title} className="relative">
          <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
              <step.icon size={22} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-brand-orange">
                Step {index + 1}
              </p>
              <h3 className="font-bold text-brand-navy dark:text-white">{step.title}</h3>
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {step.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
