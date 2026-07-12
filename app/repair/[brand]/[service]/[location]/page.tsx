import Link from "next/link";
import { notFound } from "next/navigation";
import { FAQList } from "@/components/FAQList";
import { LeadForm } from "@/components/LeadForm";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { JsonLd, Section } from "@/components/ui";
import {
  combos,
  errorCodes,
  getArea,
  getBrand,
  getCombo,
  getService,
  problems,
} from "@/lib/content";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { site } from "@/lib/site";

// Curated combos only — never render a brand/service/location combination
// that isn't explicitly listed in lib/content/combos.ts. This is the code-level
// guardrail against Google doorway-page treatment: anything outside the
// curated list 404s rather than silently rendering a templated page.
export const dynamicParams = false;

export function generateStaticParams() {
  return combos.map((combo) => ({
    brand: combo.brandSlug,
    service: combo.serviceSlug,
    location: combo.areaSlug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string; service: string; location: string }>;
}) {
  const { brand: brandSlug, service: serviceSlug, location: areaSlug } = await params;
  const combo = getCombo(brandSlug, serviceSlug, areaSlug);
  if (!combo) return {};
  const brand = getBrand(brandSlug);
  const service = getService(serviceSlug);
  const area = getArea(areaSlug);
  return pageMetadata({
    title: `${brand?.name} ${service?.name} in ${area?.name}`,
    description: `Book doorstep ${brand?.name} ${service?.name.toLowerCase()} in ${area?.name}. Same day technician visit, transparent estimate before repair.`,
    path: `/repair/${brandSlug}/${serviceSlug}/${areaSlug}`,
  });
}

export default async function ComboPage({
  params,
}: {
  params: Promise<{ brand: string; service: string; location: string }>;
}) {
  const { brand: brandSlug, service: serviceSlug, location: areaSlug } = await params;
  const combo = getCombo(brandSlug, serviceSlug, areaSlug);
  if (!combo) notFound();

  const brand = getBrand(brandSlug)!;
  const service = getService(serviceSlug)!;
  const area = getArea(areaSlug)!;
  const relatedProblems = problems.filter((p) => combo.relatedProblemSlugs.includes(p.slug));
  const relatedCodes = errorCodes.filter((c) => combo.relatedErrorCodeSlugs.includes(c.slug));
  const faqItems = [
    {
      question: `Do you repair ${brand.name} ${service.name.toLowerCase()} in ${area.name}?`,
      answer: `Yes, this is one of our regularly serviced brand and location combinations in ${area.name}.`,
    },
    {
      question: `How soon can a technician visit in ${area.name}?`,
      answer: `Most bookings get a same-day visit in ${area.name}, subject to technician availability at the time of booking.`,
    },
  ];

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Popular Repairs", url: `${site.url}/repair` },
          { name: brand.name, url: `${site.url}/brands/${brand.slug}` },
          {
            name: `${service.name} in ${area.name}`,
            url: `${site.url}/repair/${brandSlug}/${serviceSlug}/${areaSlug}`,
          },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          serviceName: `${brand.name} ${service.name}`,
          path: `/repair/${brandSlug}/${serviceSlug}/${areaSlug}`,
        })}
      />
      <section className="bg-brand-mist py-14 dark:bg-slate-900">
        <div className="container-page">
          <p className="font-bold text-brand-blue">
            {brand.name} &middot; {service.name} &middot; {area.name}
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black text-brand-navy dark:text-white">
            {brand.name} {service.name} in {area.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            {combo.localIntro}
          </p>
        </div>
      </section>

      <Section eyebrow="Process" title="How this repair works">
        <ProcessTimeline />
      </Section>

      {relatedProblems.length > 0 && (
        <Section eyebrow="Common issues" title={`${brand.name} ${service.appliance} problems`}>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {relatedProblems.map((problem) => (
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
        </Section>
      )}

      {relatedCodes.length > 0 && (
        <Section eyebrow="Error codes" title={`${brand.name} error codes we fix`}>
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

      <Section eyebrow="Why book with us" title={combo.whyThisCombo}>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/brands/${brand.slug}`}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold hover:border-brand-blue dark:border-slate-800"
          >
            More {brand.name} repair
          </Link>
          <Link
            href={`/services/${service.slug}`}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold hover:border-brand-blue dark:border-slate-800"
          >
            More {service.name}
          </Link>
          <Link
            href={`/service-areas/${area.slug}`}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold hover:border-brand-blue dark:border-slate-800"
          >
            More repair in {area.name}
          </Link>
        </div>
      </Section>

      <Section eyebrow="Book a technician" title={`Book ${brand.name} ${service.name.toLowerCase()} in ${area.name}`}>
        <LeadForm defaultService={service.name} defaultArea={area.name} defaultBrand={brand.name} />
      </Section>

      <Section title="FAQs">
        <FAQList items={faqItems} />
      </Section>
    </main>
  );
}
