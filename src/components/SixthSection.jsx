import React from 'react'
import { motion } from 'framer-motion'
import gitfix from '../assets/Gitfix.webp'
import docfix from '../assets/Docfix.webp'
import wordlens from '../assets/Wordlens.webp'
import aethereye from '../assets/AetherEye.webp'
import wip from '../workinprogress.webp'

const statusStyles = {
  'Live': 'bg-[#1D63ED] text-white',
  'Store': 'bg-black text-[#FEF9EE]',
  'Offline': 'bg-[#a3a3a3] text-black',
  'WIP': 'bg-amber-400 text-black',
}

const projectsData = [
  {
    id: "01",
    title: "GitFixAI",
    desc: "Flagship. Autonomous LLM agent that detects issues in GitHub repos, patches code, and opens PRs.",
    stack: "React, FastAPI, WebSockets",
    date: "19 Feb 2026",
    github: "https://github.com/AryanSingh64/GItFIxAI",
    live: "https://gitfixai.vercel.app",
    status: "Live",
    image: gitfix
  },
  {
    id: "02",
    title: "DocFix",
    desc: "Production PDF SaaS toolkit. Compression, merging, AI summarization with Gemini & Stripe.",
    stack: "Next.js, TS, Tailwind",
    date: "17 Jan 2026",
    github: "https://github.com/AryanSingh64/DocFix",
    live: "https://docfix-dev.onrender.com",
    status: "Live",
    image: docfix
  },
  {
    id: "03",
    title: "WordLens",
    desc: "Chrome extension with floating AI definitions and translations via double-click.",
    stack: "React, Vite, Manifest V3",
    date: "09 Mar 2026",
    github: "https://github.com/AryanSingh64/WordLens",
    live: "https://github.com/AryanSingh64/WordLens",
    status: "Store",
    image: wordlens
  },
  {
    id: "04",
    title: "Aether Eye",
    desc: "Hybrid-edge surveillance system with dual ESP32s, YOLO face recognition.",
    stack: "Python, WebSockets, RN",
    date: "Oct 2025",
    github: "https://github.com/AetherEye/AetherEye",
    live: "",
    status: "Offline",
    image: aethereye
  },
  {
    id: "05",
    title: "Dictator",
    desc: "Windows open-source voice intelligence desktop app using faster-whisper. Fully local STT.",
    stack: "Ollama, Electron, React",
    date: "2025",
    github: "",
    live: "",
    status: "WIP",
    image: wip
  },
  {
    id: "06",
    title: "Drops",
    desc: "Milanote-style visual canvas app with structured warm mineral aesthetic.",
    stack: "React, Framer Motion",
    date: "08 Feb 2026",
    github: "https://github.com/AryanSingh64/Drops",
    live: "",
    status: "WIP",
    image: wip
  }
];

const SixthSection = () => {
  return (
    <div id="projects" className="w-full min-h-screen bg-[#e5e5e5] text-[#08060d] flex flex-col font-poppins pt-12 md:pt-24 pb-32">
      
      {/* High top Header Clamp */}
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[20vw] font-black uppercase tracking-tighter leading-[0.75] ml-[-1vw] mb-12 md:mb-16 pointer-events-none"
      >
        PROJECTS
      </motion.h1>

      <div className="w-full flex flex-col">
        
        {/* Table Headers (Full-Width, Minimal) */}
        <div className="hidden md:grid grid-cols-12 gap-4 pb-2 border-b-2 border-black/80 font-bold text-xs tracking-widest uppercase px-4 md:px-8 text-black/60">
          <div className="col-span-1">No.</div>
          <div className="col-span-3">Title</div>
          <div className="col-span-2">Description</div>
          <div className="col-span-2">Tech Stack</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1">Date</div>
          <div className="col-span-2 text-right">Github</div>
        </div>

        {/* Minimal Table Rows */}
        <div className="flex flex-col border-t-2 border-black/20 md:border-transparent">
          {projectsData.map((project, idx) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              key={project.id} 
              className="group grid grid-cols-12 gap-y-2 md:gap-x-4 items-center border-b border-black/30 transition-colors duration-300 py-4 md:py-5 px-4 md:px-8 relative cursor-pointer hover:bg-[#08060d] hover:text-[#FEF9EE] hover:z-50"
            >
              
              {/* Massive Hover Pop-Out Image (Centered) */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block md:w-[25vw] aspect-video opacity-0 group-hover:opacity-100 z-10 pointer-events-none scale-90 group-hover:scale-100 transition-all duration-500 shadow-2xl rounded-lg ${project.status === 'WIP' ? 'object-contain bg-[#e5e5e5]' : 'object-cover'}`}
              />

              {/* ID */}
              <div className="col-span-1 text-sm md:text-base font-black relative z-20">
                {project.id}
              </div>
              
              {/* TITLE */}
              <div className="col-span-11 md:col-span-3 flex items-center gap-2 relative z-20 flex-wrap md:flex-nowrap">
                <span className="text-xl md:text-2xl font-bold tracking-tight">{project.title}</span>
                {/* Mobile-only status badge inline with title */}
                <span className={`md:hidden text-[9px] font-bold uppercase tracking-wider px-2 py-[2px] rounded-full ${statusStyles[project.status]}`}>
                  {project.status}
                </span>
                {project.live && typeof project.live === 'string' && project.live.length > 0 && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="ml-1 z-30 hover:scale-110 transition-transform" onClick={(e) => e.stopPropagation()}>
                    <svg 
                      className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity hover:opacity-100! hover:text-[#1D63ED]" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2.5" d="M7 17L17 7M17 7H9M17 7V15"></path>
                    </svg>
                  </a>
                )}
              </div>
              
              {/* DESCRIPTION */}
              <div className="col-span-11 col-start-2 md:col-start-auto md:col-span-2 text-[11px] md:text-xs font-medium opacity-80 leading-snug md:pr-4 relative z-20">
                {project.desc}
              </div>
              
              {/* TECH STACK */}
              <div className="col-span-11 col-start-2 md:col-start-auto md:col-span-2 text-[11px] md:text-xs font-medium opacity-80 leading-snug relative z-20 mt-1 md:mt-0">
                <span className="md:hidden font-bold opacity-50 mr-1">STACK: </span>
                {project.stack}
              </div>

              {/* Desktop status badge */}
              <div className="hidden md:flex col-span-1 relative z-20 items-center">
                <span className={`text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${statusStyles[project.status]}`}>
                  {project.status}
                </span>
              </div>
              
              {/* DATE */}
              <div className="col-span-5 col-start-2 md:col-start-auto md:col-span-1 text-xs md:text-sm font-semibold tracking-tight relative z-20 mt-2 md:mt-0">
                {project.date}
              </div>
              
              {/* GITHUB LINK */}
              <div className="col-span-6 md:col-span-2 text-right font-medium text-xs md:text-sm group-hover:translate-x-1 transition-transform relative z-30 flex justify-end items-center opacity-80 group-hover:opacity-100 mt-2 md:mt-0">
                {project.github && project.github.length > 0 ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#1D63ED] transition-colors" onClick={(e) => e.stopPropagation()}>
                    Github <span className="text-lg leading-none">→</span>
                  </a>
                ) : (
                  <span className="text-black/20 group-hover:text-white/20 flex items-center gap-1">—</span>
                )}
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default SixthSection
