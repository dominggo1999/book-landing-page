import React from 'react';
import { GoQuote } from 'react-icons/go';
import {
  QuotationMark,
  Item,
  Label,
  Description,
  Identity,
  Avatar,
  IdentityWrapper,
  Name,
  Occupation,
} from './Reviews.style';
import LazyLoadImage from '../../common/LazyLoadImage/LazyLoadImage';

const ReviewItem = ({ item }) => {
  return (
    <Item>
      <QuotationMark>
        <GoQuote />
      </QuotationMark>
      <Label>{item.label}</Label>
      <Description>{item.description}</Description>
      <Identity>
        <Avatar>
          <LazyLoadImage
            width={150}
            height={150}
            src={item.image}
          />
        </Avatar>
        <IdentityWrapper>
          <Name>{item.name}</Name>
          <Occupation>{item.role}, {item.company}</Occupation>
        </IdentityWrapper>
      </Identity>
    </Item>
  );
};

export default ReviewItem;
