import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/ArticleBody";
import { FAQList } from "@/components/FAQList";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd, Section } from "@/components/ui";
import { getService, getFaqsByService } from "@/lib/content";
import { articles, getArticle } from "@/lib/content/blog";
import { articleSchema, breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

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

  const service = getService(post.serviceSlug);
  const articleFaqs = getFaqsByService(post.serviceSlug).slice(0, 4);

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Blog", url: `${site.url}/blog` },
          { name: post.title, url: `${site.url}/blog/${post.slug}` },
        ])}
      />
      <JsonLd data={articleSchema(post)} />
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
          <ArticleBody blocks={post.body} />
        </Section>
        <Section title="Book help for this issue">
          <LeadForm defaultService={service?.name} />
        </Section>
        {articleFaqs.length > 0 && (
          <Section title="Related questions">
            <FAQList items={articleFaqs} />
          </Section>
        )}
      </article>
    </main>
  );
}
