import React from "react";
import { FiEye } from "react-icons/fi"; // Eye icon for preview

const ResumeButton = () => {
  const resumeUrl = "/resume.pdf"; // Path to your resume file

  return (
    <div className="flex flex-col items-start">
      {/* Preview button */}
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1DCD9F] hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition inline-flex items-center"
      >
        <FiEye className="mr-2" />
        Preview Resume
      </a>
    </div>
  );
};

export default ResumeButton;
