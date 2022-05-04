import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import {
  SponsorsWrapper,
  SponsorList,
  SponsorItem,
} from './Sponsors.style';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import { arrayFromNumber } from '../../util/arrayFromNumber';
import { svgModulesToComponents } from '../../util/svgModulesToComponents';
import useAnimate from '../../hooks/useAnimate';
import { slideUp } from '../../animations/single';

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
  const [sponsorsRef, sponsorsAnimationControls] = useAnimate({ threshold: 0.2 });

  return (
    <SponsorsWrapper id="sponsors">
      <SectionHeader
        title="Pellentesque finibus, dui et pretium venenatis"
        subtitle="Sponsors"
      />
      <motion.div
        ref={sponsorsRef}
        variants={slideUp}
        initial="hidden"
        animate={sponsorsAnimationControls}
      >
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
      </motion.div>
    </SponsorsWrapper>
  );
};

export default Sponsors;
