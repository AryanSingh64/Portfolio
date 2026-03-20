import React from 'react'
import q1 from '../assets/_.png'
import q2 from '../assets/2.png'
import q3 from '../assets/3.png'

const NextFrontier = () => {
  return (
    <div className='h-screen w-screen shrink-0 bg-[#e5e5e5] relative overflow-hidden flex flex-col justify-center text-black'>

      {/* Absolute container pinned to the top-left corner */}
      <div className="hidden md:flex absolute top-10 left-10 flex-col z-10 text-[3vw] md:text-5xl font-rampart leading-[1.1] text-black">
        <span className="cursor-pointer transition-transform hover:-translate-y-1">Projects.</span>
        <span className="cursor-pointer transition-transform hover:-translate-y-1">Contact.</span>
        <span className="cursor-pointer transition-transform hover:-translate-y-1">LinkedIn.</span>
      </div>

      {/* Massive Text Layout - Absolute Pinned */}
      <div className='w-full h-full relative pointer-events-none font-poppins'>
        
        {/* DESKTOP TEXT LAYOUT (Hidden on mobile) */}
        <div className="hidden md:block w-full h-full relative">
          <h1 className='absolute top-[-5vw] right-[-2vw] font-bold text-[22vw] leading-none tracking-normal m-0 p-0 text-[#08060d]'>
            Need
          </h1>
          <h1 className='absolute top-[50%] -translate-y-1/2 left-[-0.5vw] w-full font-poppins font-bold text-[17vw] leading-none tracking-wide m-0 p-0 text-[#08060d]'>
            Something
          </h1>
          <h1 className='absolute bottom-[-4vw] left-[-1.2vw] w-full font-poppins font-bold text-[22vw] leading-[0.8] tracking-normal m-0 p-0 text-[#08060d]'>
            Different
          </h1>
        </div>

        {/* MOBILE TEXT LAYOUT (Stacked Edge-to-Edge Syllables) */}
        <div className="md:hidden w-full h-full flex flex-col justify-center pl-1 relative z-0">
          <h1 className='font-poppins font-black text-[35.5vw] leading-[1.2] tracking-tighter text-[#08060d] m-0 bg-transparent'>
            Need<br/>
            Some<br/>
            Thing<br/>
            Diffe<br/>
            Rent
          </h1>
        </div>
        
        {/* Abstract Overlays with Exclusion Blend */}
        {/* Mobile anchors matched precisely to the reference image coordinates */}
        <img 
          src={q3} 
          alt="Abstract 1" 
          className="absolute top-[65%] md:top-[30%] -translate-y-1/2 left-[-5vw] md:left-[-15vw] w-[45vw] md:w-[35vw] mix-blend-exclusion pointer-events-none opacity-100 object-contain z-20"
        />
        <img 
          src={q2} 
          alt="Abstract 2" 
          className="absolute bottom-[-5%] md:bottom-auto md:top-[55%] right-[-10vw] md:right-auto md:left-[46%] md:-translate-x-1/2 md:-translate-y-1/2 w-[60vw] md:w-[26vw] mix-blend-exclusion pointer-events-none opacity-100 object-contain z-20"
        />
        <img 
          src={q1} 
          alt="Abstract 3" 
          className="absolute top-[-5%] md:top-[-10%] right-[-5vw] md:right-[-5vw] w-[70vw] md:w-[35vw] mix-blend-exclusion pointer-events-none opacity-100 object-contain z-20"
        />

      </div>

    </div>
  )
}

export default NextFrontier
