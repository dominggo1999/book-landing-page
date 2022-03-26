import React, { useRef } from 'react';
import {
  HeroWrapper,
  HeroText,
  SmallDescription,
  Title,
  Description,
  BuyButton,
  BookCover,
  ImageWrapper,
} from './Hero.style';

const Hero = () => {
  const heroRef = useRef();

  return (
    <HeroWrapper
      ref={heroRef}
      id="hero"
    >
      <HeroText>
        <SmallDescription>
          Aliquam vitae finibus tortor pellentesque euismod.
        </SmallDescription>
        <Title>Lorem ipsum dolor sit, amet consectetur</Title>
        <Description>Praesent feugiat sapien a arcu tempus aliquam. Ut sagittis, ipsum eu lobortis mattis, metus neque pellentesque dui. Cras quis tortor eleifend, commodo lectus nec, tincidunt nibh.</Description>
        <BuyButton>Buy On Amazon</BuyButton>
      </HeroText>
      <BookCover>
        <ImageWrapper>
          <img
            src="/images/book-cover.png"
            alt="Cover"
            width="600"
            height="766"
          />
        </ImageWrapper>
      </BookCover>

    </HeroWrapper>
  );
};

export default Hero;
