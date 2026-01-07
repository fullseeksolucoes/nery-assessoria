import { MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function ContactMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-foreground/5 bg-white shadow-sm h-64 relative">
      {/* Imagem do mapa */}
      <Image
        src="/contact/map-contact.webp"
        alt="Localização em Sabará, MG - Brasil"
        fill
        className="object-cover"
      />

      {/* Padrão de grid para simular mapa */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(47, 27, 77, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(47, 27, 77, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Círculos decorativos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 size-22 rounded-full bg-accent/20 animate-ping" />
          <div className="size-22 rounded-full bg-accent/10 border border-primary/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 rounded-full bg-primary" />
        </div>
      </div>

      {/* Badge de localização */}
      <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-4 py-2 backdrop-blur-sm shadow-sm">
        <div className="flex items-center gap-2">
          <MapPinIcon className="size-4 text-accent" />
          <span className="text-sm font-semibold text-foreground">
            Sabará, MG - Brasil
          </span>
        </div>
      </div>
    </div>
  );
}
