/* eslint-disable react/prop-types */
import React from "react";

const StudentList = ({ students, onSelect, selectedStudent }) => {
  return (
    <div className="bg-gradient-to-br from-yellow-100 to-pink-100 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-pink-700 mb-4">Student List</h2>
      <ul className="space-y-3">
        {students.map((student) => (
          <li
            key={student.id}
            onClick={() => onSelect(student)}
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              selectedStudent?.id === student.id
                ? "bg-gradient-to-r from-green-400 to-emerald-600 text-white shadow-xl"
                : "bg-white hover:bg-yellow-50 border border-pink-200"
            }`}
          >
            <span className="font-semibold">{student.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
