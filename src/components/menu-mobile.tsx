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
        <button className="lg:hidden p-2">
          <Bars3Icon className="h-7 w-7 text-primary" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />

        {/* Drawer */}
        <Dialog.Content
          className="
            fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm
            bg-background p-6 shadow-xl
            flex flex-col
          "
        >
          <Dialog.Title className="sr-only">Menu de navegação</Dialog.Title>

          {/* Fechar */}
          <Dialog.Close className="absolute top-4 right-4">
            <XMarkIcon className="h-7 w-7 text-primary" />
          </Dialog.Close>

          {/* Links */}
          <nav className="mt-16 flex flex-col gap-6 text-lg">
            <Link
              className="font-medium text-primary"
              href="/"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              className="font-medium text-primary"
              href="/servicos"
              onClick={closeMenu}
            >
              Serviços
            </Link>
            <Link
              className="font-medium text-primary"
              href="/sobre"
              onClick={closeMenu}
            >
              Sobre
            </Link>
            <Link
              className="font-medium text-primary"
              href="/contato"
              onClick={closeMenu}
            >
              Contato
            </Link>
            {/* <Link
              className="font-medium text-primary"
              href="/depoimentos"
              onClick={closeMenu}
            >
              Depoimentos
            </Link> */}
          </nav>

          {/* CTA */}
          <div className="mt-auto">
            <Button
              variant="secondary"
              className="block w-full text-center"
              href="https://wa.me/5531996569568?text=Quero%20contratar%20a%20assessoria%20de%20marketing%20para%20o%20meu%20neg%C3%B3cio."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Nery Assessoria"
            >
              Começar agora
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
