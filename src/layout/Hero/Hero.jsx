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
import LazyLoadImage from '../../common/LazyLoadImage/LazyLoadImage';

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
          <LazyLoadImage
            width={600}
            height={766}
            src="/images/book-cover.png"
          />
        </ImageWrapper>
      </BookCover>

    </HeroWrapper>
  );
};

export default Hero;
