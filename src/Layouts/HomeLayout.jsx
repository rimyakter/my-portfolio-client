import React from "react";
import Home from "../Home/Home";
import AnimatedProfile from "../Home/AnimatedProfile";

import ResumeButton from "../Home/ResumeButton";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto pt-25 pb-10 bg-[#0F0E0E] grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-2">
        <Home></Home>

        <ResumeButton></ResumeButton>
      </div>

      <div>
        <AnimatedProfile></AnimatedProfile>
      </div>
    </div>
  );
};

export default HomeLayout;
