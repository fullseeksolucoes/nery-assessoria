import ContactForm from "@/components/contact-form";
import ContactHero from "@/components/contact-hero";
import ContactCards from "@/components/contact-cards";
import ContactMap from "@/components/contact-map";
import PartnerCompanies from "@/components/partner-companies";

export default function ContactPage() {
  return (
    <main className="grow">
      {/* Seção principal */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 ">
          {/* Coluna Esquerda: Título & Informações */}
          <div className="flex flex-col justify-center gap-8">
            <ContactHero />
            <ContactCards />
            <ContactMap />
          </div>

          {/* Coluna Direita: Formulário de Contato */}
          <ContactForm />
        </div>
      </div>

      {/* Seção de Empresas Parceiras */}
      <PartnerCompanies />
    </main>
  );
}
