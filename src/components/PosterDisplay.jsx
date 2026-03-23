import React from 'react';

const PosterDisplay = ({ poster }) => {
  return (
    <div className="w-full h-[50vh] md:h-[45vh] desk:h-full desk:w-[42%] shrink-0 bg-[#08060d] flex items-center justify-center p-4 md:p-6 lg:p-8 desk:p-8 desk:border-r-[3px] desk:border-r-[#333]">
      <img
        src={poster}
        alt="Project poster"
        loading="lazy"
        className="w-full h-full object-contain transition-opacity duration-500"
      />
    </div>
  );
};

export default PosterDisplay;
