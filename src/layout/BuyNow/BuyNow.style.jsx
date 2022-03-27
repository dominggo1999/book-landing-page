import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const BuyNowWrapper = styled(Wrapper)`
  ${tw`
    flex 
    flex-col
    pb-10
  `}
`;

export const BrandList = styled.div`
  ${tw`
    grid
    grid-cols-2 
    md:grid-cols-4 
    gap-10
  `}
`;

export const BrandLogo = styled.a`
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

  & > div, svg {
    ${tw`
      w-28 
      h-28
      lg:w-32 
      lg:h-32
    `}
  }

  svg {
    ${tw`
      w-32
    `}
  }

  svg path, svg text{
    ${tw`
      fill-current text-accent-lighter
    `}
  }
`;
