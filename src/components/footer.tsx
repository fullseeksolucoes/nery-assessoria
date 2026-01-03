import Link from "next/link";
// import Logo from "./logo";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            {/* <Logo size="sm" /> */}
                            <p className="text-white font-medium">Nery Assessoria Marketing</p>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Ajudando empresas a crescer no digital com estratégia e resultados reais.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a
                                className="text-gray-400 hover:text-white transition-colors"
                                href="https://www.instagram.com/seuperfil"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram da Nery Assessoria"
                            >
                                <Instagram className="w-5 h-5"/>
                            </a>
                            <a
                                className="text-gray-400 hover:text-white transition-colors"
                                href="https://www.facebook.com/seuperfil"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook da Nery Assessoria"
                            >
                                <Facebook className="w-5 h-5"/>
                            </a>
                            <a
                                className="text-gray-400 hover:text-white transition-colors"
                                href="https://www.linkedin.com/seuperfil"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Linkedin da Nery Assessoria"
                            >
                                <Linkedin className="w-5 h-5"/>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-6">Empresa</h4>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-6">Serviços</h4>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-6">Contato</h4>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} <span className="text-white">Nery Assessoria Marketing</span> | Desenvolvido por <a href="https://www.instagram.com/full.seek/" target="_blank" className="text-white hover:text-gray-300 transition-colors font-medium">FullSeek Soluções Tecnológicas</a></p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/politica-de-privacidade">Política de privacidade</Link>
                        <Link href="/termos-de-servico">Termos de serviço</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}