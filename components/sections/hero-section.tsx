import Image from "next/image";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeroData = {
  name: string;
  title: string;
  intro: string;
  availability: string;
  location: string;
  focusAreas: readonly string[];
  featuredStack: readonly string[];
  stats: readonly {
    label: string;
    value: string;
  }[];
  cvHref?: string;
};

type ContactData = {
  email?: string;
};

type HeroSectionProps = {
  hero: HeroData;
  contact: ContactData;
};

export function HeroSection({ hero, contact }: HeroSectionProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section
      id="home"
      data-gsap-section
      className="section-shell scroll-mt-28 pt-10 md:pt-14"
    >
      <Reveal variant="soft" amount={0.15} duration={0.9}>
        <div
          data-gsap-hero
          className="browser-shell mx-auto max-w-6xl overflow-hidden"
        >
          <div className="relative px-6 py-10 md:px-10 md:py-12">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent dark:via-white/16" />
            <div className="pointer-events-none absolute left-8 top-8 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(61,217,179,0.24)_0%,transparent_72%)] blur-2xl" />
            <div className="pointer-events-none absolute right-12 top-12 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(111,124,255,0.26)_0%,transparent_76%)] blur-2xl" />
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-6">
              <div className="space-y-8">
                

                  <div className="space-y-3">
                    <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.08em] text-foreground sm:text-6xl lg:text-[5.4rem] lg:leading-[1]">
                      <span
                        data-gsap-hero-item
                        className="inline-block pb-[0.08em] bg-[linear-gradient(135deg,#f8fbff_0%,#c7d0e4_32%,#6f7cff_62%,#3dd9b3_100%)] bg-clip-text text-transparent dark:bg-[linear-gradient(135deg,#ffffff_0%,#dbe3f4_28%,#8f9cff_62%,#63e6c3_100%)]"
                      >
                        Engineering ideas
                      </span>
                    </h1>
                    <h2
                      data-gsap-hero-item
                      className="font-display max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.08em] text-foreground/96 sm:text-6xl lg:text-[5.2rem] lg:leading-[1]"
                    >
                      <span className="inline-block pb-[0.08em] bg-[linear-gradient(135deg,#f7f4ff_0%,#e0c8ff_26%,#a78bfa_58%,#f472b6_100%)] bg-clip-text text-transparent dark:bg-[linear-gradient(135deg,#f8f3ff_0%,#e4ccff_26%,#b494ff_58%,#fb7ab8_100%)]">
                        into meaningful products
                      </span>
                    </h2>
                  </div>

                  <p
                    data-gsap-hero-item
                    className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9"
                  >
                    {hero.intro}
                  </p>
                

                <div data-gsap-hero-item className="flex flex-wrap gap-3">
                  <MagneticLink
                    href="#contact"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "h-12 rounded-2xl bg-[linear-gradient(135deg,#7ea2ff_0%,#7095f3_52%,#6b8fea_100%)] px-5 text-sm font-semibold text-white shadow-[0_20px_42px_-24px_rgba(107,143,234,0.62)] hover:brightness-105",
                    )}
                  >
                    Get In Touch
                  </MagneticLink>
                  <MagneticLink
                    href="#projects"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "h-12 rounded-2xl border-border/70 bg-background/54 px-5 text-sm font-semibold shadow-[0_16px_28px_-24px_rgba(15,23,42,0.35)] hover:bg-background/70",
                    )}
                  >
                    Browse Projects
                    <ArrowRight className="size-4" />
                  </MagneticLink>
                  {hero.cvHref ? (
                    <MagneticLink
                      href={hero.cvHref}
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "h-12 rounded-2xl border-border/70 bg-background/54 px-5 text-sm font-semibold text-foreground shadow-[0_16px_28px_-24px_rgba(15,23,42,0.35)] hover:bg-background/70",
                      )}
                    >
                      Download CV
                      <Download className="size-4" />
                    </MagneticLink>
                  ) : null}
                </div>

                <div
                  data-gsap-hero-item
                  className="flex flex-wrap gap-3 text-sm text-muted-foreground"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/52 px-4 py-2 backdrop-blur-xl">
                    <MapPin className="size-4 text-accent" />
                    {hero.location}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/52 px-4 py-2 backdrop-blur-xl">
                    <Mail className="size-4 text-accent" />
                    {contact.email ?? "Add your email"}
                  </span>
                </div>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <div
                  data-gsap-hero-glow
                  data-gsap-parallax="strong"
                  className="absolute size-[23rem] rounded-full bg-[radial-gradient(circle,rgba(111,124,255,0.3)_0%,rgba(61,217,179,0.16)_42%,transparent_74%)] blur-[82px]"
                />
                <div
                  data-gsap-portrait
                  className="relative flex size-[19rem] items-center justify-center rounded-[2.5rem] border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.24),rgba(255,255,255,0.06))] p-5 shadow-[0_30px_80px_-34px_rgba(15,23,42,0.82)] md:size-[24rem]"
                >
                  <div className="pointer-events-none absolute inset-4 rounded-[2rem] border border-white/10" />
                  <div className="relative size-full overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,#f8fbff_0%,#d7deee_42%,#aab8d4_100%)] dark:bg-[radial-gradient(circle_at_30%_20%,#1b2333_0%,#0f1625_44%,#070b14_100%)]">
                    <Image
                      src={`${basePath}/amine.png`}
                      alt="Portrait of Amine Barguellil"
                      fill
                      priority
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div data-gsap-hero-item className="mt-8 grid gap-4 sm:grid-cols-3">
              {hero.stats.map((item) => (
                <div
                  key={item.label}
                  data-gsap-card
                  className="group relative overflow-hidden rounded-[1.7rem] border border-border/70 bg-background/46 px-5 py-4 shadow-[0_18px_34px_-24px_rgba(15,23,42,0.45)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/24 hover:shadow-[0_28px_60px_-30px_rgba(107,143,234,0.32)]"
                >
                  <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-70 dark:via-white/16" />
                  <div className="pointer-events-none absolute -right-10 top-1/2 size-24 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(107,143,234,0.14)_0%,transparent_72%)] blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />
                  <p className="relative text-base font-medium leading-7 tracking-[-0.02em] text-foreground/88 md:text-[1.02rem]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
