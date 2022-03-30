import React from 'react';
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import {
  FooterWrapper,
  Header,
  Left,
  Right,
  Information,
  Contact,
  Content,
  Socmed,
  SocmedIcon,
} from './Footer.style';

const socmedLinks = [
  {
    link: 'https://www.instagram.com',
    icon: AiOutlineInstagram,
  },
  {
    link: 'https://www.facebook.com',
    icon: AiFillFacebook,
  },
  {
    link: 'https://www.twitter.com',
    icon: AiFillTwitterSquare,
  },
  {
    link: 'https://www.pinterest.com',
    icon: BsPinterest,
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
            <li>
              <Socmed>
                {socmedLinks?.length > 0 && socmedLinks.map((item) => {
                  return (
                    <SocmedIcon
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.link}
                      key={`footer-link-${item.link}`}
                    >
                      {item.icon()}
                    </SocmedIcon>
                  );
                })}
              </Socmed>
            </li>
          </Content>
        </Contact>
      </Right>
    </FooterWrapper>
  );
};

export default Footer;
