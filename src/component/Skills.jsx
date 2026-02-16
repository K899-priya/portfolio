import React from "react";

const skills = [
  { name: "React", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "Python", level: 75 },
  { name: "HTML/CSS", level: 90 },
  { name: "DSA", level: 70 },
];

function Skills() {
  return (
    <div className="bg-[#020617] py-20 px-8">
      <h2 className="text-3xl text-cyan-400 text-center mb-10">
        Skills
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="w-full bg-slate-800 rounded-full h-2">
              <div
                className="bg-cyan-400 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
