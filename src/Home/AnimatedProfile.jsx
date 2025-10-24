import React from "react";
import { motion } from "framer-motion";
import me from "../assets/lottie/rimy.png";
import SocialLinks from "./SocialLinks";

const AnimatedProfile = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center py-10 overflow-hidden">
      {/* Floating Gradient Glow Background */}
      <motion.div
        className="absolute w-72 h-72 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.25 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Profile Image with Subtle Float */}
      <motion.div
        className="relative z-10 w-48 h-48 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border-4 border-white shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 1 }}
      >
        <motion.img
          src={me}
          alt="Asa Akter Rimy"
          className="w-full h-full object-cover rounded-2xl"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Decorative Border Accents */}
      <motion.div
        className="absolute top-[35%] left-[35%] w-14 h-14 border-t-4 border-l-4  rounded-tl-2xl"
        initial={{ opacity: 0, rotate: -15 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      />
      <motion.div
        className="absolute bottom-[38%] right-[35%] w-14 h-14 border-b-4 border-r-4  rounded-br-xl"
        initial={{ opacity: 0, rotate: 18 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 1 }}
      />

      {/* Subtle Name and Role */}
      <motion.div
        className="text-center mt-4 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <p className="text-gray-300 mt-1 text-lg">
          <SocialLinks></SocialLinks>
        </p>
      </motion.div>
    </div>
  );
};

export default AnimatedProfile;
