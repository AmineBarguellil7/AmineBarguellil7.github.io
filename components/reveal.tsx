"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
  variant?: "fade-up" | "fade-left" | "fade-right" | "zoom" | "soft";
};

const revealVariants: Record<NonNullable<RevealProps["variant"]>, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 36, scale: 0.98, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  },
  "fade-left": {
    hidden: { opacity: 0, x: 36, scale: 0.985, filter: "blur(8px)" },
    visible: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
  },
  "fade-right": {
    hidden: { opacity: 0, x: -36, scale: 0.985, filter: "blur(8px)" },
    visible: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
  },
  zoom: {
    hidden: { opacity: 0, y: 20, scale: 0.92, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  },
  soft: {
    hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.8,
  amount = 0.2,
  once = true,
  variant = "fade-up",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once, amount }}
      variants={revealVariants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
