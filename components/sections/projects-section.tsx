import { ArrowUpRight, GitFork as Github } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";

const projectDetailColor = "#c7d3e3";

type Project = { title: string; description: string; technologies: readonly string[]; githubHref?: string; demoHref?: string };

export function ProjectsSection({ projects }: { projects: readonly Project[] }) {
  return (
    <section id="projects" className="section-shell section-space">
      <Reveal><SectionHeading eyebrow="SELECTED WORK" title="Built to solve real problems" description="Selected projects across full-stack engineering, AI, and cloud — covering everything from product interfaces to deployment and infrastructure" /></Reveal>
      <div className="mt-16 grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * .09} variant={index % 2 ? "fade-left" : "fade-right"} amount={.12}>
            <TiltCard className="section-card group min-h-[25rem] overflow-hidden bg-transparent p-7 shadow-none backdrop-blur-none sm:p-9">
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-6"><span className="project-index font-display text-7xl font-medium leading-none" style={{ color: projectDetailColor, WebkitTextStroke: "0" }}>{String(index + 1).padStart(2, "0")}</span><div className="flex gap-2">{project.githubHref ? <a href={project.githubHref} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`} className="grid size-10 place-items-center border border-white/20 transition hover:border-primary hover:text-primary"><Github className="size-4" /></a> : null}{project.demoHref ? <a href={project.demoHref} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`} className="grid size-10 place-items-center border border-white/20 transition hover:border-primary hover:text-primary"><ArrowUpRight className="size-4" /></a> : null}</div></div>
                <h3 className="mt-10 max-w-lg text-3xl font-medium tracking-tight sm:text-4xl">{project.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 sm:text-base" style={{ color: projectDetailColor }}>{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t pt-6" style={{ borderColor: projectDetailColor, color: projectDetailColor }}>{project.technologies.map(tech => <span key={tech} className="font-mono text-[.66rem] uppercase tracking-wider" style={{ color: projectDetailColor }}>{tech}</span>)}</div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
