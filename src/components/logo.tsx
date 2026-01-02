import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  size?: "sm" | "md" | "lg";
};

export default function Logo({ size = "md" }: LogoProps) {
  const sizes = {
    sm: 120,
    md: 160,
    lg: 200,
  };

  return (
    <Link href="/" aria-label="Nery Assessoria Marketing">
      <Image
        src="/logo-horizontal.png"
        alt="Nery Assessoria Marketing"
        width={sizes[size]}
        height={sizes[size] / 4}
        priority
      />
    </Link>
  );
}
