import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 border-b border-slate-700">
      <h1 className="text-lg font-bold text-cyan-400">
        Portfolio
      </h1>

      <div className="space-x-6 text-sm">
        <Link to="/" className="hover:text-cyan-400">Home</Link>
        <Link to="/about" className="hover:text-cyan-400">About</Link>
        <Link to="/projects" className="hover:text-cyan-400">Projects</Link>
        <Link to="/experience" className="hover:text-cyan-400">Experience</Link>
        <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
