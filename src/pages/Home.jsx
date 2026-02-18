import React, { useEffect, useState } from "react";
import profile from "../assets/123.jpeg";
import GradientMesh from "../component/GradientMesh";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {

  // Greeting state
  const [greeting] = useState(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      return "🌅 Good Morning";
    } else if (hour >= 12 && hour < 17) {
      return "☀️ Good Afternoon";
    } else if (hour >= 17 && hour < 21) {
      return "🌇 Good Evening";
    } else {
      return "🌙 Good Night";
    }
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
   <div className="relative min-h-screen flex items-center justify-center px-8  backdrop-blur-xs z-10">
      <GradientMesh />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-3 items-center">
        {/* LEFT */}
        <div data-aos="fade-right">
          {/* Greeting Badge */}
          <div className="bg-[#020617] border border-cyan-500 px-4 py-2 rounded-md inline-block mb-3 mt-4 text-sm text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]">
            {greeting}
          </div>

          <h1 className="text-5xl font-bold text-white mb-3">
            Kumari Priya
          </h1>

          <h2 className="text-xl text-slate-300 mb-6">
            MCA Student | React Developer | Problem Solver
          </h2>

          <div className="flex gap-4">
            <a
              href="/public/Kumari_Priya-resume2.pdf"
              className="px-6 py-3 bg-cyan-300 rounded-lg text-black font-semibold hover:bg-cyan-500 transition"
            >
              Download CV
            </a>

            <a
              href="https://github.com/K899-priya"
              className="px-6 py-3 border border-cyan-400 rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div data-aos="fade-left" className="flex justify-center">
          <img
            src={profile}
            alt="profile"
            className="w-72 rounded-full shadow-3xl border-2 border-transparent shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:border-cyan-400 transition duration-300"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
