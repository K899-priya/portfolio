import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="px-10 py-20"
    >
      <h2 className="text-3xl text-cyan-400 mb-10">{"<Projects />"}</h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl text-cyan-400">Yoga Delight</h3>
          <p className="text-slate-400 text-sm mt-3">
            Yoga posture detection & health assistance website.
          </p>
          <a href="https://github.com/YOUR_GITHUB/yoga-delight"
             className="text-cyan-400 text-sm mt-4 block"
             target="_blank"
             rel="noopener noreferrer">
            View Code →
          </a>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl text-cyan-400">Placement Survey</h3>
          <p className="text-slate-400 text-sm mt-3">
            Python app for analyzing placement data.
          </p>
          <a href="https://github.com/YOUR_GITHUB/placement-survey"
             className="text-cyan-400 text-sm mt-4 block"
             target="_blank"
             rel="noopener noreferrer">
            View Code →
          </a>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl text-cyan-400">Snake Game</h3>
          <p className="text-slate-400 text-sm mt-3">
            Python-based snake game with scoring system.
          </p>
          <a href="https://github.com/YOUR_GITHUB/snake-game"
             className="text-cyan-400 text-sm mt-4 block"
             target="_blank"
             rel="noopener noreferrer">
            View Code →
          </a>
        </div>

      </div>
    </motion.div>
  );
}

export default Projects;
