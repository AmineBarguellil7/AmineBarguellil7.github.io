import { ArrowDownRight, ArrowUpRight, Download, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PortraitScene } from "@/components/ui/portrait-scene";

type HeroData = { name: string; title: string; intro: string; availability: string; location: string; focusAreas: readonly string[]; featuredStack: readonly string[]; stats: readonly { label: string; value: string }[]; cvHref?: string };
type ContactData = { email?: string };

export function HeroSection({ hero }: { hero: HeroData; contact: ContactData }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <section id="home" className="section-shell scroll-mt-24 pt-14 md:pt-20">
      <div className="grid min-h-[calc(100vh-8rem)] items-center gap-14 pb-16 lg:grid-cols-[1.18fr_.82fr]">
        <div>
          <Reveal variant="fade-right" duration={.55}><p className="eyebrow">Full-stack developer</p></Reveal>
          <h1 className="hero-title mt-7 font-display text-[clamp(3.9rem,8.4vw,8.5rem)] font-medium leading-[.82] tracking-[-.075em]">
            <Reveal variant="soft" duration={.85}><span className="block">Amine&nbsp;</span></Reveal>
            <Reveal variant="soft" delay={.08} duration={.85}><span className="block text-primary">Barguellil&nbsp;</span></Reveal>
          </h1>
          <Reveal variant="fade-up" delay={.28} className="mt-9 grid gap-7 border-t border-white/15 pt-6 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-2xl text-lg leading-8 text-[#b6b6ad]">{hero.intro}.</p>
            <a href="#projects" className="group flex items-center gap-3 font-mono text-xs uppercase tracking-widest">Selected work <span className="grid size-10 place-items-center border border-white/20 transition group-hover:border-primary group-hover:bg-primary group-hover:text-[#10110e]"><ArrowDownRight className="size-4" /></span></a>
          </Reveal>
          <Reveal delay={.38} className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="editorial-button secondary">Get in touch <ArrowUpRight className="size-4" /></a>
            {hero.cvHref ? <a href={hero.cvHref} className="editorial-button secondary">Download CV <Download className="size-4" /></a> : null}
            <span className="flex items-center gap-2 px-3 font-mono text-xs text-[#96978e]"><MapPin className="size-3 text-primary" />{hero.location}</span>
          </Reveal>
        </div>
        <Reveal variant="fade-left" delay={.15} className="relative"><PortraitScene src={`${basePath}/amine.png`} name={hero.name} /></Reveal>
      </div>
      <Reveal className="grid border-y border-white/15 sm:grid-cols-3" amount={.6}>
        {hero.stats.map((item, index) => <div key={item.label} className="group flex min-h-28 items-center gap-5 border-b border-white/15 px-5 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0"><span className="font-mono text-xs text-primary">0{index + 1}</span><p className="max-w-xs text-sm leading-6 text-[#c0c0b7] transition-transform duration-300 group-hover:translate-x-1">{item.label}</p></div>)}
      </Reveal>
    </section>
  );
}
