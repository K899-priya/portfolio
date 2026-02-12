import React from "react";

function Contact() {
  return (
    <div className="px-10 py-20 text-center">
      <h2 className="text-3xl text-cyan-400 mb-6">
        {"<Contact />"}
      </h2>

      <p className="text-slate-400">📞 +91 9905481735</p>
      <p className="text-slate-400">📧 kp6273275@gmail.com</p>

      <a
        href="https://www.linkedin.com/in/kumari-priya-3288a5210"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:underline block mt-4"
      >
        LinkedIn Profile
      </a>
    </div>
  );
}

export default Contact;
