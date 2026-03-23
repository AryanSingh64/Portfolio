import React from 'react';
import { motion } from 'framer-motion';

const FifthSectionOverlay = ({ pendingSlide, slideData }) => {
  if (pendingSlide === null) return null;

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="absolute inset-0 z-[100] bg-[#1D63ED] flex items-center justify-center"
    >
      <h1 className="text-[#FEF9EE] font-black text-[15vw] uppercase tracking-tighter text-center px-4 leading-[0.85]">
        {slideData[pendingSlide].title}
      </h1>
    </motion.div>
  );
};

export default FifthSectionOverlay;
