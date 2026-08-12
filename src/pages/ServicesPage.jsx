import Services from "../components/Services";

export default function ServicesPage() {
  return (
      <main className="pt-24">
        <section className="bg-[#061735] py-24 text-white">
          <div className="marfaer-container">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff4b55]">
              Notre expertise
            </p>

            <h1 className="mt-5 text-5xl font-black sm:text-6xl lg:text-8xl">
              Nos services
            </h1>
          </div>
        </section>

        <Services />
      </main>
  );
}
