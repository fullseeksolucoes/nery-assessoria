export default function Statistics() {
  return (
    <section
      className="px-4 py-12 flex justify-center"
      aria-label="Estatísticas da empresa"
    >
      <dl className="max-w-[960px] w-full flex flex-wrap justify-center gap-8 md:gap-16 pt-8">
        <div className="text-center">
          <dt className="text-sm font-medium text-primary order-2">
            Empresas parceiras
          </dt>
          <dd className="text-4xl font-black text-accent order-1">10+</dd>
        </div>
        <div className="text-center">
          <dt className="text-sm font-medium text-primary order-2">
            Avaliações positivas
          </dt>
          <dd className="text-4xl font-black text-accent order-1">4.9/5</dd>
        </div>
        <div className="text-center">
          <dt className="text-sm font-medium text-primary order-2">
            Retenção de clientes
          </dt>
          <dd className="text-4xl font-black text-accent order-1">98%</dd>
        </div>
      </dl>
    </section>
  );
}