import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiFigma,
  SiVercel,
  SiNetlify,
  SiNextdotjs,
} from "react-icons/si";

// Skill data
const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-blue-500 text-4xl" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-white text-4xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400 text-4xl" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400 text-4xl" />,
      },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="text-purple-600 text-4xl" />,
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-600 text-4xl" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-400 text-4xl" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-800 text-4xl" />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="text-yellow-500 text-4xl" />,
      },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500 text-4xl" /> },
      { name: "Vercel", icon: <SiVercel className="text-white text-4xl" /> },
      {
        name: "Netlify",
        icon: <SiNetlify className="text-teal-400 text-4xl" />,
      },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="relative pb-10 pt-5 bg-[#0F0E0E] overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10 w-11/12 mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-300 mb-12 flex items-center justify-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-gray-300">My</span>
          <span className="bg-cyan-400 bg-clip-text text-transparent ml-2">
            Skills
          </span>
        </motion.h2>

        {/* Category Cards */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              className="flex-1 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-cyan-400/40 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-300 mb-6 text-center border-b border-white/20 pb-3">
                {category.category}
              </h3>

              {/* Responsive Skill Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 place-items-center">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    className="rounded-xl p-4 w-full flex flex-col items-center text-center shadow-md border border-white/10 hover:scale-105 transition-all duration-300"
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                  >
                    <div className="mb-2">{skill.icon}</div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {skill.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
