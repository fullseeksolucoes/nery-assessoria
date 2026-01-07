import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mensagem enviada",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ObrigadoPage() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircleIcon className="h-10 w-10 text-green-600" />
          </div>
        </div>

        <h1 className="font-manrope font-bold text-3xl md:text-4xl text-primary mb-4">
          Mensagem enviada com sucesso
        </h1>

        <p className="text-foreground/70 text-lg mb-8">
          Recebemos seu contato e em breve nossa equipe vai falar com você.
          Normalmente respondemos em até 24 horas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-white font-medium hover:opacity-90 transition"
          >
            Voltar para o site
          </Link>

          <a
            href="https://wa.me/5531996569568?text=Oi,%20acabei%20de%20enviar%20uma%20mensagem%20pelo%20site%20e%20gostaria%20de%20falar%20com%20voc%C3%AAs."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-primary font-medium hover:bg-primary hover:text-white transition"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
