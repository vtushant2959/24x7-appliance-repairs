"use server";
import nodemailer from "nodemailer";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  service: z.string().min(2),
  area: z.string().min(2),
  brand: z.string().optional(),
  address: z.string().optional(),
  preferredDate: z.string().optional(),
  preferredTimeSlot: z
    .enum(["Morning", "Afternoon", "Evening", "Emergency / ASAP"])
    .optional(),
  message: z.string().optional(),
  // Honeypot: real users never see or fill this field. Bots that fill every
  // input do, so a non-empty value here means silently drop the submission.
  companyWebsite: z.string().optional(),
});

export async function submitLead(input: unknown) {
  const parsed = leadSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, message: "Please enter your name, phone, service and area." };
  }
  const lead = parsed.data;
  if (lead.companyWebsite) {
    // Honeypot tripped - report success to the bot without sending anything.
    return { ok: true, message: "Thanks. Your booking request has been sent." };
  }

  if (!process.env.SMTP_HOST || !process.env.LEAD_TO_EMAIL) {
    console.info("Lead received", lead);
    return { ok: true, message: "Thanks. Your request is saved. Our team will call you shortly." };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: process.env.SMTP_USER
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      : undefined,
  });

  const lines = [
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Service: ${lead.service}`,
    `Area: ${lead.area}`,
    lead.brand ? `Brand: ${lead.brand}` : null,
    lead.address ? `Address: ${lead.address}` : null,
    lead.preferredDate ? `Preferred date: ${lead.preferredDate}` : null,
    lead.preferredTimeSlot ? `Preferred time: ${lead.preferredTimeSlot}` : null,
    `Message: ${lead.message || ""}`,
  ].filter(Boolean);

  await transporter.sendMail({
    from: process.env.LEAD_FROM_EMAIL || process.env.LEAD_TO_EMAIL,
    to: process.env.LEAD_TO_EMAIL,
    subject: `New appliance repair lead: ${lead.service}`,
    text: lines.join("\n"),
  });

  return { ok: true, message: "Thanks. Your booking request has been sent." };
}
