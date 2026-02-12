import React from "react";

function Projects() {
  return (
    <div className="px-10 py-20">
      <h2 className="text-3xl text-cyan-400 mb-10">
        {"<Projects />"}
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl text-cyan-400">Yoga Delight</h3>
          <p className="text-slate-400 text-sm mt-3">
            Yoga posture detection & health website.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl text-cyan-400">Placement Survey</h3>
          <p className="text-slate-400 text-sm mt-3">
            Python-based placement data analysis app.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl text-cyan-400">Snake Game</h3>
          <p className="text-slate-400 text-sm mt-3">
            Python snake game with scoring system.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Projects;
