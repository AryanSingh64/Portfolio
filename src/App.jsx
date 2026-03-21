import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import NextFrontier from './components/NextFrontier'
import ThirdSection from './components/ThirdSection'
import FourthSection from './components/FourthSection'
import FifthSection from './components/FifthSection'
import SixthSection from './components/SixthSection'
import SeventhSection from './components/SeventhSection'

const App = () => {
  const [loading, setLoading] = useState(true)
  const targetRef = useRef(null)
  const targetRef2 = useRef(null)

  // Framer Motion scroll hooks for Track 1
  const { scrollYProgress } = useScroll({ target: targetRef })

  // Height: 200vh -> 100vh scrollable distance
  // 0.0 - 0.6: Slide Hero out, NextFrontier in quickly
  // 0.6 - 1.0: DWELL (Hold NextFrontier on screen tightly before popping to next container)
  const x = useTransform(scrollYProgress, [0, 0.6, 1], ["0%", "-50%", "-50%"])

  // Framer Motion scroll hooks for Track 2
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: targetRef2 })

  // Entire 400vh sequence broken into 5 timeline phases mathematically keeping dwell time but radically reducing drag distance:
  // [0.0 - 0.2]: DWELL on 3rd Section
  // [0.2 - 0.4]: SLIDE 3rd to 4th section quickly
  // [0.4 - 0.6]: DWELL on 4th Section (Text shreds past)
  // [0.6 - 0.8]: SLIDE 4th to 5th section quickly
  // [0.8 - 1.0]: DWELL on 5th Section tightly
  const x2 = useTransform(
    scrollYProgress2,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["-66.666%", "-66.666%", "-33.333%", "-33.333%", "0%", "0%"]
  )

  // Mobile X2 seamlessly shares the identical 3-screen geometric scale (-66.6% to 0%), 
  // ensuring the absolute first poster slides in horizontally sideways over the Fourth section perfectly!
  const x2Mobile = useTransform(
    scrollYProgress2,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["-66.666%", "-66.666%", "-33.333%", "-33.333%", "0%", "0%"]
  )

  return (
    <>
      <CustomCursor />
      {/* 
        High-End Brutalist Asset Loader
      */}
      <AnimatePresence>
        {loading && <Loader setLoading={setLoading} />}
      </AnimatePresence>

      {/* 
        Scroll Track 1: Hero -> Awwards Layout
      */}
      <div ref={targetRef} className="relative h-[200vh] bg-black">
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
      <div ref={targetRef2} className="relative h-[400vh] bg-black">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">

          {/* =========================================
              DESKTOP LAYOUT (3 Screens - 300vw)
          ========================================= */}
          <motion.div
            style={{ x: x2 }}
            className="hidden md:flex flex-row h-full w-[300vw]"
          >
            {/* Screen 5: Placed at the very front so it slides in LAST from the far left */}
            <div className="h-screen w-screen shrink-0 relative overflow-hidden">
              <FifthSection />
            </div>

            {/* Screen 4: Appears in the middle timeline to do its parallax text effect */}
            <div className="h-screen w-screen shrink-0 relative overflow-hidden">
              <FourthSection scrollProgress={scrollYProgress2} />
            </div>

            {/* Screen 3: The Red Page - Renders on arrival because of the -66.6% starting position pulling the strip entirely right! */}
            <div className="h-screen w-screen shrink-0 relative overflow-hidden">
              <ThirdSection />
            </div>
          </motion.div>

          {/* =========================================
              MOBILE LAYOUT (3 Screens - 300vw)
          ========================================= */}
          <motion.div
            style={{ x: x2Mobile }}
            className="md:hidden flex flex-row h-full w-[300vw]"
          >
            {/* Screen 5 */}
            <div className="h-screen w-screen shrink-0 relative overflow-hidden">
              <FifthSection />
            </div>

            {/* Screen 4 */}
            <div className="h-screen w-screen shrink-0 relative overflow-hidden">
              <FourthSection scrollProgress={scrollYProgress2} />
            </div>

            {/* Screen 3 */}
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