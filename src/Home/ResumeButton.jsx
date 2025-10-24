import React from "react";
import { motion } from "framer-motion";
import { FiEye } from "react-icons/fi";

const ResumeButton = () => {
  const resumeUrl = "/resume.pdf"; // Path to your resume file

  // Continuous icon animation variant
  const iconVariant = {
    animate: {
      y: [0, -4, 0], // subtle up-down movement
      rotate: [0, 10, -10, 0], // optional slight rotation
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  // Continuous "hover effect" variant (shadow + lift)
  const buttonVariant = {
    animate: {
      y: -2,
      boxShadow: "0px 10px 20px rgba(16, 203, 239, 0.4)",
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <div className="flex flex-col items-start mt-12">
      <motion.a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        variants={buttonVariant}
        animate="animate"
        whileTap={{ scale: 0.95 }}
        className="text-cyan-400 bg-gray-900 px-6 py-2 rounded-lg inline-flex items-center shadow-md hover:bg-transparent hover:text-cyan-400 hover:border hover:border-cyan-300 transition-all"
      >
        <motion.span
          variants={iconVariant}
          animate="animate"
          className="mr-2 text-xl"
        >
          <FiEye />
        </motion.span>
        Preview Resume
      </motion.a>
    </div>
  );
};

export default ResumeButton;
