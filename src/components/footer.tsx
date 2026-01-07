import Link from "next/link";
import { Mail, MapPinHouse } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer
      className="bg-primary text-white pt-16 pb-8 border-t border-white/10"
      role="contentinfo"
      aria-label="Rodapé do site"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Logo size="lg" variant="white" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Assessoria de marketing focada na gestão completa do Instagram.
            </p>
            <nav aria-label="Redes sociais" className="flex gap-4 pt-2">
              <a
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
                href="https://www.instagram.com/nery.assessoria/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Siga-nos no Instagram"
              >
                <RiInstagramFill size={18} aria-hidden="true" />
              </a>
              <a
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
                href="https://www.facebook.com/share/16cuNUoQcV/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Siga-nos no Facebook"
              >
                <FaFacebookSquare size={18} aria-hidden="true" />
              </a>
            </nav>
          </div>
          <nav aria-label="Links da empresa">
            <h4 className="font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-gray-200 hover:underline underline-offset-4 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="hover:text-gray-200 hover:underline underline-offset-4 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-gray-200 hover:underline underline-offset-4 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/depoimentos"
                  className="hover:text-gray-200 hover:underline underline-offset-4 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
                >
                  Depoimentos
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <h4 className="font-bold text-lg mb-6">Nossos Serviços</h4>
            <ul className="space-y-3 text-sm text-gray-400" role="list">
              <li>Gestão completa do Instagram</li>
              <li>Criação de conteúdo</li>
              <li>Postagens diárias</li>
              <li>Tráfego pago</li>
            </ul>
          </div>
          <address className="not-italic">
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  className="flex items-center gap-2 hover:text-gray-200 hover:underline underline-offset-4 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
                  href="mailto:contato@neryassessoria.com.br"
                  aria-label="Enviar email para contato@neryassessoria.com.br"
                >
                  <Mail size={16} aria-hidden="true" />
                  contato@neryassessoria.com.br
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 hover:text-gray-200 hover:underline underline-offset-4 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
                  href="https://wa.me/5531996569568?text=Oi,%20vim%20pelo%20site%20e%20quero%20entender%20como%20funciona%20a%20assessoria%20de%20marketing."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Enviar mensagem no WhatsApp para (31) 99656-9568"
                >
                  <FaWhatsapp size={16} aria-hidden="true" />
                  (31) 99656-9568
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 hover:text-gray-200 hover:underline underline-offset-4 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
                  href="https://maps.app.goo.gl/gxzx7pBsJGkiKbvG8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver localização no Google Maps"
                >
                  <MapPinHouse size={16} aria-hidden="true" />
                  Sabará, MG - Brasil
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            <span aria-label="Copyright">&copy;</span> {new Date().getFullYear()}{" "}
            <span className="text-white">Nery Assessoria Marketing</span> |
            Desenvolvido por{" "}
            <a
              href="https://www.instagram.com/full.seek/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visite o perfil da FullSeek Soluções Tecnológicas"
              className="text-white hover:text-gray-300 transition-colors font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
            >
              FullSeek Soluções Tecnológicas
            </a>
          </p>
          <nav
            aria-label="Links legais"
            className="flex gap-6 mt-4 md:mt-0"
          >
            <Link
              href="/politica-de-privacidade"
              className="hover:text-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
            >
              Política de privacidade
            </Link>
            <Link
              href="/termos-de-servico"
              className="hover:text-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
            >
              Termos de serviço
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
