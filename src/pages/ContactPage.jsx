import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import FacebookIcon from "../components/FacebookIcon";

export default function ContactPage() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSent(true);
    event.currentTarget.reset();
  };

  return (
    <main className="pt-20">
      {/* HERO */}
      <section className="bg-[#061735] py-24 text-white">
        <div className="marfaer-container">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff4b55]">
            Contact
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-tight sm:text-6xl lg:text-8xl">
            Parlons de votre
            <span className="block text-[#e30613]">projet.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            Construction, architecture ou génie civil : MARFAER GROUPE
            transforme vos ambitions en réalisations concrètes.
          </p>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section className="bg-[#f4f7ff] py-24">
        <div className="marfaer-container grid gap-12 lg:grid-cols-2">
          {/* INFORMATIONS */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e30613]">
              Parlons ensemble
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Un projet en tête ?
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-neutral-600">
              Présentez-nous votre projet. Notre équipe étudiera vos besoins et
              vous accompagnera de la conception jusqu'à la réalisation.
            </p>

            <div className="mt-10 space-y-8">
              {/* ADRESSE */}
              <div className="flex gap-4">
                <MapPin size={24} className="mt-1 shrink-0 text-[#e30613]" />

                <div>
                  <p className="font-bold">Adresse</p>
                  <p className="mt-1 text-sm text-neutral-500">
                    N'Djamena, Tchad
                  </p>
                </div>
              </div>

              {/* TELEPHONE */}
              <div className="flex gap-4">
                <Phone size={24} className="mt-1 shrink-0 text-[#e30613]" />

                <div>
                  <p className="font-bold">Téléphone</p>
                  <a href="tel:+23560821818" className="mt-1 block text-sm text-neutral-500 transition hover:text-[#0057d9]">+235 60821818</a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-4">
                <Mail size={24} className="mt-1 shrink-0 text-[#e30613]" />

                <div>
                  <p className="font-bold">Email</p>
                  <a href="mailto:contact@marfaer.com" className="mt-1 block text-sm text-neutral-500 transition hover:text-[#0057d9]">contact@marfaer.com</a>
                </div>
              </div>

              <div className="flex gap-4">
                <FacebookIcon size={24} className="mt-1 shrink-0 text-[#1877f2]" />

                <div>
                  <p className="font-bold">Facebook</p>
                  <a
                    href="https://www.facebook.com/profile.php?id=100081259790935"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex text-sm text-neutral-500 transition hover:text-[#1877f2]"
                  >
                    Suivre MARFAER GROUPE sur Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FORMULAIRE */}
          <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-8 shadow-xl lg:p-10">
            <div className="grid gap-6">
              <div>
                <label htmlFor="name" className="text-sm font-bold">
                  Nom complet
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Votre nom"
                  className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-4 outline-none transition focus:ring-2 focus:ring-[#0057d9]"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-bold">
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="vous@example.com"
                  className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-4 outline-none transition focus:ring-2 focus:ring-[#0057d9]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-bold">
                  Téléphone
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+235..."
                  className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-4 outline-none transition focus:ring-2 focus:ring-[#0057d9]"
                />
              </div>

              <div>
                <label htmlFor="project" className="text-sm font-bold">
                  Votre projet
                </label>

                <textarea
                  id="project"
                  name="project"
                  rows={6}
                  required
                  placeholder="Décrivez votre projet..."
                  className="mt-2 w-full resize-none rounded-xl border border-neutral-200 px-4 py-4 outline-none transition focus:ring-2 focus:ring-[#0057d9]"
                />
              </div>

              <button
                type="submit"
                className="group flex items-center justify-center gap-3 rounded-xl bg-[#0057d9] px-6 py-4 font-bold text-white transition hover:bg-[#003b95]"
              >
                Envoyer la demande
                <ArrowUpRight
                  size={18}
                  className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              {isSent && (
                <p role="status" className="flex items-center gap-2 rounded-xl bg-[#e8f0ff] px-4 py-3 text-sm font-semibold text-[#003b95]">
                  <CheckCircle2 size={18} /> Merci. Votre demande est prête à être transmise.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
