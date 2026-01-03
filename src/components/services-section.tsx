import {
  RectangleGroupIcon,
  LightBulbIcon,
  VideoCameraIcon,
  CalendarDaysIcon,
  ArrowTrendingUpIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

import ServiceCard from "./service-card";

export default function ServicesSection() {
  const services = [
    {
      title: "Gestão completa do Instagram",
      description:
        "Cuidamos de todo o seu Instagram para você não se preocupar com nada. Planejamento, execução e acompanhamento focados em resultado.",
      icon: <RectangleGroupIcon className="h-8 w-8" />,
    },
    {
      title: "Criação de conteúdo estratégico",
      description:
        "Fotos, vídeos, reels e stories planejados estrategicamente para o seu nicho, com preparação e qualidade profissional.",
      icon: <LightBulbIcon className="h-8 w-8" />,
    },
    {
      title: "Gravação profissional no local",
      description:
        "Vamos até a sua empresa para realizar gravações. Nada de conteúdo improvisado. Tudo passa por preparação e edição.",
      icon: <VideoCameraIcon className="h-8 w-8" />,
    },
    {
      title: "Postagens diárias e stories",
      description:
        "Stories todos os dias e postagens frequentes para manter seu perfil ativo, profissional e relevante.",
      icon: <CalendarDaysIcon className="h-8 w-8" />,
    },
    {
      title: "Tráfego pago estratégico",
      description:
        "Gestão de anúncios no Instagram e Facebook Ads focada em alcance, engajamento e conversão.",
      icon: <ArrowTrendingUpIcon className="h-8 w-8" />,
    },
    {
      title: "Artes e identidade visual",
      description:
        "Criação de artes para redes sociais e materiais promocionais como ofertas, campanhas e materiais promocionais.",
      icon: <PaintBrushIcon className="h-8 w-8" />,
    },
  ];

  return (
    <section
      className="py-20 bg-linear-to-b from-white via-white to-gray-100"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
            Tudo o que sua empresa precisa para crescer no Instagram
          </h2>

          <p className="text-gray-600">
            Não entregamos serviços soltos. Cuidamos de todo o processo, do
            conteúdo ao tráfego pago, com estratégia e foco em resultado real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
