import React from 'react'
import { motion } from "framer-motion";

function Hire() {
  return (
    <div className='flex flex-col gap-8 bg-black text-white py-10 px-5'>
        <div className='flex gap-8'>
            <p>
                HIRE
            </p>
            <p className='flex items-center'>
                <span className='border-[7px] border-blue-800 rounded-full'></span>
                <span className='border-[7px] border-yellow-500 rounded-full mr-2'></span>
                UMAULT
            </p>
        </div>
        <div>
            <h1 className='text-6xl font-bold'>
                ENTERTAIN YOUR AUDIENCE.
            </h1>
            <h1 className='text-6xl font-bold'>
                SMASH MARKETING EXPECTATIONS.
            </h1>
        </div>
        <div className='flex gap-4'>
            <input 
            type="text" 
            placeholder='NAME' 
            className="w-1/3 aspect-square border border-gray-500 rounded-full bg-black text-center text-white hover:border-blue-800 outline-none"
            />
            <input type="text" placeholder='EMAIL' 
            className="w-1/3 aspect-square border border-gray-500 rounded-full bg-black text-center text-white hover:border-blue-800 outline-none"
            />
            <input type="text" placeholder='MESSAGE' 
            className="w-1/3 aspect-square border border-gray-500 rounded-full bg-black text-center text-white hover:border-blue-800 outline-none"
            />
        </div>
        <div>
            <button className="w-full bg-yellow-500 py-11 rounded-full text-black text-5xl font-bold relative overflow-hidden">
                <motion.span 
                    whileHover={{ scale: 0.5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="inline-block"
                >
                    LET'S DO THIS
                </motion.span>
            </button>
            <p className='p-5 pl-12 flex gap-1 items-center font-semibold'>
               
                I agree with  
                <a href="/" className='text-lg underline'>Umault's privacy policy</a>
                
            </p>
        </div>
    </div>
  )
}

export default Hire