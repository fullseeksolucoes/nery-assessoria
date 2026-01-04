import Button from "./button";

export default function ConversionSection() {
  return (
    <section className="py-20 bg-accent relative overflow-hidden" id="contact">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-manrope font-bold text-3xl md:text-5xl text-white mb-6">
          Hora de decidir como sua empresa vai crescer no digital
        </h2>
        <p className="text-white text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Entenda como empresas estão organizando seu digital com estratégia e
          foco em resultado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="light"
            href="https://wa.me/5531996569568?text=Olá,%20vim%20pelo%20site%20da%20Nery%20Assessoria%20e%20gostaria%20de%20conversar%20sobre%20o%20crescimento%20do%20meu%20negócio%20no%20Instagram."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp da Nery Assessoria"
          >
            Agendar conversa estratégica
          </Button>
        </div>
      </div>
    </section>
  );
}
