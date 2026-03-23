import React from 'react';
import { motion } from 'framer-motion';

const FifthSectionOverlay = ({ pendingSlide, slideData }) => {
  if (pendingSlide === null) return null;

  return (
    <motion.div
      key={pendingSlide}
      initial={{ y: '100%' }}
      animate={{ y: '-100%' }}
      transition={{
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
        times: [0, 0.3, 1]
      }}
      className="absolute inset-0 z-[100] bg-[#1D63ED] flex items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-[#FEF9EE] font-black text-[15vw] uppercase tracking-tighter text-center px-4 leading-[0.85]"
      >
        {slideData[pendingSlide].title}
      </motion.h1>
    </motion.div>
  );
};

export default FifthSectionOverlay;
