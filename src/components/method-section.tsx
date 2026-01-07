import ChartBarIcon from "@heroicons/react/24/solid/esm/ChartBarIcon";
import MethodTimeline from "./method-timeline";
import LightBulbIcon from "@heroicons/react/24/solid/esm/LightBulbIcon";
import RocketLaunchIcon from "@heroicons/react/24/solid/esm/RocketLaunchIcon";
import ArrowTrendingUpIcon from "@heroicons/react/24/solid/esm/ArrowTrendingUpIcon";

const methodSteps = [
  {
    icon: <ChartBarIcon className="h-5 w-5" />,
    title: "Diagnóstico",
    description:
      "Antes de qualquer ação, entendemos o cenário atual. Analisamos o perfil, os números, a comunicação e o posicionamento da marca para identificar o que está funcionando e o que precisa mudar.",
  },
  {
    icon: <LightBulbIcon className="h-5 w-5" />,
    title: "Estratégia",
    description:
      "Com o diagnóstico em mãos, traçamos o caminho. Criamos um plano personalizado, alinhado aos objetivos do negócio, ao público e à realidade de cada empresa.",
  },
  {
    icon: <RocketLaunchIcon className="h-5 w-5" />,
    title: "Execução",
    description:
      "Aqui é onde o trabalho acontece. Produzimos conteúdo, realizamos gravações, cuidamos das postagens e do tráfego pago, tudo com atenção aos detalhes e consistência.",
  },
  {
    icon: <ArrowTrendingUpIcon className="h-5 w-5" />,
    title: "Otimização",
    description:
      "Acompanhamos os resultados de perto. Ajustamos estratégias, melhoramos o desempenho e refinamos as ações para gerar cada vez mais resultado.",
  },
];

export default function MethodSection() {
  return (
    <section className="py-20 px-4 md:px-10 bg-surface-light" id="method">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <div className="text-center">
          <h2 className="font-manrope text-3xl md:text-4xl font-extrabold text-primary mb-4">
            O Método Nery
          </h2>
          <p className="text-slate-600 text-lg">
            Nossa forma prática e estratégica de gerar crescimento consistente.
          </p>
        </div>
        <MethodTimeline steps={methodSteps} />
      </div>
    </section>
  );
}
