import { GitFork, Link2, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ContactData = {
  email?: string;
  emailHref?: string;
  linkedinHref?: string;
  githubHref?: string;
  location: string;
  intro: string;
};

type ContactSectionProps = {
  contact: ContactData;
};

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div data-gsap-card className="section-card group flex h-full items-start gap-4 p-5">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 text-primary transition-all duration-300 group-hover:scale-110 group-hover:from-accent/32 group-hover:to-primary/32">
        <Icon className="size-5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <p className="mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold text-foreground sm:text-base">
          {value}
        </p>
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className="block h-full">
      {content}
    </a>
  );
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section
      id="contact"
      data-gsap-section
      className="section-shell scroll-mt-24 py-24"
    >
      <Reveal variant="fade-up" amount={0.15}>
        <div data-gsap-card className="section-card overflow-hidden p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let’s connect for opportunities and impactful engineering work"
                description={contact.intro}
              />

              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticLink
                  href="#projects"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "btn-shimmer h-12 rounded-full px-6 text-sm font-semibold shadow-[0_16px_50px_-22px_rgba(111,124,255,0.88)]",
                  )}
                >
                  Review Projects
                </MagneticLink>
                {contact.emailHref ? (
                  <MagneticLink
                    href={contact.emailHref}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "h-12 rounded-full border-border/80 bg-background/70 px-6 text-sm font-semibold backdrop-blur",
                    )}
                  >
                    Send Email
                  </MagneticLink>
                ) : null}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard
                icon={Mail}
                label="Email"
                value={contact.email ?? "Add your email in data/portfolio.ts"}
                href={contact.emailHref}
              />
              <ContactCard
                icon={Link2}
                label="LinkedIn"
                value={
                  contact.linkedinHref
                    ? contact.linkedinHref.replace(/^https?:\/\//, "")
                    : "Add your LinkedIn URL"
                }
                href={contact.linkedinHref}
              />
              <ContactCard
                icon={GitFork}
                label="GitHub"
                value={
                  contact.githubHref
                    ? contact.githubHref.replace(/^https?:\/\//, "")
                    : "Add your GitHub URL"
                }
                href={contact.githubHref}
              />
              <ContactCard
                icon={MapPin}
                label="Location"
                value={contact.location}
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
