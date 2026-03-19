import React from 'react'
import bobImg from '../assets/toppng.com-old-bob-the-builder-waving-256x388 1.png'
import einsteinImg from '../assets/einstein-png-12587 1.png'

const Hero = () => {
  return (
    <div className='no-scrollbar bg-[#FEF9EE] h-screen w-full md:w-screen shrink-0 text-black flex flex-col relative overflow-hidden'>
      
      {/* Top Section */}
      <div className="flex-1 flex flex-col justify-between relative">
        <h1 className="text-[13vw] leading-[0.75] font-bold tracking-tighter uppercase whitespace-nowrap -mt-[2vw] -ml-[0.5vw]">
          ARYAN
        </h1>
        
        <div className="relative pl-2 my-auto">
          <h1 className="text-[8.5vw] leading-[0.85] font-medium  uppercase text-black font-rubik">
            I LIKE BUILDING
          </h1>
          <h1 className="text-[8.5vw] leading-[0.85] uppercase flex items-center gap-4 text-black font-rubik">
            THINGS. <span className="text-[12vw] font-light  text-black font-ruthie leading-none">&</span>
          </h1>
          
          {/* Bob the builder image */}
          <div className="absolute right-12 bottom-12 w-48 xl:w-64 z-10">
            <img src={bobImg} alt="Bob the Builder" className="w-32 h-auto object-contain" />
          </div>
        </div>

        {/* Scroll indicator over border */}
        <div className="absolute top-4 right-0 pb-1 border-b-[3px] border-black w-24 text-right">
          <span className="text-sm font-semibold pr-2">Scroll</span>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-12 gap-0 w-full h-[35vh] relative bg-white border-black
        bg-[linear-gradient(to_right,#e5e7eb_2px,transparent_2px),linear-gradient(to_bottom,#e5e7eb_2px,transparent_2px)] bg-size-[60px_60px]">
        
        {/* The dots at intersections (using radial gradient) */}
        <div className="absolute inset-0 pointer-events-none mix-blend-multiply
          bg-[radial-gradient(circle_at_2px_2px,black_2px,transparent_3px)] bg-size-[60px_60px]">
        </div>
        
        {/* Left Column */}
        <div className="col-span-3 pb-8 pl-8 ml-3 flex flex-col justify-center gap-3 relative z-10 border-r-[3px] border-[#d1d5db]">
          <h2 className="text-[2vw] font-black italic underline decoration-4 underline-offset-4 cursor-pointer w-fit hover:opacity-70 transition-opacity bg-white pr-2 -ml-1">Resume.</h2>
          <h2 className="text-[2vw] font-black italic underline decoration-4 underline-offset-4 cursor-pointer w-fit hover:opacity-70 transition-opacity bg-white pr-2 -ml-1">Contact.</h2>
          <h2 className="text-[2vw] font-black italic underline decoration-4 underline-offset-4 cursor-pointer w-fit hover:opacity-70 transition-opacity bg-white pr-2 -ml-1">LinkedIn.</h2>
        </div>

        {/* Right Column */}
        <div className="col-span-9 px-12 flex flex-col justify-end gap-0 relative z-10 overflow-hidden pb-4">
          <h1 className="text-[9vw] italic leading-[0.85] font-medium tracking-tighter whitespace-nowrap bg-white w-fit pr-4">SOLVING</h1>
          <h1 className="text-[9vw] italic leading-[0.85] font-medium tracking-tighter indent-[10%] whitespace-nowrap bg-white w-fit pr-4 mix-blend-normal z-10">PROBLEMS</h1>
          
          {/* Einstein Image */}
          <div className="absolute right-64 top-4 w-[12vw] z-0">
             <img src={einsteinImg} alt="Einstein" className="w-full h-auto object-contain scale-[1.3] origin-bottom mix-blend-multiply" />
          </div>
        </div>
      </div>

      {/* Circular Projects button at bottom right */}
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white rounded-full flex items-center shadow-[-10px_-10px_30px_rgba(0,0,0,0.05)] border border-gray-100 z-20 overflow-hidden justify-center pl-10 pr-24 pt-10 pb-24">
        <span className="text-3xl font-bold tracking-widest -rotate-45 relative top-4 left-4">Projects.</span>
      </div>

    </div>
  )
}

export default Hero