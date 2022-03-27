import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const ChapterWrapper = styled(Wrapper)`
  ${tw`
    py-20
    flex 
    flex-col 
    gap-y-5
  `}
`;

export const ChapterList = styled.div`
  ${tw`
    grid
    grid-cols-1 
    md:grid-cols-2 
    lg:grid-cols-3 
    gap-x-2
    xl:gap-x-10
    gap-y-10
  `}
`;

export const ChapterItem = styled.div`
  ${tw`
    rounded-lg 
    flex 
  `}
`;

export const ChapterNumber = styled.div`
  ${tw`
    text-2xl 
    font-secondary 
    w-[2.75rem]
    h-[2.75rem] 
    rounded-full 
    border
    border-accent
    text-accent 
    flex 
    items-center 
    justify-center
    mr-4
  `}

  aspect-ratio : 1 / 1;
`;

export const ChapterContent = styled.div`
  ${tw`
    flex 
    flex-col
  `}
`;

export const ChapterTitle = styled.div`
  ${tw`
    font-secondary 
    text-2xl
  `}
`;

export const ChapterDescription = styled.div`
  ${tw`
    text-lg
  `}
`;
