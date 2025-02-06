import React, { useState } from "react";
import { motion } from "framer-motion";

function CSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Define animation: Only the center part should move up and down
  const bounceAnimation = {
    y: [0, -10, 0], // Moves up and down
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      repeat: 1, // Ensures a single bounce effect
    },
  };

  return (
    <div className="px-5 space-y-4">
      {/* First Button */}
      <motion.button
        className="w-full bg-yellow-500 py-11 rounded-full text-black text-5xl font-bold relative overflow-hidden"
        onHoverStart={() => setHoveredIndex(0)}
        onHoverEnd={() => setHoveredIndex(null)}
        animate={hoveredIndex === 0 ? bounceAnimation : {}}
      >
        <motion.span className="inline-block" animate={hoveredIndex === 0 ? bounceAnimation : {}}>
          LET'S DO THIS
        </motion.span>
      </motion.button>

      {/* Second Button */}
      <motion.button
        className="w-full bg-yellow-500 py-11 rounded-full text-black text-5xl font-bold relative overflow-hidden"
        onHoverStart={() => setHoveredIndex(1)}
        onHoverEnd={() => setHoveredIndex(null)}
        animate={hoveredIndex === 1 || hoveredIndex === 0 ? bounceAnimation : {}}
      >
        <motion.span className="inline-block" animate={hoveredIndex === 1 || hoveredIndex === 0 ? bounceAnimation : {}}>
          LET'S DO THIS
        </motion.span>
      </motion.button>

      {/* Third Button */}
      <motion.button
        className="w-full bg-yellow-500 py-11 rounded-full text-black text-5xl font-bold relative overflow-hidden"
        onHoverStart={() => setHoveredIndex(2)}
        onHoverEnd={() => setHoveredIndex(null)}
        animate={hoveredIndex === 2 || hoveredIndex === 1 ? bounceAnimation : {}}
      >
        <motion.span className="inline-block" animate={hoveredIndex === 2 || hoveredIndex === 1 ? bounceAnimation : {}}>
          LET'S DO THIS
        </motion.span>
      </motion.button>

      {/* Fourth Button */}
      <motion.button
        className="w-full bg-yellow-500 py-11 rounded-full text-black text-5xl font-bold relative overflow-hidden"
        onHoverStart={() => setHoveredIndex(3)}
        onHoverEnd={() => setHoveredIndex(null)}
        animate={hoveredIndex === 3 || hoveredIndex === 2 ? bounceAnimation : {}}
      >
        <motion.span className="inline-block" animate={hoveredIndex === 3 || hoveredIndex === 2 ? bounceAnimation : {}}>
          LET'S DO THIS
        </motion.span>
      </motion.button>
    </div>
  );
}

export default CSection;





