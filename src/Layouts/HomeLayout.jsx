import React from "react";
import Home from "../Home/Home";
import AnimatedProfile from "../Home/AnimatedProfile";

import SocialLinks from "../Home/SocialLinks";

import ResumeButton from "../Home/ResumeButton";

const HomeLayout = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 px-5 z-10">
      <div className="relative">
        <div>
          <Home></Home>
        </div>

        <div className="mt-10">
          <SocialLinks></SocialLinks>
        </div>
        <div className="py-10 z-50">
          <ResumeButton></ResumeButton>
        </div>
      </div>

      <div className="relative">
        <AnimatedProfile></AnimatedProfile>
      </div>
    </div>
  );
};

export default HomeLayout;
