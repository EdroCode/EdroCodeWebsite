// components/Navbar.jsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import LinksModal from "./LinksModal";

const links = [
  { href: "/home", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/archive", label: "Code Archive" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-800">
      <div className="flex items-center justify-between px-6 py-4">
        <LinksModal
          label="~/edro"
          className="hover:text-zinc-900 hover:font-semibold text-md text-zinc-800 transition"
        />

        <ul className="hidden sm:flex gap-8">
          {links.map(({ href, label }) => (
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

        <button
          className="sm:hidden text-zinc-700 hover:text-zinc-900 transition cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 pb-4 gap-4 border-t border-gray-100">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block pt-3 text-zinc-600 hover:text-zinc-900 hover:font-semibold transition"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
