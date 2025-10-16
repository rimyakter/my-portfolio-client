import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/bg-4.json";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaCss3Alt,
  FaBootstrap,
  FaLightbulb,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiFigma,
} from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React",
        icon: <FaReact className="text-blue-500 text-4xl" />,
        description: "Build dynamic UIs efficiently",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400 text-4xl" />,
        description: "Rapid UI styling framework",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400 text-4xl" />,
        description: "Core web programming language",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="text-blue-600 text-4xl" />,
        description: "Responsive design and layout",
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="text-purple-600 text-4xl" />,
        description: "Frontend UI framework",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-600 text-4xl" />,
        description: "Server-side JavaScript runtime",
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-700 text-4xl" />,
        description: "Web server framework for Node",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-800 text-4xl" />,
        description: "NoSQL database management",
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="text-yellow-500 text-4xl" />,
        description: "Realtime database & auth",
      },
    ],
  },
  {
    category: "Tools & Version Control",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-red-500 text-4xl" />,
        description: "Version control for projects",
      },
      {
        name: "Figma",
        icon: <SiFigma className="text-pink-500 text-4xl" />,
        description: "Design & prototyping tool",
      },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="bg-[#11AAEF] py-12 relative z-5">
      <div className="max-w-7xl mx-auto px-4 z-5">
        <h2 className="text-5xl font-bold text-center mb-8 text-white flex justify-center pt-10">
          <FaLightbulb className="text-yellow-400 mr-1 text-center" />
          My Skills
        </h2>
        {/* Lottie background */}
        <Lottie
          animationData={animationData}
          loop
          autoplay
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {skillsData.map((category, idx) => (
          <div key={idx} className="mb-12 z-5">
            <h3 className="text-2xl text-white font-semibold mb-6">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="z-5 bg-white shadow-lg rounded-xl p-5 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
                >
                  {skill.icon}
                  <h4 className="mt-4 text-xl font-semibold">{skill.name}</h4>
                  <p className="mt-2 text-gray-500">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
