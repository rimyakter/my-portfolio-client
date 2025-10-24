import React from "react";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      icon: <SiGmail size={16} />,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=asha86081@gmail.com",
      bg: "bg-white",
      hover:
        "hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:text-white",
      label: "Gmail",
      newTab: true,
    },
    {
      id: 2,
      icon: <FaLinkedin size={16} />,
      href: "https://www.linkedin.com/in/asha-akter-rimy/",
      bg: "bg-white",
      hover:
        "hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:text-white",
      label: "LinkedIn",
    },
    {
      id: 3,
      icon: <FaGithub size={16} />,
      href: "https://github.com/rimyakter/",
      bg: "bg-white",
      hover:
        "hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:text-white",
      label: "GitHub",
    },
    {
      id: 4,
      icon: <FaInstagram size={16} />,
      href: "https://www.instagram.com/__rimy__aktr/",
      bg: "bg-white",
      hover:
        "hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:text-white",
      label: "Instagram",
    },
  ];

  return (
    <div className="flex space-x-5 py-5">
      {links.map(({ id, icon, href, bg, hover, label }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={label}
          className={`flex items-center justify-center w-8 h-8 rounded-full text-black ${bg} ${hover} transform transition-all duration-300 hover:scale-110 shadow-md`}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
