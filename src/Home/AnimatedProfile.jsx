import React from "react";
import me from "../assets/lottie/rimy.png";

const AnimatedProfile = () => {
  return (
    <div className="relative w-full py-6 flex items-center justify-center overflow-hidden">
      {/* Profile image (square shape) */}
      <div className="relative z-10 w-full max-w-[15rem] sm:max-w-none sm:w-60">
        <img
          src={me}
          alt="My Profile"
          className="w-full h-auto sm:w-60 sm:h-60 rounded-xl border-4 border-white shadow-xl object-cover"
        />
        {/* Angled border accents */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#0E7DEF] rounded-tl-xl" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#0E7DEF] rounded-br-xl" />
      </div>
    </div>
  );
};

export default AnimatedProfile;
