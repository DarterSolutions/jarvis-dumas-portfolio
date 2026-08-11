import Link from "next/link";

const links = [
  { href: "#work", label: "Work" },
  { href: "#darter", label: "Darter" },
  { href: "#odoo", label: "Odoo" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 section-pad">
      <nav className="mx-auto flex max-w-6xl items-center justify-between py-5">
        <Link
          href="/"
          className="font-display text-sm font-bold tracking-[0.14em] uppercase text-ink"
        >
          Jarvis Dumas
        </Link>
        <ul className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-navy"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="text-sm font-semibold text-navy md:hidden">
          Contact
        </a>
      </nav>
    </header>
  );
}
