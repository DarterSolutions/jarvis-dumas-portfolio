import { skills } from "@/content/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-line bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-teal">
          Stack
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-4xl font-bold tracking-[-0.02em] text-ink md:text-5xl">
          Languages, frameworks, data, and platforms.
        </h2>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.category} className="border-t border-line pt-5">
              <h3 className="font-display text-lg font-bold text-ink">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
