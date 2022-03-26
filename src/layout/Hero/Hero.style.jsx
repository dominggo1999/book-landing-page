import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const HeroWrapper = styled(Wrapper)`
  ${tw`
    flex
    flex-col-reverse
    md:flex-row
    items-center
    mb-5 
    md:(
      mb-0
      h-[600px]
    )
  `}
`;

export const HeroText = styled.div`
  ${tw`
    flex 
    flex-col 
    md:w-1/2 
  `}
`;

export const SmallDescription = styled.p`
  ${tw`
    font-secondary 
    mb-1 
    text-accent
    text-sm
    md:text-base
  `}
`;

export const Title = styled.h1`
  ${tw`
    text-4xl
    md:text-6xl 
    font-secondary
    mb-2
    md:mb-5
  `}
`;

export const Description = styled.h2`
  ${tw`
    text-lg
    md:text-2xl   
    mb-6
  `}
`;

export const BuyButton = styled.button`
  ${tw`
    py-2
    px-3
    self-start
    bg-accent
    rounded 
    text-lg 
    text-white 
    hover:bg-[#e66161]
  `}
`;

export const BookCover = styled.div`
  ${tw`
    md:w-1/2 
    flex
    justify-center 
    items-center 
    py-10 
    md:p-0
  `}
`;

export const ImageWrapper = styled.div`
  ${tw`
    w-[70%] 
    lg:w-[60%]
  `}

  img{
    ${tw`
      object-cover 
      object-center
    `}
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }
`;
