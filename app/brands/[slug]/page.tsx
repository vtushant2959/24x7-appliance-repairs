import Link from "next/link";
import { notFound } from "next/navigation";
import { FAQList } from "@/components/FAQList";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd, Section } from "@/components/ui";
import {
  areas,
  brands,
  getBrand,
  getCombosByBrand,
  getErrorCodesByBrand,
  getFaqsByBrand,
  services,
} from "@/lib/content";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};
  return pageMetadata({
    title: `${brand.name} Appliance Repair`,
    description: `Book ${brand.name} refrigerator, washing machine, microwave, dishwasher and dryer repair with doorstep technicians.`,
    path: `/brands/${brand.slug}`,
  });
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const brandFaqs = getFaqsByBrand(brand.slug);
  const brandErrorCodes = getErrorCodesByBrand(brand.slug);
  const brandCombos = getCombosByBrand(brand.slug);
  const brandAreas = Array.from(new Set(brandCombos.map((c) => c.areaSlug)))
    .map((areaSlug) => areas.find((a) => a.slug === areaSlug))
    .filter((a): a is (typeof areas)[number] => Boolean(a));

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Brands", url: `${site.url}/brands` },
          { name: brand.name, url: `${site.url}/brands/${brand.slug}` },
        ])}
      />
      {brandFaqs.length > 0 && <JsonLd data={faqSchema(brandFaqs)} />}
      <section className="bg-brand-mist py-14 dark:bg-slate-900">
        <div className="container-page">
          <p className="font-bold text-brand-blue">Brand repair</p>
          <h1 className="mt-3 text-4xl font-black text-brand-navy dark:text-white">
            {brand.name} Repair Service
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            {brand.tagline}. {brand.specialty}
          </p>
        </div>
      </section>

      <Section title={`${brand.name} services`}>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <Link
              className="rounded-lg border border-slate-200 p-5 hover:border-brand-blue dark:border-slate-800"
              key={service.slug}
              href={`/services/${service.slug}`}
            >
              <h2 className="font-bold">
                {brand.name} {service.name}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Technician diagnosis, estimate approval and careful repair for{" "}
                {brand.name} {service.appliance} models.
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {brandErrorCodes.length > 0 && (
        <Section title={`${brand.name} error codes`}>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {brandErrorCodes.map((code) => (
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

      {brandCombos.length > 0 && (
        <Section title={`${brand.name} repair near you`}>
          <div className="mt-8 flex flex-wrap gap-3">
            {brandCombos.map((combo) => (
              <Link
                key={`${combo.serviceSlug}-${combo.areaSlug}`}
                href={`/repair/${brand.slug}/${combo.serviceSlug}/${combo.areaSlug}`}
                className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold hover:border-brand-blue dark:border-slate-800"
              >
                {services.find((s) => s.slug === combo.serviceSlug)?.name} in{" "}
                {areas.find((a) => a.slug === combo.areaSlug)?.name}
              </Link>
            ))}
          </div>
        </Section>
      )}

      {brandAreas.length > 0 && (
        <Section title={`Areas we service for ${brand.name}`}>
          <div className="mt-8 flex flex-wrap gap-2">
            {brandAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm hover:border-brand-blue dark:border-slate-800"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section title="Repair or replace?">
        <div className="prose-site">
          <p>
            {site.name} helps homeowners choose repair over replacement when
            it makes financial and practical sense. For {brand.name}{" "}
            appliances, we check symptoms, usage history, part availability
            and long-term reliability before suggesting the next step.
          </p>
          <h2>Pros and cons of repair</h2>
          <p>
            Repair can save money, reduce appliance downtime and extend
            product life. Replacement may be better when the cabinet,
            compressor, motor or electronics have multiple failures. The
            technician explains both routes clearly.
          </p>
        </div>
      </Section>

      <Section title={`Book ${brand.name} repair`}>
        <LeadForm defaultBrand={brand.name} />
      </Section>

      {brandFaqs.length > 0 && (
        <Section title={`${brand.name} FAQs`}>
          <FAQList items={brandFaqs} />
        </Section>
      )}
    </main>
  );
}
