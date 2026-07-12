import Link from "next/link";
import { notFound } from "next/navigation";
import { FAQList } from "@/components/FAQList";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd, Section } from "@/components/ui";
import {
  areas,
  brands,
  getArea,
  getCombosByArea,
  getFaqsByArea,
  problems,
  services,
} from "@/lib/content";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return pageMetadata({
    title: `Appliance Repair in ${area.name}`,
    description: `Same day refrigerator, washing machine, microwave, dishwasher and dryer repair in ${area.name}. Book doorstep service now.`,
    path: `/service-areas/${area.slug}`,
  });
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const localFaqs = getFaqsByArea(area.slug);
  const nearbyAreas = area.nearbyAreaSlugs
    .map((nearbySlug) => areas.find((a) => a.slug === nearbySlug))
    .filter((a): a is (typeof areas)[number] => Boolean(a));
  const areaCombos = getCombosByArea(area.slug);

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Locations", url: `${site.url}/service-areas` },
          { name: area.name, url: `${site.url}/service-areas/${area.slug}` },
        ])}
      />
      {localFaqs.length > 0 && <JsonLd data={faqSchema(localFaqs)} />}
      <section className="bg-brand-mist py-14 dark:bg-slate-900">
        <div className="container-page">
          <p className="font-bold text-brand-blue">Local appliance experts</p>
          <h1 className="mt-3 text-4xl font-black text-brand-navy dark:text-white">
            Home Appliance Repair in {area.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            {area.intro}
          </p>
        </div>
      </section>

      <Section title={`Services available in ${area.name}`}>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <Link
              className="rounded-lg border border-slate-200 p-5 hover:border-brand-blue dark:border-slate-800"
              key={service.slug}
              href={`/services/${service.slug}`}
            >
              <h2 className="font-bold">
                {service.name} in {area.name}
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Same day diagnosis, repair estimate and doorstep support.
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section title={`Brands serviced in ${area.name}`}>
        <div className="mt-8 flex flex-wrap gap-3">
          {brands.map((brand) => {
            const combo = areaCombos.find((c) => c.brandSlug === brand.slug);
            return (
              <Link
                key={brand.slug}
                href={combo ? `/repair/${brand.slug}/${combo.serviceSlug}/${area.slug}` : `/brands/${brand.slug}`}
                className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold hover:border-brand-blue dark:border-slate-800"
              >
                {brand.name} repair
              </Link>
            );
          })}
        </div>
      </Section>

      {problems.length > 0 && (
        <Section title={`Common appliance problems in ${area.name}`}>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problems.slice(0, 4).map((problem) => (
              <Link
                key={problem.slug}
                href={`/problems/${problem.slug}`}
                className="rounded-lg border border-slate-200 p-5 hover:border-brand-blue dark:border-slate-800"
              >
                <h3 className="font-bold text-brand-navy dark:text-white">{problem.name}</h3>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {nearbyAreas.length > 0 && (
        <Section title="Nearby areas and map">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="prose-site">
              <p>
                Customers in and around {area.name} can book repairs for
                cooling, washing, heating and kitchen appliance faults.
              </p>
              <h3>Also serving nearby</h3>
              <ul>
                {nearbyAreas.map((nearby) => (
                  <li key={nearby.slug}>
                    <Link href={`/service-areas/${nearby.slug}`} className="text-brand-blue">
                      {nearby.name} appliance repair
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <iframe
              className="h-80 w-full rounded-lg border-0"
              loading="lazy"
              src={area.map}
              title={`Google Map for appliance repair in ${area.name}`}
            />
          </div>
        </Section>
      )}

      <Section title="Book service in this area">
        <LeadForm defaultArea={area.name} />
      </Section>

      {localFaqs.length > 0 && (
        <Section title={`Questions from customers in ${area.name}`}>
          <FAQList items={localFaqs} />
        </Section>
      )}
    </main>
  );
}
