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
    normal: "/logo-horizontal.png",
    white: "/logo-horizontal-white.png",
  };

  return (
    <Link href="/" aria-label="Nery Assessoria Marketing">
      <Image
        src={variants[variant as keyof typeof variants]}
        alt="Nery Assessoria Marketing"
        width={sizes[size]}
        height={sizes[size] / 4}
        priority
      />
    </Link>
  );
}
