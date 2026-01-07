export default function AboutHero() {
  return (
    <section
      className="relative py-20 md:py-32 overflow-hidden bg-primary bg-linear-to-b from-primary to-accent"
      id="about-hero"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="flex flex-col items-center justify-center">
          <h1
            id="about-heading"
            className="font-manrope font-extrabold text-4xl md:text-5xl text-white mb-3 text-center"
          >
            Sobre a Nery Assessoria
          </h1>
          <p className="text-sm md:text-lg text-white/60 text-center max-w-2xl">
            Gestão completa do Instagram com estratégia, conteúdo profissional e
            foco em resultado real.
          </p>
        </header>
      </div>
    </section>
  );
}
