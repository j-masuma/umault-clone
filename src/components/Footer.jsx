import React from 'react'
import { FaLinkedin, FaYoutube } from 'react-icons/fa'
import { RiInstagramFill, RiTwitterXFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-black text-white pt-24 px-2 pb-16'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='flex flex-col justify-between px-2'>
                <div>
                    <p className='mb-3 text-center md:text-left text-sm xs:text-lg md:text-xl text-[#ffffff80]'>PURE GOLD NO SPAM (PINKY PROMISE)</p>
                    <h4 className='mb-9 text-center md:text-left text-xl xs:text-2xl md:text-3xl font-bold text-[#fff]'>OUR MONTHLY NEWSLETTER</h4>
                </div>
                <div className='mb-12'>
                    <div className="flex items-center  border border-gray-400 rounded-sm overflow-hidden w-full max-w-md">
                        <input
                            type="email"
                            placeholder="Email"
                            className="flex-1 py-2 px-3 xs:py-3 xs:px-4 bg-black text-gray-300 focus:outline-none w-[90%]"
                        />
                        <button className="flex border-2 border-gray-400 bg-yellow-500 text-black py-2 px-3 xs:py-3 xs:px-4 hover:bg-yellow-600 rounded-l-none rounded-r-sm transition">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>
            <div className='w-full md:w-3/5 lg:w-1/3 flex flex-wrap justify-around md:justify-center'>
                <div className='md:w-[47%]'>
                    <div className='flex items-center gap-2 mb-12 text-sm xs:text-[16px] hover:text-gray-400'>
                        <span className='border-[3px] xs:border-[4px] md:border-[5px] lg:border-[7px] border-white rounded-full'></span>
                        <Link>About</Link>
                    </div>
                    <div className='flex items-center gap-2 mb-12 text-sm xs:text-[16px] hover:text-gray-400'>
                        <span className='border-[3px] xs:border-[4px] md:border-[5px] lg:border-[7px] border-white rounded-full'></span>
                        <Link>Client work</Link>
                    </div>
                    <div className='flex items-center gap-2 mb-12 text-sm xs:text-[16px] hover:text-gray-400'>
                        <span className='border-[3px] xs:border-[4px] md:border-[5px] lg:border-[7px] border-white rounded-full'></span>
                        <Link>Umault's ads</Link>
                    </div>
                </div>
                <div className='md:w-[47%]'>
                    <div className='flex items-center gap-2 mb-12 text-sm xs:text-[16px] hover:text-gray-400'>
                        <span className='border-[3px] xs:border-[4px] md:border-[5px] lg:border-[7px] border-white rounded-full'></span>
                        <Link>Podcast</Link>
                    </div>
                    <div className='flex items-center gap-2 mb-12 text-sm xs:text-[16px] hover:text-gray-400'>
                        <span className='border-[3px] xs:border-[4px] md:border-[5px] lg:border-[7px] border-white rounded-full'></span>
                        <Link>Privacy Policy</Link>
                    </div>
                    <div className='flex items-center gap-2 mb-12 text-sm xs:text-[16px] hover:text-gray-400'>
                        <span className='border-[3px] xs:border-[4px] md:border-[5px] lg:border-[7px] border-white rounded-full'></span>
                        <Link>Insights</Link>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='flex flex-col gap-8 md:flex-row justify-between items-center text-center text-[#ffffff80] px-2 text-xs font-semibold mt-8'>
            <div>MADE WITH LOVE AND PIZZA IN CHICAGO</div>
            <div>DESIGNED AND BUILT WITH 💜 BY REFOKUS</div>
            <div className='flex gap-6'>
                <Link className='hover:text-gray-300'>
                    <RiTwitterXFill size={25}/>
                </Link>
                <Link className='hover:text-gray-300'>
                    <FaYoutube size={25}/>
                </Link>
                <Link className='hover:text-gray-300'>
                    <RiInstagramFill size={25}/>
                </Link>
                <Link className='hover:text-gray-300'>
                    <FaLinkedin size={25}/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer