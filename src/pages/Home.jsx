import React, { useEffect } from "react";
import profile from "../assets/profile.png";
import ParticlesBackground from "../components/ParticlesBackground";
import AOS from "aos";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-8">

      <ParticlesBackground />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div data-aos="fade-right">

          <div className="bg-[#020617] border border-slate-700 px-4 py-2 rounded-md inline-block mb-6 text-sm text-slate-400">
            kumari@portfolio:~$
          </div>

          <h1 className="text-5xl font-bold text-white mb-4">
            Kumari <span className="text-cyan-400">Priya</span>
          </h1>

          <h2 className="text-xl text-slate-300 mb-6">
            MCA Student | React Developer | Problem Solver
          </h2>

          <div className="flex gap-4">
            <a href="/resume.pdf" className="px-6 py-3 bg-cyan-500 rounded-lg text-black font-semibold">
              Download CV
            </a>
            <a href="#" className="px-6 py-3 border border-cyan-400 rounded-lg text-cyan-400">
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div data-aos="fade-left" className="flex justify-center">
          <img src={profile} className="w-72 rounded-xl shadow-lg border border-slate-700" />
        </div>

      </div>
    </div>
  );
}

export default Home;
