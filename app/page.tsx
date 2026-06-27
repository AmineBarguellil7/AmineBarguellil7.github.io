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
        <div className="hero-mesh absolute inset-x-0 top-0 h-[72rem] opacity-60 [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_32%)]" />
        <div className="soft-grid absolute inset-x-0 top-0 h-[110rem] opacity-[0.18] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.8),transparent)]" />
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
