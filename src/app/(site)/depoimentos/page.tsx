import ConversionSection from "@/components/conversion-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resultados e Depoimentos",
  description:
    "Veja depoimentos reais de empresas que confiam na Nery Assessoria e os resultados obtidos com nossa gestão estratégica.",
};

export default function DepoimentosPage() {
  return (
    <main>
      <ConversionSection />
    </main>
  );
}
