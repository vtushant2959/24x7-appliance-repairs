import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Clock, ShieldCheck, Star, Wrench } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FAQList } from "@/components/FAQList";
import { LeadForm } from "@/components/LeadForm";
import { ButtonLink, JsonLd, Section } from "@/components/ui";
import { articles, brands, faqs, services, trustPoints } from "@/lib/data";
import { faqSchema, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
export const metadata = pageMetadata({
  title: "Home Appliance Repair in Delhi NCR",
  description:
    "Premium same day doorstep appliance repair for refrigerators, washing machines, ACs, microwaves, dishwashers and dryers across Faridabad, Delhi, Noida, Gurugram and Ghaziabad.",
});
export default function HomePage() {
  const homeFaqs = faqs.slice(0, 8);
  return (
    <main>
      <JsonLd data={faqSchema(homeFaqs)} />
      <section className="overflow-hidden bg-gradient-to-b from-brand-mist to-white py-14 dark:from-slate-900 dark:to-slate-950">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-blue shadow-sm dark:bg-slate-900">
              <Star size={16} fill="currentColor" /> Google rating {site.rating}
              /5 from {site.reviewCount}+ reviews
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-brand-navy dark:text-white sm:text-6xl">
              Same Day Home Appliance Repair Across Delhi NCR
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              The Home Appliance Services repairs refrigerators, washing
              machines, ACs, microwaves, dishwashers and dryers with trained
              doorstep technicians, clear estimates and fast booking by call or
              WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={site.phoneHref}>Call Now</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Book Service
              </ButtonLink>
              <ButtonLink href={site.whatsappHref} variant="ghost">
                WhatsApp
              </ButtonLink>
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3 text-sm font-semibold">
              <span className="flex items-center gap-2">
                <Clock size={18} /> Same day
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={18} /> Trusted techs
              </span>
              <span className="flex items-center gap-2">
                <Wrench size={18} /> Major brands
              </span>
            </div>
          </AnimatedSection>
          <div className="relative">
            <Image
              className="rounded-lg object-cover shadow-soft"
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
              alt="Professional appliance technician repairing a home appliance"
              width={900}
              height={760}
              priority
            />
            <div className="absolute -bottom-6 left-6 right-6 rounded-lg bg-white p-5 shadow-soft dark:bg-slate-900">
              <p className="font-bold text-brand-navy dark:text-white">
                Quick Booking
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Share your appliance, brand and location. We arrange the nearest
                technician.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Section eyebrow="Services" title="Repair services built for busy homes">
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-950"
              key={service.slug}
              href={`/services/${service.slug}`}
            >
              <CheckCircle2 className="text-brand-blue" />
              <h2 className="mt-4 text-xl font-bold text-brand-navy dark:text-white">
                {service.name}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Doorstep diagnosis, transparent pricing and repair support for
                common {service.appliance} faults.
              </p>
            </Link>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Why choose us"
        title="Premium service without the friction"
      >
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <div
              key={point}
              className="rounded-lg bg-brand-mist p-5 dark:bg-slate-900"
            >
              <h3 className="font-bold text-brand-navy dark:text-white">
                {point}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Clear communication, careful home visits and practical repair
                advice from booking to completion.
              </p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Brands" title="Brands we repair">
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {brands.map((brand) => (
            <Link
              className="rounded-lg border border-slate-200 bg-white p-4 text-center font-bold hover:border-brand-blue dark:border-slate-800 dark:bg-slate-950"
              key={brand.slug}
              href={`/brands/${brand.slug}`}
            >
              {brand.name}
            </Link>
          ))}
        </div>
      </Section>
      <Section eyebrow="Process" title="A simple repair journey">
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {[
            "Book by call, WhatsApp or form",
            "Technician inspects the appliance",
            "Approve clear repair estimate",
            "Repair, testing and service support",
          ].map((step, index) => (
            <div
              className="rounded-lg border border-slate-200 p-5 dark:border-slate-800"
              key={step}
            >
              <span className="text-3xl font-black text-brand-orange">
                0{index + 1}
              </span>
              <h3 className="mt-3 font-bold">{step}</h3>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Lead form" title="Book a technician">
        <LeadForm />
      </Section>
      <Section eyebrow="FAQ" title="Quick answers before you book">
        <FAQList items={homeFaqs} />
      </Section>
      <Section eyebrow="Blog" title="Repair guides and maintenance advice">
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {articles.slice(0, 3).map((post) => (
            <Link
              className="rounded-lg border border-slate-200 p-5 hover:border-brand-blue dark:border-slate-800"
              key={post.slug}
              href={`/blog/${post.slug}`}
            >
              <p className="text-sm font-bold text-brand-blue">
                {post.category}
              </p>
              <h2 className="mt-3 text-xl font-bold text-brand-navy dark:text-white">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </Section>
      <section className="bg-brand-blue py-14 text-white">
        <div className="container-page flex flex-wrap items-center justify-between gap-5">
          <div>
            <h2 className="text-3xl font-black">
              Need urgent appliance repair today?
            </h2>
            <p className="mt-2 text-blue-50">
              Call now or book online. We will route your request to the nearest
              available technician.
            </p>
          </div>
          <ButtonLink href={site.phoneHref}>Call {site.phone}</ButtonLink>
        </div>
      </section>
    </main>
  );
}
