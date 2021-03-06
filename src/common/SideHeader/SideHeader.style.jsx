import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';
import {
  Title as UnstyledTitle,
  Subtitle as UnstyledSubtitle,
} from '../SectionHeader/SectionHeader.style';

export const SideHeaderWrapper = styled(motion.div)`
  ${tw`
    flex 
    flex-col
    lg:pr-3
  `}
`;

export const Subtitle = styled(UnstyledSubtitle)`
  ${tw`
    lg:text-left
  `}
`;

export const Title = styled(UnstyledTitle)`
  ${tw`
    mb-2
    lg:text-left
  `}
`;

export const Description = styled(motion.div)`
  ${tw`
    text-base
    text-center
    mb-4
    text-lg 
    lg:mb-8
    lg:text-left
  `}
`;
