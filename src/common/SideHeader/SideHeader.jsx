import React from 'react';
import {
  SideHeaderWrapper,
  Subtitle,
  Title,
  Description,
} from './SideHeader.style';
import useAnimate from '../../hooks/useAnimate';
import { slideUpShrink } from '../../animations/single';
import { basicStaggerNoDelay } from '../../animations/stagger';

const SideHeader = ({ subtitle, title, description }) => {
  const [headerRef, headerAnimationControls] = useAnimate();

  return (
    <SideHeaderWrapper
      ref={headerRef}
      variants={basicStaggerNoDelay}
      initial="hidden"
      animate={headerAnimationControls}
    >
      <Subtitle variants={slideUpShrink}>{subtitle}</Subtitle>
      <Title variants={slideUpShrink}>{title}</Title>
      <Description variants={slideUpShrink}>{description}</Description>
    </SideHeaderWrapper>
  );
};

export default SideHeader;
