import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const HeaderWrapper = styled.header`
  ${tw`
    py-4
    w-full 
  `}
`;

export const HeaderContent = styled(Wrapper)`
  ${tw`
    flex 
    justify-between 
    items-center 
  `}
`;

export const Brand = styled.div`
  ${tw`
    text-3xl 
    text-accent
    font-secondary
  `}
`;

export const Navigation = styled.ul`
  ${tw`
    items-center 
    gap-x-8 
    lg:flex 
    hidden
  `}
`;

export const NavItem = styled.li`
  ${tw`
    font-semibold
    font-primary
    capitalize 
    text-lg
  `}
`;
