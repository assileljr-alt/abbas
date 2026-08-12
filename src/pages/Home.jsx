import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Process from "../components/Process";
import Projects from "../components/Projects";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Process />
      <Projects />
      <CTA />
    </main>
  );
}
