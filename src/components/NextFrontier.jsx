import React from 'react'
import { motion } from 'framer-motion'
import { navLink } from '../utils/navLink'
import q1 from '../assets/_.png'
import q2 from '../assets/2.png'
import q3 from '../assets/3.png'

const NextFrontier = () => {
  return (
    <div className='h-screen w-screen shrink-0 bg-[#e5e5e5] relative overflow-hidden flex flex-col justify-center text-black'>

      <div className="hidden md:flex absolute top-10 left-10 flex-col z-10 font-rampart leading-[1.1] text-black text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">
        <a href="#projects" onClick={navLink('#projects', 'Projects')} className="cursor-pointer transition-transform hover:-translate-y-1 block w-fit">Projects.</a>
        <a href="#contact" onClick={navLink('#contact', 'Contact')} className="cursor-pointer transition-transform hover:-translate-y-1 block w-fit">Contact.</a>
        <a href="https://www.linkedin.com/in/aryan64/" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition-transform hover:-translate-y-1 block w-fit">LinkedIn.</a>
      </div>

      {/* Massive Text Layout - Absolute Pinned */}
      <div className='w-full h-full relative pointer-events-none font-poppins'>
        
        {/* TABLET LAYOUT (768–1279px) — clean compact grid layout */}
        <div className="hidden md:flex xl:hidden w-full h-full flex-col justify-center px-10 md:px-16 gap-0">
          <h1 className="font-bold text-[18vw] leading-[0.85] tracking-tighter text-[#08060d] text-right self-end">Need</h1>
          <h1 className="font-bold text-[18vw] leading-[0.85] tracking-tighter text-[#08060d] text-left self-start">Some-</h1>
          <h1 className="font-bold text-[18vw] leading-[0.85] tracking-tighter text-[#08060d] text-right self-end">thing</h1>
          <h1 className="font-bold text-[16vw] leading-[0.85] tracking-tighter text-[#08060d] text-left self-start">Different</h1>
        </div>

        {/* XL+ DESKTOP LAYOUT (1280px+) — original oversized absolute typographic layout */}
        <div className="hidden xl:block w-full h-full relative">
          {/* "Need" — top-right corner */}
          <h1 className="absolute font-bold leading-none tracking-normal m-0 p-0 text-[#08060d] top-[-5vw] right-[-2vw] text-[22vw] xl:text-[22vw] 2xl:text-[22vw]">
            Need
          </h1>
          {/* "Something" — middle full-width */}
          <h1 className="absolute top-[50%] -translate-y-1/2 left-[-0.5vw] w-full font-poppins font-bold leading-none tracking-wide m-0 p-0 text-[#08060d] text-[17vw] xl:text-[17vw] 2xl:text-[17vw]">
            Something
          </h1>
          {/* "Different" — bottom */}
          <h1 className="absolute bottom-[-4vw] left-[-1.2vw] w-full font-poppins font-bold leading-[0.8] tracking-normal m-0 p-0 text-[#08060d] text-[22vw] xl:text-[22vw] 2xl:text-[22vw]">
            Different
          </h1>
        </div>

        {/* MOBILE TEXT LAYOUT — base=<640px | sm=640px */}
        <div className="md:hidden w-full h-full flex flex-col justify-center px-4 relative z-0">
          <h1 className="font-poppins font-black leading-[1.2] tracking-tighter text-[#08060d] m-0 bg-transparent text-[min(28vw,16vh)] sm:text-[min(26vw,16vh)]">
            Need<br/>
            Some<br/>
            Thing<br/>
            Diffe<br/>
            Rent
          </h1>
        </div>
        
        {/* Abstract Overlay 1 — bottom-left */}
        {/* base=<640px | sm=640px | md=768px | lg=1024px | xl=1280px | 2xl=1536px */}
        <div className="absolute mix-blend-exclusion z-20 pointer-events-none top-[60%] left-[-10vw] w-[50vw] sm:top-[65%] sm:left-[-5vw] sm:w-[45vw] md:top-[30%] md:left-[-15vw] md:w-[35vw] md:-translate-y-1/2 lg:top-[30%] lg:left-[-15vw] lg:w-[35vw] xl:top-[30%] xl:left-[-15vw] xl:w-[35vw] 2xl:top-[30%] 2xl:left-[-15vw] 2xl:w-[35vw]">
          <motion.img src={q3} alt="Abstract 1"
            animate={{ y: [0, -15, 0], rotate: [0, -3, 3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Abstract Overlay 2 — center */}
        <div className="absolute mix-blend-exclusion z-20 pointer-events-none bottom-[10%] right-[-15vw] w-[65vw] sm:bottom-[5%] sm:right-[-10vw] sm:w-[50vw] md:bottom-auto md:top-[55%] md:right-auto md:left-[46%] md:-translate-x-1/2 md:-translate-y-1/2 md:w-[26vw] lg:w-[26vw] xl:w-[26vw] 2xl:w-[26vw]">
          <motion.img src={q2} alt="Abstract 2"
            animate={{ y: [0, -25, 0], rotate: [0, 4, -4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Abstract Overlay 3 — top-right */}
        <div className="absolute mix-blend-exclusion z-20 pointer-events-none top-[-1%] right-[-5vw] w-[55vw] sm:top-[-10%] sm:right-[-5vw] sm:w-[45vw] md:top-[-10%] md:right-[-5vw] md:w-[35vw] lg:w-[35vw] xl:w-[35vw] 2xl:w-[35vw]">
          <motion.img src={q1} alt="Abstract 3"
            animate={{ y: [0, -20, 0], rotate: [0, -2, 2, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="w-full h-auto object-contain"
          />
        </div>

      </div>

    </div>
  )
}

export default NextFrontier
