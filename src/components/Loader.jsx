import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scrolling while the loader is active
    document.body.style.overflow = 'hidden';

    let currentProgress = 0;
    // Rapidly tick up the progress counter randomly to simulate heavy asset loading
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 12) + 1;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        
        // Hold at 100% for a dramatic half-second before unmounting
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = ''; // Unlock scroll
        }, 600);
      }
      
      setProgress(currentProgress);
    }, 100);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [setLoading]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#08060d] text-[#FEF9EE] flex flex-col justify-end p-6 md:p-[6vw] overflow-hidden"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }} // Heavy, premium cubic-bezier easing
    >
      {/* Background massive structural watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-5 pointer-events-none">
        <h1 className="font-poppins font-black text-[40vw] leading-none tracking-tighter">
          PORTFOLIO
        </h1>
      </div>

      {/* Main Structural Loading Grid */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full border-b-[4px] md:border-b-[6px] border-[#333] pb-4 md:pb-6 relative z-10">
        
        <div className="flex flex-col mb-4 md:mb-0">
          {/* <span className="font-bold text-xs md:text-sm uppercase tracking-[0.3em] text-[#a3a3a3] mb-2">
            [ System Initialization ]
          </span> */}
          <h1 className="font-poppins font-black text-[15vw] md:text-[8vw] uppercase tracking-tighter leading-none text-[#FEF9EE] md:mb-[-1vw]">
            LOADING
          </h1>
        </div>

        <h1 className="font-poppins font-black text-[25vw] md:text-[14vw] tracking-tighter leading-none text-[#1D63ED] md:mb-[-2vw]">
          {progress}%
        </h1>

      </div>
    </motion.div>
  );
};

export default Loader;
