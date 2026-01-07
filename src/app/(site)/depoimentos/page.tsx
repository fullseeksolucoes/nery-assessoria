import ConversionSection from "@/components/conversion-section";
import Statistics from "@/components/statistics";
import TestimonialsHero from "@/components/testimonials-hero";
import TestimonialsSection from "@/components/testimonials-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Depoimentos de Clientes",
  description:
    "Veja o que nossos clientes dizem sobre a Nery Assessoria. Resultados reais de empresas que cresceram no Instagram com nossa gestão estratégica.",
  openGraph: {
    title: "Depoimentos de Clientes | Nery Assessoria Marketing",
    description:
      "Resultados reais de empresas que cresceram no Instagram com nossa gestão estratégica.",
  },
};

export default function DepoimentosPage() {
  return (
    <main>
      <TestimonialsHero />
      <Statistics />
      <TestimonialsSection />
      <ConversionSection />
    </main>
  );
}