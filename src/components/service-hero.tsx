export default function ServiceHero() {
  return (
    <section
      className="px-4 py-8 md:px-10 md:py-12"
      id="service-hero"
      aria-labelledby="service-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="rounded-2xl overflow-hidden relative min-h-[400px] flex flex-col items-center justify-center text-center p-8 gap-6 bg-cover bg-center"
          role="img"
          aria-label="Equipe colaborando em estratégia de marketing em um escritório moderno"
          style={{
            backgroundImage:
              "linear-gradient(rgba(23, 16, 34, 0.7), rgba(99, 19, 236, 0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBompgrSmsVVmCZ-_OdsSYvh7rjh-WAJOFZ6slTGmY5m_aGWPfIo7cgEcfuNM2K_V6NCJ3t_fnj5d4yoUbCWdFik8xiJ2MGZAsGU-4ZUgjyrNEO9-psnsSDHTfDAnjOuOw8NKKvVt_Gc5CmQddP3vjJITwYAs6Swf4hyj7ANGLbdQK2nT36oNQDwk1NfjA-N8rC4grTBuA-OozMd18cyVeiExriFSiTs-_uQhPI-EgRsjp1TQCGN-uL9Nf2vtcbEUIoypYxgpGMewY')",
          }}
        >
          <header className="max-w-2xl flex flex-col gap-4 z-10">
            <h1
              id="service-heading"
              className="font-manrope text-white text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
            >
              Estratégia, conteúdo e tráfego trabalhando juntos
            </h1>
            <p className="text-gray-100 text-base md:text-lg font-medium leading-relaxed max-w-lg mx-auto">
              Cuidamos de todo o seu Instagram, do conteúdo ao tráfego pago, com
              estratégia, preparo e foco em resultado real.
            </p>
          </header>
        </div>
      </div>
    </section>
  );
}