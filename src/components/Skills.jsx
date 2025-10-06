import React, { useState } from "react";

const skillsList = ["React", "Node.js", "Python", "UI/UX", "DevOps"];

const Skills = ({ formData, handleChange, nextStep, prevStep }) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (formData.skills.length === 0) {
      setError("Please select at least one skill");
      return;
    }
    setError("");
    nextStep();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 sm:p-8 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-6">
          Step 2: Skills
        </h2>

        {/* Skills List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {skillsList.map((skill) => (
            <label
              key={skill}
              className="flex items-center space-x-2 border p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition"
            >
              <input
                type="checkbox"
                name="skills"
                value={skill}
                checked={formData.skills.includes(skill)}
                onChange={handleChange}
                className={`w-4 h-4 accent-indigo-500 ${
                  error ? "border-red-500" : "border-gray-300"
                }`}
              />
              <span className="text-gray-700 text-sm sm:text-base">{skill}</span>
            </label>
          ))}
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-8">
          <button
            onClick={prevStep}
            className="w-full sm:w-auto bg-gray-400 text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-500 transition"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="w-full sm:w-auto bg-indigo-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
