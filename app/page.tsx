import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Clock, ShieldCheck, Sparkles, Star, Wrench } from "lucide-react";
import { AiAssistantOpenButton } from "@/components/ai/AiAssistantOpenButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FAQList } from "@/components/FAQList";
import { Gallery } from "@/components/Gallery";
import { LeadForm } from "@/components/LeadForm";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ReviewsSection } from "@/components/ReviewsSection";
import { TeamSection } from "@/components/TeamSection";
import { TrustBadges } from "@/components/TrustBadges";
import { ButtonLink, JsonLd, Section } from "@/components/ui";
import { areas, brands, combos, getFaqsByCategory, problems, services } from "@/lib/content";
import { articles } from "@/lib/content/blog";
import { faqSchema, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Home Appliance Repair in Delhi NCR",
  description:
    "Premium same day doorstep appliance repair for refrigerators, washing machines, microwaves, dishwashers and dryers across Faridabad, Delhi, Noida, Gurugram and Ghaziabad.",
});

export default function HomePage() {
  const homeFaqs = getFaqsByCategory("general").concat(getFaqsByCategory("pricing").slice(0, 3));
  const featuredCombos = combos.slice(0, 6);
  const featuredProblems = problems.slice(0, 4);

  return (
    <main>
      <JsonLd data={faqSchema(homeFaqs)} />
      <section className="overflow-hidden bg-gradient-to-b from-brand-mist to-white py-14 dark:from-slate-900 dark:to-slate-950">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-blue shadow-sm dark:bg-slate-900">
              <Star size={16} fill="currentColor" /> Trusted doorstep appliance repair, 24x7
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-brand-navy dark:text-white sm:text-6xl">
              Same Day Home Appliance Repair Across Delhi NCR
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              {site.name} repairs refrigerators, washing machines, microwaves,
              dishwashers and dryers with trained doorstep technicians, clear
              estimates and fast booking by call or WhatsApp.
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
          </div>
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
              <p className="font-bold text-brand-navy dark:text-white">Quick Booking</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Share your appliance, brand and location. We arrange the nearest technician.
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
                {service.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Process" title="A simple repair journey">
        <ProcessTimeline />
      </Section>

      <Section eyebrow="Why choose us" title="Premium service without the friction">
        <AnimatedSection>
          <TrustBadges />
        </AnimatedSection>
      </Section>

      <Section eyebrow="Brands" title="Brands we repair">
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
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

      <Section eyebrow="Locations" title="Areas we cover">
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {areas.map((area) => (
            <Link
              className="rounded-lg border border-slate-200 bg-white p-4 text-center font-bold hover:border-brand-blue dark:border-slate-800 dark:bg-slate-950"
              key={area.slug}
              href={`/service-areas/${area.slug}`}
            >
              {area.name}
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Popular repairs" title="Brand repair near you">
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCombos.map((combo) => (
            <Link
              key={`${combo.brandSlug}-${combo.serviceSlug}-${combo.areaSlug}`}
              href={`/repair/${combo.brandSlug}/${combo.serviceSlug}/${combo.areaSlug}`}
              className="rounded-lg border border-slate-200 p-5 hover:border-brand-blue dark:border-slate-800"
            >
              <p className="font-bold text-brand-navy dark:text-white">
                {brands.find((b) => b.slug === combo.brandSlug)?.name}{" "}
                {services.find((s) => s.slug === combo.serviceSlug)?.name}
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                in {areas.find((a) => a.slug === combo.areaSlug)?.name}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <ButtonLink href="/repair" variant="ghost">
            See all popular repairs
          </ButtonLink>
        </div>
      </Section>

      <Section eyebrow="Problem Library" title="Not sure what's wrong?">
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
          Look up common symptoms, likely causes and safe checks before booking a technician.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProblems.map((problem) => (
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
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href="/problems" variant="ghost">
            Browse Problem Library
          </ButtonLink>
          <ButtonLink href="/error-codes" variant="ghost">
            Look up an error code
          </ButtonLink>
        </div>
      </Section>

      <Section eyebrow="AI Assistant" title="Ask our AI repair assistant">
        <div className="mt-6 flex flex-col gap-5 rounded-lg border border-slate-200 bg-brand-mist p-8 dark:border-slate-800 dark:bg-slate-900 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <Sparkles className="mt-1 shrink-0 text-brand-blue" size={28} />
            <div>
              <h3 className="text-lg font-bold text-brand-navy dark:text-white">
                Describe your appliance problem, get an instant first read
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                Our AI assistant is grounded on our own problem library and error
                code database — it can help narrow down what&rsquo;s wrong and whether
                it&rsquo;s safe to check yourself, before you book a technician.
              </p>
            </div>
          </div>
          <AiAssistantOpenButton />
        </div>
      </Section>

      <Section eyebrow="Lead form" title="Book a technician">
        <LeadForm />
      </Section>

      <ReviewsSection />
      <TeamSection />
      <Gallery />

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
              <p className="text-sm font-bold text-brand-blue">{post.category}</p>
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
            <h2 className="text-3xl font-black">Need urgent appliance repair today?</h2>
            <p className="mt-2 text-blue-50">
              Call now or book online. We will route your request to the nearest available technician.
            </p>
          </div>
          <ButtonLink href={site.phoneHref}>Call {site.phonePrimary}</ButtonLink>
        </div>
      </section>
    </main>
  );
}
