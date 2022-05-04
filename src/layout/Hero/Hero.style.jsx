import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';
import { Wrapper } from '../../common/Wrapper';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const HeroWrapper = styled(Wrapper)`
  ${tw`
    flex
    flex-col-reverse
    md:flex-row
    items-center
    mb-5 
    md:(
      mb-0
      h-[600px]
    )
  `}
`;

export const HeroText = styled(motion.div)`
  ${tw`
    flex 
    flex-col 
    md:w-1/2 
  `}
`;

export const SmallDescription = styled(motion.p)`
  ${tw`
    font-secondary 
    mb-1 
    text-accent
    text-sm
    lg:text-base
  `}
`;

export const Title = styled(motion.h1)`
  ${tw`
    text-4xl
    lg:text-6xl 
    font-secondary
    mb-2
    lg:mb-5
  `}
`;

export const Description = styled(motion.h2)`
  ${tw`
    text-lg
    lg:text-2xl   
    mb-6
  `}
`;

export const BuyButton = styled(motion.a)`
  ${tw`
    py-2
    px-3
    self-start
    bg-accent
    rounded 
    md:text-lg 
    text-white 
    hover:bg-accent-lighter
  `}
`;

export const BookCover = styled.div`
  ${tw`
    w-full
    md:w-1/2 
    flex
    justify-center 
    items-center 
    py-10 
    md:p-0
  `}
`;

export const ImageWrapper = styled.div`
  ${tw`
    w-[70%] 
    lg:w-[60%]
  `}
`;
