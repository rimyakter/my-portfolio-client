import React from "react";
import { useParams, useNavigate } from "react-router";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaArrowLeft,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiStripe,
} from "react-icons/si";
import { motion } from "framer-motion";
import projectImg1 from "../assets/projects/bloodbank.png";
import projectImg2 from "../assets/projects/B2BWholesale.png";
import projectImg3 from "../assets/projects/roommateFinder.png";

// Project Data
const projects = [
  {
    id: 1,
    name: "Blood Bridge",
    tag: "Digital Blood Donation Platform",
    image: projectImg1,
    description:
      "A platform to connect blood donors with recipients digitally, ensuring fast and reliable blood donation.",
    challenges:
      "Real-time updates and user notifications were challenging to implement efficiently.",
    improvements:
      "Plan to add AI-based donor suggestions and mobile push notifications.",
    techStack: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400" />,
      },
      { name: "MongoDB", icon: <SiMongodb className="text-green-800" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
    ],
    liveLink: "https://blood-bridge-63fb5.web.app/",
    githubLink: "https://github.com/rimyakter/my_assignment_12_client",
  },
  {
    id: 2,
    name: "Wholesale Avenue",
    tag: "E-Commerce Application",
    image: projectImg2,
    description:
      "An online wholesale marketplace for B2B businesses to buy and sell products efficiently.",
    challenges:
      "Integrating payment gateway securely and managing large product catalogs.",
    improvements:
      "Plan to implement advanced analytics dashboard and multi-vendor support.",
    techStack: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400" />,
      },
      { name: "Stripe API", icon: <SiStripe className="text-purple-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-800" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
    ],
    liveLink: "https://b2b-wholesale-d8558.web.app/",
    githubLink: "https://github.com/rimyakter/my_assignment_11_client",
  },
  {
    id: 3,
    name: "Roommate Finder",
    tag: "Smart Roommate Finder Application",

    image: projectImg3,
    description:
      "A platform for users to find compatible roommates based on preferences and location.",
    challenges:
      "Matching algorithm for compatibility and filtering options for users.",
    improvements:
      "Plan to integrate chat system and AI-based roommate suggestions.",
    techStack: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400" />,
      },
      { name: "MongoDB", icon: <SiMongodb className="text-green-800" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
    ],
    liveLink: "https://roommate-finder-256be.web.app/",
    githubLink: "https://github.com/rimyakter/my_assignment_10_client",
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project)
    return (
      <p className="text-center mt-20 text-gray-300">Project not found!</p>
    );

  return (
    <section className="py-16 bg-gray-900 min-h-screen">
      <motion.div
        className="w-11/12 max-w-6xl mx-auto bg-gray-800/80 backdrop-blur-md border border-gray-700 rounded-3xl shadow-[0_0_25px_rgba(0,255,255,0.1)] overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Back button */}
        <div className="p-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-200 font-semibold"
          >
            <FaArrowLeft /> Back
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left: Live Website Embed */}
          <motion.div
            className="relative w-full md:w-1/2 overflow-hidden rounded-2xl border border-cyan-500/20 shadow-lg mx-auto group"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-40 pointer-events-none"></div>

            <iframe
              src={project.liveLink}
              title={project.name}
              className="w-full h-[500px] md:h-[700px] border-none rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups"
            ></iframe>

            {/* Subtle glow behind iframe */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-10 blur-3xl -z-10"></div>
          </motion.div>

          {/* Right: Project Details */}
          <motion.div
            className="md:w-1/2 p-8 flex flex-col"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-3 tracking-wide">
              {project.name}
            </h1>
            <p className="text-gray-300 mb-6 text-lg italic">{project.tag}</p>
            <p className="text-gray-200 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <h2 className="text-gray-300 font-semibold mb-3">Tech Stack:</h2>
            <div className="flex flex-wrap gap-3 mb-6">
              {project.techStack.map((tech, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 bg-gray-900/80 px-3 py-1 rounded-full text-sm font-medium shadow-md hover:shadow-cyan-500/20 transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-xl">{tech.icon}</span>
                  <span className="text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Challenges */}
            <h2 className="text-gray-300 font-semibold mb-2">Challenges:</h2>
            <p className="text-gray-200 mb-6 leading-relaxed">
              {project.challenges}
            </p>

            {/* Improvements */}
            <h2 className="text-gray-300 font-semibold mb-2">
              Improvements & Future Plans:
            </h2>
            <p className="text-gray-200 mb-6 leading-relaxed">
              {project.improvements}
            </p>

            {/* Links */}
            <div className="flex gap-4 mt-auto flex-wrap">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-cyan-400 text-gray-900 px-3 md:px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-cyan-300 transition-all hover:scale-105"
              >
                Live Project <FaExternalLinkAlt />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 text-gray-200 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-600 transition-all hover:scale-105"
              >
                GitHub <FaGithub />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectDetails;
