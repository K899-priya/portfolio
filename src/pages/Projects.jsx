import React from "react";

function Projects() {
  return (
    <div className="py-20 px-8 ">
      <h2 className="text-3xl text-center font-bold text-cyan-400 mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="bg-[#1f2937] p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-white">
            Yoga Delight
          </h3>
          <p className="text-slate-400 mt-3">
            YogaDelight A personalized yoga application that uses AI to accurately detect and correct your poses.
            With a vast library of yoga poses, detailed instructions, and real-time feedback, it’s your perfect yoga partner. 
          </p>
          <a href="https://yoga-ai-app.vercel.app/" className="text-cyan-400">Live Demo</a>
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
          <a href="https://github.com/K899-priya/Snake-game" className="text-cyan-400 hover:underline">Source Code</a>
        </div>
        
        <div className="bg-[#1f2937] p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold text-white">
            Mini Youtube
          </h3>
          <p className="text-slate-400 mt-3">
            React-based YouTube clone with search and video playback.
          </p>
          <a href="https://mini-youtube-clone-rust.vercel.app/" className="text-cyan-400">Live Demo</a>
        </div>
        
      </div>
    </div>
  );
}

export default Projects;
