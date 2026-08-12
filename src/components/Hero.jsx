import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#061735] text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=85"
          alt="Projet architectural MARFAER"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#061735]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061735] via-[#061735]/75 to-[#061735]/20" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="marfaer-container w-full pt-32">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-[#ff4b55]">
              Construction • Architecture • Génie civil
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              Nous construisons
              <span className="block text-[#e30613]">ce qui reste.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
              MARFAER GROUPE accompagne les particuliers, entreprises et
              institutions dans la conception et la réalisation de projets
              immobiliers, architecturaux et d'infrastructures.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#e30613] px-7 py-4 font-bold text-white transition hover:bg-[#ff2633]"
              >
                Parlons de votre projet
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/realisations"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 px-7 py-4 font-bold transition hover:bg-white hover:text-[#061735]"
              >
                <Play size={16} />
                Voir nos réalisations
              </Link>
            </div>
          </div>

          <div className="mt-20 grid max-w-3xl grid-cols-2 gap-8 border-t border-white/20 pt-8 sm:grid-cols-4">
            <div>
              <p className="text-3xl font-black">9+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-neutral-400">
                Années d'expérience
              </p>
            </div>

            <div>
              <p className="text-3xl font-black">102+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-neutral-400">
                Projets
              </p>
            </div>

            <div>
              <p className="text-3xl font-black">6</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-neutral-400">
                Expertises
              </p>
            </div>

            <div>
              <p className="text-3xl font-black">360°</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-neutral-400">
                Accompagnement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
