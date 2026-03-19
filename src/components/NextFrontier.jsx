import React from 'react'
import q1 from '../assets/_.png'
import q2 from '../assets/2.png'
import q3 from '../assets/3.png'

const NextFrontier = () => {
  return (
    <div className='h-screen w-screen shrink-0 bg-[#e5e5e5] relative overflow-hidden flex flex-col justify-center text-black'>

      {/* Absolute container pinned to the top-left corner */}
      <div className="absolute top-10 left-10 flex flex-col z-10 text-[3vw] md:text-5xl font-rampart leading-[1.1] text-black">
        <span className="cursor-pointer transition-transform hover:-translate-y-1">Projects.</span>
        <span className="cursor-pointer transition-transform hover:-translate-y-1">Contact.</span>
        <span className="cursor-pointer transition-transform hover:-translate-y-1">LinkedIn.</span>
      </div>

      {/* Massive Text Layout - Absolute Pinned */}
      <div className='w-full h-full relative pointer-events-none font-poppins'>
        
        {/* Top Right */}
        <h1 className='absolute top-[-5vw] right-[-2vw] font-bold text-[28vw] md:text-[22vw] leading-none tracking-normal m-0 p-0 text-[#08060d]'>
          Need
        </h1>
        
        {/* Middle Full Width */}
        <h1 className='absolute top-[50%] -translate-y-1/2 left-[-0.5vw] w-full font-poppins font-bold text-[22vw] md:text-[17vw] leading-none tracking-wide m-0 p-0 text-[#08060d]'>
          Something
        </h1>
        
        {/* Bottom Full Width */}
        <h1 className='absolute bottom-[-4vw] left-[-1.2vw] w-full font-poppins font-bold text-[20vw] md:text-[22vw] leading-[0.8] tracking-normal m-0 p-0 text-[#08060d]'>
          Different
        </h1>
        
        {/* Abstract Overlays with Exclusion Blend */}
        {/* We absolutely position these OVER the text so the blend mode mathematically inverts the heavy black typography */}
        <img 
          src={q3} 
          alt="Abstract 1" 
          className="absolute top-[30%] -translate-y-1/2 left-[-15vw] w-[40vw] md:w-[35vw] mix-blend-exclusion pointer-events-none opacity-90 object-contain z-20"
        />
        <img 
          src={q2} 
          alt="Abstract 2" 
          className="absolute top-[55%] left-[46%] -translate-x-1/2 -translate-y-1/2 w-[50vw] md:w-[26vw] mix-blend-exclusion pointer-events-none opacity-90 object-contain z-20"
        />
        <img 
          src={q1} 
          alt="Abstract 3" 
          className="absolute top-[-10%] right-[-5vw] w-[55vw] md:w-[35vw] mix-blend-exclusion pointer-events-none opacity-90 object-contain z-20"
        />

      </div>

    </div>
  )
}

export default NextFrontier
