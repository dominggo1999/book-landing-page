import React from 'react';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import {
  BuyNowWrapper,
  BrandList,
  BrandLogo,
} from './BuyNow.style';
import { arrayFromNumber } from '../../util/arrayFromNumber';
import { svgModulesToComponents } from '../../util/svgModulesToComponents';
import useAnimate from '../../hooks/useAnimate';
import { slideUp } from '../../animations/single';
import { basicStaggerNoDelay } from '../../animations/stagger';

const url = 'https://www.google.com/search?q=bookstore';
const svgModules = import.meta.globEager('../../images/buy-at/*.svg');

const icons = svgModulesToComponents(svgModules);
// Add icons to sponsor list
const brandList = arrayFromNumber(4).map((i, id) => {
  return {
    order: i,
    icon: icons[id],
  };
});

const BuyNow = () => {
  const [buyNowRef, buyNowAnimationControls] = useAnimate();

  return (
    <BuyNowWrapper>
      <SectionHeader
        subtitle="Buy Now"
        title="Avalaible At"
      />
      <BrandList
        ref={buyNowRef}
        variants={basicStaggerNoDelay}
        initial="hidden"
        animate={buyNowAnimationControls}
      >
        {
          brandList?.length > 0 && brandList.map((item) => {
            return (
              <BrandLogo
                variants={slideUp}
                target="_blank"
                rel="noopener noreferrer"
                href={url}
                key={`/images/buy-at/${item.order}.svg`}
              >
                {item.icon()}
              </BrandLogo>
            );
          })
        }
      </BrandList>
    </BuyNowWrapper>
  );
};

export default BuyNow;
