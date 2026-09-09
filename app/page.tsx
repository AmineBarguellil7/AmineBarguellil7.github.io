import { AboutSection } from "@/components/sections/about-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { Navbar } from "@/components/sections/navbar";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { portfolioData } from "@/data/portfolio";
import { CinematicExperience } from "@/components/cinematic/cinematic-experience";

export default function Home() {
  return (
    <div className="page-shell">
      <CinematicExperience />
      <Navbar navigation={portfolioData.navigation} />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <main id="main-content">
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
