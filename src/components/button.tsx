export default function Button({ children, variant = "primary" }: { children: React.ReactNode, variant?: "primary" | "secondary" | "outline" }) {
    return (
        <button className={`rounded-lg px-6 py-3 text-white font-medium hover:bg-accent transition ${variant === "primary" ? "bg-primary" : variant === "secondary" ? "bg-secondary" : "bg-transparent border border-primary text-primary hover:bg-primary/10"}`}>
            <p className={`${variant === "primary" ? "text-white" : variant === "secondary" ? "text-white" : "text-primary"}`}>{children}</p>
        </button>
  );
}