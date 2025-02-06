import React, { useRef, useState } from "react";

function BSection() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div>
        <div className="w-[30%] px-4">
            <div>
                <p className="text-5xl font-bold">YOU</p>
                <p className="text-5xl font-bold">DESERVE</p>
                <p className="text-5xl font-bold">BETTER</p>
                <p className="text-5xl font-bold">THAN</p>
                <p className="text-5xl font-bold">A BORING</p>
                <p className="text-5xl font-bold">CORPORATE</p>
                <p className="text-5xl font-bold">VIDEO</p>
            </div>
        {/* Video */}
            <div className="flex">
            <video
                ref={videoRef}
                className="w-full max-w-lg rounded-md shadow-md"
                autoPlay
                loop
                muted={isMuted}
            >
                <source src="https://videos.umault.com/premiumbeat.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Mute/Unmute Button inside the video */}
            <button
                onClick={toggleMute}
                className="flex h-fit w-fit top-1 bg-gray-800 text-white p-2 rounded-full shadow-md z-50 -ml-12 mt-2"
            >
                {isMuted ? "🔇" : "🔊"}
            </button>
            </div>
        </div>
    </div>
  );
}

export default BSection;
