"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#darter", label: "Darter" },
  { href: "/#odoo", label: "Odoo" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-30 section-pad">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between py-5">
        <Link
          href="/"
          className="font-display z-40 text-sm font-bold tracking-[0.14em] uppercase text-ink"
          onClick={() => setOpen(false)}
        >
          Jarvis Dumas
        </Link>

        <ul className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-navy">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="relative z-40 flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-full bg-ink transition-transform duration-200 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] block h-0.5 w-full bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] block h-0.5 w-full bg-ink transition-transform duration-200 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-30 bg-paper/97 backdrop-blur-sm transition-[opacity,visibility] duration-200 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="section-pad flex h-full flex-col justify-center gap-8 pb-20">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-display text-3xl font-bold tracking-[-0.02em] text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
