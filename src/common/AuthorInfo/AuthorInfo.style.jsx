import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';
import { Wrapper } from '../Wrapper';

export const InfoWrapper = styled.div`
  ${tw`
    w-full
    grid 
    gap-y-4
    sm:(grid-cols-3 gap-5)
    lg:gap-10
    items-center
  `}
`;

export const AuthorImage = styled.div`
  ${tw`
    w-[80%]
    mx-auto
    sm:w-full
    flex
  `}

  ${({ reversed }) => reversed && tw`sm:order-2`}
`;

export const Details = styled(motion.div)`
  ${tw`
    w-full
    flex 
    flex-col
    sm:(col-start-2 col-span-2)
    xl:(col-start-2 col-span-1)
  `}

  ${({ reversed }) => reversed && tw`
    sm:(order-1 col-start-1 col-span-2)
    xl:(order-1 col-start-2 col-span-1)
  `}
`;

export const Label = styled.div`
  ${tw`
    text-accent
    font-semibold
    uppercase
    text-sm 
    lg:text-base
  `}
`;

export const Name = styled.div`
  ${tw`
    text-2xl
    lg:text-3xl 
    font-secondary
  `}
`;

export const Description = styled.div`
  ${tw`
    text-lg
    mt-2 
    flex 
    flex-col 
    gap-y-5
  `}
`;
