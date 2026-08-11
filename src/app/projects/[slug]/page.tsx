import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/portfolio";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/Contact";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} · Jarvis Dumas`,
    description: project.blurb,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <SiteNav />
      <main className="bg-fog pt-24">
        <article className="section-pad mx-auto max-w-6xl pb-24">
          <Link
            href="/#work"
            className="text-sm font-semibold text-navy hover:underline"
          >
            ← All projects
          </Link>

          <p className="mt-10 font-mono text-xs tracking-[0.2em] uppercase text-teal">
            {project.kind}
          </p>
          <h1 className="font-display mt-3 text-5xl font-extrabold tracking-[-0.03em] text-ink md:text-6xl">
            {project.name}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-ink-soft">{project.summary}</p>

          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className="cta-primary mt-8 inline-flex"
            >
              Visit {project.name}
            </a>
          )}

          {project.images && project.images.length > 0 && (
            <div className="mt-14 space-y-6">
              <div className="relative aspect-[16/9] overflow-hidden bg-mist">
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1120px"
                  className="object-cover object-top"
                />
              </div>
              {project.images.length > 1 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.images.slice(1).map((image) => (
                    <div
                      key={image.src}
                      className="relative aspect-[16/10] overflow-hidden bg-mist"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="mt-16 grid gap-14 border-t border-line pt-12 md:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink">
                Highlights
              </h2>
              <ul className="mt-5 space-y-3 text-ink-soft">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-2 h-2 w-2 shrink-0"
                      style={{ background: project.accent }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {project.details?.map((detail) => (
                <p key={detail} className="mt-6 text-ink-soft">
                  {detail}
                </p>
              ))}
              {project.result && (
                <p className="mt-8 border-l-2 border-teal pl-4 text-sm text-ink-soft">
                  {project.result}
                </p>
              )}
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-ink">
                Technology
              </h2>
              <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="border-b border-line pb-2 text-sm text-ink-soft"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
