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
      className="section-shell scroll-mt-28 pt-12 md:pt-16"
    >
      <Reveal variant="soft" amount={0.15} duration={0.9}>
        <div
          data-gsap-hero
          className="hero-stage mx-auto max-w-6xl"
        >
          <div className="relative px-6 py-10 md:px-10 md:py-14">
            <div className="hero-mesh pointer-events-none absolute inset-0 opacity-80" />
            <div className="soft-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.7),transparent)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-6">
              <div className="relative space-y-8">
                

                  <div className="space-y-3">
                    <h1 className="font-display text-5xl font-bold leading-[0.98] text-white sm:text-6xl lg:text-[5.4rem] lg:leading-[1]">
                      <span
                        data-gsap-hero-item
                        className="gradient-text-accent inline-block pb-[0.08em]"
                      >
                        Engineering ideas
                      </span>
                    </h1>
                    <h2
                      data-gsap-hero-item
                      className="font-display max-w-4xl text-5xl font-bold leading-[0.98] text-white sm:text-6xl lg:text-[5.2rem] lg:leading-[1]"
                    >
                      <span className="inline-block pb-[0.08em]">
                        into meaningful products
                      </span>
                    </h2>
                  </div>

                  <p
                    data-gsap-hero-item
                    className="max-w-2xl text-lg font-light leading-8 text-slate-300 md:text-xl md:leading-9"
                  >
                    {hero.intro}
                  </p>
                

                <div data-gsap-hero-item className="flex flex-wrap gap-3">
                  <MagneticLink
                    href="#contact"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "btn-gradient btn-shimmer h-12 rounded-full px-5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5",
                    )}
                  >
                    Get In Touch
                  </MagneticLink>
                  <MagneticLink
                    href="#projects"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "btn-glass h-12 rounded-full px-5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5",
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
                        "btn-glass h-12 rounded-full px-5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5",
                      )}
                    >
                      Download CV
                      <Download className="size-4" />
                    </MagneticLink>
                  ) : null}
                </div>

                <div
                  data-gsap-hero-item
                  className="flex flex-wrap gap-3 text-sm"
                >
                  <span className="glass-chip">
                    <MapPin className="size-4 text-cyan-300" />
                    {hero.location}
                  </span>
                  <span className="glass-chip">
                    <Mail className="size-4 text-cyan-300" />
                    {contact.email ?? "Add your email"}
                  </span>
                </div>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <div
                  data-gsap-hero-glow
                  data-gsap-parallax="strong"
                  className="absolute size-[23rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.38)_0%,rgba(6,182,212,0.16)_42%,transparent_74%)] blur-[82px]"
                />
                <div
                  data-gsap-portrait
                  className="portrait-ring relative flex size-[19rem] items-center justify-center rounded-lg bg-white/5 p-3 shadow-[0_0_70px_-22px_rgba(99,102,241,0.95)] backdrop-blur-xl md:size-[24rem]"
                >
                  <div className="relative size-full overflow-hidden rounded-lg bg-[radial-gradient(circle_at_30%_20%,#1b2333_0%,#0f1625_44%,#070b14_100%)]">
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
                  className="section-card group relative overflow-hidden px-5 py-4"
                >
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
                  <p className="relative text-base font-medium leading-7 text-slate-100 md:text-[1.02rem]">
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
