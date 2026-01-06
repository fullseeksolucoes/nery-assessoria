import {
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

interface ContactCardProps {
  href: string;
  icon: React.ReactNode;
  iconBgClass: string;
  iconHoverClass: string;
  label: string;
  value: string;
}

function ContactCard({
  href,
  icon,
  iconBgClass,
  iconHoverClass,
  label,
  value,
}: ContactCardProps) {
  return (
    <a
      href={href}
      className="group relative flex items-center gap-4 rounded-xl border border-foreground/5 bg-white p-4 shadow-sm transition-all hover:border-accent/30 hover:shadow-md"
    >
      <div
        className={`flex size-12 shrink-0 items-center justify-center rounded-lg transition-colors ${iconBgClass} ${iconHoverClass}`}
      >
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-foreground/60">{label}</p>
        <p className="text-base font-bold text-foreground truncate">{value}</p>
      </div>
    </a>
  );
}

export default function ContactCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <ContactCard
        href="mailto:contato@neryassessoria.com.br"
        icon={<EnvelopeIcon className="size-6" />}
        iconBgClass="bg-accent/10 text-accent"
        iconHoverClass="group-hover:bg-accent group-hover:text-white"
        label="Email"
        value="contato@neryassessoria.com.br"
      />
      <ContactCard
        href="https://wa.me/5531996569568?text=Oi,%20vim%20pelo%20site%20e%20quero%20entender%20como%20funciona%20a%20assessoria%20de%20marketing."
        icon={<ChatBubbleLeftRightIcon className="size-6" />}
        iconBgClass="bg-emerald-500/10 text-emerald-600"
        iconHoverClass="group-hover:bg-emerald-500 group-hover:text-white"
        label="WhatsApp"
        value="Iniciar Conversa"
      />
    </div>
  );
}
