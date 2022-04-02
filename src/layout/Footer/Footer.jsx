import React from 'react';
import {
  FooterWrapper,
  Header,
  Left,
  Right,
  Information,
  Contact,
  Content,
} from './Footer.style';
import Socmed from '../../common/Socmed/Socmed';

const footerSocmedLinks = [
  {
    link: 'https://www.instagram.com',
    type: 'instagram',
  },
  {
    link: 'https://www.facebook.com',
    type: 'facebook',
  },
  {
    link: 'https://www.twitter.com',
    type: 'twitter',
  },
  {
    link: 'https://www.pinterest.com',
    type: 'pinterest',
  },
];

const Footer = () => {
  return (
    <FooterWrapper
      as="footer"
      id="footer"
    >
      <Left>
        <Header>Lorem Ipsum</Header>
        <Content as="p">
          Veniam Sequi molestias aut necessitatibus optio magni at natus accusamus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, obcaecat .
        </Content>
      </Left>
      <Right>
        <Information>
          <Header>Information</Header>
          <Content>
            <li><a href="#">Lorem Ipsum</a></li>
            <li><a href="#">Sit amet</a></li>
            <li><a href="#">Vel neque</a></li>
            <li><a href="#">Rutrum tellus</a></li>
          </Content>
        </Information>
        <Contact>
          <Header>Contact</Header>
          <Content>
            <li>loremipsum@placeholder.com</li>
            <li>(+123) 87654321</li>
            <li><Socmed socmedLinks={footerSocmedLinks} /></li>
          </Content>
        </Contact>
      </Right>
    </FooterWrapper>
  );
};

export default Footer;
