import AboutHero from "@/components/about-hero";
import BeliefsSection from "@/components/beliefs-section";
import ConversionSection from "@/components/conversion-section";
import MethodSection from "@/components/method-section";
import OurStory from "@/components/our-story";

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
