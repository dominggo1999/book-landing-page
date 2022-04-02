import tw, { styled } from 'twin.macro';

export const SocmedWrapper = styled.div`
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
