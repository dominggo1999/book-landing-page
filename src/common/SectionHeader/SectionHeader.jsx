import React from 'react';
import {
  SectionHeaderWrapper,
  Title,
  Subtitle,
} from './SectionHeader.style';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <SectionHeaderWrapper>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <Title>{title}</Title>
    </SectionHeaderWrapper>
  );
};

export default SectionHeader;
