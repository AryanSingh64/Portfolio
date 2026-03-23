import React from 'react';

const LocationContact = () => {
  return (
    <div className="w-full xl:w-1/2 flex flex-col">
      {/* Right Top Area */}
      <div className="flex-1 flex flex-col justify-center py-12 md:py-16 px-6 md:px-[6vw] border-b-[3px] border-[#333]">
        {/* Base / Location Stamp */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-[3px] border-[#333] pb-4 md:pb-6 mb-8 md:mb-12">
          <span className="font-bold text-xs md:text-sm uppercase tracking-[0.3em] text-[#a3a3a3] mb-2 md:mb-1">
            [ Base Location ]
          </span>
          <span className="font-black text-[15vw] md:text-[8vw] lg:text-[6vw] xl:text-[5vw] tracking-tighter leading-none text-[#FEF9EE] break-words">
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
    </div>
  );
};

export default LocationContact;
