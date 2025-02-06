import React, { useState } from "react";

const videos = {
  PacBio: "https://videos.umault.com/973_-_pacbio_-_vega_launch_final_110124%20(1080p).mp4",
  Matomo: "https://videos.umault.com/Matomo-Googleheimer.mp4",
  Dell: "https://videos.umault.com/dell-connectedPC.mp4",
  PremiumBeat: "https://videos.umault.com/premiumbeat.mp4",
};

const HeroSection = () => {
  const [videoSrc, setVideoSrc] = useState(videos.PacBio);

  return (
    <div className="relative w-full h-screen bg-gray-900 text-white overflow-hidden ">
      {/* Background Video */}
      <video
        key={videoSrc}
        src={videoSrc}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute top-1/4 left-16 text-4xl font-bold">
        <span className="block">BOLD CREATIVE</span>
        <span className="block">THAT SHATTERS</span>
        <span className="block">MARKETING FORMULAS</span>
      </div>

      {/* Sidebar Menu */}
      <div className="absolute right-16 top-1/3 space-y-4 text-lg font-semibold">
        {Object.keys(videos).map((key) => (
          <div
            key={key}
            className={`cursor-pointer border-b-2 border-transparent hover:border-white transition-opacity ${
              videoSrc === videos[key] ? "border-white opacity-100" : "opacity-70"
            }`}
            onClick={() => setVideoSrc(videos[key])}
          >
            {key}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
