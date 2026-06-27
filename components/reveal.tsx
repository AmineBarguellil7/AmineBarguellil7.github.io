"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";
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

const variantClass: Record<NonNullable<RevealProps["variant"]>, string> = {
  "fade-up": "reveal-fade-up",
  "fade-left": "reveal-fade-left",
  "fade-right": "reveal-fade-right",
  zoom: "reveal-zoom",
  soft: "reveal-soft",
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
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: amount },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [amount, once]);

  return (
    <div
      ref={ref}
      className={cn("reveal-on-scroll", variantClass[variant], isVisible && "is-visible", className)}
      style={{
        "--reveal-delay": `${delay}s`,
        "--reveal-duration": `${duration}s`,
      } as CSSProperties}
    >
      {children}
    </div>
  );
}
