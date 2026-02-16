import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#020617" },
        particles: {
          number: { value: 40 },
          color: { value: "#22d3ee" },
          links: {
            enable: true,
            color: "#22d3ee",
            opacity: 0.3,
          },
          move: { enable: true, speed: 1 },
          size: { value: 2 },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}

export default ParticlesBackground;
