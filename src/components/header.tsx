import Logo from "./logo";
import { MobileMenu } from "./menu-mobile";
import Button from "./button";
import NavLink from "./nav-link";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-gray-200"
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Navegação principal"
      >
        <div className="flex items-center justify-between h-20">
          <div>
            <Logo size="lg" />
          </div>
          <ul
            className="hidden md:flex space-x-8 items-center list-none"
            role="menubar"
          >
            <li role="none">
              <NavLink href="/servicos" role="menuitem">
                Serviços
              </NavLink>
            </li>
            <li role="none">
              <NavLink href="/sobre" role="menuitem">
                Sobre
              </NavLink>
            </li>
            <li role="none">
              <NavLink href="/contato" role="menuitem">
                Contato
              </NavLink>
            </li>
            <li role="none">
              <NavLink href="/depoimentos" role="menuitem">
                Depoimentos
              </NavLink>
            </li>
            <li role="none">
              <Button
                variant="secondary"
                href="https://wa.me/5531996569568?text=Quero%20contratar%20a%20assessoria%20de%20marketing%20para%20o%20meu%20neg%C3%B3cio."
                target="_blank"
                rel="noopener noreferrer"
                ariaLabel="Iniciar conversa no WhatsApp"
              >
                Começar agora
              </Button>
            </li>
          </ul>
          <div className="md:hidden flex items-center">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
