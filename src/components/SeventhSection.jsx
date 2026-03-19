import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img54 from '../assets/MusicAlubm/image 54.png';
import img55 from '../assets/MusicAlubm/image 55.png';
import img56 from '../assets/MusicAlubm/image 56.png';
import img57 from '../assets/MusicAlubm/image 57.png';
import img58 from '../assets/MusicAlubm/image 58.png';
import img59 from '../assets/MusicAlubm/image 59.png';

const albums = [img54, img55, img56, img57, img58, img59];

const SeventhSection = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: message })
      });
      if (res.ok) {
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
    <div className="w-full bg-[#111111] text-[#f4f4f4] flex flex-col overflow-hidden font-poppins min-h-screen">
      
      {/* 1. MUSIC MARQUEE BANNER */}
      {/* Removed vertical padding so images sit absolutely flush against the top and bottom boundaries */}
      <div className="w-full border-b border-[#333] overflow-hidden flex bg-[#111111]">
        <motion.div 
          className="flex items-center shrink-0 w-max"
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        >
          {/* We duplicate the entire array block EXACTLY twice. Translating to -50% creates a seamless loop! */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <h2 className="text-[12vw] md:text-[6vw] font-serif tracking-tight pr-12 pl-12 shrink-0">
                I Love Music
              </h2>
              <div className="flex shrink-0">
                {albums.map((img, idx) => (
                  <img 
                    key={idx} 
                    src={img} 
                    alt="album" 
                    className="h-[20vw] md:h-[12vw] w-[20vw] md:w-[12vw] object-cover shrink-0 select-none grayscale hover:grayscale-0 transition-all duration-300" 
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 2. MAIN FOOTER GRID */}
      <div className="w-full flex-1 flex flex-col md:flex-row bg-[#111111]">
        
        {/* LEFT COLUMN: Links */}
        <div className="w-full md:w-1/2 flex flex-col justify-center py-16 md:py-24 px-8 md:px-[8vw] border-b md:border-b-0 md:border-r border-[#333]">
          <ul className="flex flex-col gap-6 md:gap-8 font-serif text-[12vw] md:text-[5vw] leading-[1.1] tracking-tight">
            <li className="hover:text-gray-400 hover:ml-4 cursor-pointer transition-all w-fit duration-300">Projects</li>
            <li className="hover:text-gray-400 hover:ml-4 cursor-pointer transition-all w-fit duration-300">Linkedin</li>
            <li className="hover:text-gray-400 hover:ml-4 cursor-pointer transition-all w-fit duration-300">Github</li>
            <li className="hover:text-gray-400 hover:ml-4 cursor-pointer transition-all w-fit duration-300">Instagram</li>
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full md:w-1/2 flex flex-col">
          
          {/* Right Top Area */}
          <div className="flex-1 flex flex-col justify-center py-12 md:py-16 px-8 md:px-[6vw] border-b border-[#333]">
            <div className="font-serif">
              <span className="text-xl md:text-2xl text-[#a3a3a3]">I live in </span>
              <span className="text-5xl md:text-6xl tracking-widest pl-2">INDIA</span>
            </div>
            
            <div className="w-full flex justify-end mt-12 md:mt-6">
              <h2 className="font-serif text-[10vw] md:text-[5vw] tracking-tight hover:italic cursor-pointer transition-all">
                Contact Me
              </h2>
            </div>
            
            <div className="mt-12 md:mt-16">
              <p className="text-[#a3a3a3] text-sm md:text-base mb-1">Reach me out at</p>
              <p className="font-serif text-lg md:text-2xl tracking-wide selection:bg-white selection:text-black">
                aryansingh7598@gmail.com
              </p>
            </div>
          </div>

          {/* Right Bottom Area: Contact Form segment */}
          <div className="py-12 md:py-16 px-8 md:px-[6vw] flex flex-col justify-center">
            <p className="font-serif text-xl md:text-2xl mb-8">Drop A Message?</p>
            
            <div className="w-full flex items-center border border-[#444] rounded-md px-6 py-4 bg-transparent focus-within:border-white focus-within:bg-[#1a1a1a] transition-all group">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={status === 'sent' ? "Message Sent!" : status === 'error' ? "Error saving message" : "Just type anything?"}
                disabled={status === 'sending' || status === 'sent'}
                className="w-full bg-transparent outline-none font-serif text-[#d1d1d1] text-lg md:text-xl placeholder:text-[#555] disabled:opacity-50"
              />
              <button 
                onClick={handleSendMessage}
                disabled={status === 'sending' || status === 'sent' || !message.trim()}
                className="text-[#555] opacity-50 hover:opacity-100 hover:text-white transition-opacity ml-4 text-2xl outline-none disabled:opacity-20"
              >
                {status === 'sent' ? '✓' : '→'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
