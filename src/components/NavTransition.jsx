import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NavTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetName, setTargetName] = useState("");

  useEffect(() => {
    const handleNav = (e) => {
      // Prevent rapid spam clicking
      if (isTransitioning) return;
      
      setIsTransitioning(true);
      setTargetName(e.detail.name);
      
      // Wait for the curtain to fully drop down (600ms)
      // Then teleport the browser instantly to the target coordinates!
      setTimeout(() => {
        if (e.detail.target === 'top-anchor') {
          window.scrollTo({ top: 0, behavior: 'instant' });
        } else {
          const targetElement = document.getElementById(e.detail.target.replace('#', ''));
          if (targetElement) {
             // Using instant behavior so we don't awkwardly smoothly scroll behind the curtain
             targetElement.scrollIntoView({ behavior: 'instant' });
          }
        }
      }, 600);

      // Retract the curtain away after the teleport is complete
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1200);
    };

    window.addEventListener('trigger-nav', handleNav);
    return () => window.removeEventListener('trigger-nav', handleNav);
  }, [isTransitioning]);

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div 
          initial={{ top: "-100%" }}
          animate={{ top: "0%" }}
          exit={{ top: "100%" }}
          // Using a snappy brutalist bezier curve custom ease
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999999] bg-[#08060d] flex items-center justify-center pointer-events-none"
        >
           <h1 className="text-[#FEF9EE] font-black text-[15vw] uppercase tracking-tighter text-center px-4 leading-[0.85] mix-blend-difference">
              NAVIGATING...
           </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavTransition;
