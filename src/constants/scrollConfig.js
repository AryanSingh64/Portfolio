/**
 * Scroll track configuration constants
 * Centralized to make animation adjustments predictable
 */

export const SCROLL_TRACK_1 = {
  HEIGHT: '200vh',
  TRANSFORM: [0, 0.6, 1],
  VALUES: ['0%', '-50%', '-50%'],
  DESCRIPTION: 'Hero -> NextFrontier: Slide Hero out, hold NextFrontier'
};

export const SCROLL_TRACK_2_DESKTOP = {
  HEIGHT: '500vh',
  TRANSFORM: [0, 0.2, 0.35, 0.5, 0.65, 1],
  VALUES: ['-66.666%', '-66.666%', '-33.333%', '-33.333%', '0%', '0%'],
  PHASES: [
    { start: 0.0, end: 0.2, action: 'Dwell on ThirdSection' },
    { start: 0.2, end: 0.35, action: 'Slide Third to Fourth' },
    { start: 0.35, end: 0.65, action: 'Dwell on FourthSection (text shreds)' },
    { start: 0.65, end: 1.0, action: 'Slide Fourth to Fifth & Dwell' }
  ]
};

export const SCROLL_TRACK_2_MOBILE = {
  HEIGHT: '500vh',
  TRANSFORM: [0, 0.2, 0.35, 0.5, 0.65, 1],
  VALUES: ['-66.666%', '-66.666%', '-33.333%', '-33.333%', '0%', '0%'],
  // Matches desktop for seamless 3-screen geometric scale
};

export const EASING = [0.76, 0, 0.24, 1];

export const VIEWPORT_CONFIG = {
  ONCE: true,
  MARGIN: '-15%'
};
