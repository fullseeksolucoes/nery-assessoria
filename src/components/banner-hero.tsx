import Image from "next/image";
import Button from "./button";
import Tag from "./tag";

export default function BannerHero() {
  return (
    <section className="relative pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden">
      {/* Efeitos de blur decorativos */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl dark:bg-primary/20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-accent/15 rounded-full blur-3xl dark:bg-accent/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo textual */}
          <div className="space-y-8 text-center lg:text-left">
            <Tag>consultoria estratégica de marketing</Tag>

            <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight text-primary dark:text-white">
              Expanda seu negócio com{" "}
              <span className="text-gradient">autoridade.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
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
            <div className="relative bg-gradient-to-br from-secondary to-primary rounded-2xl p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="relative h-[500px] w-full overflow-hidden rounded-xl bg-background">
                {/* Imagem */}
                <Image
                  src="/images/banner-hero.png"
                  alt="Dashboard de crescimento"
                  fill
                  className="object-cover opacity-90 dark:opacity-80"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                  <div className="w-full rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" />
                        </svg>
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