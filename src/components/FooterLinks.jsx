import React from 'react';
import { navLink } from '../utils/navLink';

const FooterLinks = () => {
  const links = [
    { name: 'Projects', href: '#projects' },
    { name: 'Linkedin', href: 'https://www.linkedin.com/in/aryan64/' },
    { name: 'Github', href: 'https://github.com/AryanSingh64' },
    { name: 'Instagram', href: 'https://www.instagram.com/igaryan999' }
  ];

  return (
    <div className="w-full xl:w-1/2 flex flex-col justify-center py-16 md:py-24 px-6 md:px-[6vw] border-b-[3px] xl:border-b-0 xl:border-r-[3px] border-[#333]">
      <ul className="flex flex-col gap-4 md:gap-6 font-black uppercase text-[15vw] md:text-[7vw] leading-[0.85] tracking-tighter">
        {links.map((link) => (
          <li key={link.name} className="group cursor-pointer w-fit">
            <a
              href={link.href}
              target={link.name === 'Projects' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              onClick={
                link.name === 'Projects'
                  ? navLink('#projects', 'Projects')
                  : undefined
              }
              className="relative flex items-center transition-transform duration-300 ease-out group-hover:translate-x-[12vw] md:group-hover:translate-x-[6vw] outline-none"
              aria-label={`Visit ${link.name}`}
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
  );
};

export default FooterLinks;
