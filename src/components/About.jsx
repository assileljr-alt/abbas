import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="overflow-hidden bg-[#f4f7ff] py-24 lg:py-32">
      <div className="marfaer-container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85"
              alt="Construction MARFAER"
              className="h-[600px] w-full rounded-3xl object-cover"
            />

            <div className="absolute bottom-6 right-6 max-w-xs rounded-2xl bg-[#e30613] p-7 text-white shadow-2xl">
              <p className="text-4xl font-black">MARFAER</p>
              <p className="mt-2 text-sm leading-6 text-[#ffe5e8]">
                Une entreprise tournée vers les projets qui façonnent demain.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e30613]">
              Le Groupe
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              L'architecture comme
              <span className="block text-neutral-400">
                outil de transformation.
              </span>
            </h2>

            <p className="mt-8 text-base leading-8 text-neutral-600">
              MARFAER GROUPE est une entreprise spécialisée dans la
              construction, l'architecture intérieure et extérieure, le génie
              civil et l'aménagement.
            </p>

            <p className="mt-5 text-base leading-8 text-neutral-600">
              Notre approche repose sur la maîtrise du projet dans son ensemble
              : conception, planification, exécution et suivi.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Exigence technique",
                "Qualité d'exécution",
                "Respect des délais",
                "Vision durable",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e30613] text-white">
                    <Check size={14} />
                  </span>

                  <span className="text-sm font-bold">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/a-propos"
              className="group mt-10 inline-flex items-center gap-3 border-b-2 border-[#0057d9] pb-2 text-sm font-bold text-[#0057d9]"
            >
              Découvrir MARFAER GROUPE
              <ArrowUpRight
                size={17}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
