import React from 'react'
import { motion, useTransform } from 'framer-motion'

const FourthSection = ({ scrollProgress }) => {

  // Timeline execution adapted to the App.jsx 600vh Track 2 timeline:
  // [0.0 to 0.4] -> Section slides onto screen. Text is hidden entirely offscreen right!
  // [0.4 to 0.6] -> Section physically dwells on screen. Text shreds aggressively sideways across the monitor!
  // [0.6 to 1.0] -> Section slides OFF screen right. Text holds tight firmly offscreen left!
  const x = useTransform(scrollProgress, [0, 0.4, 0.6, 1], ["100vw", "100vw", "-150vw", "-150vw"])

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
