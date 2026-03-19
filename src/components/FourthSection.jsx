import React from 'react'
import { motion, useTransform } from 'framer-motion'

const FourthSection = ({ scrollProgress }) => {

  // Timeline execution perfectly mirrored from App.jsx's 4-Phase track:
  // [0.00 to 0.33] -> Section slides onto screen. Text is hidden right at 100vw!
  // [0.33 to 0.66] -> Section locks on screen. Text shreds across monitor sideways to -150vw!
  // [0.66 to 1.00] -> Section slides OFF screen to the right. Text holds tight firmly offscreen left!
  const x = useTransform(scrollProgress, [0, 0.333, 0.666, 1], ["100vw", "100vw", "-150vw", "-150vw"])

  return (
    <div className="w-full h-screen bg-[#08060d] text-white flex items-center justify-center shrink-0 md:w-screen relative overflow-hidden">
      <motion.h1 
        style={{ x }}
        className="flex gap-[8vw] md:gap-[5vw] text-[25vw] md:text-[20vw] font-poppins font-black whitespace-nowrap leading-none tracking-tighter"
      >
        <span>Why</span>
        <span>work</span>
        <span>with</span>
        <span>me?</span>
      </motion.h1>
    </div>
  )
}

export default FourthSection
