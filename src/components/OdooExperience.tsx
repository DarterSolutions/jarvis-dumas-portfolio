import { odooCases } from "@/content/portfolio";

export function OdooExperience() {
  return (
    <section id="odoo" className="section-pad border-t border-line bg-fog py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-teal">
          ERP & integrations
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-4xl font-bold tracking-[-0.02em] text-ink md:text-5xl">
          Enterprise Odoo from legacy 12 through versions 15–19.
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">
          Functional implementation, technical development, and major version
          upgrades—from multi-location retail and manufacturing to migrations,
          connectors, and day-to-day operational support.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {odooCases.map((item) => (
            <article key={item.name} className="border-t border-line pt-6">
              <h3 className="font-display text-2xl font-bold text-ink">
                {item.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-navy">{item.title}</p>
              <p className="mt-4 text-ink-soft">{item.body}</p>
              {item.items.length > 0 && (
                <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                  {item.items.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-teal" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
