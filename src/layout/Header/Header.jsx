import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
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

const Header = () => {
  const { showNavigation, toggleNavigation } = useShowNavigation();
  const { navigationRef, active } = useActiveNavLink();

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
                  <a href={link.href}>{link.name}</a>
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
                      onClick={toggleNavigation}
                      key={`navigation-link-mobile-${link.name}`}
                    >
                      <a href={link.href}>{link.name}</a>
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
