import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Serviço",
  description:
    "Conheça os termos e condições para utilização dos serviços e do site da Nery Assessoria.",
};

export default function TermsOfServicePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-display font-bold text-3xl md:text-4xl text-accent mb-8">
        Termos de Serviço
      </h1>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>
          Ao acessar e utilizar o site da Nery Assessoria Marketing, você
          concorda com os termos e condições descritos abaixo.
        </p>

        <h2 className="font-bold text-xl text-primary">1. Uso do site</h2>
        <p>
          O conteúdo deste site tem caráter informativo e institucional, com o
          objetivo de apresentar os serviços oferecidos pela Nery Assessoria
          Marketing.
        </p>

        <h2 className="font-bold text-xl text-primary">
          2. Propriedade intelectual
        </h2>
        <p>
          Todos os textos, imagens, marcas, logotipos e materiais presentes
          neste site são de propriedade da Nery Assessoria Marketing. É proibida
          a reprodução sem autorização prévia.
        </p>

        <h2 className="font-bold text-xl text-primary">
          3. Serviços apresentados
        </h2>
        <p>
          As informações exibidas no site não constituem oferta contratual
          automática. A contratação ocorre somente após alinhamento e aceite
          formal.
        </p>

        <h2 className="font-bold text-xl text-primary">
          4. Limitação de responsabilidade
        </h2>
        <p>
          A Nery Assessoria Marketing não se responsabiliza por decisões tomadas
          com base nas informações do site ou por eventuais falhas técnicas.
        </p>

        <h2 className="font-bold text-xl text-primary">5. Links externos</h2>
        <p>
          O site pode conter links para sites de terceiros. Não nos
          responsabilizamos pelo conteúdo ou políticas desses sites.
        </p>

        <h2 className="font-bold text-xl text-primary">
          6. Alterações dos termos
        </h2>
        <p>
          Estes Termos de Serviço podem ser alterados a qualquer momento. O uso
          contínuo do site implica aceitação das versões atualizadas.
        </p>

        <h2 className="font-bold text-xl text-primary">7. Contato</h2>
        <p>
          Para dúvidas relacionadas a estes Termos, entre em contato pelo e-mail{" "}
          <strong>contato@neryassessoria.com.br</strong>.
        </p>
      </div>
    </main>
  );
}
