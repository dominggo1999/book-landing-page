import React from 'react';
import { ReactSVG } from 'react-svg';
import Marquee from 'react-fast-marquee';
import {
  SponsorsWrapper,
  SponsorList,
  SponsorItem,
} from './Sponsors.style';
import SectionHeader from '../../common/SectionHeader/SectionHeader';

let sponsorList = Array.from(Array(12).keys());
sponsorList = sponsorList.slice(sponsorList.indexOf(1));

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
                  key={`/images/sponsors/${item}.svg`}
                >
                  <ReactSVG
                    src={`/images/sponsors/${item}.svg`}
                  />
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
