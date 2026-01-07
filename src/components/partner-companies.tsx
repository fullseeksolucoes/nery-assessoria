const companies = [
  { name: "AgroPet", instagram: "https://www.instagram.com/agropetsabara/" },
  {
    name: "Espaço Kids",
    instagram: "https://www.instagram.com/centropedagogico_espacokids/",
  },
  {
    name: "Executive Assessoria Contábil",
    instagram: "https://www.instagram.com/contabilidadeexecutive/",
  },
  { name: "FullSeek", instagram: "https://www.instagram.com/full.seek/" },
  { name: "Mix Tropical", instagram: "https://www.instagram.com/mixtropicall/" },
  { name: "Nery Barber", instagram: "https://www.instagram.com/nery.barber/" },
  { name: "Vclean", instagram: "https://www.instagram.com/vcleanloja/" },
];

export default function PartnerCompanies() {
  return (
    <section
      className="py-12"
      id="partner-companies"
      aria-labelledby="partners-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
          id="partners-heading"
          className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-foreground/70"
        >
          Empresas que confiam em nós
        </h2>

        <div
          className="relative overflow-hidden marquee-mask"
          role="marquee"
          aria-label="Lista de empresas parceiras em movimento"
        >
          <div className="flex w-max animate-marquee gap-12 items-center opacity-70">
            {/* lista 1 */}
            {companies.map((company) => (
              <a
                key={`a-${company.name}`}
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar Instagram da ${company.name}`}
                className="text-lg font-semibold text-foreground/70 hover:text-accent hover:opacity-100 transition-colors duration-300 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
              >
                {company.name}
              </a>
            ))}

            {/* lista 2 (duplicada para efeito contínuo) */}
            {companies.map((company) => (
              <a
                key={`b-${company.name}`}
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden="true"
                tabIndex={-1}
                className="text-lg font-semibold text-foreground/70 hover:text-accent hover:opacity-100 transition-colors duration-300 whitespace-nowrap"
              >
                {company.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
