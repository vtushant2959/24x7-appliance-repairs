"use client";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Brand, ErrorCode } from "@/lib/content/types";

export function ErrorCodeFilterBar({
  brands,
  errorCodes,
}: {
  brands: Brand[];
  errorCodes: ErrorCode[];
}) {
  const [active, setActive] = useState<string | null>(null);
  const filtered = active ? errorCodes.filter((code) => code.brandSlug === active) : errorCodes;

  return (
    <div>
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={() => setActive(null)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-semibold",
            active === null
              ? "border-brand-blue bg-brand-blue text-white"
              : "border-slate-200 dark:border-slate-800",
          )}
        >
          All brands
        </button>
        {brands.map((brand) => (
          <button
            key={brand.slug}
            onClick={() => setActive(brand.slug)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold",
              active === brand.slug
                ? "border-brand-blue bg-brand-blue text-white"
                : "border-slate-200 dark:border-slate-800",
            )}
          >
            {brand.name}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((code) => (
          <Link
            key={code.slug}
            href={`/error-codes/${code.slug}`}
            className="rounded-lg border border-slate-200 p-5 hover:border-brand-blue dark:border-slate-800"
          >
            <span className="font-bold text-brand-blue">
              {brands.find((b) => b.slug === code.brandSlug)?.name} {code.code}
            </span>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{code.meaning}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
