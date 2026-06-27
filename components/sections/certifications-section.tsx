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
                className="icon-gradient size-12"
                style={{ animation: "soft-float 5s ease-in-out infinite", animationDelay: `${index * 0.9}s` }}
              >
                <GraduationCap className="size-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                {item.name}
              </h3>
              <p className="mt-2 text-sm font-light text-slate-300">
                {item.issuer}
              </p>
              <div className="status-completed mt-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold">
                <CheckCircle2 className="size-4 text-emerald-300" />
                {item.status}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
