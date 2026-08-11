import { profile } from "@/content/portfolio";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-line bg-fog py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-teal">
            Contact
          </p>
          <h2 className="font-display mt-3 max-w-xl text-4xl font-bold tracking-[-0.02em] text-ink md:text-5xl">
            Let’s talk systems, products, or Odoo.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-ink-soft">
            Based in {profile.location}. Open to ERP engagements, custom software,
            and collaborations. Send a note below—or reach me directly.
          </p>

          <div className="mt-10 flex flex-col gap-3 text-lg">
            <a
              href={`mailto:${profile.email}`}
              className="font-semibold text-navy underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-ink-soft hover:text-navy"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="section-pad border-t border-line bg-paper py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-ink-soft md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Jarvis Dumas · Darter Solutions</p>
        <p>Software · SaaS · Official Odoo Partner</p>
      </div>
    </footer>
  );
}
