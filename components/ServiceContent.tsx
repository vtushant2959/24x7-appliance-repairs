import Link from "next/link";
import { FAQList } from "@/components/FAQList";
import { LeadForm } from "@/components/LeadForm";
import { ButtonLink, Section } from "@/components/ui";
import { areas, brands, services, trustPoints } from "@/lib/data";
export function ServiceContent({
  service,
}: {
  service: (typeof services)[number];
}) {
  const serviceFaqs = [
    {
      question: `What is the fastest way to book ${service.name.toLowerCase()}?`,
      answer: `Call or WhatsApp The Home Appliance Services and share your appliance brand, model and issue. A technician visit can usually be arranged the same day in active service areas.`,
    },
    {
      question: `How do technicians diagnose ${service.appliance} faults?`,
      answer: `The technician checks symptoms, power supply, moving parts, sensors, water or cooling path and error codes before sharing a clear repair estimate.`,
    },
    {
      question: `Do you repair all major ${service.appliance} brands?`,
      answer: `Yes. We cover Samsung, LG, IFB, Bosch, Whirlpool, Voltas, Panasonic, Haier, Toshiba and Hitachi models used in Delhi NCR homes.`,
    },
  ];
  return (
    <>
      <Section
        eyebrow="Direct answer"
        title={`${service.name} that is clear, quick and doorstep-first`}
      >
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="prose-site">
            <p>
              The Home Appliance Services provides professional{" "}
              {service.name.toLowerCase()} for homes and small offices across
              Faridabad, South Delhi, Noida, Greater Noida, Gurugram, Ghaziabad,
              Ballabhgarh and Palwal. The focus is simple: diagnose the real
              fault, explain the repair in plain language and complete the work
              with clean doorstep service.
            </p>
            <h3>Common issues</h3>
            <ul>
              {service.issues.map((issue) => (
                <li key={issue}>{issue}</li>
              ))}
            </ul>
            <h3>Repair process</h3>
            <p>
              Booking starts by phone, WhatsApp or form. The technician inspects
              the appliance, confirms the fault, shares pricing before work
              begins, repairs or replaces the necessary part and tests
              performance before leaving.
            </p>
            <h3>Pricing note</h3>
            <p>
              Final repair cost depends on the model, fault type and spare part
              requirement. You receive an estimate after inspection, so there
              are no surprise approvals.
            </p>
          </div>
          <LeadForm compact />
        </div>
      </Section>
      <Section eyebrow="Benefits" title="Why customers choose us">
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <div
              key={point}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <h3 className="font-bold text-brand-navy dark:text-white">
                {point}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                A practical service promise designed for busy households that
                need reliable repair without confusing technical talk.
              </p>
            </div>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Coverage"
        title={`${service.name} service areas and brands`}
      >
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-bold">Service areas</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {areas.map((area) => (
                <Link
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm hover:border-brand-blue dark:border-slate-800"
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold">Brands covered</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {brands.map((brand) => (
                <Link
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm hover:border-brand-blue dark:border-slate-800"
                  key={brand.slug}
                  href={`/brands/${brand.slug}`}
                >
                  {brand.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section eyebrow="People also ask" title={`${service.name} FAQs`}>
        <FAQList items={serviceFaqs} />
        <div className="mt-8 flex gap-3">
          <ButtonLink href="tel:+919876543210">Call Now</ButtonLink>
          <ButtonLink href="https://wa.me/919876543210" variant="secondary">
            WhatsApp
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
