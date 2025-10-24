import React from "react";
import { FaExternalLinkAlt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import projectImg1 from "../assets/projects/bloodbank.png";
import projectImg2 from "../assets/projects/B2BWholesale.png";
import projectImg3 from "../assets/projects/roommateFinder.png";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiStripe,
  SiTailwindcss,
} from "react-icons/si";

// Sample project data
const projects = [
  {
    id: 1,
    name: "Blood Bridge",
    tag: "Digital Blood Donation Platform",
    image: projectImg1,
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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const ProjectSection = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-6 pb-12 md:pt-12">
      <div className="w-11/12 mx-auto px-2">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center text-gray-300 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gray-300">My</span>
          <span className="bg-cyan-400 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        {/* Projects List */}
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="border border-cyan-400 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Left: Image */}
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right: Details */}
              <div className="md:w-1/2 p-6 flex flex-col">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-300 mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-cyan-400 mb-4">{project.tag}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.techStack.map((tech, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 bg-gray-900 px-3 py-1 rounded-full text-sm font-medium"
                      whileHover={{ y: -3, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      title={tech.name}
                    >
                      <span className="text-xl">{tech.icon}</span>
                      <span className="text-gray-300">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-5 md:mt-auto flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white  hover:bg-gray-900 p-3 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white  hover:bg-gray-900 p-3 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  <button
                    onClick={() => navigate(`/project-details/${project.id}`)}
                    className="ml-auto bg-gray-900 hover:bg-transparent hover:border hover:border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
