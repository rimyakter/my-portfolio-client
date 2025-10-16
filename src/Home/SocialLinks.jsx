import React from "react";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      icon: <SiGmail size={16} />,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=asha86081@gmail.com",
      bg: "bg-red-500",
      hover: "hover:bg-red-600",
      label: "Gmail",
      newTab: true,
    },
    {
      id: 2,
      icon: <FaLinkedin size={16} />,
      href: "https://www.linkedin.com/in/asha-akter-rimy/",
      bg: "bg-blue-600",
      hover: "hover:bg-blue-700",
      label: "LinkedIn",
    },
    {
      id: 3,
      icon: <FaGithub size={16} />,
      href: "https://github.com/rimyakter/",
      bg: "bg-gray-800",
      hover: "hover:bg-black",
      label: "GitHub",
    },
    {
      id: 4,
      icon: <FaInstagram size={16} />,
      href: "https://www.instagram.com/__rimy__aktr/",
      bg: "bg-gradient-to-tr from-pink-500 to-yellow-500",
      hover: "hover:opacity-80",
      label: "Instagram",
    },
  ];

  return (
    <div className="flex space-x-5">
      {links.map(({ id, icon, href, bg, hover, label }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={label}
          className={`flex items-center justify-center w-8 h-8 rounded-full text-white ${bg} ${hover} transform transition-all duration-300 hover:scale-110 shadow-md`}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
