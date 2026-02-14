import React from "react";

function Projects() {
  return (
    <div className="py-20 px-8 bg-[#0f172a]">
      <h2 className="text-3xl text-center font-bold text-cyan-400 mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="bg-[#1f2937] p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-white">
            Mini YouTube
          </h3>
          <p className="text-slate-400 mt-3">
            React-based YouTube clone with video search & playback.
          </p>
          <a href="https://github.com/K899-priya/Mini-youtube" className="text-cyan-400">Source Code</a>
        </div>

        <div className="bg-[#1f2937] p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-white">
            Placement Survey
          </h3>
          <p className="text-slate-400 mt-3">
            Python-based student placement data analysis tool.
          </p>
        </div>

        <div className="bg-[#1f2937] p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-white">
            Snake Game
          </h3>
          <p className="text-slate-400 mt-3">
            Python game with scoring & difficulty levels.
          </p>
          <a href="https://github.com/K899-priya/-snack-game" className="text-cyan-400 hover:underline">Source Code</a>
        </div>
        
        <div className="bg-[#1f2937] p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-white">
            DashBoard
          </h3>
          <p className="text-slate-400 mt-3">
            React dashboard with charts & data visualization.
          </p>
          <a href="https://github.com/K899-priya/Dashboard" className="text-cyan-400">Source Code</a>
        </div>
        
      </div>
    </div>
  );
}

export default Projects;
