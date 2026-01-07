import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  role?: string;
  "aria-current"?: "page" | "step" | "location" | "date" | "time" | "true" | "false";
}

export default function NavLink({ href, children, role, ...props }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-gray-600 hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
      role={role}
      {...props}
    >
      {children}
    </Link>
  );
}