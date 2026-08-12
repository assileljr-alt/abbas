import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight, Phone } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const servicesRef = useRef(null);

  /*
   * Fermer le menu Services lorsqu'on clique
   * à l'extérieur du menu.
   */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /*
   * Ferme tous les menus.
   */
  const closeMenus = () => {
    setServicesOpen(false);
    setMobileOpen(false);
  };

  /*
   * Style des liens principaux.
   */
  const navLinkClass = ({ isActive }) =>
    `relative py-3 text-sm font-semibold transition-colors duration-200 ${
      isActive ? "text-[#0057D9]" : "text-neutral-800 hover:text-[#0057D9]"
    }`;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-neutral-200 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="marfaer-container">
        {/* =====================================================
            NAVBAR DESKTOP / MOBILE
        ====================================================== */}

        <div className="flex h-24 items-center justify-between gap-6">
          {/* ===================================================
              LOGO
          ==================================================== */}

          <Link
            to="/"
            onClick={closeMenus}
            className="flex shrink-0 items-center"
            aria-label="MARFAER GROUPE - Accueil"
          >
            <img
              src="/marfaer-logo.png"
              alt="MARFAER GROUPE"
              className="h-[70px] w-auto object-contain"
            />
          </Link>

          {/* ===================================================
              NAVIGATION DESKTOP
          ==================================================== */}

          <nav className="hidden items-center gap-7 lg:flex">
            {/* ACCUEIL */}

            <NavLink to="/" end className={navLinkClass}>
              Accueil
            </NavLink>

            {/* LE GROUPE */}

            <NavLink to="/a-propos" className={navLinkClass}>
              Le Groupe
            </NavLink>

            {/* =================================================
                SERVICES
            ================================================== */}

            <div ref={servicesRef} className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen((value) => !value)}
                aria-expanded={servicesOpen}
                className="flex items-center gap-1.5 py-3 text-sm font-semibold text-neutral-800 transition-colors duration-200 hover:text-[#0057D9]"
              >
                Services
                <ChevronDown
                  size={16}
                  strokeWidth={2.5}
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* =============================================
                  MENU SERVICES
              ============================================== */}

              {servicesOpen && (
                <div className="absolute left-1/2 top-full mt-3 w-80 -translate-x-1/2 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-2 shadow-2xl">
                  {/* INTRO */}

                  <Link
                    to="/services"
                    onClick={closeMenus}
                    className="group block rounded-xl p-4 transition-colors hover:bg-[#e8f0ff]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-neutral-900">
                        Toutes nos expertises
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="text-[#0057D9] transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>

                    <p className="mt-1 text-xs leading-5 text-neutral-500">
                      Découvrez les métiers et solutions de MARFAER GROUPE.
                    </p>
                  </Link>

                  <div className="my-1 h-px bg-neutral-100" />

                  {/* CONSTRUCTION */}

                  <Link
                    to="/services#construction"
                    onClick={closeMenus}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:bg-[#e8f0ff] hover:text-[#0057D9]"
                  >
                    Construction
                  </Link>

                  {/* ARCHITECTURE */}

                  <Link
                    to="/services#architecture"
                    onClick={closeMenus}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:bg-[#e8f0ff] hover:text-[#0057D9]"
                  >
                    Architecture intérieure & extérieure
                  </Link>

                  {/* GENIE CIVIL */}

                  <Link
                    to="/services#genie-civil"
                    onClick={closeMenus}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:bg-[#e8f0ff] hover:text-[#0057D9]"
                  >
                    Génie civil
                  </Link>

                  {/* AMENAGEMENT */}

                  <Link
                    to="/services#amenagement"
                    onClick={closeMenus}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:bg-[#e8f0ff] hover:text-[#0057D9]"
                  >
                    Aménagement & rénovation
                  </Link>
                </div>
              )}
            </div>

            {/* REALISATIONS */}

            <NavLink to="/realisations" className={navLinkClass}>
              Réalisations
            </NavLink>

            {/* CONTACT */}

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* ===================================================
              ZONE DROITE DESKTOP
          ==================================================== */}

          <div className="hidden items-center gap-5 lg:flex">
            {/* TELEPHONE */}

            <a
              href="tel:+23560821818"
              className="hidden items-center gap-2 xl:flex"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f0ff]">
                <Phone size={18} className="text-[#0057D9]" />
              </div>

              <div className="leading-tight">
                <span className="block text-[11px] text-neutral-400">
                  Nous contacter
                </span>

                <span className="block text-xs font-bold text-neutral-800">
                  +235 60821818
                </span>
              </div>
            </a>

          </div>

          {/* ===================================================
              BOUTON MOBILE
          ==================================================== */}

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-neutral-900 transition-colors hover:bg-neutral-100 lg:hidden"
          >
            {mobileOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>

        {/* =====================================================
            MENU MOBILE
        ====================================================== */}

        {mobileOpen && (
          <div className="border-t border-neutral-100 py-5 lg:hidden">
            <nav className="flex flex-col gap-1">
              {/* ACCUEIL */}

              <NavLink
                to="/"
                end
                onClick={closeMenus}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#e8f0ff] text-[#0057D9]"
                      : "text-neutral-800 hover:bg-[#e8f0ff] hover:text-[#0057D9]"
                  }`
                }
              >
                Accueil
              </NavLink>

              {/* GROUPE */}

              <NavLink
                to="/a-propos"
                onClick={closeMenus}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#e8f0ff] text-[#0057D9]"
                      : "text-neutral-800 hover:bg-[#e8f0ff] hover:text-[#0057D9]"
                  }`
                }
              >
                Le Groupe
              </NavLink>

              {/* SERVICES */}

              <Link
                to="/services"
                onClick={closeMenus}
                className="rounded-xl px-4 py-3.5 text-sm font-semibold text-neutral-800 transition hover:bg-[#e8f0ff] hover:text-[#0057D9]"
              >
                Services
              </Link>

              {/* REALISATIONS */}

              <NavLink
                to="/realisations"
                onClick={closeMenus}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#e8f0ff] text-[#0057D9]"
                      : "text-neutral-800 hover:bg-[#e8f0ff] hover:text-[#0057D9]"
                  }`
                }
              >
                Réalisations
              </NavLink>

              {/* CONTACT */}

              <NavLink
                to="/contact"
                onClick={closeMenus}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#e8f0ff] text-[#0057D9]"
                      : "text-neutral-800 hover:bg-[#e8f0ff] hover:text-[#0057D9]"
                  }`
                }
              >
                Contact
              </NavLink>

              {/* =================================================
                  INFORMATIONS MOBILE
              ================================================== */}

              <div className="my-3 h-px bg-neutral-100" />

              <a
                href="tel:+23560821818"
                className="flex items-center gap-3 rounded-xl px-4 py-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f0ff]">
                  <Phone size={18} className="text-[#0057D9]" />
                </div>

                <div>
                  <span className="block text-xs text-neutral-400">
                    Nous contacter
                  </span>

                  <span className="font-bold text-neutral-900">
                    +235 60821818
                  </span>
                </div>
              </a>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
