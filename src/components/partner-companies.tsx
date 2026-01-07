const companies = [
  { name: "AgroPet", instagram: "https://www.instagram.com/agropetsabara/" },
  { name: "Espaço Kids", instagram: "https://www.instagram.com/centropedagogico_espacokids/" },
  { name: "Executive Assessoria Contábil", instagram: "https://www.instagram.com/contabilidadeexecutive/" },
  { name: "FullSeek", instagram: "https://www.instagram.com/full.seek/" },
  { name: "Mix Tropical", instagram: "https://www.instagram.com/mixtropicall/" },
  { name: "Nery Barber", instagram: "https://www.instagram.com/nery.barber/" },
  { name: "Vclean", instagram: "https://www.instagram.com/vcleanloja/" },
];

export default function PartnerCompanies() {
  return (
    <section className="py-12" id="partner-companies">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-foreground/50">
          Empresas que confiam em nós
        </h2>

        <div className="relative overflow-hidden marquee-mask">
          <div className="flex w-max animate-marquee gap-12 items-center opacity-70">

            {/* lista 1 */}
            {companies.map((company, index) => (
              <a
                key={`a-${index}`}
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram da empresa ${company.name}`}
                className="
                  text-lg font-semibold text-foreground/70
                  hover:text-accent hover:opacity-100
                  transition-colors duration-300
                  whitespace-nowrap
                "
              >
                {company.name}
              </a>
            ))}

            {/* lista 2 (duplicada) */}
            {companies.map((company, index) => (
              <a
                key={`b-${index}`}
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram da empresa ${company.name}`}
                className="
                  text-lg font-semibold text-foreground/70
                  hover:text-accent hover:opacity-100
                  transition-colors duration-300
                  whitespace-nowrap
                "
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
