import React from 'react';
import {
  HeaderWrapper,
  HeaderContent,
  Brand,
  Navigation,
  NavItem,
} from './Header.style';

const Header = () => {
  return (
    <HeaderWrapper id="header">
      <HeaderContent>
        <Brand>
          Lorem
        </Brand>
        <Navigation>
          <NavItem>
            <a href="#">Synopsis</a>
          </NavItem>
          <NavItem>
            <a href="#">About</a>
          </NavItem>
          <NavItem>
            <a href="#">Sponsors</a>
          </NavItem>
          <NavItem>
            <a href="#">Chapters</a>
          </NavItem>
          <NavItem>
            <a href="#">Reviews</a>
          </NavItem>
          <NavItem>
            <a href="#">Author</a>
          </NavItem>
          <NavItem>
            <a href="#">Contact</a>
          </NavItem>
          <NavItem>
            <a href="#">FAQ</a>
          </NavItem>
        </Navigation>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
