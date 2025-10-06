import React from "react";

const Review = ({ formData, prevStep }) => {
  const handleSubmit = () => {
    alert("Form Submitted!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6">
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white shadow-lg rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-6">
          Step 4: Review
        </h2>

        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg space-y-3">
          <p className="text-sm sm:text-base"><strong>Name:</strong> {formData.name}</p>
          <p className="text-sm sm:text-base"><strong>Email:</strong> {formData.email}</p>
          <p className="text-sm sm:text-base"><strong>Gender:</strong> {formData.gender}</p>
          <p className="text-sm sm:text-base"><strong>Skills:</strong> {formData.skills.join(", ")}</p>
          <p className="text-sm sm:text-base"><strong>Role:</strong> {formData.role}</p>
          <p className="text-sm sm:text-base"><strong>Experience:</strong> {formData.experience}</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-8">
          <button
            onClick={prevStep}
            className="w-full sm:w-auto bg-gray-400 text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-500 transition"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto bg-green-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-700 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
