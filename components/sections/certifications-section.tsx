import { CheckCircle2, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type Certification = {
  name: string;
  issuer: string;
  status: string;
};

type CertificationsSectionProps = {
  items: readonly Certification[];
};

export function CertificationsSection({
  items,
}: CertificationsSectionProps) {
  return (
    <section
      id="certifications"
      data-gsap-section
      className="section-shell scroll-mt-24 py-24"
    >
      <Reveal variant="soft">
        <SectionHeading
          eyebrow="Certifications"
          description="This section lists my certifications and completed credentials."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.08} variant="zoom">
            <div data-gsap-card className="section-card h-full p-7">
              <div
                className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/22 to-primary/22 text-primary"
                style={{ animation: "pulse-glow 5s ease-in-out infinite", animationDelay: `${index * 0.9}s` }}
              >
                <GraduationCap className="size-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">
                {item.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.issuer}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-3 py-1.5 text-sm font-medium text-primary shadow-[0_0_0_3px_color-mix(in_oklab,var(--primary)_8%,transparent)]">
                <CheckCircle2 className="size-4 text-primary" />
                {item.status}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
