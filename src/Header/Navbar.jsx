import React, { useState } from "react";
import NavLogo from "./NavLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu after click
    setIsOpen(false);
  };

  const navLinks = (
    <>
      <li>
        <button
          onClick={() => scrollToSection("home")}
          className="w-full text-left px-2 py-1 hover:bg-gray-100 hover:text-[#11AAEF] rounded"
        >
          Home
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection("about")}
          className="w-full text-left px-2 py-1 hover:bg-gray-100 hover:text-[#11AAEF] rounded"
        >
          About
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection("skill")}
          className="w-full text-left px-2 py-1 hover:bg-gray-100 hover:text-[#11AAEF] rounded"
        >
          Skill
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection("education")}
          className="w-full text-left px-2 py-1 hover:bg-gray-100 hover:text-[#11AAEF] rounded"
        >
          Education
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection("projects")}
          className="w-full text-left px-2 py-1 hover:bg-gray-100 hover:text-[#11AAEF] rounded"
        >
          Projects
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection("contact")}
          className="w-full text-left px-2 py-1 hover:bg-gray-100 hover:text-[#11AAEF] rounded"
        >
          Contact
        </button>
      </li>
    </>
  );

  return (
    <nav className="bg-[#0F0E0E] border-b-1 text-white fixed w-full z-50">
      <div className="w-11/12 mx-auto ">
        <div className="flex justify-between h-16 items-center">
          {/* Mobile Hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLogo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4">
            <ul className="flex space-x-4">{navLinks}</ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white z-40 text-gray-800 shadow-lg ">
          <ul className="flex flex-col p-4  space-y-1 z-12">{navLinks}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
