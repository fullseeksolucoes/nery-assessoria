import Link from "next/link";
// import Logo from "./logo";
import { Mail, MapPinHouse } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Logo size="lg" variant="white" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Assessoria de marketing focada na gestão completa do Instagram.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                className="text-gray-400 hover:text-white transition-colors"
                href="https://www.instagram.com/nery.assessoria/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Nery Assessoria"
              >
                <RiInstagramFill size={18} />
              </a>
              <a
                className="text-gray-400 hover:text-white transition-colors"
                href="https://www.facebook.com/share/16cuNUoQcV/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Nery Assessoria"
              >
                <FaFacebookSquare size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-gray-200 hover:underline underline-offset-4 transition-all duration-200"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="hover:text-gray-200 hover:underline underline-offset-4 transition-all duration-200"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-gray-200 hover:underline underline-offset-4 transition-all duration-200"
                >
                  Contato
                </Link>
              </li>

              {/* <li>
                <Link
                  href="/depoimentos"
                  className="hover:text-gray-200 hover:underline underline-offset-4 transition-all duration-200"
                >
                  Depoimentos
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Nossos Serviços</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Gestão completa do Instagram</li>
              <li>Criação de conteúdo</li>
              <li>Postagens diárias</li>
              <li>Tráfego pago</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  className="flex items-center gap-2 hover:text-gray-200 hover:underline underline-offset-4 transition-all duration-200"
                  href="mailto:neryassessoria@gmail.com"
                >
                  <Mail size={16} />
                  neryassessoria@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 hover:text-gray-200 hover:underline underline-offset-4 transition-all duration-200"
                  href="https://wa.me/5531996569568?text=Oi,%20vim%20pelo%20site%20e%20quero%20entender%20como%20funciona%20a%20assessoria%20de%20marketing."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp da Nery Assessoria"
                >
                  <FaWhatsapp size={16} />
                  (31) 99656-9568
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 hover:text-gray-200 hover:underline underline-offset-4 transition-all duration-200"
                  href="https://maps.app.goo.gl/gxzx7pBsJGkiKbvG8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Localização da Nery Assessoria"
                >
                  <MapPinHouse size={16} />
                  Sabará, MG - Brasil
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white">Nery Assessoria Marketing</span> |
            Desenvolvido por{" "}
            <a
              href="https://www.instagram.com/full.seek/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FullSeek Soluções Tecnológicas"
              className="text-white hover:text-gray-300 transition-colors font-medium"
            >
              FullSeek Soluções Tecnológicas
            </a>
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/politica-de-privacidade">Política de privacidade</Link>
            <Link href="/termos-de-servico">Termos de serviço</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
