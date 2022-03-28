import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import short from 'short-uuid';
import {
  ReviewsWrapper,
  ReviewsList,
} from './Reviews.style';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import { reviews } from '../../data/reviews';
import { breakpoints } from '../../constants/breakpoints';
import ReviewItem from './ReviewItem';

const responsiveBreakpoints = {
  // md
  0: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  [breakpoints.md]: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  // lg
  [breakpoints.lg]: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
};

const Reviews = () => {
  const swiperSettings = {
    modules: [Pagination],
    spaceBetween: 3,
    slidesPerView: 3,
    loop: true,
    breakpoints: responsiveBreakpoints,
  };

  return (
    <ReviewsWrapper id="reviews">
      <SectionHeader
        title="Praesent id turpis sed augue oxare"
        subtitle="Reviews"
      />
      <ReviewsList>
        <Swiper {...swiperSettings}>
          {
            reviews?.length > 0 && reviews.map((item) => (
              <SwiperSlide key={short.generate()}>
                <ReviewItem
                  item={item}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </ReviewsList>
    </ReviewsWrapper>

  );
};

export default Reviews;
