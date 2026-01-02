import Link from "next/link";

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
      <Link href={href} className="text-sm font-medium text-gray-600 hover:text-accent transition-colors">
        {children}
      </Link>
    );
  }