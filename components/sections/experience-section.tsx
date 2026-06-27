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
          className="timeline-line absolute left-5 top-2 h-[calc(100%-1rem)] w-px origin-top md:left-1/2"
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
                className="timeline-dot left-5 top-7 md:left-1/2"
              />
              <div className="pl-12 md:pl-0 md:pr-8 md:text-right">
                <p className="date-gradient text-sm font-bold uppercase">
                  {item.period}
                </p>
              </div>
              <div className="pl-12 md:pl-8">
                <div
                  data-gsap-card
                  className="section-card p-6 sm:p-7"
                >
                  <p className="text-sm font-medium text-cyan-200/80">
                    {item.organization}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="date-gradient mt-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase">
                    {item.period}
                  </p>
                  {item.summary ? (
                    <p className="mt-4 text-sm font-light leading-7 text-slate-300">
                      {item.summary}
                    </p>
                  ) : null}
                  <ul className="mt-5 space-y-3 text-sm font-light leading-7 text-slate-300 marker:text-cyan-300">
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
