import React from 'react';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import {
  BuyNowWrapper,
  BrandList,
  BrandLogo,
} from './BuyNow.style';
import { arrayFromNumber } from '../../util/arrayFromNumber';
import { svgModulesToComponents } from '../../util/svgModulesToComponents';

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
  return (
    <BuyNowWrapper>
      <SectionHeader
        subtitle="Buy Now"
        title="Avalaible At"
      />
      <BrandList>
        {
          brandList?.length > 0 && brandList.map((item) => {
            return (
              <BrandLogo
                target="_blank"
                rel="noopener noreferrer"
                href={url}
                key={`/images/buy-at/${item}.svg`}
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
