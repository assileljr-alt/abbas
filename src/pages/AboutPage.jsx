export default function AboutPage() {
  return (
      <main className="pt-24">
        <section className="bg-[#061735] py-24 text-white">
          <div className="marfaer-container">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff4b55]">
              Le Groupe
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-black sm:text-6xl lg:text-8xl">
              Construire avec
              <span className="block text-[#e30613]">une vision.</span>
            </h1>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="marfaer-container grid gap-12 lg:grid-cols-2">
            <h2 className="text-4xl font-black">MARFAER GROUPE</h2>

            <div className="space-y-6 text-neutral-600">
              <p className="leading-8">
                MARFAER GROUPE développe une approche intégrée de la
                construction, de l'architecture et du génie civil.
              </p>

              <p className="leading-8">
                Notre objectif est de créer des projets cohérents, durables et
                adaptés à leur environnement.
              </p>

              <p className="leading-8">
                Nous plaçons la qualité d'exécution, la maîtrise technique et la
                satisfaction du client au centre de chaque réalisation.
              </p>
            </div>
          </div>
        </section>
      </main>
  );
}
