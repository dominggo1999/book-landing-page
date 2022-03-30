import tw, { styled } from 'twin.macro';
import { Wrapper } from '../../common/Wrapper';

export const ContactWrapper = styled(Wrapper)`
  ${tw`
    flex
    flex-col
    py-10
    md:flex-row 
    md:my-10
  `}
`;

export const Header = styled.div`
  ${tw`
    w-full
    md:w-5/12 
    md:pr-3
  `}

  *{
    ${tw`
      text-left
    `}
  }
`;

export const FormSection = styled.div`
  ${tw`
    w-full
    md:w-7/12 
  `}
`;
