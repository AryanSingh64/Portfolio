import React from 'react'
import { motion, useTransform } from 'framer-motion'

const FourthSection = ({ scrollProgress }) => {

  // Timeline execution adapted to the App.jsx Track 2 timeline mathematically stripped of artificial latency mapping constraints:
  // [0.0 to 0.35] -> Section slides onto screen. Text is hidden entirely offscreen right!
  // [0.35 to 0.65] -> Section physically dwells on screen. Text shreds slowly and smoothly across the monitor!
  // [0.65 to 1.0] -> Section slides OFF screen right. Text holds tight firmly offscreen left!
  const x = useTransform(scrollProgress, [0, 0.40, 0.50, 1], ["100vw", "100vw", "-150vw", "-150vw"])

  return (
    <div className="w-full h-screen bg-[#08060d] text-white flex items-center justify-center shrink-0 md:w-screen relative overflow-hidden">
      <motion.h2
        style={{ x }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="flex gap-[8vw] md:gap-[5vw] text-[23vw] md:text-[18vw] font-poppins font-black whitespace-nowrap leading-none tracking-tighter"
      >
        <span>Why</span>
        <span>work</span>
        <span>with</span>
        <span>me?</span>
      </motion.h2>
    </div>
  )
}

export default FourthSection
