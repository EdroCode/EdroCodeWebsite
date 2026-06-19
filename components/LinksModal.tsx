"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

type LinksModalProps = {
  border?: boolean;
  label?: string;
  className?: string;
};

export default function LinksModal({
  border = false,
  label = "Find Me",
  className = "",
}: LinksModalProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const pathnameRef = useRef(pathname);

  // Solution to lint warning

  useEffect(() => {
    if (pathnameRef.current !== pathname) {
      pathnameRef.current = pathname;
      setOpen(false);
    }
  }, [pathname]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={twMerge(
          `cursor-pointer rounded-sm px-4 py-2 text-sm font-mono text-zinc-700 hover:text-black transition ${
            border ? "border border-gray-200 hover:border-gray-500" : ""
          }`,
          className,
        )}
      >
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white border border-gray-200 rounded-sm p-8 w-full max-w-sm mx-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm text-gray-400 font-mono mb-6">
              where_to_find_me
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/EdroCode"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center border border-gray-200 rounded-sm px-4 py-3 text-sm font-mono text-zinc-700 hover:border-gray-500 hover:text-black transition"
              >
                <Image src="/github.svg" alt="GitHub" width={20} height={20} />
                <span>GitHub</span>
              </a>

              <a
                href="https://edroz.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center border border-gray-200 rounded-sm px-4 py-3 text-sm font-mono text-zinc-700 hover:border-gray-500 hover:text-black transition"
              >
                <Image src="/itch.svg" alt="Itch.io" width={20} height={20} />
                <span>itch.io</span>
              </a>

              <a
                href="https://www.linkedin.com/in/pedro-coutinh0/?locale=pt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center border border-gray-200 rounded-sm px-4 py-3 text-sm font-mono text-zinc-700 hover:border-gray-500 hover:text-black transition"
              >
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:edr0c0de@protonmail.com"
                className="flex gap-2 items-center border border-gray-200 rounded-sm px-4 py-3 text-sm font-mono text-zinc-700 hover:border-gray-500 hover:text-black transition"
              >
                <Mail width={20} height={20} />
                <span>edr0c0de@protonmail.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
