import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  target?: string;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-accent px-8 py-4 text-base text-white shadow-xl shadow-accent/30 hover:brightness-110 hover:shadow-lg hover:translate-y-[-2px] transition-all",
  secondary: "bg-accent px-5 py-2.5 text-sm text-white hover:bg-opacity-90 transition-all shadow-lg shadow-accent/30",
  outline: "bg-white px-8 py-4 text-base text-gray-700 border border-gray-200 hover:bg-gray-50",
};

export default function Button({ children, variant = "primary", href, target, className = "" }: ButtonProps) {
  return (
    <Link
      href={href || "/"}
      target={target}
      className={`rounded-full font-medium transition cursor-pointer ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}