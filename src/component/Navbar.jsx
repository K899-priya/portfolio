import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 border-b border-slate-700 text-slate-300">

      <img src="/logos/logo.png" alt="logo" className="h-12 w-12" />

      <div className="space-x-6 text-sm">
        <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
        <Link to="/about" className="hover:text-cyan-400 transition">About</Link>
        <Link to="/projects" className="hover:text-cyan-400 transition">Projects</Link>
        <Link to="/experience" className="hover:text-cyan-400 transition">Experience</Link>
        <Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
