import React from "react";
import Navbar from "../Header/Navbar";
import HomeLayout from "./HomeLayout";
import AboutMe from "../Component/AboutMe";
import SkillsSection from "../Component/SkillsSection";
import EducationSection from "../Component/EducationSection";
import ProjectsSection from "../Component/ProjectsSection";
import ContactSection from "../Component/ContactSection";
import Footer from "../Component/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#0F0E0E]">
      {/* navbar section */}
      <div>
        <Navbar></Navbar>
      </div>

      {/* Hero section */}
      <div id="home">
        <HomeLayout></HomeLayout>
      </div>

      {/* About Me section */}
      <div id="about">
        <AboutMe></AboutMe>
      </div>

      {/* Skills section */}
      <div id="skill">
        <SkillsSection></SkillsSection>
      </div>

      {/* Education section */}
      <div id="education">
        <EducationSection></EducationSection>
      </div>

      {/* Projects section */}
      <div id="projects">
        <ProjectsSection></ProjectsSection>
      </div>

      {/* contact section */}
      <div id="contact">
        <ContactSection></ContactSection>
      </div>

      {/* Footer section */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
