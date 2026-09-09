"use client";

import { type ReactNode } from "react";
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

// Visible server HTML is the fallback. The shared controller progressively
// enhances these elements, keeping all animation ownership in one GSAP context.
export function Reveal({ children, className, delay = 0, duration = .72, amount = .2, once = true, variant = "fade-up" }: RevealProps) {
  return <div className={cn(className)} data-reveal={variant} data-delay={delay} data-duration={duration} data-amount={amount} data-once={once}>{children}</div>;
}
