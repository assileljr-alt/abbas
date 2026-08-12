import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../data/services";

export default function Services() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="marfaer-container">
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e30613]">
              Nos expertises
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Une vision globale
              <span className="block text-neutral-400">
                de la construction.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-neutral-500">
            De la première esquisse à la livraison, MARFAER GROUPE rassemble
            plusieurs expertises autour d'une même exigence : créer des projets
            durables.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.number}
                to={`/services/${service.slug}`}
                className="group block bg-white p-8 transition hover:bg-[#061735] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#0057d9] lg:p-10"
                aria-label={`Découvrir le service : ${service.title}`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold text-[#e30613]">
                    {service.number}
                  </span>

                  <Icon
                    size={26}
                    strokeWidth={1.5}
                    className="text-neutral-400 transition group-hover:text-[#ff4b55]"
                  />
                </div>

                <h3 className="mt-16 text-2xl font-black">{service.title}</h3>

                <p className="mt-4 text-sm leading-7 text-neutral-500 transition group-hover:text-neutral-400">
                  {service.text}
                </p>

                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e30613]">
                  Découvrir
                  <ArrowUpRight size={15} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
