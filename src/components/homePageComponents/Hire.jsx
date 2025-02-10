import React from 'react'
import { motion } from "framer-motion";

function Hire() {
  return (
    <div className='flex flex-col gap-8 bg-black text-white py-10 px-5'>
        <div className='flex gap-8'>
            <p className='text-sm xs:text-[16px]'>
                HIRE
            </p>
            <p className='flex items-center text-sm xs:text-[16px]'>
                <span className='border-[7px] border-blue-800 rounded-full'></span>
                <span className='border-[7px] border-yellow-500 rounded-full mr-2'></span>
                UMAULT
            </p>
        </div>
        <div>
            <h1 className='text-3xl xs:text-4xl md:text-5xl text-center md:text-left lg:text-[64px] font-bold'>
                ENTERTAIN YOUR AUDIENCE.
            </h1>
            <h1 className='text-3xl xs:text-4xl md:text-5xl text-center md:text-left lg:text-[64px] font-bold'>
                SMASH MARKETING EXPECTATIONS.
            </h1>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-4'>
            <input 
            type="text" 
            placeholder='NAME' 
            className="w-[90%] xs:w-[80%] py-4 xs:py-8 md:w-1/3 md:aspect-square border border-gray-500 rounded-full bg-black text-center text-white hover:border-blue-800 outline-none"
            />
            <input type="text" placeholder='EMAIL' 
            className="w-[90%] xs:w-[80%] py-4 xs:py-8 md:w-1/3 md:aspect-square border border-gray-500 rounded-full bg-black text-center text-white hover:border-blue-800 outline-none"
            />
            <input type="text" placeholder='MESSAGE' 
            className="w-[90%] xs:w-[80%] py-4 xs:py-8 md:w-1/3 md:aspect-square border border-gray-500 rounded-full bg-black text-center text-white hover:border-blue-800 outline-none"
            />
        </div>
        <div>
            <button className="w-full bg-yellow-500 py-6 xs:py-8 md:py-9 lg:py-11 rounded-full text-black text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold relative overflow-hidden">
                <motion.span 
                    whileHover={{ scale: 0.5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="inline-block"
                >
                    LET'S DO THIS
                </motion.span>
            </button>
            <p className='p-5 pl-4 xs:pl-6 md:pl-12 inline-block items-center text-sm xs:text-[16px] md:lg font-semibold'>
               
                I agree with  
                <a href="/" className='xs:text-lg underline ml-2'>Umault's privacy policy</a>
                
            </p>
        </div>
    </div>
  )
}

export default Hire