import Link from "next/link";
import { notFound } from "next/navigation";
import { ServiceContent } from "@/components/ServiceContent";
import { JsonLd, Section } from "@/components/ui";
import { getService, services } from "@/lib/content";
import { getArticlesByService } from "@/lib/content/blog";
import { breadcrumbSchema, faqSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.name} Near You`,
    description: `Book same day doorstep ${service.name.toLowerCase()} across Delhi NCR with trained technicians, transparent estimates and major brand coverage.`,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const relatedArticles = getArticlesByService(service.slug).slice(0, 3);
  const f = [
    {
      question: `Do you offer ${service.name.toLowerCase()} near me?`,
      answer: `Yes, ${site.name} offers doorstep ${service.name.toLowerCase()} across Faridabad, Ballabhgarh, South Delhi, Noida, Greater Noida, Gurugram and Ghaziabad.`,
    },
  ];
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Services", url: `${site.url}/services` },
          { name: service.name, url: `${site.url}/services/${service.slug}` },
        ])}
      />
      <JsonLd data={serviceSchema({ serviceName: service.name, path: `/services/${service.slug}` })} />
      <JsonLd data={faqSchema(f)} />
      <section className="bg-brand-mist py-14 dark:bg-slate-900">
        <div className="container-page">
          <p className="font-bold text-brand-blue">Doorstep service</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black text-brand-navy dark:text-white">
            {service.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            {service.shortDescription}
          </p>
        </div>
      </section>
      <ServiceContent service={service} />
      {relatedArticles.length > 0 && (
        <Section eyebrow="Read more" title="Related guides">
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedArticles.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-lg border border-slate-200 p-5 hover:border-brand-blue dark:border-slate-800"
              >
                <h3 className="font-bold text-brand-navy dark:text-white">{post.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </main>
  );
}
