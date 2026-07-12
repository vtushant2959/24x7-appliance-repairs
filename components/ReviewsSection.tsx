import { Star } from "lucide-react";
import { reviews } from "@/lib/content";
import { Section } from "@/components/ui";

export function ReviewsSection() {
  if (reviews.length === 0) return null;
  const avg =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  return (
    <Section eyebrow="Reviews" title="What customers say">
      <p className="mt-2 text-sm font-semibold text-brand-blue">
        {avg.toFixed(1)} / 5 from {reviews.length} reviews
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={`${review.name}-${review.date}`}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950"
          >
            <div className="flex gap-1 text-brand-orange">
              {Array.from({ length: review.rating }).map((_, index) => (
                <Star key={index} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              &ldquo;{review.text}&rdquo;
            </p>
            <p className="mt-4 text-sm font-bold text-brand-navy dark:text-white">
              {review.name}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
