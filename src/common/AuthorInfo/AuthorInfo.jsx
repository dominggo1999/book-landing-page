import React from 'react';
import short from 'short-uuid';
import {
  InfoWrapper, AuthorImage, Details, Name, Description, Label,
} from './AuthorInfo.style';
import LazyLoadImage from '../LazyLoadImage/LazyLoadImage';
import Socmed from '../Socmed/Socmed';

const AuthorInfo = ({ details, reversed }) => {
  const {
    image, description, name, label, socmedLinks,
  } = details;

  return (
    <InfoWrapper reversed={reversed}>
      <AuthorImage reversed={reversed}>
        <LazyLoadImage
          src={image.url}
          height={image.height}
          width={image.width}
        />
      </AuthorImage>
      <Details reversed={reversed}>
        <Label>{label}</Label>
        <Name>{name}</Name>
        <Description>{description?.length > 0 && description.map((item) => {
          return (
            <p key={short.generate()}>
              {item}
            </p>
          );
        })}
        </Description>
        <Socmed socmedLinks={socmedLinks} />
      </Details>
    </InfoWrapper>
  );
};

export default AuthorInfo;
