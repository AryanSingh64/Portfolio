import React from 'react'
import { motion } from 'framer-motion'
import poster1 from '../assets/Poster/01.png'
import poster2 from '../assets/Poster/02..png'
import poster3 from '../assets/Poster/03.png'
import poster4 from '../assets/Poster/04.png'
import heroImage from '../assets/hero.png'

const statusStyles = {
  'Completed': 'bg-emerald-500 text-white',
  'In Progress': 'bg-amber-400 text-black',
  'Live': 'bg-[#1D63ED] text-white',
}

const projectsData = [
  {
    id: '01',
    title: 'GitFix AI',
    desc: 'An intelligent AI assistant that resolves complex merge conflicts dynamically.',
    stack: 'React, Tailwind, GSAP',
    date: '18 Feb 2026',
    github: '#',
    live: true,
    status: 'Completed',
    image: poster1
  },
  {
    id: '02',
    title: 'DocFix App',
    desc: 'Automated pipeline to parse, format, and deploy enterprise documents.',
    stack: 'Next.js, TypeScript, PostgreSQL',
    date: '12 Jan 2026',
    github: '#',
    live: true,
    status: 'Live',
    image: poster2
  },
  {
    id: '03',
    title: 'Terminal X',
    desc: 'Heavy-duty localized shell execution through WebSocket integrations.',
    stack: 'Node.js, WebSockets, React',
    date: '04 Dec 2025',
    github: '#',
    live: true,
    status: 'Completed',
    image: poster3
  },
  {
    id: '04',
    title: 'Ghostscript UI',
    desc: 'Visual wrapper built over the standard engine for rapid rapid adjustments.',
    stack: 'FastAPI, Python, Vue.js',
    date: '21 Nov 2025',
    github: '#',
    live: true,
    status: 'Completed',
    image: poster4
  },
  {
    id: '05',
    title: 'Awwwards Clone',
    desc: 'Experimental high-performance layout reproducing smooth horizontal mechanics.',
    stack: 'Framer Motion, Tailwind',
    date: '30 Oct 2025',
    github: '#',
    live: false,
    status: 'In Progress',
    image: heroImage
  },
  {
    id: '06',
    title: 'Portfolio 26',
    desc: 'The current website. Showcasing organic CSS-grid transitions natively.',
    stack: 'React, Vite, CSS Grid',
    date: '10 Oct 2025',
    github: '#',
    live: false,
    status: 'Live',
    image: poster1
  }
]

const SixthSection = () => {
  return (
    <div className="w-full min-h-screen bg-[#e5e5e5] text-[#08060d] flex flex-col font-poppins pt-12 md:pt-24 pb-32">
      
      {/* High top Header Clamp */}
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[20vw] font-black uppercase tracking-tighter leading-[0.75] ml-[-1vw] mb-12 md:mb-16 pointer-events-none"
      >
        PROJECTS
      </motion.h1>

      <div className="w-full flex flex-col w-full">
        
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
              className="group grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-x-4 items-center border-b border-black/30 transition-colors duration-300 py-4 md:py-5 px-4 md:px-8 relative cursor-pointer hover:bg-[#08060d] hover:text-[#FEF9EE] hover:z-50"
            >
              
              {/* Massive Hover Pop-Out Image (Centered) */}
              <img 
                src={project.image}
                alt={project.title}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[25vw] aspect-video object-cover opacity-0 group-hover:opacity-100 z-10 pointer-events-none scale-90 group-hover:scale-100 transition-all duration-500 shadow-2xl"
              />

              {/* Data layer strictly clamped over the popout image using z-20 */}
              <div className="col-span-1 text-sm md:text-base font-black relative z-20">
                {project.id}
              </div>
              
              <div className="col-span-3 flex items-center gap-2 relative z-20 flex-wrap md:flex-nowrap">
                <span className="text-xl md:text-2xl font-bold tracking-tight">{project.title}</span>
                {/* Mobile-only status badge inline with title */}
                <span className={`md:hidden text-[9px] font-bold uppercase tracking-wider px-2 py-[2px] rounded-full ${statusStyles[project.status]}`}>
                  {project.status}
                </span>
                {project.live && (
                  <svg 
                    className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity hidden md:block" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2.5" d="M7 17L17 7M17 7H9M17 7V15"></path>
                  </svg>
                )}
              </div>
              
              <div className="col-span-2 text-[11px] md:text-xs font-medium opacity-80 leading-snug md:pr-4 relative z-20">
                {project.desc}
              </div>
              
              <div className="col-span-2 text-[11px] md:text-xs font-medium opacity-80 leading-snug relative z-20">
                {project.stack}
              </div>

              {/* Desktop status badge */}
              <div className="hidden md:flex col-span-1 relative z-20 items-center">
                <span className={`text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${statusStyles[project.status]}`}>
                  {project.status}
                </span>
              </div>
              
              <div className="col-span-1 text-xs md:text-sm font-semibold tracking-tight relative z-20">
                {project.date}
              </div>
              
              <div className="col-span-2 text-right font-medium text-xs md:text-sm group-hover:translate-x-1 transition-transform relative z-20 flex justify-end items-center gap-1 opacity-80 group-hover:opacity-100">
                Github <span className="text-lg leading-none">→</span>
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default SixthSection
