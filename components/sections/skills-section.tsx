import {
  BrainCircuit,
  Cloud,
  Database,
  Layers3,
  ServerCog,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type SkillCategory = {
  title: string;
  description: string;
  level: number;
  skills: readonly string[];
};

type SkillsSectionProps = {
  categories: readonly SkillCategory[];
};

const iconMap: Record<string, LucideIcon> = {
  Frontend: Layers3,
  Backend: ServerCog,
  DevOps: Cloud,
  Database: Database,
  "AI / Data": BrainCircuit,
};

export function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      data-gsap-section
      className="section-shell scroll-mt-24 py-24"
    >
      <Reveal variant="soft">
        <SectionHeading
          eyebrow="Skills"
          description="My skill set covers modern frontend development, backend engineering, cloud and DevOps tools, database technologies, and AI-driven workflows for building complete web applications."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category, index) => {
          const Icon = iconMap[category.title] ?? Layers3;

          return (
            <Reveal key={category.title} delay={index * 0.08} variant="zoom">
              <div data-gsap-card className="section-card h-full p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/22 to-primary/22 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
