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
    <header className="sticky top-0 z-50">
      <div className="section-shell pt-5 pb-5">
        <div
          data-gsap-nav
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border px-4 py-3 transition-all duration-300 md:px-6",
            scrolled
              ? "border-border/90 bg-card/80 shadow-[0_18px_60px_-34px_rgba(15,23,42,0.7)] backdrop-blur-2xl"
              : "border-border/60 bg-card/62 shadow-[0_12px_42px_-34px_rgba(15,23,42,0.45)] backdrop-blur-xl",
          )}
        >
          <Link href="#home" className="flex min-w-0 items-center gap-3">
            <span
              className="flex size-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#7ea2ff_0%,#7095f3_52%,#6b8fea_100%)] text-sm font-semibold text-white shadow-[0_18px_34px_-18px_rgba(107,143,234,0.58)]"
            >
              AB
            </span>
            <div className="min-w-0">
              <p className="font-display truncate text-sm font-semibold tracking-[-0.03em] text-foreground">
                Amine Barguellil
              </p>
              <p className="truncate text-xs text-muted-foreground">
                Full-Stack Developer
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-foreground"
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
                "h-10 rounded-full bg-[linear-gradient(135deg,#7ea2ff_0%,#7095f3_52%,#6b8fea_100%)] px-4 text-sm font-semibold text-white shadow-[0_16px_34px_-20px_rgba(107,143,234,0.62)] hover:brightness-105",
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
