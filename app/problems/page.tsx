import Link from "next/link";
import { Section } from "@/components/ui";
import { problems, services } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Appliance Problem Library",
  description:
    "Look up symptoms, likely causes and safe checks for common refrigerator, washing machine, microwave, dishwasher and dryer problems.",
});

export default function ProblemsPage() {
  return (
    <main>
      <Section eyebrow="Problem Library" title="What's wrong with your appliance?">
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          Find your appliance&rsquo;s symptom below to see likely causes, safe checks
          you can do yourself, and when it&rsquo;s time to call a technician.
        </p>
        {services.map((service) => {
          const serviceProblems = problems.filter((p) => p.serviceSlug === service.slug);
          if (serviceProblems.length === 0) return null;
          return (
            <div key={service.slug} className="mt-10">
              <h2 className="text-xl font-bold text-brand-navy dark:text-white">
                {service.name}
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {serviceProblems.map((problem) => (
                  <Link
                    key={problem.slug}
                    href={`/problems/${problem.slug}`}
                    className="rounded-lg border border-slate-200 p-5 hover:border-brand-blue dark:border-slate-800"
                  >
                    <h3 className="font-bold text-brand-navy dark:text-white">{problem.name}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {problem.symptoms[0]}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </Section>
    </main>
  );
}
