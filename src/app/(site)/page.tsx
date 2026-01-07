import BannerHero from "@/components/banner-hero";
import ConversionSection from "@/components/conversion-section";
import OurApproach from "@/components/OurApproach";
import PartnerCompanies from "@/components/partner-companies";
import ServicesSection from "@/components/services-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assessoria de Marketing para Instagram",
  description:
    "Gestão completa do Instagram com estratégia, conteúdo profissional e tráfego pago para empresas que buscam resultado real.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <BannerHero />
      <PartnerCompanies />
      <ServicesSection />
      <OurApproach />
      <ConversionSection />
    </main>
  );
}
