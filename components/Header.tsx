"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, Moon, Phone, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { areas, brands, services } from "@/lib/content";
import { trackPhoneClick, trackWhatsappClick } from "@/lib/analytics";
import { site } from "@/lib/site";

const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/brands", label: "Brands" },
  { href: "/service-areas", label: "Locations" },
  { href: "/problems", label: "Problems" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(stored ? stored === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
      <div className="bg-brand-navy text-white">
        <div className="container-page flex min-h-10 flex-wrap items-center justify-between gap-2 py-2 text-sm">
          <span>24x7 doorstep appliance repair across Delhi NCR</span>
          <div className="flex gap-4">
            <a href={site.phoneHref} onClick={() => trackPhoneClick("header_bar")}>
              Call {site.phonePrimary}
            </a>
            <a href={site.whatsappHref} onClick={() => trackWhatsappClick("header_bar")}>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="container-page flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <Image
            src="/logo.png"
            alt={`${site.name} logo`}
            width={48}
            height={48}
            priority
            className="h-12 w-12"
          />
          <span className="hidden text-lg font-black text-brand-navy dark:text-white sm:inline">
            {site.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map((item) => (
            <Link
              className="text-sm font-semibold text-slate-700 hover:text-brand-blue dark:text-slate-200"
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
          <div className="group relative">
            <button className="text-sm font-semibold">More</button>
            <div className="invisible absolute right-0 top-8 grid w-[760px] grid-cols-4 gap-5 rounded-lg border border-slate-200 bg-white p-5 opacity-0 shadow-soft transition group-hover:visible group-hover:opacity-100 dark:border-slate-800 dark:bg-slate-950">
              <MenuColumn
                title="Services"
                items={services.map((s) => [s.name, `/services/${s.slug}`])}
              />
              <MenuColumn
                title="Locations"
                items={areas.map((a) => [a.name, `/service-areas/${a.slug}`])}
              />
              <MenuColumn
                title="Brands"
                items={brands.map((b) => [b.name, `/brands/${b.slug}`])}
              />
              <MenuColumn
                title="Resources"
                items={[
                  ["Problem Library", "/problems"],
                  ["Error Code Lookup", "/error-codes"],
                  ["Popular Repairs", "/repair"],
                ]}
              />
            </div>
          </div>
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark(!dark)}
            className="focus-ring rounded-full border border-slate-200 p-2 dark:border-slate-700"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            className="focus-ring hidden items-center gap-2 rounded-full bg-brand-orange px-4 py-3 text-sm font-bold text-white sm:inline-flex"
            href={site.phoneHref}
            onClick={() => trackPhoneClick("header_call_now")}
          >
            <Phone size={16} /> Call Now
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
            className="focus-ring rounded-full border border-slate-200 p-2 lg:hidden dark:border-slate-700"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="container-page grid gap-3 pb-5 lg:hidden">
          {[...nav, { href: "/error-codes", label: "Error Codes" }, { href: "/repair", label: "Popular Repairs" }].map(
            (item) => (
              <Link
                onClick={() => setOpen(false)}
                className="rounded-md border border-slate-200 p-3 font-semibold dark:border-slate-800"
                key={item.href}
                href={item.href}
              >
                {item.label}
              </Link>
            ),
          )}
        </div>
      )}
    </header>
  );
}

function MenuColumn({ title, items }: { title: string; items: string[][] }) {
  return (
    <div>
      <p className="mb-3 font-bold text-brand-blue">{title}</p>
      <div className="grid gap-2">
        {items.map(([label, href]) => (
          <Link
            className="text-sm text-slate-700 hover:text-brand-blue dark:text-slate-200"
            key={href}
            href={href}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
