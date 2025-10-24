import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className="w-full  py-10 px-3   md:px-6 overflow-hidden">
      <div className=" flex flex-col lg:flex-row items-center gap-y-5">
        {/* Floating Icon Section */}
        <motion.div
          className="hidden lg:flex flex-1 items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="p-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl shadow-xl relative"
            animate={{
              y: [0, -12, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaCode className="text-white text-8xl" />
            {/* Subtle glow behind icon */}
            <div className=" absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-20 blur-3xl -z-10"></div>
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="  flex-1 space-y-5 text-center lg:text-justify  p-10 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Section Title */}
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-gray-300 ">About</span>
            <span className="bg-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.h3
            className="text-xl md:text-2xl font-semibold text-cyan-400 flex items-center justify-center lg:justify-start gap-2 mt-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <FaCode className="text-cyan-400" />
            Hello! I’m Asa Akter Rimy
          </motion.h3>

          {/* Description */}
          <motion.div
            className="space-y-5 text-gray-300  leading-relaxed text-sm md:text-lg mt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <p>
              I’m a passionate{" "}
              <span className="text-cyan-400 font-semibold">
                Front-End Developer
              </span>{" "}
              specializing in modern web technologies like{" "}
              <span className="text-cyan-400 font-semibold">React.js,</span>{" "}
              <span className="text-cyan-400 font-semibold">Tailwind CSS,</span>
              <span className="text-cyan-400 font-semibold"> Firebase</span>. I
              hold a <strong>B.Sc. in Computer Science and Engineering</strong>{" "}
              from <strong>Daffodil International University.</strong>
            </p>

            <p>
              I build responsive, accessible, and user-friendly web apps with a
              focus on <span className=" ">performance</span> and{" "}
              <span className="">clean design</span>. My experience also
              includes backend integration for full-stack collaboration.
            </p>

            <p>
              I’m always curious to{" "}
              <span className="">explore new technologies</span> and tools to
              improve as a developer and deliver better user experiences.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
