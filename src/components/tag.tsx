type TagVariant = "primary" | "secondary";

interface TagProps {
  children: React.ReactNode;
  variant?: TagVariant;
}

export default function Tag({ children, variant = "primary" }: TagProps) {
  return variant === "primary" ? (
    <div className="inline-flex items-center px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-bold uppercase tracking-wider">
      <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
      <p className="text-accent">{children}</p>
    </div>
  ) : (
    <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20">
      <p className="text-accent">{children}</p>
    </div>
  );
}
