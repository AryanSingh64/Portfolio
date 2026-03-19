import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
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
  const [isMobile, setIsMobile] = useState(false)

  // Track window size to disable horizontal hijacking on mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Framer Motion scroll hooks for Track 1
  const { scrollYProgress } = useScroll({ target: targetRef })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "0%" : "-50%"])

  // Framer Motion scroll hooks for Track 2 (Right-to-Left Reveal Extended to 3 screens)
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: targetRef2 })
  
  // Entire 400vh sequence broken into 3 timeline phases:
  // [0 to 0.33]: Slide from -66.6% to -33.3% (Bring Black Section onto screen from the left)
  // [0.33 to 0.66]: Lock at -33.3% (Hold Black Section on screen while the "Why Work With Me?" text flies past)
  // [0.66 to 1.0]: Slide from -33.3% to 0% (Bring the brand new Fifth Section onto the screen from the left!)
  const x2 = useTransform(
    scrollYProgress2, 
    [0, 0.333, 0.666, 1], 
    [
      isMobile ? "0%" : "-66.666%", 
      isMobile ? "0%" : "-33.333%", 
      isMobile ? "0%" : "-33.333%", 
      isMobile ? "0%" : "0%"
    ]
  )

  return (
    <>
      {/* 
        Scroll Track 1: Hero -> Awwards Layout
      */}
      <div ref={targetRef} className="relative h-auto md:h-[200vh] bg-black">
        <div className="md:sticky md:top-0 md:flex md:h-screen md:items-center md:overflow-hidden">
          <motion.div 
            style={{ x }} 
            className="flex flex-col md:flex-row h-full w-full md:w-[200vw]"
          >
            <div className="md:h-screen md:w-screen shrink-0">
              <Hero />
            </div>
            <NextFrontier />
          </motion.div>
        </div>
      </div>

      {/* 
        Scroll Track 2: Left-Side Reveal Multi-Stage Filmstrip
      */}
      <div ref={targetRef2} className="relative h-auto md:h-[400vh] bg-black">
        <div className="md:sticky md:top-0 md:flex md:h-screen md:items-center md:overflow-hidden">
          {/* We now use a MASSIVE 300vw container to hold all 3 full-width screens! */}
          <motion.div 
            style={{ x: x2 }} 
            className="flex flex-col md:flex-row h-full w-full md:w-[300vw]"
          >
            {/* Screen 5: Placed at the very front so it slides in LAST from the far left */}
            <div className="md:h-screen md:w-screen shrink-0 relative overflow-hidden">
              <FifthSection />
            </div>

            {/* Screen 4: Appears in the middle timeline to do its parallax text effect */}
            <div className="md:h-screen md:w-screen shrink-0 relative overflow-hidden">
              <FourthSection scrollProgress={scrollYProgress2} />
            </div>
            
            {/* Screen 3: The Red Page - Renders on arrival because of the -66.6% starting position pulling the strip entirely right! */}
            <div className="md:h-screen md:w-screen shrink-0 relative overflow-hidden">
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