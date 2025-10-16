import React from "react";
import { FaCode } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text side */}
        <div className="flex-1 space-y-6">
          <h2 className="text-5xl font-bold text-gray-900  dark:text-white text-center">
            About <span className="text-[#11a4ef]">Me</span>
          </h2>

          <h1 className="text-3xl font-bold mt-15 text-[#11a4ef] flex">
            <FaCode className="text-[#11a4ef] mr-2" />
            Hello! I’m Asa Akter Rimy
          </h1>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m a passionate <strong>Front-End Developer</strong> specializing
            in modern web technologies like
            <strong> React.js</strong>, <strong>Tailwind CSS</strong>, and{" "}
            <strong>Firebase</strong>. I hold a{" "}
            <strong>B.Sc. in Computer Science and Engineering</strong> from
            <strong> Daffodil International University</strong>, where I
            graduated with a<strong> CGPA of 3.69 out of 4.00</strong>.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            I’ve built several responsive and user-friendly projects focusing on
            performance, accessibility, and clean design. My experience also
            includes working with basic backend technologies, allowing me to
            understand full-stack development workflows and collaborate
            effectively.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            I’m always curious to
            <strong> explore new technologies</strong>, frameworks, and tools
            that help me improve as a developer and build better experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
