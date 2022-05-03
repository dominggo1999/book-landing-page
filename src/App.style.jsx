import tw, { styled } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';
import { headerHeight } from './constants/headerHeight';

export const ScrollPaddingTop = createGlobalStyle`
  html {
    scroll-padding-top:${headerHeight}; /* height of sticky header */
  }
`;

export const AppWrapper = styled.div`
  ${tw`
    py-10
  `}
`;
