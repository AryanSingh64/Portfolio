import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import FifthSectionOverlay from './FifthSectionOverlay';
import PosterDisplay from './PosterDisplay';
import SlideContent from './SlideContent';
import CarouselThumbnail from './CarouselThumbnail';

import poster1 from '../assets/Poster/01.png';
import poster2 from '../assets/Poster/02.png';
import poster3 from '../assets/Poster/03.png';
import poster4 from '../assets/Poster/04.png';

const slideData = [
  {
    id: 0,
    poster: poster1,
    title: "JACK OF ALL TRADES",
    label: "Jack of Trades",
    points: [
      "I'm not the type to get boxed into one strict specialty.",
      "I genuinely enjoy crossing boundaries and tying sleek front-end design tightly to complex backend logic.",
      "One day I'm obsessing over the physics of a framer-motion UI animation or designing components in Figma.",
      "The next, I'm refactoring a massive database query to run twice as fast."
    ]
  },
  {
    id: 1,
    poster: poster2,
    title: "I ENJOY CREATIVITY",
    label: "I Enjoy Creativity",
    points: [
      "I don't just write functional code; I view programming as a digital canvas.",
      "Whether bridging vibrant typography or dreaming up dynamic micro-animations, I approach it creatively.",
      "I fundamentally believe highly scalable software should also be breathtaking to look at."
    ]
  },
  {
    id: 2,
    poster: poster3,
    title: "WE SOLVE PROBLEMS",
    label: "Solver",
    points: [
      "Debugging isn't a chore to me, it's a puzzle waiting to be unlocked.",
      "I thrive on diving deep into massively complex web architectures.",
      "I rapidly identify exact points of failure and engineer elegant, permanent systems.",
      "Bring me your absolute hardest technical roadblocks, and I guarantee I'll find a stable way out."
    ]
  },
  {
    id: 3,
    poster: poster4,
    title: "WHAT I USE?",
    label: "Skills",
    points: [
      "React, Next.js, and Framer Motion for crafting buttery smooth client interfaces.",
      "Python, Node.js, and PostgreSQL for lifting the heavy data in the background.",
      "I adapt fast. I'm completely framework-agnostic and use whatever high-end tool tears down the roadblock in front of me."
    ]
  }
];

const FifthSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [pendingSlide, setPendingSlide] = useState(null);
  const current = slideData[activeSlide];

  const handleSlideChange = (index) => {
    if (index === activeSlide || pendingSlide !== null) return;

    setPendingSlide(index);

    setTimeout(() => {
      setActiveSlide(index);
    }, 350);

    // Clear pendingSlide after the overlay animation completes (1.2s)
    setTimeout(() => {
      setPendingSlide(null);
    }, 1200);
  };

  return (
    <div className="w-screen h-screen bg-[#FEF9EE] shrink-0 relative flex flex-col desk:flex-row font-poppins text-black overflow-hidden">
      <FifthSectionOverlay
        pendingSlide={pendingSlide}
        slideData={slideData}
      />

      {/* Poster Display */}
      <PosterDisplay poster={current.poster} />

      {/* Content and Carousel */}
      <div className="w-full h-[50vh] md:h-[55vh] desk:h-full desk:w-[58%] flex flex-col justify-between py-3 px-5 md:py-5 desk:pt-10 desk:pb-8 desk:px-[4vw]">
        <SlideContent
          title={current.title}
          activeSlide={activeSlide}
          totalSlides={slideData.length}
          points={current.points}
        />

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-4 gap-2 md:gap-3 desk:gap-4 w-full shrink-0 mt-2 desk:mt-0 items-end">
          {slideData.map((slide) => (
            <CarouselThumbnail
              key={slide.id}
              slide={slide}
              isActive={activeSlide === slide.id}
              onSlideChange={handleSlideChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
