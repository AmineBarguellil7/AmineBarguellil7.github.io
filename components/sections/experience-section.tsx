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
      className="section-shell section-space"
    >
      <Reveal variant="soft">
        <SectionHeading
          eyebrow="Experience / Timeline"
          title="Practice, shipped into progress."
          description="This timeline highlights my experience across internships and professional positions in software engineering and full-stack development."
        />
      </Reveal>

      <div className="relative mt-16 space-y-10">
        <div
          className="timeline-rail absolute left-5 top-2 h-[calc(100%-1rem)] w-px origin-top md:left-[15rem]"
        />
        {items.map((item, index) => (
          <Reveal
            key={`${item.title}-${item.period}`}
            delay={index * 0.09}
            variant="fade-up"
          >
            <div
              className="relative md:grid md:grid-cols-[15rem_1fr] md:gap-10"
            >
              <div
                className="absolute left-[.9rem] top-7 size-2.5 rounded-full bg-primary ring-8 ring-[#10110e] md:left-[14.7rem]"
              />
              <div className="pl-12 md:pl-0 md:pr-8">
                <p className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
                  {item.period}
                </p>
              </div>
              <div className="pl-12 md:pl-10">
                <div
                  className="border-t border-white/15 pt-6"
                >
                  <p className="font-mono text-xs uppercase tracking-wider text-[#87887f]">
                    {item.organization}
                  </p>
                  <h3 className="mt-3 text-2xl font-medium text-white md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 inline-flex border border-white/15 px-3 py-1 font-mono text-[.65rem] uppercase text-primary md:hidden">
                    {item.period}
                  </p>
                  {item.summary ? (
                    <p className="mt-4 text-sm leading-7 text-[#a8a89f]">
                      {item.summary}
                    </p>
                  ) : null}
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-[#a8a89f] marker:text-primary">
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
