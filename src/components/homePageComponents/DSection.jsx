// import React, { useRef, useState } from "react";
// import { GoUnmute } from "react-icons/go";
// import { RiVolumeMuteFill } from "react-icons/ri";

// function DSection() {
//   const videoRef = useRef(null);
//   const [isMuted, setIsMuted] = useState(true);

//   const repeatCount = 8;

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !videoRef.current.muted;
//       setIsMuted(videoRef.current.muted);
//     }
//   };

//   return (
    
//     <div className="flex pl-4 xs:pl-5 md:pl-6 pt-20 bg-black">
//       <div className="mr-4 xs:mr-5 md:mr-6">
//         {[...Array(repeatCount)].map((_, index) => (
//           <div key={index} className="w-8 xs:w-10 md:w-14 border-b-[2px] xs:border-b-[3px] md:border-b-[4px] border-white mb-16 xs:mb-20 md:mb-24"></div>
//         ))}
//       </div>
//         <div className="w-full bg-[#f2f2f2] py-12  xs:pr-4 ">
//           <h1 className='text-3xl xs:text-4xl md:text-5xl text-center md:text-left lg:text-[64px] font-semibold px-2 mb-10'>
          
//           YOU MIGHT HAVE TO HIRE <br />
//            AN ASSISTANT TO HANDLE <br />
//            ALL YOUR MAIL.
//           </h1>
//           <div className="flex flex-col md:flex-row items-center gap-8">
//                     <div className="w-full md:w-2/3 flex justify-center  md:h-[500px] lg:h-[650px]">
//                       <video
//                           ref={videoRef}
//                           className=" rounded-sm shadow-md w-[80%] md:w-[50%] object-cover"
//                           autoPlay
//                           loop
//                           muted={isMuted}
//                       >
//                           <source src="https://videos.umault.com/snagit.mp4" type="video/mp4" />
//                           Your browser does not support the video tag.
//                       </video>
//                       {/* Mute/Unmute Button inside the video */}
//                       <button
//                           onClick={toggleMute}
//                           className="flex h-fit w-fit top-1 bg-gray-800 text-white p-2 rounded-full shadow-md z-50 -ml-12 mt-2"
//                       >
//                           {isMuted ? 
//                             (<RiVolumeMuteFill  className="w-4 h-4"/> 
                                              
//                             ) : (
//                               <GoUnmute className="w-4 h-4 " />  )
//                         }
//                       </button>
//                     </div>
//                     <p className="w-[80%] md:w-1/3 text-lg text-center md:text-left font-semibold">Watch out, when you hire Umault and create your company’s #1 top performing video… you become “the video person” in your company (we know, we’ve seen it happen).</p>
//           </div>
//         </div>
//     </div>
//   );
// }

// export default DSection;





import React, { useEffect, useRef, useState } from "react";
import { GoUnmute } from "react-icons/go";
import { RiVolumeMuteFill } from "react-icons/ri";
import { motion, useInView } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

function DSection() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false, margin: "-100px 0px" });

  const repeatCount = 8;

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };
  
  return (
    <motion.div
      ref={sectionRef}
      className="flex pl-4 xs:pl-5 md:pl-6 pt-20 bg-black"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mr-4 xs:mr-5 md:mr-6">
        {[...Array(repeatCount)].map((_, index) => (
          <motion.div
            key={index}
            className="w-8 xs:w-10 md:w-14 border-b-[2px] xs:border-b-[3px] md:border-b-[4px] border-white mb-16 xs:mb-20 md:mb-24"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          ></motion.div>
        ))}
      </div>
      <motion.div
        className="w-full bg-[#f2f2f2] py-12 xs:pr-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl xs:text-4xl md:text-5xl text-center md:text-left lg:text-[64px] font-semibold px-2 mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          YOU MIGHT HAVE TO HIRE <br />
          AN ASSISTANT TO HANDLE <br />
          ALL YOUR MAIL.
        </motion.h1>
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="w-full md:w-2/3 flex justify-center md:h-[500px] lg:h-[650px]">
            <motion.video
              ref={videoRef}
              className="rounded-sm shadow-md w-[80%] md:w-[50%] object-cover"
              autoPlay
              loop
              muted={isMuted}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <source
                src="https://videos.umault.com/snagit.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </motion.video>
            <motion.button
              onClick={toggleMute}
              className="flex h-fit w-fit top-1 bg-gray-800 text-white p-2 rounded-full shadow-md z-50 -ml-12 mt-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {isMuted ? (
                <RiVolumeMuteFill className="w-4 h-4" />
              ) : (
                <GoUnmute className="w-4 h-4 " />
              )}
            </motion.button>
          </div>
          <AnimatedText/>
      
        </motion.div>
      </motion.div>
    </motion.div>
  );
}



gsap.registerPlugin(ScrollTrigger);

export function AnimatedText() {
  const textRef = useRef(null);

  const text =
    "Watch out, when you hire Umault and create your company’s #1 top performing video… you become “the video person” in your company (we know, we’ve seen it happen).";

  const words = text.split(" ");

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { color: "gray" },
        {
          color: "black",
          stagger: 0.1, 
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 70%", 
            end: "top 30%", 
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <p
      ref={textRef}
      className="w-[80%] md:w-1/3 text-lg text-center md:text-left font-medium"
      style={{ display: "flex", flexWrap: "wrap", gap: "5px" }} 
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block">
          {word}
        </span>
      ))}
    </p>
  );
}



export default DSection;
