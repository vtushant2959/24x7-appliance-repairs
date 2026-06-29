import Link from "next/link";
import { Section } from "@/components/ui";
import { articles, blogIdeas } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "Appliance Repair Blog",
  description:
    "SEO-ready repair guides, maintenance tips and troubleshooting articles for home appliances.",
});
export default function BlogPage() {
  return (
    <main>
      <Section eyebrow="Blog" title="Appliance repair guides">
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {articles.map((post) => (
            <Link
              className="rounded-lg border border-slate-200 p-5 hover:border-brand-blue dark:border-slate-800"
              href={`/blog/${post.slug}`}
              key={post.slug}
            >
              <p className="text-sm font-bold text-brand-blue">
                {post.category}
              </p>
              <h2 className="mt-2 text-xl font-bold text-brand-navy dark:text-white">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </Section>
      <Section eyebrow="Editorial calendar" title="100 SEO-ready blog ideas">
        <ol className="mt-8 grid gap-2 md:grid-cols-2">
          {blogIdeas.map((idea, index) => (
            <li
              className="rounded-md border border-slate-200 p-3 text-sm dark:border-slate-800"
              key={idea.slug}
            >
              {index + 1}. {idea.title}
            </li>
          ))}
        </ol>
      </Section>
    </main>
  );
}
