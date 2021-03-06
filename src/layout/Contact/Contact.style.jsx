import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';
import { Wrapper } from '../../common/Wrapper';

export const ContactWrapper = styled(Wrapper)`
  ${tw`
    flex
    flex-col
    py-10
    md:flex-row 
    md:my-10
  `}
`;

export const Header = styled.div`
  ${tw`
    w-full
    md:w-5/12 
    md:pr-3
  `}

  *{
    ${tw`
      md:text-left
    `}
  }
`;

export const FormSection = styled(motion.div)`
  ${tw`
    w-full
    md:w-7/12 
  `}
`;
