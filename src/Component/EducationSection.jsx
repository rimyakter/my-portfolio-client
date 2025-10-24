import React from "react";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Daffodil International University",
    duration: "2016 – 2022",
    result: "3.69 / 4.00",
    description:
      "Focused on software development, algorithms, and data structures.",
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

const EducationSection = () => {
  return (
    <section className=" py-12">
      <div className="w-11/12 mx-auto ">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center text-gray-300 mb-5 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gray-300">My</span>
          <span className="bg-cyan-400 bg-clip-text text-transparent">
            Education
          </span>
        </motion.h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-start relative">
          {/* Left Column: Education Card */}
          <motion.div
            className="flex flex-col space-y-6 col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                className=" rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center   relative"
              >
                {/* University Icon */}
                <motion.div
                  className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                >
                  <FaUniversity className="text-4xl md:text-6xl text-cyan-400" />
                </motion.div>

                {/* Text Content */}
                <motion.div
                  className="text-center md:text-left"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-300 mb-3">
                    {edu.degree}
                  </h3>
                  <p className="text-sm md:text-lg text-cyan-400">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-300">{edu.duration}</p>
                  <p className="text-sm text-gray-300 font-medium">
                    Result: <span className="text-cyan-400">{edu.result}</span>
                  </p>
                  <p className="mt-2 text-gray-300">{edu.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Floating Graduation Cap */}
          <motion.div
            className="flex justify-center md:justify-end relative "
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          >
            <motion.div
              className="relative text-cyan-400 text-[7rem] md:text-[14rem]"
              animate={{ y: [0, -40, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaGraduationCap />

              {/* Subtle glow behind icon */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-20 blur-3xl -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
