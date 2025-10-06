import { useState } from "react";
// import StudentList from "./components/StudentList";
import StudentDetails from "./components/StudentDetails";

export default function App() {
  // Shared state in Parent
  const [students] = useState([
    { id: 1, name: "Aarav Sharma", grade: "A", email: "aarav@example.com" },
    { id: 2, name: "Priya Patel", grade: "B", email: "priya@example.com" },
    { id: 3, name: "Rohit Mehta", grade: "C", email: "rohit@example.com" },
    { id: 4, name: "Sneha Kapoor", grade: "A+", email: "sneha@example.com" },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 via-pink-200 to-yellow-100 flex items-center justify-center p-6">
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-5xl">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 mb-8">
          🎓 Student Dashboard
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Child 1: Student List */}
          {/* <StudentList
            students={students}
            onSelect={setSelectedStudent}
            selectedStudent={selectedStudent}
          /> */}

          {/* Child 2: Student Details */}
          <StudentDetails student={selectedStudent} />
        </div>
      </div>
    </div>
  );
}
