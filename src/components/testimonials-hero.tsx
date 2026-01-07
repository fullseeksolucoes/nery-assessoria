import Tag from "./tag";

export default function TestimonialsHero() {
  return (
    <section
      className="relative overflow-hidden bg-gray-200/50 py-20"
      id="testimonials-hero"
      aria-labelledby="testimonials-heading"
    >
      {/* Efeito de pontos decorativos */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#1a1a1a 1.5px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />

      {/* Blurs decorativos */}
      <div
        className="pointer-events-none absolute top-0 right-0 -mr-20 -mt-20 hidden h-[600px] w-[600px] rounded-full bg-primary/15 blur-3xl lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 -mb-20 -ml-20 hidden h-[400px] w-[400px] rounded-full bg-accent/15 blur-3xl lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <Tag variant="hearth">Nossos resultados</Tag>
          </div>

          <h1
            id="testimonials-heading"
            className="font-manrope text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl"
          >
            Transformando desafios em{" "}
            <span className="text-accent">crescimento real</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-foreground/70 md:text-lg">
            Veja como a Nery Assessoria Marketing ajudou empresas a saírem do
            improviso e alcançarem resultados consistentes em visibilidade,
            posicionamento e crescimento.
          </p>
        </header>
      </div>
    </section>
  );
}
