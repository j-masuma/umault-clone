

import React from 'react'

function Performance() {
  return (
    <div className='bg-black'>
      <div className='flex'>
        <div className='flex flex-wrap gap-3 w-[40%] justify-center'>
          <img 
          src="/assets/images/hover1.png" 
          className='rounded-full w-24 h-24 object-center'
          alt="" 
          />
          <img 
          src="/assets/images/hover1.png" 
          className='rounded-full w-24 h-24 object-center'
          alt="" 
          />
          <img 
          src="/assets/images/hover1.png" 
          className='rounded-full w-24 h-24 object-center'
          alt="" 
          />
          <img 
          src="/assets/images/hover1.png" 
          className='rounded-full w-24 h-24 object-center'
          alt="" 
          />
          <img 
          src="/assets/images/hover1.png" 
          className='rounded-full w-24 h-24 object-center'
          alt="" 
          />
          <img 
          src="/assets/images/hover1.png" 
          className='rounded-full w-24 h-24 object-center'
          alt="" 
          />
          <img 
          src="/assets/images/hover1.png" 
          className='rounded-full w-24 h-24 object-center'
          alt="" 
          />
          <img 
          src="/assets/images/hover1.png" 
          className='rounded-full w-24 h-24 object-center'
          alt="" 
          />
        </div>
        <div>
          <p className='text-blue-800 text-2xl font-semibold'>
            REVENUE <br />
            INCREASE <br />
            BY
          </p>
        </div>
      </div>

      <div className='flex items-center mt-3'>
        <div className='flex flex-wrap gap-3 w-[20%] items-center justify-center'>
          <img 
          src="/assets/images/hover1.png" 
          className='rounded-full w-24 h-24 object-center'
          alt="" 
          />
          <img 
          src="/assets/images/hover1.png" 
          className='rounded-full w-24 h-24 object-center'
          alt="" 
          />
          <img 
          src="/assets/images/hover1.png" 
          className='rounded-full w-24 h-24 object-center'
          alt="" 
          />
          <img 
          src="/assets/images/hover1.png" 
          className='rounded-full w-24 h-24 object-center'
          alt="" 
          />
        </div>
        <p className='bg-blue-800 text-[130px] p-4 px-10 rounded-[50%] font-bold'>
          
            %
          
        </p>
        <div className='text-[260px] text-blue-800 font-bold'>
          700
        </div>
      </div>
    </div>
  )
}

const Results = () =>{
  const repeatCount = 8;
  return(
    <div className='flex   bg-[#f2f2f2]'>
      <div className='bg-black  pl-4 xs:pl-5 md:pl-6'>
        <div className="mr-4 xs:mr-5 md:mr-6 ">
          {[...Array(repeatCount)].map((_, index) => (
            <div key={index} className="w-8 xs:w-10 md:w-14 border-b-[2px] xs:border-b-[3px] md:border-b-[4px] border-white mb-16 xs:mb-20 md:mb-24"></div>
          ))}
        </div>
      </div>
      <div className='bg-[#f2f2f2] min-h-screen flex items-center'>
        <p className='text-[6.5rem] font-[550] pl-8 leading-[6.5rem]'>
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
        <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover2.png')`}}></div>
        <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-[#4D4D4D]'></div>
        <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-white'></div>
        <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-white'></div>
        <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-[#4D4D4D]'></div>
        <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-gray-300'></div>
        <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover3.png')`}}></div>
        <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover4.png')`}}></div>
        <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-[#4D4D4D]'></div>
        <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-gray-300'></div>
        <div className='col-span-2 row-span-2 w-full h-full rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/percent.svg')`}}></div>
        <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover3.png')`}}></div>
        <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover4.png')`}}></div>
        
      </div>
      <div className='flex flex-col justify-between h-[200px] md:h-[400px] lg:h-[500px]'>
        <div class="text-[#3055FF] font-semibold text-sm xs:text-xl md:text-2xl lg:text-3xl"><p>REVENUE</p><p>INCREASE</p><p>BY</p></div>
        <div class="flex">
          <span class="flex items-center text-[#3055FF] -mb-4 text-[6rem] xs:text-[7rem] md:text-[14rem]  lg:text-[18rem] font-bold h-[150px] xs:h-[220px]  lg:h-[350px]">
            7
            <span className='rotate-6 '>0</span>
            <span className='-rotate-0 xs:-rotate-6'>0</span>
          </span>
        </div>
      </div>
    </div>
  )
}


const Views = () =>{
  return(
    <div className=" bg-black flex gap-2 items-center justify-center py-10">
      <div className='space-y-4'>
        <div className='grid grid-cols-4 gap-1 xs:gap-2 md:gap-4'>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover5.png')`}}></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover1.png')`}}></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover2.png')`}}></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-white'></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-[#4D4D4D]'></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-gray-300'></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-[#4D4D4D]'></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-gray-300'></div>
        
        </div>
        <div className='grid grid-cols-4 gap-1 xs:gap-2 md:gap-4'>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-[#4D4D4D]'></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-[#4D4D4D]'></div>
        </div>
        <div className='grid grid-cols-4 gap-1 xs:gap-2 md:gap-4'>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover3.png')`}}></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover4.png')`}}></div>
          
        </div>
         
      </div>
      <div className='flex flex-col h-[250px] md:h-[400px] lg:h-[500px] justify-between'>
        <div class="text-green-500 font-semibold text-sm xs:text-xl md:text-2xl lg:text-3xl p-2">
          <p>VIEWS</p>
          <p className='ml-4 xs:ml-8 md:ml-16'>IN A</p>
          <p>SINGLE WEEK</p>
        </div>
        <div class="flex ">
          <span class="flex items-center md:-mb-4 lg:-mb-16 text-green-500 text-[6rem] xs:text-[7rem] md:text-[14rem]  lg:text-[20rem] font-bold -space-x-1 -ml-28 xs:-ml-40 md:-ml-52 lg:-ml-64  h-[200px] xs:h-[220px]  lg:h-[350px] relative">
            1
            <span className='rotate-6 '>M</span>
            <span className='-rotate-12 '>M</span>
          </span>
        </div>
      </div>
    </div>
  )
}

const Top =()=>{
  return(
    <div className=" bg-black flex flex-col gap-2 items-center justify-center py-10">
      <div className='flex justify-between items-end w-[90%] lg:w-[80%]'>
        <div className='grid grid-cols-4 gap-1 xs:gap-2 md:gap-4'>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover5.png')`}}></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover1.png')`}}></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%] bg-cover bg-center' style={{backgroundImage : `url('/assets/images/hover2.png')`}}></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-white'></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-[#4D4D4D]'></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-gray-300'></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-[#4D4D4D]'></div>
          <div className='w-[3rem] h-[3rem] xs:w-[4rem] xs:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[7rem] lg:h-[7rem] rounded-[50%]  bg-gray-300'></div>
        
        </div>
        <div class="text-yellow-500 font-semibold text-sm xs:text-xl md:text-2xl lg:text-3xl p-2 items-end ">
          <p>Performing Videos</p>
          
        </div>
      </div>
      <div className='flex flex-col h-[250px] md:h-[400px] lg:h-[500px] justify-between'>
        
        <div class="flex ">
          <span class="flex items-center md:-mb-4 lg:-mb-16 text-yellow-500 text-[6rem] xs:text-[8rem] md:text-[14rem]  lg:text-[18rem] font-bold -space-x-1  h-[200px] xs:h-[200px]  lg:h-[350px] relative">
            #1 TOP
          </span>
        </div>
      </div>
    </div>
  )
}
export {Performance, Revenue, Views, Top, Results}