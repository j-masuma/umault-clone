import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";





gsap.registerPlugin(ScrollTrigger);

function Performance() {
  const racesWrapperRef = useRef(null);
  const racesRef = useRef(null);

  useEffect(() => {
    let races = racesRef.current;
    let racesWrapper = racesWrapperRef.current;

    if (!races || !racesWrapper) return;

    let racesWidth = races.offsetWidth; 
    let viewportWidth = window.innerWidth;
    let scrollAmount = racesWidth - viewportWidth;

    gsap.to(races, {
      x: -scrollAmount, 
      ease: "none",
      scrollTrigger: {
        trigger: racesWrapper,
        start: "top top",
        end: () => `+=${scrollAmount + viewportWidth}`, 
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: false, 
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="overflow-hidden"> {/* Prevent horizontal scrolling */}
      <div ref={racesWrapperRef} className="relative w-screen h-screen flex items-center">
        <div ref={racesRef} className="flex h-full">
          <div className="w-screen h-full flex-shrink-0 flex items-center justify-left bg-[#f2f2f2]"><Results /></div>
          <div className="w-screen h-full flex-shrink-0 flex items-center justify-center bg-black"><Revenue /></div>
          <div className="w-screen h-full flex-shrink-0 flex items-center justify-center bg-black"><Views /></div>
          <div className="w-screen h-full flex-shrink-0 flex items-center justify-center bg-black pt-20 xs:pt-40 md:pt-52"><Top /></div>
        </div>
      </div>
    </div>
  );
}



const Results = () =>{
  const repeatCount = 7;
  return(
    <div className='flex  bg-[#f2f2f2]'>
      <div className='bg-black  pl-4 xs:pl-5 md:pl-6'>
        <div className="mr-4 xs:mr-5 md:mr-6 ">
          {[...Array(repeatCount)].map((_, index) => (
            <div key={index} className="w-8 xs:w-10 md:w-14 border-b-[2px] xs:border-b-[3px] md:border-b-[4px] border-white mb-16 xs:mb-20 md:mb-24"></div>
          ))}
        </div>
      </div>
      <div className='bg-[#f2f2f2] min-h-screen flex items-center'>
        <p className='text-3xl xs:text-5xl md:text-6xl lg:text-8xl font-[550] pl-8 md:leading-[5.5rem] lg:leading-[5.7rem]'>
          THE
          <br />
          RESULTS
          <br />
          CAN BE
          <br />
          PRETTY
          <br />
          SPECTACULAR
        </p>
      </div>
    </div>
  )
}


const Revenue= ()=>{
  return(
    <div className=" bg-black flex gap-2 xs:gap-4 md:gap-6 lg:gap-8 items-center justify-center py-10">
      <div className='grid grid-cols-4 gap-1 xs:gap-2 md:gap-4'>
        <motion.div 
        className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover2.png')`}}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}
        ></motion.div>
        <motion.div 
        className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-[#4D4D4D]'
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}
        ></motion.div>
        <motion.div 
        className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-white'
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}
        ></motion.div>
        <motion.div 
        className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-white'
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}
        ></motion.div>
        <motion.div 
        className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-[#4D4D4D]'
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}
        ></motion.div>
        <motion.div 
        className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-gray-300'
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }}
        ></motion.div>
        <motion.div 
        className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover3.png')`}}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }}
        ></motion.div>
        <motion.div 
        className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover4.png')`}}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }}
        ></motion.div>
        <motion.div 
        className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-[#4D4D4D]'
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.9 }}
        ></motion.div>
        <motion.div 
        className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-gray-300'
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.95 }}
        ></motion.div>
        <motion.div className='col-span-2 row-span-2 w-full h-full rounded-[50%] bg-cover bg-center' 
        style={{backgroundImage : `url('/assets/images/percent.svg')`}}
        initial={{ opacity: 0, y: 20 }} // Move M up separately
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        ></motion.div>
        <motion.div 
        className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover3.png')`}}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.1 }}
        ></motion.div>
        <motion.div 
        className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover4.png')`}}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.2 }}
        ></motion.div>
        
      </div>
      <div className='flex flex-col justify-between h-[200px] md:h-[400px] lg:h-[500px]'>
        <div class="text-[#3055FF] font-semibold text-sm xs:text-xl md:text-2xl lg:text-3xl"><p>REVENUE</p><p>INCREASE</p><p>BY</p></div>
        <motion.div 
            className="flex"
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
        >
          <span 
          className="flex items-center text-[#3055FF] -mb-4 text-[5rem] xs:text-[7rem] md:text-[14rem]  lg:text-[18rem] font-bold h-[150px] xs:h-[220px]  lg:h-[350px]"
          
          >
            7
            <motion.span 
            className='rotate-6 '
            initial={{ opacity: 0, y: 20 }} // Move M up separately
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            >0</motion.span>
            <motion.span 
            className='-rotate-0 xs:-rotate-6'
            initial={{ opacity: 0, y: 20 }} // Move M up separately
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            >0</motion.span>
          </span>
        </motion.div>
      </div>
    </div>
  )
}


