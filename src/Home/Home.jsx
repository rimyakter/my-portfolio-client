import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const titles = ["Frontend Developer", "Programmer", "Web Enthusiast"];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < titles.length * 3 - 1) {
      // animate 3 full cycles
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div className="flex flex-col items-center md:items-start">
      {/* Intro Text */}
      <motion.h2
        className="text-gray-300 text-sm md:text-lg mb-2 mt-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-3xl text-gray-300 font-semibold">I'm</span>
      </motion.h2>

      {/* Animated Titles */}
      <div className="h-15 flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            className="text-3xl md:text-5xl font-bold bg-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {titles[index % titles.length]}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Subtext */}
      <motion.p
        className="text-gray-300 text-lg md:text-xl mt-2 text-center md:text-start leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Crafting clean, responsive, and engaging web experiences with a focus on
        modern design, performance, and usability.
      </motion.p>
    </div>
  );
};

export default Home;
