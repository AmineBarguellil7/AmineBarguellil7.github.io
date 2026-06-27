import {
  ExternalLink,
  GitFork,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  description: string;
  technologies: readonly string[];
  githubHref?: string;
  demoHref?: string;
};

type ProjectsSectionProps = {
  projects: readonly Project[];
};

const frontendTechTerms = [
  "angular",
  "chrome extension",
  "figma",
  "lucide",
  "react",
  "shadcn",
  "tailwind",
  "typescript",
  "vite",
];

function getProjectTechClass(tech: string) {
  const normalized = tech.toLowerCase();
  const isFrontend = frontendTechTerms.some((term) => normalized.includes(term));

  return isFrontend ? "project-tech-frontend" : "project-tech-backend";
}

function ProjectLink({
  href,
  label,
  icon: Icon,
}: {
  href?: string;
  label: string;
  icon: LucideIcon;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "btn-glass h-10 rounded-full px-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5",
      )}
    >
      <Icon className="size-4" />
      {label}
    </a>
  );
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      data-gsap-section
      className="section-shell scroll-mt-24 py-24"
    >
      <Reveal variant="soft">
        <SectionHeading
          eyebrow="Projects"
          description="A selection of projects that reflect my work across full-stack development, AI, and cloud-focused engineering. Each one highlights practical problem-solving, modern tools, and the way I turn ideas into polished, production-minded builds."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 xl:grid-cols-2">
        {projects.map((project, index) => {
          return (
            <Reveal key={project.title} delay={index * 0.1} variant="zoom" amount={0.12}>
              <article
                data-gsap-card
                data-gsap-tilt
                className="section-card project-card motion-depth group relative h-full overflow-hidden p-6 transition-all duration-300 sm:p-7"
              >
                <div className="absolute right-0 top-0 h-28 w-28 bg-[linear-gradient(135deg,rgba(99,102,241,0.18),transparent)] blur-2xl transition-all duration-700 group-hover:opacity-100" />

                <div className="relative">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-7 text-slate-300 md:text-base">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={cn("skill-badge", getProjectTechClass(tech))}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.githubHref ? (
                      <ProjectLink
                        href={project.githubHref}
                        label="GitHub"
                        icon={GitFork}
                      />
                    ) : null}
                    {project.demoHref ? (
                      <ProjectLink
                        href={project.demoHref}
                        label="Live Demo"
                        icon={ExternalLink}
                      />
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
