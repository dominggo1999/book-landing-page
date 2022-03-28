import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const SponsorsWrapper = styled(Wrapper)`
  ${tw`
    flex 
    flex-col 
  `}

  .marquee-container{
    ${tw`
      pt-5
      pb-10
    `}
  }
`;

export const SponsorList = styled.div`
  ${tw`
    w-full 
    flex  
    px-5
    gap-x-8
    md:gap-x-20 
  `}
`;

export const SponsorItem = styled.div`
  ${tw`
    rounded-md 
    py-4
    px-5
    md:px-6
  `}
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  svg {
    ${tw`
      w-[120px]
      h-[40px]
      md:w-[200px]
      md:h-[70px]
    `}
  }

  svg path, svg text{
    ${tw`
      fill-current text-accent
    `}
  }
`;
