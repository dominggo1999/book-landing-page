import React from 'react';
import { ReactSVG } from 'react-svg';
import Marquee from 'react-fast-marquee';
import {
  SponsorsWrapper,
  SponsorList,
  SponsorItem,
} from './Sponsors.style';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import { arrayFromNumber } from '../../util/arrayFromNumber';
import { svgModulesToComponents } from '../../util/svgModulesToComponents';

const svgModules = import.meta.globEager('../../images/sponsors/*.svg');

const icons = svgModulesToComponents(svgModules);
// Add icons to sponsor list
const sponsorList = arrayFromNumber(11).map((i, id) => {
  return {
    order: i,
    icon: icons[id],
  };
});

const Sponsors = () => {
  return (
    <SponsorsWrapper id="sponsors">
      <SectionHeader
        title="Pellentesque finibus, dui et pretium venenatis"
        subtitle="Sponsors"
      />
      <Marquee
        speed={50}
        gradient={false}
      >
        <SponsorList>
          {
            sponsorList.map((item) => {
              return (
                <SponsorItem
                  key={`/images/sponsors/${item.order}.svg`}
                >
                  {item.icon()}
                </SponsorItem>
              );
            })
          }
        </SponsorList>
      </Marquee>
    </SponsorsWrapper>
  );
};

export default Sponsors;
