"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "./button";
import Link from "next/link";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {/* Botão hamburguer */}
      <Dialog.Trigger asChild>
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          aria-label="Abrir menu de navegação"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Bars3Icon className="h-7 w-7 text-primary" aria-hidden="true" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />

        {/* Drawer */}
        <Dialog.Content
          id="mobile-menu"
          className="
            fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm
            bg-background p-6 shadow-xl
            flex flex-col
          "
          aria-describedby="mobile-menu-description"
        >
          <Dialog.Title className="sr-only">Menu de navegação</Dialog.Title>
          <Dialog.Description id="mobile-menu-description" className="sr-only">
            Use os links abaixo para navegar pelo site
          </Dialog.Description>

          {/* Fechar */}
          <Dialog.Close
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Fechar menu de navegação"
          >
            <XMarkIcon className="h-7 w-7 text-primary" aria-hidden="true" />
          </Dialog.Close>

          {/* Links */}
          <nav
            className="mt-16 flex flex-col gap-6 text-lg"
            aria-label="Navegação mobile"
          >
            <Link
              className="font-medium text-primary hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
              href="/"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              className="font-medium text-primary hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
              href="/servicos"
              onClick={closeMenu}
            >
              Serviços
            </Link>
            <Link
              className="font-medium text-primary hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
              href="/sobre"
              onClick={closeMenu}
            >
              Sobre
            </Link>
            <Link
              className="font-medium text-primary hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
              href="/contato"
              onClick={closeMenu}
            >
              Contato
            </Link>
            <Link
              className="font-medium text-primary hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
              href="/depoimentos"
              onClick={closeMenu}
            >
              Depoimentos
            </Link>
          </nav>

          {/* CTA */}
          <div className="mt-auto">
            <Button
              variant="secondary"
              className="block w-full text-center"
              href="https://wa.me/5531996569568?text=Quero%20contratar%20a%20assessoria%20de%20marketing%20para%20o%20meu%20neg%C3%B3cio."
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="Iniciar conversa no WhatsApp"
            >
              Começar agora
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
