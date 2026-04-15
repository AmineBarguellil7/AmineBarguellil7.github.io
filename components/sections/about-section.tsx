import { Code2, Layers3, Rocket } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type AboutData = {
  summary: string;
  highlights: readonly {
    title: string;
    text: string;
  }[];
  technologies: readonly string[];
};

type AboutSectionProps = {
  about: AboutData;
};

const icons = [Layers3, Rocket, Code2];

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section
      id="about"
      data-gsap-section
      className="section-shell relative z-10 mt-12 scroll-mt-24 py-24 md:mt-16"
    >
      <Reveal variant="soft">
        <SectionHeading
          eyebrow="About Me"
          description={about.summary}
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
        <Reveal className="section-card p-7 sm:p-8" variant="fade-right">
          <p className="text-xs font-semibold tracking-[0.26em] text-muted-foreground uppercase">
            Technologies I use
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {about.technologies.map((tech) => (
              <span
                key={tech}
                className="skill-badge px-4 py-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {about.highlights.map((item, index) => {
            const Icon = icons[index] ?? Code2;

            return (
              <Reveal key={item.title} delay={index * 0.09} variant="zoom">
                <div data-gsap-card className="section-card h-full p-7">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/22 to-primary/22 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
