import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  body {
    ${tw`
      antialiased
      font-primary  
      bg-primary 
      text-main-text
    `}
  }

  @font-face {
      font-family: 'Kollektif';
      src: url('/fonts/Kollektif/Kollektif.woff2') format('woff2'),
          url('/fonts/Kollektif/Kollektif.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Kollektif Bold';
      src: url('/fonts/Kollektif/Kollektif-Bold.woff2') format('woff2'),
          url('/fonts/Kollektif/Kollektif-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Norwester';
      src: url('/fonts/Norwester/Norwester-Regular.woff2') format('woff2'),
          url('/fonts/Norwester/Norwester-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
