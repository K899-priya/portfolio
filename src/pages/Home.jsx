

function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center py-24"
    >
      <h2 className="text-4xl font-bold mb-4">
        Hi, I'm <span className="text-cyan-400">Priya</span> 👋
      </h2>

      <p className="text-slate-400">
        MCA Student | React Developer | Problem Solver
      </p>

      <div className="mt-8 space-x-4">
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition"
        >
          Download Resume
        </a>

        <a
          href="https://github.com/YOUR_GITHUB"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-black transition"
        >
          GitHub
        </a>
      </div>
    </motion.section>
  );
}

export default Home;
