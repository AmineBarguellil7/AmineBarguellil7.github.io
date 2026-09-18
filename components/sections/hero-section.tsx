import { ArrowDownRight, Download, MapPin } from "lucide-react";
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
          <Reveal variant="fade-right" duration={.55}><p className="eyebrow">SOFTWARE ENGINEER</p></Reveal>
          <h1 className="hero-title mt-7 font-display text-[clamp(3.9rem,8.4vw,8.5rem)] font-medium leading-[.82] tracking-[-.075em]">
            <Reveal variant="soft" duration={.85}><span className="block">Amine&nbsp;</span></Reveal>
            <Reveal variant="soft" delay={.08} duration={.85}><span className="block text-primary">Barguellil&nbsp;</span></Reveal>
          </h1>
          <div className="hero-details">
            <div className="hero-portrait relative"><PortraitScene src={`${basePath}/amine.png`} name={hero.name} /></div>
            <div className="hero-copy">
          <Reveal variant="fade-up" delay={.28} className="hero-intro">
            <p className="max-w-2xl text-lg leading-8 text-[#b6b6ad]">{hero.intro}</p>
          </Reveal>
          <Reveal delay={.38} className="hero-actions mt-6 flex flex-col items-start gap-4 lg:flex-row lg:items-center">
            <a href="#projects" className="group flex shrink-0 items-center gap-3 whitespace-nowrap font-mono text-xs uppercase tracking-widest">View Selected Work <span className="grid size-10 place-items-center border border-white/20 transition group-hover:border-primary group-hover:bg-primary group-hover:text-[#10110e]"><ArrowDownRight className="size-4" /></span></a>
            {hero.cvHref ? <a href={hero.cvHref} className="editorial-button secondary">Download CV <Download className="size-4" /></a> : null}
            <span className="flex shrink-0 items-center gap-2 whitespace-nowrap px-3 font-mono text-xs text-[#96978e]"><MapPin className="size-3 text-primary" />{hero.location}</span>
          </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
