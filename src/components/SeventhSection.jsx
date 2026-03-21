import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img54 from '../assets/MusicAlubm/image 54.webp';
import img55 from '../assets/MusicAlubm/image 55.webp';
import img56 from '../assets/MusicAlubm/image 56.webp';
import img57 from '../assets/MusicAlubm/image 57.webp';
import img58 from '../assets/MusicAlubm/image 58.webp';
import img59 from '../assets/MusicAlubm/image 59.webp';

const albums = [img54, img55, img56, img57, img58, img59];

const SeventhSection = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ 
          // Replace this string with the actual API key you get from Web3Forms:
          access_key: "3b8e5e8a-6692-496e-adc2-68ffbc73fe48", 
          subject: "New Message from Portfolio Website",
          message: message 
        })
      });
      
      const json = await res.json();
      
      if (res.status === 200 && json.success) {
        setStatus('sent');
        setMessage('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div id="contact" className="w-full bg-[#08060d] text-[#FEF9EE] flex flex-col overflow-hidden font-poppins min-h-screen">
      
      {/* 1. MUSIC MARQUEE BANNER */}
      <div className="w-full border-b-[3px] border-[#333] overflow-hidden flex bg-[#08060d]">
        <motion.div 
          className="flex items-center shrink-0 w-max py-2 md:py-0"
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        >
          {/* We duplicate the entire array block EXACTLY twice. Translating to -50% creates a seamless loop! */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <h2 className="text-[14vw] md:text-[6vw] font-black uppercase tracking-tighter pr-12 pl-12 shrink-0 leading-none pb-2 md:pb-0">
                I LIKE MUSIC.
              </h2>
              <div className="flex shrink-0">
                {albums.map((img, idx) => (
                  <img 
                    key={idx} 
                    src={img} 
                    alt="album" 
                    className="h-[25vw] md:h-[12vw] w-[25vw] md:w-[12vw] object-cover shrink-0 select-none grayscale hover:grayscale-0 transition-all duration-300" 
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 2. MAIN FOOTER GRID */}
      <div className="w-full flex-1 flex flex-col xl:flex-row bg-[#08060d]">
        
        {/* LEFT COLUMN: Links */}
        <div className="w-full xl:w-1/2 flex flex-col justify-center py-16 md:py-24 px-6 md:px-[6vw] border-b-[3px] xl:border-b-0 xl:border-r-[3px] border-[#333]">
          <ul className="flex flex-col gap-4 md:gap-6 font-black uppercase text-[15vw] md:text-[7vw] leading-[0.85] tracking-tighter">
            {[
              { name: 'Projects', href: '#projects' },
              { name: 'Linkedin', href: 'https://www.linkedin.com/in/aryan64/' },
              { name: 'Github', href: 'https://github.com/AryanSingh64' },
              { name: 'Instagram', href: 'https://www.instagram.com/igaryan999' }
            ].map(link => (
              <li key={link.name} className="group cursor-pointer w-fit">
                <a 
                  href={link.href} 
                  target={link.name === 'Projects' ? '_self' : '_blank'} 
                  rel="noopener noreferrer" 
                  className="relative flex items-center transition-transform duration-300 ease-out group-hover:translate-x-[12vw] md:group-hover:translate-x-[6vw] outline-none"
                >
                  <span className="absolute right-full mr-2 md:mr-4 text-[#1D63ED] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </span>
                  <span className="text-[#FEF9EE] group-hover:text-white transition-colors duration-300">
                    {link.name}.
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full xl:w-1/2 flex flex-col">
          
          {/* Right Top Area */}
          <div className="flex-1 flex flex-col justify-center py-12 md:py-16 px-6 md:px-[6vw] border-b-[3px] border-[#333]">
            {/* Base / Location Stamp */}
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b-[3px] border-[#333] pb-6 mb-12">
              <span className="font-bold text-xs md:text-sm uppercase tracking-[0.3em] text-[#a3a3a3] mb-2 md:mb-1">
                [ Base Location ]
              </span>
              <span className="font-black text-[18vw] md:text-[8vw] tracking-tighter leading-none text-[#FEF9EE]">
                INDIA
              </span>
            </div>
            
            {/* Contact Stamp */}
            <div className="w-full flex flex-col">
              <h2 className="font-black uppercase text-[12vw] md:text-[5vw] leading-[0.85] tracking-tighter hover:text-[#1D63ED] cursor-pointer transition-colors w-fit">
                CONTACT ME.
              </h2>
              <p className="font-bold text-xs md:text-sm uppercase tracking-[0.2em] text-[#a3a3a3] mt-6 mb-1">
                Reach me out at
              </p>
              <p className="font-bold text-lg md:text-3xl tracking-tight selection:bg-[#FEF9EE] selection:text-[#08060d] w-fit border-b-[2px] border-transparent hover:border-[#FEF9EE] transition-colors pb-1">
                aryansingh7598@gmail.com
              </p>
            </div>
          </div>

          {/* Right Bottom Area: Contact Form segment */}
          <div className="py-12 md:py-16 px-6 md:px-[6vw] flex flex-col justify-center bg-[#111111]">
            <p className="font-bold text-sm md:text-base uppercase tracking-[0.2em] mb-6 text-[#a3a3a3]">
              Drop A Message.
            </p>
            
            {/* Brutalist Input Block */}
            <div className="w-full flex items-end border-b-[4px] border-[#333] focus-within:border-[#1D63ED] transition-colors group pb-3">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={status === 'sent' ? "RECEIVED." : status === 'error' ? "ERROR." : "TYPE HERE..."}
                disabled={status === 'sending' || status === 'sent'}
                className="w-full bg-transparent outline-none font-black uppercase text-[6vw] md:text-[3vw] tracking-tighter text-[#FEF9EE] placeholder:text-[#444] disabled:opacity-50"
              />
              <button 
                onClick={handleSendMessage}
                disabled={status === 'sending' || status === 'sent' || !message.trim()}
                className="text-[#333] group-focus-within:text-[#1D63ED] opacity-100 hover:text-[#FEF9EE] transition-colors ml-4 text-[8vw] md:text-[4vw] outline-none disabled:opacity-20 leading-none shrink-0"
              >
                {status === 'sent' ? '✓' : '↗'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
