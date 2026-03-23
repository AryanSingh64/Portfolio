import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import vectorImg from '../assets/Vector 42.png'

const ThirdSection = () => {
  const containerRef = useRef(null)

  // Tie background scribble directly to scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Brutalist sharp rotation and scale transforms
  const rotate = useTransform(scrollYProgress, [0, 1], [-60, 60])
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1])

  const sentences = [
    { text: "I CREATE", border: true },
    { text: "PRODUCTS", border: true },
    { text: "THAT MAKE", border: false },
    { text: "PEOPLE'S", border: false },
    { text: "LIFE EASIER", border: false }
  ]

  // Staggered sequence variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  }

  // Animates Y slice + hollow transparency to solid color fill
  const itemVariants = {
    hidden: { 
      y: "120%", 
      color: "rgba(255,255,255,0)" 
    },
    visible: { 
      y: "0%", 
      color: "rgba(255,255,255,1)",
      transition: { 
        duration: 0.8, 
        ease: [0.76, 0, 0.24, 1] 
      } 
    }
  }

  return (
    <div ref={containerRef} className="w-full h-screen bg-[#E83F38] text-white flex items-center justify-center relative overflow-hidden shrink-0 md:w-screen">

      {/* Background Vector Image (decorative) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] md:w-[70vw] h-auto pointer-events-none z-0" aria-hidden="true">
        <motion.img
          src={vectorImg}
          alt=""
          loading="lazy"
          style={{ rotate, scale }}
          className="w-full h-full object-contain opacity-90"
          width={1200}
          height={800}
        />
      </div>

      {/* Typography Block - Massively Animated Sequence */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
        className="relative z-10 flex flex-col items-center text-center font-serif text-[12vw] md:text-[6.5vw] font-bold leading-[1.05] tracking-wide"
      >
        {sentences.map((sentence, i) => (
          <div key={i} className={`overflow-hidden ${sentence.border ? 'mb-1 md:mb-2' : ''}`}>
            {/* The webkit-text-stroke creates the hollow outline which persists, and the color override fills it */}
            <motion.h2 
              variants={itemVariants}
              className={`w-fit mx-auto [-webkit-text-stroke:1.5px_white] md:[-webkit-text-stroke:2px_white] pb-1 ${
                sentence.border ? 'border-b-[3px] md:border-b-[4px] border-white' : ''
              }`}
            >
              {sentence.text}
            </motion.h2>
          </div>
        ))}
      </motion.div>

    </div>
  )
}

export default ThirdSection
