import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';
import { Wrapper } from '../../common/Wrapper';

export const HeaderWrapper = styled(motion.header)`
  ${tw`
    py-4
    w-full 
    relative 
    fixed 
    z-50 
    bg-primary
    top-0 
    left-0
  `}
`;

export const HeaderContent = styled(Wrapper)`
  ${tw`
    flex 
    justify-between 
    items-center  
    relative 
    overflow-visible
  `}
`;

export const Brand = styled(motion.a)`
  ${tw`
    text-3xl 
    text-accent
    font-secondary 
    inline-block 
    cursor-pointer
  `}
`;

export const MenuIcon = styled.button`
  ${tw`
    lg:hidden
    text-3xl 
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

export const NavItem = styled(motion.li)`
  ${tw`
    font-primary
    capitalize 
    text-lg
  `}

  ${({ isActive }) => isActive && tw`text-accent`}

  button{
    ${tw`
      font-semibold
    `}
  }
`;

export const NavigationMobile = styled.ul`
  ${tw`
    absolute 
    w-full 
    top-full 
    left-0
    bg-primary
    py-10
    flex 
    flex-col 
    gap-y-5
    px-5
    z-50
  `}

  box-shadow: rgba(100, 100, 111, 0.2) 0px 16px 18px 0px;

  ${({ isActive }) => isActive && tw`text-accent`}
`;

export const NavigationItemMobile = styled(NavItem)`
  ${tw`
    z-50 
    w-full 
  `}

  a{
    ${tw`
      inline-block 
      w-full
    `}
  }
`;
