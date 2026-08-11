import { profile } from "@/content/portfolio";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="hero-atmosphere relative min-h-[100svh] overflow-hidden">
      <HeroVisual />
      <div className="section-pad relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24 md:pt-32">
        <div className="max-w-3xl">
          <p className="reveal font-mono text-xs tracking-[0.22em] uppercase text-navy">
            {profile.roles.join(" · ")}
          </p>
          <h1 className="reveal reveal-delay-1 font-display mt-4 text-[clamp(3.2rem,10vw,6.5rem)] font-extrabold leading-[0.92] tracking-[-0.03em] text-ink">
            {profile.name}
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg text-ink-soft md:text-xl">
            {profile.headline}
          </p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3">
            <a href="#work" className="cta-primary">
              View projects
            </a>
            <a href="#darter" className="cta-secondary">
              Darter Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
