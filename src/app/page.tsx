import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Darter } from "@/components/Darter";
import { OdooExperience } from "@/components/OdooExperience";
import { Skills } from "@/components/Skills";
import { Contact, SiteFooter } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Darter />
        <OdooExperience />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
