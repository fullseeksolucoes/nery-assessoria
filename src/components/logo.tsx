import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "normal" | "white";
  size?: "sm" | "md" | "lg";
};

export default function Logo({ size = "md", variant = "normal" }: LogoProps) {
  const sizes = {
    sm: 120,
    md: 160,
    lg: 200,
  };

  const variants = {
    normal: "/logo/logo-horizontal.png",
    white: "/logo/logo-horizontal-white.png",
  };

  return (
    <Link
      href="/"
      aria-label="Ir para página inicial - Nery Assessoria Marketing"
      className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
    >
      <Image
        src={variants[variant]}
        alt="Nery Assessoria Marketing"
        width={sizes[size]}
        height={sizes[size] / 4}
        priority
      />
    </Link>
  );
}
