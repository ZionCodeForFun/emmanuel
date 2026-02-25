import React, { useState, useRef } from "react";
import { FloatingNavbar } from "./page/home/FloatingNavBar";
import { HeroSection } from "./page/home/HeroSection";
import { SkillsMarquee } from "./page/home/SkillsMarniqueSection";
import { AboutSection } from "./page/home/AboutSection";
import { ProjectsSection } from "./page/home/ProjectSection";
import { ContactSection } from "./page/home/ContactSection";
import { Footer } from "./page/home/Footer";
import "./styles/app.css";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="app-container">
      <FloatingNavbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <HeroSection
          onHireClick={scrollToContact}
          profileImage="https://pbs.twimg.com/profile_images/1927256932051501056/uNS--z1G_400x400.jpg"
        />
        <SkillsMarquee />
        <AboutSection />
        <ProjectsSection />
        <ContactSection ref={contactRef} />
      </main>
      <Footer />
    </div>
  );
}