const Views = () =>{
  return(
    <div className=" bg-black flex gap-2 items-center justify-center py-10">
      <div className='space-y-4'>
        <div className='grid grid-cols-4 gap-1 xs:gap-2 md:gap-4'>
          <motion.div 
          className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' 
          style={{backgroundImage : `url('/assets/images/hover5.png')`}}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}
          ></motion.div>
          <motion.div 
          className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}
          style={{backgroundImage : `url('/assets/images/hover1.png')`}}></motion.div>
          <motion.div
          className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' 
          style={{backgroundImage : `url('/assets/images/hover2.png')`}}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}
          ></motion.div>
          <motion.div 
          className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-white'
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}
          ></motion.div>
          <motion.div 
          className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-[#4D4D4D]'
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }}
          ></motion.div>
          <motion.div 
          className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-gray-300'
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }}
          ></motion.div>
          <motion.div 
          className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-[#4D4D4D]'
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }}
          ></motion.div>
          <motion.div 
          className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-gray-300'
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.9 }}
          ></motion.div>
        
        </div>
        <div className='grid grid-cols-4 gap-1 xs:gap-2 md:gap-4'>
          <motion.div 
          className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-[#4D4D4D]'
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.95 }}
          ></motion.div>
          <motion.div 
          className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-[#4D4D4D]'
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }}
          ></motion.div>
        </div>
        <div className='grid grid-cols-4 gap-1 xs:gap-2 md:gap-4'>
          <motion.div 
          className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover3.png')`}}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}
          ></motion.div>
          <motion.div 
          className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover4.png')`}}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}
          ></motion.div>
          
        </div>
         
      </div>
      <div className='flex flex-col h-[250px] md:h-[400px] lg:h-[500px] justify-between'>
        {/* <div class="text-green-500 font-semibold text-sm xs:text-xl md:text-2xl lg:text-3xl p-2">
          <p>VIEWS</p>
          <p className='ml-4 xs:ml-8 md:ml-16'>IN A</p>
          <p>SINGLE WEEK</p>
        </div> */}
        <div className="text-green-500 font-semibold text-sm xs:text-xl md:text-2xl lg:text-3xl p-2">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>VIEWS</motion.p>
          <motion.p className="ml-4 xs:ml-8 md:ml-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>IN A</motion.p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>SINGLE WEEK</motion.p>
        </div>
        <motion.div 
            className="flex "
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <span className="flex items-center md:-mb-4 lg:-mb-16 text-green-500 text-[6rem] xs:text-[7rem] md:text-[14rem] lg:text-[20rem] font-bold -space-x-1 -ml-28 xs:-ml-40 md:-ml-52 lg:-ml-64 h-[200px] xs:h-[220px] lg:h-[350px] relative">
              1
              <motion.span 
                className="rotate-6"
                initial={{ opacity: 0, y: 20 }} // Move M up separately
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                M
              </motion.span>
              <motion.span 
                className="-rotate-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                M
              </motion.span>
            </span>
          </motion.div>

      </div>
    </div>
  )
}


const Top =()=>{
  return(
    <div className=" bg-black flex flex-col gap-2 items-center justify-center py-10">
      <div className='flex justify-between items-end w-[90%] lg:w-[80%]'>
        <div className='grid grid-cols-4 gap-1 xs:gap-2 md:gap-4'>
          <motion.div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover5.png')`}}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}
          ></motion.div>
          <motion.div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover1.png')`}}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}
          ></motion.div>
          <motion.div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover2.png')`}}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}
          ></motion.div>
          <motion.div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-white'
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}
          ></motion.div>
          <motion.div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-[#4D4D4D]'
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}
          ></motion.div>
          <motion.div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-gray-300'
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }}
          ></motion.div>
          <motion.div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-[#4D4D4D]'
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }}
          ></motion.div>
          <motion.div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-gray-300'
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }}
          ></motion.div>
        
        </div>
        <motion.div 
        className="text-yellow-500 font-semibold text-sm xs:text-xl md:text-2xl lg:text-3xl p-2 items-end"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }}
        >
          <p>Performing Videos</p>
          
        </motion.div>
      </div>
      <div className='flex flex-col h-[250px] md:h-[400px] lg:h-[500px] justify-between'>
        
        <motion.div className="flex "
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        >
          <span className="flex items-center md:-mb-4 lg:-mb-16 text-yellow-500 text-[6rem] xs:text-[8rem] md:text-[14rem]  lg:text-[18rem] font-bold -space-x-1  h-[200px] xs:h-[200px]  lg:h-[350px] relative">
            #1 TOP
          </span>
        </motion.div>
      </div>
    </div>
  )
}
export {Performance, Revenue, Views, Top, Results}