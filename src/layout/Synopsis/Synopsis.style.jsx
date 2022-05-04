import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';
import { Wrapper } from '../../common/Wrapper';
import { breakpoints } from '../../constants/breakpoints';

export const SynopsisWrapper = styled(Wrapper)`
  ${tw`
    flex  
    flex-col
    py-4
  `}
`;

export const SynopsisContent = styled(motion.div)`
  ${tw`
    text-lg 
    relative
  `}
  column-gap : 2rem;

   
  @media screen and (min-width:${breakpoints.md}px){
    column-count: 3;
  }

  @media screen and (min-width:${breakpoints.lg}px){
    column-gap : 2.8rem;
  }
`;

export const Paragraph = styled.p`
  ${tw`
    mb-6
    md:mb-3 
    z-10
  `}
`;

export const Quote = styled(Paragraph)`
  ${tw`
    text-xl 
    text-accent
    italic
  `}
`;
