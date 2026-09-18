"use client";

import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  const x = useMotionValue(.5);
  const glareX = useTransform(x, [0, 1], ["0%", "100%"]);

  function move(event: MouseEvent<HTMLElement>) {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
  }

  return (
    <article
      onMouseMove={move}
      onMouseLeave={() => { x.set(.5); }}
      className={className}
    >
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: useTransform(glareX, v => `radial-gradient(circle at ${v} 0%, rgba(200,255,70,.09), transparent 34%)`) }} />
      {children}
    </article>
  );
}
