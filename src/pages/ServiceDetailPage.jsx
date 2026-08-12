import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <main className="marfaer-container pt-40 pb-24">
        <h1 className="text-4xl font-black">Service introuvable</h1>
        <Link to="/services" className="mt-6 inline-flex font-bold text-[#0057d9]">
          Retour aux services
        </Link>
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <main className="pt-24">
      <section className="bg-[#061735] py-20 text-white lg:py-28">
        <div className="marfaer-container">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-[#ff4b55] transition hover:text-white">
            <ArrowLeft size={18} /> Tous nos services
          </Link>
          <div className="mt-12 flex max-w-4xl items-start justify-between gap-8">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-[#ff4b55]">EXPERTISE {service.number}</p>
              <h1 className="mt-5 text-5xl font-black sm:text-6xl lg:text-7xl">{service.title}</h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">{service.text}</p>
            </div>
            <Icon size={64} strokeWidth={1.25} className="hidden shrink-0 text-[#e30613] sm:block" />
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7ff] py-20 lg:py-28">
        <div className="marfaer-container grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e30613]">Notre approche</p>
            <h2 className="mt-4 text-4xl font-black">Un accompagnement sur mesure.</h2>
          </div>
          <div>
            <p className="text-base leading-8 text-neutral-600">MARFAER GROUPE vous accompagne à chaque étape, avec une solution adaptée à vos besoins, votre budget et les exigences de votre projet.</p>
            <ul className="mt-8 space-y-4 text-sm font-semibold text-[#061735]">
              {["Étude et conseil personnalisés", "Conception et planification du projet", "Suivi rigoureux de la réalisation"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e30613] text-white"><Check size={14} /></span>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#0057d9] px-6 py-3 font-bold text-white transition hover:bg-[#003b95]">
              Parler de votre projet <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
