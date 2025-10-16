import { FaUniversity } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/bg-4.json";

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

const EducationSection = () => {
  return (
    <section className="py-16 bg-[#11AAEF] relative">
      {/* Lottie background */}
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-semibold text-center text-white mb-12 mt-12">
          🎓 Education
        </h2>
        <div className="flex flex-col items-center space-y-10">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="z-10 w-full sm:w-3/5 bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row"
            >
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 flex justify-center">
                <FaUniversity className="text-4xl sm:text-5xl text-[#11CDEF]" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">
                  {edu.degree}
                </h3>
                <p className="text-base sm:text-lg text-gray-600">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-500">{edu.duration}</p>
                <p className="text-sm text-gray-500 font-medium">
                  Result: {edu.result}
                </p>
                <p className="mt-2 text-gray-600">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
