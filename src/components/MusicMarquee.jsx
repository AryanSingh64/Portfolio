import React from 'react';
import { motion } from 'framer-motion';
import img54 from '../assets/MusicAlubm/image 54.webp';
import img55 from '../assets/MusicAlubm/image 55.webp';
import img56 from '../assets/MusicAlubm/image 56.webp';
import img57 from '../assets/MusicAlubm/image 57.webp';
import img58 from '../assets/MusicAlubm/image 58.webp';
import img59 from '../assets/MusicAlubm/image 59.webp';

const albumImages = [img54, img55, img56, img57, img58, img59];

const MusicMarquee = () => {
  return (
    <div className="w-full border-b-[3px] border-[#333] overflow-hidden flex bg-[#08060d]">
      <motion.div
        className="flex items-center shrink-0 w-max py-2 md:py-0"
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            <h2 className="text-[14vw] md:text-[6vw] font-black uppercase tracking-tighter pr-12 pl-12 shrink-0 leading-none pb-2 md:pb-0">
              I LIKE MUSIC.
            </h2>
            <div className="flex shrink-0">
              {albumImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="Album artwork"
                  loading="lazy"
                  width={300}
                  height={300}
                  className="h-[25vw] md:h-[12vw] w-[25vw] md:w-[12vw] object-cover shrink-0 select-none grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MusicMarquee;
