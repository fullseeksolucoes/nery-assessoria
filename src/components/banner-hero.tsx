import Image from "next/image";
import Button from "./button";
import Tag from "./tag";
import { GrowthCard } from "./growth-card";

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
              Cuidamos do seu Instagram do início ao{" "}
              <span className="text-gradient">resultado.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 font-light">
              Conteúdo, gravação, postagens diárias e tráfego pago. Você não se
              preocupa com nada. A gente entrega resultado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="/contact">Solicitar orçamento</Button>
              <Button
                variant="outline"
                href="https://wa.me/5531996569568?text=Oi,%20vim%20pelo%20site%20e%20quero%20entender%20como%20funciona%20a%20assessoria%20de%20marketing."
                target="_blank"
              >
                Falar com um especialista
              </Button>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative hidden lg:block">
            <div className="relative bg-linear-to-br from-secondary to-primary rounded-2xl p-1 shadow-2xl rotate-3">
              <div className="relative h-[500px] w-full overflow-hidden rounded-xl bg-background">
                {/* Imagem */}
                <Image
                  src="/banner-hero.webp"
                  alt="Dashboard de crescimento"
                  fill
                  className="object-cover opacity-90"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent flex items-end p-8">
                  <GrowthCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
