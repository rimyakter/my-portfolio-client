import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/asha-akter-rimy/",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/rimyakter",
    label: "GitHub",
  },
  {
    icon: <FaEnvelope />,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=asha86081@gmail.com",
    label: "Email",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" border-t border-cyan-300 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Copyright */}
        <p className="text-gray-500 text-sm mb-4">
          &copy; {currentYear} Asha Akter. All rights reserved.
        </p>

        {/* Social Links */}
        <ul className="flex justify-center gap-6">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-gray-300 transition-colors text-xl"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
