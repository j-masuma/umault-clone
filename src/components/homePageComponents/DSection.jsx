import React, { useRef, useState } from "react";
import { GoUnmute } from "react-icons/go";
import { RiVolumeMuteFill } from "react-icons/ri";

function DSection() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const repeatCount = 8;

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
          <h1 className='text-3xl xs:text-4xl md:text-5xl text-center md:text-left lg:text-[64px] font-semibold px-2 mb-10'>
          
          YOU MIGHT HAVE TO HIRE <br />
           AN ASSISTANT TO HANDLE <br />
           ALL YOUR MAIL.
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-2/3 flex justify-center  md:h-[500px] lg:h-[650px]">
                      <video
                          ref={videoRef}
                          className=" rounded-sm shadow-md w-[80%] md:w-[50%] object-cover"
                          autoPlay
                          loop
                          muted={isMuted}
                      >
                          <source src="https://videos.umault.com/snagit.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                      </video>
                      {/* Mute/Unmute Button inside the video */}
                      <button
                          onClick={toggleMute}
                          className="flex h-fit w-fit top-1 bg-gray-800 text-white p-2 rounded-full shadow-md z-50 -ml-12 mt-2"
                      >
                          {isMuted ? 
                            (<RiVolumeMuteFill  className="w-4 h-4"/> 
                                              
                            ) : (
                              <GoUnmute className="w-4 h-4 " />  )
                        }
                      </button>
                    </div>
                    <p className="w-[80%] md:w-1/3 text-lg text-center md:text-left font-semibold">Watch out, when you hire Umault and create your company’s #1 top performing video… you become “the video person” in your company (we know, we’ve seen it happen).</p>
          </div>
        </div>
    </div>
  );
}

export default DSection;
