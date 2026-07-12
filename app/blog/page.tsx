import Link from "next/link";
import { Section } from "@/components/ui";
import { articles } from "@/lib/content/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Appliance Repair Blog",
  description:
    "Repair guides, error code explainers, maintenance tips and local guides for home appliances in Delhi NCR.",
});

const categories = Array.from(new Set(articles.map((a) => a.category)));

export default function BlogPage() {
  return (
    <main>
      <Section eyebrow="Blog" title="Appliance repair guides">
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-slate-200 px-4 py-1.5 text-sm font-semibold dark:border-slate-800"
            >
              {category}
            </span>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {articles.map((post) => (
            <Link
              className="rounded-lg border border-slate-200 p-5 hover:border-brand-blue dark:border-slate-800"
              href={`/blog/${post.slug}`}
              key={post.slug}
            >
              <p className="text-sm font-bold text-brand-blue">{post.category}</p>
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
    </main>
  );
}
