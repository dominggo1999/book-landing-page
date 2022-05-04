import React from 'react';
import {
  SectionHeaderWrapper,
  Title,
  Subtitle,
} from './SectionHeader.style';
import useAnimate from '../../hooks/useAnimate';
import { slideUpShrink } from '../../animations/single';
import { headerAnimation } from '../../animations/stagger';

const SectionHeader = ({ title, subtitle }) => {
  const [headerRef, headerAnimationControls] = useAnimate();

  return (
    <SectionHeaderWrapper
      ref={headerRef}
      variants={headerAnimation}
      initial="hidden"
      animate={headerAnimationControls}
    >
      {subtitle && <Subtitle variants={slideUpShrink}>{subtitle}</Subtitle>}
      <Title variants={slideUpShrink}>{title}</Title>
    </SectionHeaderWrapper>
  );
};

export default SectionHeader;
