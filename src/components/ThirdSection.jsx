import React from 'react'
import vectorImg from '../assets/Vector 42.png'

const ThirdSection = () => {
  return (
    <div className="w-full h-screen bg-[#E83F38] text-white flex items-center justify-center relative overflow-hidden shrink-0 md:w-screen">

      {/* Background Vector Image */}
      <img
        src={vectorImg}
        alt="Scribble Background"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] md:w-[70vw] h-auto object-contain opacity-90 pointer-events-none z-0"
      />

      {/* Typography Block */}
      <div className="relative z-10 flex flex-col items-center text-center font-serif text-[10vw] md:text-[6vw] font-bold leading-[1.1] tracking-wide">
        <h2 className="w-fit mx-auto border-b-[2px] md:border-b-[4px] border-white pb-0 md:pb-1 mb-1 md:mb-2 text-white">I CREATE</h2>
        <h2 className="w-fit mx-auto border-b-[2px] md:border-b-[4px] border-white pb-0 md:pb-1 mb-1 md:mb-2 text-white">PRODUCTS</h2>
        <h2>THAT MAKE</h2>
        <h2>PEOPLE'S</h2>
        <h2>LIFE EASIER</h2>
      </div>

    </div>
  )
}

export default ThirdSection
