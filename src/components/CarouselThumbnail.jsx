import React from 'react';

const CarouselThumbnail = ({
  slide,
  isActive,
  onSlideChange
}) => {
  return (
    <div
      className="flex flex-col items-center gap-1 desk:gap-2 group cursor-pointer w-full overflow-hidden"
      onClick={() => onSlideChange(slide.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSlideChange(slide.id);
        }
      }}
      aria-label={`View ${slide.label}`}
      aria-current={isActive ? 'true' : 'false'}
    >
      {/* Pill label for desktop */}
      <div
        className={`hidden desk:flex desk:text-[9px] 2xl:text-[11px] border rounded-full px-2 py-1 font-bold uppercase transition-colors tracking-widest whitespace-nowrap max-w-full overflow-hidden text-ellipsis items-center justify-center w-full text-center ${
          isActive
            ? 'bg-black text-[#FEF9EE] border-black'
            : 'bg-transparent text-black border-black group-hover:bg-black group-hover:text-[#FEF9EE]'
        }`}
      >
        {slide.label}
      </div>

      {/* Thumbnail image */}
      <div
        className={`w-full rounded-lg md:rounded-xl desk:rounded-2xl overflow-hidden bg-black transition-all duration-300 ${
          isActive
            ? 'ring-2 ring-[#1D63ED] desk:ring-black desk:-translate-y-1 scale-105 desk:scale-100'
            : 'opacity-70 group-hover:opacity-100 desk:group-hover:-translate-y-1'
        }`}
      >
        <img
          src={slide.poster}
          alt={`${slide.title} thumbnail`}
          className="w-full object-cover aspect-video desk:aspect-3/4 max-h-[16vh] desk:max-h-none"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default CarouselThumbnail;
