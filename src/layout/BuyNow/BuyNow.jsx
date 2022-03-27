import React from 'react';
import { ReactSVG } from 'react-svg';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import {
  BuyNowWrapper,
  BrandList,
  BrandLogo,
} from './BuyNow.style';
import { arrayFromNumber } from '../../util/arrayFromNumber';

const url = 'https://www.google.com/search?q=bookstore';
const brandList = arrayFromNumber(4);

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
                <ReactSVG
                  src={`/images/buy-at/${item}.svg`}
                />
              </BrandLogo>
            );
          })
        }
      </BrandList>
    </BuyNowWrapper>
  );
};

export default BuyNow;
