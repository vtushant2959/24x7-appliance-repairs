"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { areas, services } from "@/lib/data";
const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  service: z.string().min(2),
  area: z.string().min(2),
  message: z.string().optional(),
});
type FormValues = z.infer<typeof schema>;
export function LeadForm({
  compact = false,
  defaultService,
  defaultArea,
}: {
  compact?: boolean;
  defaultService?: string;
  defaultArea?: string;
}) {
  const [status, setStatus] = useState("");
  const initialService = defaultService || services[0].name;
  const initialArea = defaultArea || areas[0].name;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { service: initialService, area: initialArea },
  });
  async function onSubmit(values: FormValues) {
    setStatus("");
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    setStatus(data.message);
    if (response.ok)
      reset({
        service: initialService,
        area: initialArea,
        name: "",
        phone: "",
        message: "",
      });
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-3 rounded-lg border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-950"
    >
      <div className={compact ? "grid gap-3" : "grid gap-3 sm:grid-cols-2"}>
        <label className="grid gap-1 text-sm font-medium">
          Name
          <input
            className="focus-ring rounded-md border border-slate-200 px-3 py-3 dark:border-slate-700 dark:bg-slate-900"
            {...register("name")}
            placeholder="Your name"
          />
          {errors.name && (
            <span className="text-xs text-red-600">Required</span>
          )}
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Phone
          <input
            className="focus-ring rounded-md border border-slate-200 px-3 py-3 dark:border-slate-700 dark:bg-slate-900"
            {...register("phone")}
            placeholder="Mobile number"
          />
          {errors.phone && (
            <span className="text-xs text-red-600">Required</span>
          )}
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Service
          <select
            className="focus-ring rounded-md border border-slate-200 px-3 py-3 dark:border-slate-700 dark:bg-slate-900"
            {...register("service")}
          >
            {services.map((item) => (
              <option key={item.slug}>{item.name}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Area
          <select
            className="focus-ring rounded-md border border-slate-200 px-3 py-3 dark:border-slate-700 dark:bg-slate-900"
            {...register("area")}
          >
            {areas.map((item) => (
              <option key={item.slug}>{item.name}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-1 text-sm font-medium">
        Problem details
        <textarea
          className="focus-ring min-h-24 rounded-md border border-slate-200 px-3 py-3 dark:border-slate-700 dark:bg-slate-900"
          {...register("message")}
          placeholder="Tell us the appliance, brand and issue"
        />
      </label>
      <button
        disabled={isSubmitting}
        className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-orange px-5 font-semibold text-white hover:bg-orange-600 disabled:opacity-70"
      >
        <Send size={18} />
        {isSubmitting ? "Sending..." : "Book Technician"}
      </button>
      {status && (
        <p className="text-sm font-medium text-brand-blue">{status}</p>
      )}
    </form>
  );
}
