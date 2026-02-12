import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="px-10 py-20"
    >
      <h2 className="text-3xl text-cyan-400 mb-8">{"<Experience />"}</h2>

      <div className="space-y-6 border-l-2 border-cyan-500 pl-6">

        <div>
          <h3 className="text-white font-semibold">
            Software Engineer Intern
          </h3>
          <p className="text-slate-400 text-sm">
            Echelon Edge | Sep 2025 – Dec 2025
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold">
            Web Designer Apprentice
          </h3>
          <p className="text-slate-400 text-sm">
            Excellence Technology | Jun 2024 – Jul 2024
          </p>
        </div>

      </div>
    </motion.div>
  );
}

export default Experience;
