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
  HEIGHT: '400vh',
  TRANSFORM: [0, 0.2, 0.4, 0.6, 0.8, 1],
  VALUES: ['-66.666%', '-66.666%', '-33.333%', '-33.333%', '0%', '0%'],
  PHASES: [
    { start: 0.0, end: 0.2, action: 'Dwell on ThirdSection' },
    { start: 0.2, end: 0.4, action: 'Slide Third to Fourth' },
    { start: 0.4, end: 0.6, action: 'Dwell on FourthSection (text shreds)' },
    { start: 0.6, end: 0.8, action: 'Slide Fourth to Fifth' },
    { start: 0.8, end: 1.0, action: 'Dwell on FifthSection' }
  ]
};

export const SCROLL_TRACK_2_MOBILE = {
  HEIGHT: '400vh',
  TRANSFORM: [0, 0.2, 0.4, 0.6, 0.8, 1],
  VALUES: ['-66.666%', '-66.666%', '-33.333%', '-33.333%', '0%', '0%'],
  // Matches desktop for seamless 3-screen geometric scale
};

export const EASING = [0.76, 0, 0.24, 1];

export const VIEWPORT_CONFIG = {
  ONCE: true,
  MARGIN: '-15%'
};
