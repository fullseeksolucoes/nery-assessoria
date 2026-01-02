import BannerHero from "@/components/banner-hero";
import PartnerCompanies from "@/components/partner-companies";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <BannerHero />
      <PartnerCompanies />
    </main>
  );
}
