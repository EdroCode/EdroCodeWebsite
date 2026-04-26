// components/Navbar.jsx
import Link from "next/link";
import LinksModal from "./LinksModal";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800">
      <LinksModal
        label="~/edro"
        className="hover:text-zinc-900 hover:font-semibold text-lg text-zinc-600 transition "
      />
      <ul className="flex gap-8">
        {[
          { href: "/home", label: "Home" },
          { href: "/projects", label: "Projects" },
          { href: "/archive", label: "Code Archive" },
          { href: "/about", label: "About" },
        ].map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="hover:text-zinc-900 hover:font-semibold text-zinc-600 transition"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
