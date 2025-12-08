import React from "react";

const About = () => {
  const techStack = [
    "React.js",
    "Vite",
    "Tailwind CSS",
    "React Router DOM",
    "ShadCN UI",
    "Lucide React Icons",
  ];

  const features = [
    "Dynamic property cards with pagination",
    "Detailed property view page",
    "Responsive layout for all devices",
    "Consistent gradient background & theme colors",
    "Custom button and UI components",
    "Routing between pages with data persistence",
  ];

  return (
    <div className="min-h-screen px-6 py-16 bg-linear-to-br from-[#FDFBF8] via-[#F6EBD5] to-[#F2E8C9] text-[#1C2A3A] flex flex-col items-center">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-gold">About DwellSmart</h1>

      {/* Profile Info */}
      <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-8 w-full max-w-3xl border border-[#E5DCC5]">
        <div className="space-y-3 text-left">
          <p className="text-lg">
            <span className="font-semibold">Developed by:</span> Abhimanyu
          </p>
          <p className="text-lg">
            <span className="font-semibold">Section:</span> C
          </p>
          <p className="text-lg">
            <span className="font-semibold">Enrollment No:</span> 2501010014
          </p>
        </div>

        {/* Divider */}
        <div className="border-t my-6 border-[#D4AF37]/30" />

        {/* Tech Stack */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#1C2A3A]">🛠 Tech Stack Used</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3 text-gray-700">
            {techStack.map((tech, i) => (
              <li
                key={i}
                className="bg-[#FFF9F1] px-4 py-2 rounded-xl shadow-sm border border-[#E6D7B9] text-center font-medium"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t my-6 border-[#D4AF37]/30" />

        {/* Features */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#1C2A3A]">✨ Features Implemented</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
