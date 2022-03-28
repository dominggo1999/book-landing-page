import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const ReviewsWrapper = styled(Wrapper)`
  ${tw`
    py-8
    flex
    flex-col 
    overflow-hidden
  `}
`;

export const ReviewsList = styled.div`
  ${tw`
    w-full 
  `}
`;

export const Item = styled.div`
  ${tw`
    flex
    flex-col
    rounded-lg
    border
    border-accent
    p-5
    mx-[1px]
  `}
`;

export const QuotationMark = styled.div`
  ${tw`
    text-3xl  
    text-accent
    mb-2
  `}
`;

export const Label = styled.div`
  ${tw`
    font-secondary 
    text-2xl
    mb-1
  `}
`;

export const Description = styled.div`
  ${tw`
    text-lg
    mb-3
  `}
`;

export const Identity = styled.div`
  ${tw`
    flex 
    items-center
    gap-x-3
  `}
`;

export const Avatar = styled.div`
  ${tw`
    w-1/5 
    rounded-full 
    overflow-hidden
  `}
`;

export const IdentityWrapper = styled.div`
  ${tw`
    flex 
    flex-col
  `}
`;

export const Name = styled.div`
  ${tw`
    font-secondary 
    text-accent 
    text-lg
  `}
`;

export const Occupation = styled.div`
  ${tw`
    text-sm 
    font-bold
  `}
`;
