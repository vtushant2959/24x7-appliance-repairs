import Link from "next/link";
import { notFound } from "next/navigation";
import { FAQList } from "@/components/FAQList";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd, Section } from "@/components/ui";
import { brands, faqs, getBrand, services } from "@/lib/data";
import { faqSchema, pageMetadata } from "@/lib/seo";
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
    description: `Book ${brand.name} refrigerator, washing machine, AC, microwave, dishwasher and dryer repair with doorstep technicians.`,
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
  const brandFaqs = faqs
    .slice(0, 5)
    .map((f) => ({
      question: f.question.replace("?", ` for ${brand.name} appliances?`),
      answer: `${f.answer} Our technicians regularly handle ${brand.name} appliances and explain repair choices before work starts.`,
    }));
  return (
    <main>
      <JsonLd data={faqSchema(brandFaqs)} />
      <section className="bg-brand-mist py-14 dark:bg-slate-900">
        <div className="container-page">
          <p className="font-bold text-brand-blue">Brand repair</p>
          <h1 className="mt-3 text-4xl font-black text-brand-navy dark:text-white">
            {brand.name} Repair Service
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            Doorstep {brand.name} appliance repair for common faults, error
            codes, cooling problems, wash issues and kitchen appliance
            breakdowns.
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
      <Section title="Brand repair summary">
        <div className="prose-site">
          <p>
            The Home Appliance Services helps homeowners choose repair over
            replacement when it makes financial and practical sense. For{" "}
            {brand.name} appliances, we check symptoms, usage history, part
            availability and long-term reliability before suggesting the next
            step.
          </p>
          <h2>Pros and cons of repair</h2>
          <p>
            Repair can save money, reduce appliance downtime and extend product
            life. Replacement may be better when the cabinet, compressor, motor
            or electronics have multiple failures. The technician explains both
            routes clearly.
          </p>
        </div>
      </Section>
      <Section title={`Book ${brand.name} repair`}>
        <LeadForm />
      </Section>
      <Section title={`${brand.name} FAQs`}>
        <FAQList items={brandFaqs} />
      </Section>
    </main>
  );
}
