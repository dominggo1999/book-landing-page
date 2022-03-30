import React from 'react';
import {
  SideHeaderWrapper,
  Subtitle,
  Title,
  Description,
} from './SideHeader.style';

const SideHeader = ({ subtitle, title, description }) => {
  return (
    <SideHeaderWrapper>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </SideHeaderWrapper>
  );
};

export default SideHeader;
