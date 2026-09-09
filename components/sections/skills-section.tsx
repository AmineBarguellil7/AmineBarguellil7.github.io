import { BrainCircuit, Cloud, Database, Layers3, ServerCog, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type SkillCategory = { title: string; description: string; level: number; skills: readonly string[] };
const iconMap: Record<string, LucideIcon> = { Frontend: Layers3, Backend: ServerCog, DevOps: Cloud, Database, "AI / Data": BrainCircuit };

export function SkillsSection({ categories }: { categories: readonly SkillCategory[] }) {
  return (
    <section id="skills" className="section-shell section-space">
      <Reveal><SectionHeading eyebrow="Capabilities" title="Across the stack, without losing the details." description="A practical toolkit for turning product thinking into reliable interfaces, services, and delivery workflows." /></Reveal>
      <div className="mt-16 grid border-l border-t border-white/15 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category, index) => { const Icon = iconMap[category.title] ?? Layers3; return (
          <Reveal key={category.title} delay={index * .07} variant={index % 2 ? "fade-left" : "fade-up"}>
            <article className="group relative min-h-80 overflow-hidden border-r border-b border-white/15 p-7 transition-colors">
              <div className="flex items-center justify-between"><span className="font-mono text-xs text-primary">0{index + 1}</span><Icon className="size-5 text-primary transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" /></div>
              <h3 className="mt-12 text-3xl font-medium tracking-tight">{category.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#9f9f97]">{category.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">{category.skills.map(skill => <span key={skill} className="skill-badge">{skill}</span>)}</div>
              <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
            </article>
          </Reveal>
        )})}
      </div>
    </section>
  );
}
