import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";

// function CSection() {

//   return (
//   <div className="px-5 space-y-4 py-20 bg-black">
//     <button className="w-full bg-blue-600 py-6 xs:py-8 md:py-9 lg:py-11 rounded-full text-black text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-semibold relative overflow-hidden">
//     <motion.span 
//                     whileHover={{ scale: 0.5 }}
//                     transition={{ type: "spring", stiffness: 300, damping: 10 }}
//                     className="inline-block"
//                 >
//       GET ATTENTION
//     </motion.span>
//     </button>
//     <button className="w-full bg-yellow-500 py-6 xs:py-8 md:py-9 lg:py-11 rounded-full text-black text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-semibold relative overflow-hidden">
//       <motion.span 
//                     whileHover={{ scale: 0.5 }}
//                     transition={{ type: "spring", stiffness: 300, damping: 10 }}
//                     className="inline-block"
//                 >
//       HARNESS HUMOR
//       </motion.span>
//     </button>
//     <button className="w-full bg-red-500 py-6 xs:py-8 md:py-9 lg:py-11 rounded-full text-black text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-semibold relative overflow-hidden">
//       <motion.span 
//                     whileHover={{ scale: 0.5 }}
//                     transition={{ type: "spring", stiffness: 300, damping: 10 }}
//                     className="inline-block"
//                 >
//       INSPIRE ENGAGEMENT
//       </motion.span>
//     </button>
//     <button className="w-full bg-green-600 py-6 xs:py-8 md:py-9 lg:py-11 rounded-full text-black text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-semibold relative overflow-hidden">
//       <motion.span 
//                     whileHover={{ scale: 0.5 }}
//                     transition={{ type: "spring", stiffness: 300, damping: 10 }}
//                     className="inline-block"
//                 >
//       GENERATE EXCITEMENT
//       </motion.span>
//     </button>
    
//   </div>
//   );
// }








const animationUrls = [
  "https://cdn.prod.website-files.com/65c4b4da44785bd5a7210c55/65f052ed1f445b7cd63679eb_easteregg_anim_01.json",
  "https://cdn.prod.website-files.com/65c4b4da44785bd5a7210c55/65f053056850193a113de505_easteregg_anim_02.json",
  "https://cdn.prod.website-files.com/65c4b4da44785bd5a7210c55/65f05312645e9d2415f40dd8_easteregg_anim_03.json",
  "https://cdn.prod.website-files.com/65c4b4da44785bd5a7210c55/65f0531e75f09196f63e8ad8_easteregg_anim_04.json"
];

const ButtonStack = () => {
  const [animations, setAnimations] = useState([]);
  const [playStates, setPlayStates] = useState({});
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const fetchAnimations = async () => {
      try {
        const responses = await Promise.all(animationUrls.map(url => fetch(url)));
        const jsonData = await Promise.all(responses.map(res => res.json()));
        setAnimations(jsonData);
      } catch (error) {
        console.error("Error fetching animations:", error);
      }
    };

    fetchAnimations();
  }, []);

  const handleMouseEnter = (index) => {
    setPlayStates((prev) => ({ ...prev, [index]: true }));
    setProgress((prev) => ({ ...prev, [index]: 0 })); // Reset progress to restart animation
  };

  const handleMouseLeave = (index) => {
    setPlayStates((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <div className="w-full flex flex-col items-center py-20 sm:py-24 md:py-32 lg:py-44  bg-black">
      {animations.length > 0 ? (
        animations.map((data, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="px-2 md:px-4 -mb-16 sm:-mb-20 md:-mb-28 lg:-mb-40"
          >
            <Lottie
              animationData={data}
              loop={false}
              play={playStates[index] || false}
              goTo={progress[index] || 0} // Ensures the animation restarts on hover
            />
          </div>
        ))
      ) : (
        <p>Loading animations...</p>
      )}
    </div>
  );
};


export default ButtonStack;





