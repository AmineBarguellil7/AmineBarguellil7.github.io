import { AboutSection } from "@/components/sections/about-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Footer } from "@/components/sections/footer";
import { GsapPortfolioEffects } from "@/components/gsap-portfolio-effects";
import { HeroSection } from "@/components/sections/hero-section";
import { Navbar } from "@/components/sections/navbar";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="page-shell pb-16">
      <GsapPortfolioEffects />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div
          data-gsap-ambient="violet"
          className="ambient-orb absolute -left-28 top-16 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(111,124,255,0.24)_0%,rgba(111,124,255,0.08)_45%,transparent_75%)] blur-3xl"
        />
        <div
          data-gsap-ambient="sky"
          className="ambient-orb absolute right-[-7rem] top-[28rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(61,217,179,0.16)_0%,rgba(61,217,179,0.04)_58%,transparent_78%)] blur-3xl"
        />
        <div
          data-gsap-ambient="blue"
          className="ambient-orb absolute left-1/3 top-[72rem] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(170,184,212,0.1)_0%,rgba(111,124,255,0.03)_60%,transparent_80%)] blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_32%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_34%)]" />
        <div className="soft-grid absolute inset-x-0 top-0 h-[92rem] opacity-[0.22] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),transparent)]" />
      </div>
      <Navbar navigation={portfolioData.navigation} />
      <main>
        <HeroSection hero={portfolioData.hero} contact={portfolioData.contact} />
        <AboutSection about={portfolioData.about} />
        <SkillsSection categories={portfolioData.skillCategories} />
        <ProjectsSection projects={portfolioData.projects} />
        <ExperienceSection items={portfolioData.experience} />
        <CertificationsSection items={portfolioData.certifications} />
        <ContactSection contact={portfolioData.contact} />
      </main>
      <Footer
        name={portfolioData.hero.name}
        navigation={portfolioData.navigation}
        contact={portfolioData.contact}
      />
    </div>
  );
}
