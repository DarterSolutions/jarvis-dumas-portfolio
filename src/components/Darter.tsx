import Image from "next/image";
import { darter } from "@/content/portfolio";

export function Darter() {
  return (
    <section id="darter" className="section-pad border-t border-line bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-teal">
              Company
            </p>
            <h2 className="font-display mt-4 text-4xl font-bold tracking-[-0.02em] text-ink md:text-5xl">
              {darter.name}
            </h2>
            <p className="mt-4 text-xl text-ink-soft">{darter.tagline}</p>
            <p className="mt-6 max-w-xl text-ink-soft">{darter.focus}</p>
            <p className="mt-6 inline-block border-l-2 border-navy pl-4 text-sm font-semibold text-navy">
              {darter.status}
            </p>
          </div>
          <div className="relative flex min-h-[160px] items-center justify-center bg-mist/60 px-8 py-10">
            <Image
              src="/darter-logo.png"
              alt="Darter Solutions"
              width={420}
              height={80}
              className="h-auto w-full max-w-md object-contain"
              priority
            />
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-12">
          <h3 className="font-display text-2xl font-bold text-ink">Services</h3>
          <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {darter.services.map((service) => (
              <li
                key={service}
                className="border-b border-line pb-3 text-ink-soft"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
