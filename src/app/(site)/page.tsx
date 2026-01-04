import BannerHero from "@/components/banner-hero";
import ConversionSection from "@/components/conversion-section";
import OurApproach from "@/components/OurApproach";
import PartnerCompanies from "@/components/partner-companies";
import ServicesSection from "@/components/services-section";

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
