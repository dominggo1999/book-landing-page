import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const FooterWrapper = styled(Wrapper)`
  ${tw`
    w-full 
    py-10
    flex 
    justify-between
    flex-wrap
    gap-y-4
  `}
`;

export const FooterCol = styled.div`
  ${tw`
    flex 
    flex-col 
  `}
`;

export const Left = styled(FooterCol)`
  ${tw`
    w-full
    md:w-1/3
  `}
`;

export const Header = styled.div`
  ${tw`
    font-secondary
    text-lg
    mb-3 
    text-accent
  `}
`;

export const Right = styled.div`
  ${tw`
    flex
    flex-wrap
    w-full
    gap-y-4
    md:w-1/2
  `}
`;

export const Information = styled(FooterCol)`
  ${tw`
    w-full
    md:w-1/2
  `}
`;

export const Contact = styled(FooterCol)`
  ${tw`
    w-full 
    md:w-1/2
  `}
`;

export const Content = styled.ul`
  ${tw`
    flex  
    flex-col 
    gap-y-2
    text-lg
    break-words
  `}
`;

export const Socmed = styled.div`
  ${tw`
    flex 
    mt-2
    gap-x-3
  `}
`;

export const SocmedIcon = styled.a`
  ${tw`
    text-xl 
    hover:text-accent
  `}
`;
