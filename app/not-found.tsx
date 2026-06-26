// app/not-found.tsx
import type { Metadata } from "next";
export const metadata: Metadata = { title: "404 – Not Found" };
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div className="flex flex-col gap-2 items-center">
        <p className="font-zen-dots text-8xl text-center font-bold tracking-tight text-zinc-950 select-none">
          404
        </p>
        <h1 className="text-6xl font-zen-dots tracking-tight text-gray-900">
          Not found
        </h1>
        <p className="text-lg text-zinc-500 font-mono mb-12">
          This page doesn&apos;t exist.
        </p>
      </div>

      <p className="text-gray-600 text-center leading-relaxed max-w-lg">
        The page you&apos;re looking for was either moved, deleted, or never
        existed. If you typed the URL manually, check for typos.
      </p>

      <div className="flex gap-3 flex-wrap">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm text-gray-900 border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
        >
          ← Go home
        </Link>
        <Link
          href="/projects"
          className="flex items-center gap-2 font-mono text-sm text-gray-900 border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Projects
        </Link>
        <Link
          href="/about"
          className="flex items-center gap-2 font-mono text-sm text-gray-900 border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
        >
          About
        </Link>
      </div>
    </div>
  );
}
