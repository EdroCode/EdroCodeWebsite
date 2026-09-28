// components/PageTransition.tsx
"use client";

import { useContext, useRef, type ReactNode } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { usePathname } from "next/navigation";
// Internal Next.js module (there is no public API for this yet).
// Path checked against next@16.3.6; it can move between Next versions.
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

/**
 * In the App Router, `children` switches to the new route the moment you
 * navigate, so an exiting page would re-render as the *new* page. Freezing
 * the router context at mount keeps the old page intact while it animates out.
 */
function FrozenRouter({ children }: { children: ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    // reducedMotion="user" drops the slide for people who prefer reduced
    // motion and keeps the fade.
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
        >
          <FrozenRouter>{children}</FrozenRouter>
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
}
