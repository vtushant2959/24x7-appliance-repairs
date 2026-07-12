import { notFound } from "next/navigation";
import { FAQList } from "@/components/FAQList";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd, Section } from "@/components/ui";
import { articles, faqs, getArticle } from "@/lib/data";
import { faqSchema, pageMetadata } from "@/lib/seo";
export function generateStaticParams() {
  return articles.map((post) => ({ slug: post.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getArticle(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getArticle(slug);
  if (!post) notFound();
  const articleFaqs = faqs.slice(0, 6);
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          author: {
            "@type": "Organization",
            name: "The Home Appliance Services",
          },
        }}
      />
      <JsonLd data={faqSchema(articleFaqs)} />
      <article>
        <section className="bg-brand-mist py-14 dark:bg-slate-900">
          <div className="container-page">
            <p className="font-bold text-brand-blue">{post.category}</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black text-brand-navy dark:text-white">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              {post.excerpt}
            </p>
          </div>
        </section>
        <Section>
          <div className="prose-site mx-auto max-w-3xl">
            <h2>Quick summary</h2>
            <p>
              This guide explains the most common symptoms, likely causes, safe
              checks and repair decisions for {post.service.toLowerCase()}{" "}
              customers in {post.area}. It is designed for homeowners who want a
              direct answer before booking a technician.
            </p>
            <h2>Direct answer</h2>
            <p>
              If your appliance shows repeated error codes, leakage, heating
              failure, cooling drop, unusual noise or electrical smell, stop
              using it and book a trained inspection. Small faults can become
              expensive when the appliance keeps running under stress.
            </p>
            <h2>Common symptoms</h2>
            <ul>
              <li>
                Performance is weaker than usual even after basic cleaning.
              </li>
              <li>The appliance starts but stops midway or shows an error.</li>
              <li>
                There is water leakage, burning smell, tripping or unusual
                vibration.
              </li>
              <li>The same issue returns after temporary resetting.</li>
            </ul>
            <h2>Step-by-step checks</h2>
            <p>
              First, check power supply, plug condition, water inlet, drain
              path, filters and visible blockage. Second, note the model number
              and error code. Third, avoid opening sealed electrical sections.
              Fourth, call The Home Appliance Services if the issue involves
              wiring, gas, motor, compressor, PCB, heating element or water
              leakage.
            </p>
            <h2>Comparison table</h2>
            <p>
              Repair is usually best for isolated faults, available spare parts
              and appliances with a healthy cabinet. Replacement becomes
              sensible when several major parts fail together or energy
              consumption is no longer practical.
            </p>
            <h2>Myth vs fact</h2>
            <p>
              Myth: every cooling or heating fault means a major part has
              failed. Fact: many issues come from sensors, clogged pathways,
              filters, wiring, capacitors or airflow problems. Diagnosis matters
              more than guesswork.
            </p>
            <h2>Maintenance advice</h2>
            <p>
              Keep appliances level, clean filters on schedule, avoid
              overloading, use stable power, leave ventilation space and act
              early when performance changes. These habits reduce repeat
              breakdowns and help technicians solve issues faster when service
              is needed.
            </p>
            <h2>When to call a professional</h2>
            <p>
              Call a technician when the appliance trips power, leaks water near
              electrical parts, smells burnt, makes grinding sounds, fails to
              heat or cool, or shows recurring errors. The Home Appliance
              Services provides doorstep support by phone, WhatsApp and online
              form.
            </p>
          </div>
        </Section>
        <Section title="Book help for this issue">
          <LeadForm defaultService={post.service} />
        </Section>
        <Section title="Related questions">
          <FAQList items={articleFaqs} />
        </Section>
      </article>
    </main>
  );
}
