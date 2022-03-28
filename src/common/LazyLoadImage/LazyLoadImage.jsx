import React, { useState } from 'react';
import { LazyLoadImage as ReactLazyLoadImage } from 'react-lazy-load-image-component';
import { ImageWrapper } from './LazyLoadImage.style';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyLoadImage = ({ width, height, ...rest }) => {
  const [loaded, setLoaded] = useState(false);
  const aspectRatio = width && height && `${width} / ${height}`;

  const imageLoaded = () => {
    setLoaded(true);
  };

  return (
    <ImageWrapper
      className={loaded && 'image-loaded'}
      style={{ aspectRatio }}
    >
      <ReactLazyLoadImage
        afterLoad={imageLoaded}
        {...rest}
      />
    </ImageWrapper>
  );
};

export default LazyLoadImage;
