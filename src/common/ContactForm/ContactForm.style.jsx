import tw, { styled } from 'twin.macro';

export const FormWrapper = styled.div`
  form {
    ${tw`
      w-full 
      flex
      flex-col
      gap-y-5
    `}
  }
`;

export const FieldWrapper = styled.div`
  ${tw`
    relative
  `}
`;

export const TopSection = styled.div`
  ${tw`
    flex     
    flex-wrap
    gap-y-5
    justify-between
  `}

  ${FieldWrapper}{
    ${tw`
      w-full
      lg:w-[48%] 
    `}
  }

  input, textarea{
    ${tw`
      w-full
      py-2
      px-3 
      bg-transparent 
      border
      border-accent 
      rounded-xl 
      outline-none 
      text-lg
      relative
    `}
  
    ::placeholder{
      ${tw`
        text-main-text 
        opacity-40
      `}
    }
  }
`;

export const BottomSection = styled(TopSection)`
  ${FieldWrapper}{
    ${tw`
      w-full
      h-[230px]
    `}
  }

  textarea{
    ${tw`
      h-full
    `}
  }
`;

export const SubmitButton = styled.button`
  ${tw`
    self-start
    bg-accent 
    text-white 
    rounded-md
    px-6
    py-1 
    text-lg
  `}
`;

export const ErrorMessageWrapper = styled.span`
  ${tw`
    absolute 
    text-accent 
    text-sm 
    right-0 
    top-full 
    font-secondary
  `}
`;
