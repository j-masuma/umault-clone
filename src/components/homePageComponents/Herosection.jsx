// import React, { useRef, useState, useEffect } from "react";
// import { GoUnmute } from "react-icons/go";
// import { RiVolumeMuteFill } from "react-icons/ri";
// import { motion} from "framer-motion";

// const videos = {
//   PacBio: "https://videos.umault.com/973_-_pacbio_-_vega_launch_final_110124%20(1080p).mp4",
//   Matomo: "https://videos.umault.com/Matomo-Googleheimer.mp4",
//   Dell: "https://videos.umault.com/dell-connectedPC.mp4",
//   PremiumBeat: "https://videos.umault.com/premiumbeat.mp4",
// };

// const HeroSection = () => {
//   const [videoSrc, setVideoSrc] = useState(videos.PacBio);
//   const videoRef = useRef(null);
//   const [isMuted, setIsMuted] = useState(true);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     setProgress(0); 
//   }, [videoSrc]);

  
//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !videoRef.current.muted;
//       setIsMuted(videoRef.current.muted);
//     }
//   };

//   const handleTimeUpdate = () => {
//     if (videoRef.current) {
//       const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
//       setProgress(currentProgress);
//     }
//   };

//   return (
//     <div className="relative w-full h-screen bg-black text-white overflow-hidden items-center">
//       {/* Background Video */}
//       <video
//         ref={videoRef}
//         key={videoSrc}
//         src={videoSrc}
//         autoPlay
//         loop
//         muted={isMuted}
//         className=" w-full h-full object-cover"
//         onTimeUpdate={handleTimeUpdate} 
//       />

//       <div className="w-[80%]">
//         {/* Overlay Text       */}
//           <motion.div 
//           className=" absolute top-1/4 left-3 md:left-4 lg:left-16 text-lg xs:text-xl md:text-2xl lg:text-3xl font-bold z-20"
//           initial={{ opacity: 0, y: 50 }} 
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.6 }}
//           viewport={{ once: false, amount: 0.2 }}
//           >
//             <span className="block">BOLD CREATIVE</span>
//             <span className="block ml-20 xs:ml-24">THAT SHATTERS</span>
//             <span className="block">MARKETING FORMULAS</span>
//           </motion.div>

//           {/* Sidebar Menu */}
//           <div className="absolute right-3  md:right-4 lg:right-16 top-1/2 md:top-1/3 space-y-4 xs:space-y-6 md:space-y-8  font-semibold w-fit">
//             {Object.keys(videos).map((key) => (
//               <div
//                 key={key}
//                 className="cursor-pointer group"
//                 onClick={() => setVideoSrc(videos[key])}
//               >
//                 {/* Row for mute button and video name */}
//                 <div className="flex  items-center gap-2 xs:gap-3 md:gap-4">
//                   {/* Fixed width container for mute button to avoid shifting */}
//                   <div className="w-8 flex justify-center">
//                     {videoSrc === videos[key] && (
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation(); // Prevents changing video when clicking the button
//                           toggleMute();
//                         }}
//                         className="bg-gray-800 text-white p-1 rounded-full shadow-md"
//                       >
//                         {isMuted ? <RiVolumeMuteFill /> : <GoUnmute />
//                         }
//                       </button>
//                     )}
//                   </div>
//                   <div>
//                     <span className="whitespace-nowrap text-md xs:text-lg md:text-xl lg:text-2xl">{key}</span>
                  

//                     {/* Progress Bar - Only visible for active video */}
//                     {videoSrc === videos[key] && (
//                       <div className="w-[150px] xs:w-[180px] md:w-[250px] h-1 bg-gray-700 rounded-md mt-1 overflow-hidden">
//                         <div
//                           className="h-full bg-white rounded-md transition-all duration-300"
//                           style={{ width: `${progress}%` }}
//                         ></div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//       </div>
//     </div>
//   );
// };





// export default HeroSection



import React, { useRef, useState, useEffect } from "react";
import { GoUnmute } from "react-icons/go";
import { RiVolumeMuteFill } from "react-icons/ri";
import { motion } from "framer-motion";

const videos = {
  PacBio: "https://videos.umault.com/973_-_pacbio_-_vega_launch_final_110124%20(1080p).mp4",
  Matomo: "https://videos.umault.com/Matomo-Googleheimer.mp4",
  Dell: "https://videos.umault.com/dell-connectedPC.mp4",
  PremiumBeat: "https://videos.umault.com/premiumbeat.mp4",
};

const HeroSection = () => {
  const [videoSrc, setVideoSrc] = useState(videos.PacBio);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    setProgress(0);
  }, [videoSrc]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Merging Circles Animation */}
      {showAnimation && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 3, delay: 1 }}
          onAnimationComplete={() => setShowAnimation(false)}
        >
          <motion.div
            className="absolute w-40 h-40 bg-white rounded-full opacity-20"
            initial={{ x: -100, scale: 1 }}
            animate={{ x: 0, scale: 2 }}
            transition={{ duration: 2 }}
          />
          <motion.div
            className="absolute w-40 h-40 bg-white rounded-full opacity-20"
            initial={{ x: 100, scale: 1 }}
            animate={{ x: 0, scale: 2 }}
            transition={{ duration: 2 }}
          />
          <motion.div
            className="absolute w-60 h-60 bg-white rounded-full opacity-30"
            initial={{ scale: 0 }}
            animate={{ scale: 3 }}
            transition={{ duration: 2 }}
          />
        </motion.div>
      )}

      {/* Background Video */}
      <video
        ref={videoRef}
        key={videoSrc}
        src={videoSrc}
        autoPlay
        loop
        muted={isMuted}
        className="w-full h-full object-cover"
        onTimeUpdate={handleTimeUpdate}
      />

      <div className="w-[80%]">
        {/* Overlay Text */}
        <motion.div
          className="absolute top-1/4 left-3 md:left-4 lg:left-16 text-lg xs:text-xl md:text-2xl lg:text-3xl font-bold z-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <span className="block">BOLD CREATIVE</span>
          <span className="block ml-20 xs:ml-24">THAT SHATTERS</span>
          <span className="block">MARKETING FORMULAS</span>
        </motion.div>

        {/* Sidebar Menu */}
        <div className="absolute right-3 md:right-4 lg:right-16 top-1/2 md:top-1/3 space-y-4 xs:space-y-6 md:space-y-8 font-semibold w-fit">
          {Object.keys(videos).map((key) => (
            <div
              key={key}
              className="cursor-pointer group"
              onClick={() => setVideoSrc(videos[key])}
            >
              <div className="flex items-center gap-2 xs:gap-3 md:gap-4">
                <div className="w-8 flex justify-center">
                  {videoSrc === videos[key] && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute();
                      }}
                      className="bg-gray-800 text-white p-1 rounded-full shadow-md"
                    >
                      {isMuted ? <RiVolumeMuteFill /> : <GoUnmute />}
                    </button>
                  )}
                </div>
                <div>
                  <span className="whitespace-nowrap text-md xs:text-lg md:text-xl lg:text-2xl">
                    {key}
                  </span>

                  {videoSrc === videos[key] && (
                    <div className="w-[150px] xs:w-[180px] md:w-[250px] h-1 bg-gray-700 rounded-md mt-1 overflow-hidden">
                      <div
                        className="h-full bg-white rounded-md transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;







