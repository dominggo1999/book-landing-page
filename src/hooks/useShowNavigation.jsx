import { useState, useEffect } from 'react';
import { breakpoints } from '../constants/breakpoints';

const useShowNavigation = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  useEffect(() => {
    const closeNavigation = () => {
      if(window.innerWidth >= breakpoints.lg) {
        showNavigation && toggleNavigation();
      }
    };
    window.addEventListener('resize', closeNavigation);

    closeNavigation();
    return () => {
      window.removeEventListener('resize', closeNavigation);
    };
  }, []);

  return { showNavigation, toggleNavigation };
};

export default useShowNavigation;
