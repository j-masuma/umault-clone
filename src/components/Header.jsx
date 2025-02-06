import React, { useState } from 'react'
import { GoArrowUpRight } from 'react-icons/go'

function Header() {
    const [isMenuOpen, setIsMenuOpen]=useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }
    
  return (
    <header>
        <nav className='flex justify-between items-center px-4 pt-3 fixed top-0 w-full z-10'>
            <div className='flex gap-1 bg-[#666666e6] p-1 rounded-md'>
                <button className='flex items-center gap-1 border-2 border-white bg-white px-3 py-2  md:px-4 md:py-3 rounded-md shadow-md '>
                    <img src="/assets/images/logo.svg" className='w-[60px] h-[20px] md:w-[100px] md:h-[30px]' alt="" />
                </button>
                <button className='hidden md:flex items-center gap-1 border-2 border-white bg-white text-xs px-2 py-3 rounded-md shadow-md transform transition-transform duration-300 hover:border-yellow-500 hover:bg-yellow-500'>
                    Portfolio
                </button>
                <button className='hidden md:flex items-center gap-1 border-2 border-white bg-white text-xs px-2 py-3 rounded-md shadow-md transform transition-transform duration-300 hover:border-yellow-500 hover:bg-yellow-500'>
                    About
                </button>
                <button className='hidden md:flex items-center gap-1 border-2 border-white bg-white text-xs px-2 py-3 rounded-md shadow-md transform transition-transform duration-300 hover:border-yellow-500 hover:bg-yellow-500'>
                    Insights
                </button>
            </div>


            {/* cta button */}
            <div className='hidden md:flex bg-[#666666e6] p-1 rounded-md transform transition-transform duration-300 hover:scale-105'>
                <button className='flex items-center gap-1 border-2 border-yellow-500 bg-yellow-500 hover:border-white hover:bg-white px-4 py-3 rounded-md shadow-md text-sm'>
                    Let's do this
                
                </button>
            </div>

           
            <button
                onClick={toggleMenu}
                className="md:hidden text-yellow-500 focus:outline-none"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                />
                </svg>
            </button>
                
            
        </nav>

         {/* Mobile Menu */}
         {isMenuOpen && (
            <div className="md:hidden block bg-white p-4 py-12 rounded-xl shadow-md absolute top-[-50px] left-0 w-[50%] mt-12 z-10">
                <div className="flex flex-col space-y-4 px-4 py-2">
                    <a
                        href="/"
                        className="text-gray-600 hover:text-yellow-500"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Portfolio
                    </a>
                    <a
                        href="/"
                        className="text-gray-600 hover:text-yellow-500"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </a>
                    <a
                        href="/"
                        className="text-gray-600 hover:text-yellow-500"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Insights
                    </a>
                    
                    <button className='w-fit flex items-center gap-1 border-2 -ml-2 border-white bg-white hover:border-yellow-500 hover:bg-yellow-500 px-2 py-1 rounded-full shadow-lg '>
                        Free Trial
                        <span className='border-2 border-gray-800  bg-gray-800 rounded-[50%] p-1 text-white'>
                            <GoArrowUpRight size={20}/>
                        </span>
                    
                    </button>
                </div>
            </div>
        )}
    
    </header>
  )
}

export default Header









