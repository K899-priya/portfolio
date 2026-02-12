import React from "react";

function About() {
  return (
    <div className="bg-[#111827] py-20 px-8 text-center">
      <h2 className="text-3xl font-bold text-cyan-400 mb-10">
        About Me
      </h2>

      <p className="text-slate-300 max-w-3xl mx-auto mb-12">
        Master's in Computer Application (2023–2025) with 77.9%.
        Skilled in React.js, JavaScript, Python, DSA and Operating Systems.
        Passionate about solving real-world problems through technology.
      </p>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-[#1f2937] p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-cyan-400">3+</h3>
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
    </div>
  );
}

export default About;
