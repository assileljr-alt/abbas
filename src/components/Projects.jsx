import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Résidence Horizon",
    category: "Architecture & Construction",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Villa Contemporaine",
    category: "Architecture extérieure",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Espace Business",
    category: "Architecture intérieure",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function Projects() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="marfaer-container">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e30613]">
              Réalisations
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl lg:text-6xl">
              Des projets qui
              <span className="block text-neutral-400">parlent pour nous.</span>
            </h2>
          </div>

          <Link
            to="/realisations"
            className="group inline-flex items-center gap-2 text-sm font-bold"
          >
            Toutes les réalisations
            <ArrowUpRight
              size={17}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              to="/realisations"
              className={`group relative overflow-hidden rounded-3xl ${
                index === 0 ? "lg:col-span-7" : "lg:col-span-5"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                  index === 0 ? "h-[520px]" : "h-[520px]"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061735]/85 via-[#061735]/15 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-[#ff4b55]">
                  {project.category}
                </p>

                <div className="mt-2 flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-black">{project.title}</h3>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0057d9]">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
