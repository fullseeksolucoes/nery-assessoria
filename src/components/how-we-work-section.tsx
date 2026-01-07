import MagnifyingGlassIcon from "@heroicons/react/24/solid/esm/MagnifyingGlassIcon";
import RocketLaunchIcon from "@heroicons/react/24/solid/esm/RocketLaunchIcon";
import ArrowTrendingUpIcon from "@heroicons/react/24/solid/esm/ArrowTrendingUpIcon";

import HowWeWorkTimeline from "./how-we-work-timeline";

export default function HowWeWorkSection() {
  const steps = [
    {
      icon: <MagnifyingGlassIcon className="h-5 w-5" />,
      title: "Diagnóstico",
      description: "Entendemos seu negócio, seu público e seus objetivos.",
    },
    {
      icon: <RocketLaunchIcon className="h-5 w-5" />,
      title: "Execução estratégica",
      description:
        "Planejamos e executamos tudo de forma profissional.",
    },
    {
      icon: <ArrowTrendingUpIcon className="h-5 w-5" />,
      title: "Crescimento contínuo",
      description:
        "Acompanhamos métricas e evoluímos continuamente.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 rounded-2xl bg-white border border-[#ece7f3] p-8 shadow-sm">
        <div className="text-center">
          <h2 className="font-manrope text-2xl md:text-3xl font-bold text-primary">
            Como trabalhamos
          </h2>
        </div>

        <HowWeWorkTimeline steps={steps} />
      </div>
    </section>
  );
}
