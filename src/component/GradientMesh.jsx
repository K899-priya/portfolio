import React from "react";

function GradientMesh() {
  return (
    <div className="fixed inset-0 -z-30 overflow-hidden">

      <div className="absolute w-150 h-150 bg-cyan-500 opacity-20 blur-3xl animate-blob -top-50 -left-50" />
      <div className="absolute w-150 h-150 bg-blue-500 opacity-20 blur-3xl animate-blob animation-delay-2000 top-[40%] -right-50" />
      <div className="absolute w-150 h-150 bg-purple-500 opacity-20 blur-3xl animate-blob animation-delay-4000 -bottom-50 left-[30%]" />

    </div>
  );
}

export default GradientMesh;
