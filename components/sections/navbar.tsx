"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavigationItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  navigation: readonly NavigationItem[];
};

export function Navbar({ navigation }: NavbarProps) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300",
        scrolled && "bg-[#0a0a0f]/80 shadow-[0_18px_60px_-42px_rgba(99,102,241,0.58)]",
      )}
    >
      <div className="section-shell py-3">
        <div
          data-gsap-nav
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between gap-4 px-0 py-1 transition-all duration-300",
            scrolled
              ? "text-white"
              : "text-white",
          )}
        >
          <Link href="#home" className="flex min-w-0 items-center gap-3">
            <span
              className="flex size-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#6366f1_0%,#8b5cf6_100%)] text-sm font-bold text-white shadow-[0_0_32px_-12px_rgba(99,102,241,0.95)]"
            >
              AB
            </span>
            <div className="min-w-0">
              <p className="font-display truncate text-sm font-bold text-white">
                Amine Barguellil
              </p>
              <p className="truncate text-xs font-light text-slate-400">
                Full-Stack Developer
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.95)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MagneticLink
              href="#contact"
              className={cn(
                buttonVariants({ variant: "default" }),
                "btn-gradient btn-shimmer h-10 rounded-full px-4 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5",
              )}
            >
              Let&apos;s Talk
            </MagneticLink>
          </div>
        </div>
      </div>
    </header>
  );
}
