import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import Skills from "./component/Skills.jsx";
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
    <Router>
      <GradientMesh />
      <NeuralBackground />
      <MusicPlayer />
      
      <div className="bg-[#172138] text-white min-h-screen min-w-screen font-mono">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
