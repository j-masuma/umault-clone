import React from 'react'
import { motion} from "framer-motion";

function BreakSection() {
    const repeatCount = 10;
  return (
    <>
        <div className='min-h-screen bg-black flex flex-col justify-around items-center'>
            <div className='text-gray-300 font-bold text-2xl mt-6'>AND</div>
            <div className='text-white font-semibold text-[6rem] xs:text-[8rem] md:text-[15rem] lg:text-[18rem] leading-relaxed'>
                BREAK
            </div>
        </div>

        {/* After page break reveal this section */}
        <div className='flex  bg-[#f2f2f2]'>
            <div className='bg-black  pl-4 xs:pl-5 md:pl-6'>
                <div className="mr-4 xs:mr-5 md:mr-6 ">
                {[...Array(repeatCount)].map((_, index) => (
                    <div key={index} className="w-8 xs:w-10 md:w-14 border-b-[2px] xs:border-b-[3px] md:border-b-[4px] border-white mb-16 xs:mb-20 md:mb-24"></div>
                ))}
                </div>
            </div>
            <div className="bg-[#f2f2f2] flex items-center justify-center w-full">
                <motion.h1
                    className="text-3xl text-center text-gray-500 font-semibold"
                    initial={{ scale: 0.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    THE BORING B2B VIDEO PATTERN
                </motion.h1>
            </div>
        </div>
    </>
  )
}

export default BreakSection







