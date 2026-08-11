import { experience, profile } from "@/content/portfolio";

export function About() {
  return (
    <section id="about" className="section-pad border-t border-line bg-paper py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1fr_1.15fr] md:gap-20">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-teal">
            About
          </p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-[-0.02em] text-ink md:text-5xl">
            From business problem to shipped system.
          </h2>
        </div>
        <div className="space-y-6 text-lg text-ink-soft">
          <p>{profile.summary}</p>
          <p>{profile.brand}</p>
          <p className="text-base">
            {profile.education.degree} · {profile.education.school} ·{" "}
            {profile.education.years}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl border-t border-line pt-12">
        <h3 className="font-display text-2xl font-bold text-ink">Experience</h3>
        <ul className="mt-8 space-y-10">
          {experience.map((job) => (
            <li
              key={job.company}
              className="grid gap-3 border-b border-line pb-10 last:border-0 md:grid-cols-[minmax(0,220px)_1fr] md:gap-10"
            >
              <div>
                <p className="font-semibold text-ink">{job.company}</p>
                <p className="mt-1 text-sm text-ink-soft">{job.period}</p>
                <p className="text-sm text-ink-soft">{job.location}</p>
              </div>
              <div>
                <p className="font-medium text-navy">{job.role}</p>
                <ul className="mt-3 space-y-2 text-ink-soft">
                  {job.points.map((point) => (
                    <li key={point} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
