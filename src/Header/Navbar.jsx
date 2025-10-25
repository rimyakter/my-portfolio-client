import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // hamburger & close icons
import NavLogo from "./NavLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navLinks = (
    <>
      {["home", "about", "skill", "education", "projects", "contact"].map(
        (section) => (
          <li key={section}>
            <button
              onClick={() => scrollToSection(section)}
              className="w-full text-left px-2 py-1 hover:bg-cyan-400/20 hover:text-cyan-400 rounded transition-all duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        )
      )}
    </>
  );

  return (
    <nav className="bg-[#0F0E0E]/95 backdrop-blur-sm text-white fixed w-full z-50 border-b border-cyan-400 shadow-md">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLogo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4">
            <ul className="flex space-x-6 font-medium tracking-wide">
              {navLinks}
            </ul>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cyan-400 hover:text-cyan-300 focus:outline-none transition-all"
            >
              {isOpen ? (
                <HiX className="h-7 w-7 animate-pulse" />
              ) : (
                <HiMenuAlt3 className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-[#0F0E0E] text-white border-t border-cyan-400/20 shadow-lg animate-fadeIn">
          <ul className="flex flex-col p-4 space-y-2 text-lg font-medium">
            {navLinks}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
