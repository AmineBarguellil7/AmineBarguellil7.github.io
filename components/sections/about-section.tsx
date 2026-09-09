import { Code2, Layers3, Rocket } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type AboutData = { summary: string; highlights: readonly { title: string; text: string }[]; technologies: readonly string[] };
const icons = [Layers3, Rocket, Code2];

export function AboutSection({ about }: { about: AboutData }) {
  return (
    <section id="about" className="section-shell section-space">
      <Reveal variant="soft"><SectionHeading eyebrow="About / Approach" title="Built with intent, not just assembled." description={about.summary} /></Reveal>
      <div className="mt-16 grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
        <Reveal variant="fade-right" className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-xs uppercase tracking-widest text-[#898a82]">Working toolkit</p>
          <div className="mt-5 flex flex-wrap gap-2">{about.technologies.map(tech => <span key={tech} className="skill-badge">{tech}</span>)}</div>
        </Reveal>
        <div className="border-t border-white/15">
          {about.highlights.map((item, index) => {
            const Icon = icons[index] ?? Code2;
            return <Reveal key={item.title} delay={index * .09} variant="fade-left">
              <article className="group grid gap-5 border-b border-white/15 py-8 sm:grid-cols-[3rem_1fr] sm:py-10">
                <div className="grid size-11 place-items-center border border-white/20 text-primary transition duration-300 group-hover:rotate-6 group-hover:border-primary"><Icon className="size-4" /></div>
                <div><div className="flex items-baseline justify-between gap-4"><h3 className="text-2xl font-medium tracking-tight">{item.title}</h3><span className="font-mono text-xs text-[#6f7069]">0{index + 1}</span></div><p className="mt-3 max-w-2xl leading-7 text-[#a9aaa1]">{item.text}</p></div>
              </article>
            </Reveal>;
          })}
        </div>
      </div>
    </section>
  );
}
