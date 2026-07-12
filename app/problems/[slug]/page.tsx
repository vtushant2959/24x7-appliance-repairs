import Link from "next/link";
import { notFound } from "next/navigation";
import { CalloutBox } from "@/components/CalloutBox";
import { FAQList } from "@/components/FAQList";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd, Section } from "@/components/ui";
import {
  errorCodes,
  getProblem,
  getService,
  problems,
} from "@/lib/content";
import { breadcrumbSchema, pageMetadata, problemSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return problems.map((problem) => ({ slug: problem.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const problem = getProblem(slug);
  if (!problem) return {};
  return pageMetadata({
    title: `${problem.name}: Causes, Checks and When to Call a Technician`,
    description: `${problem.name} — likely causes, safe checks you can do yourself, and when to book a professional repair.`,
    path: `/problems/${problem.slug}`,
  });
}

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const problem = getProblem(slug);
  if (!problem) notFound();

  const service = getService(problem.serviceSlug);
  const relatedCodes = errorCodes.filter((code) =>
    problem.relatedErrorCodeSlugs.includes(code.slug),
  );
  const relatedProblems = problems.filter((p) =>
    problem.relatedProblemSlugs.includes(p.slug),
  );
  const faqItems = [
    {
      question: `Is it safe to keep using the appliance with ${problem.name.toLowerCase()}?`,
      answer: `It depends on the cause. Review the safe checks below, and if the callout box says to stop using it, do so and book an inspection rather than risk further damage.`,
    },
    {
      question: `How much will it cost to fix ${problem.name.toLowerCase()}?`,
      answer: `Cost depends on the exact cause and spare part needed. The technician inspects the appliance and shares a clear estimate before repair begins.`,
    },
  ];

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Problem Library", url: `${site.url}/problems` },
          { name: problem.name, url: `${site.url}/problems/${problem.slug}` },
        ])}
      />
      <JsonLd
        data={problemSchema({
          name: problem.name,
          description: problem.symptoms[0],
          path: `/problems/${problem.slug}`,
        })}
      />
      <section className="bg-brand-mist py-14 dark:bg-slate-900">
        <div className="container-page">
          <p className="font-bold text-brand-blue">Problem Library</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black text-brand-navy dark:text-white">
            {problem.name}
          </h1>
          {service && (
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              Part of{" "}
              <Link href={`/services/${service.slug}`} className="font-semibold text-brand-blue">
                {service.name}
              </Link>
            </p>
          )}
        </div>
      </section>

      <Section eyebrow="Symptoms" title="How this shows up">
        <ul className="prose-site mt-6 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
          {problem.symptoms.map((symptom) => (
            <li key={symptom}>{symptom}</li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Diagnosis" title="Likely causes, ranked">
        <div className="mt-6 grid gap-4">
          {problem.likelyCauses.map((item, index) => (
            <div
              key={item.cause}
              className="rounded-lg border border-slate-200 p-5 dark:border-slate-800"
            >
              <p className="font-bold text-brand-navy dark:text-white">
                {index + 1}. {item.cause}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {item.explanation}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Before you call" title="Safe checks you can do yourself">
        <ul className="prose-site mt-6 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
          {problem.diySafetyChecks.map((check) => (
            <li key={check}>{check}</li>
          ))}
        </ul>
        <CalloutBox tone="warn">
          <p className="font-semibold">Call a technician if:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {problem.whenToCallAPro.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </CalloutBox>
      </Section>

      {relatedCodes.length > 0 && (
        <Section eyebrow="Related" title="Related error codes">
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCodes.map((code) => (
              <Link
                key={code.slug}
                href={`/error-codes/${code.slug}`}
                className="rounded-lg border border-slate-200 p-4 hover:border-brand-blue dark:border-slate-800"
              >
                <span className="font-bold text-brand-blue">{code.code}</span>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{code.meaning}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {relatedProblems.length > 0 && (
        <Section eyebrow="Related" title="Related problems">
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {relatedProblems.map((related) => (
              <Link
                key={related.slug}
                href={`/problems/${related.slug}`}
                className="rounded-lg border border-slate-200 p-4 hover:border-brand-blue dark:border-slate-800"
              >
                {related.name}
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section eyebrow="Book a technician" title="Still not fixed?">
        <LeadForm compact defaultService={service?.name} />
      </Section>

      <Section title="FAQs">
        <FAQList items={faqItems} />
      </Section>
    </main>
  );
}
