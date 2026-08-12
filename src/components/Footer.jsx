import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import FacebookIcon from "./FacebookIcon";

export default function Footer() {
  return (
    <footer className="bg-[#061735] text-white">
      <div className="marfaer-container py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-block" aria-label="MARFAER GROUPE - Accueil">
              <img src="/marfaer-logo.png" alt="MARFAER GROUPE" className="h-16 w-auto object-contain" />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-500">
              Construction, architecture et génie civil. Nous concevons et
              réalisons des espaces pensés pour durer.
            </p>

            <a
              href="https://www.facebook.com/profile.php?id=100081259790935"
              target="_blank"
              rel="noreferrer"
              aria-label="Suivre MARFAER GROUPE sur Facebook"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#1877f2] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#1877f2]/20 transition hover:scale-105 hover:bg-[#166fe5]"
            >
              <FacebookIcon />
              Facebook
            </a>

          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em]">
              Navigation
            </h3>

            <div className="mt-6 grid gap-3">
              <Link
                to="/"
                className="text-sm text-neutral-500 hover:text-white"
              >
                Accueil
              </Link>

              <Link
                to="/a-propos"
                className="text-sm text-neutral-500 hover:text-white"
              >
                Le Groupe
              </Link>

              <Link
                to="/services"
                className="text-sm text-neutral-500 hover:text-white"
              >
                Services
              </Link>

              <Link
                to="/realisations"
                className="text-sm text-neutral-500 hover:text-white"
              >
                Réalisations
              </Link>

              <Link
                to="/contact"
                className="text-sm text-neutral-500 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em]">
              Expertises
            </h3>

            <div className="mt-6 grid gap-3">
              {services.map((service) => (
                <Link key={service.slug} to={`/services/${service.slug}`} className="text-sm text-neutral-500 transition hover:text-white">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em]">
              Contact
            </h3>

            <div className="mt-6 space-y-4 text-sm text-neutral-500">
              <p>N'Djamena, Tchad</p>
              <a href="tel:+23560821818" className="transition hover:text-white">+235 60821818</a>
              <p>contact@marfaer.com</p>
            </div>

            <Link
              to="/contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#ff4b55]"
            >
              Nous contacter
              <ArrowUpRight
                size={16}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 text-xs text-neutral-600 md:flex-row">
          <p>
            © {new Date().getFullYear()} MARFAER GROUPE. Tous droits réservés.
          </p>

        </div>
      </div>
    </footer>
  );
}
