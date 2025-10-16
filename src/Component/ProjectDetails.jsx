import React from "react";
import { useParams, useNavigate } from "react-router";
import { projects } from "./projectData";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <p className="text-center mt-20">Project not found!</p>;

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 bg-white rounded-2xl shadow-lg p-10">
        {/* Back button using react-icon */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#11AAEF] mb-6 hover:text-blue-600"
        >
          <FaArrowLeft /> Back
        </button>

        <h2 className="text-3xl font-bold mb-10 text-[#11AAEF]">
          {project.name}
        </h2>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-700 mb-4">{project.description}</p>
        <p className="text-gray-800 font-semibold mb-2">Tech Stack:</p>
        <ul className="list-disc list-inside mb-4">
          {project.techStack.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
        <p className="text-gray-800 font-semibold mb-2">Challenges:</p>
        <p className="mb-4 text-gray-700">{project.challenges}</p>
        <p className="text-gray-800 font-semibold mb-2">
          Improvements & Future Plans:
        </p>
        <p className="mb-4 text-gray-700">{project.improvements}</p>
        <div className="flex space-x-4 mt-6">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#11AAEF] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Live Project <FaExternalLinkAlt />
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
          >
            GitHub <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
