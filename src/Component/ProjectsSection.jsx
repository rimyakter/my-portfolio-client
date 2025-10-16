// ProjectsSection.jsx
import React from "react";
import { Link } from "react-router";
import { projects } from "./projectData";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/bg-4.json";

const ProjectsSection = () => {
  return (
    <section className="py-16 bg-[#11AAEF] relative ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Lottie background */}
        <Lottie
          animationData={animationData}
          loop
          autoplay
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <h2 className="text-5xl font-semibold text-center text-white mb-12 mt-12">
          💻 Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="z-10 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
                <Link
                  to={`/project-Details/${project.id}`}
                  className="mt-auto inline-block bg-secondary text-white px-4 py-2 rounded-lg text-center hover:bg-blue-500 transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
