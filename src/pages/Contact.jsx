// import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="px-10 py-20 text-center"
    >
      <h2 className="text-3xl text-cyan-400 mb-6">{"<Contact />"}</h2>

      <p className="text-slate-400">📞 +91 9905481735</p>
      <p className="text-slate-400">📧 kp6273275@gmail.com</p>

      <div className="mt-6">
        <a
          href="https://www.linkedin.com/in/kumari-priya-3288a5210"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          LinkedIn Profile
        </a>
      </div>
    </motion.div>
  );
}

export default Contact;
