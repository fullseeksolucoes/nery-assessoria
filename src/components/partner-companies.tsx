import Image from "next/image";

const logos = [
  { src: "/companies/fullseek.png", alt: "FullSeek" },
];

export default function PartnerCompanies() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-foreground/50">
          Empresas que confiam em nós
        </h2>

        <div className="relative overflow-hidden marquee-mask">
          <div className="flex w-max animate-marquee gap-12 items-center opacity-70 grayscale">
            
            {/* lista 1 */}
            {logos.map((logo, index) => (
              <div
                key={`a-${index}`}
                className="flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="h-10 w-auto object-contain md:h-12"
                />
              </div>
            ))}

            {/* lista 2 (duplicada) */}
            {logos.map((logo, index) => (
              <div
                key={`b-${index}`}
                className="flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="h-10 w-auto object-contain md:h-12"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
