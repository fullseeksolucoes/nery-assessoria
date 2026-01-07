import ConversionSection from "@/components/conversion-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços de Marketing no Instagram",
  description:
    "Gestão de Instagram, criação de conteúdo, gravações no local e tráfego pago focados em crescimento e posicionamento profissional.",
};

export default function ServicesPage() {
  return (
    <main>
      <ConversionSection />
    </main>
  );
}
