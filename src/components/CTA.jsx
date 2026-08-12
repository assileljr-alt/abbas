import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-[#e30613] py-24 lg:py-32">
      <div className="marfaer-container">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ffe5e8]">
              Votre prochain projet
            </p>

            <h2 className="mt-5 text-5xl font-black leading-none tracking-tight text-white sm:text-6xl lg:text-8xl">
              Construisons
              <span className="block text-[#061735]">quelque chose</span>
              <span className="block">de remarquable.</span>
            </h2>
          </div>

          <Link
            to="/contact"
            className="group flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-[#0057d9] text-white transition hover:scale-105 hover:bg-[#003b95] lg:h-36 lg:w-36"
          >
            <ArrowUpRight
              size={32}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
