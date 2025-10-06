/* eslint-disable react/prop-types */
import React from "react";

const StudentDetails = ({ student }) => {
  if (!student) {
    return (
      <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl shadow-lg p-6 flex items-center justify-center text-gray-700 font-medium">
        Select a student to see details 📘
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-teal-700 mb-4">Student Details</h2>
      <p className="mb-2">
        <span className="font-semibold">Name:</span> {student.name}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Grade:</span>{" "}
        <span className="px-3 py-1 rounded-full text-white bg-gradient-to-r from-teal-500 to-blue-500">
          {student.grade}
        </span>
      </p>
      <p>
        <span className="font-semibold">Email:</span> {student.email}
      </p>
    </div>
  );
};

export default StudentDetails;
