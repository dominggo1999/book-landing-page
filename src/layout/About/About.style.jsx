import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';
import { Wrapper } from '../../common/Wrapper';
import { Title, Subtitle } from '../../common/SectionHeader/SectionHeader.style';

export const AboutWrapper = styled(Wrapper)`
  ${tw`
    flex
    flex-col
    py-10
    items-center
    lg:flex-row 
    lg:my-10
  `}
`;

export const Header = styled.div`
  ${tw`
    lg:w-5/12
  `}
`;

export const CardsWrapper = styled(motion.div)`
  ${tw`
    gap-x-4
    w-full
    sm:flex 
    lg:w-7/12 
  `}
`;

export const CardsCol = styled(motion.div)`
  ${tw`
    w-full
    sm:w-1/2
    flex-col 
  `}

  &:nth-of-type(1){
    ${tw`
      lg:pt-20
    `}
  }
`;

export const CardItem = styled(motion.div)`
  ${tw`
    flex 
    flex-col 
    px-10 
    py-10
    rounded-md  
    mb-6
    border-opacity-10
    select-none
    border
    border-accent
  `}
`;

export const CardImage = styled.div`
  ${tw`
    relative 
    text-primary 
    mb-4
  `}

  svg {
    ${tw`
      w-12 
      h-12
      lg:w-16 
      lg:h-16
    `}
  }

  svg path, svg text{
    ${tw`
      fill-current text-accent
    `}
  }
`;

export const CardLabel = styled.div`
  ${tw`
    font-secondary 
    text-2xl 
  `}
`;

export const CardText = styled.div`
  ${tw`
    text-lg
  `}
`;
