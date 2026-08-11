import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/portfolio";

export function Projects() {
  return (
    <section id="work" className="section-pad border-t border-line bg-fog py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-teal">
          Featured work
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-4xl font-bold tracking-[-0.02em] text-ink md:text-5xl">
          Products and systems built for real use.
        </h2>

        <ul className="mt-16">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="project-band group grid gap-6 border-t border-line py-10 md:grid-cols-[88px_1.05fr_0.95fr] md:items-center md:gap-10"
              >
                <span className="font-mono text-sm text-navy md:self-start md:pt-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="font-display text-3xl font-bold tracking-[-0.02em] text-ink transition-colors group-hover:text-navy md:text-4xl">
                      {project.name}
                    </h3>
                    <span className="text-sm text-ink-soft">{project.kind}</span>
                  </div>
                  <p className="mt-3 max-w-2xl text-ink-soft">{project.blurb}</p>
                  <ul className="tech-list mt-5">
                    {project.stack.slice(0, 6).map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-block text-sm font-semibold text-navy opacity-70 transition-opacity group-hover:opacity-100">
                    View case →
                  </span>
                </div>
                {project.cover ? (
                  <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                    <Image
                      src={project.cover}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                ) : (
                  <div
                    className="hidden aspect-[16/10] md:block"
                    style={{
                      background: `linear-gradient(145deg, ${project.accent}22, transparent)`,
                    }}
                    aria-hidden
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
