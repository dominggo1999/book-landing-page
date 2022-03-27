import tw, { styled } from 'twin.macro';
import { Wrapper } from '../Wrapper';

export const SectionHeaderWrapper = styled(Wrapper)`
  ${tw`
    flex
    flex-col 
    items-center
    mb-3
    md:mb-8
  `}
`;

export const Title = styled.div`
  ${tw`
    text-2xl
    lg:text-4xl 
    font-secondary
    text-center
  `}
`;

export const Subtitle = styled.div`
  ${tw`
    mb-1 
    text-sm 
    lg:text-base
    text-accent
    text-center 
    uppercase
    font-bold
  `}
`;
