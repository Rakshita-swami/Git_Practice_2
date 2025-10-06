import React, { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Review from "./components/Review";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    skills: [],
    role: "",
    experience: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const updatedSkills = checked
          ? [...prev.skills, value]
          : prev.skills.filter((skill) => skill !== value);
        return { ...prev, skills: updatedSkills };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          React Controlled Form
        </h1>

        {step === 1 && (
          <PersonalInfo
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        )}
        {step === 2 && (
          <Skills
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 3 && (
          <Experience
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 4 && <Review formData={formData} prevStep={prevStep} />}
      </div>
    </div>
  );
};

export default App;
