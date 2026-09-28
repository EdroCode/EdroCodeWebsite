"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "motion/react";

type LinksModalProps = {
  border?: boolean;
  label?: string;
  className?: string;
};

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

const linkClass =
  "flex gap-2 items-center border border-gray-200 rounded-sm px-4 py-3 text-sm font-mono text-zinc-700 hover:border-gray-500 hover:text-black transition";

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
    <MotionConfig>
      <motion.button
        onClick={() => setOpen(true)}
        whileTap={{ scale: 0.97 }}
        className={twMerge(
          `cursor-pointer rounded-sm px-4 py-2 text-sm font-mono text-zinc-700 hover:text-black transition ${
            border ? "border border-gray-200 hover:border-gray-500" : ""
          }`,
          className,
        )}
      >
        {label}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bg-white border border-gray-200 rounded-sm p-8 w-full max-w-sm mx-4 shadow-lg"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-sm text-gray-400 font-mono mb-6">
                where_to_find_me
              </p>

              <motion.div
                className="flex flex-col gap-3"
                variants={list}
                initial="hidden"
                animate="show"
              >
                <motion.a
                  variants={item}
                  href="https://github.com/EdroCode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <Image
                    src="/github.svg"
                    alt="GitHub"
                    width={20}
                    height={20}
                  />
                  <span>GitHub</span>
                </motion.a>

                <motion.a
                  variants={item}
                  href="https://edroz.itch.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <Image src="/itch.svg" alt="Itch.io" width={20} height={20} />
                  <span>itch.io</span>
                </motion.a>

                <motion.a
                  variants={item}
                  href="https://www.linkedin.com/in/pedro-coutinh0/?locale=pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <Image
                    src="/linkedin.png"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                  />
                  <span>LinkedIn</span>
                </motion.a>

                <motion.a
                  variants={item}
                  href="mailto:edr0c0de@protonmail.com"
                  className={linkClass}
                >
                  <Mail width={20} height={20} />
                  <span>edr0c0de@protonmail.com</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
