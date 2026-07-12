import {
  BadgeCheck,
  Clock,
  Package,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { trustPoints } from "@/lib/content";

const icons = [Clock, Wrench, ShieldCheck, Package, BadgeCheck, Sparkles];

export function TrustBadges() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {trustPoints.map((point, index) => {
        const Icon = icons[index % icons.length];
        return (
          <div
            key={point.title}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950"
          >
            <Icon className="text-brand-blue" size={22} />
            <h3 className="mt-3 font-bold text-brand-navy dark:text-white">
              {point.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {point.detail}
            </p>
          </div>
        );
      })}
    </div>
  );
}
