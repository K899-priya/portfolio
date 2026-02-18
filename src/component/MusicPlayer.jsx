import React, { useRef, useState } from "react";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">

      <audio ref={audioRef} loop>
        <source src="/Music2.mp3" type="audio/mp3" />
      </audio>

      <button
        onClick={toggleMusic}
        className="bg-cyan-400 text-black px-4 py-2 rounded-full shadow-lg hover:scale-105 transition"
      >
        {playing ? "🔊 Pause" : "🎵 Play"}
      </button>

    </div>
  );
}

export default MusicPlayer;
