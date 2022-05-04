import React from 'react';
import {
  SynopsisWrapper,
  Paragraph,
  SynopsisContent,
  Quote,
} from './Synopsis.style';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import useAnimate from '../../hooks/useAnimate';
import { slideUp } from '../../animations/single';

const Synopsis = () => {
  const [synopsisRef, synopsisAnimationControls] = useAnimate({ threshold: 0.2 });

  return (
    <SynopsisWrapper id="synopsis">
      <SectionHeader
        subtitle="Synopsis"
        title="Praesent fermentum cursus risus a sodales"
      />
      <SynopsisContent
        ref={synopsisRef}
        variants={slideUp}
        initial="hidden"
        animate={synopsisAnimationControls}
      >

        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Paragraph>

        <Paragraph>Duis aute <i>irure dolor</i>  in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Paragraph>

        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>

        <Quote>&quot;Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua &quot;</Quote>

        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Paragraph>

        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>

      </SynopsisContent>
    </SynopsisWrapper>
  );
};

export default Synopsis;
