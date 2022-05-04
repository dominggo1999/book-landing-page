import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';
import { Wrapper } from '../../common/Wrapper';

export const FaqWrapper = styled(Wrapper)`
  ${tw`
    flex 
    flex-col
  `}
`;

export const Questions = styled(motion.div)`
  ${tw`
    w-full
    grid
    grid-cols-1 
    gap-y-5
    items-start
    gap-x-6
    xl:gap-x-8
    md:grid-cols-2
  `}
`;

export const Answer = styled.p`
  ${tw`
    text-lg
    mb-4
  `}
`;
