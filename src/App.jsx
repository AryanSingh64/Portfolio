import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import NavTransition from './components/NavTransition'
import Hero from './components/Hero'
import NextFrontier from './components/NextFrontier'
import ThirdSection from './components/ThirdSection'
import FourthSection from './components/FourthSection'
import FifthSection from './components/FifthSection'
import SixthSection from './components/SixthSection'
import SeventhSection from './components/SeventhSection'
import ErrorBoundary from './components/ErrorBoundary'
import {
  SCROLL_TRACK_1,
  SCROLL_TRACK_2_DESKTOP,
  SCROLL_TRACK_2_MOBILE,
  EASING
} from './constants/scrollConfig'

const App = () => {
  const [loading, setLoading] = useState(true)
  const targetRef = useRef(null)
  const targetRef2 = useRef(null)

  // Framer Motion scroll hooks for Track 1
  const { scrollYProgress } = useScroll({ target: targetRef })

  // Track 1: Hero -> NextFrontier scroll animation
  const x = useTransform(
    scrollYProgress,
    SCROLL_TRACK_1.TRANSFORM,
    SCROLL_TRACK_1.VALUES
  )

  // Framer Motion scroll hooks for Track 2
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: targetRef2, smooth: 1 })

  // Track 2: Left-side reveal multi-stage filmstrip
  const x2 = useTransform(
    scrollYProgress2,
    SCROLL_TRACK_2_DESKTOP.TRANSFORM,
    SCROLL_TRACK_2_DESKTOP.VALUES
  )

  // Mobile X2: Identical geometric scale for seamless horizontal slides
  const x2Mobile = useTransform(
    scrollYProgress2,
    SCROLL_TRACK_2_MOBILE.TRANSFORM,
    SCROLL_TRACK_2_MOBILE.VALUES
  )

  return (
    <ErrorBoundary>
      <>
        {/* Skip link target */}
        <main id="main-content" className="w-full">
          <CustomCursor />
          <NavTransition />
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
                transition={{
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1]
                }}
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
        </main>
      </>
    </ErrorBoundary>
  )
}

export default App