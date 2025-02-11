import React, { useRef, useState } from "react";
import { GoUnmute } from "react-icons/go";
import { RiVolumeMuteFill } from "react-icons/ri";
import FloatingImages from "./Floating";

function BSection() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const repeatCount = 15;

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    
    <div className="flex pl-4 xs:pl-5 md:pl-6 pt-20 bg-black">
      <div className="mr-4 xs:mr-5 md:mr-6">
        {[...Array(repeatCount)].map((_, index) => (
          <div key={index} className="w-8 xs:w-10 md:w-14 border-b-[2px] xs:border-b-[3px] md:border-b-[4px] border-white mb-16 xs:mb-20 md:mb-24"></div>
        ))}
      </div>
        <div className="w-full bg-[#f2f2f2] py-12  xs:pr-4 ">
          <div >
            <div className="mb-60 flex flex-col md:flex-row justify-between">
              <div className="relative h-[250px] md:h-[500px] w-[100%] md:w-[60%] lg:w-[70%] z-50">
                <FloatingImages/>
              </div>
              <div className=" w-[100%] md:w-[40%] lg:w-[30%] flex flex-col xs:flex-row md:flex-col items-start xs:items-center md:items-start pl-4 justify-start xs:justify-center ">
                  <div className="mb-4">
                      <p className="text-2xl md:text-3xl lg:text-5xl font-bold">YOU</p>
                      <p className="text-2xl md:text-3xl lg:text-5xl font-bold">DESERVE</p>
                      <p className="text-2xl md:text-3xl lg:text-5xl font-bold">BETTER</p>
                      <p className="text-2xl md:text-3xl lg:text-5xl font-bold">THAN</p>
                      <p className="text-2xl md:text-3xl lg:text-5xl font-bold">A BORING</p>
                      <p className="text-2xl md:text-3xl lg:text-5xl font-bold">CORPORATE</p>
                      <p className="text-2xl md:text-3xl lg:text-5xl font-bold">VIDEO</p>
                  </div>
              {/* Video */}
                  <div className="flex justify-start xs:justify-center md:justify-start">
                    <video
                        ref={videoRef}
                        className=" rounded-sm shadow-md w-[90%] xs:w-[90%]"
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
            <div className="flex flex-col text-center">
              <p className="text-md xs:text-xl md:text-2xl font-semibold mb-8">MAKE YOUR AUDIENCE SAY</p>


              <h1 className="inline-block text-3xl xs:text-5xl md:text-6xl  lg:text-8xl font-bold align-middle items-center">
                “I DIDN'T REALIZE I WAS WATCHING AN AD... I JUST
                <div className="inline-flex relative">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="inline-flex h-8 xs:h-12 md:h-20 mx-2 rounded-sm"
                  >
                    <source
                      src="https://videos.umault.com/umault-dont%20make%20a%20normal%20video.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support HTML5 videos.
                  </video>
                  {/* Mute/Unmute Icon */}
                  <button
                    onClick={toggleMute}
                    className="absolute top-1 right-3 p-1 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? (
                      <RiVolumeMuteFill  className="w-2 h-2 md:w-4 md:h-4"/> 
                      
                    ) : (
                      <GoUnmute className="w-2 h-2 md:w-4 md:h-4" />
                    )}
                  </button>
                </div>
                MUTED ICON WANTED TO KEEP WATCHING”
              </h1>
            </div>
          </div>
        </div>
    </div>
  );
}

export default BSection;
