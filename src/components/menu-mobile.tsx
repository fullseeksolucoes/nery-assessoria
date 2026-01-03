"use client";

import * as Dialog from "@radix-ui/react-dialog";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Button from "./button";

export function MobileMenu() {
  return (
    <Dialog.Root>
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
            <a className="font-medium text-primary">Home</a>
            <a className="font-medium text-primary">Serviços</a>
            <a className="font-medium text-primary">Sobre</a>
            <a className="font-medium text-primary">Contato</a>
          </nav>

          {/* CTA */}
          <div className="mt-auto">
            <Button variant="secondary" className="block w-full text-center" href="/contact">
              Começar agora
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
