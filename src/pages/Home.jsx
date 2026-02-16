import React from "react";
import profile from "../assets/123.jpeg";

function Home() {
  return (
    <div className="max-h-screen flex items-center justify-center px-8 bg-[#0f172a]">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-slate-400 mb-2">Hello,</p>
          <h1 className="text-5xl font-bold text-white mb-4">
            I'm <span className="text-cyan-400">Kumari Priya</span>
          </h1>

          <h2 className="text-2xl text-slate-300 mb-6">
            MCA Student | React Developer
          </h2>

          <div className="space-x-4">
            <a
              href="/Kumari_priya_resume.pdf"
              download
              className="px-6 py-3 bg-cyan-600 text-black font-bold rounded-lg hover:bg-cyan-200 transition"
            >
              Download CV
            </a>

            <a
              href="https://github.com/K899-priya"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-cyan-400 rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE WITH GRADIENT CIRCLE */}
        <div className="relative flex justify-center">
          <div className="absolute w-52 h-52 bg-linear-to-r from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-15"></div>

          <img
            src={profile}
            alt="profile"
            className="relative w-52 rounded-xl shadow-xl"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
