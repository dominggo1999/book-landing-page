import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { scroller, Events } from 'react-scroll';
import {
  HeaderWrapper,
  HeaderContent,
  Brand,
  Navigation,
  NavItem,
  MenuIcon,
  NavigationMobile,
  NavigationItemMobile,
} from './Header.style';
import { navigationLinks } from '../../data/navigationLinks';
import useShowNavigation from '../../hooks/useShowNavigation';
import useActiveNavLink from '../../hooks/useActiveNavLink';
import { headerHeight } from '../../constants/headerHeight';

const remToPixel = (rem) => parseFloat(rem.replace('em', '')) * parseFloat(getComputedStyle(document.documentElement).fontSize);

// Detect when smooth scroll events end
Events.scrollEvent.register('end', (to, element) => {
  window.location.hash = `#${to}`;
});

const Header = () => {
  const { showNavigation, toggleNavigation } = useShowNavigation();
  const { navigationRef, active } = useActiveNavLink();

  const scrollToTarget = (href) => {
    scroller.scrollTo(href.replace('#', ''), {
      duration: 1600,
      smooth: 'easeInOutQuint',
      offset: -remToPixel(headerHeight),
      ignoreCancelEvents : true
    });
  };

  const handleMobileNavClick = (href) => {
    toggleNavigation();
    scrollToTarget(href);
  };

  return (
    <HeaderWrapper
      style={{ height: headerHeight }}
      id="header"
    >
      <HeaderContent>
        <Brand href="#hero">
          Lorem
        </Brand>
        <MenuIcon onClick={toggleNavigation}>
          {
            showNavigation
              ? <AiOutlineClose />
              : <AiOutlineMenu />
          }
        </MenuIcon>
        <Navigation ref={navigationRef}>
          {
            navigationLinks?.length && navigationLinks.map((link, id) => {
              const isActive = id === active;
              return (
                <NavItem
                  isActive={isActive}
                  key={`navigation-link-${link.name}`}
                >
                  <button
                    role="link"
                    onClick={() => scrollToTarget(link.href)}
                  >{link.name}
                  </button>
                </NavItem>
              );
            })
          }
        </Navigation>

        {/* Mobile Navigation */}
        {
          showNavigation && (
            <NavigationMobile>
              {
                navigationLinks?.length && navigationLinks.map((link, id) => {
                  const isActive = id === active;

                  return (
                    <NavigationItemMobile
                      isActive={isActive}
                      key={`navigation-link-mobile-${link.name}`}
                    >
                      <button
                        role="link"
                        onClick={() => handleMobileNavClick(link.href)}
                      >{link.name}
                      </button>
                    </NavigationItemMobile>
                  );
                })
              }
            </NavigationMobile>
          )
        }

      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
