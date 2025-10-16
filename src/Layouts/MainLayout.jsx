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
    <div className="bg-gradient-to-b from-[#11AAEF] via-[#11A2EF]  to-[#1173EF]">
      {/* navbar section */}
      <section className="navbar z-40">
        <Navbar></Navbar>
      </section>
      {/* Hero section */}
      <section id="home" className="hero z-10 pt-10">
        <HomeLayout></HomeLayout>
      </section>
      {/* About Me section */}

      <section id="about" className="aboutMe z-10">
        <AboutMe></AboutMe>
      </section>
      {/* Skills section */}

      <section id="skill" className="skills z-10">
        <SkillsSection></SkillsSection>
      </section>
      {/* Education section */}

      <section id="education" className="education z-10">
        <EducationSection></EducationSection>
      </section>
      {/* Projects section */}

      <section id="projects" className="projects z-10">
        <ProjectsSection></ProjectsSection>
      </section>
      {/* contact section */}

      <section id="contact" className="contacts z-10">
        <ContactSection></ContactSection>
      </section>
      {/* Footer section */}

      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default MainLayout;
