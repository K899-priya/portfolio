import React, { useEffect } from "react";
import profile from "../assets/123.jpeg";
import ParticlesBackground from "../component/ParticlesBackground";

import AOS from "aos";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative min-h-screen flex bg-[#020617] items-center justify-center px-8">
      <ParticlesBackground />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-3 items-center">
        {/* LEFT */}
        <div data-aos="fade-right">
          <div className="bg-[#020617] border border-slate-700 px-4 py-2 rounded-md inline-block mb-1 mt-4 text-sm text-slate-400">
            Hi!
          </div>

          <h1 className="text-5xl font-bold text-white mb-3">Kumari Priya</h1>

          <h2 className="text-xl text-slate-300 mb-6">
            MCA Student | React Developer | Problem Solver
          </h2>

          <div className="flex gap-4">
            <a
              href="/Kumari_priya_resume.pdf"
              className="px-6 py-3 bg-cyan-300 rounded-lg text-black font-semibold hover:bg-cyan-500"
            >
              Download CV
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-cyan-400 rounded-lg text-cyan-400"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div data-aos="fade-left" className="flex justify-center">
          <img
            src={profile}
            className="w-72 rounded-full shadow-3xl border-2 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:border-cyan-400"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
