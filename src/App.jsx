import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Hero from './components/Hero'
import NextFrontier from './components/NextFrontier'
import ThirdSection from './components/ThirdSection'
import FourthSection from './components/FourthSection'
import FifthSection from './components/FifthSection'
import SixthSection from './components/SixthSection'
import SeventhSection from './components/SeventhSection'

const App = () => {
  const targetRef = useRef(null)
  const targetRef2 = useRef(null)

  // Framer Motion scroll hooks for Track 1
  const { scrollYProgress } = useScroll({ target: targetRef })
  
  // Inject heavy momentum physics
  const smoothY = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 })
  
  // Height: 300vh -> 200vh scrollable
  // 0.0 - 0.5: Slide Hero out, NextFrontier in
  // 0.5 - 1.0: DWELL (Hold NextFrontier on screen)
  const x = useTransform(smoothY, [0, 0.5, 1], ["0%", "-50%", "-50%"])

  // Framer Motion scroll hooks for Track 2
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: targetRef2 })
  const smoothY2 = useSpring(scrollYProgress2, { stiffness: 60, damping: 20, restDelta: 0.001 })
  
  // Entire 600vh sequence broken into 5 timeline phases guaranteeing proper reading time:
  // [0.0 - 0.2]: DWELL on 3rd Section
  // [0.2 - 0.4]: SLIDE 3rd to 4th section
  // [0.4 - 0.6]: DWELL on 4th Section (Text shreds past)
  // [0.6 - 0.8]: SLIDE 4th to 5th section
  // [0.8 - 1.0]: DWELL on 5th Section
  const x2 = useTransform(
    smoothY2, 
    [0, 0.2, 0.4, 0.6, 0.8, 1], 
    ["-66.666%", "-66.666%", "-33.333%", "-33.333%", "0%", "0%"]
  )

  return (
    <>
      {/* 
        Scroll Track 1: Hero -> Awwards Layout
      */}
      <div ref={targetRef} className="relative h-[300vh] bg-black">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div 
            style={{ x }} 
            className="flex flex-row h-full w-[200vw]"
          >
            <div className="h-screen w-screen shrink-0">
              <Hero />
            </div>
            <NextFrontier />
          </motion.div>
        </div>
      </div>

      {/* 
        Scroll Track 2: Left-Side Reveal Multi-Stage Filmstrip
      */}
      <div ref={targetRef2} className="relative h-[600vh] bg-black">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          {/* We now use a MASSIVE 300vw container to hold all 3 full-width screens unconditionally! */}
          <motion.div 
            style={{ x: x2 }} 
            className="flex flex-row h-full w-[300vw]"
          >
            {/* Screen 5: Placed at the very front so it slides in LAST from the far left */}
            <div className="h-screen w-screen shrink-0 relative overflow-hidden">
              <FifthSection />
            </div>

            {/* Screen 4: Appears in the middle timeline to do its parallax text effect */}
            <div className="h-screen w-screen shrink-0 relative overflow-hidden">
              <FourthSection scrollProgress={smoothY2} />
            </div>
            
            {/* Screen 3: The Red Page - Renders on arrival because of the -66.6% starting position pulling the strip entirely right! */}
            <div className="h-screen w-screen shrink-0 relative overflow-hidden">
              <ThirdSection />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 
        Scroll Track 3: Standard Vertical Native Flow
      */}
      <SixthSection />
      <SeventhSection />

    </>
  )
}

export default App