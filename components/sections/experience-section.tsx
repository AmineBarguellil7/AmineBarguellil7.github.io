import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type ExperienceItem = {
  period: string;
  title: string;
  organization: string;
  summary?: string;
  highlights: readonly string[];
};

type ExperienceSectionProps = {
  items: readonly ExperienceItem[];
};

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      data-gsap-section
      className="section-shell scroll-mt-24 py-24"
    >
      <Reveal variant="soft">
        <SectionHeading
          eyebrow="Experience"
          description="This timeline highlights my experience across internships and professional positions in software engineering and full-stack development."
        />
      </Reveal>

      <div className="relative mt-12 space-y-6">
        <div
          data-gsap-timeline
          className="absolute left-5 top-2 h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-primary/60 via-primary/20 to-transparent md:left-1/2"
        />
        {items.map((item, index) => (
          <Reveal
            key={`${item.title}-${item.period}`}
            delay={index * 0.09}
            variant={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div
              data-gsap-timeline-item
              className="relative md:grid md:grid-cols-2 md:gap-8"
            >
              <div
                className="absolute left-5 top-7 size-3 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2"
                style={{ boxShadow: "0 0 0 6px color-mix(in oklab, var(--primary) 18%, transparent), 0 0 0 12px color-mix(in oklab, var(--primary) 7%, transparent)" }}
              />
              <div className="pl-12 md:pl-0 md:pr-8 md:text-right">
                <p className="text-sm font-semibold tracking-[0.22em] text-primary uppercase">
                  {item.period}
                </p>
              </div>
              <div className="pl-12 md:pl-8">
                <div
                  data-gsap-card
                  className="section-card rounded-[2rem] border border-primary/10 p-6 shadow-[0_24px_80px_-48px_rgba(31,41,55,0.35)] backdrop-blur-sm sm:p-7"
                >
                  <p className="text-sm font-medium text-muted-foreground/90">
                    {item.organization}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 inline-flex rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                    {item.period}
                  </p>
                  {item.summary ? (
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {item.summary}
                    </p>
                  ) : null}
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground marker:text-primary">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="ml-5 list-disc pl-1">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
