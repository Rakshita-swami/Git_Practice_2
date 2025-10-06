import React, { useState } from "react";

const PersonalInfo = ({ formData, handleChange, nextStep }) => {
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Full Name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email";
      }
    }

    if (!formData.gender) newErrors.gender = "Gender is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      nextStep();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6 md:p-10">
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white shadow-lg rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-6">
          Step 1: Personal Info
        </h2>

        <div className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 mt-1 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Gender <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="accent-blue-400"
                />
                <span>Male</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="accent-blue-400"
                />
                <span>Female</span>
              </label>
            </div>
            {errors.gender && (
              <p className="text-red-500 mt-1 text-sm">{errors.gender}</p>
            )}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="mt-8 w-full sm:w-auto px-8 py-3 bg-blue-400 text-white rounded-lg font-medium shadow hover:bg-blue-500 transition"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
