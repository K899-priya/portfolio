import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="px-10 py-20"
    >
      <h2 className="text-3xl text-cyan-400 mb-8">{"<About />"}</h2>

      <p className="text-slate-300 leading-relaxed max-w-3xl">
        Master's in Computer Application student (2023–2025) with 77.9%.
        Skilled in React.js, JavaScript, Python and Data Structures.
        Passionate about building modern web applications and solving
        real-world problems.
      </p>
    </motion.div>
  );
}

export default About;
