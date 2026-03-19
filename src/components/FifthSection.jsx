import React, { useState } from 'react'
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

  const current = slideData[activeSlide]

  return (
    <div className="w-full h-screen bg-[#FEF9EE] text-black flex flex-col md:flex-row shrink-0 md:w-screen relative overflow-hidden font-poppins">
      
      {/* Left Column: Massive Poster Display */}
      <div className="w-full md:w-[42%] h-[40vh] md:h-full shrink-0 bg-black flex items-center justify-center p-4 md:p-8">
        <img 
          src={current.poster} 
          alt={current.title} 
          className="w-full h-full object-contain transition-opacity duration-500" 
        />
      </div>

      {/* Right Column: Copy and Carousel */}
      {/* pt-8 anchors text high, pb-4 locks the extremely bottom edge of the cards to exactly 1rem from the screen bottom! */}
      <div className="w-full md:w-[58%] h-full flex flex-col pt-6 md:pt-10 pb-4 px-8 md:px-[4vw]">
        
        {/* 1. Top Heading - Snapped strictly toward the top */}
        <h1 className="text-[12vw] md:text-[5vw] font-black tracking-tighter leading-[0.9] text-[#08060d] uppercase shrink-0">
          {current.title}
        </h1>

        {/* 2. Middle Content - Flex-1 dynamically forces these bullet points perfectly centered within the remaining space! */}
        <div className="flex-1 flex flex-col justify-center">
          <ul className="space-y-3 md:space-y-4 text-base md:text-[1.2vw] font-light text-gray-800 tracking-wide leading-relaxed max-w-[90%] md:max-w-[85%] list-disc pl-5 marker:text-black">
            {current.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Bottom Thumbnail Gallery */}
        <div className="flex flex-row justify-between items-end gap-3 md:gap-5 w-full">
          
          {slideData.map((slide, index) => (
            <div 
              key={slide.id}
              onClick={() => setActiveSlide(index)}
              className="flex flex-col items-center gap-2 md:gap-3 w-1/4 group cursor-pointer"
            >
              {/* Pill Button */}
              <div 
                className={`border border-black rounded-[2rem] px-2 md:px-4 py-1 text-[8px] md:text-[10px] font-bold uppercase transition-colors tracking-widest ${
                  activeSlide === index ? 'bg-black text-[#FEF9EE]' : 'bg-transparent text-black group-hover:bg-black group-hover:text-[#FEF9EE]'
                }`}
              >
                {slide.label}
              </div>
              
              {/* Thumbnail Image */}
              <div className={`w-full rounded-xl md:rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 ${
                activeSlide === index ? '-translate-y-2 ring-2 ring-black' : 'group-hover:-translate-y-1'
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
