import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import GradientMesh from "./component/GradientMesh.jsx";
import NeuralBackground from "./component/NeuralBackground.jsx";
import MusicPlayer from "./component/MusicPlayer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <div className="relative bg-[#020617] text-white min-h-screen min-w-screen font-mono overflow-hidden">

      {/* BACKGROUND LAYERS */}
      <GradientMesh />
      <NeuralBackground />

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>

      {/* MUSIC PLAYER */}
      <MusicPlayer />

    </div>
  );
}

export default App;
