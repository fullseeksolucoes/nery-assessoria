import Logo from "./logo";
import { MobileMenu } from "./menu-mobile";
import Button from "./button";
import NavLink from "./nav-link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div>
            <Logo size="lg" />
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink href="/servicos">Serviços</NavLink>
            <NavLink href="/sobre">Sobre</NavLink>
            <NavLink href="/contato">Contato</NavLink>
            <Button
              variant="secondary"
              href="https://wa.me/5531996569568?text=Quero%20contratar%20a%20assessoria%20de%20marketing%20para%20o%20meu%20neg%C3%B3cio."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Nery Assessoria"
            >
              Começar agora
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
