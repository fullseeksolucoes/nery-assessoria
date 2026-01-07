import {
  ArrowTrendingUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { LightBulbIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function OurApproach() {
  return (
    <section
      className="py-12 overflow-hidden bg-linear-to-b from-white via-gray-50 to-gray-100"
      id="our-approach"
      aria-labelledby="approach-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image side */}
          <div className="lg:w-1/2 relative" aria-hidden="true">
            <div className="absolute inset-0 bg-accent/20 transform translate-x-4 translate-y-4 rounded-2xl" />

            <Image
              alt=""
              className="relative rounded-2xl shadow-2xl z-10 w-full h-auto object-cover grayscale-20 hover:grayscale-0 transition-all duration-500"
              src="/home/banner-our-approach.webp"
              width={500}
              height={500}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                  <CheckIcon className="h-4 w-4 text-white stroke-3" />
                </div>
                <span className="font-bold text-primary">
                  Crescimento comprovado
                </span>
              </div>
              <p className="text-xs text-gray-500">
                O que importa é resultado. E é isso que entregamos
              </p>
            </div>
          </div>

          {/* Content side */}
          <div className="lg:w-1/2 space-y-8">
            <h2
              id="approach-heading"
              className="font-manrope font-bold text-3xl md:text-4xl text-primary leading-tight"
            >
              Cuidamos do seu marketing para gerar{" "}
              <span className="text-accent">resultado real.</span>
            </h2>

            <p className="text-gray-600 text-lg">
              Cuidamos do Instagram da sua empresa de forma completa. Não é
              apenas postar. Existe planejamento, gravação, edição e estratégia
              por trás de cada conteúdo. Nosso trabalho é moldado para cada tipo
              de negócio, sempre com foco em resultado real.
            </p>

            <ul className="space-y-6" role="list">
              <li className="flex gap-4">
                <div className="shrink-0 mt-1" aria-hidden="true">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
                    <MagnifyingGlassIcon className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">
                    Entendimento do seu negócio
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Antes de qualquer postagem, entendemos o seu nicho, sua
                    cidade, seu público e o que realmente funciona para o seu
                    tipo de empresa.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="shrink-0 mt-1" aria-hidden="true">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
                    <LightBulbIcon className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">
                    Conteúdo bem feito e estratégico
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Nada é improvisado. Fotos, vídeos e stories passam por
                    preparação, gravação no local e edição profissional.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="shrink-0 mt-1" aria-hidden="true">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
                    <ArrowTrendingUpIcon className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">
                    Resultado e crescimento contínuo
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Unimos conteúdo com tráfego pago para gerar resultado
                    financeiro e fortalecer a imagem digital da sua empresa.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
