import Image from "next/image";
import Button from "./button";
import Tag from "./tag";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

export default function BannerHero() {
  return (
    <section className="relative pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden">
      {/* Efeitos de blur decorativos */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-accent/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo textual */}
          <div className="space-y-8 text-center lg:text-left">
            <Tag>consultoria estratégica de marketing</Tag>

            <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl leading-none text-primary">
              Expanda Seu Negócio com{" "}
              <span className="text-gradient">Autoridade.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 font-light">
              Transformamos dados em estratégia e estratégia em crescimento.
              A Nery Assessoria cria ecossistemas de marketing de alto impacto
              para empresas ambiciosas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button>Solicitar orçamento</Button>
              <Button variant="outline">Falar com um especialista</Button>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative hidden lg:block">
            <div className="relative bg-gradient-to-br from-secondary to-primary rounded-2xl p-1 shadow-2xl rotate-2">
              <div className="relative h-[500px] w-full overflow-hidden rounded-xl bg-background">
                {/* Imagem */}
                <Image
                  src="/banner-hero.png"
                  alt="Dashboard de crescimento"
                  fill
                  className="object-cover opacity-90"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                  <div className="w-full rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                        <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-white">
                          <ArrowTrendingUpIcon className="h-6 w-6" />
                        </div>
                      </div>

                      <div>
                        <p className="text-white font-heading font-bold">
                          Crescimento acelerado
                        </p>
                        <p className="text-white/70 text-sm">
                          +127% no último trimestre
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}