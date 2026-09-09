"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavigationItem = { label: string; href: string };

export function Navbar({ navigation }: { navigation: readonly NavigationItem[] }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-40 border-b border-transparent transition-all duration-300", scrolled && "border-white/10 bg-[#10110e]/90 backdrop-blur-md")}>
      <div className="section-shell flex h-16 items-center justify-between">
        <Link href="#home" className="flex items-center gap-3" aria-label="Go to home">
          <span className="flex size-8 items-center justify-center bg-primary font-mono text-xs font-bold text-[#10110e]">AB</span>
          <span className="hidden font-mono text-[.68rem] tracking-[.16em] uppercase sm:block">PORTFOLIO</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navigation.map((item, index) => <a key={item.href} href={item.href} className="nav-link"><span className="mr-1 text-primary/60">0{index + 1}</span>{item.label}</a>)}
        </nav>
        <a href="#contact" className="hidden items-center gap-2 text-xs font-bold uppercase tracking-wider sm:flex">Start a conversation <ArrowUpRight className="size-4 text-primary" /></a>
        <button onClick={() => setOpen(v => !v)} className="grid size-10 place-items-center border border-white/20 lg:hidden" aria-label="Toggle navigation" aria-expanded={open}>{open ? <X className="size-4" /> : <Menu className="size-4" />}</button>
      </div>
      {open ? <nav className="section-shell grid border-t border-white/10 bg-[#10110e] py-4 lg:hidden">{navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-white/10 py-3 text-sm text-[#c4c4bb]">{item.label}</a>)}</nav> : null}
    </header>
  );
}
