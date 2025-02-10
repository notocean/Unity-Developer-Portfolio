import React from "react";

const TechnicalExperience = () => {
  const technologies = [
    "C#", "Unity", "Git"
  ];

  const technologies2 = [
    "Game mechanics", "UI", 
  ];

  return (
    <section className="max-w-6xl mx-auto mt-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-cyan-400 mb-8 font-bold">
          Kỹ năng
        </h2>

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-md border-2 border-rose-800 
                       text-gray-200 bg-neutral-800/50 hover:border-rose-500 
                       transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          {technologies2.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-md border-2 border-rose-800 
                       text-gray-200 bg-neutral-800/50 hover:border-rose-500 
                       transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalExperience;
