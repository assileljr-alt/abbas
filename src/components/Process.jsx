const steps = [
  {
    number: "01",
    title: "Écouter",
    text: "Comprendre vos besoins, votre contexte, vos contraintes et vos objectifs.",
  },
  {
    number: "02",
    title: "Concevoir",
    text: "Transformer vos idées en une vision architecturale cohérente et réalisable.",
  },
  {
    number: "03",
    title: "Planifier",
    text: "Structurer les ressources, les coûts, les délais et les étapes du projet.",
  },
  {
    number: "04",
    title: "Construire",
    text: "Exécuter avec rigueur, coordonner les équipes et maintenir nos standards.",
  },
  {
    number: "05",
    title: "Livrer",
    text: "Contrôler, finaliser et remettre un projet conforme aux exigences définies.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#061735] py-24 text-white lg:py-32">
      <div className="marfaer-container">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff4b55]">
            Notre méthode
          </p>

          <h2 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl">
            Une méthode simple.
            <span className="block text-neutral-500">
              Une exécution rigoureuse.
            </span>
          </h2>
        </div>

        <div className="mt-20 border-t border-white/10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group grid gap-6 border-b border-white/10 py-9 transition hover:bg-white/[0.03] md:grid-cols-[100px_250px_1fr] md:items-center"
            >
              <span className="text-sm font-bold text-[#ff4b55]">
                {step.number}
              </span>

              <h3 className="text-2xl font-black">{step.title}</h3>

              <p className="max-w-xl text-sm leading-7 text-neutral-500">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
