import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import poster1 from '../assets/Poster/01.png'
import poster2 from '../assets/Poster/02..png'
import poster3 from '../assets/Poster/03.png'
import poster4 from '../assets/Poster/04.png'

const slideData = [
  {
    id: 0,
    poster: poster1,
    title: "JACK OF ALL TRADES",
    label: "Jack of Trades",
    points: [
      "I’m not the type to get boxed into one strict specialty.",
      "I genuinely enjoy crossing boundaries and tying sleek front-end design tightly to complex backend logic.",
      "One day I'm obsessing over the physics of a framer-motion UI animation or designing components in Figma.",
      "The next, I'm refactoring a massive database query to run twice as fast."
    ]
  },
  {
    id: 1,
    poster: poster2,
    title: "I ENJOY CREATIVITY",
    label: "I Enjoy Creativity",
    points: [
      "I don't just write functional code; I view programming as a digital canvas.",
      "Whether bridging vibrant typography or dreaming up dynamic micro-animations, I approach it creatively.",
      "I fundamentally believe highly scalable software should also be breathtaking to look at."
    ]
  },
  {
    id: 2,
    poster: poster3,
    title: "WE SOLVE PROBLEMS",
    label: "Solver",
    points: [
      "Debugging isn't a chore to me, it's a puzzle waiting to be unlocked.",
      "I thrive on diving deep into massively complex web architectures.",
      "I rapidly identify exact points of failure and engineer elegant, permanent systems.",
      "Bring me your absolute hardest technical roadblocks, and I guarantee I'll find a stable way out."
    ]
  },
  {
    id: 3,
    poster: poster4,
    title: "WHAT I USE?",
    label: "Skills",
    points: [
      "React, Next.js, and Framer Motion for crafting buttery smooth client interfaces.",
      "Python, Node.js, and PostgreSQL for lifting the heavy data in the background.",
      "I adapt fast. I'm completely framework-agnostic and use whatever high-end tool tears down the roadblock in front of me."
    ]
  }
]

const FifthSection = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [pendingSlide, setPendingSlide] = useState(null)
  const current = slideData[activeSlide]

  const handleSlideChange = (index) => {
    if (index === activeSlide || pendingSlide !== null) return;
    
    // Trigger transition overlay
    setPendingSlide(index);
    
    // Halfway through transition, swap the actual content underneath securely
    setTimeout(() => {
      setActiveSlide(index);
    }, 550); // Overlay takes ~600ms to cover screen
    
    // Clear overlay state so it exits natively upwards
    setTimeout(() => {
      setPendingSlide(null);
    }, 1100);
  }
  
  return (
    <div className="w-screen h-screen bg-[#FEF9EE] shrink-0 relative flex flex-col xl:flex-row font-poppins text-black overflow-hidden">
      
      {/* 💥 BRUTALIST FULL-PAGE TRANSITION OVERLAY */}
      <AnimatePresence>
        {pendingSlide !== null && (
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 z-[100] bg-[#1D63ED] flex items-center justify-center"
          >
             <h1 className="text-[#FEF9EE] font-black text-[15vw] uppercase tracking-tighter text-center px-4 leading-[0.85]">
                {slideData[pendingSlide].title}
             </h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Mobile Top / Desktop Left: Massive Poster Display */}
      <div className="w-full h-[55vh] md:h-[50vh] xl:h-full xl:w-[42%] shrink-0 bg-[#08060d] flex items-center justify-center p-6 lg:p-10 xl:p-8 xl:border-r-[3px] xl:border-r-[#333]">
        <img 
          src={current.poster} 
          alt={current.title} 
          className="w-full h-full object-contain transition-opacity duration-500" 
        />
      </div>

      {/* 2. Mobile Bottom / Desktop Right: Copy and Carousel Grid */}
      <div className="w-full h-[45vh] md:h-[50vh] xl:h-full xl:w-[58%] flex flex-col justify-between py-4 px-5 md:py-8 lg:px-[8vw] xl:pt-10 xl:pb-8 xl:px-[4vw]">
        
        {/* Title */}
        <h1 className="text-[7.5vw] md:text-[6vw] lg:text-[5vw] xl:text-[4vw] font-black tracking-tighter leading-none text-[#08060d] uppercase shrink-0">
          {current.title}
        </h1>

        {/* Status Counter */}
        <div className="flex items-center gap-3 py-2 md:py-3 shrink-0">
          <span className="text-[4vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.1vw] font-black text-[#08060d] tracking-widest">
            {String(activeSlide + 1).padStart(2, '0')}
          </span>
          <div className="flex-1 h-[2px] bg-black/15 relative">
            <div 
              className="absolute top-0 left-0 h-full bg-[#08060d] transition-all duration-500 ease-out"
              style={{ width: `${((activeSlide + 1) / slideData.length) * 100}%` }}
            />
          </div>
          <span className="text-[4vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.1vw] font-light text-black/30 tracking-widest">
            {String(slideData.length).padStart(2, '0')}
          </span>
        </div>

        {/* Description - only first 2 points on mobile/tablet, all on desktop */}
        <div className="flex-1 flex flex-col justify-center overflow-hidden py-2 md:py-0">
          <div className="space-y-2 md:space-y-4 lg:space-y-5 xl:space-y-3 text-gray-700 md:text-gray-800 text-[3.2vw] md:text-[2.2vw] lg:text-[2vw] xl:text-[1.2vw] leading-snug lg:leading-relaxed xl:max-w-[85%] xl:font-light">
            {current.points.slice(0, 2).map((point, index) => (
              <p key={index} className="xl:hidden">{point}</p>
            ))}
            {current.points.map((point, index) => (
              <p key={index} className="hidden xl:block">{point}</p>
            ))}
          </div>
        </div>

        {/* 4-Up Thumbnail Gallery — pills hidden on tablet to prevent squeezing overlaps */}
        <div className="flex flex-row justify-between items-end gap-2 md:gap-4 xl:gap-5 w-full shrink-0 mt-4 md:mt-6 xl:mt-0">
          {slideData.map((slide, index) => (
            <div 
              key={slide.id}
              onClick={() => handleSlideChange(index)}
              className="flex flex-col items-center gap-1 xl:gap-3 w-[23%] md:w-1/4 group cursor-pointer"
            >
              {/* Pill — strictly hide below xl to prevent squeezing overlaps */}
              <div 
                className={`hidden xl:block xl:text-[10px] 2xl:text-[12px] border rounded-full px-4 py-1 font-bold uppercase transition-colors tracking-widest whitespace-nowrap ${
                  activeSlide === index 
                    ? 'bg-black text-[#FEF9EE] border-black' 
                    : 'bg-transparent text-black border-black group-hover:bg-black group-hover:text-[#FEF9EE]'
                }`}
              >
                {slide.label}
              </div>
              
              {/* Thumbnail Image */}
              <div className={`w-full rounded-lg md:rounded-xl xl:rounded-2xl overflow-hidden bg-black transition-all duration-300 ${
                activeSlide === index 
                  ? 'ring-2 ring-[#1D63ED] xl:ring-black xl:-translate-y-2 scale-105 xl:scale-100' 
                  : 'opacity-70 group-hover:opacity-100 xl:group-hover:-translate-y-1'
              }`}>
                <img 
                  src={slide.poster} 
                  alt={slide.label} 
                  className="w-full h-auto object-cover aspect-[3/4]" 
                />
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default FifthSection
