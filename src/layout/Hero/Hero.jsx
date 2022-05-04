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
import useAnimate from '../../hooks/useAnimate';
import { heroTextAnimation } from '../../animations/stagger';
import { slideUp } from '../../animations/single';

const Hero = () => {
  const heroRef = useRef();
  const [heroTextRef, heroTextAnimationControls] = useAnimate();

  return (
    <HeroWrapper
      ref={heroRef}
      id="hero"
    >
      <HeroText
        ref={heroTextRef}
        variants={heroTextAnimation}
        animate={heroTextAnimationControls}
        initial="hidden"
      >
        <SmallDescription variants={slideUp}>
          Aliquam vitae finibus tortor pellentesque euismod.
        </SmallDescription>
        <Title variants={slideUp}>Lorem ipsum dolor sit, amet consectetur</Title>
        <Description variants={slideUp}>Praesent feugiat sapien a arcu tempus aliquam. Ut sagittis, ipsum eu lobortis mattis, metus neque pellentesque dui. Cras quis tortor eleifend, commodo lectus nec, tincidunt nibh.</Description>
        <BuyButton
          target="_blank"
          rel="noopener noreferer"
          href="https://www.amazon.com/"
          variants={slideUp}
        >Buy On Amazon
        </BuyButton>
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
