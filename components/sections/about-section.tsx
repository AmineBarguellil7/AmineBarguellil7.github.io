import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type AboutData = { summary: string; highlights: readonly { title: string; text: string }[]; technologies: readonly string[] };

export function AboutSection({ about, stats }: { about: AboutData; stats: readonly { label: string; value: string }[] }) {
  return (
    <section id="about" className="section-shell section-space">
      <Reveal variant="soft"><SectionHeading eyebrow="About" title="I build for the details people notice — and the ones they don’t" description={about.summary} /></Reveal>
      <Reveal className="about-stats grid border-y border-white/15 sm:grid-cols-3" amount={.6}>
        {stats.map((item, index) => <div key={item.label} className="group flex min-h-28 items-center gap-5 border-b border-white/15 px-5 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0"><span className="font-mono text-xs text-primary">0{index + 1}</span><p className="max-w-xs text-sm leading-6 text-[#c0c0b7] transition-transform duration-300 group-hover:translate-x-1">{item.label}</p></div>)}
      </Reveal>
    </section>
  );
}
