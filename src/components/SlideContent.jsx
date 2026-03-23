import React from 'react';

const SlideContent = ({
  title,
  activeSlide,
  totalSlides,
  points
}) => {
  return (
    <>
      <h1
        className="text-[7.5vw] md:text-[5.5vw] desk:text-[4vw] font-black tracking-tighter leading-none text-[#08060d] uppercase shrink-0"
        aria-level={2}
      >
        {title}
      </h1>

      {/* Status Counter */}
      <div className="flex items-center gap-3 py-2 md:py-3 shrink-0">
        <span className="text-[4vw] md:text-[2vw] desk:text-[1.1vw] font-black text-[#08060d] tracking-widest">
          {String(activeSlide + 1).padStart(2, '0')}
        </span>
        <div className="flex-1 h-[2px] bg-black/15 relative">
          <div
            className="absolute top-0 left-0 h-full bg-[#08060d] transition-all duration-500 ease-out"
            style={{ width: `${((activeSlide + 1) / totalSlides) * 100}%` }}
            role="progressbar"
            aria-valuenow={activeSlide + 1}
            aria-valuemin={1}
            aria-valuemax={totalSlides}
          />
        </div>
        <span className="text-[4vw] md:text-[2vw] desk:text-[1.1vw] font-light text-black/30 tracking-widest">
          {String(totalSlides).padStart(2, '0')}
        </span>
      </div>

      {/* Description */}
      <div className="flex-1 flex flex-col justify-center overflow-hidden py-1">
        <div className="space-y-2 md:space-y-3 desk:space-y-3 text-gray-700 text-[3.2vw] md:text-[2.2vw] desk:text-[1.2vw] leading-snug desk:leading-relaxed desk:max-w-[85%] desk:font-light">
          {points.slice(0, 2).map((point, index) => (
            <p key={index} className="desk:hidden">{point}</p>
          ))}
          {points.map((point, index) => (
            <p key={index} className="hidden desk:block">{point}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default SlideContent;
