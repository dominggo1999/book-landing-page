import tw, { styled } from 'twin.macro';

export const ImageWrapper = styled.div`
  ${tw`
    w-full
  `}
  filter: blur(15px);

  img {
    width : 100%;
    opacity: 0;
  }

  &.image-loaded{
    filter: blur(0);
    transition: filter .3s 0.5s;
  }

  &.image-loaded img {
    opacity: 1;
    transition: opacity .3s 0.4s;
  } 
`;
