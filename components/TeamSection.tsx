import Image from "next/image";
import { team } from "@/lib/content";
import { Section } from "@/components/ui";

export function TeamSection() {
  if (team.length === 0) return null;
  return (
    <Section eyebrow="Our Technicians" title="Meet the team">
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <div
            key={member.name}
            className="rounded-lg border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-slate-800 dark:bg-slate-950"
          >
            <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full">
              <Image src={member.photo} alt={member.name} fill className="object-cover" />
            </div>
            <h3 className="mt-4 font-bold text-brand-navy dark:text-white">{member.name}</h3>
            <p className="text-sm text-brand-blue">{member.role}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {member.yearsExperience}+ years experience
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
