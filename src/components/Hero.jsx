import React from 'react'
import bobImg from '../assets/toppng.com-old-bob-the-builder-waving-256x388 1.png'
import einsteinImg from '../assets/einstein-png-12587 1.png'

const Hero = () => {
  return (
    <div className='no-scrollbar bg-[#FEF9EE] h-screen w-full md:w-screen shrink-0 text-black flex flex-col relative overflow-hidden'>
      
      {/* Top Section */}
      {/* Top Section */}
      <div className="flex-1 flex flex-col justify-between relative pt-2 md:pt-0">
        
        {/* Header and Scroll Layout block tightly coupled */}
        <div className="flex flex-col relative w-full">
          <h1 className="text-[25.5vw] md:text-[13vw] leading-[0.75] font-bold tracking-tighter uppercase whitespace-nowrap -mt-[2vw] -ml-[0.5vw]">
            ARYAN
          </h1>
          {/* Scroll indicator organically bolted beneath ARYAN text on the right side */}
          <div className="absolute top-[20vw] md:top-4 right-0 pb-1 border-b md:border-b-[3px] border-black w-24 text-right">
            <span className="text-sm font-semibold pr-2">Scroll</span>
          </div>
        </div>
        
        {/* Vertically centered middle block */}
        <div className="relative pl-4 md:pl-2 flex-1 flex flex-col justify-center items-start mt-8 md:mt-0">
          <h1 className="text-[17vw] md:text-[8.5vw] leading-[0.85] font-medium uppercase text-black font-rubik break-words">
            I LIKE <br className="flex md:hidden" /> BUILDING
          </h1>
          <h1 className="text-[17vw] md:text-[8.5vw] leading-[0.85] uppercase flex items-center gap-1 md:gap-4 text-black font-rubik mt-1 md:mt-0">
            THINGS. <span className="text-[18vw] md:text-[12vw] font-light text-black font-ruthie leading-none -mt-[4vw] md:mt-0">&</span>
          </h1>
          
          {/* Bob the builder image precisely hovering right */}
          <div className="absolute right-[5vw] md:right-12 top-[10vw] md:top-auto md:bottom-12 w-[22vw] md:w-48 xl:w-64 z-10 md:translate-y-0">
            <img src={bobImg} alt="Bob the Builder" className="w-full md:w-32 h-auto object-contain drop-shadow-lg" />
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:grid md:grid-cols-12 gap-0 w-full h-[35vh] relative bg-white border-black md:border-t-0
        bg-[linear-gradient(to_right,#e5e7eb_2px,transparent_2px),linear-gradient(to_bottom,#e5e7eb_2px,transparent_2px)] bg-size-[60px_60px] md:bg-size-[60px_60px] bg-[size:12vw_12vw]">
        
        {/* The dots at intersections (using radial gradient) */}
        <div className="absolute inset-0 pointer-events-none mix-blend-multiply
          bg-[radial-gradient(circle_at_2px_2px,black_2px,transparent_3px)] bg-[size:12vw_12vw] md:bg-size-[60px_60px]">
        </div>

        {/* Desktop Left Column / Mobile Bottom Row */}
        <div className="order-2 md:order-1 md:col-span-3 pb-6 md:pb-8 px-4 md:pl-8 md:ml-3 flex flex-row md:flex-col justify-between md:justify-center w-full relative z-10 md:border-r-[3px] border-[#d1d5db]">
          <h2 className="text-[5vw] md:text-[2vw] font-black italic underline decoration-2 md:decoration-4 underline-offset-4 cursor-pointer w-fit hover:opacity-70 transition-opacity bg-white pr-2 -ml-1">Resume.</h2>
          <h2 className="text-[5vw] md:text-[2vw] font-black italic underline decoration-2 md:decoration-4 underline-offset-4 cursor-pointer w-fit hover:opacity-70 transition-opacity bg-white pr-2 -ml-1">Contact.</h2>
          <h2 className="text-[5vw] md:text-[2vw] font-black italic underline decoration-2 md:decoration-4 underline-offset-4 cursor-pointer w-fit hover:opacity-70 transition-opacity bg-white pr-2 -ml-1">LinkedIn.</h2>
        </div>

        {/* Right Column / Mobile Top Text */}
        <div className="order-1 md:order-2 md:col-span-9 px-4 md:px-12 flex-1 flex flex-col justify-center md:justify-end gap-1 md:gap-0 relative z-10 overflow-hidden pt-4 md:pt-0 pb-2 md:pb-4">
          <h1 className="text-[14vw] md:text-[9vw] italic leading-[0.85] font-medium tracking-tighter whitespace-nowrap bg-white w-fit pr-4">SOLVING</h1>
          <h1 className="text-[14vw] md:text-[9vw] italic leading-[0.85] font-medium tracking-tighter md:indent-[10%] whitespace-nowrap bg-white w-fit pr-4 mix-blend-normal z-10">PROBLEMS</h1>
          
          {/* Einstein Image */}
          <div className="absolute right-4 md:right-64 top-1/2 md:top-4 -translate-y-1/2 md:-translate-y-0 w-[20vw] md:w-[12vw] z-0">
             <img src={einsteinImg} alt="Einstein" className="w-full h-auto object-contain origin-bottom mix-blend-multiply" />
          </div>
        </div>
      </div>

      {/* Circular Projects button at bottom right (Hidden on purely Mobile constraint viewports to avoid blocking click path) */}
      <div className="hidden md:flex absolute -bottom-24 -right-24 w-80 h-80 bg-white rounded-full items-center shadow-[-10px_-10px_30px_rgba(0,0,0,0.05)] border border-gray-100 z-20 overflow-hidden justify-center pl-10 pr-24 pt-10 pb-24">
        <span className="text-3xl font-bold tracking-widest -rotate-45 relative top-4 left-4">Projects.</span>
      </div>

    </div>
  )
}

export default Hero