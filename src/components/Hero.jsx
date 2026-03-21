import React from 'react'
import { motion } from 'framer-motion'
import bobImg from '../assets/bob.webp'
import einsteinImg from '../assets/einstein-png-12587 1.png'

const Hero = () => {
  return (
    <div className='no-scrollbar bg-[#FEF9EE] h-screen w-full md:w-screen shrink-0 text-black flex flex-col relative overflow-hidden'>
      
      {/* Top Section */}
      {/* Top Section */}
      <div className="flex-1 flex flex-col justify-between relative pt-2 md:pt-0">
        
        {/* Header and Scroll Layout block tightly coupled */}
        <div className="flex flex-col relative w-full">
          {/* ARYAN — adjust font size per breakpoint */}
          <motion.h1 
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className={`
            leading-[0.75] font-bold tracking-tighter uppercase whitespace-nowrap -mt-[2vw] -ml-[0.5vw]
            text-[25.5vw]
            sm:text-[25.5vw]
            md:text-[18vw]
            lg:text-[16vw]
            xl:text-[13vw]
            2xl:text-[13vw]
          `}>
            ARYAN
          </motion.h1>
          {/* Scroll indicator organically bolted beneath ARYAN text on the right side */}
          <div className="absolute top-[20vw] md:top-4 right-0 pb-1 border-b md:border-b-[3px] border-black w-24 text-right">
            <span className="text-sm font-semibold pr-2">Scroll</span>
          </div>
        </div>
        
        {/* Vertically centered middle block */}
        <div className="relative pl-4 md:pl-2 flex-1 flex flex-col justify-center items-start mt-8 md:mt-0">
          {/* I LIKE BUILDING — adjust font size per breakpoint */}
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.35 }}
            className={`
            relative w-fit
            leading-[0.85] font-medium uppercase text-black font-rubik break-words
            text-[17vw]
            sm:text-[17vw]
            md:text-[9vw]
            lg:text-[8.5vw]
            xl:text-[8.5vw]
            2xl:text-[8.5vw]
          `}>
            I LIKE <br className="flex md:hidden" /> BUILDING

          {/* Bob the builder image - permanently locked to the text container */}
          <motion.div 
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.6 }}
            className="absolute z-10 w-[22vw] right-[0vw] top-auto bottom-[45%] 
          sm:w-[18vw] sm:right-0 sm:top-auto sm:bottom-[45%] 
          md:w-[12vw] md:right-[-20vw] md:top-[-45%] md:bottom-auto 
          lg:w-[15vw] lg:right-[-18vw] lg:top-[-40%] lg:bottom-auto 
          xl:w-[12vw] xl:right-[-14vw] xl:top-[-40%] xl:bottom-auto 
          2xl:w-[12vw] 2xl:right-[-16vw] 2xl:top-[-40%] 2xl:bottom-auto pointer-events-none">
            <img src={bobImg} alt="Bob the Builder" className="w-full h-auto object-contain drop-shadow-lg" />
          </motion.div>
          </motion.h1>

          {/* THINGS. & — adjust font sizes per breakpoint */}
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.45 }}
            className={`
            leading-[0.85] uppercase flex items-center gap-1 text-black font-rubik mt-1
            text-[17vw]
            sm:text-[17vw]
            md:text-[14vw]  md:gap-4    md:mt-0
            lg:text-[10vw]
            xl:text-[8.5vw]
            2xl:text-[8.5vw]
          `}>
            THINGS. <span className={`
              font-light text-black font-ruthie leading-none -mt-[4vw]
              text-[18vw]
              sm:text-[18vw]
              md:text-[12vw]  md:mt-0
              lg:text-[12vw]
              xl:text-[12vw]
              2xl:text-[12vw]
            `}>&</span>
          </motion.h1>
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
          <a href="https://drive.google.com/file/d/158EFXOn6Ln62hamZBJ-QG7DDDXx8ucSD/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="block text-[5vw] md:text-[2vw] font-black italic underline decoration-2 md:decoration-4 underline-offset-4 cursor-pointer w-fit hover:opacity-70 transition-opacity bg-white pr-2 -ml-1">Resume.</a>
          <a href="#contact" className="block text-[5vw] md:text-[2vw] font-black italic underline decoration-2 md:decoration-4 underline-offset-4 cursor-pointer w-fit hover:opacity-70 transition-opacity bg-white pr-2 -ml-1">Contact.</a>
          <a href="https://www.linkedin.com/in/aryan64/" target="_blank" rel="noopener noreferrer" className="block text-[5vw] md:text-[2vw] font-black italic underline decoration-2 md:decoration-4 underline-offset-4 cursor-pointer w-fit hover:opacity-70 transition-opacity bg-white pr-2 -ml-1">LinkedIn.</a>
        </div>

        {/* Right Column / Mobile Top Text */}
        <div className="order-1 md:order-2 md:col-span-9 px-4 md:px-12 flex-1 flex flex-col justify-center md:justify-center md:right-10 gap-1 md:gap-0 relative z-10 overflow-hidden pt-4 md:pt-0 pb-2 md:pb-4">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-[14vw]
           md:text-[12vw]
           lg:text-[10vw]
           xl:text-[8vw]
           2xl:text-[10vw]
           italic leading-[0.85] font-medium tracking-tighter whitespace-nowrap bg-white w-fit pr-4">SOLVING</motion.h1>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="text-[14vw] 
            md:text-[12vw]
            lg:text-[10vw]
            xl:text-[8vw]
            2xl:text-[10vw]
           italic leading-[0.85] font-medium tracking-tighter md:indent-[10%] whitespace-nowrap bg-white w-fit pr-4 mix-blend-normal z-10">PROBLEMS</motion.h1>
          
          {/* Einstein Image — adjust size and position per breakpoint */}
          <motion.div 
            initial={{ scale: 1.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.25 }}
            className={`
            absolute -translate-y-1/2 z-0
            w-[20vw]  right-4    top-1/2
            sm:w-[20vw]
            md:w-[12vw]  md:right-12  md:top-4    md:-translate-y-0
            lg:w-[12vw]  lg:right-17
            xl:w-[12vw]  xl:right-64
            2xl:w-[12vw] 2xl:right-64
          `}>
            <img src={einsteinImg} alt="Einstein" className="w-full h-auto object-contain origin-bottom mix-blend-multiply" />
          </motion.div>
        </div>
      </div>

      {/* Circular Projects button - fluid, curved text on arc */}
      <a href="#projects" className="hidden md:flex absolute -bottom-[5vw] -right-[5vw] w-[14vw] h-[14vw] bg-[#FEF9EE] rounded-full shadow-[-8px_-8px_24px_rgba(0,0,0,0.15)] border border-black/15 z-20 overflow-hidden cursor-pointer group transition-all hover:shadow-[-12px_-12px_36px_rgba(0,0,0,0.22)] hover:scale-105">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="circleText" 
              d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
            />
          </defs>
          {/* Text centered on the visible top-left arc (startOffset ~68% = 12 o'clock position) */}
          <text
            style={{ fontSize: '18px', fontWeight: '900', letterSpacing: '5px', fontFamily: 'Poppins, sans-serif', fill: '#08060d' }}
          >
            <textPath href="#circleText" startOffset="-1%">
              PROJECTS.
            </textPath>
          </text>
          {/* Clean arrow pointing toward the PROJECTS. text arc (lower-left direction) */}
          <g transform="translate(72, 72) rotate(-50)">
            {/* Arrow stem */}
            <line x1="0" y1="12" x2="0" y2="-12" stroke="#08060d" strokeWidth="3" strokeDasharray="5 5" strokeLinecap="round"/>
            {/* Arrow head - two angled lines forming a V tip */}
            <polyline points="-7,-5  0,-13  7,-5" fill="none" stroke="#08060d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </svg>
      </a>

    </div>
  )
}

export default Hero