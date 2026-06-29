import Link from "next/link";
import { cn } from "@/lib/utils";
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition",
        variant === "primary" &&
          "bg-brand-orange text-white shadow-soft hover:bg-orange-600",
        variant === "secondary" &&
          "bg-brand-blue text-white shadow-soft hover:bg-blue-700",
        variant === "ghost" &&
          "border border-slate-200 bg-white text-brand-navy hover:border-brand-blue dark:border-slate-700 dark:bg-slate-900 dark:text-white",
        className,
      )}
    >
      {children}
    </Link>
  );
}
export function Section({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-16 sm:py-20", className)}>
      <div className="container-page">
        {eyebrow && (
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-blue">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-brand-navy dark:text-white sm:text-4xl">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
