import AboutHero from "@/components/about-hero";
import BeliefsSection from "@/components/beliefs-section";
import ConversionSection from "@/components/conversion-section";
import MethodSection from "@/components/method-section";
import OurStory from "@/components/our-story";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a Nery Assessoria",
  description:
    "Conheça a Nery Assessoria e nossa forma estratégica de ajudar empresas a crescerem no Instagram com consistência e responsabilidade.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <BeliefsSection />
      <MethodSection />
      <ConversionSection />
    </main>
  );
}
