import Button from "./button";
import Tag from "./tag";

export default function BannerHero() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-24 text-center">
            <Tag>consultoria estratégica de marketing</Tag>
            <h1 className="text-4xl md:text-6xl font-(--font-manrope) text-primary">
            Expanda seu negócio com <span className="text-gradient">autoridade.</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80">
                Transformamos dados em estratégia e estratégia em crescimento. A Nery Assessoria cria ecossistemas de marketing de alto impacto para empresas ambiciosas.
            </p>

            <div className="mt-10 flex justify-center gap-4">
                <Button>Solicitar orçamento</Button>

                <Button>Falar com um especialista</Button>
            </div>
        </section>
    )
}