import tw, { styled } from 'twin.macro';

export const StyledAccordion = styled.div`
  ${tw`
    w-full
    rounded-lg
  `}

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const AccordionContainer = styled.div`
  ${tw`
    w-full 
    relative
    overflow-hidden
  `}

  transition : height ease-in-out 200ms;
`;

export const Header = styled.button`
  ${tw`
    w-full
    flex
    justify-between
    items-center
    px-6
    py-4
  `}

  transition : color ease-in-out 200ms;

  ${({ opened }) => (opened ? tw`text-accent` : 'text-main-text')}
`;

export const Label = styled.div`
  ${tw`
    pr-4
    text-lg 
    font-secondary 
    text-left
  `}
`;

export const Icon = styled.div`
  ${tw`
    text-2xl
  `}
`;

export const Content = styled.div`
  ${tw`
    w-full
    px-6
    h-0
    opacity-0
  `}

  transition : all ease-in-out 220ms;


  &.opened {
    ${tw`
      opacity-100
      h-auto
    `}
  }
`;
