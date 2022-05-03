import React, {
  useLayoutEffect, useRef, useState,
} from 'react';
import { navigationLinks } from '../data/navigationLinks';

const getActiveElement = (rects) => {
  if (rects.length === 0) {
    return -1;
  }

  const closest = rects.reduce(
    (acc, item, index) => {
      if (Math.abs(acc.position) < Math.abs(item.y)) {
        return acc;
      }

      return {
        index,
        position: item.y,
      };
    },
    { index: 0, position: rects[0].y },
  );

  return closest.index;
};

const useActiveNavLink = () => {
  const navigationRef = useRef();
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    const handleScroll = () => {
      // Get all navigation links
      const sections = navigationLinks.map((item) => document.querySelector(item.href)).filter((i) => i);

      // Hero section doesn't have navlink, so need to be added manually
      const heroSection = document.querySelector('#hero');

      sections.push(heroSection);

      if(!sections.length) return;

      const activeLink = getActiveElement(sections.map((d) => d.getBoundingClientRect()));
      setActive(activeLink);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { navigationRef, active };
};

export default useActiveNavLink;
