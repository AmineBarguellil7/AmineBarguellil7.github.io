import { Check, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type Certification = { name: string; issuer: string; status: string };

export function CertificationsSection({ items }: { items: readonly Certification[] }) {
  return (
    <section id="certifications" className="section-shell section-space">
      <Reveal><SectionHeading eyebrow="CERTIFICATIONS" title="Credentials that back the work" description="Selected certifications across cloud-native engineering, AI, and machine learning — supporting the technologies and systems I work with in practice" /></Reveal>
      <div className="mt-16 grid auto-rows-fr gap-px bg-white/15 p-px sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => <Reveal key={item.name} delay={index * .08} variant="zoom" className="grid">
          <article className="group relative min-h-64 overflow-hidden bg-[#12130f] p-7">
            <div className="flex items-center justify-between"><GraduationCap className="size-5 text-primary transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" /><span className="font-mono text-xs text-[#b9c8dd]">CERT—0{index + 1}</span></div>
            <h3 className="mt-14 text-xl font-medium leading-snug">{item.name}</h3><p className="mt-2 text-sm text-[#b9c8dd]">{item.issuer}</p>
            <div className="absolute inset-x-7 bottom-7 flex items-center gap-2 border-t border-[#b9c8dd] pt-4 font-mono text-[.65rem] uppercase tracking-widest text-primary"><Check className="size-3" />{item.status}</div>
          </article>
        </Reveal>)}
      </div>
    </section>
  );
}
