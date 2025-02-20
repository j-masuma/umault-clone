import React from "react";
import { motion } from "framer-motion";

function CSection() {

  return (
  <div className="px-5 space-y-4 py-20 bg-black">
    <button className="w-full bg-blue-600 py-6 xs:py-8 md:py-9 lg:py-11 rounded-full text-black text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-semibold relative overflow-hidden">
    <motion.span 
                    whileHover={{ scale: 0.5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="inline-block"
                >
      GET ATTENTION
    </motion.span>
    </button>
    <button className="w-full bg-yellow-500 py-6 xs:py-8 md:py-9 lg:py-11 rounded-full text-black text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-semibold relative overflow-hidden">
      <motion.span 
                    whileHover={{ scale: 0.5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="inline-block"
                >
      HARNESS HUMOR
      </motion.span>
    </button>
    <button className="w-full bg-red-500 py-6 xs:py-8 md:py-9 lg:py-11 rounded-full text-black text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-semibold relative overflow-hidden">
      <motion.span 
                    whileHover={{ scale: 0.5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="inline-block"
                >
      INSPIRE ENGAGEMENT
      </motion.span>
    </button>
    <button className="w-full bg-green-600 py-6 xs:py-8 md:py-9 lg:py-11 rounded-full text-black text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-semibold relative overflow-hidden">
      <motion.span 
                    whileHover={{ scale: 0.5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="inline-block"
                >
      GENERATE EXCITEMENT
      </motion.span>
    </button>
    
  </div>
  );
}

export default CSection;





