import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';
import { Wrapper } from '../../common/Wrapper';

export const BuyNowWrapper = styled(Wrapper)`
  ${tw`
    flex 
    flex-col
    pb-10
  `}
`;

export const BrandList = styled(motion.div)`
  ${tw`
    grid
    grid-cols-2 
    md:grid-cols-4  
    gap-y-4
  `}
`;

export const BrandLogo = styled(motion.a)`
  ${tw`
    flex 
    justify-center 
    rounded-xl
  `}

  &:hover{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    svg path, svg text{
      ${tw`
        fill-current text-accent
      `}
    }
  }

  & > div {
    ${tw`
      h-32
    `}
  }

  svg {
    ${tw`
      w-32
      h-32
    `}
  }

  svg path, svg text{
    ${tw`
      fill-current text-accent-lighter
    `}
  }
`;
