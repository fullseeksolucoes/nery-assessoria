import { FlagIcon } from "@heroicons/react/24/solid";
import BeliefsCard from "./beliefs-card";
import { EyeIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/solid";

export default function BeliefsSection() {
  return (
    <section className="py-20 px-4 md:px-10" id="beliefs">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <h2 className="font-manrope text-3xl md:text-4xl font-extrabold text-primary">
            No que acreditamos
          </h2>
          <p className="text-slate-600 text-lg">
            Somos guiados por uma missão clara e valores inabaláveis ​​que
            orientam cada campanha que lançamos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BeliefsCard
            icon={<FlagIcon className="h-6 w-6" />}
            title="Missão"
            description="Ajudar empresas a crescerem no Instagram com estratégia, consistência e responsabilidade, eliminando improvisos e transformando o perfil em uma ferramenta real de crescimento."
          />
          <BeliefsCard
            icon={<EyeIcon className="h-6 w-6" />}
            title="Visão"
            description="Ser reconhecida como uma assessoria que entrega resultado de verdade, com estratégia, consistência e um trabalho próximo de cada cliente."
          />
          <BeliefsCard
            icon={<HeartIcon className="h-6 w-6" />}
            title="Valores"
            description="Compromisso com o cliente, transparência no processo, qualidade em cada entrega e foco total em resultado."
          />
        </div>
      </div>
    </section>
  );
}
