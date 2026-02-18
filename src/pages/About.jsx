import React from "react";

function About() {

  const skills = [
    { name: "React", icon: "/logos/react.gif"  },
    { name: "JavaScript", icon: "/logos/javascript.gif" },
    { name: "Python", icon: "/logos/python.gif" },
    { name: "Tailwind", icon: "/logos/tailwind.png" },
    { name: "HTML/CSS", icon: "/logos/html.gif" },
    { name: "DSA", icon: "/logos/dsa.png" },
    { name: "C", icon: "/logos/c.png" },
  ];

  return (
    <div className=" py-20 px-8 text-center">

      <h2 className="text-3xl font-bold text-cyan-400 mb-10">
        About Me
      </h2>

      <p className="text-slate-300 max-w-3xl mx-auto mb-12">
        Master's in Computer Application (2023–2025).
        Motivated and detail-oriented with a strong foundation in programming, front-
        end development, and data analysis. Adept at designing user-friendly web interfaces and developing Python-based applications.
        A collaborative team player with strong decision-making and public speaking skills, seeking opportunities to contribute to
        innovative technology-driven projects in a dynamic environment.
      </p>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">

        <div className="bg-[#1f2937] p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-cyan-400">4+</h3>
          <p className="text-slate-400 mt-2">Projects Completed</p>
        </div>

        <div className="bg-[#1f2937] p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-cyan-400">77.9%</h3>
          <p className="text-slate-400 mt-2">MCA Score</p>
        </div>

        <div className="bg-[#1f2937] p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-cyan-400">1+</h3>
          <p className="text-slate-400 mt-2">Internship Experience</p>
        </div>

      </div>

      {/* Skills Logos */}
      <h3 className="text-2xl font-semibold text-cyan-400 mb-8">
        Tech Stack
      </h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-7 gap-6 max-w-2xl mx-auto">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#1c2b41] p-4 rounded-xl flex flex-col items-center hover:scale-100 transition hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
          >
            <img
              src={skill.icon}
              className="w-12 h-12 mb-2 mt-2"
            />

          </div>
        ))}

      </div>

    </div>
  );
}

export default About;
