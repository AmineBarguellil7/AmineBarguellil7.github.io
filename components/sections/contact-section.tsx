import { ArrowUpRight, GitFork as Github, Link2 as Linkedin, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";

type ContactData = { email?: string; emailHref?: string; linkedinHref?: string; githubHref?: string; location: string; intro: string };

export function ContactSection({ contact }: { contact: ContactData }) {
  const links = [
    { label: "Email", value: contact.email, href: contact.emailHref, icon: Mail },
    { label: "LinkedIn", value: "Connect professionally", href: contact.linkedinHref, icon: Linkedin },
    { label: "GitHub", value: "Explore the code", href: contact.githubHref, icon: Github },
    { label: "Location", value: contact.location, icon: MapPin },
  ];
  return (
    <section id="contact" className="section-shell section-space">
      <Reveal variant="zoom" amount={.15}>
        <div className="contact-panel overflow-hidden p-7 sm:p-10 lg:p-14">
          <p className="font-mono text-xs font-bold uppercase tracking-[.18em]">Contact / Open for opportunities</p>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <div><h2 className="font-display text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[.82] tracking-[-.07em]">Let&apos;s build<br />something<br /><span className="text-[#10110e]/45">useful.</span></h2><p className="mt-8 max-w-xl text-base leading-7 text-[#10110e]/70">{contact.intro}</p></div>
            <div className="border-t border-[#10110e]/25">
              {links.map(({ label, value, href, icon: Icon }) => {
                const content = <><div className="flex items-center gap-3"><Icon className="size-4" /><div><p className="font-mono text-[.62rem] uppercase tracking-wider opacity-55">{label}</p><p className="mt-1 text-sm font-semibold">{value ?? "Available on request"}</p></div></div>{href ? <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /> : null}</>;
                return href ? <a key={label} href={href} target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-[#10110e]/25 py-5">{content}</a> : <div key={label} className="flex items-center justify-between border-b border-[#10110e]/25 py-5">{content}</div>;
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
