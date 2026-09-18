import { ArrowUpRight, GitFork as Github, Link2 as Linkedin, Mail, MapPin } from "lucide-react";

type ContactData = { email?: string; emailHref?: string; linkedinHref?: string; githubHref?: string; location: string; intro: string };

export function ContactSection({ contact }: { contact: ContactData }) {
  const links = [
    { label: "Email", value: contact.email, href: contact.emailHref, icon: Mail },
    { label: "LinkedIn", value: "Let's connect", href: contact.linkedinHref, icon: Linkedin },
    { label: "GitHub", value: "Explore my work", href: contact.githubHref, icon: Github },
    { label: "Location", value: contact.location, icon: MapPin },
  ];
  return (
    <section id="contact" className="section-shell section-space">
      <div className="mt-10">
        <div className="contact-panel p-7 sm:p-10 lg:p-14">
          <div className="flex flex-col items-center text-center">
            <div className="contact-title w-full"><div className="eyebrow">CONTACT / OPEN TO OPPORTUNITIES</div><h2 className="mt-5 font-display text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[.82] tracking-[-.07em]">Let&apos;s build<br />something <span>useful</span></h2><p className="contact-intro mx-auto mt-8 max-w-3xl text-base leading-7">{contact.intro}</p></div>
            <div className="contact-links mt-12 w-full max-w-xl border-t border-[#10110e]/25">
              {links.map(({ label, value, href, icon: Icon }) => {
                const content = <><div className="flex items-center gap-3"><Icon className="size-4" /><div className="text-left"><p className="contact-label font-mono text-[.62rem] uppercase tracking-wider">{label}</p><p className="mt-1 text-sm font-semibold">{value ?? "Available on request"}</p></div></div>{href ? <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /> : null}</>;
                return href ? <a key={label} href={href} target="_blank" rel="noreferrer" className="group flex w-full items-center justify-between border-b border-[#10110e]/25 py-5">{content}</a> : <div key={label} className="flex w-full items-center justify-between border-b border-[#10110e]/25 py-5">{content}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
