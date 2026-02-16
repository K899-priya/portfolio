import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="px-10 py-20 min-h-screen bg-[#020617]">

      {/* TITLE */}
      <h2
        className="text-3xl text-cyan-400 mb-12"
        data-aos="fade-up"
      >
        Experience
      </h2>

      {/* TIMELINE */}
      <div className="space-y-12 border-l-2 border-cyan-500 pl-8">

        {/* EXPERIENCE 1 */}
        <div
          data-aos="fade-right"
          className="group bg-[#020617] border border-slate-700 p-6 rounded-xl transition hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:border-cyan-400"
        >

          <div className="flex items-center gap-4 mb-3">

            <img
              src="/echelon.png"
              alt="Echelon Edge"
              className="w-10 h-10 rounded-md border border-slate-600"
            />

            <h3 className="text-white text-lg font-semibold">
              Software Engineer Intern
            </h3>

          </div>

          <p className="text-cyan-400 text-sm mb-2">
            Echelon Edge pvt ltd | Sep 2025 – Dec 2025
          </p>

          <p className="text-slate-400 text-sm">
            Worked on frontend features, optimized UI performance,
            and collaborated with developers to enhance user experience.
          </p>

        </div>

        {/* EXPERIENCE 2 */}
        <div
          data-aos="fade-left"
          className="group bg-[#020617] border border-slate-700 p-6 rounded-xl transition hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:border-cyan-400"
        >

          <div className="flex items-center gap-4 mb-3">

            <img
              src="/excellence.png"
              alt="Excellence Technology"
              className="w-10 h-10 rounded-md border border-slate-600"
            />

            <h3 className="text-white text-lg font-semibold">
              Web Designer Apprentice
            </h3>

          </div>

          <p className="text-cyan-400 text-sm mb-2">
            Excellence Technology | Jun 2024 – Jul 2024
          </p>

          <p className="text-slate-400 text-sm">
            Designed responsive layouts, improved UI consistency,
            and implemented modern design principles.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Experience;
