export default function OurStory() {
  return (
    <section className="py-16 px-4 md:px-10 flex justify-center bg-surface-light" id="our-story">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute -inset-2 bg-linear-to-r from-accent to-purple-400 rounded-xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
          <div
            className="relative w-full aspect-video bg-cover bg-center rounded-xl shadow-xl overflow-hidden"
            style={{ backgroundImage: "url('/about/banner-our-story.webp')" }}
          ></div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-gray-600 text-sm font-bold uppercase tracking-wider">
              Nossa Jornada
            </h2>
            <h3 className="font-manrope text-3xl md:text-4xl font-bold text-primary leading-tight">
              Entendemos o seu desafio
            </h3>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed">
            Na Nery Assessoria, sabemos que cuidar do Instagram dá trabalho e
            toma tempo de quem já tem muita coisa para resolver no dia a dia.
            Por isso, assumimos toda a gestão do perfil para que você possa
            focar no que realmente importa no seu negócio.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            Entendemos as dores de quem não vê resultado, não sabe o que postar
            ou já tentou de tudo sem sucesso. Criamos estratégias
            personalizadas, produzimos conteúdo profissional e cuidamos de cada
            detalhe com atenção.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            Nosso objetivo é simples: transformar o Instagram em um canal que
            gere resultado de verdade e valorize a imagem da sua empresa.
          </p>
        </div>
      </div>
    </section>
  );
}
