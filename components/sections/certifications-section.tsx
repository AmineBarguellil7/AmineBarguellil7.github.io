import { Check, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type Certification = { name: string; issuer: string; status: string };

export function CertificationsSection({ items }: { items: readonly Certification[] }) {
  return (
    <section id="certifications" className="section-shell section-space">
      <Reveal><SectionHeading eyebrow="Credentials" title="Learning that compounds." description="Completed credentials that support the work—kept concise, verifiable, and connected to practice." /></Reveal>
      <div className="mt-16 grid gap-px bg-white/15 p-px sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => <Reveal key={item.name} delay={index * .08} variant="zoom">
          <article className="group relative min-h-64 overflow-hidden bg-[#12130f] p-7">
            <div className="flex items-center justify-between"><GraduationCap className="size-5 text-primary transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" /><span className="font-mono text-xs text-[#717269]">CERT—0{index + 1}</span></div>
            <h3 className="mt-14 text-xl font-medium leading-snug">{item.name}</h3><p className="mt-2 text-sm text-[#888980]">{item.issuer}</p>
            <div className="absolute inset-x-7 bottom-7 flex items-center gap-2 border-t border-white/15 pt-4 font-mono text-[.65rem] uppercase tracking-widest text-primary"><Check className="size-3" />{item.status}</div>
          </article>
        </Reveal>)}
      </div>
    </section>
  );
}
