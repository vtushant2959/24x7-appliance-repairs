import Link from "next/link";
import { notFound } from "next/navigation";
import { CalloutBox } from "@/components/CalloutBox";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd, Section } from "@/components/ui";
import { errorCodes, getBrand, getErrorCode, getProblem, getService } from "@/lib/content";
import { breadcrumbSchema, pageMetadata, problemSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return errorCodes.map((code) => ({ slug: code.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const code = getErrorCode(slug);
  if (!code) return {};
  const brand = getBrand(code.brandSlug);
  return pageMetadata({
    title: `${brand?.name} ${code.code} Error Code Explained`,
    description: `${brand?.name} ${code.code}: ${code.meaning} Causes, troubleshooting steps and whether it's safe to check yourself.`,
    path: `/error-codes/${code.slug}`,
  });
}

export default async function ErrorCodePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const code = getErrorCode(slug);
  if (!code) notFound();

  const brand = getBrand(code.brandSlug);
  const service = getService(code.serviceSlug);
  const relatedProblem = code.relatedProblemSlug ? getProblem(code.relatedProblemSlug) : null;

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Error Codes", url: `${site.url}/error-codes` },
          { name: `${brand?.name} ${code.code}`, url: `${site.url}/error-codes/${code.slug}` },
        ])}
      />
      <JsonLd
        data={problemSchema({
          name: `${brand?.name} ${code.code} Error Code`,
          description: code.meaning,
          path: `/error-codes/${code.slug}`,
        })}
      />
      <section className="bg-brand-mist py-14 dark:bg-slate-900">
        <div className="container-page">
          <p className="font-bold text-brand-blue">Error Code Knowledge Base</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black text-brand-navy dark:text-white">
            {brand?.name} {code.code} - {code.applianceCategory}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            {code.meaning}
          </p>
        </div>
      </section>

      <Section eyebrow="Likely causes" title="Why this error appears">
        <ul className="prose-site mt-6 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
          {code.likelyCauses.map((cause) => (
            <li key={cause}>{cause}</li>
          ))}
        </ul>
      </Section>

      {code.diySteps ? (
        <Section eyebrow="Before you call" title="Safe checks you can try">
          <ul className="prose-site mt-6 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
            {code.diySteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
          <CalloutBox tone="info">
            If the error continues after these checks, book a technician
            rather than repeating the cycle - it risks further damage.
          </CalloutBox>
        </Section>
      ) : (
        <Section eyebrow="Safety" title="This needs a technician">
          <CalloutBox tone="warn">
            {code.severity} - this fault involves internal electrical or
            mechanical components that aren&rsquo;t safe to inspect yourself. Book a
            technician for a proper diagnosis.
          </CalloutBox>
        </Section>
      )}

      {relatedProblem && (
        <Section eyebrow="Related" title="Related problem guide">
          <Link
            href={`/problems/${relatedProblem.slug}`}
            className="mt-4 inline-block rounded-lg border border-slate-200 p-5 hover:border-brand-blue dark:border-slate-800"
          >
            <h3 className="font-bold text-brand-navy dark:text-white">{relatedProblem.name}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Full troubleshooting guide with symptoms and safe checks.
            </p>
          </Link>
        </Section>
      )}

      <Section eyebrow="Book a technician" title={`Get your ${brand?.name} appliance fixed`}>
        <LeadForm compact defaultService={service?.name} defaultBrand={brand?.name} />
      </Section>
    </main>
  );
}
