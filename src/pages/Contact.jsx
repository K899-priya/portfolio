import React, { useState } from "react";

function Contact() {

  const [copied, setCopied] = useState(false);
  const email = "kp6273275@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative">

      {/* Glow Background */}
      <div className="absolute w-125 h-125 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

      {/* Glass Card */}
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-10 max-w-lg w-full text-center shadow-[0_0_40px_rgba(34,211,238,0.2)]">

        {/* Title */}
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">
          Contact Me
        </h2>

        {/* Description */}
        <p className="text-slate-300 mb-8">
          Let’s build something amazing together 🚀  
          Feel free to reach out anytime.
        </p>

        {/* Email Button */}
        <a
          href={`mailto:${email}`}
          className="block w-full mb-4 py-3 bg-linear-to-r bg-cyan-100 rounded-lg hover:text-black font-semibold hover:scale-105 transition shadow-lg"
        >
          📧 Send Email
        </a>

        {/* Copy Button */}
        <button
          onClick={copyEmail}
          className="w-full py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition"
        >
          {copied ? "✅ Email Copied!" : "📋 Copy Email"}
        </button>

      </div>
    </div>
  );
}

export default Contact;
