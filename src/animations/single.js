import { outSine } from './ease';

export const slideUp = {
  hidden: {
    opacity: 0,
    y: '20%',
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: outSine,
    },
  },
};

export const slideUpShrink = {
  hidden: {
    opacity: 0,
    y: '50%',
    scale: 1.1,
  },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: outSine,
    },
  },
};

export const brandSlideRight = {
  hidden: {
    opacity: 0,
    x: '-100%',
    scale: 1.5,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: outSine,
    },
  },
};
