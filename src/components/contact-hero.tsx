import Tag from "@/components/tag";

export default function ContactHero() {
  return (
    <header className="space-y-4">
      <Tag variant="secondary">Fale Conosco</Tag>
      <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl font-heading leading-[1.15]">
        Vamos Crescer Sua <br />
        <span className="text-gradient">Marca Juntos</span>
      </h1>
      <p className="max-w-lg text-lg text-foreground/60">
        Pronto para elevar seu marketing? Preencha o formulário ou entre em
        contato diretamente. Estamos ansiosos para conhecer seus desafios e
        objetivos.
      </p>
    </header>
  );
}
