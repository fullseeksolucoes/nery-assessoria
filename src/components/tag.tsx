type TagVariant = "primary" | "secondary" | "hearth";

interface TagProps {
  children: React.ReactNode;
  variant?: TagVariant;
}

export default function Tag({ children, variant = "primary" }: TagProps) {
  return variant === "primary" ? (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-bold uppercase tracking-wider"
      role="status"
    >
      <span
        className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"
        aria-hidden="true"
      />
      <span className="text-accent">{children}</span>
    </span>
  ) : variant === "secondary" ? (
    <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent ring-1 ring-inset ring-accent/20">
      <span className="text-accent">{children}</span>
    </span>
  ) : (
    <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent ring-1 ring-inset ring-accent/20 gap-1">
      <span
        className="material-symbols-outlined"
        style={{ fontSize: "14px" }}
        aria-hidden="true"
      >
        favorite
      </span>
      <span className="text-accent text-sm">{children}</span>
    </span>
  );
}
